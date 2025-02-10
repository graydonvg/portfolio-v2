"use client";

import useWindowDimensions from "@/hooks/use-window-dimensions";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

export default function TypographyH1({ children }: { children: ReactNode }) {
  const windowDimension = useWindowDimensions();
  const [respondToHeight, setRespondToHeight] = useState(false);

  useEffect(() => {
    if (
      windowDimension?.height &&
      windowDimension?.width &&
      windowDimension?.height < windowDimension?.width * 0.65
    ) {
      setRespondToHeight(true);
    } else {
      setRespondToHeight(false);
    }
  }, [windowDimension?.height, windowDimension?.width]);

  return (
    <h1
      className={cn("text-h1-sm font-black leading-[1.1] sm:text-h1-lg-w", {
        "sm:text-h1-lg-h": respondToHeight,
      })}
    >
      {children}
    </h1>
  );
}
