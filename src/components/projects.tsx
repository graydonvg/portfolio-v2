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
import Image from "next/image";
import TypographyP from "./ui/typography/p";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Section from "./ui/section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Projects() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects-container",
          start: "20% bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        ".project",
        { x: "-110%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.inOut",
          stagger: {
            amount: 0.5,
            from: "start",
          },
        },
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects-container",
          start: "20% bottom",
          end: "bottom top",
          toggleActions: "none reverse play none",
        },
      })
      .fromTo(
        ".project",
        { x: "110%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.inOut",
          stagger: {
            amount: 0.5,
            from: "end",
          },
        },
      );
  });

  return (
    <Section id="projects">
      <TypographyH2>
        Selected <span className="text-accent">Projects</span>
      </TypographyH2>

      <Accordion
        type="single"
        collapsible
        className="projects-container w-full space-y-6 sm:space-y-8"
      >
        {projects.map((project, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="project"
          >
            <AccordionTrigger className="p-4 sm:p-6">
              <div className="flex items-center justify-end gap-2">
                <span className="text-h3 font-semibold tracking-tight text-accent">
                  0{index + 1}.
                </span>
                <TypographyH3>{project.title}</TypographyH3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2 h-fit rounded-lg border border-border bg-card p-6">
              <div className="relative flex h-full flex-col gap-8 md:flex-row">
                <Image
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="size-full rounded-lg md:w-1/2"
                  sizes="(min-width: 1540px) 711px, (min-width: 1280px) 583px, (min-width: 1040px) 455px, (min-width: 780px) 327px, (min-width: 640px) 526px, calc(100vw - 82px)"
                />
                {project.links.website?.length === 0 && (
                  <div className="absolute left-0 top-0 flex size-full items-center justify-center rounded-lg bg-zinc-950/80 text-center text-2xl text-white md:w-1/2">
                    Coming soon
                  </div>
                )}
                <div className="flex flex-col justify-between">
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
                      <Button variant="secondary" className="w-full">
                        Repository
                      </Button>
                    </Link>
                    {project.links.website ||
                      (project.links.website?.length === 0 && (
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
                            "cursor-not-allowed":
                              project.links.website.length === 0,
                          })}
                        >
                          <Button
                            className="w-full"
                            disabled={project.links.website.length === 0}
                          >
                            View website
                          </Button>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
