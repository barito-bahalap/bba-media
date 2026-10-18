// Style
import "./ServicesPage.css";
// Hooks
import { shortTitle, useServicesContent, useSiteContent } from "@/hooks";
// Components
import { Checklist, ClosingBand, PageHero, SEO } from "@/components";
import { Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";

export default function ServicesPage() {
  const { site, seoBase, href } = useSiteContent();
  const { seo, hero, intro, items, engagement } = useServicesContent();
  const title = shortTitle(seo.title);

  return (
    <>
      <SEO
        {...seoBase}
        title={title}
        description={seo.description}
        path={href("/services")}
        structuredData={breadcrumbSchema(site, [
          { name: site.shortName, path: href("/") },
          { name: title, path: href("/services") },
        ])}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        description={hero.body}
      />

      <Section>
        <SectionHeader title={intro.heading} intro={intro.body} />
      </Section>

      {items.map((service, index) => (
        <Section
          key={service.id}
          tone={index % 2 === 0 ? SECTION_ALT_TONE : undefined}
        >
          <div id={service.id} className="grid-split">
            <SectionHeader
              eyebrow={service.number}
              title={service.title}
              intro={service.summary}
            />
            <div className="service-block">
              <Checklist items={[...service.deliverables]} />
              <p className="service-block__note">{service.outcome}</p>
            </div>
          </div>
        </Section>
      ))}

      <ClosingBand
        heading={engagement.heading}
        body={engagement.body}
        cta={engagement.cta}
      />
    </>
  );
}
