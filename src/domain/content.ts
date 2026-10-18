export interface NavLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: NavLink[];
}

export interface SiteIdentity {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  holdingName: string;
  holdingUrl: string;
  location: string;
  email: string;
  correctionsEmail: string;
  foundingYear?: number;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  facts: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  scope: string[];
  note?: string;
}

export interface Stage {
  title: string;
  description: string;
  output: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TableContent {
  columns: string[];
  rows: string[][];
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalPageContent {
  title: string;
  description: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}

export interface InquiryType {
  value: string;
  label: string;
}

export interface ContactValues {
  name: string;
  organization: string;
  role: string;
  email: string;
  inquiryType: string;
  message: string;
  consent: boolean;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
