import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.brand.siteUrl,
      lastModified: new Date("2026-07-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
