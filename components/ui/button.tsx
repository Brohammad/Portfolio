"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-secondary shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-md)] active:scale-[0.98]",
        destructive:
          "bg-red-500/10 text-red-600 border border-red-500/20 hover:bg-red-500/15",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary/30 hover:bg-primary/[0.04] active:scale-[0.98]",
        secondary:
          "bg-muted text-foreground border border-border-subtle hover:bg-muted/70 active:scale-[0.98]",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] active:scale-[0.98]",
        link: "text-link underline-offset-4 hover:underline",
        gradient:
          "bg-primary text-primary-foreground hover:bg-secondary shadow-[var(--shadow-button)] active:scale-[0.98]",
      },
      size: {
        default: "h-11 min-h-11 px-5",
        sm: "h-9 min-h-9 px-4 text-xs rounded-[calc(var(--radius)-4px)]",
        lg: "h-[3.25rem] min-h-[3.25rem] px-8 text-[15px] gap-2.5",
        xl: "h-14 min-h-14 px-8 text-base",
        icon: "h-11 w-11 min-h-11 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
