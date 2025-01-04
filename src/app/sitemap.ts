import { SITE_URL } from "@/lib/constants";
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
