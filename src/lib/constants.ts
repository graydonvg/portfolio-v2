import myStoreMockup from "../../public/images/mockups/mystore-mockup.jpg";
import galleryAiMockup from "../../public/images/mockups/gallery-ai-mockup.jpg";
import portfolioMultiDeviceMockup from "../../public/images/mockups/portfolio-multi-device-mockup.jpg";
import portfolioTeamMockup from "../../public/images/mockups/portfolio-team-mockup.jpg";
import portfolioMockup from "../../public/images/mockups/portfolio-mockup.jpg";
import zentryCloneMockup from "../../public/images/mockups/zentry-clone-mockup.jpg";
import { Project } from "./types";

export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.graydonvongossler.com";
export const GITHUB_URL = "https://github.com/graydonvg";
export const LINKED_IN_URL = "https://linkedin.com/in/graydon-von-gossler";
export const EMAIL_ADDRESS = "graydonvg@gmail.com";

export const navLinks = [
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

export const aboutItems = [
  {
    title: "Background",
    parapraphs:
      "I started my career in hospitality as a restaurant manager, but I soon craved more intellectual challenges.<br />My love for problem-solving, sparked by high school calculus, led me to explore applied mathematics and programming languages such as C++, MATLAB, and R.<br />Curiosity then brought me to web development, where I began with HTML, CSS, and JavaScript, eventually falling in love with React and Next.js.<br />I thrive on the creative problem-solving that coding offers, and I'm always excited to tackle new challenges.",
  },
  {
    title: "Expertise",
    parapraphs:
      "I am experienced in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and more.<br />I specialize in creating responsive, accessible, and performant web applications that are visually appealing and deliver exceptional user experiences.",
    imageSrc: portfolioMultiDeviceMockup,
  },
  {
    title: "Goals",
    parapraphs:
      "My goal is to contribute to innovative teams where I can grow my skills in both front-end and back-end development, and help create impactful web solutions.",
    imageSrc: portfolioTeamMockup,
  },
];

export const projects: Project[] = [
  {
    image: myStoreMockup,
    title: "MyStore",
    description:
      "Developed a clothing e-commerce store featuring an admin panel with role-based access control to manage users, products, and orders efficiently. Inspired by South African e-commerce store, Superbalist.",
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
    video: {
      placeholderImage: zentryCloneMockup,
      src: "/videos/zentry-clone.mp4",
    },
    title: "Zentry clone",
    description:
      'Working on a clone of zentry.com which won the Awwwards "Sit of the Day" on Aug 28, 2024.',
    tags: ["typescript", "react.js", "next.js", "tailwind css", "gsap"],
    links: {
      repository: "https://github.com/graydonvg/zentry-clone",
      website: "",
    },
  },
  {
    image: galleryAiMockup,
    title: "Gallery AI",
    description:
      "Developing a dynamic media gallery platform with advanced management features, allowing users to seamlessly upload and enhance both photos and videos. Key features include Image Optimization for high-quality display across devices and Smart Editing with AI-driven enhancements.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "redux",
      "supabase",
      "shadcn",
      "tailwind css",
      "cloudinary",
    ],
    links: {
      repository: "https://github.com/graydonvg/gallery-ai",
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

export const technologies = [
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
