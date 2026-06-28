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
  { prompt: "~", cmd: "git clone github.com/Brohammad/fincore-assistant" },
  { prompt: "~", cmd: "cd fincore-assistant && docker compose up -d" },
  { prompt: "~", cmd: "python ingest.py --source ./banking-docs --chunks 512" },
  { result: "✓ Indexed 3,841 chunks · hybrid index ready", success: true },
  { prompt: "~", cmd: "curl localhost:8000/api/health" },
  { result: '{"status":"healthy","agents":3,"uptime":"99.9%"}' },
];

export function HeroSection() {
  const typedRole = useTyping(roles, 70, 2200);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden noise section-tone-default"
    >
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.2] pointer-events-none" />

      <div className="relative z-10 section-container w-full pt-40 pb-32 lg:pt-44 lg:pb-40">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 lg:gap-28 items-center">
          <div className="flex flex-col max-w-[34rem]">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-success/[0.08] border border-success/15 text-success text-[12px] font-medium tracking-wide">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-30" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
                </span>
                Associate Consultant @ PwC · Open to roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-display mt-12"
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="accent-text">Brohammad</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-6 min-h-[2.25rem]"
            >
              <p className="text-subheading">
                {typedRole}
                <span className="cursor-blink text-primary ml-0.5">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="prose-body-lg mt-10"
            >
              Building intelligent systems that scale. At{" "}
              <span className="text-foreground font-medium">PwC</span>, I ship
              enterprise AI for banking — multi-agent systems, RAG pipelines,
              and production LLM infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-14 flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={siteConfig.links.resume} download>
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <Button size="default" variant="ghost" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button size="default" variant="ghost" asChild>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="mt-20 text-caption flex items-center gap-2 normal-case tracking-[0.06em]"
            >
              Press{" "}
              <kbd className="px-2 py-1 rounded-md bg-muted border border-border font-mono text-[10px] normal-case tracking-normal text-foreground/70">
                ⌘K
              </kbd>
              for command palette
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block w-full max-w-[460px] ml-auto opacity-90"
          >
            <div className="relative dark" suppressHydrationWarning>
              <div className="rounded-[var(--radius)] overflow-hidden terminal-glow border border-white/[0.05]">
                <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-white/[0.05] bg-[#16130F]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/90" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[11px] text-[#A8A098]/60 font-mono tracking-wide">
                      zsh — brohammad@dev
                    </span>
                  </div>
                </div>
                <div className="p-6 font-mono text-[12px] leading-[1.8] space-y-2 bg-[#16130F] min-h-[280px]">
                  {terminalLines.map((line, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      {"prompt" in line ? (
                        <>
                          <span className="text-[#C89B6D] shrink-0">{line.prompt} $</span>
                          <span className="text-[#A8A098]/85">{line.cmd}</span>
                        </>
                      ) : (
                        <span
                          className={
                            "success" in line && line.success
                              ? "text-[#6B9A6B] pl-6"
                              : "text-[#A8A098]/50 pl-6"
                          }
                        >
                          {line.result}
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 pt-1">
                    <span className="text-[#C89B6D]">~ $</span>
                    <span className="cursor-blink inline-block w-1.5 h-3.5 bg-[#C89B6D]/70 rounded-[1px] align-middle" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/30"
        >
          <span className="text-caption">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDuration: "2.5s" }} />
        </motion.div>
      </div>
    </section>
  );
}
