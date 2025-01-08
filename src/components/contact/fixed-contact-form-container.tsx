"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactMe from "./contact-me";
import useFormStore from "@/lib/store/use-form-store";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FixedContactFormContainer() {
  const { formHasError } = useFormStore();
  const measurementDivRef = useRef<HTMLDivElement>(null);
  const contactFormContainerRef = useRef<HTMLDivElement>(null);
  const projectsSection =
    typeof window !== "undefined" ? document.getElementById("projects") : null;

  useGSAP(
    () => {
      if (!contactFormContainerRef.current || !measurementDivRef.current)
        return;

      const contactFormContainer = contactFormContainerRef.current;
      // Mobile devices calculate the browser viewport as (top bar + document + bottom bar) = 100vh
      // Using measurementDiv height (100vh) instead of window height so that it takes mobile browser bars into account
      const windowHeight = measurementDivRef.current.offsetHeight;
      const contactFormContainerHeight = contactFormContainer.offsetHeight;

      // We never want it to overlap more than the height of the screen
      function getOverlap() {
        return Math.min(windowHeight, contactFormContainerHeight);
      }

      // Adjusts the margin-top of the contact section to overlap the proper amount
      function adjustOverlap() {
        contactFormContainer.style.marginTop = `-${getOverlap()}px`; // shifts the container up
      }

      adjustOverlap(); // Set initial contact section margin

      ScrollTrigger.create({
        trigger: contactFormContainer,
        start: () => `top ${windowHeight - getOverlap()}`,
        end: () => `+=${getOverlap()}`,
        pin: true,
      });

      const projectsObserver = new ResizeObserver(() => {
        // From the docs https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()

        // ScrollTrigger.refresh() recalculates the positioning of all of the ScrollTriggers on the page
        // Use, for example, if you make changes to the DOM that would cause a reflow and position changes like expanding content (accordion, contact form on error).

        // 			What happens when you refresh?

        // Each ScrollTrigger will go through the following steps (in the order they were created):
        // A "refreshInit" event is dispatched
        // Any pinned elements are temporarily reverted to their non-pinned state (their natural place in the document flow)
        // If scrub is enabled, the animation gets temporarily reset to its beginning
        // The ScrollTrigger's start and end positions are recalculated based on the current DOM (natural flow). This also means that if you used a function-based value for start or end, it will be called.
        // Any pinned elements and animations are re-enabled according to the new position/progress.
        // An update() is called which will trigger any appropriate callbacks if the progress changed.
        // The ScrollTrigger instance's onRefresh callback fires.
        ScrollTrigger.refresh();
      });

      // Watch for changes in the main projects section height (e.g. accordion expanded)
      if (projectsSection) projectsObserver.observe(projectsSection);

      if (formHasError) {
        // Ensure the overlap does not cover the form when the height changes due to error messages
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "instant",
        });
      }

      return () => {
        projectsObserver.disconnect();
      };
    },
    { dependencies: [formHasError], revertOnUpdate: true },
  );

  return (
    <>
      <div
        ref={measurementDivRef}
        className="pointer-events-none absolute -z-50 h-screen w-full select-none"
      />
      <div ref={contactFormContainerRef} className="!size-full">
        <ContactMe />
      </div>
    </>
  );
}
