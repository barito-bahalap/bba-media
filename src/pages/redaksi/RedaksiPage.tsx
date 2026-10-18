// Style
import "./RedaksiPage.css";
// Hooks
import { useNewsroomSettings, useSiteContent } from "@/hooks";
// Components
import {
  Button,
  Callout,
  InfoCard,
  PageHero,
  SEO,
  Section,
} from "@/components";
// Data
import { redaksiIntro, redaksiPolicies } from "@/data/redaksi";
import { SECTION_ALT_TONE } from "@/data/layout";
// Utils
import { breadcrumbSchema } from "@/domain/schema";

export default function RedaksiPage() {
  const { site, seoBase } = useSiteContent();
  const { data: settings } = useNewsroomSettings();
  const chief = settings?.editor_in_chief_name;
  const correctionEmail = settings?.correction_email ?? site.correctionsEmail;

  return (
    <>
      <SEO
        {...seoBase}
        title="Redaksi"
        description="Susunan redaksi, kebijakan editorial, hak jawab dan koreksi Barito Bahalap Media."
        path="/redaksi"
        structuredData={breadcrumbSchema(site, [
          { name: "Home", path: "/" },
          { name: "Redaksi", path: "/redaksi" },
        ])}
      />

      <PageHero {...redaksiIntro} />

      <Section>
        <h2>Susunan redaksi</h2>
        <dl className="masthead">
          <div className="masthead__row">
            <dt>Penerbit</dt>
            <dd>{settings?.legal_entity_name ?? site.holdingName}</dd>
          </div>
          <div className="masthead__row">
            <dt>Pemimpin Redaksi</dt>
            <dd>{chief ?? "Akan diumumkan sebelum publikasi dimulai"}</dd>
          </div>
          <div className="masthead__row">
            <dt>Alamat</dt>
            <dd>{site.location}</dd>
          </div>
        </dl>
      </Section>

      <Section tone={SECTION_ALT_TONE}>
        <div className="grid-cards">
          {redaksiPolicies.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.text}
            />
          ))}
        </div>
      </Section>

      <Section>
        <Callout
          title="Pengaduan, koreksi dan hak jawab"
          action={
            <Button
              href={`mailto:${correctionEmail}?subject=${encodeURIComponent("Permintaan koreksi / hak jawab")}`}
              variant="outline"
              brand="media"
            >
              Hubungi redaksi
            </Button>
          }
        >
          <p>
            Sertakan tautan artikel, bagian yang dipersoalkan dan data
            pendukung.
          </p>
        </Callout>
      </Section>
    </>
  );
}
