import { ReactNode } from "react";

export default function TypographyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-h3 scroll-m-20 font-semibold tracking-tight">
      {children}
    </h3>
  );
}
