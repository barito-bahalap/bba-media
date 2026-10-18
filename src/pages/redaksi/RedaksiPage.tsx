// Style
import "./RedaksiPage.css";
// Hooks
import { useNewsroomSettings, useSiteContent } from "@/hooks";
// Components
import { Band, Button, DefinitionList, PageHeader, SEO } from "@/components";
import { SplitSection, Tile, TileGrid, type Tone } from "@/components";
// Data
import { redaksiIntro, redaksiPolicies } from "@/data/redaksi";
// Utils
import { pickAt } from "@/domain/format";
import { breadcrumbSchema } from "@/domain/schema";

const TONES: Tone[] = ["paper", "teal", "yellow", "paper"];

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

      <PageHeader
        eyebrow={redaksiIntro.eyebrow}
        title={redaksiIntro.title}
        body={redaksiIntro.description}
        tone="indigo"
      />

      <SplitSection title="Susunan redaksi">
        <DefinitionList
          rows={[
            {
              term: "Penerbit",
              value: settings?.legal_entity_name ?? site.holdingName,
            },
            {
              term: "Pemimpin Redaksi",
              value: chief ?? "Akan diumumkan sebelum publikasi dimulai",
            },
            { term: "Alamat", value: site.location },
          ]}
        />
      </SplitSection>

      <Band tone="tint">
        <TileGrid>
          {redaksiPolicies.map((item, index) => (
            <Tile
              key={item.title}
              title={item.title}
              body={item.text}
              tone={pickAt(TONES, index)}
            />
          ))}
        </TileGrid>
      </Band>

      <SplitSection
        tone="yellow"
        title="Pengaduan, koreksi dan hak jawab"
        body="Sertakan tautan artikel, bagian yang dipersoalkan dan data pendukung."
      >
        <div>
          <Button
            href={`mailto:${correctionEmail}?subject=${encodeURIComponent("Permintaan koreksi / hak jawab")}`}
            variant="primary"
            brand="media"
          >
            Hubungi redaksi
          </Button>
        </div>
      </SplitSection>
    </>
  );
}
