import { Button, Section, SectionHeader } from "@/components";
import { SECTION_ALT_TONE } from "@/data/layout";

interface ClosingBandProps {
  heading: string;
  body: string;
  cta: { label: string; href: string };
}

export function ClosingBand({ heading, body, cta }: ClosingBandProps) {
  return (
    <Section tone={SECTION_ALT_TONE}>
      <div className="grid-split">
        <SectionHeader title={heading} intro={body} />
        <p>
          <Button href={cta.href} variant="primary" brand="media">
            {cta.label}
          </Button>
        </p>
      </div>
    </Section>
  );
}
