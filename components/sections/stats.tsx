"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";
import { stats } from "@/content/data";

function StatBlock({
  label,
  subtitle,
  value,
  suffix,
  prefix,
}: {
  label: string;
  subtitle?: string;
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div
      ref={ref}
      className="card-static card-body flex flex-col items-center justify-center text-center min-h-[168px]"
    >
      <div className="text-[2.5rem] sm:text-[2.75rem] font-semibold text-foreground tracking-tight tabular-nums leading-none">
        {prefix}
        {count}
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <p className="mt-5 text-sm font-medium text-foreground tracking-tight">{label}</p>
      {subtitle && (
        <p className="mt-1.5 text-xs text-muted-foreground/70">{subtitle}</p>
      )}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-16 section-tone-alt overflow-hidden border-y border-border-subtle">
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={i === stats.length - 1 ? "col-span-2 lg:col-span-1" : ""}
            >
              <StatBlock
                label={stat.label}
                subtitle={stat.subtitle}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
