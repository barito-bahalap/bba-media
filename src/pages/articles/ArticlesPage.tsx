// Style
import "./ArticlesPage.css";
// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Hooks
import { useArticleSearch, useArticlesIndex } from "@/hooks";
import { useLocale, useSiteContent } from "@/hooks";
// Components
import { Band, SEO, TileGrid, ArticleCard } from "@/components";
import { CategoryFilter, SearchBar } from "@/components";
import { ArticleHero, ArticleListItem, SectionHead } from "./_components";
// Utils
import { formatDate } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";
import type { LocaleCode } from "@/i18n/locales";

type IndexArticle = ReturnType<typeof useArticlesIndex>["articles"][number];
type Scope = "all" | "category";

const PAGE_SIZE = 20;

const COPY: Record<
  LocaleCode,
  {
    results: (count: number, query: string) => string;
    noResults: (query: string) => string;
    showing: (shown: number, total: number) => string;
    more: string;
    scopeLabel: string;
    scopeAll: string;
  }
> = {
  id: {
    results: (count, query) => `${count} hasil untuk "${query}"`,
    noResults: (query) =>
      `Tidak ada hasil untuk "${query}". Coba kata kunci lain atau periksa ejaan.`,
    showing: (shown, total) => `Menampilkan ${shown} dari ${total}`,
    more: "Tampilkan lebih banyak",
    scopeLabel: "Cari di",
    scopeAll: "Semua kategori",
  },
  en: {
    results: (count, query) =>
      `${count} ${count === 1 ? "result" : "results"} for "${query}"`,
    noResults: (query) =>
      `No results for "${query}". Try another keyword or check the spelling.`,
    showing: (shown, total) => `Showing ${shown} of ${total}`,
    more: "Show more",
    scopeLabel: "Search in",
    scopeAll: "All categories",
  },
};

export default function ArticlesPage() {
  const navigate = useNavigate();
  const { site, seoBase } = useSiteContent();
  const { locale, href } = useLocale();
  const copy = COPY[locale];
  const {
    label,
    category,
    categories,
    allArticles,
    articles,
    isLoading,
    isError,
  } = useArticlesIndex();

  const [scope, setScope] = useState<Scope>("all");
  const pool = category && scope === "category" ? articles : allArticles;
  const { query, draft, setDraft, submit, results, suggestions } =
    useArticleSearch(pool);

  const resetKey = `${query}|${category ?? ""}|${scope}`;
  const [limit, setLimit] = useState({ key: resetKey, count: PAGE_SIZE });
  const visible = limit.key === resetKey ? limit.count : PAGE_SIZE;

  const categoryName = categories.find((item) => item.slug === category)?.name;

  const filters = [
    { label: "Semua", href: "/insight", active: !category },
    ...categories.map((item) => ({
      label: item.name,
      href: `/insight?kategori=${item.slug}`,
      active: item.slug === category,
    })),
  ];

  const badgeOf = (article: IndexArticle) =>
    article.kind === "partnership" ? "Konten Kemitraan" : undefined;

  const renderCard = (article: IndexArticle) => (
    <ArticleCard
      key={article.id}
      href={`/insight/${article.slug}`}
      title={article.title}
      image={article.cover_url}
      category={article.category_name}
      date={formatDate(article.published_at, locale)}
      excerpt={article.excerpt}
      badge={badgeOf(article)}
    />
  );

  const renderItem = (article: IndexArticle) => (
    <ArticleListItem
      key={article.id}
      href={`/insight/${article.slug}`}
      title={article.title}
      image={article.cover_url}
      category={article.category_name}
      date={formatDate(article.published_at, locale)}
    />
  );

  const renderMore = (shown: number, total: number) =>
    total > shown && (
      <div className="insight__more">
        <span className="vt-note">{copy.showing(shown, total)}</span>
        <button
          type="button"
          className="insight__more-btn"
          onClick={() =>
            setLimit({ key: resetKey, count: visible + PAGE_SIZE })
          }
        >
          {copy.more}
        </button>
      </div>
    );

  const searching = query.length > 0;
  const ready = !isLoading && !isError;
  const isEmpty = ready && !searching && articles.length === 0;
  const noResults = ready && searching && results.length === 0;
  const editorial = !category && !searching && articles.length > 0;

  const hero = articles[0];
  const side = articles.slice(1, 5);
  const latest = articles.slice(5, 8);
  const picks = articles.slice(8, 12);
  const archive = articles.slice(12);

  const flat = searching ? results : articles;

  return (
    <>
      <SEO
        {...seoBase}
        title={label}
        description={`${label} | Barito Bahalap Media.`}
        path="/insight"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: label, path: "/insight" },
        ])}
      />

      <Band>
        <div className="insight">
          <header className="insight__head">
            <h1 className="insight__title">{label}</h1>
            <SearchBar
              value={draft}
              onChange={setDraft}
              onSubmit={submit}
              onSelect={(path) => navigate(href(path))}
              suggestions={suggestions.map((article) => ({
                id: article.id,
                href: `/insight/${article.slug}`,
                title: article.title,
                meta: [
                  article.category_name,
                  formatDate(article.published_at, locale),
                ]
                  .filter(Boolean)
                  .join(" · "),
              }))}
            />
          </header>

          <CategoryFilter label="Kategori" items={filters} />

          {category && categoryName && (
            <div
              className="insight__scope"
              role="group"
              aria-label={copy.scopeLabel}
            >
              <span className="insight__scope-label">{copy.scopeLabel}</span>
              <button
                type="button"
                className="insight__scope-btn"
                aria-pressed={scope === "all"}
                onClick={() => setScope("all")}
              >
                {copy.scopeAll}
              </button>
              <button
                type="button"
                className="insight__scope-btn"
                aria-pressed={scope === "category"}
                onClick={() => setScope("category")}
              >
                {categoryName}
              </button>
            </div>
          )}

          {isLoading && <p className="vt-note">Memuat…</p>}
          {isError && (
            <p className="vt-note">Artikel tidak dapat dimuat saat ini.</p>
          )}
          {isEmpty && (
            <p className="vt-note">Belum ada artikel pada kategori ini.</p>
          )}
          {searching && ready && (
            <p className="vt-note" role="status">
              {results.length > 0
                ? copy.results(results.length, query)
                : copy.noResults(query)}
            </p>
          )}

          {editorial && (
            <>
              <section className="insight__top">
                <ArticleHero
                  href={`/insight/${hero.slug}`}
                  title={hero.title}
                  image={hero.cover_url}
                  category={hero.category_name}
                  date={formatDate(hero.published_at, locale)}
                  excerpt={hero.excerpt}
                  badge={badgeOf(hero)}
                />
                {side.length > 0 && (
                  <div className="insight__side">{side.map(renderItem)}</div>
                )}
              </section>

              {latest.length > 0 && (
                <section className="insight__section">
                  <SectionHead
                    index={2}
                    label="Terbaru"
                    title="Berita Terbaru"
                  />
                  <TileGrid columns={3}>{latest.map(renderCard)}</TileGrid>
                </section>
              )}

              {picks.length > 0 && (
                <section className="insight__section">
                  <SectionHead
                    index={3}
                    label="Pilihan"
                    title="Pilihan Redaksi"
                  />
                  <div className="insight__picks">
                    {renderCard(picks[0])}
                    <div className="insight__side">
                      {picks.slice(1).map(renderItem)}
                    </div>
                  </div>
                </section>
              )}

              {archive.length > 0 && (
                <section className="insight__section">
                  <SectionHead index={4} label="Arsip" title="Arsip Insight" />
                  <TileGrid columns={4}>
                    {archive.slice(0, visible).map(renderCard)}
                  </TileGrid>
                  {renderMore(
                    Math.min(visible, archive.length),
                    archive.length,
                  )}
                </section>
              )}
            </>
          )}

          {!editorial && !noResults && flat.length > 0 && (
            <>
              <TileGrid columns={3}>
                {flat.slice(0, visible).map(renderCard)}
              </TileGrid>
              {renderMore(Math.min(visible, flat.length), flat.length)}
            </>
          )}
        </div>
      </Band>
    </>
  );
}
