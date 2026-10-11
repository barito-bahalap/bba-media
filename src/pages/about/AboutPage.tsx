// Style
import "./AboutPage.css";
// Hooks
import { useAboutContent, useSiteContent } from "@/hooks";
// Components
import { Callout, Checklist, CtaBand, KeyValueList } from "@/components";
import { SEO, Section, SectionHeader, PageHero } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";

export default function AboutPage() {
  const { site, seoBase } = useSiteContent();
  const { aboutIntro, facts, structureIntro, roles, stage, ctaBand } =
    useAboutContent();

  return (
    <>
      <SEO
        {...seoBase}
        title="About"
        description="Barito Bahalap Media is the media and communications operating brand of Barito Bahalap Agency, in early operational development."
        path="/about"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        description={aboutIntro.description}
      />

      <Section>
        <KeyValueList items={facts} />
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader
            eyebrow={structureIntro.eyebrow}
            title={structureIntro.title}
            intro={structureIntro.description}
          />
          <Checklist items={roles} />
        </div>
      </Section>

      <Section>
        <Callout title={stage.title}>
          <p>{stage.text}</p>
        </Callout>
      </Section>

      <CtaBand {...ctaBand} brand="media" />
    </>
  );
}
