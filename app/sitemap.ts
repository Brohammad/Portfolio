import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-06-01",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
