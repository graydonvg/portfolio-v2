import { SITE_URL } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL!,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
