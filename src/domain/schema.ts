import type { SiteIdentity } from "./content";

export function organizationSchema(site: SiteIdentity) {
  return {
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    foundingDate: String(site.foundingYear),
    parentOrganization: {
      "@type": "Organization",
      name: site.holdingName,
      url: site.holdingUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palangka Raya",
      addressRegion: "Kalimantan Tengah",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      availableLanguage: ["en", "id"],
    },
  };
}

export function websiteSchema(site: SiteIdentity) {
  return {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en",
  };
}

export function homeSchema(site: SiteIdentity) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(site), websiteSchema(site)],
  };
}

export function breadcrumbSchema(
  site: SiteIdentity,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
