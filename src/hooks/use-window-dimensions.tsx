"use client";

import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [windowDimension, setWindowDimension] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    function getWindowDimensions() {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    getWindowDimensions();

    window.addEventListener("resize", getWindowDimensions, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return windowDimension;
}
