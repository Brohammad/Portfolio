"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig, heroMetrics } from "@/content/data";
import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

const roles = [
  "Voice AI Engineer",
  "Systems Engineer",
  "Backend Engineer",
  "AI Engineer",
  "Production AI Builder",
];

const statusSignals = [
  { label: "VoxForge live in prod", dot: true },
  { label: "Open to opportunities", dot: false },
  { label: "Bengaluru", dot: false },
  { label: "354+ automated tests", dot: false },
];

const terminalLines: Array<
  | { prompt: string; cmd: string }
  | { result: string; success?: boolean; muted?: boolean }
> = [
  { prompt: "~", cmd: "git clone github.com/Brohammad/VoxFauge" },
  { prompt: "~", cmd: "cd VoxFauge && ./deploy.sh init" },
  { result: "✓ HTTPS ready · api, worker, postgres, redis, nginx", success: true },
  { prompt: "~", cmd: "curl -s https://voxforge.brohammad.tech/api/v1/health | jq" },
  { result: '{"status":"healthy","transports":3,"coverage":"81%"}', muted: true },
  { prompt: "~", cmd: "pytest -q --cov" },
  { result: "✓ 354 passed · VoicePipelineService · all transports", success: true },
  { prompt: "~", cmd: "open https://voxforge.brohammad.tech/demo" },
  { result: "✓ voice pipeline · STT → LangGraph → TTS → eval · ~100ms", success: true },
];

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      4200
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative h-[1.75rem] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 text-[1.0625rem] sm:text-[1.125rem] font-normal tracking-[-0.015em] text-foreground/75"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden noise section-tone-default"
    >
      <div className="relative z-10 section-container w-full pt-[calc(var(--navbar-height)+2.5rem)] pb-20 lg:pt-[calc(var(--navbar-height)+3.75rem)] lg:pb-28">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col max-w-none lg:max-w-[38rem]">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border-subtle bg-card/60 text-[11px] font-medium tracking-[0.02em] text-muted-foreground">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-25" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
                </span>
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.06 }}
              className="mt-10 sm:mt-12 tracking-[-0.032em]"
            >
              <span className="block text-[clamp(2.125rem,4.25vw,3.125rem)] font-semibold leading-[1.1] text-foreground">
                Hi, I&apos;m{" "}
                <span className="accent-text">Brohammad</span>
              </span>
            </motion.h1>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="mt-5"
            >
              <RoleRotator />
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.18 }}
              className="mt-8 space-y-4 max-w-[48ch]"
            >
              <p className="text-[1.0625rem] sm:text-[1.125rem] leading-[1.72] text-foreground/88 font-medium">
                {siteConfig.headline}
              </p>
              <p className="text-[1rem] sm:text-[1.0625rem] leading-[1.75] text-muted-foreground">
                Open-source voice AI infrastructure with unified pipeline, RAG,
                evaluation, and one-command HTTPS deployment — plus enterprise
                multi-agent systems for banking clients.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.21 }}
              className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="px-3 py-2.5 rounded-[calc(var(--radius)-4px)] border border-border-subtle bg-card/50"
                >
                  <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                    {metric.label}
                  </p>
                  <p className="text-[15px] font-semibold text-foreground tabular-nums mt-1">
                    {metric.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground/55 mt-0.5 truncate">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.24 }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-muted-foreground/80"
            >
              {statusSignals.map((signal, i) => (
                <span key={signal.label} className="inline-flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden className="text-border select-none">
                      ·
                    </span>
                  )}
                  {signal.dot && (
                    <span className="w-1 h-1 rounded-full bg-success shrink-0" />
                  )}
                  <span>{signal.label}</span>
                </span>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                className="group min-w-[10.5rem] hover:-translate-y-px hover:shadow-[var(--shadow-md)]"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[10rem] px-8 hover:-translate-y-px hover:border-primary/25 hover:bg-primary/[0.03]"
                asChild
              >
                <a href={siteConfig.links.resume} download>
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Resume</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.36 }}
              className="mt-5 flex flex-wrap items-center gap-1"
            >
              <Button size="default" variant="ghost" className="text-muted-foreground/80" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                  <span className="ml-1 text-[11px] text-muted-foreground/50 tabular-nums">
                    · 600+ commits
                  </span>
                </a>
              </Button>
              <Button size="default" variant="ghost" className="text-muted-foreground/80" asChild>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Terminal workspace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-full max-w-[500px] ml-auto"
          >
            <div className="relative dark" suppressHydrationWarning>
              <div className="rounded-[var(--radius)] overflow-hidden terminal-glow border border-white/[0.06]">
                <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/[0.05] bg-[#16130F]">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/90" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-3 min-w-0">
                    <span className="text-[10px] text-[#A8A098]/50 font-mono truncate">
                      voxforge
                    </span>
                    <span className="text-[#3A3530]">—</span>
                    <span className="text-[10px] text-[#A8A098]/70 font-mono">
                      zsh
                    </span>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-[9px] font-medium text-[#6B9A6B]/90 uppercase tracking-wider">
                    <span className="w-1 h-1 rounded-full bg-[#6B9A6B]" />
                    prod
                  </span>
                </div>

                <div className="px-4 py-3 border-b border-white/[0.04] bg-[#13110E] flex items-center gap-2">
                  {["deploy", "logs", "metrics"].map((tab, i) => (
                    <span
                      key={tab}
                      className={cn(
                        "px-2.5 py-1 rounded-md text-[10px] font-mono capitalize",
                        i === 0
                          ? "bg-white/[0.06] text-[#C89B6D]/90"
                          : "text-[#A8A098]/40"
                      )}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                <div className="p-5 font-mono text-[10.5px] leading-[1.8] space-y-1 bg-[#16130F] min-h-[320px]">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.35 + i * 0.06 }}
                      className="flex items-start gap-2"
                    >
                      {"prompt" in line ? (
                        <>
                          <span className="text-[#C89B6D] shrink-0 select-none">
                            {line.prompt} $
                          </span>
                          <span className="text-[#A8A098]/88 break-all">{line.cmd}</span>
                        </>
                      ) : (
                        <span
                          className={cn(
                            "pl-5 break-all",
                            line.success && "text-[#6B9A6B]",
                            line.muted && "text-[#A8A098]/55",
                            !line.success && !line.muted && "text-[#A8A098]/70"
                          )}
                        >
                          {line.result}
                        </span>
                      )}
                    </motion.div>
                  ))}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[#C89B6D] select-none">~ $</span>
                    <span className="cursor-blink inline-block w-1.5 h-3.5 bg-[#C89B6D]/70 rounded-[1px] align-middle" />
                  </div>
                </div>

                <div className="px-5 py-2.5 border-t border-white/[0.04] bg-[#13110E] flex items-center justify-between gap-4">
                  <span className="text-[9px] font-mono text-[#A8A098]/45">
                    voxforge-api · ubuntu-vps · 14d uptime
                  </span>
                  <span className="text-[9px] font-mono text-[#6B9A6B]/70 tabular-nums">
                    ~100ms mock
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/25"
        >
          <span className="text-caption">Scroll</span>
          <ChevronDown
            className="w-4 h-4 animate-bounce"
            style={{ animationDuration: "2.5s" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
