// Style
import "./MastheadSection.css";
// Components
import { Wordmark } from "@/components";

interface MastheadSectionProps {
  wordmark: string;
  meta: string[];
}

export function MastheadSection({ wordmark, meta }: MastheadSectionProps) {
  return (
    <section className="masthead">
      <div className="vt-wrap masthead__inner">
        <ul className="masthead__meta">
          {meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Wordmark text={wordmark} />
      </div>
    </section>
  );
}
