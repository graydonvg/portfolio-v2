import { AboutContent } from "@/lib/types";
import portfolioMultiDeviceMockup from "../../public/images/mockups/portfolio-multi-device-mockup.jpg";
import portfolioTeamMockup from "../../public/images/mockups/portfolio-team-mockup.jpg";

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
