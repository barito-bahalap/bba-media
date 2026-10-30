import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
// Style
import "./ArticlePage.css";
// Hooks
import { useArticlesIndex, useCorrections, useSiteContent } from "@/hooks";
import { useArticle, useLocale } from "@/hooks";
// Components
import { SEO, SmartLink } from "@/components";
import { ArticleListItem, ArticlePageSkeleton } from "./_components";
import NotFoundPage from "@/pages/404/NotFoundPage";
// Utils
import { formatDate, readingMinutes } from "@/domain/format";
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
  const { articles: index } = useArticlesIndex();

  if (isLoading) return <ArticlePageSkeleton />;
  if (!article) return <NotFoundPage />;

  const path = `/insight/${article.slug}`;
  const minutes = readingMinutes(article.body_html);

  const others = index.filter((item) => item.id !== article.id);
  const related = [
    ...others.filter((item) => item.category_slug === article.category_slug),
    ...others.filter((item) => item.category_slug !== article.category_slug),
  ].slice(0, 4);

  return (
    <>
        <SEO
        {...seoBase}
        title={article.seo_title ?? article.title}
        description={
          article.seo_description ?? article.excerpt ?? site.description
        }
        path={path}
        image={article.cover_url ?? undefined}
        type="article"
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
              <SmartLink href="/insight">Insight</SmartLink>
              {article.category_name && (
                <>
                  <span aria-hidden="true">/</span>
                  <SmartLink
                    href={`/insight?kategori=${article.category_slug}`}
                  >
                    {article.category_name}
                  </SmartLink>
                </>
              )}
              {article.kind === "partnership" && (
                <span className="article__badge">
                  Konten Kemitraan
                  {article.sponsor_name ? ` · ${article.sponsor_name}` : ""}
                </span>
              )}
            </p>
            <h1 className="article__title">{article.title}</h1>
            {article.excerpt && (
              <p className="article__lede">{article.excerpt}</p>
            )}
            <p className="article__meta">
              {article.author_name} /{" "}
              <time dateTime={article.published_at}>
                {formatDate(article.published_at, locale)}
              </time>{" "}
              / {minutes} menit baca
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

          <div className="article__layout">
            <div className="article__content">
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
            </div>

            {related.length > 0 && (
              <aside className="article__aside" aria-label="Baca juga">
                <p className="article__aside-label">Baca Juga</p>
                <div className="article__aside-list">
                  {related.map((item) => (
                    <ArticleListItem
                      key={item.id}
                      href={`/insight/${item.slug}`}
                      title={item.title}
                      image={item.cover_url}
                      category={item.category_name}
                      date={formatDate(item.published_at, locale)}
                    />
                  ))}
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
