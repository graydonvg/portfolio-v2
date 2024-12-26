"use client";

// import { projects } from "@/lib/constants";
// import { motion } from "motion/react";
import TypographyH2 from "./ui/typography/h2";

export default function Projects() {
  return (
    <section id="about" className="flex w-full flex-col items-center p-8">
      <TypographyH2>
        Selected <span className="text-emerald-400">Projects</span>
      </TypographyH2>
    </section>
  );
}
