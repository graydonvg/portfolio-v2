"use client";

import { useEffect, useRef, useState } from "react";
import NavDrawerToggle from "./nav/nav-drawer-toggle";
import Navbar from "./nav/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let prevScrollY = window.scrollY;

    if (window.scrollY === 0) {
      setIsHeaderVisible(true);
    }

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - prevScrollY;
      const direction = difference > 0 ? "down" : "up";

      if (direction === "up" || currentScrollY === 0) {
        setIsHeaderVisible(true);
      }

      if (direction === "down" && currentScrollY !== 0) {
        setIsHeaderVisible(false);
      }

      prevScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  useGSAP(
    () => {
      gsap.to(headerRef.current, {
        y: isHeaderVisible ? 0 : -80,
        duration: isInitialLoad ? 0.8 : 0.5,
        ease: "power1.out",
        onComplete: () => {
          if (isInitialLoad) {
            setIsInitialLoad(false);
          }
        },
      });
    },
    { dependencies: [isHeaderVisible] },
  );

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed z-50 w-full -translate-y-[80px]"
    >
      <div className="pointer-events-auto">
        <Navbar />
        <NavDrawerToggle />
      </div>
    </header>
  );
}
