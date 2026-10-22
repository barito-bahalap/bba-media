// Style
import "./HomePage.css";
// Hooks
import { useHomeNews, useSelectedIndex } from "@/hooks";
import { useSiteContent, useWordmark } from "@/hooks";
import { useHomeContent, useLocale } from "@/hooks";
// Components
import { ClosingBand, SEO } from "@/components";
import { CapabilitiesSection, NewsroomSection } from "./_components";
import { MethodSection, StatementSection } from "./_components";
import { IntroSection, MastheadSection, BannerSection } from "./_components";
// Utils
import { HOME_LABELS } from "@/data/labels";
import { homeSchema } from "@/domain/schema";
// Assets
import { HomeImages } from "@/assets";

export default function HomePage() {
  const { site, seoBase, href, layout } = useSiteContent();
  const { locale } = useLocale();
  const home = useHomeContent();
  const news = useHomeNews();
  const { boxRef: mastRef, lines: mastLines } = useWordmark(site.name, 17);
  const { index: capabilityIndex, select: selectCapability } =
    useSelectedIndex();
  const { hero, positioning, capabilities, method, standards, closing } = home;
  const labels = HOME_LABELS[locale === "en" ? "en" : "id"];

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
        image={HomeImages.hero}
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
        image={HomeImages.banner}
      />

      <CapabilitiesSection
        eyebrow={capabilities.eyebrow}
        heading={capabilities.heading}
        items={capabilities.items}
        images={[
          HomeImages.capabilities1,
          HomeImages.capabilities2,
          HomeImages.capabilities3,
        ]}
        selected={capabilityIndex}
        onSelect={selectCapability}
      />

      {news.lead && (
        <NewsroomSection
          title={labels.journal}
          today={news.today}
          topTag={labels.topStory}
          latestLabel={labels.latest}
          allLabel={labels.allStories}
          allHref="/insight"
          lead={news.lead}
          side={news.side}
          latest={news.latest}
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
