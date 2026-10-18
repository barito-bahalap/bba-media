export const services = {
  seo: {
    title: "Services | Barito Bahalap Media",
    description:
      "Strategic communications, public relations, and media operations designed around organizational objectives.",
  },
  hero: {
    eyebrow: "Services",
    heading: ["The right message.", "The right operation."],
    body: "A coordinated set of communications services built to turn organizational priorities into clear, consistent public-facing work.",
  },
  intro: {
    heading: "Scope follows the objective.",
    body: "We do not begin with a channel or a deliverable. We begin with the problem to solve, the people who need to understand, and the outcome that matters.",
  },
  items: [
    {
      id: "strategic-communications",
      number: "01",
      title: "Strategic communications",
      summary:
        "Define the position, establish the narrative, and align communication with organizational priorities.",
      deliverables: [
        "Communications strategy and planning",
        "Positioning and message architecture",
        "Stakeholder and audience mapping",
        "Campaign concept and narrative framework",
        "Communications risk assessment",
      ],
      outcome:
        "A clear communications direction that teams can execute consistently.",
    },
    {
      id: "public-relations",
      number: "02",
      title: "Public relations",
      summary:
        "Build productive media relationships and communicate with accuracy, relevance, and timing.",
      deliverables: [
        "Media relations and outreach",
        "Press releases and media statements",
        "Media kits and briefing materials",
        "Spokesperson and interview preparation",
        "Reputation and issue-response support",
      ],
      outcome:
        "More deliberate engagement with media, stakeholders, and the public.",
    },
    {
      id: "media-operations",
      number: "03",
      title: "Media operations",
      summary:
        "Create the workflows, editorial discipline, and reporting needed to operate communication channels reliably.",
      deliverables: [
        "Editorial calendars and content planning",
        "Publishing workflows and approvals",
        "Channel coordination and content operations",
        "Monitoring and performance reporting",
        "Operational documentation and handover",
      ],
      outcome: "A repeatable operating system for day-to-day media work.",
    },
    {
      id: "content-production",
      number: "04",
      title: "Content and editorial production",
      summary:
        "Translate strategy into content that is coherent, audience-aware, and fit for its channel.",
      deliverables: [
        "Editorial direction and copywriting",
        "Corporate and institutional narratives",
        "Campaign content packages",
        "Content adaptation across channels",
        "Editorial review and quality control",
      ],
      outcome:
        "Content that serves a defined purpose rather than filling a calendar.",
    },
  ],
  engagement: {
    heading: "A defined scope before production begins.",
    body: "Every engagement starts with objectives, stakeholders, constraints, approvals, and measures of success. Scope and deliverables are confirmed before execution.",
    cta: { label: "Discuss your requirements", href: "/en/contact" },
  },
} as const;

export default services;
