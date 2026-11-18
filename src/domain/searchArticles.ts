export interface SearchableArticle {
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  category_name?: string | null;
  tags?: string[] | null;
  seo_title?: string | null;
  seo_description?: string | null;
  byline?: string | null;
  published_at?: string | null;
  author_name?: string | null;
  sponsor_name?: string | null;
}

type FieldKey =
  | "title"
  | "tags"
  | "category_name"
  | "seo_title"
  | "slug"
  | "excerpt"
  | "seo_description"
  | "byline"
  | "author_name"
  | "sponsor_name";

const FIELDS: readonly (readonly [FieldKey, number])[] = [
  ["title", 10],
  ["tags", 7],
  ["category_name", 5],
  ["seo_title", 4],
  ["slug", 3],
  ["excerpt", 2],
  ["seo_description", 1.5],
  ["byline", 1.5],
  ["author_name", 2],
  ["sponsor_name", 1.5],
];

export const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

export const queryTerms = (query: string) =>
  normalize(query).split(" ").filter(Boolean);

function withinOne(a: string, b: string) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (a.length < b.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

function termScore(term: string, text: string, tokens: string[]) {
  if (tokens.includes(term)) return 1;
  if (tokens.some((token) => token.startsWith(term))) return 0.8;
  if (term.length >= 3 && text.includes(term)) return 0.5;
  if (term.length >= 5 && tokens.some((token) => withinOne(term, token))) {
    return 0.4;
  }
  return 0;
}

function fieldText(article: SearchableArticle, key: FieldKey) {
  const value = article[key];
  return normalize(Array.isArray(value) ? value.join(" ") : (value ?? ""));
}

const time = (value?: string | null) => (value ? Date.parse(value) || 0 : 0);

export function searchArticles<T extends SearchableArticle>(
  articles: readonly T[],
  query: string,
  limit?: number,
): T[] {
  const terms = queryTerms(query);
  if (terms.length === 0) return [];

  const phrase = terms.join(" ");
  const scored: { article: T; score: number }[] = [];

  for (const article of articles) {
    const fields = FIELDS.map(([key, weight]) => {
      const text = fieldText(article, key);
      return { weight, text, tokens: text ? text.split(" ") : [] };
    });

    let score = 0;
    let matched = true;

    for (const term of terms) {
      let termTotal = 0;
      for (const field of fields) {
        if (!field.text) continue;
        termTotal += field.weight * termScore(term, field.text, field.tokens);
      }
      if (termTotal === 0) {
        matched = false;
        break;
      }
      score += termTotal;
    }

    if (!matched) continue;
    if (terms.length > 1 && fields[0].text.includes(phrase)) score += 10;
    scored.push({ article, score });
  }

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      time(b.article.published_at) - time(a.article.published_at),
  );

  const ranked = scored.map((item) => item.article);
  return limit ? ranked.slice(0, limit) : ranked;
}
