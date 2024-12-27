import CSS from "./icons/css";
import GreenSockLogo from "./icons/gsap";
import HTML5 from "./icons/html5";
import JavaScript from "./icons/javascript";
import MUI from "./icons/mui";
import Nextjs from "./icons/nextjs";
import React from "./icons/react";
import Redux from "./icons/redux";
import Shadcn from "./icons/shadcn";
import Supabase from "./icons/supabase";
import TailwindCSS from "./icons/tailwind";
import TypeScript from "./icons/typescript";
import TypographyP from "./ui/typography/p";

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
  gsap: GreenSockLogo,
};

type Props = {
  name: string;
  icon: string;
};

export default function Technology({ name, icon }: Props) {
  const Component = ICONS[icon as keyof typeof ICONS];

  return (
    <div className="technology flex h-full max-w-40 flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center">
      <Component height="100%" width="100%" />
      <TypographyP>{name}</TypographyP>
    </div>
  );
}
