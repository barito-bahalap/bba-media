export const layout = {
  skipLink: "Skip to main content",
  menu: {
    open: "Open menu",
    close: "Close menu",
    label: "Primary navigation",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
  },
  language: {
    label: "Language",
    en: "English",
    id: "Indonesian",
  },
  actions: {
    contact: "Tell us what you need",
    backToTop: "Back to top",
    learnMore: "Learn more",
    viewAll: "View all",
  },
  status: {
    loading: "Loading",
    error: "An error occurred",
    notFound: "Page not found",
  },
  footer: {
    navigationLabel: "Navigation",
    contactLabel: "Contact",
    rights: "All rights reserved.",
    statement: "Clear, accountable communication.",
    parentLabel: "Part of Barito Bahalap Agency",
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
