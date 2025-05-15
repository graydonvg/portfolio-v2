import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Script from "next/script";
import { inter } from "../fonts/inter";
import "./globals.css";

export const viewport = siteConfig.viewport;
export const metadata = siteConfig.metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-x-hidden bg-background font-inter text-foreground antialiased",
          inter.variable,
        )}
      >
        {children}
      </body>

      <Script
        id="jsonLdSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteConfig.jsonLdSchema),
        }}
      />
      <Script
        id="websiteSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteConfig.websiteSchema),
        }}
      />
    </html>
  );
}
