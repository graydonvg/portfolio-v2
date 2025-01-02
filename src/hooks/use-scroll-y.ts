"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

export default function useScrollY() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    setScrollDirection(diff > 0 ? "down" : "up");
    setCurrentScrollY(current);
  });

  return { currentScrollY, scrollDirection };
}
