"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Clock,
  Layers,
  Zap,
  BookOpen,
  BarChart2,
  Check,
  Terminal,
  Network,
  Database,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { GithubIcon } from "@/components/ui/social-icons";
import { projects } from "@/content/data";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const difficultyColor: Record<string, string> = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "default",
  Expert: "secondary",
};

type PreviewKind = "agents" | "rag" | "dashboard" | "cluster";

const previewKind: Record<string, PreviewKind> = {
  renewai: "agents",
  fincore: "rag",
  "paint-intelligence": "dashboard",
  "distributed-kv": "cluster",
};

function PreviewAgents() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[220px]">
      <div className="flex items-center justify-between gap-2">
        {["Policy", "Risk", "Outreach"].map((node) => (
          <div key={node} className="flex-1 rounded-md border border-primary/15 bg-primary/[0.06] px-2 py-1.5 text-center">
            <span className="text-[9px] font-medium text-primary/80">{node}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6">
        <div className="h-3 w-px bg-border" />
        <div className="h-3 w-px bg-border" />
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="rounded-md border border-border-subtle bg-card/80 px-2 py-1">
          <span className="text-[9px] text-muted-foreground">PostgreSQL</span>
        </div>
        <div className="rounded-md border border-border-subtle bg-card/80 px-2 py-1">
          <span className="text-[9px] text-muted-foreground">Redis</span>
        </div>
      </div>
    </div>
  );
}

function PreviewRag() {
  return (
    <div className="w-full max-w-[240px] space-y-2 font-mono text-[9px] leading-relaxed">
      <div className="flex items-center gap-2 text-muted-foreground/70">
        <span className="text-primary/70">→</span>
        <span>query: policy renewal terms</span>
      </div>
      <div className="flex items-center gap-2 pl-3 text-muted-foreground/60">
        <span className="text-primary/60">hybrid</span>
        <span>Qdrant + BM25 → 12 chunks</span>
      </div>
      <div className="flex items-center gap-2 pl-3 text-muted-foreground/60">
        <span className="text-primary/60">llm</span>
        <span>stream response + citations</span>
      </div>
      <div className="mt-1 rounded-md border border-success/15 bg-success/[0.05] px-2 py-1 text-success/80">
        ✓ cited answer · RBAC enforced
      </div>
    </div>
  );
}

function PreviewDashboard() {
  return (
    <div className="w-full max-w-[200px] space-y-2">
      <div className="flex items-end gap-1.5 h-10">
        {[40, 65, 48, 80, 55, 72].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-muted-foreground/50">
        <span>Dealer churn</span>
        <span className="text-success/70">↓ 12%</span>
      </div>
    </div>
  );
}

function PreviewCluster() {
  return (
    <div className="flex items-center gap-3">
      {["Node A", "Node B", "Node C"].map((node, i) => (
        <div
          key={node}
          className={cn(
            "flex flex-col items-center gap-1.5",
            i === 1 && "scale-105"
          )}
        >
          <div
            className={cn(
              "w-10 h-10 rounded-lg border flex items-center justify-center",
              i === 1
                ? "border-primary/25 bg-primary/[0.08]"
                : "border-border-subtle bg-card/60"
            )}
          >
            <Database className={cn("w-3.5 h-3.5", i === 1 ? "text-primary" : "text-muted-foreground/50")} />
          </div>
          <span className="text-[8px] text-muted-foreground/50">{i === 1 ? "Leader" : node}</span>
        </div>
      ))}
    </div>
  );
}

const previewIcons: Record<PreviewKind, React.ElementType> = {
  agents: Network,
  rag: Terminal,
  dashboard: BarChart2,
  cluster: Database,
};

function ProjectPreview({ project }: { project: Project }) {
  const kind = previewKind[project.id] ?? "agents";
  const PreviewIcon = previewIcons[kind];

  return (
    <div className="relative h-[7.5rem] shrink-0 border-b divider-subtle overflow-hidden">
      <div className="absolute inset-0 bg-muted/35" />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(139,94,60,0.08),transparent_60%)]" />

      <div className="relative h-full flex flex-col p-4">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-muted-foreground/45">
            <PreviewIcon className="w-3 h-3" />
            <span className="text-[10px] font-medium tracking-wide uppercase">
              {kind === "agents" && "Architecture"}
              {kind === "rag" && "Pipeline"}
              {kind === "dashboard" && "Analytics"}
              {kind === "cluster" && "Cluster"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {project.status === "in-progress" && (
              <Badge variant="warning" className="text-[9px] px-2 py-0.5">
                In Progress
              </Badge>
            )}
            {project.status === "coming-soon" && (
              <Badge variant="outline" className="text-[9px] px-2 py-0.5 text-muted-foreground/60">
                <Clock className="w-2.5 h-2.5 mr-0.5" />
                Soon
              </Badge>
            )}
            {project.status === "completed" && (
              <span className="text-[9px] font-medium text-success/70 uppercase tracking-wide">
                Production
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {kind === "agents" && <PreviewAgents />}
          {kind === "rag" && <PreviewRag />}
          {kind === "dashboard" && <PreviewDashboard />}
          {kind === "cluster" && <PreviewCluster />}
        </div>
      </div>
    </div>
  );
}

function ProductionHighlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.slice(0, 3).map((item) => (
        <li key={item} className="highlight-item">
          <Check className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectModal({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <p className="text-caption text-primary mb-2">Case Study</p>
        <DialogTitle className="text-2xl font-semibold tracking-tight">{project.title}</DialogTitle>
      </DialogHeader>

      <div className="space-y-8 mt-2">
        <p className="text-foreground/80 leading-[1.85] max-w-prose">{project.longDescription}</p>

        {project.architecture && (
          <div className="card-static card-body">
            <div className="flex items-center gap-2.5 mb-3 text-primary">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-medium">Architecture</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.architecture}</p>
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div>
            <p className="text-caption mb-4">Production Highlights</p>
            <ProductionHighlights items={project.metrics} />
          </div>
        )}

        {project.scale && project.scale.length > 0 && (
          <div>
            <p className="text-caption mb-4">Scale</p>
            <div className="flex flex-wrap gap-2">
              {project.scale.map((item) => (
                <span key={item} className="metric-chip">{item}</span>
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center gap-2.5 mb-4 text-foreground/80">
            <Zap className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Technology Stack</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="tech-chip-sm">{t}</span>
            ))}
          </div>
        </div>

        {project.features.length > 0 && (
          <div>
            <div className="flex items-center gap-2.5 mb-4 text-foreground/80">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">What Was Built</span>
            </div>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-0.5">·</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {project.challenges.length > 0 && (
            <div>
              <p className="text-caption mb-4">Why It Was Difficult</p>
              <ul className="space-y-2.5">
                {project.challenges.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">→</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.lessons.length > 0 && (
            <div>
              <p className="text-caption mb-4">Key Learnings</p>
              <ul className="space-y-2.5">
                {project.lessons.map((l) => (
                  <li key={l} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">→</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

interface ProjectCaseStudyCardProps {
  project: Project;
  onOpenCaseStudy: () => void;
}

function ProjectCaseStudyCard({ project, onOpenCaseStudy }: ProjectCaseStudyCardProps) {
  const isDisabled = project.status === "coming-soon";
  const highlights = project.metrics ?? [];

  return (
    <article
      className={cn(
        "group surface-card project-case-study flex flex-col h-full overflow-hidden",
        isDisabled ? "opacity-50 pointer-events-none" : "cursor-pointer"
      )}
      onClick={() => !isDisabled && onOpenCaseStudy()}
    >
      <ProjectPreview project={project} />

      <div className="card-body flex flex-col flex-1 gap-4 pt-5 pb-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-foreground text-[1.0625rem] leading-snug tracking-tight group-hover:text-primary transition-colors duration-[250ms]">
              {project.title}
            </h3>
            {!isDisabled && (
              <Badge
                variant={
                  (difficultyColor[project.difficulty] as "default" | "secondary" | "success" | "warning") ||
                  "default"
                }
                className="text-[9px] shrink-0"
              >
                {project.difficulty}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-[1.65] line-clamp-2">
            {project.description}
          </p>
        </div>

        {highlights.length > 0 && (
          <div>
            <p className="text-caption mb-2.5">Production Highlights</p>
            <ProductionHighlights items={highlights} />
          </div>
        )}

        {project.scale && project.scale.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.scale.map((item) => (
              <span key={item} className="metric-chip text-[10px]">
                {item}
              </span>
            ))}
          </div>
        )}

        {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
          <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <p className="text-caption mb-2">Engineering Challenges</p>
            <ul className="space-y-1.5">
              {project.engineeringChallenges.slice(0, 2).map((c) => (
                <li key={c} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary/50 shrink-0">→</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <p className="text-caption mb-2">Technology Stack</p>
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 6).map((t) => (
              <span key={t} className="tech-chip-sm">{t}</span>
            ))}
            {project.tech.length > 6 && (
              <span className="tech-chip-sm opacity-45">+{project.tech.length - 6}</span>
            )}
          </div>
        </div>

        {!isDisabled && (
          <div
            className="flex flex-col gap-3 pt-4 mt-auto border-t divider-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="h-9"
                onClick={onOpenCaseStudy}
              >
                Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              {project.architecture && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-9 text-muted-foreground"
                  onClick={onOpenCaseStudy}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Architecture
                </Button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-[250ms]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                  <ArrowRight className="w-3 h-3 opacity-50" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-[250ms]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                  <ArrowRight className="w-3 h-3 opacity-50" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" tone="alt" spacing="spacious" glow width="wide">
      <SectionHeader
        badge="Projects"
        title="Production systems"
        description="Each project is a deployed system — with architecture, scale, and engineering trade-offs documented."
        align="left"
        className="max-w-2xl"
      />

      <SectionContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-7 max-w-5xl"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group h-full"
            >
              <ProjectCaseStudyCard
                project={project}
                onOpenCaseStudy={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Brohammad"
              target="_blank"
              rel="noopener noreferrer"
            >
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
