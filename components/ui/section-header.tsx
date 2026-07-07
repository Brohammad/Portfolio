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
      initial={{ opacity: 0, y: isFeatured ? 14 : 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        isFeatured
          ? { type: "spring", stiffness: 120, damping: 22, mass: 0.8 }
          : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
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
            isFeatured ? "px-4 py-2 text-[12px] sm:text-[13px]" : "px-3.5 py-1.5 text-[12px]"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-foreground",
          isFeatured
            ? "text-[clamp(2.5rem,5.5vw,3.625rem)] font-semibold leading-[1.04] tracking-[-0.035em]"
            : "text-heading"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground/75 leading-[1.7] font-normal max-w-[52ch]",
            isFeatured
              ? "text-[16px] sm:text-[17px]"
              : "text-[15px] sm:text-[16px]"
          )}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
