import type { LegalPageContent } from "@/domain/content";

export const privacy: LegalPageContent = {
  title: "Privacy policy",
  description:
    "How Barito Bahalap Media handles personal data submitted through this website.",
  updated: "[SET DATE BEFORE LAUNCH]",
  sections: [
    {
      id: "scope",
      heading: "Scope",
      paragraphs: [
        "This policy applies to personal data submitted through the Barito Bahalap Media (BBM) website. BBM is an operating brand of Barito Bahalap Agency, based in Palangka Raya, Central Kalimantan, Indonesia.",
      ],
    },
    {
      id: "data-collected",
      heading: "Data we collect",
      paragraphs: [
        "The website does not require an account. If you submit an inquiry, we receive the details you provide: name, organization, role, email address, inquiry type and message.",
        "The inquiry form prepares an email in your own mail application. The information is sent only when you send that email.",
      ],
    },
    {
      id: "purpose",
      heading: "Purpose of processing",
      paragraphs: [
        "We use submitted details only to respond to your inquiry and to prepare a proposal or follow-up where you have asked for one.",
      ],
    },
    {
      id: "rights",
      heading: "Legal basis and your rights",
      paragraphs: [
        "Personal data is processed in accordance with Law No. 27 of 2022 on Personal Data Protection. You may request access to, correction of, or deletion of your personal data by contacting us at the address below.",
      ],
    },
    {
      id: "retention",
      heading: "Retention and sharing",
      paragraphs: [
        "Inquiry details are kept for as long as needed to handle the inquiry and any resulting engagement. They are not sold, and they are not shared with other BBA operating units without your approval.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: ["Privacy questions can be sent to [PRIVACY CONTACT EMAIL]."],
    },
  ],
};

export const terms: LegalPageContent = {
  title: "Terms of use",
  description: "Terms governing the use of the Barito Bahalap Media website.",
  updated: "[SET DATE BEFORE LAUNCH]",
  sections: [
    {
      id: "use",
      heading: "Use of this website",
      paragraphs: [
        "This website provides general information about the services of Barito Bahalap Media (BBM). It does not constitute an offer, quotation or contract, and it is not a news publication.",
      ],
    },
    {
      id: "engagements",
      heading: "Engagements",
      paragraphs: [
        "Services are provided only under a written agreement that sets out scope, deliverables, fees and responsibilities. Information on this website does not replace those terms.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "The content, design and trademarks on this website belong to Barito Bahalap Agency and its operating brands. Third-party names are used only to describe completed work and remain the property of their owners.",
      ],
    },
    {
      id: "accuracy",
      heading: "Accuracy",
      paragraphs: [
        "We aim to keep this website accurate and current but do not guarantee that it is complete or free of error. Factual corrections can be requested through the editorial standards page.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Republic of Indonesia.",
      ],
    },
  ],
};
