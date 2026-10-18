// Style
import "./StandardsPage.css";
// Hooks
import { shortTitle, useSiteContent, useStandardsContent } from "@/hooks";
// Components
import { Band, ClosingBand, PageHeader, SEO } from "@/components";
import { Tile, TileGrid, type Tone } from "@/components";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

const TONES: Tone[] = ["tint", "paper", "teal", "paper", "yellow", "tint"];

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

      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        body={hero.body}
        tone="teal"
      />

      <Band tone="paper">
        <TileGrid columns={3}>
          {items.map((item, index) => (
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

      <ClosingBand {...closing} />
    </>
  );
}
