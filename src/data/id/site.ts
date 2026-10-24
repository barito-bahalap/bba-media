export const site = {
  name: "Barito Bahalap Media",
  shortName: "BBM",
  parentName: "Barito Bahalap Agency",
  tagline: "Komunikasi strategis. Operasi media.",
  description:
    "Barito Bahalap Media membantu organisasi membentuk pemahaman publik melalui komunikasi strategis, hubungan masyarakat, dan operasi media yang terukur.",
  url: "https://media.baritobahalap.com",
  locale: "id",
  language: "Bahasa Indonesia",
  defaultLocale: "id",
  email: "baritobahalapagency@gmail.com",

  navigation: [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Insight", href: "/insight" },
  ],

  cta: {
    label: "Diskusikan kebutuhan",
    href: "/contact",
  },
} as const;

export default site;
