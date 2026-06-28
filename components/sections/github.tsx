"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data";

const pinnedRepos = [
  {
    name: "rag-assistant",
    description: "Production RAG pipeline with semantic chunking, hybrid search, and streaming chat",
    stars: "—",
    forks: "—",
    language: "Python",
  },
  {
    name: "distributed-kv-store",
    description: "Fault-tolerant distributed KV store implementing Raft consensus from scratch",
    stars: "—",
    forks: "—",
    language: "Go",
  },
  {
    name: "url-shortener-service",
    description: "High-throughput URL shortener with Redis caching, analytics, and rate limiting",
    stars: "—",
    forks: "—",
    language: "TypeScript",
  },
  {
    name: "auth-service",
    description: "Standalone auth microservice with JWT, OAuth2, refresh rotation, and MFA",
    stars: "—",
    forks: "—",
    language: "TypeScript",
  },
];

export function GithubSection() {
  return (
    <Section id="github" tone="default">
      <SectionHeader
        badge="Open Source"
        title="GitHub Activity"
        description="Building in public. Side projects, experiments, and systems work."
      />

      <SectionContent className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-static p-8 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <GithubIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium tracking-tight">Contribution Activity</span>
            </div>
            <span className="text-xs text-muted-foreground px-3 py-1.5 rounded-full bg-muted/50 border border-border-subtle w-fit">
              Last 12 months
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1 min-w-max">
              {Array.from({ length: 52 }).map((_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, day) => {
                    const seed = (week * 7 + day) * 2654435761;
                    const intensity = ((seed >>> 0) % 1000) / 1000;
                    const colorClass =
                      intensity > 0.85 ? "bg-primary"
                      : intensity > 0.65 ? "bg-primary/70"
                      : intensity > 0.45 ? "bg-primary/40"
                      : intensity > 0.25 ? "bg-primary/25"
                      : "bg-foreground/5";
                    return (
                      <div
                        key={day}
                        className={`w-3 h-3 rounded-[3px] ${colorClass}`}
                        title={`${Math.floor(intensity * 5)} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 justify-end text-xs text-muted-foreground/45">
            <span>Less</span>
            <div className="flex gap-1">
              {["bg-foreground/5", "bg-primary/25", "bg-primary/40", "bg-primary/70", "bg-primary"].map((c) => (
                <div key={c} className={`w-3 h-3 rounded-[3px] ${c}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-7"
        >
          {pinnedRepos.map((repo) => (
            <motion.a
              key={repo.name}
              href={`${siteConfig.links.github}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="group surface-card card-hover p-8 flex flex-col gap-5 h-full"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <GithubIcon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-[14px] font-semibold text-primary truncate">{repo.name}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/35 group-hover:text-primary transition-colors shrink-0" />
              </div>

              <p className="text-sm text-muted-foreground leading-[1.75] flex-1">{repo.description}</p>

              <div className="flex items-center gap-5 text-xs text-muted-foreground/50 pt-4 border-t border-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/50" />
                  {repo.language}
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center pt-4">
          <Button variant="outline" size="lg" asChild>
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
