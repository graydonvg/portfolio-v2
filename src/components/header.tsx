"use client";

import { useEffect, useRef, useState } from "react";
import NavDrawerToggle from "./nav/nav-drawer-toggle";
import Navbar from "./nav/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useScrollDirection from "@/hooks/use-scroll-direction";
import useWindowScrollY from "@/hooks/use-window-scroll-y";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Header() {
  const scrollDirection = useScrollDirection();
  const currentScrollY = useWindowScrollY();
  const headerRef = useRef<HTMLElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    if (scrollDirection === "up" || currentScrollY === 0) {
      setIsNavbarVisible(true);
    }

    if (scrollDirection === "down" && currentScrollY !== 0) {
      setIsNavbarVisible(false);
    }
  }, [scrollDirection, currentScrollY]);

  useGSAP(
    () => {
      gsap.to(headerRef.current, {
        y: isNavbarVisible ? 0 : -100,
        duration: isInitialLoad ? 0.8 : 0.5,
        ease: "power1.out",
        onComplete: () => {
          if (isInitialLoad) {
            setIsInitialLoad(false);
          }
        },
      });
    },
    { dependencies: [isNavbarVisible] },
  );

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed z-50 w-full -translate-y-[100px]"
    >
      <Navbar />
      <NavDrawerToggle />
    </header>
  );
}
