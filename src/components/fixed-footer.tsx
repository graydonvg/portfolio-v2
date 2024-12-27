"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactMe from "./contact/contact-me";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FixedFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const hero =
    typeof window !== "undefined" ? document.getElementById("hero") : null;

  useGSAP(() => {
    const heroHeight = hero?.offsetHeight ? hero.offsetHeight : 0;
    const footerHeight = footerRef?.current?.offsetHeight
      ? footerRef.current.offsetHeight
      : 0;
    // We never want it to overlap more than the height of the screen
    // Mobile devices calculate the browser viewport as (top bar + document + bottom bar) = 100vh
    // Using hero height because it is 100vh
    // This ensures that the footer is set to fixed
    function getOverlap() {
      return Math.min(heroHeight, footerHeight);
    }

    // Adjusts the margin-top of the footer to overlap the proper amount
    function adjustFooterOverlap() {
      if (!footerRef.current) return;
      footerRef.current.style.marginTop = `-${getOverlap()}px`;
    }

    adjustFooterOverlap(); // Set initial footer margin

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: () => `top ${heroHeight - getOverlap()}`,
      end: () => `+=${getOverlap()}`,
      pin: true,
    });

    // To make it responsive, re-calculate the margin-top on the footer when the ScrollTriggers revert
    // @ts-expect-error supported event 'revert' but not included in types
    ScrollTrigger.addEventListener("revert", adjustFooterOverlap);

    return () => {
      // @ts-expect-error supported event 'revert' but not included in types
      ScrollTrigger.removeEventListener("revert", adjustFooterOverlap);
      ScrollTrigger.killAll();
    };
  });

  return (
    <footer ref={footerRef} className="!w-full !max-w-full">
      <ContactMe />
    </footer>
  );
}
