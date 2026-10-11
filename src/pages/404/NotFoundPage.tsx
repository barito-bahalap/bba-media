// Style
import "./NotFoundPage.css";
// Hooks
import { useSiteContent } from "@/hooks";
// Components
import { Button, EmptyState, SEO } from "@/components";

export default function NotFoundPage() {
  const { seoBase } = useSiteContent();

  return (
    <>
      <SEO
        {...seoBase}
        title="Page not found"
        description="The requested page could not be found."
        path="/404"
        noIndex
      />
      <EmptyState
        title="Page not found"
        sub="The address may be incorrect or the page may have moved."
        action={
          <Button href="/" variant="primary" brand="media">
            Return home
          </Button>
        }
      />
    </>
  );
}
