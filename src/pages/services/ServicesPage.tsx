// Style
import "./ServicesPage.css";
// Hooks
import { useServicesContent, useSiteContent } from "@/hooks";
// Components
import { Checklist, CtaBand, PageHero } from "@/components";
import { SEO, Section, SectionHeader } from "@/components";
// Utils
import { breadcrumbSchema } from "@/domain/schema";
// Data
import { SECTION_ALT_TONE } from "@/data/layout";

export default function ServicesPage() {
  const { site, seoBase } = useSiteContent();
  const { services, boundaries, ctaBand } = useServicesContent();

  return (
    <>
      <SEO
        {...seoBase}
        title="Services"
        description="Strategic communications, media relations, content operations, institutional communications, editorial services, multimedia production and social media strategy from Barito Bahalap Media."
        path="/services"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Services"
        title="Communications services built around accountable process."
        description="Each service is scoped in writing, produced under agreed approval steps and reported against agreed deliverables."
      />

      {services.map((service, index) => (
        <Section
          key={service.id}
          tone={index % 2 === 1 ? SECTION_ALT_TONE : undefined}
        >
          <div className="grid-split">
            <SectionHeader title={service.title} intro={service.summary} />
            <div className="service-block">
              <Checklist items={service.scope} />
              {service.note && (
                <p className="service-block__note">{service.note}</p>
              )}
            </div>
          </div>
        </Section>
      ))}

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-split">
          <SectionHeader
            eyebrow={boundaries.eyebrow}
            title={boundaries.title}
            intro={boundaries.description}
          />
          <Checklist items={boundaries.items} />
        </div>
      </Section>

      <CtaBand {...ctaBand} brand="media" />
    </>
  );
}
