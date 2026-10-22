import type { AboutContent } from "@/domain/about";

export const about: AboutContent = {
  seo: {
    title: "About | Barito Bahalap Media",
    description:
      "Barito Bahalap Media is the strategic communications and media operations unit of Barito Bahalap Agency, working to documented editorial and accountability standards.",
  },

  hero: {
    eyebrow: "About Us",
    heading: [
      "Strategic communications and media operations for organizations that work in the public sphere.",
    ],
    body: "Barito Bahalap Media helps corporations, agencies, and institutions define their messages, manage media relationships, and run communications through clear, accountable processes.",
  },

  story: {
    heading: "Strategy and execution must move together.",
    paragraphs: [
      "Standalone content and occasional publications are rarely enough. Organizations need a clear position, consistent messaging, and a working process that makes sure the message reaches the right public.",
      "Barito Bahalap Media brings strategic communications, public relations, editorial work, and media operations into one coordinated practice. Every engagement is designed around the organization's context, clear responsibilities, and the outcomes it intends to achieve.",
    ],
  },

  values: {
    heading: "Working values",
    items: [
      {
        title: "Clarity",
        body: "Objectives, messages, and next steps must be understood by everyone involved.",
      },
      {
        title: "Discipline",
        body: "Consistent, repeatable processes produce communications that can be relied on.",
      },
      {
        title: "Credibility",
        body: "Facts, context, and public trust are the foundation of every engagement.",
      },
    ],
  },

  principles: {
    heading: "How we work",
    items: [
      {
        number: "01",
        title: "Understand the context",
        body: "We review the organization, its audiences, its environment, and its constraints before recommending any communications step.",
      },
      {
        number: "02",
        title: "Set the objectives",
        body: "We agree on the intended outcome, the decision makers, audience priorities, and the indicators used to measure progress.",
      },
      {
        number: "03",
        title: "Build the narrative",
        body: "We align the core message, supporting evidence, tone, and the role of each channel so communications stay consistent without becoming repetitive.",
      },
      {
        number: "04",
        title: "Coordinate delivery",
        body: "Responsibilities, approval mechanisms, schedules, and workflows are set before production begins.",
      },
      {
        number: "05",
        title: "Evaluate and adjust",
        body: "We review delivery and response, identify gaps, and adjust the approach based on evidence rather than activity alone.",
      },
    ],
  },

  services: {
    intro: {
      heading: "Scope follows purpose.",
      body: "We do not start from a channel or a specific deliverable. We start from the problem to be solved, the people who need to understand the message, and the outcomes that matter to the organization.",
    },
    items: [
      {
        id: "strategic-communications",
        number: "01",
        title: "Strategic communications",
        summary:
          "Defining position, building narrative, and aligning communications with organizational priorities.",
        deliverables: [
          "Communications strategy and planning",
          "Positioning and message architecture",
          "Stakeholder and audience mapping",
          "Campaign concepts and narrative frameworks",
          "Communications risk assessment",
        ],
        outcome:
          "A clear communications direction that teams can carry out consistently.",
      },
      {
        id: "public-relations",
        number: "02",
        title: "Public relations",
        summary:
          "Building productive media relationships and delivering information that is accurate, relevant, and timely.",
        deliverables: [
          "Media relations and outreach",
          "Press releases and media statements",
          "Media kits and briefing materials",
          "Spokesperson and interview preparation",
          "Reputation management and issue response support",
        ],
        outcome:
          "More focused engagement with the media, stakeholders, and the public.",
      },
      {
        id: "media-operations",
        number: "03",
        title: "Media operations",
        summary:
          "Building the workflows, editorial discipline, and reporting systems that keep communication channels managed consistently.",
        deliverables: [
          "Editorial calendar and content planning",
          "Publishing workflow and approval mechanisms",
          "Channel coordination and content operations",
          "Performance monitoring and reporting",
          "Operational documentation and handover",
        ],
        outcome:
          "A structured, repeatable working system for day-to-day media needs.",
      },
      {
        id: "content-production",
        number: "04",
        title: "Content and editorial production",
        summary:
          "Turning strategy into content that is coherent, relevant to its audience, and suited to each channel.",
        deliverables: [
          "Editorial direction and scriptwriting",
          "Corporate and institutional narratives",
          "Campaign content packages",
          "Cross-channel content adaptation",
          "Editorial review and quality control",
        ],
        outcome:
          "Content with a clear purpose, not just filler for a publishing calendar.",
      },
    ],
  },

  standards: {
    heading: "Working standards",
    body: "These standards apply at every stage, from planning to evaluation.",
    items: [
      {
        number: "01",
        title: "Accuracy",
        body: "Key facts are verified, confirmed information is separated from interpretation, and material errors are corrected when found.",
      },
      {
        number: "02",
        title: "Context",
        body: "Audience, timing, implications, and relevant background are considered before a message or recommendation is drafted.",
      },
      {
        number: "03",
        title: "Accountability",
        body: "Responsibilities, approvals, sources, and outputs are documented clearly enough to be reviewed and answered for.",
      },
      {
        number: "04",
        title: "Confidentiality",
        body: "Clients' non-public information is accessed only under agreed authorization and is not shared with other business units under Barito Bahalap Agency.",
      },
      {
        number: "05",
        title: "Editorial independence",
        body: "Editorial and publication decisions are made under Barito Bahalap Media's editorial standards and applicable law, including the Press Law (UU Pers) for publishing activities.",
      },
      {
        number: "06",
        title: "Integrity",
        body: "We avoid misleading claims, fabricated evidence, and communication practices that deliberately obscure material facts.",
      },
    ],
  },

  agency: {
    heading: "Part of Barito Bahalap Agency",
    body: "Barito Bahalap Media operates as the communications and media unit under Barito Bahalap Agency, which oversees governance, contracts, and compliance. Barito Bahalap Media's identity, workflows, client information handling, and editorial decisions are managed separately from the other business units in the group.",
  },

  engagement: {
    heading: "A clear scope before production begins.",
    body: "Every engagement starts by setting objectives, stakeholders, constraints, approval mechanisms, and success indicators. Scope and deliverables are agreed before work begins.",
    cta: {
      label: "Discuss your needs",
      href: "/en/contact",
    },
  },
};

export default about;
