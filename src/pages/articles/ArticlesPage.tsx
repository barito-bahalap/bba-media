// Style
import "./ArticlesPage.css";
// Hooks
import { useArticlesIndex, useLocale, useSiteContent } from "@/hooks";
// Components
import { ArticleCard, Band, SEO } from "@/components";
import { CategoryFilter, PageHeader, TileGrid } from "@/components";
// Utils
import { formatDate } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

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

  return (
    <>
      <SEO
        {...seoBase}
        title={label}
        description={`${label} dari Barito Bahalap Media.`}
        path="/insight"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: label, path: "/insight" },
        ])}
      />

      <PageHeader
        eyebrow={label}
        title={`${label} Barito Bahalap Media`}
        body="Tulisan dan analisis dari redaksi BBM."
        tone="tint"
      />

      <Band>
        <CategoryFilter label="Kategori" items={filters} />

        {isLoading && <p className="vt-note">Memuat…</p>}
        {isError && (
          <p className="vt-note">Artikel tidak dapat dimuat saat ini.</p>
        )}
        {!isLoading && !isError && articles.length === 0 && (
          <p className="vt-note">Belum ada artikel pada kategori ini.</p>
        )}

        <TileGrid columns={3}>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              href={`/insight/${article.slug}`}
              title={article.title}
              image={article.cover_url}
              category={article.category_name}
              date={formatDate(article.published_at, locale)}
              excerpt={article.excerpt}
              badge={
                article.kind === "partnership" ? "Konten Kemitraan" : undefined
              }
            />
          ))}
        </TileGrid>
      </Band>
    </>
  );
}
