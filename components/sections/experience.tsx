"use client";

import { motion } from "framer-motion";
import { MapPin, Check, Server, Brain, Cloud, Boxes, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { experiences } from "@/content/data";
import type { Experience } from "@/types";
import { sectionRevealStagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* ── Experience section display config ── */

interface ExperienceDisplay {
  keyImpact: string[];
  engineeringChallenges: string[];
  engineeringHighlights: {
    icon: React.ElementType;
    label: string;
    detail: string;
  }[];
  productionSnapshot: { label: string; value: string }[];
  techGroups: { label: string; items: string[] }[];
  pipelineNodes: { label: string; active: boolean }[];
  infraChips: string[];
}

const experienceDisplay: Record<string, ExperienceDisplay> = {
  voxforge: {
    keyImpact: [
      "Open-source voice AI platform in production",
      "354+ automated tests with 81% coverage",
      "Three transports unified in one pipeline",
      "Operator dashboard with eval and replay",
      "One-command HTTPS deployment",
      "v1.0.0-rc.1 released on GitHub",
    ],
    engineeringChallenges: [
      "Unifying WebSocket, REST, and LiveKit without duplicated logic",
      "Self-hosted deployment with minimal moving parts",
      "Per-turn evaluation for operator trust and regression detection",
    ],
    engineeringHighlights: [
      {
        icon: Mic,
        label: "Voice Core",
        detail: "VoicePipelineService across WebSocket, REST, and LiveKit",
      },
      {
        icon: Brain,
        label: "Agents",
        detail: "LangGraph planner, safety, executor, critic pipeline",
      },
      {
        icon: Boxes,
        label: "Knowledge",
        detail: "pgvector RAG with citation grounding and MCP tools",
      },
      {
        icon: Server,
        label: "Operations",
        detail: "Dashboard, replay links, handoff queue, policy presets",
      },
      {
        icon: Cloud,
        label: "Deploy",
        detail: "Docker Compose, NGINX, Certbot, health probes, backups",
      },
      {
        icon: Server,
        label: "Quality",
        detail: "Playwright UI tests, pip-audit, gitleaks in CI",
      },
    ],
    productionSnapshot: [
      { label: "Status", value: "Live in prod" },
      { label: "Tests", value: "354+" },
      { label: "Coverage", value: "81%" },
      { label: "Transports", value: "3 unified" },
      { label: "Release", value: "v1.0.0-rc.1" },
      { label: "Role", value: "Solo build" },
    ],
    techGroups: [
      { label: "Core", items: ["Python", "FastAPI", "LangGraph"] },
      { label: "Voice", items: ["LiveKit", "WebSockets", "STT/TTS"] },
      { label: "Data", items: ["PostgreSQL", "pgvector", "Redis"] },
      { label: "Infra", items: ["Docker", "NGINX", "OpenTelemetry"] },
    ],
    pipelineNodes: [
      { label: "WS", active: true },
      { label: "Pipeline", active: true },
      { label: "Agent", active: true },
      { label: "Eval", active: true },
      { label: "TTS", active: false },
    ],
    infraChips: ["Docker", "PostgreSQL", "Redis", "NGINX"],
  },
  pwc: {
    keyImpact: [
      "3 production AI systems delivered",
      "Enterprise banking deployment",
      "Thousands of production RAG queries",
      "Multi-agent orchestration",
      "Production backend APIs",
      "Cloud-native deployment on Azure",
    ],
    engineeringChallenges: [
      "Reliable agent handoffs without state loss",
      "Hallucination guardrails on regulatory content",
      "Legacy banking API integration with audit trails",
    ],
    engineeringHighlights: [
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
    ],
    productionSnapshot: [
      { label: "Production Systems", value: "3" },
      { label: "Enterprise Clients", value: "Fortune 500" },
      { label: "AI Workflows", value: "Multi-Agent" },
      { label: "Cloud", value: "Azure" },
      { label: "Deployment", value: "Production" },
      { label: "Role", value: "Backend + AI" },
    ],
    techGroups: [
      { label: "Languages", items: ["Python", "TypeScript"] },
      { label: "Backend", items: ["FastAPI", "Node.js", "REST", "SSE"] },
      { label: "AI", items: ["LangGraph", "LangChain", "LlamaIndex", "OpenAI"] },
      { label: "Cloud", items: ["Azure", "AKS", "Azure OpenAI"] },
      { label: "Data", items: ["PostgreSQL", "Qdrant", "Redis"] },
      { label: "Infrastructure", items: ["Docker", "GitHub Actions"] },
    ],
    pipelineNodes: [
      { label: "Client", active: false },
      { label: "API", active: true },
      { label: "Agents", active: true },
      { label: "RAG", active: true },
      { label: "Store", active: false },
    ],
    infraChips: ["Azure AKS", "PostgreSQL", "Qdrant", "Redis"],
  },
};

const defaultExperienceDisplay = experienceDisplay.pwc;

function FlowConnector() {
  return <div className="h-px w-3 sm:w-4 bg-border-subtle shrink-0" />;
}

function ArchitectureArtifact({ display }: { display: ExperienceDisplay }) {
  return (
    <div className="content-panel">
      <p className="text-block-label mb-5">Production topology</p>
      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
        {display.pipelineNodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-1 sm:gap-1.5">
            <span
              className={cn(
                "flow-node",
                node.active && "flow-node-active"
              )}
            >
              {node.label}
            </span>
            {i < display.pipelineNodes.length - 1 && <FlowConnector />}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border-subtle flex flex-wrap gap-2">
        {display.infraChips.map((s) => (
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
        <li key={item} className="flex items-start gap-3 text-[15px] text-foreground/85 leading-relaxed">
          <Check className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProductionSnapshotPanel({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 p-6 sm:p-7 rounded-[calc(var(--radius)-2px)] bg-muted/20 border border-border-subtle">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-block-label">{item.label}</p>
          <p className="text-[15px] font-medium text-foreground/90 mt-1.5 tracking-tight">
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
    <div className="p-5 sm:p-6 rounded-[calc(var(--radius)-4px)] bg-card border border-border-subtle transition-[box-shadow,transform,border-color] duration-300 hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-primary/12">
      <div className="flex items-center gap-2.5 mb-2">
        <Icon className="w-4 h-4 text-muted-foreground/50" />
        <span className="text-block-label">
          {label}
        </span>
      </div>
      <p className="text-[14px] text-muted-foreground leading-relaxed">{detail}</p>
    </div>
  );
}

function TechGroups({ groups }: { groups: { label: string; items: string[] }[] }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="text-block-label mb-2.5">{group.label}</p>
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
  const display = experienceDisplay[exp.id] ?? defaultExperienceDisplay;

  return (
    <article className="rounded-[var(--radius)] project-card-elevated overflow-hidden">
      {/* Header — product release style */}
      <header className="p-7 sm:p-8 border-b border-border-subtle/50 bg-background-elevated/50">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
            <span className="inline-flex items-center self-start px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/12 text-[13px] font-medium text-primary tabular-nums">
              {exp.duration}
            </span>
          </div>
          <div className="space-y-3 min-w-0">
            <h3 className="text-[clamp(1.3125rem,2.5vw,1.75rem)] font-semibold text-foreground tracking-[-0.025em] leading-tight">
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
        </div>
      </header>

      <div className="p-7 sm:p-8 space-y-8">
        {/* Production snapshot */}
        <ProductionSnapshotPanel items={display.productionSnapshot} />

        {/* Architecture artifact */}
        <ArchitectureArtifact display={display} />

        {/* What I Built */}
        {exp.achievements.length > 0 && (
          <section className="space-y-4">
            <p className="text-block-label">What I Built</p>
            <ul className="space-y-3">
              {exp.achievements.map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-foreground/85 leading-relaxed pl-4 border-l-2 border-primary/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Architecture Decisions */}
        {exp.decisions.length > 0 && (
          <section className="space-y-4">
            <p className="text-block-label">Architecture Decisions</p>
            <ul className="space-y-3">
              {exp.decisions.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed">
                  <span className="text-primary/50 shrink-0 font-mono text-[12px] mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Engineering Challenges */}
        <div className="grid lg:grid-cols-2 gap-8">
        <section className="space-y-4">
          <p className="text-block-label">Engineering Challenges</p>
          <ul className="space-y-3">
            {display.engineeringChallenges.map((item) => (
              <li key={item} className="text-[15px] text-muted-foreground leading-relaxed flex gap-3">
                <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <p className="text-block-label text-success">Production Impact</p>
          <ImpactList items={display.keyImpact} />
        </section>
        </div>

        {/* Engineering Highlights */}
        <section className="space-y-4">
          <p className="text-block-label">Engineering Highlights</p>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {display.engineeringHighlights.map((item) => (
              <HighlightCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-3 pt-1">
          <p className="text-block-label">Technology Stack</p>
          <TechGroups groups={display.techGroups} />
        </section>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <Section id="experience" tone="default" spacing="default" width="wide" className="section-chapter">
      <SectionHeader
        badge="Experience"
        title="Production engineering"
        description="Systems shipped to enterprise clients — architecture, scale, and impact documented."
        align="left"
        variant="featured"
      />

      <SectionContent featured>
        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute left-[7px] sm:left-[9px] top-4 bottom-4 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                {...sectionRevealStagger(i)}
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
              <div className="rounded-[calc(var(--radius)-2px)] border border-border-subtle/60 bg-card/50 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-7 sm:p-8">
                  <div className="min-w-0">
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
                  <span className="text-[12px] text-muted-foreground/70 px-4 py-2 rounded-full border border-border-subtle/60 bg-muted/30 w-fit tabular-nums shrink-0 self-start sm:self-center">
                    2021 – 2025
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
