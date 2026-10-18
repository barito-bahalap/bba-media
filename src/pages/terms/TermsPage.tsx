// Style
import "./TermsPage.css";
// Hooks
import { useLegalContent, useSiteContent } from "@/hooks";
// Components
import { LegalDocument, SEO } from "@/components";

export default function TermsPage() {
  const { seoBase, href } = useSiteContent();
  const { terms } = useLegalContent();

  return (
    <>
      <SEO
        {...seoBase}
        title={terms.title}
        description={terms.description}
        path={href("/terms")}
      />

      <LegalDocument
        title={terms.title}
        updated={terms.updated}
        sections={terms.sections}
      />
    </>
  );
}
