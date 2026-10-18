// Style
import "./BannerSection.css";
// Components
import { Button, IndexLabel } from "@/components";

interface BannerSectionProps {
  eyebrow: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
  image: string;
}

export function BannerSection({
  eyebrow,
  heading,
  body,
  cta,
  image,
}: BannerSectionProps) {
  return (
    <section className="banner">
      <div className="vt-wrap">
        <div className="banner__frame">
          <img className="banner__img" src={image} alt="" loading="lazy" />
          <div className="banner__card">
            <IndexLabel index={3} label={eyebrow} />
            <h2 className="banner__title">{heading}</h2>
            <p className="banner__body">{body}</p>
            <Button href={cta.href} variant="outline" brand="media">
              {cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
