"use client";

import { motion } from "framer-motion";
import {
  Server,
  Brain,
  Boxes,
  Database,
  Cloud,
  Wrench,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type Confidence = "Production Experience" | "Advanced" | "Working Knowledge";

interface Capability {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  confidence: Confidence;
}

const capabilities: Capability[] = [
  {
    title: "Backend Systems",
    description:
      "Designing scalable APIs, authentication, caching, asynchronous workflows, and production services.",
    technologies: [
      "FastAPI",
      "Node.js",
      "REST",
      "gRPC",
      "WebSockets",
      "SSE",
      "Microservices",
      "Kafka",
    ],
    icon: Server,
    confidence: "Production Experience",
  },
  {
    title: "Voice AI",
    description:
      "End-to-end voice agent platforms — transport unification, STT/LLM/TTS pipelines, WebRTC, and operator tooling.",
    technologies: [
      "LiveKit",
      "WebSockets",
      "LangGraph",
      "STT/LLM/TTS",
      "Per-turn Eval",
      "Session Replay",
      "Human Handoff",
    ],
    icon: Brain,
    confidence: "Production Experience",
  },
  {
    title: "AI Engineering",
    description:
      "Building RAG pipelines, multi-agent orchestration, LLM evaluation, and production inference workflows.",
    technologies: [
      "RAG",
      "LangGraph",
      "LangChain",
      "pgvector",
      "MCP",
      "Hybrid Retrieval",
      "LLM Eval",
    ],
    icon: Brain,
    confidence: "Production Experience",
  },
  {
    title: "Infrastructure",
    description:
      "Containerization, CI/CD, observability, and deployment pipelines for production services.",
    technologies: [
      "Docker",
      "NGINX",
      "GitHub Actions",
      "Linux",
      "OpenTelemetry",
      "Prometheus",
      "Let's Encrypt",
    ],
    icon: Boxes,
    confidence: "Advanced",
  },
  {
    title: "Data Systems",
    description:
      "Relational and vector stores, caching layers, and data modeling for high-throughput applications.",
    technologies: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Qdrant",
      "MongoDB",
      "Vector Search",
    ],
    icon: Database,
    confidence: "Advanced",
  },
  {
    title: "Cloud & Deployment",
    description:
      "Cloud-native architecture, container orchestration, and secure infrastructure on Azure and AWS.",
    technologies: ["Azure", "AWS", "Kubernetes", "Docker", "Networking", "Secrets"],
    icon: Cloud,
    confidence: "Advanced",
  },
  {
    title: "Developer Experience",
    description:
      "Tooling, testing, documentation, and automation that help teams ship reliably.",
    technologies: ["Git", "Pytest", "React", "Next.js", "Automation", "API Docs"],
    icon: Wrench,
    confidence: "Working Knowledge",
  },
  {
    title: "Testing & Reliability",
    description:
      "Eval pipelines, integration testing, and reliability patterns for production AI systems.",
    technologies: [
      "LLM Evaluation",
      "pytest",
      "Playwright",
      "Coverage Gates",
      "Failure-mode Tests",
    ],
    icon: ShieldCheck,
    confidence: "Working Knowledge",
  },
];

const exploring = [
  "Go",
  "Rust",
  "Distributed Systems",
  "Kubernetes",
  "Compilers",
  "Operating Systems",
  "Networking",
  "System Design",
];

const confidenceStyle: Record<Confidence, string> = {
  "Production Experience": "bg-success/[0.07] text-success border-success/15",
  "Advanced": "bg-primary/[0.06] text-primary border-primary/12",
  "Working Knowledge": "bg-foreground/[0.03] text-muted-foreground border-border-subtle",
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = capability.icon;

  return (
    <article className="flex flex-col h-full p-6 sm:p-7 rounded-[var(--radius)] interactive-card-secondary">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="w-9 h-9 rounded-[calc(var(--radius)-4px)] bg-primary/[0.05] border border-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-muted-foreground/60" strokeWidth={1.5} />
        </div>
        <span
          className={cn(
            "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium border whitespace-nowrap",
            confidenceStyle[capability.confidence]
          )}
        >
          {capability.confidence}
        </span>
      </div>

      <h3 className="text-[1.0625rem] font-semibold text-foreground tracking-[-0.018em] leading-snug">
        {capability.title}
      </h3>

      <p className="text-[14px] text-muted-foreground leading-relaxed mt-3 flex-1">
        {capability.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border-subtle/80">
        {capability.technologies.map((tech) => (
          <span
            key={tech}
            className="tech-chip-sm transition-colors duration-200 hover:border-primary/20 hover:text-foreground/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" tone="elevated" spacing="default" width="wide" className="section-chapter">
      <SectionHeader
        badge="Capabilities"
        title="Engineering capability matrix"
        description="What kinds of systems I build — organized by domain, not syntax."
        align="left"
        variant="featured"
      />

      <SectionContent featured>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6"
        >
          {capabilities.map((capability) => (
            <motion.div key={capability.title} variants={cardVariants} className="h-full">
              <CapabilityCard capability={capability} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 lg:mt-10 p-6 sm:p-7 rounded-[var(--radius)] bg-card/60 border border-border-subtle"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Compass className="w-4 h-4 text-muted-foreground/45" strokeWidth={1.5} />
            <div>
              <p className="text-block-label">Currently Exploring</p>
              <p className="text-[13px] text-muted-foreground/70 mt-1">
                Separate from production capabilities — active areas of study.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {exploring.map((item) => (
              <span
                key={item}
                className={cn(
                  "px-3 py-1.5 rounded-[calc(var(--radius)-6px)] text-[11.5px] font-medium",
                  "text-muted-foreground/80 bg-foreground/[0.02] border border-border-subtle",
                  "transition-all duration-200 hover:border-primary/15 hover:text-foreground/75 hover:-translate-y-px"
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
