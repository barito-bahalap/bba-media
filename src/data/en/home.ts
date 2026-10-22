export const home = {
  seo: {
    title:
      "Barito Bahalap Media | Strategic communications and media operations",
    description:
      "Strategic communications, public relations, and media operations for organizations that need clarity, credibility, and control.",
  },
  hero: {
    eyebrow: "Barito Bahalap Media",
    heading: ["Clarity is", "a strategic advantage."],
    body: "We help organizations communicate with purpose, manage their public presence, and operate media with discipline.",
    primaryCta: { label: "Discuss a brief", href: "/en/contact" },
    secondaryCta: { label: "Explore services", href: "/en/about" },
    note: "Strategy, narrative, and execution under one operating standard.",
  },
  positioning: {
    eyebrow: "What we do",
    heading:
      "Communication is not decoration. It is operational infrastructure.",
    body: "Every public-facing message shapes trust, expectations, and decisions. We connect strategic intent to clear narratives, coordinated channels, and accountable execution.",
  },
  capabilities: {
    eyebrow: "Capabilities",
    heading: "Built around the work that moves public understanding.",
    items: [
      {
        number: "01",
        title: "Strategic communications",
        body: "Positioning, message architecture, stakeholder mapping, and communications planning.",
        href: "/en/about",
      },
      {
        number: "02",
        title: "Public relations",
        body: "Media relations, press materials, spokesperson preparation, and reputation support.",
        href: "/en/about",
      },
      {
        number: "03",
        title: "Media operations",
        body: "Editorial planning, publishing workflows, channel coordination, and reporting.",
        href: "/en/about",
      },
    ],
  },
  method: {
    eyebrow: "Our approach",
    heading: "Think clearly. Align the message. Execute with control.",
    body: "We start with context and objectives, establish a shared narrative, then coordinate delivery and review what changes.",
    cta: { label: "See our approach", href: "/en/about" },
  },
  standards: {
    eyebrow: "Our standard",
    heading: "Credibility is earned through the details.",
    body: "Accuracy, context, confidentiality, and accountability are working requirements, not optional extras.",
    cta: { label: "Read our standards", href: "/en/about" },
  },
  closing: {
    heading: "Bring us the brief. We will help define the work.",
    body: "Share your objectives, constraints, and timeline. We will determine the right scope and next step.",
    cta: { label: "Start a conversation", href: "/en/contact" },
  },
} as const;

export default home;
