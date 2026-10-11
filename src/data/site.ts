import type { FooterGroup, NavLink, SiteIdentity } from "@/domain/content";

export const site: SiteIdentity = {
  name: "Barito Bahalap Media",
  shortName: "BBM",
  tagline: "Strategic communications and media operations",
  description:
    "Barito Bahalap Media (BBM) provides strategic communications, media relations, content operations and multimedia production for corporations, public institutions and organizations, under a documented editorial independence framework.",
  url: "https://media.baritobahalap.com",
  holdingName: "Barito Bahalap Agency",
  holdingUrl: "https://baritobahalap.com",
  location: "Palangka Raya, Central Kalimantan, Indonesia",
  email: "contact@media.baritobahalap.com",
  correctionsEmail: "corrections@media.baritobahalap.com",
  foundingYear: 2026,
};

export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Editorial standards", href: "/standards" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const headerCta: NavLink = {
  label: "Start a conversation",
  href: "/contact",
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Approach", href: "/approach" },
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Standards",
    links: [
      { label: "Editorial standards", href: "/standards" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Start a conversation", href: "/contact" }],
  },
];
