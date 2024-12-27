import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, className, children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto overflow-x-hidden px-4 sm:px-8 [&:nth-child(n+3)]:mt-24 sm:[&:nth-child(n+3)]:mt-64",
        className,
      )}
    >
      {children}
    </section>
  );
}
