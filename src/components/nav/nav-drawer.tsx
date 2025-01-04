"use client";

import { navLinks } from "@/lib/constants";
import {
  cn,
  handleScrollToContactForm,
  handleScrollToInternalLink,
} from "@/lib/utils";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useDrawerStore from "@/lib/store/use-drawer-store";
import { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function NavDrawer() {
  const { isNavDrawerOpen, toggleNavDrawer } = useDrawerStore();
  const navDrawerRef = useRef<HTMLElement>(null);
  const firstNavItemRef = useRef<HTMLElement>(null);
  const lastNavItemRef = useRef<HTMLAnchorElement>(null);
  const internalLinks = navLinks.filter((link) => link.internalLink);
  const externalLinks = navLinks.filter((link) => link.externalLink);

  function handleScrollLinkClick(link: string) {
    toggleNavDrawer();

    // body overflow is set to hidden when drawer is open
    // body overflow is set to visible when drawer is closed
    // This leads to race condition (attempt to scroll before overflow = visible)
    // requestAnimationFrame schedules the callback to run just before the next repaint
    requestAnimationFrame(() => {
      // In some cases, there might be a delay in processing the changes, so the second call acts as a safeguard to ensure that the layout changes are finalized and that the next action (scrolling) occurs after everything is rendered.
      requestAnimationFrame(() => {
        if (link === "#contact") {
          handleScrollToContactForm();
        } else {
          handleScrollToInternalLink(link);
        }
      });
    });
  }

  useEffect(() => {
    if (isNavDrawerOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isNavDrawerOpen) {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isNavDrawerOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isNavDrawerOpen) {
        toggleNavDrawer();
        document.getElementById("nav-drawer-toggle")?.focus();
      }
    };

    if (isNavDrawerOpen) {
      document.addEventListener("keydown", handleKeyDown);
      firstNavItemRef.current?.focus();
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isNavDrawerOpen, toggleNavDrawer]);

  useEffect(() => {
    // Trap focus within the drawer when it's open
    const navDrawer = navDrawerRef.current;

    if (isNavDrawerOpen && navDrawer) {
      const firstNavItem = firstNavItemRef.current;
      const lastNavItem = lastNavItemRef.current;

      const handleTabKey = (e: KeyboardEvent) => {
        // Trap focus on Tab
        if (e.key === "Tab") {
          console.log("Currently focused element:", document.activeElement);
          if (e.shiftKey) {
            // If Shift + Tab is pressed, move focus backwards
            if (document.activeElement === firstNavItem) {
              e.preventDefault();
              lastNavItem?.focus();
            }
          } else {
            // If Tab is pressed, move focus forwards
            if (document.activeElement === lastNavItem) {
              e.preventDefault();
              firstNavItem?.focus();
            }
          }
        }
      };

      navDrawer.addEventListener("keydown", handleTabKey);

      return () => {
        navDrawer.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [isNavDrawerOpen]);

  useGSAP(
    () => {
      if (isNavDrawerOpen) {
        gsap.to(".nav-drawer-item", {
          x: 0,
          duration: 0.3,
          ease: "power1.out",
          stagger: {
            amount: 0.3,
          },
        });
      }

      if (!isNavDrawerOpen) {
        gsap.to(".nav-drawer-item", {
          x: "-150%",
        });
      }
    },
    { dependencies: [isNavDrawerOpen] },
  );

  return (
    <nav
      id="nav-drawer"
      ref={navDrawerRef}
      aria-labelledby="nav-drawer-heading"
      tabIndex={-1}
      className={cn(
        "fixed inset-0 z-40 size-full -translate-x-full transform bg-background/90 px-8 pt-24 font-bold transition-transform duration-300 md:hidden",
        {
          "translate-x-0": isNavDrawerOpen,
        },
      )}
    >
      <h2 id="nav-drawer-heading" className="sr-only">
        Navigation Drawer
      </h2>
      <ul className="flex flex-col items-start justify-start gap-8 text-3xl">
        {internalLinks.map((link, index) => (
          <li key={index} className="nav-drawer-item -translate-x-[150%]">
            <button
              ref={(el) => {
                if (index === 0) {
                  firstNavItemRef.current = el;
                }
              }}
              aria-label={`scroll to ${link.label}`}
              onClick={() => handleScrollLinkClick(link.internalLink!)}
              className="focus-ring"
            >
              <span className="mr-2 text-accent">0{index + 1}.</span>
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-drawer-item my-8 border-t border-white/50" />
      <ul className="flex flex-col items-start justify-start gap-8 text-3xl">
        {externalLinks.map((link, index) => (
          <li key={index} className="nav-drawer-item -translate-x-[150%]">
            <Link
              ref={(el) => {
                if (index === externalLinks.length - 1) {
                  lastNavItemRef.current = el;
                }
              }}
              href={link.externalLink!}
              onClick={toggleNavDrawer}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`open ${link.label} in a new tab`}
              className="focus-ring inline-flex size-fit items-center gap-2"
            >
              <span className="text-accent">
                {link.label === "GitHub" ? (
                  <FiGithub size={30} />
                ) : (
                  <FiLinkedin size={30} />
                )}
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
