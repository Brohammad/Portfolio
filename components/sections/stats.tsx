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
      className="stat-engineering flex flex-col items-start justify-center text-left"
    >
      <div className="stat-value text-foreground tabular-nums leading-none">
        {prefix}
        {count}
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <p className="mt-3 text-sm stat-label tracking-tight">{label}</p>
      {subtitle && (
        <p className="mt-1 text-xs text-muted-foreground/65">{subtitle}</p>
      )}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-9 lg:py-11 section-tone-elevated overflow-hidden stat-section-glow">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--border-subtle) 80%, transparent) 20%, color-mix(in srgb, var(--primary) 20%, transparent) 50%, color-mix(in srgb, var(--border-subtle) 80%, transparent) 80%, transparent)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--border-subtle) 60%, transparent) 30%, transparent)",
        }}
        aria-hidden
      />
      <div className="section-container section-container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 24 }}
          className="mb-4 lg:mb-5"
        >
          <p className="text-block-label">Production Metrics</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 22, delay: 0.05 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-7 lg:gap-x-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 110, damping: 22, delay: i * 0.06 }}
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
