import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
// Style
import "./ArticlePage.css";
// Hooks
import { useArticle, useCorrections, useLocale, useSiteContent } from "@/hooks";
// Components
import { Band, SEO, SmartLink } from "@/components";
import NotFoundPage from "@/pages/404/NotFoundPage";
// Utils
import { formatDate } from "@/domain/format";
import { articlePageSchema } from "@/domain/schema";

const correctionLabel = {
  correction: "Koreksi",
  right_of_reply: "Hak jawab",
  clarification: "Klarifikasi",
} as const;

export default function ArticlePage() {
  const { slug } = useParams();
  const { site, seoBase } = useSiteContent();
  const { locale } = useLocale();
  const { data: article, isLoading } = useArticle(slug);
  const { data: corrections } = useCorrections(article?.id);

  if (isLoading) {
    return (
      <Band>
        <p className="vt-note">Memuat…</p>
      </Band>
    );
  }
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

      <article className="article">
        <header className="article__head vt-tone vt-tone--tint">
          <div className="vt-wrap article__head-inner">
            <p className="article__kicker">
              {article.category_name && (
                <SmartLink href={`/insight?kategori=${article.category_slug}`}>
                  {article.category_name}
                </SmartLink>
              )}
              {article.kind === "partnership" && (
                <span className="article__badge">
                  Konten Kemitraan
                  {article.sponsor_name ? ` · ${article.sponsor_name}` : ""}
                </span>
              )}
            </p>
            <h1 className="article__title">{article.title}</h1>
            <p className="article__meta">
              {article.author_name} /{" "}
              <time dateTime={article.published_at}>
                {formatDate(article.published_at, locale)}
              </time>
            </p>
          </div>
        </header>

        <div className="vt-wrap article__main">
          {article.cover_url && (
            <figure className="article__cover">
              <img src={article.cover_url} alt={article.cover_alt ?? ""} />
              {article.cover_credit && (
                <figcaption>{article.cover_credit}</figcaption>
              )}
            </figure>
          )}

          {corrections && corrections.length > 0 && (
            <aside className="article__corrections" aria-label="Koreksi">
              {corrections.map((item) => (
                <p key={item.id}>
                  <strong>{correctionLabel[item.kind]}</strong> (
                  {formatDate(item.created_at, locale)}): {item.note}
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

          <footer className="article__foot">
            <SmartLink href="/redaksi">
              Kebijakan editorial dan hak jawab
            </SmartLink>
          </footer>
        </div>
      </article>
    </>
  );
}
