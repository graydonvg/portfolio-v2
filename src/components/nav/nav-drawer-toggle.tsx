"use client";

import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useDrawerStore from "@/lib/store/use-drawer-store";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function NavDrawerToggle() {
  const { isNavDrawerOpen, toggleNavDrawer } = useDrawerStore();

  return (
    <div
      onClick={toggleNavDrawer}
      className="pointer-events-auto absolute right-5 top-5 rounded border border-white/70 p-2 text-white/70 backdrop-blur-3xl md:hidden"
    >
      {isNavDrawerOpen ? <X size={30} /> : <Menu size={30} />}
    </div>
  );
}
