"use client";

import { useEffect, useRef, useState } from "react";
import NavDrawerToggle from "./nav/nav-drawer-toggle";
import Navbar from "./nav/navbar";
import useWindowScrollY from "@/hooks/use-window-scroll-y";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const currentScrollY = useWindowScrollY();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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
    <header ref={headerRef} className="fixed z-50 w-full -translate-y-[100px]">
      <Navbar />
      <NavDrawerToggle />
    </header>
  );
}
