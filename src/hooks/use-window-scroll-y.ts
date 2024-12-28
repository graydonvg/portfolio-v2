"use client";

import { useEffect, useState } from "react";

export default function useWindowScrollY() {
  const [scrollY, setIsScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setIsScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}
