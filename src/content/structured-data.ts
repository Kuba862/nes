import { siteContent } from "./site";

const siteUrl = siteContent.brand.siteUrl;
const logoUrl = new URL(siteContent.brand.logo.src, siteUrl).toString();
const portfolioUrl = new URL(siteContent.portfolio.path, siteUrl).toString();

const sameAs = siteContent.contact.socials
  .filter((social) => !social.pendingClientInput && social.href.startsWith("https://"))
  .map((social) => social.href);

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteContent.brand.name,
    url: siteUrl,
    logo: logoUrl,
    sameAs,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteContent.brand.name,
    url: siteUrl,
    image: logoUrl,
    description: siteContent.seo.description,
    areaServed: "PL",
    serviceType: siteContent.marquee.items,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteContent.brand.name,
    url: siteUrl,
    inLanguage: "pl-PL",
  },
];

export const portfolioStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: siteContent.portfolio.hero.eyebrow,
        item: portfolioUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: siteContent.portfolio.seo.title,
    url: portfolioUrl,
    description: siteContent.portfolio.seo.description,
    inLanguage: "pl-PL",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: siteContent.portfolio.works.length,
      itemListElement: siteContent.portfolio.works.map((work, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${portfolioUrl}#realizacja-${work.index}`,
        name: work.name,
        description: work.description,
      })),
    },
  },
];
