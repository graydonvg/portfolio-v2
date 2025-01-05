import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ogImage from "../../public/opengraph-image.jpg";
import type { Viewport } from "next";
import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKED_IN_URL,
  productionUrl,
  SITE_URL,
} from "@/lib/constants";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

const NAME = "Graydon von Gossler";
const TITLE = `${NAME} | Front-end Web Developer`;
const DESCRIPTION =
  "Hi, I'm Graydon! A passionate Front-End Web Developer with expertise in modern web technologies and frameworks, including HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. I specialize in crafting responsive, accessible, and high-performance web applications that are visually appealing and user-focused.";

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: `${NAME} - Portfolio`,
  generator: "Next.js",
  authors: [{ name: NAME }],
  creator: NAME,
  publisher: NAME,
  keywords:
    "portfolio, front-end developer, frontend engineer, web development, web developer, frontend developer, creative, problem-solving, team player, javascript developer, typescript developer, react developer, nextjs developer, next.js app router, html, css, javascript, typescript, reactjs, react.js, redux, zustand, nextjs, next.js, tailwind, gsap, framer motion, motion, supabase, mui, material ui, shadcn, remote, hybrid, on-site, startup-friendly, responsive design, high-performance websites, accessible websites, english, german, afrikaans, south africa, international, graydon von gossler, graydon, von gossler",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/favicon/android-chrome-512x512.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon/favicon.ico",
    },
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: NAME,
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: ogImage.src,
        alt: TITLE,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImage.src],
  },
  verification: {
    google: "VmkBdmFmPIAyVGnHGuapflceNwi1XqFcP_aW99qbGIw",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  sameAs: [LINKED_IN_URL, GITHUB_URL],
  jobTitle: "Front-end Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "email",
    email: EMAIL_ADDRESS,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: `${NAME} - Portfolio`,
  description: DESCRIPTION,
  publisher: {
    "@type": "Person",
    name: NAME,
  },
};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <Script
        id="websiteSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </html>
  );
}
