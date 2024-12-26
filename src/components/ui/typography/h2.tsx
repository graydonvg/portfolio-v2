import { ReactNode } from "react";

export default function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-8 scroll-m-20 text-center text-h2/none font-semibold tracking-tight sm:mb-16">
      {children}
    </h2>
  );
}
