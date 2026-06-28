"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Target,
  BookOpen,
  Coffee,
  Zap,
} from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";

const infoCards = [
  { icon: Briefcase, label: "Role", value: "Associate Consultant", sub: "PwC · Bengaluru", color: "primary" },
  { icon: MapPin, label: "Education", value: "NIT Calicut", sub: "B.Tech EEE · 2025", color: "secondary" },
  { icon: Target, label: "Focus", value: "Enterprise AI", sub: "Multi-agent · RAG", color: "primary" },
  { icon: BookOpen, label: "Learning", value: "Distributed Systems", sub: "C++ · Consensus", color: "secondary" },
  { icon: Coffee, label: "Interests", value: "Backend & AI", sub: "Systems at scale", color: "primary" },
  { icon: Zap, label: "Goal", value: "Top-Tier Tech", sub: "OpenAI · Stripe · Linear", color: "secondary" },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/[0.08] border-primary/15 text-primary",
  secondary: "bg-secondary/10 border-secondary/20 text-primary",
};

const principles = [
  "Simple · Reliable · Scalable",
  "Fundamentals before frameworks",
  "Production-focused engineering",
  "Build, then optimize",
];

export function AboutSection() {
  return (
    <Section id="about" tone="alt">
      <SectionHeader
        badge="About"
        title="The person behind the code"
        description="Backend and AI engineer focused on systems that are reliable, observable, and maintainable at scale."
      />

      <SectionContent className="grid lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 lg:space-y-10"
        >
          <div className="space-y-6">
            <p className="text-foreground text-[1.0625rem] leading-[1.85] font-medium max-w-[40ch]">
              I&apos;m a <span className="text-primary">Backend & AI Engineer</span> at PwC,
              building intelligent systems for Fortune 500 banking clients.
            </p>

            <p className="prose-body">
              I design multi-agent AI systems, RAG pipelines, and backend APIs — deployed in production, not prototypes.
            </p>

            <p className="prose-body">
              I read source code, study postmortems, and build from first principles when that&apos;s the fastest path to real understanding.
            </p>
          </div>

          <div className="card-static card-body">
            <p className="text-caption mb-5">Engineering Principles</p>
            <ul className="space-y-3">
              {principles.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="card-static card-body flex flex-col gap-5 min-h-[160px]"
              >
                <div
                  className={`w-10 h-10 rounded-[calc(var(--radius)-4px)] border flex items-center justify-center shrink-0 ${colorMap[card.color]}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="mt-auto space-y-1">
                  <p className="text-caption">{card.label}</p>
                  <p className="text-foreground font-semibold text-[15px] tracking-tight leading-snug">{card.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{card.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContent>
    </Section>
  );
}
