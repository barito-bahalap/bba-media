export interface AboutTitledItem {
  title: string;
  body: string;
}

export interface AboutNumberedItem extends AboutTitledItem {
  number: string;
}

export interface AboutService {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: readonly string[];
  outcome: string;
}

export interface AboutContent {
  seo: { title: string; description: string };
  hero: { eyebrow: string; heading: readonly string[]; body: string };
  story: { heading: string; paragraphs: readonly string[] };
  values: { heading: string; items: readonly AboutTitledItem[] };
  principles: { heading: string; items: readonly AboutNumberedItem[] };
  services: {
    intro: { heading: string; body: string };
    items: readonly AboutService[];
  };
  standards: {
    heading: string;
    body: string;
    items: readonly AboutNumberedItem[];
  };
  agency: { heading: string; body: string };
  engagement: {
    heading: string;
    body: string;
    cta: { label: string; href: string };
  };
}
