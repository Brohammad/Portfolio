"use client";

import { motion } from "framer-motion";
import { Monitor, Terminal, Cpu, Wrench, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { usesPage } from "@/content/data";

const categories = [
  { key: "hardware" as const, label: "Hardware", icon: Monitor, color: "blue" },
  { key: "editor" as const, label: "Editor", icon: Cpu, color: "purple" },
  { key: "terminal" as const, label: "Terminal", icon: Terminal, color: "emerald" },
  { key: "aiTools" as const, label: "AI Tools", icon: Sparkles, color: "yellow" },
  { key: "devTools" as const, label: "Dev Tools", icon: Wrench, color: "orange" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
};

export function UsesSection() {
  return (
    <section id="uses" className="py-16 sm:py-24 relative">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Uses"
          title="My Setup"
          description="The tools, apps, and hardware I use daily for engineering work."
        />

        <div className="mt-10 sm:mt-16 space-y-6">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            const items = usesPage[cat.key];

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.08 }}
                className="flex gap-6"
              >
                {/* Category label */}
                <div className="hidden sm:flex flex-col items-center gap-2 w-28 shrink-0 pt-1">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${colorMap[cat.color]}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-zinc-500 font-medium text-center">{cat.label}</span>
                </div>

                {/* Items */}
                <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl bg-[#111113] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="font-medium text-white text-sm mb-0.5">{item.name}</div>
                      <div className="text-xs text-zinc-500">{item.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
