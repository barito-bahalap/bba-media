export type ArticleKind = "editorial" | "partnership";

export interface ArticleSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  kind: ArticleKind;
  sponsor_name: string | null;
  published_at: string;
  category_slug: string | null;
  category_name: string | null;
  author_slug: string | null;
  author_name: string | null;
  cover_url: string | null;
  cover_alt: string | null;
  cover_credit: string | null;
}

export interface Article extends ArticleSummary {
  body_html: string;
  updated_at: string;
  seo_title: string | null;
  seo_description: string | null;
  canonical_url: string | null;
}

export interface Correction {
  id: string;
  note: string;
  kind: "correction" | "right_of_reply" | "clarification";
  created_at: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
}

export interface NewsroomSettings {
  section_label: string;
  editor_in_chief_name: string | null;
  editor_in_chief_since: string | null;
  legal_entity_name: string | null;
  correction_email: string | null;
}
