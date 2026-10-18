// Style
import "./HomePage.css";
// Hooks
import { useSelectedIndex, useSiteContent, useWordmark } from "@/hooks";
import { useArticles, useHomeContent, useLocale } from "@/hooks";
// Components
import { ClosingBand, SEO } from "@/components";
import { BannerSection, CapabilitiesSection } from "./_components";
import { MethodSection, StatementSection } from "./_components";
import { IntroSection, JournalSection, MastheadSection } from "./_components";
// Data
import { homeImages } from "@/data/media";
import { HOME_LABELS } from "@/data/labels";
// Utils
import { formatDate } from "@/domain/format";
import { homeSchema } from "@/domain/schema";

export default function HomePage() {
  const { site, seoBase, href, layout } = useSiteContent();
  const { locale } = useLocale();
  const home = useHomeContent();
  const { data: articles } = useArticles();
  const { boxRef: mastRef, lines: mastLines } = useWordmark(site.name, 17);
  const { index: capabilityIndex, select: selectCapability } =
    useSelectedIndex();
  const { hero, positioning, capabilities, method, standards, closing } = home;
  const labels = HOME_LABELS[locale === "en" ? "en" : "id"];

  const entries = (articles ?? []).slice(0, 3).map((article) => ({
    id: article.id,
    href: `/insight/${article.slug}`,
    title: article.title,
    category: article.category_name,
    date: formatDate(article.published_at, locale),
    cover: article.cover_url,
  }));

  return (
    <>
      <SEO
        {...seoBase}
        title={site.tagline}
        description={home.seo.description}
        path={href("/")}
        structuredData={homeSchema(site)}
      />

      <MastheadSection
        boxRef={mastRef}
        lines={mastLines}
        meta={[site.location, site.holdingName, site.email]}
      />

      <IntroSection
        eyebrow={hero.eyebrow}
        heading={hero.heading.join(" ")}
        body={hero.body}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        image={homeImages.hero}
        cardLabel={labels.capabilities}
        cardRows={capabilities.items.slice(0, 3).map((item) => ({
          label: String(item.number),
          value: item.title,
        }))}
      />

      <StatementSection
        eyebrow={positioning.eyebrow}
        heading={positioning.heading}
        body={positioning.body}
      />

      <BannerSection
        eyebrow={standards.eyebrow}
        heading={standards.heading}
        body={standards.body}
        cta={standards.cta}
        image={homeImages.banner}
      />

      <CapabilitiesSection
        eyebrow={capabilities.eyebrow}
        heading={capabilities.heading}
        items={capabilities.items}
        images={homeImages.capabilities}
        selected={capabilityIndex}
        onSelect={selectCapability}
      />

      {entries.length > 0 && (
        <JournalSection
          title={labels.journal}
          allLabel={labels.allStories}
          allHref="/insight"
          entries={entries}
          fallbackImages={homeImages.journal}
        />
      )}

      <MethodSection
        eyebrow={method.eyebrow}
        heading={method.heading}
        body={method.body}
        cta={method.cta}
      />

      <ClosingBand
        {...closing}
        index={7}
        label={layout.footer.contactLabel}
        contact={{ label: layout.footer.contactLabel, value: site.email }}
      />
    </>
  );
}
