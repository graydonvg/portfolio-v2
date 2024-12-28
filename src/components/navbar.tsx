"use client";

import { navLinks } from "@/lib/constants";
import {
  cn,
  handleScrollToContactForm,
  handleScrollToInternalLink,
} from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useWindowScrollY from "@/hooks/use-window-scroll-y";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Menu, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Navbar() {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const navLinkOverlay = useRef<HTMLDivElement>(null);
  const navLinkButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const currentScrollY = useWindowScrollY();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const internalLinks = navLinks.filter((link) => link.internalLink);
  const externalLinks = navLinks.filter((link) => link.externalLink);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isNavOpen) {
      document.body.style.overflow = "visible";
    }
  }, [isNavOpen]);

  function toggleNav() {
    setIsNavOpen((prevState) => !prevState);
  }

  function closeNav() {
    setIsNavOpen(false);
  }

  function handleLinkClick(link: string) {
    closeNav();

    if (link === "#contact") {
      handleScrollToContactForm();
    } else {
      handleScrollToInternalLink(link, 48);
    }
  }

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavbarVisible(true);
    }

    if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
    }

    if (currentScrollY < lastScrollY) {
      setIsNavbarVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useGSAP(
    () => {
      gsap.to(navContainerRef.current, {
        y: isNavbarVisible ? 0 : -100,
        duration: 0.8,
        ease: "power1.out",
      });

      gsap.to(navRef.current, {
        opacity: isNavbarVisible ? 1 : 0,
        duration: 0.8,
        ease: "power1.out",
      });
    },
    { dependencies: [isNavbarVisible] },
  );

  useGSAP(
    () => {
      if (isNavOpen) {
        gsap.to(".nav-drawer-item", {
          x: 0,
          ease: "power1.out",
          stagger: {
            amount: 0.3,
            from: "center",
          },
        });
      }
      if (!isNavOpen) {
        gsap.to(".nav-drawer-item", {
          x: "-150%",
        });
      }
    },
    { dependencies: [isNavOpen] },
  );

  useEffect(() => {
    const navButtons = navLinkButtons.current;

    if (!navButtons) return;

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;

      const targetRect = target.getBoundingClientRect();

      const navRect = navRef.current?.getBoundingClientRect();

      if (navLinkOverlay.current && navRect) {
        navLinkOverlay.current.style.opacity = "1";
        navLinkOverlay.current.style.left =
          targetRect.left - navRect.left + "px";
        navLinkOverlay.current.style.top = targetRect.top - navRect.top + "px";
        navLinkOverlay.current.style.height = targetRect.height + "px";
        navLinkOverlay.current.style.width = targetRect.width + "px";
      }
    }

    function handleMouseLeave() {
      if (!navLinkOverlay.current) return;

      navLinkOverlay.current.style.opacity = "0";
    }

    navButtons.forEach((navButton) => {
      navButton?.addEventListener("mouseenter", handleMouseOver);
      navButton?.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navButtons.forEach((navButton) => {
        navButton?.removeEventListener("mouseenter", handleMouseOver);
        navButton?.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={navContainerRef}
      className="fixed z-50 flex w-full -translate-y-[100px] justify-center font-bold"
    >
      <nav
        ref={navRef}
        className="relative mx-auto mt-8 hidden items-center justify-center rounded-3xl border border-border p-2 opacity-0 backdrop-blur-3xl md:flex"
      >
        <div
          ref={navLinkOverlay}
          className="absolute -z-10 rounded-3xl bg-primary opacity-0 transition-all duration-300"
        />

        <ul className="flex items-center justify-center gap-0 p-2">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="border-border [&:nth-last-child(2)]:border-l"
            >
              {link.internalLink ? (
                <button
                  ref={(el) => {
                    navLinkButtons.current[index] = el;
                  }}
                  onClick={() =>
                    link.internalLink === "#contact"
                      ? handleScrollToContactForm()
                      : handleScrollToInternalLink(link.internalLink!, 48)
                  }
                  className="focus-ring rounded-3xl px-4 py-1"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  tabIndex={-1}
                  href={link.externalLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-fit"
                >
                  <button
                    ref={(el) => {
                      navLinkButtons.current[index] = el;
                    }}
                    className="focus-ring rounded-3xl px-4 py-1"
                  >
                    {link.label}
                  </button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div
        onClick={toggleNav}
        className="absolute right-5 top-5 z-50 rounded border border-white/70 p-2 text-white/70 backdrop-blur-3xl md:hidden"
      >
        {isNavOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <nav
        className={cn(
          "inset-0 h-screen w-screen -translate-x-full transform bg-background/90 px-8 pt-24 transition-transform duration-300 md:hidden",
          {
            "translate-x-0": isNavOpen,
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
                onClick={closeNav}
                href={link.externalLink!}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex size-fit items-center gap-2"
              >
                <span className="text-accent">
                  <ArrowUpRight size={30} />
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
