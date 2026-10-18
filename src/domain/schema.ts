import type { SiteIdentity } from "./content";
import type { Article } from "./articles";

export function organizationSchema(site: SiteIdentity) {
  return {
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    foundingDate: site.foundingYear ? String(site.foundingYear) : undefined,
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

// Generic "Article" on purpose. Switch to "NewsArticle" only once the editorial
// structure and press-company requirements in the README are met.
export function articlePageSchema(
  site: SiteIdentity,
  article: Article,
  trail: { name: string; path: string }[],
) {
  const { "@context": _ctx, ...breadcrumb } = breadcrumbSchema(site, trail);
  void _ctx;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt ?? undefined,
        image: article.cover_url ?? undefined,
        datePublished: article.published_at,
        dateModified: article.updated_at,
        inLanguage: "id",
        author: article.author_name
          ? { "@type": "Person", name: article.author_name }
          : undefined,
        publisher: { "@type": "Organization", name: site.name, url: site.url },
        mainEntityOfPage: `${site.url}/insight/${article.slug}`,
      },
      breadcrumb,
    ],
  };
}
