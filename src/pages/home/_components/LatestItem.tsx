// Style
import "./LatestItem.css";
// Components
import { SmartLink } from "@/components";
// Utils
import { pad2 } from "@/domain/format";
// Types
import type { NewsStory } from "@/domain/news";

interface LatestItemProps {
  index: number;
  story: NewsStory;
}

export function LatestItem({ index, story }: LatestItemProps) {
  return (
    <li className="latest-item">
      <SmartLink href={story.href} className="latest-item__link">
        <span className="latest-item__index">{pad2(index + 1)}</span>
        <span className="latest-item__body">
          <span className="latest-item__title">{story.title}</span>
          <span className="latest-item__date">{story.date}</span>
        </span>
      </SmartLink>
    </li>
  );
}
