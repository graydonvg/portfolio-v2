import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleScrollToContactForm(prefersReducedMotion: boolean) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: prefersReducedMotion ? "instant" : "smooth",
  });
}

export function handleScrollToInternalLink(
  link: string,
  prefersReducedMotion: boolean,
  offset = 0,
) {
  const target = document.querySelector(link);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  }
}
