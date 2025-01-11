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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isInView, setIsInView] = useState(false);

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.set(".project", { autoAlpha: 0 });

    const tl = gsap.timeline({
      defaults: {
        x: 0,
        autoAlpha: 1,
        ease: "power1.out",
      },
      scrollTrigger: {
        trigger: "#projects-accordion",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          setIsInView(true);

          tl.fromTo(
            ".project",
            { x: "-110%", autoAlpha: 0 },
            {
              stagger: {
                amount: 0.5,
                from: "start",
              },
            },
          );
        },
        onEnterBack: () => {
          setIsInView(true);

          tl.fromTo(
            ".project",
            { x: "110%", autoAlpha: 0 },
            {
              stagger: {
                amount: 0.5,
                from: "end",
              },
            },
          );
        },
        onLeave: () => {
          setIsInView(false);
          tl.clear();
          gsap.set(".project", { x: "110%", autoAlpha: 0 });
        },
        onLeaveBack: () => {
          setIsInView(false);
          tl.clear();
          gsap.set(".project", { x: "-110%", autoAlpha: 0 });
        },
      },
    });
  });

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
