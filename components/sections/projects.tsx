"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  Clock,
  ChevronRight,
  X,
  Layers,
  Zap,
  BookOpen,
  BarChart2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SectionHeader } from "@/components/ui/section-header";
import { GithubIcon } from "@/components/ui/social-icons";
import { projects } from "@/content/data";
import type { Project } from "@/types";

const difficultyColor: Record<string, string> = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "default",
  Expert: "secondary",
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
      </DialogHeader>

      <div className="space-y-6 mt-2">
        <p className="text-zinc-300 leading-relaxed">{project.longDescription}</p>

        {/* Architecture */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-white/3 border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-blue-400">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Architecture</span>
            </div>
            <p className="text-sm text-zinc-400">{project.architecture}</p>
          </div>
        )}

        {/* Tech stack */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-zinc-300">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="tech">{t}</Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        {project.features.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3 text-zinc-300">
              <ChevronRight className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold">Key Features</span>
            </div>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3 text-zinc-300">
              <BarChart2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold">Metrics</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div key={m} className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 text-center">
                  <p className="text-xs text-zinc-400">{m}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Lessons */}
        <div className="grid sm:grid-cols-2 gap-4">
          {project.challenges.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <span className="text-orange-400 text-sm">⚡</span>
                <span className="text-sm font-semibold">Challenges</span>
              </div>
              <ul className="space-y-1.5">
                {project.challenges.map((c) => (
                  <li key={c} className="text-xs text-zinc-500 flex gap-2">
                    <span className="text-orange-400 shrink-0">→</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.lessons.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold">Lessons</span>
              </div>
              <ul className="space-y-1.5">
                {project.lessons.map((l) => (
                  <li key={l} className="text-xs text-zinc-500 flex gap-2">
                    <span className="text-purple-400 shrink-0">→</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2 border-t border-white/5">
          {project.github && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" variant="default" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
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
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0a0d] to-[#09090b]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Projects"
          title="Things I've built"
          description="Production-oriented projects spanning backend systems, distributed computing, and AI engineering."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`relative group rounded-xl border transition-all duration-300 overflow-hidden ${
                project.status === "coming-soon"
                  ? "bg-[#0d0d0f] border-white/5 opacity-70"
                  : "bg-[#111113] border-white/5 hover:border-white/10 card-hover cursor-pointer"
              }`}
              onClick={() => {
                if (project.status !== "coming-soon") setSelectedProject(project);
              }}
            >
              {/* Gradient top bar */}
              <div
                className={`h-0.5 w-full ${
                  project.status === "coming-soon"
                    ? "bg-zinc-700"
                    : "bg-gradient-to-r from-blue-600 to-purple-600"
                }`}
              />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant={
                        (difficultyColor[project.difficulty] as "default" | "secondary" | "success" | "warning") ||
                        "default"
                      }
                      className="text-[10px]"
                    >
                      {project.difficulty}
                    </Badge>
                    {project.status === "coming-soon" && (
                      <Badge variant="outline" className="text-[10px] text-zinc-500">
                        <Clock className="w-2.5 h-2.5 mr-1" />
                        Coming Soon
                      </Badge>
                    )}
                    {project.status === "in-progress" && (
                      <Badge variant="warning" className="text-[10px]">
                        In Progress
                      </Badge>
                    )}
                  </div>
                  {project.status !== "coming-soon" && (
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors shrink-0" />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 text-zinc-500 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 text-zinc-600 border border-white/5">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                {project.status !== "coming-soon" && (
                  <div
                    className="flex gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.github && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2.5 text-xs"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 px-2.5 text-xs"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    <button
                      className="ml-auto text-xs text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Brohammad"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              View all projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Dialog>
    </section>
  );
}
