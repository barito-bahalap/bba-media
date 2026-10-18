// Style
import "./MethodSection.css";
// Components
import { Button, IndexLabel } from "@/components";

interface MethodSectionProps {
  eyebrow: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
}

export function MethodSection({
  eyebrow,
  heading,
  body,
  cta,
}: MethodSectionProps) {
  return (
    <section className="method">
      <div className="vt-wrap method__inner">
        <div className="method__lead">
          <IndexLabel index={6} label={eyebrow} />
          <h2 className="method__title">{heading}</h2>
        </div>
        <div className="method__side">
          <p className="method__body">{body}</p>
          <Button href={cta.href} variant="primary" brand="media">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
