import type { Stage, TableContent } from "@/domain/content";

export const stages: Stage[] = [
  {
    title: "Brief and objectives",
    description:
      "A written brief records the organization, audiences, objectives, constraints and approval contacts.",
    output: "Signed brief and agreed scope.",
  },
  {
    title: "Planning",
    description:
      "Message architecture, channel plan, calendar and production schedule are prepared and reviewed with the client.",
    output: "Communication plan.",
  },
  {
    title: "Production",
    description:
      "Writing, design and multimedia production by the assigned BBM team, led by the Creative Lead.",
    output: "Draft materials.",
  },
  {
    title: "Review and approval",
    description:
      "The client reviews the accuracy of its own information and the use of its brand. Creative and editorial decisions remain with BBM's Creative Lead.",
    output: "Approved materials with a record of changes.",
  },
  {
    title: "Release",
    description:
      "Materials are published or handed over through the channels agreed in the scope, with disclosure of commissioned content where required.",
    output: "Released materials.",
  },
  {
    title: "Reporting and review",
    description:
      "Periodic reporting on delivered work and agreed indicators, followed by a planning review.",
    output: "Service report.",
  },
];

export const decisionTable: TableContent = {
  columns: ["Area", "The client decides", "BBM decides"],
  rows: [
    [
      "Facts about the client",
      "Accuracy and completeness of its own information",
      "How verified information is presented",
    ],
    [
      "Brand and identity",
      "Use of its names, marks and approved terminology",
      "Creative direction and execution",
    ],
    [
      "Commissioned content",
      "Final approval before release",
      "Format, tone and production approach",
    ],
    [
      "Independent editorial work",
      "No approval and no influence",
      "All editorial decisions, under the Creative Lead",
    ],
  ],
};

export const engagementTable: TableContent = {
  columns: ["Model", "Typical use", "Defined in the agreement"],
  rows: [
    [
      "Project",
      "A defined campaign, communication package or production job",
      "Scope, deliverables, timeline and fee",
    ],
    [
      "Retainer",
      "Continuous communications support over a fixed term",
      "Monthly scope, response targets, reporting and term",
    ],
    [
      "Production only",
      "Photography, video or design without strategy work",
      "Deliverables, formats and usage rights",
    ],
  ],
};

export const contracting = {
  eyebrow: "Contracting",
  title: "Prepared for institutional procurement.",
  description:
    "Contracts and commercial relationships are managed at holding level by Barito Bahalap Agency to keep standards consistent. Pricing is scoped per engagement and is not published as a fixed list.",
  items: [
    "Written scope of work with defined deliverables",
    "Approval steps and revision rounds stated in advance",
    "Confidentiality terms covering client materials and personal data",
    "Usage rights for produced materials stated in the agreement",
    "Payment terms linked to deliverables and acceptance",
  ],
};
