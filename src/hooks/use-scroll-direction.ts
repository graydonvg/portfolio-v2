"use client";

import { useEffect, useRef, useState } from "react";
import useWindowScrollY from "./use-window-scroll-y";

export default function useScrollDirection() {
  const currentScrollY = useWindowScrollY();
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up");
    }

    lastScrollY.current = currentScrollY;
  }, [currentScrollY]);

  return scrollDirection;
}
