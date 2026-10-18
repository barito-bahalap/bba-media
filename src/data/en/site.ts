export const site = {
  name: "Barito Bahalap Media",
  shortName: "BBM",
  parentName: "Barito Bahalap Agency",
  tagline: "Strategic communications. Media operations.",
  description:
    "Barito Bahalap Media helps organizations shape public understanding through strategic communications, public relations, and disciplined media operations.",
  url: "https://media.baritobahalap.com",
  locale: "en",
  language: "English",
  defaultLocale: "id",
  email: "media@baritobahalap.com",

  navigation: [
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "Standards", href: "/standards" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insight" },
  ],

  cta: {
    label: "Discuss a brief",
    href: "/contact",
  },
} as const;

export default site;
