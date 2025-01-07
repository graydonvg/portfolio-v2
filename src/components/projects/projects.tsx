"use client";

import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import TypographyH2 from "../ui/typography/h2";
import { Accordion } from "@/components/ui/accordion";
import TypographyP from "../ui/typography/p";
import Section from "../ui/section";
import { useState } from "react";
import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";
import Project from "./project";
import useWindowDimensions from "@/hooks/use-window-dimensions";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Projects() {
  const windowDimension = useWindowDimensions();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isInView, setIsInView] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const scrollDownTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects-accordion",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reset none reset",
          onEnter: () => setIsInView(true),
          onEnterBack: () => setIsInView(true),
          onLeave: () => setIsInView(false),
          onLeaveBack: () => setIsInView(false),
        },
      });

      scrollDownTl.fromTo(
        ".project",
        { x: "-110%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            from: "start",
          },
        },
      );

      const scrollUpTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects-accordion",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "none reset play reset",
        },
      });

      scrollUpTl.fromTo(
        ".project",
        { x: "110%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            from: "end",
          },
        },
      );
    },
    {
      dependencies: [windowDimension],
      revertOnUpdate: true,
    },
  );

  return (
    <Section id="projects">
      <TypographyH2>
        Selected <span className="text-accent">Projects</span>
      </TypographyH2>

      <div className="mx-auto flex flex-col items-center justify-center gap-12 sm:gap-14">
        <TypographyP className="text-center text-base sm:text-lg">
          I continue to refine and improve these projects, leveraging new
          techniques and tools as I learn them.
        </TypographyP>

        <Accordion
          id="projects-accordion"
          type="single"
          collapsible
          // Need padding botton for focus ring to show on last item
          className="h-fit w-full space-y-4 pb-1 md:space-y-6"
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              index={index}
              isInView={isInView}
              project={project}
            />
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
