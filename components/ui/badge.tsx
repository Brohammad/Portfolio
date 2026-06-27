import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        secondary: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        outline: "border-white/10 text-zinc-400",
        success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        warning: "bg-amber-500/10 text-amber-300 border-amber-500/20",
        destructive: "bg-red-500/10 text-red-300 border-red-500/20",
        tech: "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors",
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
