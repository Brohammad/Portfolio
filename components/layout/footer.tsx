"use client";

import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/content/data";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle section-tone-default">
      <div className="section-container py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[calc(var(--radius)-4px)] bg-primary flex items-center justify-center shadow-[var(--shadow-button)]">
              <Terminal className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="text-[15px] font-medium text-foreground tracking-tight">
              brohammad<span className="text-primary">.tech</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground/55">
            Built with Next.js · Deployed on Vercel
          </p>

          <div className="flex items-center gap-0.5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground/55 hover:text-primary hover:bg-primary/[0.05] transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-[15px] h-[15px]" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground/55 hover:text-primary hover:bg-primary/[0.05] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-[15px] h-[15px]" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="w-10 h-10 flex items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground/55 hover:text-primary hover:bg-primary/[0.05] transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-[15px] h-[15px]" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-subtle text-center">
          <p className="text-[12px] text-muted-foreground/40 tracking-wide">
            © {new Date().getFullYear()} Brohammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
