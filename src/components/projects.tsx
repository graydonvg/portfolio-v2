"use client";

import { projects } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import TypographyH2 from "./ui/typography/h2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TypographyH3 from "./ui/typography/h3";
import Image, { StaticImageData } from "next/image";
import TypographyP from "./ui/typography/p";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Section from "./ui/section";
import { useState } from "react";
import useScrollY from "@/hooks/use-scroll-y";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Projects() {
  const { scrollDirection } = useScrollY();
  const [isInView, setIsInView] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#projects-accordion",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reset play reset",

          onEnter: () => {
            setIsInView(true);
          },
          onEnterBack: () => setIsInView(true),
          onLeave: () => setIsInView(false),
          onLeaveBack: () => setIsInView(false),
        },
      });

      if (isInView) return;

      tl.fromTo(
        ".project",
        { x: scrollDirection === "down" ? "-110%" : "110%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
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
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="project"
            >
              {/* Prefetch accordion images once in view */}
              {/* Accordion content not rendered until expanded so cannot load images once they scroll into view */}
              <div className="hidden h-0 w-0">
                {project.image && (
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} preloaded`}
                    isInView={isInView}
                  />
                )}

                {project.video && (
                  <ProjectImage
                    src={project.video.placeholderImage}
                    alt={`${project.title} mockup`}
                    isInView={isInView}
                  />
                )}
              </div>

              <AccordionTrigger className="focus-ring p-4 sm:p-6">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-h3 font-semibold tracking-tight text-accent">
                    0{index + 1}.
                  </span>
                  <TypographyH3>{project.title}</TypographyH3>
                </div>
              </AccordionTrigger>

              <AccordionContent className="mt-1 flex h-fit flex-col gap-8 rounded-lg border border-border bg-card p-6 lg:flex-row">
                <div className="relative size-full">
                  {project.image && (
                    <ProjectImage
                      src={project.image}
                      alt={`${project.title} mockup`}
                      className="size-full rounded-lg"
                    />
                  )}

                  {project.video && (
                    <>
                      <ProjectImage
                        src={project.video.placeholderImage}
                        alt={`${project.title} mockup`}
                        className="size-full rounded-lg"
                      />
                      <video
                        src={project.video.src}
                        autoPlay
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        className={cn(
                          "absolute left-0 top-0 hidden size-full rounded-lg",
                          {
                            block: isVideoLoaded,
                          },
                        )}
                        onLoadedData={() => setIsVideoLoaded(true)}
                      />
                    </>
                  )}

                  {project.links.website?.length === 0 && (
                    <div className="absolute left-0 top-0 flex size-full items-center justify-center rounded-lg bg-zinc-950/80 text-center text-2xl text-white">
                      Coming soon
                    </div>
                  )}
                </div>

                <div className="flex w-full flex-col justify-between">
                  <div className="space-y-6">
                    <TypographyP>{project.description}</TypographyP>
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_0_0_1px] md:text-sm/5"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-6 pt-12">
                    <Link
                      tabIndex={-1}
                      href={project.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="secondary"
                        className="w-full"
                        reduceScaleOnHover={project.links.website === null}
                      >
                        Repository
                      </Button>
                    </Link>
                    {project.links.website !== null && (
                      <Link
                        tabIndex={-1}
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (project.links.website?.length === 0) {
                            e.preventDefault();
                          }
                        }}
                        className={cn("flex-1", {
                          "cursor-not-allowed": project.links.website === "",
                        })}
                      >
                        <Button
                          className="w-full"
                          disabled={project.links.website === ""}
                        >
                          View website
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

type ProjectImageProps = {
  src: StaticImageData;
  alt: string;
  isInView?: boolean;
  className?: string;
};

function ProjectImage({ src, alt, isInView, className }: ProjectImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      priority={isInView}
      className={className}
      sizes="(min-width: 1540px) 695px, (min-width: 1280px) 567px, (min-width: 1040px) 439px, (min-width: 780px) 654px, (min-width: 640px) 526px, calc(100vw - 82px)"
    />
  );
}
