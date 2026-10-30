const SITE_NAME = "Barito Bahalap Media";
const FALLBACK_DESCRIPTION = "Barito Bahalap Media.";
const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const STRIP_PATTERNS: RegExp[] = [
  /<title>[\s\S]*?<\/title>/gi,
  /<meta\s+[^>]*name=["']description["'][^>]*>/gi,
  /<meta\s+[^>]*property=["']og:[^"']*["'][^>]*>/gi,
  /<meta\s+[^>]*name=["']twitter:[^"']*["'][^>]*>/gi,
  /<link\s+[^>]*rel=["']canonical["'][^>]*>/gi,
];

interface ArticleRow {
  slug: string;
  title: string;
  excerpt: string | null;
  cover_url: string | null;
  cover_alt: string | null;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  updated_at: string | null;
  category_name: string | null;
  author_name: string | null;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const truncate = (value: string, max: number) =>
  value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;

const html = (body: string, status: number, cache: string) =>
  new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": cache,
    },
  });

async function fetchArticle(slug: string): Promise<ArticleRow | null> {
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!base || !key) return null;

  const select = [
    "slug",
    "title",
    "excerpt",
    "cover_url",
    "cover_alt",
    "seo_title",
    "seo_description",
    "published_at",
    "updated_at",
    "category_name",
    "author_name",
  ].join(",");

  const response = await fetch(
    `${base}/rest/v1/public_articles?slug=eq.${encodeURIComponent(slug)}&select=${select}&limit=1`,
    { headers: { apikey: key, authorization: `Bearer ${key}` } },
  );
  if (!response.ok) return null;

  const rows = (await response.json()) as ArticleRow[];
  return rows[0] ?? null;
}

function buildTags(article: ArticleRow, siteUrl: string) {
  const title = `${article.seo_title || article.title} | ${SITE_NAME}`;
  const description = truncate(
    (article.seo_description || article.excerpt || FALLBACK_DESCRIPTION).trim(),
    300,
  );
  const url = `${siteUrl}/insight/${article.slug}`;
  const image = article.cover_url
    ? article.cover_url.startsWith("http")
      ? article.cover_url
      : `${siteUrl}${article.cover_url.startsWith("/") ? "" : "/"}${article.cover_url}`
    : null;

  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const u = escapeHtml(url);

  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${u}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${u}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}" />`,
  ];

  if (image) {
    lines.push(
      `<meta property="og:image" content="${escapeHtml(image)}" />`,
      `<meta property="og:image:alt" content="${escapeHtml(article.cover_alt || article.title)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    );
  }
  if (article.published_at) {
    lines.push(
      `<meta property="article:published_time" content="${escapeHtml(article.published_at)}" />`,
    );
  }
  if (article.updated_at) {
    lines.push(
      `<meta property="article:modified_time" content="${escapeHtml(article.updated_at)}" />`,
    );
  }
  if (article.category_name) {
    lines.push(
      `<meta property="article:section" content="${escapeHtml(article.category_name)}" />`,
    );
  }
  if (article.author_name) {
    lines.push(
      `<meta property="article:author" content="${escapeHtml(article.author_name)}" />`,
    );
  }

  return lines.join("\n    ");
}

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "";
  const siteUrl = (process.env.SITE_URL || origin).replace(/\/$/, "");

  const shell = await fetch(`${origin}/index.html`);
  const template = await shell.text();

  if (!SLUG_PATTERN.test(slug)) return html(template, 404, "no-store");

  let article: ArticleRow | null;
  try {
    article = await fetchArticle(slug);
  } catch {
    return html(template, 200, "public, s-maxage=60");
  }

  if (!article) return html(template, 404, "public, s-maxage=60");

  let output = template;
  for (const pattern of STRIP_PATTERNS) output = output.replace(pattern, "");
  output = output.replace(
    /<\/head>/i,
    `    ${buildTags(article, siteUrl)}\n  </head>`,
  );

  return html(output, 200, "public, s-maxage=300, stale-while-revalidate=600");
}
