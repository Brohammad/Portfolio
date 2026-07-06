"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Target,
  Eye,
  Shield,
  Layers,
  Gauge,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const intro = [
  {
    label: "Who I am",
    text: "Backend and AI engineer at PwC, building production systems for enterprise banking.",
  },
  {
    label: "What I build",
    text: "Multi-agent workflows, hybrid RAG pipelines, and backend APIs deployed on Azure.",
  },
  {
    label: "What excites me",
    text: "Distributed systems, LLM infrastructure, and software that holds up under real load.",
  },
  {
    label: "What I'm working toward",
    text: "Fewer projects, higher quality — and deeper mastery of systems engineering.",
  },
];

const principles = [
  {
    icon: Layers,
    title: "First Principles",
    detail: "Understand systems instead of memorizing frameworks.",
  },
  {
    icon: Target,
    title: "Production First",
    detail: "Build software that survives real users.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    detail: "Always studying distributed systems, AI, and infrastructure.",
  },
  {
    icon: Sparkles,
    title: "Quality over Quantity",
    detail: "Fewer projects. Higher quality.",
  },
  {
    icon: Eye,
    title: "Observability",
    detail: "If you can't measure it, you can't improve it.",
  },
  {
    icon: Shield,
    title: "Reliability",
    detail: "Correctness before cleverness.",
  },
];

const currentFocus = [
  "Production AI",
  "Distributed Systems",
  "Backend Infrastructure",
  "Platform Engineering",
  "AI Systems",
  "Cloud Architecture",
];

const exploring = [
  "Distributed Systems",
  "Kubernetes",
  "System Design",
  "Networking",
  "Inference Optimization",
  "Operating Systems",
  "Large Scale Databases",
];

const interests = [
  "Backend Engineering",
  "Artificial Intelligence",
  "Distributed Systems",
  "Cloud Infrastructure",
  "Developer Experience",
  "Performance Engineering",
  "Financial Technology",
  "Observability",
];

const beyondCode = [
  "Curious by default",
  "Documentation enthusiast",
  "Enjoy simplifying complex systems",
  "Prefer elegant solutions over clever hacks",
  "Build for maintainability",
];

const trustSignals = [
  { label: "Company", value: "PwC" },
  { label: "Experience", value: "Production AI" },
  { label: "Domain", value: "Banking" },
  { label: "Focus", value: "Backend + AI" },
  { label: "Location", value: "Bengaluru" },
];

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};

function PrincipleCard({
  icon: Icon,
  title,
  detail,
}: {
  icon: React.ElementType;
  title: string;
  detail: string;
}) {
  return (
    <div className="p-5 sm:p-6 rounded-[calc(var(--radius)-4px)] bg-card border border-border-subtle transition-[box-shadow,transform,border-color] duration-300 hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-primary/10">
      <Icon className="w-4 h-4 text-muted-foreground/45 mb-3" strokeWidth={1.5} />
      <p className="text-[15px] font-medium text-foreground tracking-tight">{title}</p>
      <p className="text-[14px] text-muted-foreground leading-relaxed mt-2">{detail}</p>
    </div>
  );
}

function InterestCard({ label }: { label: string }) {
  return (
    <div className="px-4 py-3.5 sm:px-5 sm:py-4 rounded-[calc(var(--radius)-4px)] bg-card/80 border border-border-subtle transition-[box-shadow,transform,border-color] duration-300 hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-primary/10">
      <p className="text-[14px] font-medium text-foreground/85 tracking-tight">{label}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <Section id="about" tone="alt" spacing="default" width="wide" className="section-entry-divider">
      <SectionHeader
        badge="About"
        title="Engineering profile"
        description="Who I am, how I think, and what I'm building toward."
        align="left"
        variant="featured"
      />

      <SectionContent featured className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left — story + philosophy */}
        <div className="space-y-8 lg:space-y-10">
          <motion.div {...fadeUp} className="space-y-5">
            {intro.map((block) => (
              <div key={block.label} className="space-y-2">
                <p className="text-block-label">{block.label}</p>
                <p className="text-[16px] sm:text-[1.0625rem] text-foreground/85 leading-[1.75]">
                  {block.text}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }}>
            <p className="text-block-label mb-4">Engineering Principles</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <PrincipleCard {...item} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <p className="text-block-label mb-3">Beyond Code</p>
            <ul className="space-y-2.5">
              {beyondCode.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[14px] text-muted-foreground leading-relaxed"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/35 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right — focus, exploring, interests, trust */}
        <div className="space-y-8 lg:space-y-10">
          <motion.div
            {...fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-3 pb-5 border-b border-border-subtle/80"
          >
            {trustSignals.map((signal, i) => (
              <span key={signal.label} className="inline-flex items-center gap-2 text-[13px]">
                {i > 0 && (
                  <span aria-hidden className="text-border hidden sm:inline">
                    ·
                  </span>
                )}
                <span className="text-muted-foreground/50">{signal.label}</span>
                <span className="text-foreground/75 font-medium">{signal.value}</span>
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.04 }}>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-muted-foreground/40" strokeWidth={1.5} />
              <p className="text-block-label">Current Focus</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {currentFocus.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2.5 rounded-full text-[13px] font-medium text-foreground/75 bg-card border border-border-subtle transition-colors duration-200 hover:border-primary/15 hover:text-primary/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <div className="flex items-center gap-2 mb-4">
              <Gauge className="w-4 h-4 text-muted-foreground/40" strokeWidth={1.5} />
              <p className="text-block-label">Currently Exploring</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {exploring.map((item) => (
                <span
                  key={item}
                  className={cn(
                    "px-3.5 py-2 rounded-[calc(var(--radius)-6px)] text-[13px] font-medium",
                    "text-muted-foreground bg-foreground/[0.02] border border-border-subtle",
                    "transition-all duration-200 hover:border-primary/18 hover:text-foreground/80 hover:-translate-y-px"
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
            <p className="text-block-label mb-5">Engineering Interests</p>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <InterestCard label={item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContent>
    </Section>
  );
}
