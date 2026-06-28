"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { useTyping } from "@/hooks/use-typing";
import { siteConfig, heroMetrics } from "@/content/data";

const roles = [
  "Backend Engineer",
  "AI Engineer",
  "Platform Engineer",
  "Systems Engineer",
];

const pipelineNodes = [
  { label: "Client", active: false },
  { label: "API", active: true },
  { label: "Agents", active: true },
  { label: "RAG", active: true },
  { label: "Store", active: false },
];

const terminalLines = [
  { prompt: "~", cmd: "kubectl get pods -n fincore-prod" },
  { result: "fincore-api-7d4f8   1/1   Running   0   14d", success: true },
  { prompt: "~", cmd: "curl -s localhost:8000/metrics | grep requests_total" },
  { result: "http_requests_total{status=\"200\"} 4821", success: true },
  { prompt: "~", cmd: "python eval.py --suite production --threshold 0.92" },
  { result: "✓ 47/47 evals passed · latency p99: 840ms", success: true },
];

const latencyBars = [42, 58, 45, 72, 38, 65, 52, 48, 70, 44, 62, 50];

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
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-20 lg:gap-24 items-center">
          <div className="flex flex-col max-w-[36rem]">
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
                Production · 3 systems live on Azure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-display mt-12"
            >
              <span className="text-foreground">I build systems </span>
              <span className="accent-text">that run in production.</span>
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
              At <span className="text-foreground font-medium">PwC</span>, I ship
              enterprise AI for Fortune 500 banking — multi-agent orchestration,
              hybrid RAG, and backend infrastructure on Azure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {heroMetrics.map((metric, i) => (
                <div key={metric.label} className="hero-metric">
                  <p className="text-[1.125rem] font-semibold text-foreground tracking-tight tabular-nums leading-none">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-foreground/80 leading-tight">
                    {metric.label}
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground/60 leading-tight">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mt-12 flex flex-wrap items-center gap-4"
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
              transition={{ duration: 0.45, delay: 0.34 }}
              className="mt-5 flex flex-wrap items-center gap-2"
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
              className="mt-16 text-caption flex items-center gap-2 normal-case tracking-[0.06em]"
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
            className="hidden lg:flex flex-col gap-4 w-full max-w-[480px] ml-auto"
          >
            {/* Request pipeline */}
            <div className="artifact-panel p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="artifact-label">Request Pipeline</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-success">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-30" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
                  </span>
                  Deployed
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {pipelineNodes.map((node, i) => (
                  <div key={node.label} className="flex items-center gap-1.5 flex-1 min-w-0">
                    <span className={`flow-node w-full truncate ${node.active ? "flow-node-active" : ""}`}>
                      {node.label}
                    </span>
                    {i < pipelineNodes.length - 1 && <div className="flow-connector shrink-0" />}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border-subtle flex items-end justify-between gap-4">
                <div className="flex-1">
                  <p className="artifact-label mb-2">Latency (p99)</p>
                  <div className="flex items-end gap-[3px] h-8">
                    {latencyBars.map((h, i) => (
                      <div
                        key={i}
                        className="metric-bar flex-1 rounded-[1px] bg-primary/25"
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-semibold text-foreground tabular-nums tracking-tight">840ms</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-0.5">last 24h avg</p>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="relative dark opacity-90" suppressHydrationWarning>
              <div className="rounded-[var(--radius)] overflow-hidden terminal-glow border border-white/[0.05]">
                <div className="flex items-center gap-2.5 px-5 py-3 border-b border-white/[0.05] bg-[#16130F]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/90" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[11px] text-[#A8A098]/60 font-mono tracking-wide">
                      prod — brohammad@azure-aks
                    </span>
                  </div>
                </div>
                <div className="p-5 font-mono text-[11px] leading-[1.75] space-y-1.5 bg-[#16130F]">
                  {terminalLines.map((line, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {"prompt" in line ? (
                        <>
                          <span className="text-[#C89B6D] shrink-0">{line.prompt} $</span>
                          <span className="text-[#A8A098]/85">{line.cmd}</span>
                        </>
                      ) : (
                        <span
                          className={
                            "success" in line && line.success
                              ? "text-[#6B9A6B] pl-5"
                              : "text-[#A8A098]/50 pl-5"
                          }
                        >
                          {line.result}
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-0.5">
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
