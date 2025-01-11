"use client";

import { navLinks } from "@/lib/constants";
import {
  handleScrollToContactForm,
  handleScrollToInternalLink,
} from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const navLinkBackgroundBeforeRef = useRef<HTMLDivElement>(null);
  const navLinkBackgroundAfterRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
  const isFirstMouseEnterRef = useRef(true);
  const internalLinks = navLinks.filter((link) => link.internalLink);
  const externalLinks = navLinks.filter((link) => link.externalLink);

  useGSAP((_context, contextSafe) => {
    const navLinkBackgroundBefore = navLinkBackgroundBeforeRef.current;
    const navLinkBackgroundAfter = navLinkBackgroundAfterRef.current;
    const nav = navRef.current;

    if (
      !navLinkBackgroundBefore ||
      !navLinkBackgroundAfter ||
      !linkRefs.current ||
      !nav ||
      !contextSafe
    )
      return;

    function getNavRect() {
      return nav!.getBoundingClientRect();
    }

    const handleMouseEnter = contextSafe((e: Event) => {
      const target = e.target as HTMLElement;
      const targetRect = target.getBoundingClientRect();
      const navRect = getNavRect();
      const tl = gsap.timeline({ defaults: { duration: 0.3 } });

      const linkBackgroundLeft = targetRect.left - navRect.left;
      const linkBackgroundHeight = targetRect.height;
      const linkBackgroundWidth = targetRect.width;

      if (isFirstMouseEnterRef.current) {
        tl.set(navLinkBackgroundBefore, {
          left: linkBackgroundLeft,
          height: linkBackgroundHeight,
          width: targetRect.width,
          opacity: 1,
        });
        tl.set(
          navLinkBackgroundAfter,
          {
            left: linkBackgroundLeft,
            height: linkBackgroundHeight,
            width: linkBackgroundWidth,
            opacity: 1,
          },
          0,
        );

        isFirstMouseEnterRef.current = false;
      }

      if (!isFirstMouseEnterRef.current) {
        tl.to(navLinkBackgroundBefore, {
          left: linkBackgroundLeft,
          height: linkBackgroundHeight,
          width: linkBackgroundWidth,
          opacity: 1,
        });
        tl.to(
          navLinkBackgroundAfter,
          {
            left: linkBackgroundLeft,
            height: linkBackgroundHeight,
            width: linkBackgroundWidth,
            opacity: 1,
          },
          0,
        );
      }
    });

    const handleMouseLeave = contextSafe(() => {
      isFirstMouseEnterRef.current = true;
      const tl = gsap.timeline({ defaults: { duration: 0.3 } });

      tl.to(navLinkBackgroundBefore, {
        opacity: 0,
      });
      tl.to(
        navLinkBackgroundAfter,
        {
          opacity: 0,
        },
        0,
      );
    });

    linkRefs.current.forEach((link) => {
      link?.addEventListener("mouseenter", handleMouseEnter);
    });

    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!linkRefs.current) return;

      linkRefs.current.forEach((link) => {
        link?.removeEventListener("mouseenter", handleMouseEnter);
      });

      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div className="relative mx-auto mt-[clamp(1rem,2.4vh,1.5rem)] hidden w-fit overflow-hidden rounded-3xl md:block">
      <div
        ref={navLinkBackgroundBeforeRef}
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-3xl bg-primary opacity-0"
      />
      <nav
        ref={navRef}
        aria-label="primary navigation"
        className="relative flex overflow-hidden rounded-3xl border border-border p-2 backdrop-blur-3xl"
      >
        <div
          ref={navLinkBackgroundAfterRef}
          className="pointer-events-none absolute -z-10 rounded-3xl bg-primary opacity-0"
        />

        <ul className="flex items-center justify-center">
          {internalLinks.map((link, index) => (
            <li key={index}>
              <button
                aria-label={`scroll to ${link.label}`}
                role="link"
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                onClick={() =>
                  link.internalLink === "#contact"
                    ? handleScrollToContactForm()
                    : handleScrollToInternalLink(link.internalLink!)
                }
                className="focus-ring rounded-3xl px-4 py-1"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="-z-20 mx-2 border-l border-border" />
        <ul className="flex items-center justify-center">
          {externalLinks.map((link, index) => {
            const ICON = link.icon && icons[link.icon as keyof typeof icons];

            return (
              <li key={index}>
                <Link
                  href={link.externalLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`open graydon's ${link.label} in a new tab`}
                  ref={(el) => {
                    linkRefs.current[internalLinks.length + index] = el;
                  }}
                  className="focus-ring group flex items-center gap-2 rounded-3xl px-4 py-1"
                >
                  {ICON && (
                    <ICON className="text-base text-accent transition-colors duration-300 group-hover:can-hover:text-foreground" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
