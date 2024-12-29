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
import { useEffect } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function NavDrawer() {
  const { isNavDrawerOpen, toggleNavDrawer } = useDrawerStore();
  const internalLinks = navLinks.filter((link) => link.internalLink);
  const externalLinks = navLinks.filter((link) => link.externalLink);

  useEffect(() => {
    if (isNavDrawerOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isNavDrawerOpen) {
      document.body.style.overflow = "visible";
    }
  }, [isNavDrawerOpen]);

  function handleLinkClick(link: string) {
    toggleNavDrawer();

    if (link === "#contact") {
      handleScrollToContactForm();
    } else {
      handleScrollToInternalLink(link, 48);
    }
  }

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
      className={cn(
        "fixed inset-0 z-40 size-full -translate-x-full transform bg-background/90 px-8 pt-24 font-bold transition-transform duration-300 md:hidden",
        {
          "translate-x-0": isNavDrawerOpen,
        },
      )}
    >
      <ul className="flex flex-col items-start justify-start gap-8 text-3xl">
        {internalLinks.map((link, index) => (
          <li key={index} className="nav-drawer-item -translate-x-[150%]">
            <button
              onClick={() => handleLinkClick(link.internalLink!)}
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
              onClick={toggleNavDrawer}
              href={link.externalLink!}
              target="_blank"
              rel="noopener noreferrer"
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
