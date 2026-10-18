import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
// Style
import "./ArticlePage.css";
// Hooks
import { useArticle, useCorrections, useSiteContent } from "@/hooks";
// Components
import { SEO, Section, SmartLink } from "@/components";
import NotFoundPage from "@/pages/404/NotFoundPage";
// Utils
import { articlePageSchema } from "@/domain/schema";

const correctionLabel = {
  correction: "Koreksi",
  right_of_reply: "Hak jawab",
  clarification: "Klarifikasi",
} as const;

export default function ArticlePage() {
  const { slug } = useParams();
  const { site, seoBase } = useSiteContent();
  const { data: article, isLoading } = useArticle(slug);
  const { data: corrections } = useCorrections(article?.id);

  if (isLoading) return <Section>Memuat…</Section>;
  if (!article) return <NotFoundPage />;

  const path = `/insight/${article.slug}`;

  return (
    <>
      <SEO
        {...seoBase}
        title={article.seo_title ?? article.title}
        description={
          article.seo_description ?? article.excerpt ?? site.description
        }
        path={path}
        structuredData={articlePageSchema(site, article, [
          { name: "Home", path: "/" },
          { name: "Insight", path: "/insight" },
          { name: article.title, path },
        ])}
      />

      <Section>
        <article className="article">
          <header>
            {article.kind === "partnership" && (
              <p className="badge">
                Konten Kemitraan
                {article.sponsor_name ? ` · ${article.sponsor_name}` : ""}
              </p>
            )}
            {article.category_name && (
              <SmartLink href={`/insight?kategori=${article.category_slug}`}>
                {article.category_name}
              </SmartLink>
            )}
            <h1>{article.title}</h1>
            <p className="meta">
              {article.author_name} ·{" "}
              <time dateTime={article.published_at}>
                {new Date(article.published_at).toLocaleDateString("id-ID", {
                  dateStyle: "long",
                })}
              </time>
            </p>
            {article.cover_url && (
              <figure>
                <img src={article.cover_url} alt={article.cover_alt ?? ""} />
                {article.cover_credit && (
                  <figcaption>{article.cover_credit}</figcaption>
                )}
              </figure>
            )}
          </header>

          {corrections && corrections.length > 0 && (
            <aside className="corrections" aria-label="Koreksi">
              {corrections.map((c) => (
                <p key={c.id}>
                  <strong>{correctionLabel[c.kind]}</strong> (
                  {new Date(c.created_at).toLocaleDateString("id-ID")}):{" "}
                  {c.note}
                </p>
              ))}
            </aside>
          )}

          <div
            className="article__body"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.body_html),
            }}
          />

          <footer>
            <SmartLink href="/redaksi">
              Kebijakan editorial dan hak jawab
            </SmartLink>
          </footer>
        </article>
      </Section>
    </>
  );
}
