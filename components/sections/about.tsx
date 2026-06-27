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
import { SectionHeader } from "@/components/ui/section-header";

const infoCards = [
  {
    icon: Briefcase,
    label: "Current Role",
    value: "Associate Consultant",
    sub: "PwC · Bengaluru, India",
    color: "blue",
  },
  {
    icon: MapPin,
    label: "Education",
    value: "NIT Calicut",
    sub: "B.Tech EEE · Class of 2025",
    color: "purple",
  },
  {
    icon: Target,
    label: "Current Focus",
    value: "Enterprise AI Systems",
    sub: "Multi-agent · RAG · LLM Infra",
    color: "blue",
  },
  {
    icon: BookOpen,
    label: "Learning",
    value: "Distributed Systems",
    sub: "C++ · Consensus · Linux",
    color: "purple",
  },
  {
    icon: Coffee,
    label: "Interests",
    value: "Backend & AI",
    sub: "Building intelligent systems at scale",
    color: "blue",
  },
  {
    icon: Zap,
    label: "Goal",
    value: "Top-Tier Tech",
    sub: "OpenAI · Anthropic · Cloudflare · Stripe",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="The person behind the code"
          description="I'm a backend and AI engineer who cares deeply about building systems that are reliable, observable, and maintainable at scale."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-foreground/80 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-foreground font-medium">Backend and AI Engineer</span>{" "}
              at PwC, building enterprise-grade intelligent systems for banking
              clients. NIT Calicut grad working at the intersection of{" "}
              <span className="text-foreground font-medium">distributed systems</span>,{" "}
              <span className="text-foreground font-medium">LLM applications</span>, and{" "}
              <span className="text-foreground font-medium">production backend infrastructure</span>.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Day to day I design multi-agent AI systems, RAG pipelines, and backend
              APIs deployed in production for Fortune 500 clients. Outside work I&apos;m
              building side projects to go deeper — distributed systems, systems
              programming in C++, and AI infrastructure.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I understand systems from first principles. I read source code,
              study production postmortems, and build things from scratch when
              that&apos;s the best way to actually understand them. My target is
              backend and AI engineering roles at companies like OpenAI, Anthropic,
              Cloudflare, Stripe, and Databricks.
            </p>

            {/* Values */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              {[
                "Simple · Reliable · Scalable",
                "Fundamentals before frameworks",
                "Understand the why, not just the how",
                "Build then optimize",
                "Production-focused",
                "Always experimenting",
              ].map((value) => (
                <div key={value} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {value}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              const colorClass = colorMap[card.color];

              return (
                <motion.div
                  key={card.label}
                  variants={cardVariants}
                  className="card-hover p-4 rounded-xl bg-card border border-border-subtle flex flex-col gap-3"
                >
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${colorClass}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/70 mb-0.5">{card.label}</div>
                    <div className="text-foreground font-medium text-sm">{card.value}</div>
                    <div className="text-muted-foreground/70 text-xs mt-0.5">{card.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
