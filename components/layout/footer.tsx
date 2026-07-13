"use client";

import { useMemo } from "react";
import { Download, Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig, engineeringQuotes } from "@/content/data";

const footerLinks = [
  { label: "GitHub", href: siteConfig.links.github, external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, external: true },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, external: false },
  { label: "Resume", href: siteConfig.links.resume, external: false, download: true },
];

export function Footer() {
  const quote = useMemo(
    () => engineeringQuotes[new Date().getDate() % engineeringQuotes.length],
    []
  );

  return (
    <footer className="border-t border-border-subtle section-tone-default">
      <div className="section-container py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* Brand */}
          <div className="space-y-4 max-w-md">
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-foreground font-medium focus-ring rounded-[calc(var(--radius)-4px)]"
              aria-label="Back to top"
            >
              <div className="w-8 h-8 rounded-[calc(var(--radius)-4px)] bg-primary flex items-center justify-center shadow-[var(--shadow-button)]">
                <Terminal className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="text-[14.5px] tracking-tight">
                brohammad<span className="text-primary">.tech</span>
              </span>
            </a>
            <p className="text-[13.5px] text-muted-foreground leading-[1.75] max-w-[36ch]">
              Building production AI systems and backend infrastructure for enterprise clients.
            </p>
            <p className="text-[12.5px] text-muted-foreground/55 italic leading-relaxed">
              {quote}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5 lg:items-end">
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2.5 lg:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={link.download || undefined}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-primary transition-[color,transform] duration-200 hover:-translate-y-px focus-ring rounded-md px-1 py-0.5"
                >
                  {link.label === "GitHub" && <GithubIcon className="w-3.5 h-3.5" />}
                  {link.label === "LinkedIn" && <LinkedinIcon className="w-3.5 h-3.5" />}
                  {link.label === "Email" && <Mail className="w-3.5 h-3.5" />}
                  {link.label === "Resume" && <Download className="w-3.5 h-3.5" />}
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="text-[11.5px] text-muted-foreground/45 leading-relaxed lg:text-right space-y-1">
              <p>Built with {siteConfig.builtWith}</p>
              <p>Last updated {siteConfig.lastUpdated}</p>
              <p>{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[13px] text-muted-foreground/50">
            Thanks for visiting.
          </p>
          <p className="text-[11px] text-muted-foreground/35 tabular-nums">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
