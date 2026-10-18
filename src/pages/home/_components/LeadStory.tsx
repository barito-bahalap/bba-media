// Style
import "./LeadStory.css";
// Components
import { SmartLink } from "@/components";
// Types
import type { NewsStory } from "@/domain/news";

interface LeadStoryProps {
  story: NewsStory;
  tag: string;
}

export function LeadStory({ story, tag }: LeadStoryProps) {
  return (
    <article className="lead-story">
      <SmartLink href={story.href} className="lead-story__link">
        {story.cover ? (
          <img
            className="lead-story__img"
            src={story.cover}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="lead-story__img lead-story__img--empty" />
        )}
        <p className="lead-story__kicker">
          <span className="lead-story__tag">{tag}</span>
          {story.kicker && <span>{story.kicker}</span>}
          {story.badge && (
            <span className="lead-story__badge">{story.badge}</span>
          )}
        </p>
        <h3 className="lead-story__title">{story.title}</h3>
        {story.excerpt && (
          <p className="lead-story__excerpt">{story.excerpt}</p>
        )}
        <p className="lead-story__date">{story.date}</p>
      </SmartLink>
    </article>
  );
}
