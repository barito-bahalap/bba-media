import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAllArticles, useCategories, useNewsroomSettings } from "@/hooks";

export function useArticlesIndex() {
  const [params] = useSearchParams();
  const category = params.get("kategori") ?? undefined;
  const { data: settings } = useNewsroomSettings();
  const { data: categories } = useCategories();
  const { data, isLoading, isError } = useAllArticles();

  const allArticles = useMemo(() => data ?? [], [data]);
  const articles = useMemo(
    () =>
      category
        ? allArticles.filter((article) => article.category_slug === category)
        : allArticles,
    [allArticles, category],
  );

  return {
    label: settings?.section_label ?? "Insight",
    category,
    categories: categories ?? [],
    allArticles,
    articles,
    isLoading,
    isError,
  };
}
