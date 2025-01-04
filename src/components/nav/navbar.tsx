"use client";

import { navLinks } from "@/lib/constants";
import {
  handleScrollToContactForm,
  handleScrollToInternalLink,
} from "@/lib/utils";
import Link from "next/link";
import { MouseEvent, useRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const navLinkOverlayBeforeRef = useRef<HTMLDivElement>(null);
  const navLinkOverlayAfterRef = useRef<HTMLDivElement>(null);
  const internalLinks = navLinks.filter((link) => link.internalLink);
  const externalLinks = navLinks.filter((link) => link.externalLink);

  function handleMouseEnter(
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) {
    const target = e.target as HTMLElement;

    const targetRect = target.getBoundingClientRect();

    const navRect = navRef.current?.getBoundingClientRect();

    if (
      navLinkOverlayAfterRef.current &&
      navLinkOverlayBeforeRef.current &&
      navRect
    ) {
      navLinkOverlayAfterRef.current.style.opacity = "1";
      navLinkOverlayAfterRef.current.style.left =
        targetRect.left - navRect.left + "px";
      navLinkOverlayAfterRef.current.style.top =
        targetRect.top - navRect.top + "px";
      navLinkOverlayAfterRef.current.style.height = targetRect.height + "px";
      navLinkOverlayAfterRef.current.style.width = targetRect.width + "px";

      navLinkOverlayBeforeRef.current.style.opacity = "1";
      navLinkOverlayBeforeRef.current.style.left =
        targetRect.left - navRect.left + "px";
      navLinkOverlayBeforeRef.current.style.top =
        targetRect.top - navRect.top + "px";
      navLinkOverlayBeforeRef.current.style.height = targetRect.height + "px";
      navLinkOverlayBeforeRef.current.style.width = targetRect.width + "px";
    }
  }

  function handleMouseLeave() {
    if (!navLinkOverlayAfterRef.current || !navLinkOverlayBeforeRef.current)
      return;

    navLinkOverlayBeforeRef.current.style.opacity = "0";
    navLinkOverlayAfterRef.current.style.opacity = "0";
  }

  return (
    <div className="relative mx-auto mt-[clamp(1rem,2.4vh,1.5rem)] hidden w-fit rounded-3xl md:block">
      <div
        ref={navLinkOverlayBeforeRef}
        className="pointer-events-none absolute rounded-3xl bg-primary opacity-0 transition-all duration-300"
      />
      <nav
        ref={navRef}
        aria-label="primary navigation"
        className="relative flex overflow-hidden rounded-3xl border border-border p-2 backdrop-blur-3xl"
      >
        <div
          ref={navLinkOverlayAfterRef}
          className="pointer-events-none absolute -z-10 rounded-3xl bg-primary opacity-0 transition-all duration-300"
        />

        <ul className="flex items-center justify-center">
          {internalLinks.map((link, index) => (
            <li key={index}>
              <button
                aria-label={`scroll to ${link.label}`}
                role="link"
                onClick={() =>
                  link.internalLink === "#contact"
                    ? handleScrollToContactForm()
                    : handleScrollToInternalLink(link.internalLink!)
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="focus-ring rounded-3xl px-4 py-1"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="-z-20 border-l border-border" />
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
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
