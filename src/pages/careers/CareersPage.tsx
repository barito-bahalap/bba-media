// Style
import "./CareersPage.css";
// Hooks
import { shortTitle, useCareersContent, useSiteContent } from "@/hooks";
// Components
import { Button, InfoCard, PageHero, SEO } from "@/components";
import { Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";

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

      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading.join(" ")}
        description={hero.body}
      />

      <Section>
        <SectionHeader title={intro.heading} intro={intro.body} />
        <div className="grid-cards">
          {profiles.map((profile) => (
            <InfoCard
              key={profile.title}
              title={profile.title}
              description={profile.description}
            />
          ))}
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader title={application.heading} intro={application.body} />
          <div className="stack">
            <p>
              <Button
                href={`mailto:${application.email}?subject=${encodeURIComponent("BBM careers: introduction")}`}
                variant="outline"
                brand="media"
              >
                {application.emailLabel}
              </Button>
            </p>
            <p className="prose-block">{application.note}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
