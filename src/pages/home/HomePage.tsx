// Style
import "./HomePage.css";
// Hooks
import { useHomeContent, useSiteContent } from "@/hooks";
// Components
import { Button, Callout, Checklist, CtaBand, InfoCard } from "@/components";
import { SEO, Section, SectionHeader, PageHero } from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { homeSchema } from "@/domain/schema";

export default function HomePage() {
  const { site, seoBase } = useSiteContent();
  const {
    hero,
    homeIntro,
    featuredServices,
    homeWorkflow,
    homeStandards,
    homeStage,
    ctaBand,
  } = useHomeContent();

  return (
    <>
      <SEO
        {...seoBase}
        title={site.tagline}
        description={site.description}
        path="/"
        structuredData={homeSchema(site)}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
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
        aside={
          <dl className="hero-facts">
            {hero.facts.map((fact) => (
              <div className="hero-facts__row" key={fact.label}>
                <dt className="hero-facts__label">{fact.label}</dt>
                <dd className="hero-facts__value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <Section>
        <SectionHeader
          eyebrow={homeIntro.eyebrow}
          title={homeIntro.title}
          intro={homeIntro.description}
        />
        <div className="grid-cards grid-cards--3">
          {featuredServices.map((service) => (
            <InfoCard
              key={service.id}
              title={service.title}
              description={service.summary}
            />
          ))}
        </div>
        <p>
          <Button href="/services" variant="ghost" brand="media">
            All services
          </Button>
        </p>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader
            eyebrow={homeWorkflow.eyebrow}
            title={homeWorkflow.title}
            intro={homeWorkflow.description}
          />
          <div className="stack">
            <Checklist items={homeWorkflow.points} />
            <p>
              <Button href="/approach" variant="ghost" brand="media">
                Our approach
              </Button>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid-split">
          <SectionHeader
            eyebrow={homeStandards.eyebrow}
            title={homeStandards.title}
            intro={homeStandards.description}
          />
          <p>
            <Button href="/standards" variant="outline" brand="media">
              Editorial standards
            </Button>
          </p>
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <Callout title={homeStage.title}>
          <p>{homeStage.text}</p>
        </Callout>
      </Section>

      <CtaBand {...ctaBand} brand="media" />
    </>
  );
}
