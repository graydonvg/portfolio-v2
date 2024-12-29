"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { technologies } from "@/lib/constants";
import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import TypographyP from "../ui/typography/p";
import Technology from "./technology";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Technologies() {
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#technologies-grid",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play reset none reset",
          },
        })
        .fromTo(
          ".technology",
          { scale: 0, y: 100 },
          {
            scale: 1,
            y: 0,
            ease: "power1.out",
            stagger: {
              amount: 0.5,
              grid: "auto",
              from: "start",
            },
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#technologies-grid",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "none reset play reset",
          },
        })
        .fromTo(
          ".technology",
          { scale: 0, y: 100 },
          {
            scale: 1,
            y: 0,
            ease: "power1.out",
            stagger: {
              amount: 0.5,
              grid: "auto",
              from: "end",
            },
          },
        );
    },
    { revertOnUpdate: true },
  );

  return (
    <Section id="technologies" className="pb-24">
      <TypographyH2>
        Favorite <span className="text-accent">Technologies</span>
      </TypographyH2>

      <div className="mx-auto flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <TypographyP>
            I am proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development.
          </TypographyP>
          <TypographyP>
            Here are <span className="text-accent">some</span> of my favorites:
          </TypographyP>
        </div>

        <div
          id="technologies-grid"
          className="grid h-fit grid-cols-2 gap-6 sm:grid-cols-4 [&:not(:first-child)]:mt-4 sm:[&:not(:first-child)]:mt-6"
        >
          {technologies.map((technology, index) => (
            <Technology key={index} {...technology} />
          ))}
        </div>
      </div>
    </Section>
  );
}
