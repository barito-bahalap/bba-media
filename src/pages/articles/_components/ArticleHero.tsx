// Style
import "./ArticleHero.css";
// Components
import { SmartLink } from "@barito-bahalap/components";

interface ArticleHeroProps {
  href: string;
  title: string;
  image?: string | null;
  category?: string | null;
  date: string;
  excerpt?: string | null;
  badge?: string;
}

export function ArticleHero({
  href,
  title,
  image,
  category,
  date,
  excerpt,
  badge,
}: ArticleHeroProps) {
  return (
    <article className="article-hero">
      {image ? (
        <img className="article-hero__img" src={image} alt="" />
      ) : (
        <div className="article-hero__img article-hero__img--empty" />
      )}
      <div className="article-hero__card">
        <p className="article-hero__meta">
          {date}
          {category && <span className="article-hero__cat"> / {category}</span>}
          {badge && <span className="article-hero__badge">{badge}</span>}
        </p>
        <h2 className="article-hero__title">
          <SmartLink href={href} className="article-hero__link">
            {title}
          </SmartLink>
        </h2>
        {excerpt && <p className="article-hero__excerpt">{excerpt}</p>}
        <SmartLink href={href} className="article-hero__more">
          Baca selengkapnya
        </SmartLink>
      </div>
    </article>
  );
}
