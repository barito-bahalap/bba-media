export const layout = {
  skipLink: "Skip to main content",
  menu: {
    open: "Menu",
    close: "Close menu",
    label: "Main navigation",
    primaryNav: "Main navigation",
    mobileNav: "Mobile navigation",
  },
  language: {
    label: "Language",
    en: "English",
    id: "Bahasa Indonesia",
  },
  actions: {
    contact: "Discuss a brief",
    backToTop: "Back to top",
    learnMore: "Learn more",
    viewAll: "View all",
  },
  status: {
    loading: "Loading content",
    error: "Something went wrong",
    notFound: "Page not found",
  },
  footer: {
    navigationLabel: "Footer navigation",
    contactLabel: "Contact",
    statement: "Pemikiran jernih. Komunikasi tepercaya. Eksekusi konsisten.",
    rights: "Hak cipta dilindungi.",
    parentLabel: "Bagian dari Barito Bahalap Agency",
    groups: [
      {
        title: "Agency",
        links: [
          { label: "About", href: "/about" },
          { label: "Approach", href: "/approach" },
          { label: "Standards", href: "/standards" },
        ],
      },
      {
        title: "Services",
        links: [{ label: "All Services", href: "/services" }],
      },
      {
        title: "Insights",
        links: [
          { label: "Articles & Insights", href: "/insight" },
          { label: "Editorial", href: "/redaksi" },
        ],
      },
      {
        title: "Information",
        links: [
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;

export default layout;
