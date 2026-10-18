// Style
import "./IntroSection.css";
// Components
import { Button, IndexLabel } from "@/components";
import { FloatCard } from "./FloatCard";

interface Cta {
  label: string;
  href: string;
}

interface IntroSectionProps {
  eyebrow: string;
  heading: string;
  body: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  image: string;
  cardLabel: string;
  cardRows: { label: string; value: string }[];
}

export function IntroSection({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  image,
  cardLabel,
  cardRows,
}: IntroSectionProps) {
  return (
    <section className="intro">
      <div className="vt-wrap intro__inner">
        <div className="intro__copy">
          <IndexLabel index={1} label={eyebrow} />
          <h1 className="intro__title">{heading}</h1>
          <p className="intro__body">{body}</p>
          <div className="intro__actions">
            <Button href={primaryCta.href} variant="primary" brand="media">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline" brand="media">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="intro__media">
          <img className="intro__img" src={image} alt="" loading="eager" />
          <div className="intro__card">
            <FloatCard label={cardLabel} rows={cardRows} />
          </div>
        </div>
      </div>
    </section>
  );
}
