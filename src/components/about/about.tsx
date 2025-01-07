"use client";

import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import { aboutContent } from "@/lib/constants";
import AboutCard from "./about-card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";
import useWindowDimensions from "@/hooks/use-window-dimensions";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const windowDimension = useWindowDimensions();
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      // Clear transforms on window resize to avoid lingering x transform (no x transform if vw < 1024px)
      gsap.set(
        [".about-card", ".about-card-1", ".about-card-2", ".about-card-3"],
        {
          clearProps: "transform",
        },
      );

      const scrollDownTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-container",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reset none reset",
        },
      });

      const scrollUpTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-container",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "none reset play reset",
        },
      });

      const mm = gsap.matchMedia();

      mm.add("(max-width: 1023px)", () => {
        scrollDownTl.fromTo(
          ".about-card",
          {
            y: "50%",
            opacity: 0,
            scale: 0,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power1.out",
          },
        );

        scrollUpTl.fromTo(
          ".about-card",
          {
            y: "-50%",
            opacity: 0,
            scale: 0,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power1.out",
          },
        );
      });

      mm.add("(min-width: 1024px)", () => {
        scrollDownTl
          .fromTo(
            ".about-card-1",
            {
              y: "50%",
              x: "-50%",
              opacity: 0,
              scale: 0,
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              ease: "power1.out",
            },
          )

          .fromTo(
            ".about-card-2",
            {
              y: "50%",
              opacity: 0,
              scale: 0,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power1.out",
            },
            0,
          )

          .fromTo(
            ".about-card-3",
            {
              y: "50%",
              x: "50%",
              opacity: 0,
              scale: 0,
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              ease: "power1.out",
            },
            0,
          );

        scrollUpTl
          .fromTo(
            ".about-card-1",
            {
              y: "-50%",
              x: "-50%",
              opacity: 0,
              scale: 0,
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              ease: "power1.out",
            },
          )

          .fromTo(
            ".about-card-2",
            {
              y: "-50%",
              opacity: 0,
              scale: 0,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power1.out",
            },
            0,
          )

          .fromTo(
            ".about-card-3",
            {
              y: "-50%",
              x: "50%",
              opacity: 0,
              scale: 0,
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              ease: "power1.out",
            },
            0,
          );
      });
    },
    {
      dependencies: [windowDimension?.width],
      revertOnUpdate: true,
    },
  );

  return (
    <Section id="about">
      <TypographyH2>
        About <span className="text-accent">Me</span>
      </TypographyH2>

      <div
        id="about-container"
        className="grid grid-cols-1 gap-4 overflow-hidden md:gap-6 lg:grid-cols-3"
      >
        {aboutContent.map((item, index) => (
          <AboutCard
            key={index}
            number={index + 1}
            title={item.title}
            parapraphs={item.parapraphs}
            imageSrc={item.imageSrc}
            className={`about-card-${index + 1} about-card`}
          />
        ))}
      </div>
    </Section>
  );
}
