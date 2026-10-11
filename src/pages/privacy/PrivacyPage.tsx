// Style
import "./PrivacyPage.css";
// Hooks
import { useLegalContent, useSiteContent } from "@/hooks";
// Components
import { LegalDocument, SEO } from "@/components";

export default function PrivacyPage() {
  const { seoBase } = useSiteContent();
  const { privacy } = useLegalContent();

  return (
    <>
      <SEO
        {...seoBase}
        title={privacy.title}
        description={privacy.description}
        path="/privacy"
      />
      <LegalDocument
        title={privacy.title}
        updated={privacy.updated}
        sections={privacy.sections}
      />
    </>
  );
}
