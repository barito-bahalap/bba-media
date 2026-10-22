// Style
import "./AboutPage.css";
// Hooks
import { shortTitle, useAboutContent, useSiteContent } from "@/hooks";
// Components
import { Band, BulletList, ClosingBand, PageHeader, SEO } from "@/components";
import { SplitSection, Tile, TileGrid } from "@/components";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";
import { PRINCIPLE_TONES, STANDARD_TONES, VALUE_TONES } from "@/data/constants";

export default function AboutPage() {
  const { site, seoBase, href } = useSiteContent();
  const {
    seo,
    hero,
    story,
    values,
    principles,
    services,
    standards,
    agency,
    engagement,
  } = useAboutContent();

  const title = shortTitle(seo.title);

  return (
    <div className="about-page">
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

      <Band tone="paper">
        <h2 className="vt-section-title">{values.heading}</h2>
        <TileGrid columns={3}>
          {values.items.map((value, index) => (
            <Tile
              key={value.title}
              title={value.title}
              body={value.body}
              tone={pickAt(VALUE_TONES, index)}
            />
          ))}
        </TileGrid>
      </Band>

      <SplitSection id="approach" title={principles.heading}>
        <ol className="about-steps">
          {principles.items.map((item, index) => {
            const tone = pickAt(PRINCIPLE_TONES, index);
            return (
              <li
                key={item.number}
                className="about-steps__item"
                data-tone={tone}
              >
                <span className="about-steps__num">{item.number}</span>
                <div className="about-steps__text">
                  <h3 className="about-steps__title">{item.title}</h3>
                  <p className="about-steps__body">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </SplitSection>

      <Band id="services" tone="paper">
        <div className="about-intro">
          <h2 className="vt-section-title">{services.intro.heading}</h2>
          <p className="vt-prose">{services.intro.body}</p>
        </div>

        <div className="about-services">
          {services.items.map((service) => (
            <article key={service.id} id={service.id} className="about-service">
              <span className="about-service__num">{service.number}</span>
              <h3 className="about-service__title">{service.title}</h3>
              <p className="about-service__summary">{service.summary}</p>
              <BulletList items={service.deliverables} />
              <p className="vt-note">{service.outcome}</p>
            </article>
          ))}
        </div>
      </Band>

      <Band id="standards" tone="paper">
        <div className="about-intro">
          <h2 className="vt-section-title">{standards.heading}</h2>
          <p className="vt-prose">{standards.body}</p>
        </div>
        <TileGrid columns={3}>
          {standards.items.map((item, index) => (
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

      <SplitSection id="agency" title={agency.heading} body={agency.body} />

      <ClosingBand
        heading={engagement.heading}
        body={engagement.body}
        cta={engagement.cta}
      />
    </div>
  );
}
