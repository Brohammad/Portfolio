"use client";

import { Download, Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/content/data";

const footerLinks = [
  { label: "GitHub", href: siteConfig.links.github, external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, external: true },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, external: false },
  { label: "Resume", href: siteConfig.links.resume, external: false, download: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle section-tone-default">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a
            href="#home"
            className="inline-flex items-center gap-2.5 text-foreground font-medium focus-ring rounded-[calc(var(--radius)-4px)]"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-[calc(var(--radius)-4px)] bg-primary flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="text-[14px] tracking-tight">
              brohammad<span className="text-primary">.tech</span>
            </span>
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download || undefined}
                className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
              >
                {link.label === "GitHub" && <GithubIcon className="w-3.5 h-3.5" />}
                {link.label === "LinkedIn" && <LinkedinIcon className="w-3.5 h-3.5" />}
                {link.label === "Email" && <Mail className="w-3.5 h-3.5" />}
                {link.label === "Resume" && <Download className="w-3.5 h-3.5" />}
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-[12px] text-muted-foreground/45 text-center sm:text-left">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
