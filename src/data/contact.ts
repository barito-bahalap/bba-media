import type { InquiryType } from "@/domain/content";

export const contactIntro = {
  eyebrow: "Contact",
  title: "Start a conversation.",
  description:
    "Describe the organization, the audience and what you need. We reply with the next step and the information required to scope the work.",
};

export const inquiryTypes: InquiryType[] = [
  { value: "strategic-communications", label: "Strategic communications" },
  { value: "media-relations", label: "Media relations" },
  { value: "content", label: "Content operations and copywriting" },
  { value: "institutional", label: "Public or institutional communications" },
  { value: "multimedia", label: "Photography, video or design" },
  { value: "social-media", label: "Social media strategy" },
  { value: "other", label: "Other" },
];

export const includeList = [
  "The organization and your role",
  "The audience and the objective of the communication",
  "Timeline and key dates",
  "Existing channels and materials",
  "Who approves content on your side",
];

export const consentText =
  "I agree that my details will be used to respond to this inquiry, as described in the privacy policy.";

export const correctionNote =
  "Requests for correction or reply are handled separately. See the editorial standards page.";
