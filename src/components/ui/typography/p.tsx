import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function TypographyP({ className, children }: Props) {
  return (
    <p
      className={cn(
        "text-pretty text-base [&:not(:first-child)]:mt-4 sm:[&:not(:first-child)]:mt-6",
        className,
      )}
    >
      {children}
    </p>
  );
}
