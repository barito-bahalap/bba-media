// Style
import "./ArticleCard.css";
// Components
import { SmartLink } from "@/components";

interface ArticleCardProps {
  href: string;
  title: string;
  image: string;
  category?: string | null;
  date: string;
}

export function ArticleCard({
  href,
  title,
  image,
  category,
  date,
}: ArticleCardProps) {
  return (
    <article className="article-card-home">
      <SmartLink href={href} className="article-card-home__link">
        <img
          className="article-card-home__img"
          src={image}
          alt=""
          loading="lazy"
        />
        <p className="article-card-home__meta">
          {date}
          {category ? ` / ${category}` : ""}
        </p>
        <h3 className="article-card-home__title">{title}</h3>
      </SmartLink>
    </article>
  );
}
