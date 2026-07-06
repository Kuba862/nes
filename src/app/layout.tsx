import type { Metadata, Viewport } from "next";
import { Archivo, Bodoni_Moda } from "next/font/google";
import type { ReactNode } from "react";
import { siteContent } from "@/content/site";
import { structuredData } from "@/content/structured-data";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-archivo",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni-moda",
});

const siteUrl = siteContent.brand.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: siteContent.seo.type,
    locale: siteContent.seo.locale,
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteUrl,
    siteName: siteContent.brand.name,
    images: [
      {
        url: siteContent.seo.ogImage.src,
        width: siteContent.seo.ogImage.width,
        height: siteContent.seo.ogImage.height,
        alt: siteContent.seo.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage.src],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: siteContent.brand.themeColor,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl" className={`${archivo.variable} ${bodoniModa.variable}`}>
      <body>
        <a className="skip" href="#main">
          {siteContent.skipLink}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
