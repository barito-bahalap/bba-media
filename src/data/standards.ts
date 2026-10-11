import type { FaqItem, Principle, TableContent } from "@/domain/content";

export const standardsIntro = {
  eyebrow: "Editorial standards",
  title: "Independence is a structural rule, not a promise.",
  description:
    "This page explains how BBM separates commissioned communications from independent editorial decisions, and which legal and ethical standards it applies.",
};

export const principles: Principle[] = [
  {
    title: "Editorial independence",
    description:
      "Decisions on content, narrative and publication schedule rest with the Creative Lead. The Founder and Director oversee contracts, finance, legal compliance and reputational risk, and do not make day-to-day editorial decisions.",
  },
  {
    title: "Commissioned work is identified",
    description:
      "Content produced for a client is identified as commissioned communications. It is never presented as independent editorial work.",
  },
  {
    title: "Accuracy and verification",
    description:
      "Facts are verified against reliable sources before release. Where verification is not possible, material is not released as fact.",
  },
  {
    title: "Right of reply and correction",
    description:
      "Where BBM publishes editorial content, it accepts replies and correction requests and handles them promptly.",
  },
  {
    title: "Source protection",
    description:
      "Confidential sources are protected in line with the right of refusal (hak tolak) recognized in Law No. 40 of 1999.",
  },
  {
    title: "Data protection",
    description:
      "Personal data of clients, interviewees and website visitors is handled under Law No. 27 of 2022 on Personal Data Protection.",
  },
];

export const status = {
  title: "Press publication status",
  text: "BBM does not currently operate a press publication. When it does, it will operate through an Indonesian legal entity and will publicly disclose its name, address and person in charge, as required by Articles 9 and 12 of Law No. 40 of 1999.",
};

export const framework: TableContent = {
  columns: ["Framework", "Relevance to BBM"],
  rows: [
    [
      "Law No. 40 of 1999 on the Press",
      "Applies to activities that qualify as press publication. Key provisions include the guarantee against censorship (Article 4), the duty to serve right of reply and correction (Article 5), and the requirement that a press company is an Indonesian legal entity that discloses its name, address and person in charge (Articles 9 and 12).",
    ],
    [
      "Journalistic Code of Ethics",
      "Applied to editorial work, including accuracy, balance and verification before publication.",
    ],
    [
      "Law No. 27 of 2022 on Personal Data Protection",
      "Governs personal data handled in client work, interviews and on this website.",
    ],
    [
      "Rules on political communication",
      "Applied where a client is a political figure or organization. Such work is commissioned communications and follows the applicable election and campaign regulations.",
    ],
  ],
};

export const corrections = {
  title: "Replies and corrections",
  text: "If you believe content produced by BBM contains a factual error, write to us with the address of the content, the statement concerned and the correction you request.",
  actionLabel: "Send a correction request",
};

export const faq: FaqItem[] = [
  {
    question: "Can a client influence editorial content?",
    answer:
      "No. A client can approve the accuracy of its own information in commissioned work. It cannot direct independent editorial decisions.",
  },
  {
    question: "Do you guarantee media coverage?",
    answer:
      "No. Coverage is decided by each outlet. BBM does not guarantee it and does not make undisclosed payments for it.",
  },
  {
    question: "Do you work with public figures and political organizations?",
    answer:
      "BBM serves public figures and organizations within the applicable regulations. Such work is commissioned communications, is disclosed as such and is kept separate from editorial work.",
  },
  {
    question: "Is client information shared with other BBA operating units?",
    answer:
      "No. Client information is not shared with other BBA operating units unless the client gives explicit approval.",
  },
  {
    question: "Who is accountable for content?",
    answer:
      "The Creative Lead is accountable for editorial and creative decisions. Contractual and legal responsibility sits with the holding company.",
  },
];
