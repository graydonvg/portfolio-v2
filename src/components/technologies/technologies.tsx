"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { technologies } from "@/lib/constants";
import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import TypographyP from "../ui/typography/p";
import Technology from "./technology";
import useScrollDirection from "@/hooks/use-scroll-direction";
import { useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Technologies() {
  const scrollDirection = useScrollDirection();
  const [isInView, setIsInView] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#technologies-grid",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reset play reset",
          onEnter: () => setIsInView(true),
          onEnterBack: () => setIsInView(true),
          onLeave: () => setIsInView(false),
          onLeaveBack: () => setIsInView(false),
        },
      });

      if (isInView) return;

      tl.fromTo(
        ".technology",
        { y: scrollDirection === "down" ? 100 : -100, scale: 0 },
        {
          y: 0,
          scale: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            from: scrollDirection === "down" ? "start" : "end",
          },
        },
      );
    },
    { dependencies: [scrollDirection], revertOnUpdate: true },
  );

  return (
    <Section id="technologies">
      <TypographyH2>
        Favorite <span className="text-accent">Technologies</span>
      </TypographyH2>

      <div className="mx-auto flex flex-col items-center justify-center gap-12 sm:gap-14">
        <div className="text-center">
          <TypographyP className="text-base sm:text-lg">
            I am proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development.
          </TypographyP>
          <TypographyP className="text-base sm:text-lg">
            Here are some of my favorites:
          </TypographyP>
        </div>

        <div
          id="technologies-grid"
          className="grid h-fit grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6"
        >
          {technologies.map((technology, index) => (
            <Technology key={index} {...technology} />
          ))}
        </div>
      </div>
    </Section>
  );
}
