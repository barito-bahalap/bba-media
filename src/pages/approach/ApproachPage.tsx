// Style
import "./ApproachPage.css";
// Hooks
import { useApproachContent, useSiteContent } from "@/hooks";
// Components
import { Checklist, CtaBand, DataTableVariant, PageHero } from "@/components";
import { SEO, Section, SectionHeader, ProcessSteps } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";

export default function ApproachPage() {
  const { site, seoBase } = useSiteContent();
  const { stages, decisionTable, engagementTable, contracting, ctaBand } =
    useApproachContent();

  return (
    <>
      <SEO
        {...seoBase}
        title="Approach and engagement model"
        description="How Barito Bahalap Media delivers communications work: six defined stages, clear approval responsibilities and project or retainer engagement."
        path="/approach"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Approach", path: "/approach" },
        ])}
      />

      <PageHero
        eyebrow="Approach"
        title="A defined process with clear approval responsibilities."
        description="Each engagement follows the same stages, so the client knows what will be produced, who approves what and how the work is reported."
      />

      <Section>
        <SectionHeader
          eyebrow="Delivery"
          title="Six stages from brief to report."
        />
        <ProcessSteps steps={stages} />
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <SectionHeader
          eyebrow="Responsibilities"
          title="Who decides what."
          intro="Clients approve what concerns them: their facts, their brand and commissioned content before release. Editorial decisions are not subject to client approval."
        />
        <DataTableVariant
          caption="Decision responsibilities"
          columns={decisionTable.columns}
          rows={decisionTable.rows}
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Engagement models"
          title="Projects, retainers and production-only work."
        />
        <DataTableVariant
          caption="Engagement models"
          columns={engagementTable.columns}
          rows={engagementTable.rows}
        />
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader
            eyebrow={contracting.eyebrow}
            title={contracting.title}
            intro={contracting.description}
          />
          <Checklist items={contracting.items} />
        </div>
      </Section>

      <CtaBand {...ctaBand} brand="media" />
    </>
  );
}
