"use client";

import { motion } from "framer-motion";
import { Monitor, Terminal, Cpu, Wrench, Sparkles } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
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
  blue: "bg-primary/[0.08] border-primary/12 text-primary",
  purple: "bg-secondary/10 border-secondary/20 text-primary",
  emerald: "bg-success/[0.08] border-success/12 text-success",
  yellow: "bg-secondary/10 border-secondary/20 text-primary",
  orange: "bg-primary/[0.08] border-primary/12 text-primary",
};

export function UsesSection() {
  return (
    <Section id="uses" tone="elevated" spacing="default" width="wide">
      <SectionHeader
        badge="Uses"
        title="Engineering setup"
        description="Tools I reach for daily when building production systems."
        align="left"
        className="max-w-xl"
      />

      <SectionContent className="space-y-10 sm:space-y-12">
        {categories.map((cat, ci) => {
          const Icon = cat.icon;
          const items = usesPage[cat.key];

          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.06 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10"
            >
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:w-36 shrink-0">
                <div className={`w-10 h-10 rounded-[calc(var(--radius)-4px)] border flex items-center justify-center ${colorMap[cat.color]}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-muted-foreground font-medium">{cat.label}</span>
              </div>

              <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="interactive-card rounded-[calc(var(--radius)-4px)] bg-card border border-border-subtle p-4 sm:p-5 h-full"
                  >
                    <div className="font-semibold text-foreground text-[14px] mb-1.5 tracking-tight">{item.name}</div>
                    <div className="text-[13px] text-muted-foreground leading-[1.7]">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </SectionContent>
    </Section>
  );
}
