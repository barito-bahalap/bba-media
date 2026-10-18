// Style
import "./AboutPage.css";
// Hooks
import { shortTitle, useAboutContent, useSiteContent } from "@/hooks";
// Components
import { Button, InfoCard, PageHero, SEO } from "@/components";
import { Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";

// NOTE: `agency.units` and `agency.body` in the data name other BBA units. The repository
// firewall (README) forbids that, so the agency block is intentionally not rendered.
export default function AboutPage() {
  const { site, seoBase, href } = useSiteContent();
  const { seo, hero, story, values, cta } = useAboutContent();
  const title = shortTitle(seo.title);

  return (
    <>
      <SEO
        {...seoBase}
        title={title}
        description={seo.description}
        path={href("/about")}
        structuredData={breadcrumbSchema(site, [
          { name: site.shortName, path: href("/") },
          { name: title, path: href("/about") },
        ])}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        description={hero.body}
      />

      <Section>
        <div className="grid-split">
          <SectionHeader title={story.heading} />
          <div className="stack">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="prose-block">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-cards grid-cards--3">
          {values.map((value) => (
            <InfoCard
              key={value.title}
              title={value.title}
              description={value.body}
            />
          ))}
        </div>
        <p>
          <Button href={cta.href} variant="primary" brand="media">
            {cta.label}
          </Button>
        </p>
      </Section>
    </>
  );
}
