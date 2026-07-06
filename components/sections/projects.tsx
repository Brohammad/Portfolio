"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Clock,
  Layers,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { GithubIcon } from "@/components/ui/social-icons";
import { projects } from "@/content/data";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

/* ── Per-project display config (projects section only) ── */

interface ProjectMeta {
  label: string;
  value: string;
}

interface TechGroup {
  label: string;
  items: string[];
}

interface ProjectDisplay {
  tagline: string;
  badges: string[];
  metadata: ProjectMeta[];
  techGroups: TechGroup[];
}

const projectDisplay: Record<string, ProjectDisplay> = {
  renewai: {
    tagline:
      "Multi-agent insurance renewal platform orchestrating policy analysis, risk scoring, and client outreach.",
    badges: ["Production", "Enterprise", "Multi-agent"],
    metadata: [
      { label: "Deployment", value: "Azure" },
      { label: "Agents", value: "3 specialized" },
      { label: "Availability", value: "99.9% target" },
      { label: "Database", value: "PostgreSQL + Redis" },
    ],
    techGroups: [
      { label: "Core", items: ["Python", "FastAPI"] },
      { label: "AI", items: ["LangGraph", "LangChain"] },
      { label: "Data", items: ["PostgreSQL", "Redis"] },
      { label: "Infra", items: ["Docker", "Azure"] },
    ],
  },
  fincore: {
    tagline:
      "Enterprise banking assistant with hybrid retrieval, source citation, and RBAC over regulatory documents.",
    badges: ["Production", "Enterprise", "RAG"],
    metadata: [
      { label: "Volume", value: "~5K req/day" },
      { label: "Latency", value: "p99 840ms" },
      { label: "Cloud", value: "Azure AKS" },
      { label: "Retrieval", value: "Hybrid dense + BM25" },
    ],
    techGroups: [
      { label: "Core", items: ["Python", "FastAPI"] },
      { label: "AI", items: ["LangChain", "OpenAI"] },
      { label: "Data", items: ["Qdrant", "PostgreSQL"] },
      { label: "Infra", items: ["Azure", "SSE"] },
    ],
  },
  "paint-intelligence": {
    tagline:
      "AI-first CRM predicting dealer churn and surfacing growth opportunities across a national network.",
    badges: ["Production", "AI", "CRM"],
    metadata: [
      { label: "Deployment", value: "AWS" },
      { label: "Network", value: "National dealers" },
      { label: "Cache hit", value: "60%+" },
      { label: "Database", value: "MongoDB" },
    ],
    techGroups: [
      { label: "Core", items: ["Node.js", "Python"] },
      { label: "AI", items: ["LangChain", "OpenAI"] },
      { label: "Data", items: ["MongoDB"] },
      { label: "Infra", items: ["Docker", "React"] },
    ],
  },
  "distributed-kv": {
    tagline:
      "Fault-tolerant distributed store with Raft consensus, linearizable reads, and automatic leader failover.",
    badges: ["Distributed", "Consensus", "In Progress"],
    metadata: [
      { label: "Nodes", value: "3-node cluster" },
      { label: "Protocol", value: "Raft" },
      { label: "Guarantee", value: "Linearizable" },
      { label: "Transport", value: "gRPC" },
    ],
    techGroups: [
      { label: "Core", items: ["Go"] },
      { label: "Distributed", items: ["Raft", "gRPC"] },
      { label: "Data", items: ["Log replication"] },
      { label: "Infra", items: ["Docker", "Protobuf"] },
    ],
  },
};

const badgeStyle: Record<string, string> = {
  Production: "bg-success/[0.08] text-success border-success/15",
  Enterprise: "bg-primary/[0.06] text-primary border-primary/12",
  "Multi-agent": "bg-primary/[0.06] text-primary border-primary/12",
  RAG: "bg-primary/[0.06] text-primary border-primary/12",
  AI: "bg-primary/[0.06] text-primary border-primary/12",
  CRM: "bg-primary/[0.06] text-primary border-primary/12",
  Distributed: "bg-secondary/10 text-primary border-secondary/15",
  Consensus: "bg-secondary/10 text-primary border-secondary/15",
  "In Progress": "bg-foreground/[0.04] text-muted-foreground border-border-subtle",
};

/* ── Engineering preview visuals ── */

function FlowArrow() {
  return (
    <svg width="20" height="8" viewBox="0 0 20 8" className="shrink-0 text-border" aria-hidden>
      <path d="M0 4h14M14 4l-4-4M14 4l-4 4" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function PreviewRenewAI() {
  return (
    <div className="w-full max-w-[380px] space-y-5">
      <div className="flex items-center justify-between gap-2">
        {["Policy", "Risk", "Outreach"].map((node, i) => (
          <div key={node} className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex-1 rounded-lg border border-primary/20 bg-primary/[0.07] px-3 py-3 text-center group-hover:border-primary/30 transition-colors duration-300">
              <span className="text-[11px] font-medium text-primary/85 block truncate">{node}</span>
              <span className="text-[9px] text-muted-foreground/55 mt-1 block">agent</span>
            </div>
            {i < 2 && <FlowArrow />}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border-subtle bg-card/80">
        <span className="text-[10px] font-mono text-primary/70">LangGraph</span>
        <span className="text-[9px] text-muted-foreground/45">orchestrator</span>
        <span className="ml-auto text-[9px] text-muted-foreground/55">state machine</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        {["PostgreSQL", "Redis", "LLM"].map((s) => (
          <div key={s} className="px-3 py-2 rounded-md border border-border-subtle bg-foreground/[0.02]">
            <span className="text-[9px] text-muted-foreground/75 font-mono">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewFinCore() {
  const steps = [
    { label: "query", detail: "banking policy Q" },
    { label: "hybrid", detail: "Qdrant + BM25" },
    { label: "rerank", detail: "12 chunks" },
    { label: "stream", detail: "SSE + cite" },
  ];
  return (
    <div className="w-full max-w-[360px] space-y-4 font-mono">
      <div className="flex items-center gap-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex-1 rounded-lg border border-border-subtle bg-card/70 px-2.5 py-3 text-center group-hover:border-primary/20 transition-colors duration-300">
              <span className="text-[10px] text-primary/70 block">{step.label}</span>
              <span className="text-[8px] text-muted-foreground/55 block truncate mt-0.5">{step.detail}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="text-[9px] text-muted-foreground/35 shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-success/15 bg-success/[0.04] px-4 py-3 flex items-center justify-between">
        <span className="text-[10px] text-success/80">✓ cited · RBAC enforced</span>
        <span className="text-[9px] text-muted-foreground/55 tabular-nums">840ms p99</span>
      </div>
    </div>
  );
}

function PreviewPaintIntel() {
  const bars = [35, 52, 41, 68, 48, 74, 55, 62];
  return (
    <div className="w-full max-w-[280px] space-y-3">
      <div className="flex items-end justify-between gap-3">
        <div className="flex-1">
          <p className="text-[9px] text-muted-foreground/50 mb-2">Dealer churn forecast</p>
          <div className="flex items-end gap-[3px] h-12">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-[2px] bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-lg font-semibold text-foreground tabular-nums tracking-tight">↓12%</p>
          <p className="text-[8px] text-muted-foreground/50 mt-0.5">predicted churn</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 rounded-md border border-border-subtle bg-card/60 px-2 py-1.5">
          <span className="text-[8px] text-muted-foreground/50 block">Dealers</span>
          <span className="text-[11px] font-medium text-foreground/80 tabular-nums">2,400+</span>
        </div>
        <div className="flex-1 rounded-md border border-border-subtle bg-card/60 px-2 py-1.5">
          <span className="text-[8px] text-muted-foreground/50 block">AI insights</span>
          <span className="text-[11px] font-medium text-foreground/80">Weekly</span>
        </div>
      </div>
    </div>
  );
}

function PreviewDistributedKV() {
  const nodes = [
    { id: "A", role: "follower" },
    { id: "B", role: "leader" },
    { id: "C", role: "follower" },
  ];
  return (
    <div className="w-full max-w-[300px] space-y-4">
      <div className="flex items-center justify-center gap-4">
        {nodes.map((node) => (
          <div key={node.id} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "w-11 h-11 rounded-lg border flex items-center justify-center transition-colors duration-300",
                node.role === "leader"
                  ? "border-primary/30 bg-primary/[0.1] group-hover:border-primary/40"
                  : "border-border-subtle bg-card/60"
              )}
            >
              <span className="text-[10px] font-mono font-medium text-foreground/70">{node.id}</span>
            </div>
            <span
              className={cn(
                "text-[8px] font-medium capitalize",
                node.role === "leader" ? "text-primary/80" : "text-muted-foreground/45"
              )}
            >
              {node.role}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px flex-1 bg-border-subtle" />
        <span className="text-[8px] font-mono text-muted-foreground/50 px-2">log replication</span>
        <div className="h-px flex-1 bg-border-subtle" />
      </div>
      <div className="text-center">
        <span className="text-[9px] font-mono text-primary/60">Raft · linearizable · gRPC</span>
      </div>
    </div>
  );
}

const previewMap: Record<string, React.FC> = {
  renewai: PreviewRenewAI,
  fincore: PreviewFinCore,
  "paint-intelligence": PreviewPaintIntel,
  "distributed-kv": PreviewDistributedKV,
};

function ProjectPreview({ projectId }: { projectId: string }) {
  const Preview = previewMap[projectId] ?? PreviewRenewAI;
  return (
    <div className="relative h-[14rem] sm:h-[15rem] lg:h-full lg:min-h-[16rem] overflow-hidden bg-muted/25 group-hover:bg-muted/35 transition-colors duration-500">
      <div className="absolute inset-0 grid-bg opacity-[0.25]" />
      <div className="relative h-full flex items-center justify-center p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-0.5">
        <Preview />
      </div>
    </div>
  );
}

function ProductionHighlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.slice(0, 3).map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/85 leading-relaxed">
          <Check className="w-4 h-4 text-success shrink-0 mt-0.5" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MetadataGrid({ items }: { items: ProjectMeta[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-5 sm:p-6 rounded-[calc(var(--radius)-2px)] bg-muted/20 border border-border-subtle h-full">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <p className="text-block-label">{item.label}</p>
          <p className="text-[15px] text-foreground/90 font-medium mt-1.5 tabular-nums tracking-tight">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

function TechGroups({ groups }: { groups: TechGroup[] }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-5">
      {groups.map((group) => (
        <div key={group.label} className="min-w-[6.5rem]">
          <p className="text-block-label mb-2.5">{group.label}</p>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span key={item} className="tech-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectModal({ project }: { project: Project }) {
  const display = projectDisplay[project.id];
  return (
    <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden">
      <div className="p-8 sm:p-10 lg:p-12 border-b border-border-subtle bg-background-elevated/30">
        <DialogHeader className="space-y-4 pr-8">
          <p className="text-caption text-primary">Case Study</p>
          <DialogTitle className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight leading-tight">
            {project.title}
          </DialogTitle>
          {display && (
            <p className="text-muted-foreground text-[16px] leading-relaxed">
              {display.tagline}
            </p>
          )}
        </DialogHeader>
      </div>

      <div className="p-7 sm:p-9 lg:p-10 space-y-8 overflow-y-auto max-h-[min(72vh,760px)]">
        <p className="text-[16px] text-foreground/85 leading-[1.8]">{project.longDescription}</p>

        {project.architecture && (
          <div className="case-study-panel space-y-4">
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-primary/70" />
              <p className="text-block-label">Architecture</p>
            </div>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">{project.architecture}</p>
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-4">
            <p className="text-block-label">Production Highlights</p>
            <ProductionHighlights items={project.metrics} />
          </div>
        )}

        {display && (
          <div className="space-y-4">
            <p className="text-block-label">Metadata</p>
            <MetadataGrid items={display.metadata} />
          </div>
        )}

        {display && (
          <div className="space-y-4">
            <p className="text-block-label">Technology</p>
            <TechGroups groups={display.techGroups} />
          </div>
        )}

        {project.challenges.length > 0 && (
          <div className="space-y-4">
            <p className="text-block-label">Production Challenges</p>
            <ul className="space-y-3">
              {project.challenges.map((c) => (
                <li key={c} className="text-[15px] text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary shrink-0 mt-0.5">→</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.lessons.length > 0 && (
          <div className="space-y-4">
            <p className="text-block-label">Results</p>
            <ul className="space-y-3">
              {project.lessons.map((l) => (
                <li key={l} className="text-[15px] text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary shrink-0 mt-0.5">→</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-6 border-t divider-subtle">
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.demo && (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </DialogContent>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: () => void;
}

function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const display = projectDisplay[project.id];
  const isDisabled = project.status === "coming-soon";
  const highlights = project.metrics ?? [];
  const challenge = project.engineeringChallenges?.[0];

  if (!display) return null;

  return (
    <article
      className={cn(
        "group relative flex flex-col lg:flex-row overflow-hidden rounded-[var(--radius)] bg-card transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:shadow-[var(--shadow-lg)] hover:-translate-y-1",
        isDisabled && "opacity-50 pointer-events-none"
      )}
    >
      {/* Preview */}
      <div className="lg:w-[36%] shrink-0 border-b lg:border-b-0 lg:border-r border-border-subtle/60">
        <ProjectPreview projectId={project.id} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 lg:p-8 gap-6">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          {display.badges.map((badge) => (
            <span
              key={badge}
              className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-medium border",
                badgeStyle[badge] ?? "bg-foreground/[0.03] text-muted-foreground border-border-subtle"
              )}
            >
              {badge}
            </span>
          ))}
          {project.status === "in-progress" && (
            <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground/60">
              <Clock className="w-3.5 h-3.5" />
              Building
            </span>
          )}
        </div>

        {/* Title + tagline */}
        <div className="space-y-2.5">
          <h3 className="text-[clamp(1.3125rem,2.5vw,1.625rem)] font-semibold text-foreground tracking-[-0.022em] leading-[1.2] group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-[1.7]">
            {display.tagline}
          </p>
        </div>

        {/* Metadata + highlights use width on large screens */}
        <div className="grid lg:grid-cols-2 gap-5">
          <MetadataGrid items={display.metadata} />

          {highlights.length > 0 && (
            <div className="content-panel h-full space-y-3">
              <p className="text-block-label">Production Highlights</p>
              <ProductionHighlights items={highlights} />
            </div>
          )}
        </div>

        {challenge && (
          <div className="case-study-panel space-y-2.5">
            <p className="text-block-label">Engineering Challenge</p>
            <p className="panel-body">{challenge}</p>
          </div>
        )}

        {/* Tech groups */}
        <div className="space-y-3">
          <p className="text-block-label">Stack</p>
          <TechGroups groups={display.techGroups} />
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-3 pt-4 mt-auto border-t border-border-subtle/70"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            size="default"
            className="group/btn min-w-[9.5rem] h-11 px-5 hover:-translate-y-px"
            onClick={onOpenCaseStudy}
          >
            Case Study
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </Button>
          {project.architecture && (
            <Button
              size="default"
              variant="outline"
              className="min-w-[9.5rem] h-11 px-5 hover:-translate-y-px hover:border-primary/25"
              onClick={onOpenCaseStudy}
            >
              <Layers className="w-4 h-4" />
              Architecture
            </Button>
          )}
          {project.github && (
            <Button size="default" variant="ghost" className="h-11 px-4 text-muted-foreground" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="default" variant="ghost" className="h-11 px-4 text-muted-foreground" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" tone="alt" spacing="default" glow width="wide">
      <SectionHeader
        badge="Projects"
        title="Production systems"
        description="Deployed software with documented architecture, scale, and engineering trade-offs."
        align="left"
      />

      <SectionContent>
        <div className="flex flex-col gap-7 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard
                project={project}
                onOpenCaseStudy={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Button variant="outline" size="lg" className="hover:-translate-y-px" asChild>
            <a href="https://github.com/Brohammad" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-4 h-4" />
              View all projects on GitHub
            </a>
          </Button>
        </motion.div>
      </SectionContent>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Dialog>
    </Section>
  );
}
