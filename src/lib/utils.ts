import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleScrollToContactForm() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

export function handleScrollToInternalLink(link: string) {
  const target = document.querySelector(link);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
