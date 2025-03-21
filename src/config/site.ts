import myStoreMockup from "../../public/images/mockups/mystore-mockup.jpg";
import underConstruction from "../../public/images/mockups/under-construction.jpg";
import portfolioMultiDeviceMockup from "../../public/images/mockups/portfolio-multi-device-mockup.jpg";
import portfolioTeamMockup from "../../public/images/mockups/portfolio-team-mockup.jpg";
import portfolioMockup from "../../public/images/mockups/portfolio-mockup.jpg";
import zentryCloneMockup from "../../public/images/mockups/zentry-clone-mockup.jpg";
import {
  AboutContent,
  NavLinks,
  ProjectType,
  Technologies,
} from "../lib/types";

export const productionUrl = "https://www.graydonvongossler.com";
export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : productionUrl;
export const GITHUB_URL = "https://github.com/graydonvg";
export const LINKED_IN_URL = "https://linkedin.com/in/graydon-von-gossler";
export const EMAIL_ADDRESS = "graydonvg@gmail.com";

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

export const aboutContent: AboutContent[] = [
  {
    title: "Background",
    parapraphs:
      "I started my career in hospitality as a restaurant manager, but I soon craved more intellectual challenges.<br />My love for problem-solving, sparked by high school calculus, led me to explore applied mathematics and programming languages such as C++, MATLAB, and R.<br />Curiosity then brought me to web development, where I began with HTML, CSS, and JavaScript, eventually falling in love with React and Next.js.<br />I thrive on the creative problem-solving that coding offers, and I'm always excited to tackle new challenges.",
  },
  {
    title: "Expertise",
    parapraphs:
      "I am experienced in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and more.<br />I specialize in crafting responsive, accessible, and high-performance web applications that are visually appealing and user-focused.",
    imageSrc: portfolioMultiDeviceMockup,
  },
  {
    title: "Goals",
    parapraphs:
      "My goal is to contribute to innovative teams where I can grow my skills in both front-end and back-end development, and help create impactful web solutions.",
    imageSrc: portfolioTeamMockup,
  },
];

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
    image: underConstruction,
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
      website: "",
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

export const technologies: Technologies[] = [
  {
    name: "HTML 5",
    icon: "html",
    ariaLabel: "HTML 5",
  },
  {
    name: "CSS 3",
    icon: "css",
    ariaLabel: "CSS 3",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    ariaLabel: "tailwind CSS",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    ariaLabel: "java script",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    ariaLabel: "type script",
  },
  {
    name: "React.js",
    icon: "react",
    ariaLabel: "react JS",
  },
  {
    name: "Next.js",
    icon: "netxjs",
    ariaLabel: "next JS",
  },
  {
    name: "Redux Toolkit",
    icon: "redux",
    ariaLabel: "redux tool kit",
  },
  {
    name: "Supabase",
    icon: "supabase",
    ariaLabel: "supabase",
  },
  {
    name: "Material UI",
    icon: "mui",
    ariaLabel: "Material UI",
  },
  {
    name: "shadcn",
    icon: "shadcn",
    ariaLabel: "shad CN",
  },
  {
    name: "GSAP",
    icon: "gsap",
    ariaLabel: "G sap",
  },
];
