// Style
import "./StandardsPage.css";
// Hooks
import { useSiteContent, useStandardsContent } from "@/hooks";
// Components
import { Accordion, Button, Callout, CtaBand } from "@/components";
import { DataTableVariant, InfoCard, PageHero } from "@/components";
import { SEO, Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";

export default function StandardsPage() {
  const { site, seoBase } = useSiteContent();
  const {
    standardsIntro,
    principles,
    status,
    framework,
    corrections,
    faq,
    ctaBand,
  } = useStandardsContent();

  return (
    <>
      <SEO
        {...seoBase}
        title="Editorial standards"
        description="How Barito Bahalap Media separates commissioned communications from independent editorial decisions, and the legal and ethical standards it applies."
        path="/standards"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Editorial standards", path: "/standards" },
        ])}
      />

      <PageHero
        eyebrow={standardsIntro.eyebrow}
        title={standardsIntro.title}
        description={standardsIntro.description}
      />

      <Section>
        <div className="grid-cards">
          {principles.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="stack">
          <Callout title={status.title}>
            <p>{status.text}</p>
          </Callout>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Legal framework"
          title="Standards and laws BBM works under."
        />
        <DataTableVariant
          caption="Legal and ethical framework"
          columns={framework.columns}
          rows={framework.rows}
        />
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <Callout
          title={corrections.title}
          action={
            <Button
              href={`mailto:${site.correctionsEmail}?subject=${encodeURIComponent("BBM correction request")}`}
              variant="outline"
              brand="media"
            >
              {corrections.actionLabel}
            </Button>
          }
        >
          <p>{corrections.text}</p>
        </Callout>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Questions"
          title="Frequently asked questions."
        />
        <Accordion items={faq} />
      </Section>

      <CtaBand {...ctaBand} brand="media" />
    </>
  );
}
