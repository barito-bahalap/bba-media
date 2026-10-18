import { useSearchParams } from "react-router-dom";
// Style
import "./ArticlesPage.css";
// Hooks
import { useArticles, useCategories } from "@/hooks";
import { useNewsroomSettings, useSiteContent } from "@/hooks";
// Components
import { PageHero, SEO, Section, SmartLink } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function ArticlesPage() {
  const { site, seoBase } = useSiteContent();
  const [params] = useSearchParams();
  const category = params.get("kategori") ?? undefined;
  const { data: settings } = useNewsroomSettings();
  const { data: categories } = useCategories();
  const { data: articles, isLoading, isError } = useArticles(category);
  const label = settings?.section_label ?? "Insight";

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

      <PageHero
        eyebrow={label}
        title={`${label} Barito Bahalap Media`}
        description="Tulisan dan analisis dari redaksi BBM."
      />

      <Section>
        <nav className="category-filter" aria-label="Kategori">
          <SmartLink href="/insight">Semua</SmartLink>
          {categories?.map((c) => (
            <SmartLink key={c.id} href={`/insight?kategori=${c.slug}`}>
              {c.name}
            </SmartLink>
          ))}
        </nav>

        {isLoading && <p>Memuat…</p>}
        {isError && <p>Artikel tidak dapat dimuat saat ini.</p>}
        {articles?.length === 0 && <p>Belum ada artikel pada kategori ini.</p>}

        <ul className="article-list">
          {articles?.map((a) => (
            <li key={a.id} className="article-card">
              {a.cover_url && (
                <img src={a.cover_url} alt={a.cover_alt ?? ""} loading="lazy" />
              )}
              {a.kind === "partnership" && (
                <span className="badge">Konten Kemitraan</span>
              )}
              {a.category_name && (
                <span className="eyebrow">{a.category_name}</span>
              )}
              <h2>
                <SmartLink href={`/insight/${a.slug}`}>{a.title}</SmartLink>
              </h2>
              {a.excerpt && <p>{a.excerpt}</p>}
              <p className="meta">
                {a.author_name} ·{" "}
                <time dateTime={a.published_at}>
                  {new Date(a.published_at).toLocaleDateString("id-ID", {
                    dateStyle: "long",
                  })}
                </time>
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
