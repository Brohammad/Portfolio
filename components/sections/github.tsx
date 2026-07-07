"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitCommit } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data";

const pinnedRepos = [
  {
    name: "distributed-kv-store",
    description: "Raft consensus implementation with linearizable reads and gRPC inter-node communication.",
    language: "Go",
  },
  {
    name: "fincore-assistant",
    description: "Production RAG pipeline with hybrid retrieval, citation, and SSE streaming.",
    language: "Python",
  },
  {
    name: "auth-service",
    description: "JWT authentication microservice with refresh rotation and RBAC.",
    language: "TypeScript",
  },
  {
    name: "url-shortener-service",
    description: "High-throughput URL shortener with Redis caching and rate limiting.",
    language: "TypeScript",
  },
];

export function GithubSection() {
  return (
    <Section id="github" tone="default" spacing="default" width="wide">
      <SectionHeader
        badge="Open Source"
        title="GitHub"
        description="Systems work, experiments, and production patterns — building in public."
        align="left"
        variant="featured"
        className="max-w-xl"
      />

      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="interactive-card rounded-[var(--radius)] p-5 sm:p-7 mb-6 lg:mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <GithubIcon className="w-5 h-5 text-muted-foreground/60" />
              <div>
                <p className="text-[14px] font-medium text-foreground tracking-tight">
                  @Brohammad
                </p>
                <p className="text-[12px] text-muted-foreground/60 mt-0.5">
                  Backend, AI, and distributed systems
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-muted-foreground/70">
              <GitCommit className="w-3.5 h-3.5" />
              <span className="tabular-nums">600+ commits</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid sm:grid-cols-2 gap-4 lg:gap-5"
        >
          {pinnedRepos.map((repo) => (
            <motion.a
              key={repo.name}
              href={`${siteConfig.links.github}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="interactive-card group rounded-[var(--radius)] p-6 sm:p-7 flex flex-col gap-4 h-full focus-ring"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <GithubIcon className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                  <span className="text-[14px] font-semibold text-primary truncate">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0" />
              </div>
              <p className="text-[13px] text-muted-foreground leading-[1.7] flex-1">
                {repo.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground/50 pt-3 border-t border-border-subtle">
                <span className="w-2 h-2 rounded-full bg-primary/40" />
                {repo.language}
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8">
          <Button variant="outline" size="lg" className="hover:-translate-y-px focus-ring" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-4 h-4" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </SectionContent>
    </Section>
  );
}
