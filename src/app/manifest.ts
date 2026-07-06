import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteContent.brand.name,
    short_name: siteContent.brand.shortName,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: siteContent.brand.themeColor,
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
