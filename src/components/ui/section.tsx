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
        "container mx-auto overflow-x-hidden px-4 py-12 sm:px-8 sm:py-24 md:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
