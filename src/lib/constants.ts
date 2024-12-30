// import { scrollToContactForm } from "./utils";
import myStoreMockup from "../../public/images/mockups/mystore-mockup.jpg";
import galleryAiMockup from "../../public/images/mockups/gallery-ai-mockup.jpg";

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
  },
  {
    label: "LinkedIn",
    externalLink: LINKED_IN_URL,
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
    imageSrc: galleryAiMockup,
  },
  {
    title: "Goals",
    parapraphs:
      "My goal is to contribute to innovative teams where I can grow my skills in both front-end and back-end development, and help create impactful web solutions.",
    imageSrc: myStoreMockup,
  },
];

export const projects = [
  {
    image: myStoreMockup,
    title: "Zentry clone",
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
    image: galleryAiMockup,
    title: "Gallery AI",
    description:
      "Developing a dynamic media gallery platform with advanced management features, allowing users to seamlessly upload and enhance both photos and videos. Key features include Auto-Tagging for efficient categorization and search optimization, Image Optimization for high-quality display across devices, and Smart Editing with AI-driven enhancements.",
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
    image: galleryAiMockup,
    title: "Portfolio",
    description:
      "Developing a dynamic media gallery platform with advanced management features, allowing users to seamlessly upload and enhance both photos and videos. Key features include Auto-Tagging for efficient categorization and search optimization, Image Optimization for high-quality display across devices, and Smart Editing with AI-driven enhancements.",
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
      website: null,
    },
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: "html",
  },
  {
    name: "CSS 3",
    icon: "css",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "React.js",
    icon: "react",
  },
  {
    name: "Next.js",
    icon: "netxjs",
  },
  {
    name: "Redux Toolkit",
    icon: "redux",
  },
  {
    name: "Supabase",
    icon: "supabase",
  },
  {
    name: "Material UI",
    icon: "mui",
  },
  {
    name: "shadcn",
    icon: "shadcn",
  },
  {
    name: "GSAP",
    icon: "gsap",
  },
];
