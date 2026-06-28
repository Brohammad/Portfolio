"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";

const infoCards = [
  {
    label: "Current Role",
    value: "Associate Consultant",
    detail: "PwC · Enterprise AI for banking",
    meta: "Bengaluru, India",
  },
  {
    label: "Education",
    value: "NIT Calicut",
    detail: "B.Tech Electrical & Electronics",
    meta: "Class of 2025",
  },
  {
    label: "Production Focus",
    value: "Multi-agent · RAG · APIs",
    detail: "LangGraph, FastAPI, Azure AKS",
    meta: "3 systems shipped",
  },
  {
    label: "Currently Studying",
    value: "Distributed Systems",
    detail: "Raft, consensus, C++ internals",
    meta: "Building a KV store in Go",
  },
];

const principles = [
  "Ship to production, not to demos",
  "Eval pipelines before deployment",
  "Simple systems that survive scale",
];

export function AboutSection() {
  return (
    <Section id="about" tone="alt" spacing="spacious" width="wide">
      <SectionHeader
        badge="About"
        title="Engineering, not just code"
        description="I design systems that are reliable, observable, and maintainable — then ship them to production."
        align="left"
        className="max-w-2xl"
      />

      <SectionContent className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <p className="text-foreground text-[1.125rem] leading-[1.8] font-medium max-w-[38ch]">
              Backend & AI engineer at{" "}
              <span className="text-primary">PwC</span>, building intelligent
              systems for Fortune 500 banking clients.
            </p>

            <p className="prose-body">
              Multi-agent orchestration, hybrid RAG pipelines, and production
              APIs — deployed on Azure, not in slide decks.
            </p>
          </div>

          <div className="card-static card-body">
            <p className="text-caption mb-4">Operating Principles</p>
            <ul className="space-y-2.5">
              {principles.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="card-static card-body flex flex-col gap-4 min-h-[148px] group hover:border-primary/15 transition-colors duration-300"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-caption">{card.label}</p>
                <span className="text-[10px] text-muted-foreground/50 font-medium">
                  {card.meta}
                </span>
              </div>
              <div className="mt-auto space-y-1">
                <p className="text-foreground font-semibold text-[15px] tracking-tight leading-snug">
                  {card.value}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
