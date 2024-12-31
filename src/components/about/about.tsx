"use client";

import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import { aboutItems } from "@/lib/constants";
import AboutCard from "./about-card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useScrollDirection from "@/hooks/use-scroll-direction";
import { useState } from "react";
import useWindowDimensions from "@/hooks/use-window-dimensions";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const windowDimension = useWindowDimensions();
  const scrollDirection = useScrollDirection();
  const [isInView, setIsInView] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-container",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause play pause",
          onEnter: () => setIsInView(true),
          onEnterBack: () => setIsInView(true),
          onLeave: () => setIsInView(false),
          onLeaveBack: () => setIsInView(false),
        },
      });

      if (isInView) return;

      if (windowDimension && windowDimension?.width < 1024) {
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
            stagger: {
              amount: 0.5,
              from: scrollDirection === "down" ? "start" : "end",
            },
          },
        );
      } else {
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
            stagger: {
              amount: 0.5,
              from: scrollDirection === "down" ? "start" : "end",
            },
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
              stagger: {
                amount: 0.5,
                from: scrollDirection === "down" ? "start" : "end",
              },
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
              stagger: {
                amount: 0.5,
                from: scrollDirection === "down" ? "start" : "end",
              },
            },
            0,
          );
      }
    },
    { dependencies: [scrollDirection], revertOnUpdate: true },
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
        {aboutItems.map((item, index) => (
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
