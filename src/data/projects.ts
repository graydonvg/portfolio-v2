import { ProjectType } from "@/lib/types";
import myStoreMockup from "../../public/images/mockups/mystore-mockup.jpg";
import portfolioMockup from "../../public/images/mockups/portfolio-mockup.jpg";
import zentryCloneMockup from "../../public/images/mockups/zentry-clone-mockup.jpg";
import scrapeBotMockup from "../../public/images/mockups/scrape-bot-mockup.jpg";

export const projects: ProjectType[] = [
  {
    image: zentryCloneMockup,
    title: "Zentry clone",
    description:
      'Working on a clone of zentry.com which won the Awwwards "Sit of the Day" on Aug 28, 2024.',
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "zustand",
      "tailwind css",
      "gsap",
    ],
    links: {
      repository: "https://github.com/graydonvg/zentry-clone",
      website: "https://zentry-clone-lemon.vercel.app/",
    },
  },
  {
    image: myStoreMockup,
    title: "MyStore",
    description:
      "A clothing e-commerce store featuring an admin panel with role-based access control to manage users, products, and orders efficiently. Inspired by South African e-commerce store, Superbalist.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "redux",
      "supabase",
      "mui",
      "stripe",
    ],
    links: {
      repository: "https://github.com/graydonvg/my-store",
      website: "https://my-store-henna.vercel.app",
    },
  },
  {
    image: scrapeBotMockup,
    title: "ScrapeBot",
    description:
      "A full-stack SaaS platform that enables users to visually create and manage web scrapers without writing code. It simplifies data extraction with an intuitive drag-and-drop interface and a scheduling system for automating data collection. Additionally, it includes a secure credential management system for storing AI API tokens, allowing users to integrate AI into the web scraping process if desired.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "zustand",
      "react context",
      "react query",
      "supabase",
      "shadcn",
      "tailwind css",
      "react flow",
      "stripe",
    ],
    links: {
      repository: "https://github.com/graydonvg/scrape-bot",
      website: "https://scrape-bot-eight.vercel.app/",
    },
  },
  {
    image: portfolioMockup,
    title: "Portfolio",
    description:
      "My portfolio site showcasing projects and web development skills in HTML, CSS, JavaScript, TypeScript, React.js, Next.js and more.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "zustand",
      "shadcn",
      "tailwind css",
      "gsap",
      "motion",
    ],
    links: {
      repository: "https://github.com/graydonvg/portfolio-v2",
      website: null,
    },
  },
];
