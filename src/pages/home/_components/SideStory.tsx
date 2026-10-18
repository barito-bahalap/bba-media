// Style
import "./SideStory.css";
// Components
import { SmartLink } from "@/components";
// Types
import type { NewsStory } from "@/domain/news";

interface SideStoryProps {
  story: NewsStory;
}

export function SideStory({ story }: SideStoryProps) {
  return (
    <article className="side-story">
      <SmartLink href={story.href} className="side-story__link">
        <div className="side-story__text">
          {story.kicker && <p className="side-story__kicker">{story.kicker}</p>}
          <h3 className="side-story__title">{story.title}</h3>
          <p className="side-story__date">{story.date}</p>
        </div>
        {story.cover && (
          <img className="side-story__img" src={story.cover} alt="" loading="lazy" />
        )}
      </SmartLink>
    </article>
  );
}
