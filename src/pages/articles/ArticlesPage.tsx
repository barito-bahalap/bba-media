// Style
import "./ArticlesPage.css";
// Hooks
import { useArticlesIndex, useLocale, useSiteContent } from "@/hooks";
// Components
import { Band, SEO, TileGrid, ArticleCard, CategoryFilter } from "@/components";
import { ArticleHero, ArticleListItem } from "./_components";
import { InsightBar, SectionHead } from "./_components";
// Utils
import { formatDate } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

type IndexArticle = ReturnType<typeof useArticlesIndex>["articles"][number];

export default function ArticlesPage() {
  const { site, seoBase } = useSiteContent();
  const { locale } = useLocale();
  const { label, category, categories, articles, isLoading, isError } =
    useArticlesIndex();

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

  const isEmpty = !isLoading && !isError && articles.length === 0;
  const editorial = !category && articles.length > 0;

  const hero = articles[0];
  const side = articles.slice(1, 5);
  const latest = articles.slice(5, 8);
  const picks = articles.slice(8, 12);
  const archive = articles.slice(12);

  const barItems = articles.slice(0, 4).map((article) => ({
    href: `/insight/${article.slug}`,
    title: article.title,
  }));

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
          <InsightBar
            title={label}
            caption="Pembaruan Terbaru"
            items={barItems}
          />

          <CategoryFilter label="Kategori" items={filters} />

          {isLoading && <p className="vt-note">Memuat…</p>}
          {isError && (
            <p className="vt-note">Artikel tidak dapat dimuat saat ini.</p>
          )}
          {isEmpty && (
            <p className="vt-note">Belum ada artikel pada kategori ini.</p>
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
                  <TileGrid columns={4}>{archive.map(renderCard)}</TileGrid>
                </section>
              )}
            </>
          )}

          {!editorial && articles.length > 0 && (
            <TileGrid columns={3}>{articles.map(renderCard)}</TileGrid>
          )}
        </div>
      </Band>
    </>
  );
}
