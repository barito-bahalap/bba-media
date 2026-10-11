import type { Service } from "@/domain/content";

export const services: Service[] = [
  {
    id: "strategic-communications",
    title: "Strategic communications and message planning",
    summary:
      "Structured communication plans that define audiences, messages and channels before any content is produced.",
    scope: [
      "Audience and stakeholder mapping",
      "Message architecture and key narratives",
      "Communication calendar and channel plan",
      "Sensitivity review before release",
    ],
  },
  {
    id: "media-relations",
    title: "Media relations",
    summary:
      "Preparation and coordination of an organization's communication with journalists and media outlets.",
    scope: [
      "Media lists and outreach planning",
      "Press statements and briefing materials",
      "Interview and briefing preparation",
      "Monitoring of coverage relevant to the client",
    ],
    note: "Coverage is decided independently by each outlet. BBM does not guarantee coverage and does not make undisclosed payments for it.",
  },
  {
    id: "content-operations",
    title: "Content operations and copywriting",
    summary:
      "Planning, writing and managing recurring content so that organizational communication stays consistent over time.",
    scope: [
      "Editorial calendar and content planning",
      "Copywriting and editing for institutional channels",
      "Style and terminology guidelines",
      "Review and approval workflow",
    ],
  },
  {
    id: "institutional-communications",
    title: "Public and institutional communications",
    summary:
      "Communication support for public information, official announcements and stakeholder updates.",
    scope: [
      "Official statements and announcements",
      "Public information materials",
      "Stakeholder and community updates",
      "Communication support for programs and events",
    ],
  },
  {
    id: "editorial-services",
    title: "Editorial and publication services",
    summary:
      "Editing and publication management carried out under independent editorial control and the applicable legal and ethical standards.",
    scope: [
      "Editorial planning and fact-checking",
      "Editing and quality control",
      "Publication management",
      "Handling of corrections and right of reply",
    ],
    note: "Activities that qualify as press publication follow Law No. 40 of 1999 on the Press and the Journalistic Code of Ethics. See the editorial standards page for BBM's current status.",
  },
  {
    id: "multimedia-production",
    title: "Multimedia production",
    summary:
      "Photography, video and graphic production for institutional and corporate use.",
    scope: [
      "Photography and videography",
      "Short-form video and documentation",
      "Graphic and layout design",
      "Asset management and delivery formats",
    ],
  },
  {
    id: "social-media-strategy",
    title: "Social media strategy and management",
    summary:
      "Channel strategy and day-to-day management of organizational accounts, with clear approval rules.",
    scope: [
      "Channel strategy and content planning",
      "Publishing and community management",
      "Approval and escalation rules",
      "Periodic performance reporting",
    ],
  },
];

export const boundaries = {
  eyebrow: "Boundaries",
  title: "What BBM does not do.",
  description:
    "These limits protect clients, audiences and BBM's own credibility. They apply to every engagement.",
  items: [
    "Present commissioned content as independent editorial work",
    "Create or operate fake accounts or coordinated inauthentic activity",
    "Guarantee media coverage or pay for it without disclosure",
    "Produce material it knows to be false or misleading",
    "Share client information with other BBA operating units without the client's approval",
  ],
};
