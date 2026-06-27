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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
