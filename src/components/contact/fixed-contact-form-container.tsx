"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactMe from "./contact-me";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FixedContactFormContainer() {
  const contactFormContainerRef = useRef<HTMLDivElement>(null);
  const hero =
    typeof window !== "undefined" ? document.getElementById("hero") : null;

  useGSAP(() => {
    // Mobile devices calculate the browser viewport as (top bar + document + bottom bar) = 100vh
    // Using hero height (100vh) instead of window height so that it take mobile browser bars into account
    const windowHeight = hero?.offsetHeight || 0;
    const footerHeight = contactFormContainerRef?.current?.offsetHeight
      ? contactFormContainerRef.current.offsetHeight
      : 0;

    // We never want it to overlap more than the height of the screen
    function getOverlap() {
      return Math.min(windowHeight, footerHeight);
    }

    // Adjusts the margin-top of the contact section to overlap the proper amount
    function adjustFooterOverlap() {
      if (!contactFormContainerRef.current) return;
      contactFormContainerRef.current.style.marginTop = `-${getOverlap()}px`;
    }

    adjustFooterOverlap(); // Set initial contact section margin

    gsap.set(contactFormContainerRef.current, {
      scrollTrigger: {
        trigger: contactFormContainerRef.current,
        start: () => `top ${windowHeight - getOverlap()}`,
        end: () => `+=${getOverlap()}`,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <div ref={contactFormContainerRef} className="!w-full !max-w-full bg-card">
      <ContactMe />
    </div>
  );
}
