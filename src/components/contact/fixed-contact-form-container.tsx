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
  const mainSection =
    typeof window !== "undefined" ? document.querySelector("main") : null;
  const contactSection =
    typeof window !== "undefined" ? document.getElementById("contact") : null;

  useGSAP(
    () => {
      if (!contactFormContainerRef.current || !hero) return;

      const contactFormContainer = contactFormContainerRef.current;
      // Mobile devices calculate the browser viewport as (top bar + document + bottom bar) = 100vh
      // Using hero height (100vh) instead of window height so that it takes mobile browser bars into account
      const windowHeight = hero.offsetHeight;
      const contactFormContainerHeight = contactFormContainer.offsetHeight;

      // We never want it to overlap more than the height of the screen
      function getOverlap() {
        return Math.min(windowHeight, contactFormContainerHeight);
      }

      // Adjusts the margin-top of the contact section to overlap the proper amount
      function adjustFooterOverlap() {
        contactFormContainer.style.marginTop = `-${getOverlap()}px`;
      }

      adjustFooterOverlap(); // Set initial contact section margin

      ScrollTrigger.create({
        trigger: contactFormContainer,
        start: () => `top ${windowHeight - getOverlap()}`,
        end: () => `+=${getOverlap()}`,
        pin: true,
        invalidateOnRefresh: true,
      });

      const observer = new ResizeObserver(() => {
        ScrollTrigger.refresh(); // Recalculate ScrollTrigger on element size change
      });

      // Watch for changes in the main section height (e.g. accordion expanded)
      if (mainSection) observer.observe(mainSection);
      // Watch for changes in the contact section height (form error messages change the height)
      if (contactSection) observer.observe(contactSection);

      return () => {
        observer.disconnect();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { revertOnUpdate: true },
  );

  return (
    <div ref={contactFormContainerRef} className="!w-full !max-w-full bg-card">
      <ContactMe />
    </div>
  );
}
