// Style
import "./ArticleListItem.css";
// Components
import { SmartLink } from "@barito-bahalap/components";

interface ArticleListItemProps {
  href: string;
  title: string;
  image?: string | null;
  category?: string | null;
  date: string;
}

export function ArticleListItem({
  href,
  title,
  image,
  category,
  date,
}: ArticleListItemProps) {
  return (
    <article className="article-li">
      <SmartLink href={href} className="article-li__link">
        {image ? (
          <img className="article-li__img" src={image} alt="" loading="lazy" />
        ) : (
          <div className="article-li__img article-li__img--empty" />
        )}
        <div className="article-li__text">
          <p className="article-li__meta">
            {date}
            {category && <span className="article-li__cat"> / {category}</span>}
          </p>
          <h3 className="article-li__title">{title}</h3>
        </div>
      </SmartLink>
    </article>
  );
}
