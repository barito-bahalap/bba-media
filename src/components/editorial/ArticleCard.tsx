// Style
import "./ArticleCard.css";
// Components
import { SmartLink } from "@barito-bahalap/components";

interface ArticleCardProps {
  href: string;
  title: string;
  image?: string | null;
  category?: string | null;
  date: string;
  badge?: string;
  excerpt?: string | null;
}

export function ArticleCard({
  href,
  title,
  image,
  category,
  date,
  badge,
  excerpt,
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <SmartLink href={href} className="article-card__link">
        {image ? (
          <img
            className="article-card__img"
            src={image}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="article-card__img article-card__img--empty" />
        )}
        <p className="article-card__meta">
          {date}
          {category && <span className="article-card__cat"> / {category}</span>}
          {badge && <span className="article-card__badge">{badge}</span>}
        </p>
        <h3 className="article-card__title">{title}</h3>
        {excerpt && <p className="article-card__excerpt">{excerpt}</p>}
      </SmartLink>
    </article>
  );
}
