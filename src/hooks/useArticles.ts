import { useQuery } from "@tanstack/react-query";
import {
  fetchAllArticles,
  fetchArticle,
  fetchArticles,
  fetchCategories,
  fetchCorrections,
  fetchSettings,
} from "@/services/articles";

export function useNewsroomSettings() {
  return useQuery({ queryKey: ["settings"], queryFn: fetchSettings });
}

export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: fetchCategories });
}

export function useArticles(category?: string) {
  return useQuery({
    queryKey: ["articles", category ?? "all"],
    queryFn: () => fetchArticles({ category }),
  });
}

export function useAllArticles() {
  return useQuery({
    queryKey: ["articles", "index"],
    queryFn: fetchAllArticles,
    staleTime: 5 * 60 * 1000,
  });
}

export function useArticle(slug: string | undefined) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: () => fetchArticle(slug as string),
    enabled: Boolean(slug),
  });
}

export function useCorrections(articleId: string | undefined) {
  return useQuery({
    queryKey: ["corrections", articleId],
    queryFn: () => fetchCorrections(articleId as string),
    enabled: Boolean(articleId),
  });
}
