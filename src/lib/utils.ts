import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleScrollToContactForm() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
  });
}

export function handleScrollToInternalLink(link: string, offset = 0) {
  const target = document.querySelector(link);

  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
    });
  }
}
