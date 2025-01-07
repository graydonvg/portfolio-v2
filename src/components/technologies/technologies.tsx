"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { technologies } from "@/lib/constants";
import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import TypographyP from "../ui/typography/p";
import Technology from "./technology";
import { useRef } from "react";
import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";
import useWindowDimensions from "@/hooks/use-window-dimensions";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Technologies() {
  const windowDimension = useWindowDimensions();
  const prefersReducedMotion = usePrefersReducedMotion();
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const technologiesGridRef = useRef<HTMLDivElement>(null);
  const technologyCardRefs = useRef<HTMLDivElement[]>([]);
  const isTouchDevice = navigator.maxTouchPoints > 0;

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const scrollDownTl = gsap.timeline({
        scrollTrigger: {
          trigger: technologiesGridRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reset none reset",
        },
      });

      scrollDownTl.fromTo(
        ".technology-card",
        { y: 100, scale: 0 },
        {
          y: 0,
          scale: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            grid: "auto",
            from: "start",
          },
        },
      );

      const scrollUpTl = gsap.timeline({
        scrollTrigger: {
          trigger: technologiesGridRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "none reset play reset",
        },
      });

      scrollUpTl.fromTo(
        ".technology-card",
        { y: -100, scale: 0 },
        {
          y: 0,
          scale: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            grid: "auto",
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

  useGSAP((_context, contextSafe) => {
    if (!contextSafe || !technologyCardRefs.current || isTouchDevice) return;

    const handleMouseMove = contextSafe((event: MouseEvent) => {
      cursorPositionRef.current.x = event.clientX;
      cursorPositionRef.current.y = event.clientY;

      technologyCardRefs.current.forEach((card) => {
        const cardLight = card.querySelector(".card-light"); // Moves
        const cardLightOriginalPosition = card.querySelector(
          ".card-light-original-position",
        ); // Does NOT move

        if (!cardLight || !cardLightOriginalPosition) return;

        // Because card-light moves, use card-light-original-position to calculate the card-light original center point
        const cardLightOriginalPositionRect =
          cardLightOriginalPosition.getBoundingClientRect();

        const cardLightOriginalPositionCenterX =
          cardLightOriginalPositionRect.left +
          cardLightOriginalPositionRect.width / 2;
        const cardLightOriginalPositionCenterY =
          cardLightOriginalPositionRect.top +
          cardLightOriginalPositionRect.height / 2;

        // Subtract the original center point from the current cursor position to calculate how far the light must be translated to be centered under the cursor
        const translateX =
          cursorPositionRef.current.x - cardLightOriginalPositionCenterX;
        const translateY =
          cursorPositionRef.current.y - cardLightOriginalPositionCenterY;

        const xSetter = gsap.quickSetter(cardLight, "x", "px");
        const ySetter = gsap.quickSetter(cardLight, "y", "px");

        xSetter(translateX);
        ySetter(translateY);

        gsap.to(cardLight, {
          opacity: 1,
        });
      });
    });

    const handleScroll = contextSafe(() => {
      technologyCardRefs.current.forEach((card) => {
        const cardLight = card.querySelector(".card-light"); // Moves
        const cardLightOriginalPosition = card.querySelector(
          ".card-light-original-position",
        ); // Does NOT move

        if (!cardLight || !cardLightOriginalPosition) return;

        // Because card-light moves, use card-light-original-position to calculate the card-light original center point
        const cardLightOriginalPositionRect =
          cardLightOriginalPosition.getBoundingClientRect();

        const cardLightOriginalPositionCenterX =
          cardLightOriginalPositionRect.left +
          cardLightOriginalPositionRect.width / 2;
        const cardLightOriginalPositionCenterY =
          cardLightOriginalPositionRect.top +
          cardLightOriginalPositionRect.height / 2;

        // Subtract the original center point from the current cursor position to calculate how far the light must be translated to be centered under the cursor
        const translateX =
          cursorPositionRef.current.x - cardLightOriginalPositionCenterX;
        const translateY =
          cursorPositionRef.current.y - cardLightOriginalPositionCenterY;

        const xSetter = gsap.quickSetter(cardLight, "x", "px");
        const ySetter = gsap.quickSetter(cardLight, "y", "px");

        xSetter(translateX);
        ySetter(translateY);

        gsap.to(cardLight, {
          opacity: 1,
        });
      });
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
          ref={technologiesGridRef}
          className="grid h-fit grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6"
        >
          {technologies.map((technology, index) => (
            <Technology
              key={index}
              index={index}
              technologyCardRefs={technologyCardRefs}
              {...technology}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
