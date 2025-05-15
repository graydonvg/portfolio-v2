import { Metadata, Viewport } from "next";
import { NavLinks } from "../lib/types";
import ogImage from "../../public/opengraph-image.jpg";

const NAME = "Graydon von Gossler";
const TITLE = `${NAME} | Front-end Web Developer`;
const DESCRIPTION =
  "Hi, I'm Graydon! A passionate Front-End Web Developer with expertise in modern web technologies and frameworks, including HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. I specialize in crafting responsive, accessible, and high-performance web applications that are visually appealing and user-focused.";

const GITHUB_URL = "https://github.com/graydonvg";
const LINKED_IN_URL = "https://linkedin.com/in/graydon-von-gossler";
export const EMAIL_ADDRESS = "graydonvg@gmail.com";

const PRODUCTION_URL = "https://www.graydonvongossler.com";
export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : PRODUCTION_URL;

export const siteConfig = {
  viewport: {
    themeColor: "black",
    colorScheme: "dark",
  } as Viewport,
  metadata: {
    metadataBase: new URL(PRODUCTION_URL),
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
  } as Metadata,
  jsonLdSchema: {
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
  },
  websiteSchema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: `${NAME} - Portfolio`,
    description: DESCRIPTION,
    publisher: {
      "@type": "Person",
      name: NAME,
    },
  },
};

export const navLinks: NavLinks[] = [
  {
    label: "Home",
    internalLink: "#hero",
  },
  {
    label: "About",
    internalLink: "#about",
  },
  {
    label: "Projects",
    internalLink: "#projects",
  },
  {
    label: "Tech",
    internalLink: "#technologies",
  },
  {
    label: "Contact",
    internalLink: "#contact",
  },
  {
    label: "GitHub",
    externalLink: GITHUB_URL,
    icon: "github",
  },
  {
    label: "LinkedIn",
    externalLink: LINKED_IN_URL,
    icon: "linkedin",
  },
];
