import { useSearchParams } from "react-router-dom";
import { useArticles, useCategories, useNewsroomSettings } from "@/hooks";

export function useArticlesIndex() {
  const [params] = useSearchParams();
  const category = params.get("kategori") ?? undefined;
  const { data: settings } = useNewsroomSettings();
  const { data: categories } = useCategories();
  const { data: articles, isLoading, isError } = useArticles(category);

  return {
    label: settings?.section_label ?? "Insight",
    category,
    categories: categories ?? [],
    articles: articles ?? [],
    isLoading,
    isError,
  };
}
