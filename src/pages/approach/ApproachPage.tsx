// Style
import "./ApproachPage.css";
// Hooks
import { shortTitle, useApproachContent, useSiteContent } from "@/hooks";
// Components
import { Band, ClosingBand, PageHeader, SEO } from "@/components";
import { Tile, TileGrid, type Tone } from "@/components";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

const TONES: Tone[] = ["paper", "teal", "yellow", "tint"];

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

      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        body={hero.body}
        tone="yellow"
      />

      <Band tone="paper">
        <h2 className="vt-section-title">{principles.heading}</h2>
        <TileGrid columns={3}>
          {principles.items.map((item, index) => (
            <Tile
              key={item.number}
              number={item.number}
              title={item.title}
              body={item.body}
              tone={pickAt(TONES, index)}
            />
          ))}
        </TileGrid>
      </Band>

      <ClosingBand
        heading={engagement.heading}
        body={engagement.body}
        cta={cta}
      />
    </>
  );
}
