export const contact = {
  seo: {
    title: "Contact | Barito Bahalap Media",
    description:
      "Contact Barito Bahalap Media to discuss communications strategy, public relations, or media operations.",
  },
  hero: {
    eyebrow: "Contact",
    heading: ["Start with the brief."],
    body: "Tell us what needs to change, who needs to be reached, and what constraints shape the work. We will help define a practical scope.",
  },
  details: {
    heading: "A useful first conversation",
    body: "A short outline is enough to begin. Include the context, objectives, audience, timeline, and any known approval or confidentiality requirements.",
    emailLabel: "Email",
    email: "media@baritobahalap.com",
    parentLabel: "Agency",
    parentName: "Barito Bahalap Agency",
  },
  form: {
    heading: "Tell us about the work",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your name",
        required: "Please enter your name.",
      },
      organization: {
        label: "Organization",
        placeholder: "Organization or company",
      },
      email: {
        label: "Work email",
        placeholder: "you@organization.com",
        required: "Please enter a valid email address.",
      },
      service: {
        label: "Area of support",
        placeholder: "Select a service",
        options: [
          "Strategic communications",
          "Public relations",
          "Media operations",
          "Content and editorial production",
          "Not sure yet",
        ],
      },
      message: {
        label: "Brief",
        placeholder: "Context, objectives, audience, timeline, and constraints",
        required: "Please provide a short brief.",
      },
    },
    consent: "I agree to be contacted about this inquiry.",
    consentRequired: "Consent is required to send this inquiry.",
    submit: "Send inquiry",
    submitting: "Sending…",
    success: "Thank you. Your inquiry has been received.",
    error:
      "Your inquiry could not be sent. Please try again or email us directly.",
    privacyNote:
      "Information submitted through this form will be used to respond to your inquiry.",
  },
} as const;

export default contact;
