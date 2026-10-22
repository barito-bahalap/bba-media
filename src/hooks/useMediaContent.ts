import { useLocale } from "./useLocale";
import { HOLDING_URL, LOCATION } from "@/data/constants";
import type {
  FooterGroup,
  LegalPageContent,
  NavLink,
  SiteIdentity,
} from "@/domain/content";

const navLinks = (items: readonly NavLink[]): NavLink[] =>
  items.map((item) => ({ label: item.label, href: item.href }));

interface LegalSource {
  seo: { description: string };
  title: string;
  updated: string;
  intro: string;
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
}

function toLegalPage(doc: LegalSource): LegalPageContent {
  return {
    title: doc.title,
    description: doc.seo.description,
    updated: doc.updated,
    intro: doc.intro,
    sections: doc.sections.map((section, index) => ({
      id: `section-${index + 1}`,
      heading: section.heading,
      paragraphs: [...section.paragraphs],
    })),
  };
}

export function useSiteContent() {
  const { content, href } = useLocale();
  const { site: s, layout } = content;

  const site: SiteIdentity = {
    name: s.name,
    shortName: s.shortName,
    tagline: s.tagline,
    description: s.description,
    url: s.url,
    holdingName: s.parentName,
    holdingUrl: HOLDING_URL,
    location: LOCATION,
    email: s.email,
    correctionsEmail: s.email,
  };

  const mainNav = navLinks(s.navigation);
  const headerCta: NavLink = {
    label: s.cta.label,
    href: s.cta.href,
  };

  const footerGroups: FooterGroup[] = layout.footer.groups.map((group) => ({
    title: group.title,
    links: navLinks(group.links),
  }));

  const seoBase = { siteName: site.name, siteUrl: site.url };

  return { site, mainNav, headerCta, footerGroups, seoBase, href, layout };
}

export function useHomeContent() {
  return useLocale().content.home;
}

export function useAboutContent() {
  return useLocale().content.about;
}

export function useContactContent() {
  return useLocale().content.contact;
}

export function useLegalContent() {
  const { privacy, terms } = useLocale().content.legal;
  return { privacy: toLegalPage(privacy), terms: toLegalPage(terms) };
}

// Page titles in the data include the site name; the SEO component appends it itself.
export const shortTitle = (title: string) => title.split(" | ")[0];
