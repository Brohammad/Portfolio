"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
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
    langColor: "#3572A5",
  },
  {
    name: "distributed-kv-store",
    description: "Fault-tolerant distributed KV store implementing Raft consensus from scratch",
    stars: "—",
    forks: "—",
    language: "Go",
    langColor: "#00ADD8",
  },
  {
    name: "url-shortener-service",
    description: "High-throughput URL shortener with Redis caching, analytics, and rate limiting",
    stars: "—",
    forks: "—",
    language: "TypeScript",
    langColor: "#3178C6",
  },
  {
    name: "auth-service",
    description: "Standalone auth microservice with JWT, OAuth2, refresh rotation, and MFA",
    stars: "—",
    forks: "—",
    language: "TypeScript",
    langColor: "#3178C6",
  },
];

export function GithubSection() {
  return (
    <section id="github" className="py-16 sm:py-24 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Open Source"
          title="GitHub Activity"
          description="Building in public. Side projects, experiments, and systems work."
        />

        {/* Contribution graph placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-[#111113] border border-white/5 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <GithubIcon className="w-5 h-5 text-zinc-400" />
              <span className="text-white font-medium">Contribution Activity</span>
            </div>
            <span className="text-xs text-zinc-500 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
              Last 12 months
            </span>
          </div>

          {/* Mock contribution grid */}
          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {Array.from({ length: 52 }).map((_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, day) => {
                    // Deterministic pseudo-random so SSR and client match
                    const seed = (week * 7 + day) * 2654435761;
                    const intensity = ((seed >>> 0) % 1000) / 1000;
                    const colorClass =
                      intensity > 0.85
                        ? "bg-blue-500"
                        : intensity > 0.65
                        ? "bg-blue-600/70"
                        : intensity > 0.45
                        ? "bg-blue-700/50"
                        : intensity > 0.25
                        ? "bg-blue-900/40"
                        : "bg-white/5";
                    return (
                      <div
                        key={day}
                        className={`w-3 h-3 rounded-sm ${colorClass} transition-colors hover:scale-110`}
                        title={`${Math.floor(intensity * 5)} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 justify-end text-xs text-zinc-600">
            <span>Less</span>
            <div className="flex gap-1">
              {["bg-white/5", "bg-blue-900/40", "bg-blue-700/50", "bg-blue-600/70", "bg-blue-500"].map(
                (c) => (
                  <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
                )
              )}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Pinned repos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-6 grid sm:grid-cols-2 gap-4"
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
              className="card-hover group p-4 rounded-xl bg-[#111113] border border-white/5 hover:border-white/10 transition-all flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-zinc-500" />
                  <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </div>

              <p className="text-xs text-zinc-500 leading-relaxed">{repo.description}</p>

              <div className="flex items-center gap-4 text-xs text-zinc-600">
                <div className="flex items-center gap-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: repo.langColor }}
                  />
                  {repo.language}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="gap-2">
              <GithubIcon className="w-4 h-4" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
