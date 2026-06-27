"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { useTyping } from "@/hooks/use-typing";
import { siteConfig } from "@/content/data";

const roles = [
  "Backend Engineer",
  "AI Engineer",
  "GenAI Engineer",
  "Platform Engineer",
  "Systems Engineer",
];

const terminalLines = [
  { prompt: "~", cmd: "git clone github.com/Brohammad/fincore-assistant", delay: 0.3 },
  { prompt: "~", cmd: "cd fincore-assistant && docker compose up -d", delay: 0.8 },
  { prompt: "~", cmd: "python ingest.py --source ./banking-docs --chunks 512", delay: 1.4 },
  { result: "✓ Indexed 3,841 chunks · hybrid index ready", delay: 1.9, success: true },
  { prompt: "~", cmd: "curl localhost:8000/api/health", delay: 2.4 },
  { result: '{"status":"healthy","agents":3,"uptime":"99.9%"}', delay: 2.8 },
];

export function HeroSection() {
  const typedRole = useTyping(roles, 70, 2200);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-3xl" />

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Associate Consultant @ PwC · Open to new roles
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="gradient-text">Brohammad</span>
              </h1>
              <div className="h-16 flex items-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-300">
                  {typedRole}
                  <span className="cursor-blink text-blue-400 ml-0.5">|</span>
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-zinc-400 leading-relaxed max-w-lg"
            >
              Building intelligent systems that scale. Currently at{" "}
              <span className="text-white font-medium">PwC</span>{" "}
              shipping enterprise AI for banking clients — multi-agent systems,
              RAG pipelines, and production LLM infrastructure. NIT Calicut grad.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                variant="gradient"
                className="gap-2"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href={siteConfig.links.resume} download>
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="gap-2" asChild>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="gap-2" asChild>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            {/* Keyboard shortcut hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xs text-zinc-600 flex items-center gap-1.5"
            >
              Press{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-zinc-400">
                ⌘K
              </kbd>{" "}
              to open command palette
            </motion.p>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl" />

              {/* Terminal window */}
              <div className="relative bg-[#0d0d0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/5 rounded-md px-3 py-0.5 text-xs text-zinc-500 font-mono text-center">
                      zsh — brohammad@dev
                    </div>
                  </div>
                </div>

                {/* Terminal body */}
                <div className="p-5 font-mono text-sm space-y-2 min-h-[280px]">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: line.delay + 0.5, duration: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      {"prompt" in line ? (
                        <>
                          <span className="text-blue-400 shrink-0">{line.prompt} $</span>
                          <span className="text-zinc-300">{line.cmd}</span>
                        </>
                      ) : (
                        <span
                          className={
                            "success" in line && line.success
                              ? "text-emerald-400 pl-6"
                              : "text-zinc-500 pl-6"
                          }
                        >
                          {line.result}
                        </span>
                      )}
                    </motion.div>
                  ))}

                  {/* Blinking cursor */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-blue-400">~ $</span>
                    <span className="cursor-blink w-2 h-4 bg-blue-400 rounded-sm" />
                  </motion.div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-mono backdrop-blur-sm"
              >
                99.9% uptime
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-mono backdrop-blur-sm"
              >
                &lt;5ms latency
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        >
          <span className="text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
