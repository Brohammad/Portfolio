"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-4 sm:gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {badge && (
        <span className="text-caption inline-flex items-center px-3 py-1.5 rounded-full bg-primary/[0.06] border border-primary/12 text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-heading text-foreground">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-[17px] max-w-[42ch] leading-[1.8] font-normal mt-1">
          {description}
        </p>
      )}
    </motion.header>
  );
}
