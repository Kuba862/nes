import type { Metadata } from "next";
import { ClientTicker } from "@/components/ClientTicker";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { PortfolioHero } from "@/components/PortfolioHero";
import { siteContent } from "@/content/site";
import { portfolioStructuredData } from "@/content/structured-data";

const { brand, portfolio, seo } = siteContent;
const portfolioUrl = new URL(portfolio.path, brand.siteUrl).toString();

export const metadata: Metadata = {
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  alternates: {
    canonical: portfolio.path,
  },
  openGraph: {
    type: seo.type,
    locale: seo.locale,
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url: portfolioUrl,
    siteName: brand.name,
    images: [
      {
        url: seo.ogImage.src,
        width: seo.ogImage.width,
        height: seo.ogImage.height,
        alt: seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: [seo.ogImage.src],
  },
};

function PortfolioEnhancementScript() {
  const script = `
    (function () {
      var root = document.documentElement;
      root.classList.add('portfolio-js');
      try {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          root.classList.add('portfolio-reduced-motion');
        }
      } catch (error) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RealizacjePage() {
  return (
    <>
      <PortfolioEnhancementScript />
      <Navigation currentPage="portfolio" />
      <main id="main">
        <PortfolioHero />
        <ClientTicker />
        <PortfolioGrid />
      </main>
      <Footer currentPage="portfolio" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
    </>
  );
}
