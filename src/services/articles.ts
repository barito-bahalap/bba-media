import { supabase } from "@barito-bahalap/supabase";
import type {
  Article,
  ArticleSummary,
  Category,
  Correction,
  NewsroomSettings,
} from "@/domain/articles";

const SUMMARY_COLUMNS =
  "id,slug,title,excerpt,kind,sponsor_name,published_at,category_slug,category_name,author_slug,author_name,cover_url,cover_alt,cover_credit";

function client() {
  if (!supabase) throw new Error("Newsroom backend is not configured.");
  return supabase;
}

export async function fetchArticles(options?: {
  category?: string;
  limit?: number;
}): Promise<ArticleSummary[]> {
  let query = client()
    .from("published_articles")
    .select(SUMMARY_COLUMNS)
    .order("published_at", { ascending: false })
    .limit(options?.limit ?? 24);
  if (options?.category) query = query.eq("category_slug", options.category);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as ArticleSummary[];
}

export async function fetchArticle(slug: string): Promise<Article | null> {
  const { data, error } = await client()
    .from("published_articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return (data as Article | null) ?? null;
}

export async function fetchCorrections(
  articleId: string,
): Promise<Correction[]> {
  const { data, error } = await client()
    .from("corrections")
    .select("id,note,kind,created_at")
    .eq("article_id", articleId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Correction[];
}

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await client()
    .from("categories")
    .select("id,slug,name,description")
    .order("sort_order");
  if (error) throw error;
  return (data ?? []) as Category[];
}

export async function fetchSettings(): Promise<NewsroomSettings> {
  const { data, error } = await client()
    .from("newsroom_settings")
    .select(
      "section_label,editor_in_chief_name,editor_in_chief_since,legal_entity_name,correction_email",
    )
    .single();
  if (error) throw error;
  return data as NewsroomSettings;
}
