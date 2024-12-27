import { ReactNode } from "react";

export default function TypographyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-h3 font-semibold tracking-tight">
      {children}
    </h3>
  );
}
