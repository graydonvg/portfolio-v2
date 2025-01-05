"use client";

import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import { aboutContent } from "@/lib/constants";
import AboutCard from "./about-card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useScrollY from "@/hooks/use-scroll-y";
import { useRef } from "react";
import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollDirection } = useScrollY();
  const isInViewRef = useRef(false);

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-container",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reset play reset",
          onEnter: () => (isInViewRef.current = true),
          onEnterBack: () => (isInViewRef.current = true),
          onLeave: () => (isInViewRef.current = false),
          onLeaveBack: () => (isInViewRef.current = false),
        },
      });

      if (isInViewRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(max-width: 1023px)", () => {
        tl.fromTo(
          ".about-card",
          {
            y: scrollDirection === "down" ? "50%" : "-50%",
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
        tl.fromTo(
          ".about-card-1",
          {
            y: scrollDirection === "down" ? "50%" : "-50%",
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
              y: scrollDirection === "down" ? "50%" : "-50%",
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
              y: scrollDirection === "down" ? "50%" : "-50%",
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
      dependencies: [scrollDirection],
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
