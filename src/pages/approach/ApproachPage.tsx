// Style
import "./ApproachPage.css";
// Hooks
import { shortTitle, useApproachContent, useSiteContent } from "@/hooks";
// Components
import { ClosingBand, InfoCard, PageHero, SEO } from "@/components";
import { Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function ApproachPage() {
  const { site, seoBase, href } = useSiteContent();
  const { seo, hero, principles, engagement, cta } = useApproachContent();
  const title = shortTitle(seo.title);

  return (
    <>
      <SEO
        {...seoBase}
        title={title}
        description={seo.description}
        path={href("/approach")}
        structuredData={breadcrumbSchema(site, [
          { name: site.shortName, path: href("/") },
          { name: title, path: href("/approach") },
        ])}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        description={hero.body}
      />

      <Section>
        <SectionHeader title={principles.heading} />
        <div className="grid-cards">
          {principles.items.map((item) => (
            <InfoCard
              key={item.number}
              title={`${item.number}. ${item.title}`}
              description={item.body}
            />
          ))}
        </div>
      </Section>

      <ClosingBand
        heading={engagement.heading}
        body={engagement.body}
        cta={cta}
      />
    </>
  );
}
