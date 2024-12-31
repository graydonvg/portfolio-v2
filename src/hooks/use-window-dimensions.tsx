"use client";

import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [windowDimension, setWindowDimension] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    function getWindowDimensions() {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    getWindowDimensions();

    window.addEventListener("resize", getWindowDimensions);

    return () => window.removeEventListener("resize", getWindowDimensions);
  }, []);

  return windowDimension;
}
