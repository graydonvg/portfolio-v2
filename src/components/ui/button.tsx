import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center whitespace-nowrap focus-ring disabled:pointer-events-none disabled:opacity-50 text-base group rounded-full before:absolute before:top-0 before:left-0 before:w-full before:h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        secondary: "text-secondary-foreground",
        outlined: "text-secondary-foreground",
      },
      size: {
        default: "h-[48px] sm:h-[58px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-full overflow-hidden rounded-full transition-transform duration-400 ease-gentle-ease-in-out group-active:scale-x-[0.9] group-active:scale-y-[0.9] can-hover:group-hover:scale-x-[1.1] can-hover:group-hover:scale-y-[1.1] can-hover:group-active:scale-x-[1] can-hover:group-active:scale-y-[1]",
          )}
        >
          <div
            id="background"
            className={cn("absolute inset-0 m-[1px] rounded-full bg-primary", {
              "bg-secondary": variant === "secondary",
              "bg-transparent": variant === "outlined",
              "border border-secondary-foreground": variant === "outlined",
            })}
          >
            <div
              id="as-before"
              className={cn(
                "absolute left-1/2 top-1/2 w-[110%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-secondary pb-[110%] opacity-0 transition-transform duration-400 ease-gentle-ease-in-out can-hover:group-hover:-translate-x-1/2 can-hover:group-hover:-translate-y-1/2 can-hover:group-hover:scale-100 can-hover:group-hover:opacity-100",
                {
                  "bg-primary":
                    variant === "secondary" || variant === "outlined",
                },
              )}
            ></div>
            <div
              id="as-after"
              className={cn(
                "absolute left-0 top-0 h-full w-full rounded-full bg-secondary opacity-0 transition-opacity duration-300 can-hover:group-hover:opacity-100 can-hover:group-hover:delay-300 can-hover:group-hover:duration-0",
                {
                  "bg-primary":
                    variant === "secondary" || variant === "outlined",
                },
              )}
            ></div>
          </div>
        </div>
        <span
          className={cn(
            "relative px-8 py-4 font-bold transition-all duration-400 ease-gentle-ease-in-out can-hover:group-hover:text-secondary-foreground",
            {
              "can-hover:group-hover:text-primary-foreground":
                variant === "secondary" || variant === "outlined",
            },
          )}
        >
          {children}
        </span>
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
