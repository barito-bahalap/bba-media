export const contact = {
  seo: {
    title: "Contact | Barito Bahalap Media",
    description:
      "Contact Barito Bahalap Media to discuss communications strategy, public relations, or media operations.",
  },
  hero: {
    eyebrow: "Contact",
    heading: ["Tell us what you need."],
    body: "What are you trying to achieve, who needs to be reached, and what constraints should we consider? We'll help define a realistic scope of work.",
  },
  details: {
    heading: "Keep it brief",
    body: "A short summary is enough. Context, objectives, and deadlines help us respond appropriately.",
    emailLabel: "Email",
    email: "info@baritobahalap.com",
    parentLabel: "Agency",
    parentName: "Barito Bahalap Agency",
  },
  form: {
    heading: "Send a message",
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
        label: "Service needed",
        placeholder: "Select a service",
        options: [
          "Strategic Communications",
          "Public Relations",
          "Media Operations",
          "Content Production and Editorial",
          "Not sure yet",
        ],
      },
      message: {
        label: "Your needs",
        placeholder: "Objectives, audience, and timeline",
        required: "Please describe what you need.",
      },
    },
    consent: "I agree to be contacted regarding this inquiry.",
    consentRequired: "Please check the consent box to continue.",
    submit: "Submit Inquiry",
    submitting: "Sending…",
    success: "Thank you. We have received your inquiry.",
    error:
      "Your inquiry could not be sent. Please try again or contact us by email.",
    privacyNote:
      "Information submitted through this form is used only to respond to your inquiry.",
  },
} as const;

export default contact;
