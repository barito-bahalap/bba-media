// Style
import "./StatementSection.css";
// Components
import { IndexLabel } from "@/components";

interface StatementSectionProps {
  eyebrow: string;
  heading: string;
  body: string;
}

export function StatementSection({
  eyebrow,
  heading,
  body,
}: StatementSectionProps) {
  return (
    <section className="statement">
      <div className="vt-wrap statement__inner">
        <IndexLabel index={2} label={eyebrow} />
        <div className="statement__text">
          <h2 className="statement__title">{heading}</h2>
          <p className="statement__body">{body}</p>
        </div>
      </div>
    </section>
  );
}
