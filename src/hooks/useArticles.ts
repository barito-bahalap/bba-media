import { useQuery } from "@tanstack/react-query";
import {
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
