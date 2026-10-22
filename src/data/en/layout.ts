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
          { label: "Home", href: "/en/" },
          { label: "Insights", href: "/en/insight" },
        ],
      },
      {
        title: "Information",
        links: [
          { label: "About", href: "/en/about" },
          { label: "Contact", href: "/en/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/en/privacy" },
          { label: "Terms", href: "/en/terms" },
        ],
      },
    ],
  },
} as const;

export default layout;
