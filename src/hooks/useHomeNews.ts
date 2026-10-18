import { useArticles } from "./useArticles";
import { useLocale } from "./useLocale";
import { HOME_LABELS } from "@/data/labels";
import { sampleStories } from "@/data/sampleStories";
import { formatDate, formatLongDate } from "@/domain/format";
import type { NewsStory } from "@/domain/news";

export function useHomeNews() {
  const { locale } = useLocale();
  const { data } = useArticles();
  const labels = HOME_LABELS[locale === "en" ? "en" : "id"];
  const now = new Date().toISOString();

  const real: NewsStory[] = (data ?? []).map((article) => ({
    id: article.id,
    href: `/insight/${article.slug}`,
    title: article.title,
    kicker: article.category_name,
    date: formatDate(article.published_at, locale),
    cover: article.cover_url,
    excerpt: article.excerpt,
    badge: article.kind === "partnership" ? labels.partnership : undefined,
  }));

  const isSample = real.length === 0 && import.meta.env.DEV;
  const stories: NewsStory[] = isSample
    ? sampleStories.map((item) => ({
        id: item.id,
        href: "/insight",
        title: item.title,
        kicker: item.category_name,
        date: formatDate(now, locale),
        cover: item.cover_url,
        excerpt: item.excerpt,
        badge: labels.sample,
      }))
    : real;

  return {
    lead: stories[0],
    side: stories.slice(1, 3),
    latest: stories.slice(3, 8),
    today: formatLongDate(now, locale),
  };
}
