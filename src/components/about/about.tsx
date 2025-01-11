"use client";

import TypographyH2 from "../ui/typography/h2";
import Section from "../ui/section";
import { aboutContent } from "@/lib/constants";
import AboutCard from "./about-card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import usePrefersReducedMotion from "@/hooks/use-prefers-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP((_context, contextSafe) => {
    if (prefersReducedMotion || !contextSafe) return;

    gsap.set(".about-card", {
      autoAlpha: 0,
      scale: 0,
    });

    const mm = gsap.matchMedia();

    const tl = gsap.timeline({
      defaults: {
        autoAlpha: 1,
        scale: 1,
        ease: "power1.out",
      },
      scrollTrigger: {
        trigger: "#about-container",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          mm.add("(max-width: 1023px)", () => {
            tl.fromTo(
              ".about-card",
              {
                y: "50%",
                autoAlpha: 0,
                scale: 0,
              },
              {
                y: 0,
              },
            );
          });

          mm.add("(min-width: 1024px)", () => {
            tl.fromTo(
              ".about-card-1",
              {
                y: "50%",
                x: "-50%",
                autoAlpha: 0,
                scale: 0,
              },
              {
                y: 0,
                x: 0,
              },
            )
              .fromTo(
                ".about-card-2",
                {
                  y: "50%",
                  autoAlpha: 0,
                  scale: 0,
                },
                {
                  y: 0,
                },
                0,
              )
              .fromTo(
                ".about-card-3",
                {
                  y: "50%",
                  x: "50%",
                  autoAlpha: 0,
                  scale: 0,
                },
                {
                  y: 0,
                  x: 0,
                },
                0,
              );
          });
        },
        onEnterBack: () => {
          mm.add("(max-width: 1023px)", () => {
            tl.fromTo(
              ".about-card",
              {
                y: "-50%",
                autoAlpha: 0,
                scale: 0,
              },
              {
                y: 0,
              },
            );
          });

          mm.add("(min-width: 1024px)", () => {
            tl.fromTo(
              ".about-card-1",
              {
                y: "-50%",
                x: "-50%",
                autoAlpha: 0,
                scale: 0,
              },
              {
                y: 0,
                x: 0,
              },
            )
              .fromTo(
                ".about-card-2",
                {
                  y: "-50%",
                  autoAlpha: 0,
                  scale: 0,
                },
                {
                  y: 0,
                },
                0,
              )
              .fromTo(
                ".about-card-3",
                {
                  y: "-50%",
                  x: "50%",
                  autoAlpha: 0,
                  scale: 0,
                },
                {
                  y: 0,
                  x: 0,
                },
                0,
              );
          });
        },
        onLeave: () => {
          tl.clear();

          mm.add("(max-width: 1023px)", () => {
            gsap.set(".about-card", {
              y: "-50%",
              autoAlpha: 0,
              scale: 0,
            });
          });

          mm.add("(min-width: 1024px)", () => {
            gsap.set(".about-card-1", {
              y: "-50%",
              x: "-50%",
              autoAlpha: 0,
              scale: 0,
            });
            gsap.set(".about-card-2", {
              y: "-50%",
              autoAlpha: 0,
              scale: 0,
            });
            gsap.set(".about-card-3", {
              y: "-50%",
              x: "50%",
              autoAlpha: 0,
              scale: 0,
            });
          });
        },
        onLeaveBack: () => {
          tl.clear();

          mm.add("(max-width: 1023px)", () => {
            gsap.set(".about-card", {
              y: "50%",
              autoAlpha: 0,
              scale: 0,
            });
          });

          mm.add("(min-width: 1024px)", () => {
            gsap.set(".about-card-1", {
              y: "50%",
              x: "-50%",
              autoAlpha: 0,
              scale: 0,
            });
            gsap.set(".about-card-2", {
              y: "50%",
              autoAlpha: 0,
              scale: 0,
            });
            gsap.set(".about-card-3", {
              y: "50%",
              x: "50%",
              autoAlpha: 0,
              scale: 0,
            });
          });
        },
      },
    });

    const handleResize = contextSafe(() => {
      // Clear transforms and opacity on window resize to avoid lingering x transform (no x transform if vw < 1024px) and keep card visible
      tl.clear();
      gsap.set(".about-card", {
        clearProps: "all",
      });
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
