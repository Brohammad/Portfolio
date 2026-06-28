import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary border-primary/20",
        secondary: "bg-secondary/15 text-primary border-secondary/30",
        outline: "border-border text-muted-foreground",
        success: "bg-success/10 text-success border-success/20",
        warning: "bg-amber-500/10 text-amber-700 border-amber-500/20",
        destructive: "bg-red-500/10 text-red-600 border-red-500/20",
        tech: "bg-transparent text-muted-foreground border-border-subtle hover:border-primary/25 hover:text-primary transition-colors duration-[250ms]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
