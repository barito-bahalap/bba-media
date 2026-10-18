// Style
import "./AboutPage.css";
// Hooks
import { shortTitle, useAboutContent, useSiteContent } from "@/hooks";
// Components
import { Band, Button, PageHeader, SEO } from "@/components";
import { SplitSection, Tile, TileGrid, type Tone } from "@/components";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

const TONES: Tone[] = ["paper", "yellow", "teal"];

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

      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        body={hero.body}
        tone="indigo"
      />

      <SplitSection title={story.heading}>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph} className="vt-prose">
            {paragraph}
          </p>
        ))}
      </SplitSection>

      <Band tone="tint">
        <TileGrid columns={3}>
          {values.map((value, index) => (
            <Tile
              key={value.title}
              title={value.title}
              body={value.body}
              tone={pickAt(TONES, index)}
            />
          ))}
        </TileGrid>
        <div>
          <Button href={cta.href} variant="primary" brand="media">
            {cta.label}
          </Button>
        </div>
      </Band>
    </>
  );
}
