// Style
import "./HomePage.css";
// Hooks
import { useHomeContent, useSiteContent } from "@/hooks";
// Components
import { Button, InfoCard, PageHero, SEO } from "@/components";
import { ClosingBand, Section, SectionHeader } from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { homeSchema } from "@/domain/schema";

export default function HomePage() {
  const { site, seoBase, href } = useSiteContent();
  const home = useHomeContent();
  const { hero, positioning, capabilities, method, standards } = home;

  return (
    <>
      <SEO
        {...seoBase}
        title={site.tagline}
        description={home.seo.description}
        path={href("/")}
        structuredData={homeSchema(site)}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        description={hero.body}
        actions={
          <>
            <Button href={hero.primaryCta.href} variant="primary" brand="media">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              brand="media"
            >
              {hero.secondaryCta.label}
            </Button>
          </>
        }
      />

      <Section>
        <SectionHeader
          eyebrow={positioning.eyebrow}
          title={positioning.heading}
          intro={positioning.body}
        />
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader
          eyebrow={capabilities.eyebrow}
          title={capabilities.heading}
        />
        <div className="grid-cards grid-cards--3">
          {capabilities.items.map((item) => (
            <InfoCard
              key={item.number}
              title={`${item.number}. ${item.title}`}
              description={item.body}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid-split">
          <SectionHeader
            eyebrow={method.eyebrow}
            title={method.heading}
            intro={method.body}
          />
          <p>
            <Button href={method.cta.href} variant="ghost" brand="media">
              {method.cta.label}
            </Button>
          </p>
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader
            eyebrow={standards.eyebrow}
            title={standards.heading}
            intro={standards.body}
          />
          <p>
            <Button href={standards.cta.href} variant="outline" brand="media">
              {standards.cta.label}
            </Button>
          </p>
        </div>
      </Section>

      <ClosingBand {...home.closing} />
    </>
  );
}
