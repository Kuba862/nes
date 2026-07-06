import { siteContent } from "./site";

const siteUrl = siteContent.brand.siteUrl;
const logoUrl = new URL(siteContent.brand.logo.src, siteUrl).toString();

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
