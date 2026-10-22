import type { AboutContent } from "@/domain/about";

export const about: AboutContent = {
  seo: {
    title: "About | Barito Bahalap Media",
    description:
      "Barito Bahalap Media is the strategic communications and media operations unit of Barito Bahalap Agency, operating under documented editorial standards.",
  },

  hero: {
    eyebrow: "About Us",
    heading: ["Strategic Communications & Media."],
    body: "Barito Bahalap Media helps corporations, organizations, and institutions develop messaging, work with the media, and manage publishing operations effectively.",
  },

  story: {
    heading: "Good messaging requires a well-structured process.",
    paragraphs: [
      "Occasional content alone is rarely enough. Organizations need clear positioning, consistent messaging, and a workflow that ensures their messages reach the right people.",
      "Barito Bahalap Media brings together communications strategy, public relations, editorial work, and media operations in one team. Every engagement begins with an understanding of the organization's context, who is responsible, and what outcomes need to be achieved.",
    ],
  },

  values: {
    heading: "Our values",
    items: [
      {
        title: "Clarity",
        body: "Everyone involved understands the objectives, intended message, and next steps, ensuring that work remains focused, coordinated, and aligned.",
      },
      {
        title: "Discipline",
        body: "Consistent, measurable, and organized workflows help maintain quality and ensure that every commitment can be relied upon.",
      },
      {
        title: "Credibility",
        body: "Every engagement is grounded in facts, appropriate context, and verifiable information to build lasting trust.",
      },
    ],
  },

  principles: {
    heading: "How we work",
    items: [
      {
        number: "01",
        title: "Understand the context",
        body: "We study the organization, its audience, and existing constraints before making recommendations.",
      },
      {
        number: "02",
        title: "Define the objectives",
        body: "We agree on the expected outcomes, decision-makers, primary audience, and how progress will be measured.",
      },
      {
        number: "03",
        title: "Develop the narrative",
        body: "We align key messages, supporting evidence, tone, and channel responsibilities to maintain consistent communication without unnecessary repetition.",
      },
      {
        number: "04",
        title: "Execute",
        body: "Responsibilities, approval processes, and timelines are established before production begins.",
      },
      {
        number: "05",
        title: "Evaluate",
        body: "We review outcomes and responses, then adjust our approach based on evidence.",
      },
    ],
  },

  services: {
    intro: {
      heading: "The scope follows the objective.",
      body: "We begin with the problem to be solved and the people who need to understand the message. Channels and deliverables are determined afterward.",
    },
    items: [
      {
        id: "strategic-communications",
        number: "01",
        title: "Strategic Communications",
        summary:
          "Defining positioning, developing narratives, and aligning communications with organizational priorities.",
        deliverables: [
          "Communications strategy and planning",
          "Positioning and messaging frameworks",
          "Stakeholder and audience mapping",
          "Campaign concepts",
          "Communications risk assessments",
        ],
        outcome:
          "A clear communications direction that teams can execute consistently.",
      },
      {
        id: "public-relations",
        number: "02",
        title: "Public Relations",
        summary:
          "Building effective media relationships and delivering information accurately and on time.",
        deliverables: [
          "Media relations and outreach",
          "Press releases and media statements",
          "Information packages and briefing materials",
          "Spokesperson and interview preparation",
          "Reputation management and issue response support",
        ],
        outcome:
          "More focused interactions with the media, stakeholders, and the public.",
      },
      {
        id: "media-operations",
        number: "03",
        title: "Media Operations",
        summary:
          "Establishing workflows, editorial discipline, and reporting to ensure communication channels are managed consistently.",
        deliverables: [
          "Editorial calendars and content planning",
          "Publishing workflows and approval processes",
          "Channel and content coordination",
          "Performance monitoring and reporting",
          "Operational documentation and handover",
        ],
        outcome:
          "A structured, repeatable workflow for day-to-day media operations.",
      },
      {
        id: "content-production",
        number: "04",
        title: "Content Production and Editorial",
        summary:
          "Turning strategy into coherent content that resonates with audiences and suits the character of each channel.",
        deliverables: [
          "Editorial direction and copywriting",
          "Corporate and institutional narratives",
          "Campaign content packages",
          "Cross-channel content adaptation",
          "Editorial review and quality control",
        ],
        outcome: "Content with a clear purpose before production begins.",
      },
    ],
  },

  standards: {
    heading: "Our standards",
    body: "These standards apply at every stage, from planning through evaluation.",
    items: [
      {
        number: "01",
        title: "Accuracy",
        body: "We verify important facts, distinguish confirmed information from interpretation, and correct material errors as soon as they are identified.",
      },
      {
        number: "02",
        title: "Context",
        body: "We consider the audience, timing, and background before developing messages or recommendations.",
      },
      {
        number: "03",
        title: "Accountability",
        body: "Responsibilities, approvals, sources, and deliverables are documented clearly enough to be reviewed.",
      },
      {
        number: "04",
        title: "Confidentiality",
        body: "Unpublished client information is accessible only to the people responsible for handling it.",
      },
      {
        number: "05",
        title: "Editorial Independence",
        body: "Editorial and publishing decisions follow Barito Bahalap Media's editorial standards and applicable laws, including Indonesia's Press Law for publishing activities.",
      },
      {
        number: "06",
        title: "Integrity",
        body: "We do not make misleading claims, fabricate evidence, or conceal material facts.",
      },
    ],
  },

  agency: {
    heading: "Part of Barito Bahalap Agency",
    body: "Barito Bahalap Agency oversees contracts, finances, and compliance. Barito Bahalap Media operates with its own team, workflows, client data, and editorial decisions.",
  },

  engagement: {
    heading: "Scope is agreed upon before production begins.",
    body: "Every engagement starts with agreement on objectives, stakeholders, constraints, approval processes, and measures of success.",
    cta: {
      label: "Discuss your needs",
      href: "/en/contact",
    },
  },
};

export default about;
