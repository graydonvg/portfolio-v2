"use client";

import { navLinks } from "@/lib/constants";
import {
  handleScrollToContactForm,
  handleScrollToInternalLink,
} from "@/lib/utils";
import Link from "next/link";
// import { useState } from "react";

export default function Navbar() {
  // const [nav, setNav] = useState(false);

  // function toggleNav() {
  //   setNav((prevState) => !prevState);
  // }

  // function closeNav() {
  //   setNav(false);
  // }

  return (
    <div className="fixed z-50 flex w-full justify-center font-bold">
      <nav className="mx-auto mt-8 hidden items-center justify-center rounded-3xl border border-border p-2 backdrop-blur-3xl md:flex">
        <ul className="flex gap-8 p-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.internalLink ? (
                <button
                  onClick={() =>
                    link.internalLink === "#contact"
                      ? handleScrollToContactForm()
                      : handleScrollToInternalLink(link.internalLink!)
                  }
                  className="transform cursor-pointer transition-all duration-300 ease-in-out hover:skew-x-12 hover:text-white/50"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  tabIndex={-1}
                  href={link.externalLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform cursor-pointer transition-all duration-300 ease-in-out hover:skew-x-12 hover:text-white/50"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
