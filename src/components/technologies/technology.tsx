import GSAP from "../icons/gsap";
import CSS from "../icons/css";
import HTML5 from "../icons/html5";
import JavaScript from "../icons/javascript";
import MUI from "../icons/mui";
import Nextjs from "../icons/nextjs";
import React from "../icons/react";
import Redux from "../icons/redux";
import Shadcn from "../icons/shadcn";
import Supabase from "../icons/supabase";
import TailwindCSS from "../icons/tailwind";
import TypeScript from "../icons/typescript";
import { RefObject } from "react";

const ICONS = {
  html: HTML5,
  css: CSS,
  tailwind: TailwindCSS,
  javascript: JavaScript,
  typescript: TypeScript,
  react: React,
  netxjs: Nextjs,
  redux: Redux,
  supabase: Supabase,
  mui: MUI,
  shadcn: Shadcn,
  gsap: GSAP,
};

type Props = {
  name: string;
  icon: string;
  index: number;
  ariaLabel: string;
  technologyCardRefs: RefObject<(HTMLDivElement | null)[]>;
};

export default function Technology({
  name,
  icon,
  index,
  ariaLabel,
  technologyCardRefs,
}: Props) {
  const Icon = ICONS[icon as keyof typeof ICONS];

  return (
    <div
      ref={(el) => {
        technologyCardRefs.current[index] = el;
      }}
      className="technology-card invisible -z-30 max-w-40 scale-0 overflow-hidden rounded-lg bg-border p-[1px]"
    >
      <div className="relative -z-20 size-full rounded-lg bg-card">
        <div className="z-50 flex h-full flex-col items-center justify-center rounded-lg bg-card/60 p-[23px] text-center backdrop-blur-3xl">
          <Icon height="100%" width="100%" aria-hidden />
          <span className="mt-4 sm:mt-6" aria-label={ariaLabel}>
            {name}
          </span>
        </div>
        <div className="card-light absolute left-0 top-0 -z-10 size-full rounded-[50%] bg-primary opacity-0 blur-2xl" />
        {/* card-light-original-position used for measurements in parent component */}
        <div className="card-light-original-position pointer-events-none invisible absolute left-0 top-0 -z-10 size-full select-none rounded-[50%]" />
      </div>
    </div>
  );
}
