"use client";

import { motion } from "framer-motion";
import { MapPin, Check, Server, Brain, Cloud, Boxes } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { experiences } from "@/content/data";
import type { Experience } from "@/types";
import { cn } from "@/lib/utils";

/* ── Experience section display config ── */

const keyImpact = [
  "3 production AI systems delivered",
  "Enterprise banking deployment",
  "Thousands of production RAG queries",
  "Multi-agent orchestration",
  "Production backend APIs",
  "Cloud-native deployment on Azure",
];

const engineeringChallenges = [
  "Reliable agent handoffs without state loss",
  "Hallucination guardrails on regulatory content",
  "Legacy banking API integration with audit trails",
];

const engineeringHighlights = [
  {
    icon: Boxes,
    label: "Architecture",
    detail: "Multi-agent LangGraph + hybrid RAG on FastAPI",
  },
  {
    icon: Server,
    label: "Backend",
    detail: "REST APIs, SSE streaming, Redis session state",
  },
  {
    icon: Brain,
    label: "AI",
    detail: "LangGraph flows, eval pipelines, structured outputs",
  },
  {
    icon: Cloud,
    label: "Cloud",
    detail: "Azure AKS, Azure OpenAI, managed services",
  },
  {
    icon: Server,
    label: "Infrastructure",
    detail: "Docker, PostgreSQL, Qdrant, Redis",
  },
  {
    icon: Cloud,
    label: "Deployment",
    detail: "Production on Azure with CI/CD gates",
  },
];

const productionSnapshot = [
  { label: "Production Systems", value: "3" },
  { label: "Enterprise Clients", value: "Fortune 500" },
  { label: "AI Workflows", value: "Multi-Agent" },
  { label: "Cloud", value: "Azure" },
  { label: "Deployment", value: "Production" },
  { label: "Role", value: "Backend + AI" },
];

const techGroups = [
  { label: "Languages", items: ["Python", "TypeScript"] },
  { label: "Backend", items: ["FastAPI", "Node.js", "REST", "SSE"] },
  { label: "AI", items: ["LangGraph", "LangChain", "LlamaIndex", "OpenAI"] },
  { label: "Cloud", items: ["Azure", "AKS", "Azure OpenAI"] },
  { label: "Data", items: ["PostgreSQL", "Qdrant", "Redis"] },
  { label: "Infrastructure", items: ["Docker", "GitHub Actions"] },
];

const pipelineNodes = [
  { label: "Client", active: false },
  { label: "API", active: true },
  { label: "Agents", active: true },
  { label: "RAG", active: true },
  { label: "Store", active: false },
];

function FlowConnector() {
  return <div className="h-px w-3 sm:w-4 bg-border-subtle shrink-0" />;
}

function ArchitectureArtifact() {
  return (
    <div className="rounded-[calc(var(--radius)-4px)] bg-muted/30 border border-border-subtle p-5 sm:p-6">
      <p className="text-[10px] uppercase tracking-[0.06em] font-medium text-muted-foreground/55 mb-4">
        Production topology
      </p>
      <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap sm:flex-nowrap">
        {pipelineNodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-1 sm:gap-1.5">
            <span
              className={cn(
                "flow-node text-[10px] px-2.5 py-1.5",
                node.active && "flow-node-active"
              )}
            >
              {node.label}
            </span>
            {i < pipelineNodes.length - 1 && <FlowConnector />}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border-subtle flex flex-wrap gap-2">
        {["Azure AKS", "PostgreSQL", "Qdrant", "Redis"].map((s) => (
          <span key={s} className="tech-chip-sm">{s}</span>
        ))}
      </div>
    </div>
  );
}

function ImpactList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[13px] text-foreground/85 leading-snug">
          <Check className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProductionSnapshotPanel() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 p-5 sm:p-6 rounded-[calc(var(--radius)-4px)] bg-muted/25 border border-border-subtle">
      {productionSnapshot.map((item) => (
        <div key={item.label}>
          <p className="text-[10px] uppercase tracking-[0.06em] font-medium text-muted-foreground/50">
            {item.label}
          </p>
          <p className="text-[14px] font-medium text-foreground/90 mt-1 tracking-tight">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function HighlightCard({
  icon: Icon,
  label,
  detail,
}: {
  icon: React.ElementType;
  label: string;
  detail: string;
}) {
  return (
    <div className="p-4 rounded-[calc(var(--radius)-4px)] bg-card border border-border-subtle transition-[box-shadow,transform,border-color] duration-300 hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-primary/12">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="w-3.5 h-3.5 text-muted-foreground/50" />
        <span className="text-[11px] font-medium text-foreground/70 uppercase tracking-[0.04em]">
          {label}
        </span>
      </div>
      <p className="text-[12.5px] text-muted-foreground leading-relaxed">{detail}</p>
    </div>
  );
}

function TechGroups() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
      {techGroups.map((group) => (
        <div key={group.label}>
          <p className="text-[10px] uppercase tracking-[0.06em] font-medium text-muted-foreground/50 mb-2">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="tech-chip-sm transition-colors duration-200 hover:border-primary/20 hover:text-primary/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceRelease({ exp }: { exp: Experience }) {
  return (
    <article className="rounded-[var(--radius)] bg-card border border-border-subtle overflow-hidden transition-[box-shadow,transform] duration-500 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5">
      {/* Header — product release style */}
      <header className="px-6 sm:px-8 pt-7 sm:pt-8 pb-6 border-b border-border-subtle bg-background-elevated/40">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              {exp.current && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/[0.08] border border-success/15 text-[10px] font-medium text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Current
                </span>
              )}
              <Badge variant="default" className="text-[10px]">
                Production
              </Badge>
            </div>
            <h3 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold text-foreground tracking-[-0.025em] leading-tight">
              {exp.role}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">{exp.company}</span>
              <span aria-hidden className="text-border">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 opacity-50" />
                {exp.location}
              </span>
            </div>
          </div>
          <span className="inline-flex items-center self-start px-3.5 py-2 rounded-full bg-primary/[0.06] border border-primary/12 text-[12px] font-medium text-primary tabular-nums whitespace-nowrap">
            {exp.duration}
          </span>
        </div>
      </header>

      <div className="px-6 sm:px-8 py-7 sm:py-8 space-y-8">
        {/* Production snapshot */}
        <ProductionSnapshotPanel />

        {/* Architecture artifact */}
        <ArchitectureArtifact />

        {/* What I Built */}
        {exp.achievements.length > 0 && (
          <section className="space-y-3">
            <p className="text-block-label">What I Built</p>
            <ul className="space-y-2">
              {exp.achievements.map((item) => (
                <li
                  key={item}
                  className="text-[13.5px] text-foreground/85 leading-relaxed pl-4 border-l-2 border-primary/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architecture Decisions */}
        {exp.decisions.length > 0 && (
          <section className="space-y-3">
            <p className="text-block-label">Architecture Decisions</p>
            <ul className="space-y-2">
              {exp.decisions.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
                  <span className="text-primary/50 shrink-0 font-mono text-[11px] mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Engineering Challenges */}
        <section className="space-y-3">
          <p className="text-block-label">Engineering Challenges</p>
          <ul className="space-y-2">
            {engineeringChallenges.map((item) => (
              <li key={item} className="text-[13px] text-muted-foreground leading-relaxed flex gap-2.5">
                <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Production Impact */}
        <section className="space-y-3">
          <p className="text-block-label text-success">Production Impact</p>
          <ImpactList items={keyImpact} />
        </section>

        {/* Engineering Highlights */}
        <section className="space-y-3">
          <p className="text-block-label">Engineering Highlights</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {engineeringHighlights.map((item) => (
              <HighlightCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-3 pt-1">
          <p className="text-block-label">Technology Stack</p>
          <TechGroups />
        </section>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <Section id="experience" tone="default" spacing="spacious" width="wide">
      <SectionHeader
        badge="Experience"
        title="Production engineering"
        description="Systems shipped to enterprise clients — architecture, scale, and impact documented."
        align="left"
        className="max-w-2xl"
      />

      <SectionContent loose>
        <div className="relative max-w-4xl">
          {/* Timeline rail */}
          <div className="absolute left-[7px] sm:left-[9px] top-4 bottom-4 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-10"
              >
                <div className="absolute left-0 top-8 hidden sm:flex items-center justify-center">
                  <div className="w-[15px] h-[15px] rounded-full bg-primary ring-[3px] ring-background border border-primary/30" />
                </div>
                <ExperienceRelease exp={exp} />
              </motion.div>
            ))}

            {/* Education — lighter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative sm:pl-10"
            >
              <div className="absolute left-0 top-5 hidden sm:flex items-center justify-center">
                <div className="w-[11px] h-[11px] rounded-full bg-border ring-[3px] ring-background" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 rounded-[calc(var(--radius)-2px)] border border-border-subtle/60 bg-transparent opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.06em] font-medium text-muted-foreground/45 mb-1.5">
                    Education
                  </p>
                  <h3 className="text-[15px] font-medium text-foreground/75 tracking-tight">
                    B.Tech · Electrical & Electronics Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground/60 mt-1">
                    National Institute of Technology Calicut
                  </p>
                </div>
                <span className="text-[11px] text-muted-foreground/50 px-3 py-1.5 rounded-full border border-border-subtle/60 w-fit tabular-nums">
                  2021 – 2025
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
