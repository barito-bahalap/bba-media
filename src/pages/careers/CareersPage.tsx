// Style
import "./CareersPage.css";
// Hooks
import { useCareersContent, useSiteContent } from "@/hooks";
// Components
import { Button, Checklist, PageHero } from "@/components";
import { SEO, Section, SectionHeader } from "@/components";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function CareersPage() {
  const { site, seoBase } = useSiteContent();
  const { careersIntro, workingModel, roleAreas, interestNote } =
    useCareersContent();

  return (
    <>
      <SEO
        {...seoBase}
        title="Careers"
        description="Working at Barito Bahalap Media: how the team works and the areas in which it grows."
        path="/careers"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />

      <PageHero
        eyebrow={careersIntro.eyebrow}
        title={careersIntro.title}
        description={careersIntro.description}
      />

      <Section>
        <div className="grid-split">
          <SectionHeader eyebrow="Working model" title="How the team works." />
          <Checklist items={workingModel} />
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader eyebrow="Areas" title="Where the team grows." />
          <div className="stack">
            <Checklist items={roleAreas} />
            <p className="prose-block">{interestNote}</p>
            <p>
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent("BBM careers: expression of interest")}`}
                variant="outline"
                brand="media"
              >
                Introduce yourself
              </Button>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
