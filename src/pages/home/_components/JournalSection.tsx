// Style
import "./JournalSection.css";
// Components
import { ArticleCard, Button, IndexLabel } from "@/components";
// Utils
import { pickAt } from "@/domain/format";

export interface JournalEntry {
  id: string;
  href: string;
  title: string;
  category?: string | null;
  date: string;
  cover?: string | null;
}

interface JournalSectionProps {
  title: string;
  allLabel: string;
  allHref: string;
  entries: JournalEntry[];
  fallbackImages: string[];
}

export function JournalSection({
  title,
  allLabel,
  allHref,
  entries,
  fallbackImages,
}: JournalSectionProps) {
  return (
    <section className="journal">
      <div className="vt-wrap journal__inner">
        <div className="journal__head">
          <div className="journal__lead">
            <IndexLabel index={5} label={allLabel} />
            <h2 className="journal__title">{title}</h2>
          </div>
          <Button href={allHref} variant="outline" brand="media" size="sm">
            {allLabel}
          </Button>
        </div>

        <div className="journal__grid">
          {entries.map((entry, index) => (
            <ArticleCard
              key={entry.id}
              href={entry.href}
              title={entry.title}
              category={entry.category}
              date={entry.date}
              image={entry.cover ?? pickAt(fallbackImages, index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
