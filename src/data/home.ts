import type { HeroContent } from "@/domain/content";

export const hero: HeroContent = {
  eyebrow: "Barito Bahalap Media",
  title: "Communications that are planned, produced and accountable.",
  description:
    "BBM supports organizations with strategic communications, media relations, content operations and multimedia production. Work is scoped in writing, produced under clear approval steps and kept separate from independent editorial decisions.",
  primaryCta: { label: "Start a conversation", href: "/contact" },
  secondaryCta: { label: "Read our editorial standards", href: "/standards" },
  facts: [
    { label: "Focus", value: "Institutional and corporate communications" },
    { label: "Engagement", value: "Projects and retainers" },
    { label: "Based in", value: "Palangka Raya, Central Kalimantan" },
  ],
};

export const homeIntro = {
  eyebrow: "What we do",
  title:
    "Professional communications support for organizations with public responsibilities.",
  description:
    "BBM covers the communications cycle from message planning to production and reporting, for organizations that need consistent and accurate public communication.",
};

export const homeServiceIds = [
  "strategic-communications",
  "media-relations",
  "content-operations",
  "institutional-communications",
  "multimedia-production",
  "social-media-strategy",
];

export const homeWorkflow = {
  eyebrow: "How we work",
  title: "A defined process from brief to report.",
  description:
    "Every engagement starts with a written brief and ends with a report. Approval steps and responsibilities are agreed before production begins.",
  points: [
    "Written brief, objectives and approval contacts",
    "Communication plan reviewed before production",
    "Client approval of the accuracy of its own information",
    "Disclosure of commissioned content where required",
    "Periodic reporting on delivered work",
  ],
};

export const homeStandards = {
  eyebrow: "Editorial independence",
  title: "Commissioned communications and editorial decisions are kept apart.",
  description:
    "Editorial decisions at BBM rest with the Creative Lead. Neither the holding company nor a client directs what independent editorial work says. Commissioned communications are always identified as such.",
};

export const homeStage = {
  title: "Current stage",
  text: "BBM is in early operational development. The focus of this period is building its editorial structure, content production capability and communications practice. Completed engagements will be added to this website as they finish, with the client's consent.",
};

export const ctaBand = {
  title: "Discuss a communications requirement.",
  description:
    "Tell us about the organization, the audience and the outcome you need. We reply with the next step and the information required to scope the work.",
  primary: { label: "Start a conversation", href: "/contact" },
  secondary: { label: "Review our approach", href: "/approach" },
};
