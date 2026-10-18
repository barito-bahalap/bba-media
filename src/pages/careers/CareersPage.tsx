// Style
import "./CareersPage.css";
// Hooks
import { shortTitle, useCareersContent, useSiteContent } from "@/hooks";
// Components
import { Button, PageHeader, SEO } from "@/components";
import { SplitSection, Tile, TileGrid, type Tone } from "@/components";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

const TONES: Tone[] = ["tint", "yellow", "teal", "paper"];

export default function CareersPage() {
  const { site, seoBase, href } = useSiteContent();
  const { seo, hero, intro, profiles, application } = useCareersContent();
  const title = shortTitle(seo.title);

  return (
    <>
      <SEO
        {...seoBase}
        title={title}
        description={seo.description}
        path={href("/careers")}
        structuredData={breadcrumbSchema(site, [
          { name: site.shortName, path: href("/") },
          { name: title, path: href("/careers") },
        ])}
      />

      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        body={hero.body}
        tone="navy"
      />

      <SplitSection title={intro.heading} body={intro.body}>
        <TileGrid>
          {profiles.map((profile, index) => (
            <Tile
              key={profile.title}
              title={profile.title}
              body={profile.description}
              tone={pickAt(TONES, index)}
            />
          ))}
        </TileGrid>
      </SplitSection>

      <SplitSection
        tone="yellow"
        title={application.heading}
        body={application.body}
      >
        <div>
          <Button
            href={`mailto:${application.email}?subject=${encodeURIComponent("BBM careers: introduction")}`}
            variant="primary"
            brand="media"
          >
            {application.emailLabel}
          </Button>
        </div>
        <p className="vt-prose">{application.note}</p>
      </SplitSection>
    </>
  );
}
