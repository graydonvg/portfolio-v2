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
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const navLinksContainerRef = useRef<HTMLDivElement>(null);
  const navLinkBackgroundBeforeRef = useRef<HTMLDivElement>(null);
  const navLinkBackgroundAfterRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
  const internalLinks = navLinks.filter((link) => link.internalLink);
  const externalLinks = navLinks.filter((link) => link.externalLink);

  useGSAP((_context, contextSafe) => {
    const navLinkBackgroundBefore = navLinkBackgroundBeforeRef.current;
    const navLinkBackgroundAfter = navLinkBackgroundAfterRef.current;
    const nav = navRef.current;
    const navLinksContainer = navLinksContainerRef.current;

    if (
      !navLinkBackgroundBefore ||
      !navLinkBackgroundAfter ||
      !linkRefs.current ||
      !nav ||
      !navLinksContainer ||
      !contextSafe
    )
      return;

    function getNavRect() {
      return nav!.getBoundingClientRect();
    }

    let isFirstMouseEnter = true;

    const handleMouseEnter = contextSafe((e: Event) => {
      const target = e.target as HTMLElement;
      const targetRect = target.getBoundingClientRect();
      const navRect = getNavRect();
      const tl = gsap.timeline({ defaults: { duration: 0.3 } });

      const linkBackgroundLeft = targetRect.left - navRect.left;
      const linkBackgroundHeight = targetRect.height;
      const linkBackgroundWidth = targetRect.width;

      if (isFirstMouseEnter) {
        tl.set(navLinkBackgroundBefore, {
          left: linkBackgroundLeft,
          height: linkBackgroundHeight,
          width: targetRect.width,
          autoAlpha: 1,
        });
        tl.set(
          navLinkBackgroundAfter,
          {
            left: linkBackgroundLeft,
            height: linkBackgroundHeight,
            width: linkBackgroundWidth,
            autoAlpha: 1,
          },
          0,
        );

        isFirstMouseEnter = false;
      }

      if (!isFirstMouseEnter) {
        tl.to(navLinkBackgroundBefore, {
          left: linkBackgroundLeft,
          height: linkBackgroundHeight,
          width: linkBackgroundWidth,
          autoAlpha: 1,
        });
        tl.to(
          navLinkBackgroundAfter,
          {
            left: linkBackgroundLeft,
            height: linkBackgroundHeight,
            width: linkBackgroundWidth,
            autoAlpha: 1,
          },
          0,
        );
      }
    });

    const handleMouseLeave = contextSafe(() => {
      isFirstMouseEnter = true;
      const tl = gsap.timeline({ defaults: { duration: 0.3 } });

      tl.to(navLinkBackgroundBefore, {
        autoAlpha: 0,
      });
      tl.to(
        navLinkBackgroundAfter,
        {
          autoAlpha: 0,
        },
        0,
      );
    });

    linkRefs.current.forEach((link) => {
      link?.addEventListener("mouseenter", handleMouseEnter);
    });

    navLinksContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (!linkRefs.current) return;

      linkRefs.current.forEach((link) => {
        link?.removeEventListener("mouseenter", handleMouseEnter);
      });

      navLinksContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div className="relative mx-auto mt-[clamp(1rem,2.4vh,1.5rem)] hidden w-fit overflow-hidden rounded-3xl md:block">
      <div
        ref={navLinkBackgroundBeforeRef}
        className="pointer-events-none invisible absolute top-1/2 -translate-y-1/2 rounded-3xl bg-primary opacity-0"
      />
      <nav
        ref={navRef}
        aria-label="primary navigation"
        className="relative overflow-hidden rounded-3xl border border-border p-2 backdrop-blur-3xl"
      >
        <div
          ref={navLinkBackgroundAfterRef}
          className="pointer-events-none invisible absolute -z-10 rounded-3xl bg-primary opacity-0"
        />

        <div ref={navLinksContainerRef} className="flex justify-between">
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
                      <ICON className="text-base text-accent transition-colors group-hover:can-hover:text-foreground" />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
