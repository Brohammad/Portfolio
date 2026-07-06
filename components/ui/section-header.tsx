"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  variant?: "default" | "featured";
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
  variant = "default",
}: SectionHeaderProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.header
      initial={{ opacity: 0, y: isFeatured ? 16 : 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: isFeatured ? 0.55 : 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col",
        isFeatured ? "gap-5 sm:gap-6 section-header-featured" : "gap-3 sm:gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "text-caption inline-flex items-center rounded-full bg-primary/[0.06] border border-primary/12 text-primary",
            isFeatured ? "px-4 py-2 text-[11px]" : "px-3 py-1.5"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-foreground tracking-[-0.03em]",
          isFeatured
            ? "text-[clamp(2rem,3.75vw,2.875rem)] font-semibold leading-[1.08]"
            : "text-heading"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground leading-[1.75] font-normal",
            isFeatured
              ? "text-[16px] sm:text-[1.0625rem]"
              : "text-[15px] sm:text-[16px]"
          )}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
