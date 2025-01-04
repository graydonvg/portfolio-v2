import { SITE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/docs/resume.pdf",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
