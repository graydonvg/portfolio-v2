"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { technologies } from "@/lib/constants";
import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import TypographyP from "../ui/typography/p";
import Technology from "./technology";
import useScrollY from "@/hooks/use-scroll-y";
import { useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Technologies() {
  const { scrollDirection } = useScrollY();
  const [isInView, setIsInView] = useState(false);
  const technologyCards =
    typeof window !== "undefined"
      ? document.querySelectorAll(".technology-card")
      : null;
  let cursorX = 0;
  let cursorY = 0;

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
        ".technology-card",
        { y: scrollDirection === "down" ? 100 : -100, scale: 0 },
        {
          y: 0,
          scale: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.5,
            grid: "auto",
            from: scrollDirection === "down" ? "start" : "end",
          },
        },
      );
    },
    { dependencies: [scrollDirection], revertOnUpdate: true },
  );

  useGSAP(
    (_context, contextSafe) => {
      if (!contextSafe || !technologyCards || !isInView) return;

      const handleMouseMove = contextSafe((event: MouseEvent) => {
        technologyCards.forEach((card) => {
          const cardLight = card.querySelector(".card-light");

          if (!cardLight) return;

          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;

          cursorX = event.clientX;
          cursorY = event.clientY;

          gsap
            .timeline()
            .to(cardLight, {
              transform: `translate(${event.clientX - cardCenterX}px,${event.clientY - cardCenterY}px)`,
              duration: 0.3,
            })
            .to(cardLight, {
              opacity: 1,
            });
        });
      });

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { dependencies: [isInView], revertOnUpdate: true },
  );

  useGSAP(
    (_context, contextSafe) => {
      if (!contextSafe || !technologyCards || !isInView) return;

      const handleScroll = contextSafe(() => {
        technologyCards.forEach((card) => {
          const cardLight = card.querySelector(".card-light");

          if (!cardLight) return;

          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;

          gsap
            .timeline()
            .to(cardLight, {
              transform: `translate(${cursorX - cardCenterX}px,${cursorY - cardCenterY}px)`,
              duration: 0.3,
            })
            .to(cardLight, {
              opacity: 1,
            });
        });
      });

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    { dependencies: [isInView], revertOnUpdate: true },
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
