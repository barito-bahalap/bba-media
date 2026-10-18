// Style
import "./NewsroomSection.css";
// Components
import { Button } from "@/components";
import { LatestItem, LeadStory, SideStory } from ".";
// Types
import type { NewsStory } from "@/domain/news";

interface NewsroomSectionProps {
  title: string;
  today: string;
  topTag: string;
  latestLabel: string;
  allLabel: string;
  allHref: string;
  lead: NewsStory;
  side: NewsStory[];
  latest: NewsStory[];
}

export function NewsroomSection({
  title,
  today,
  topTag,
  latestLabel,
  allLabel,
  allHref,
  lead,
  side,
  latest,
}: NewsroomSectionProps) {
  const hasLatest = latest.length > 0;

  return (
    <section className="newsroom">
      <div className="vt-wrap">
        <header className="newsroom__bar">
          <h2 className="newsroom__title">{title}</h2>
          <p className="newsroom__date">{today}</p>
          <Button href={allHref} variant="outline" brand="media" size="sm">
            {allLabel}
          </Button>
        </header>

        <div
          className={hasLatest ? "newsroom__grid has-latest" : "newsroom__grid"}
        >
          <div className="newsroom__lead">
            <LeadStory story={lead} tag={topTag} />
          </div>

          {side.length > 0 && (
            <div className="newsroom__side">
              {side.map((story) => (
                <SideStory key={story.id} story={story} />
              ))}
            </div>
          )}

          {hasLatest && (
            <aside className="newsroom__latest" aria-label={latestLabel}>
              <h3 className="newsroom__latest-title">{latestLabel}</h3>
              <ol className="newsroom__list">
                {latest.map((story, index) => (
                  <LatestItem key={story.id} index={index} story={story} />
                ))}
              </ol>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
