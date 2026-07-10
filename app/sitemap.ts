import type { MetadataRoute } from "next";
import { projectCaseStudies, siteConfig } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-07-10",
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectCaseStudies.map((study) => ({
      url: `${siteConfig.url}/projects/${study.slug}`,
      lastModified: "2026-07-10",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
