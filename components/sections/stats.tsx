"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";
import { stats } from "@/content/data";

function StatItem({
  label,
  value,
  suffix,
  prefix,
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        {prefix}
        {count}
        <span className="text-blue-400">{suffix}</span>
      </div>
      <div className="text-sm text-zinc-500 text-center">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-[#09090b] to-purple-950/20" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <StatItem
                label={stat.label}
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
