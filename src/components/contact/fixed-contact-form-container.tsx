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
  const measurementDivRef = useRef<HTMLDivElement>(null);
  const contactFormContainerRef = useRef<HTMLDivElement>(null);
  const mainSection =
    typeof window !== "undefined" ? document.querySelector("main") : null;
  const contactSection =
    typeof window !== "undefined" ? document.getElementById("contact") : null;

  useGSAP(() => {
    if (!contactFormContainerRef.current || !measurementDivRef.current) return;

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
    function adjustFooterOverlap() {
      contactFormContainer.style.marginTop = `-${getOverlap()}px`; // shifts the container up
    }

    adjustFooterOverlap(); // Set initial contact section margin

    ScrollTrigger.create({
      trigger: contactFormContainer,
      start: () => `top ${windowHeight - getOverlap()}`,
      end: () => `+=${getOverlap()}`,
      pin: true,
      // invalidateOnRefresh flushes out any internally-recorded starting values.
      // generally works fine without
      // in some cases, such as resizing the window when dev tools is open, the container's height fails to resize if invalidateOnRefresh is not used.
      invalidateOnRefresh: true,
    });

    const observer = new ResizeObserver(() => {
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

    // Watch for changes in the main section height (e.g. accordion expanded)
    if (mainSection) observer.observe(mainSection);
    // Watch for changes in the contact section height (form error messages change the height)
    if (contactSection) observer.observe(contactSection);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <div
        ref={measurementDivRef}
        className="pointer-events-none absolute -z-50 h-screen w-full select-none"
      />
      <div
        ref={contactFormContainerRef}
        className="!w-full !max-w-full bg-card"
      >
        <ContactMe />
      </div>
    </>
  );
}
