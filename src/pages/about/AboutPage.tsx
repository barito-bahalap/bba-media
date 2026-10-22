// Style
import "./AboutPage.css";
// Hooks
import { useAboutContent, useApproachContent, useSiteContent } from "@/hooks";
import { shortTitle, useServicesContent, useStandardsContent } from "@/hooks";
// Components
import { Band, BulletList, ClosingBand, PageHeader, SEO } from "@/components";
import { SplitSection, Tile, TileGrid, type Tone } from "@/components";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

const SERVICE_TONES: Tone[] = ["paper", "tint", "paper", "yellow"];
const PRINCIPLE_TONES: Tone[] = ["paper", "teal", "yellow", "tint"];
const STANDARD_TONES: Tone[] = [
  "tint",
  "paper",
  "teal",
  "paper",
  "yellow",
  "tint",
];
const VALUE_TONES: Tone[] = ["paper", "yellow", "teal"];

// NOTE: `agency.units` and `agency.body` in the data name other BBA units. The repository
// firewall (README) forbids that, so the agency block is intentionally not rendered.
export default function AboutPage() {
  const { site, seoBase, href } = useSiteContent();
  const { seo, hero, story, values } = useAboutContent();
  const { intro, items: services, engagement } = useServicesContent();
  const { principles } = useApproachContent();
  const { hero: standardsHero, items: standards } = useStandardsContent();
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

      {/* Story */}
      <SplitSection title={story.heading}>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph} className="vt-prose">
            {paragraph}
          </p>
        ))}
      </SplitSection>

      {/* Services (each service keeps its own id, e.g. #strategic-communications) */}
      <div id="services" className="about-anchor">
        <SplitSection title={intro.heading} body={intro.body} />
        {services.map((service, index) => (
          <SplitSection
            key={service.id}
            id={service.id}
            tone={pickAt(SERVICE_TONES, index)}
            index={Number(service.number) || index + 1}
            label={service.title}
            title={service.title}
            body={service.summary}
          >
            <BulletList items={service.deliverables} />
            <p className="vt-note">{service.outcome}</p>
          </SplitSection>
        ))}
      </div>

      {/* Approach */}
      <div id="approach" className="about-anchor">
        <Band tone="paper">
          <h2 className="vt-section-title">{principles.heading}</h2>
          <TileGrid columns={3}>
            {principles.items.map((item, index) => (
              <Tile
                key={item.number}
                number={item.number}
                title={item.title}
                body={item.body}
                tone={pickAt(PRINCIPLE_TONES, index)}
              />
            ))}
          </TileGrid>
        </Band>
      </div>

      {/* Standards */}
      <div id="standards" className="about-anchor">
        <Band tone="paper">
          <h2 className="vt-section-title">
            {standardsHero.heading.join(" ")}
          </h2>
          <TileGrid columns={3}>
            {standards.map((item, index) => (
              <Tile
                key={item.number}
                number={item.number}
                title={item.title}
                body={item.body}
                tone={pickAt(STANDARD_TONES, index)}
              />
            ))}
          </TileGrid>
        </Band>
      </div>

      {/* Values */}
      <Band tone="tint">
        <TileGrid columns={3}>
          {values.map((value, index) => (
            <Tile
              key={value.title}
              title={value.title}
              body={value.body}
              tone={pickAt(VALUE_TONES, index)}
            />
          ))}
        </TileGrid>
      </Band>

      <ClosingBand
        heading={engagement.heading}
        body={engagement.body}
        cta={engagement.cta}
      />
    </>
  );
}
