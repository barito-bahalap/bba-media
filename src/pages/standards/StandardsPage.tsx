// Style
import "./StandardsPage.css";
// Hooks
import { shortTitle, useSiteContent, useStandardsContent } from "@/hooks";
// Components
import { ClosingBand, InfoCard, PageHero, SEO } from "@/components";
import { Section } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function StandardsPage() {
  const { site, seoBase, href } = useSiteContent();
  const { seo, hero, items, closing } = useStandardsContent();
  const title = shortTitle(seo.title);

  return (
    <>
      <SEO
        {...seoBase}
        title={title}
        description={seo.description}
        path={href("/standards")}
        structuredData={breadcrumbSchema(site, [
          { name: site.shortName, path: href("/") },
          { name: title, path: href("/standards") },
        ])}
      />

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        description={hero.body}
      />

      <Section>
        <div className="grid-cards">
          {items.map((item) => (
            <InfoCard
              key={item.number}
              title={`${item.number}. ${item.title}`}
              description={item.body}
            />
          ))}
        </div>
      </Section>

      <ClosingBand {...closing} />
    </>
  );
}
