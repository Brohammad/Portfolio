"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig, aboutIntro } from "@/content/data";
import { scrollToSection } from "@/lib/scroll-to-section";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center section-tone-default"
    >
      <div className="section-container w-full pt-[calc(var(--navbar-height)+2.5rem)] pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            {...fadeUp}
            className="text-display tracking-[-0.034em]"
          >
            Hey! I&apos;m{" "}
            <span className="accent-text">Brohammad</span>
          </motion.h1>

          <motion.ul
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="mt-10 space-y-4 text-left"
          >
            {aboutIntro.map((block) => (
              <li
                key={block.label}
                className="flex gap-3 text-[1rem] sm:text-[1.0625rem] leading-[1.75] text-muted-foreground"
              >
                <span className="text-primary shrink-0 select-none">—</span>
                <span>{block.text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" className="group" onClick={() => scrollToSection("projects")}>
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={siteConfig.links.resume} download>
                <Download className="w-4 h-4 shrink-0" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.22 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md p-1"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md p-1"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => scrollToSection("skills")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors focus-ring rounded-md"
          aria-label="Scroll to skills section"
        >
          <span className="text-caption">Scroll Down</span>
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
