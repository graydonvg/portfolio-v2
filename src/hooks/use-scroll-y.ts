"use client";

import { useEffect, useState } from "react";

export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const controller = new AbortController();
    let prevScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      const diff = currentScrollY - prevScrollY;

      setScrollDirection(diff > 0 ? "down" : "up");

      prevScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return { scrollY, scrollDirection };
}
