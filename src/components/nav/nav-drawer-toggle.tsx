"use client";

import { Menu, X } from "lucide-react";
import useDrawerStore from "@/lib/store/use-drawer-store";

export default function NavDrawerToggle() {
  const { isNavDrawerOpen, toggleNavDrawer } = useDrawerStore();

  return (
    <button
      id="nav-drawer-toggle"
      aria-label={
        isNavDrawerOpen ? "Close navigation menu" : "Open navigation menu"
      }
      aria-controls="nav-drawer"
      aria-expanded={isNavDrawerOpen}
      onClick={toggleNavDrawer}
      className="focus-ring absolute right-5 top-5 cursor-pointer rounded border border-white/70 p-2 text-white/70 backdrop-blur-3xl md:hidden"
    >
      {isNavDrawerOpen ? <X size={30} /> : <Menu size={30} />}
    </button>
  );
}
