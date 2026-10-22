export const home = {
  seo: {
    title: "Barito Bahalap Media | Strategic Communications and Media",
    description:
      "Messaging strategy, media relations, content, and publishing for organizations, institutions, and public figures.",
  },
  hero: {
    eyebrow: "Barito Bahalap Media",
    heading: ["Help the public understand", "what you do."],
    body: "We develop messaging, manage media relations, and oversee publications for organizations, institutions, and public figures.",
    primaryCta: { label: "Tell us what you need", href: "/en/contact" },
    secondaryCta: { label: "Explore our services", href: "/en/about" },
    note: "Strategy, copywriting, and publishing handled by one team.",
  },
  positioning: {
    eyebrow: "What we do",
    heading: "Every public statement shapes how people perceive you.",
    body: "Press releases, social media posts, and interview responses all shape public perception. We ensure they remain consistent, accurate, and aligned with your organization's goals.",
  },
  capabilities: {
    eyebrow: "Services",
    heading: "Three things we do.",
    items: [
      {
        number: "01",
        title: "Strategic Communications",
        body: "Determining what to say, who to reach, and which channels to use.",
        href: "/en/about",
      },
      {
        number: "02",
        title: "Public Relations",
        body: "Media relations, press releases, and spokesperson preparation.",
        href: "/en/about",
      },
      {
        number: "03",
        title: "Media Operations",
        body: "Content calendars, publishing workflows, and performance reporting.",
        href: "/en/about",
      },
    ],
  },
  method: {
    eyebrow: "Our approach",
    heading: "From objectives to publication, in a clear sequence.",
    body: "We start by understanding your organization and its goals. Then we develop the messaging, execute the publishing process, and evaluate the results.",
    cta: { label: "See how we work", href: "/en/about" },
  },
  standards: {
    eyebrow: "Our standards",
    heading: "Accuracy first, speed second.",
    body: "We verify facts, consider context, and protect client information. These standards apply to every engagement.",
    cta: { label: "Read our standards", href: "/en/about" },
  },
  closing: {
    heading: "Have something to communicate to the public?",
    body: "Tell us your objectives and timeline. We'll help determine the first steps.",
    cta: { label: "Start a conversation", href: "/en/contact" },
  },
} as const;

export default home;
