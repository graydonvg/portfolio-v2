import { useEffect, useState } from "react";

export default function usePrefersReducedMotion() {
  const reduceMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(reduceMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    function handleChange() {
      setPrefersReducedMotion(mediaQuery.matches);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
