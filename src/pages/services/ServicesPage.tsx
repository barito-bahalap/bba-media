// Style
import "./ServicesPage.css";
// Hooks
import { shortTitle, useServicesContent, useSiteContent } from "@/hooks";
// Components
import { SEO, SplitSection, type Tone } from "@/components";
import { BulletList, ClosingBand, PageHeader } from "@/components";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

const TONES: Tone[] = ["paper", "tint", "paper", "yellow"];

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

      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        body={hero.body}
        tone="tint"
      />

      <SplitSection title={intro.heading} body={intro.body} />

      {items.map((service, index) => (
        <SplitSection
          key={service.id}
          id={service.id}
          tone={pickAt(TONES, index)}
          index={Number(service.number) || index + 1}
          label={service.title}
          title={service.title}
          body={service.summary}
        >
          <BulletList items={service.deliverables} />
          <p className="vt-note">{service.outcome}</p>
        </SplitSection>
      ))}

      <ClosingBand
        heading={engagement.heading}
        body={engagement.body}
        cta={engagement.cta}
      />
    </>
  );
}
