import { ReactNode } from "react";

export default function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-h1-sm/tight font-extrabold tracking-tight sm:text-h1-lg/tight">
      {children}
    </h1>
  );
}
