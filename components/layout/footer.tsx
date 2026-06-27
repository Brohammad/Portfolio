"use client";

import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/content/data";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-foreground font-semibold text-sm">
              brohammad<span className="text-primary">.tech</span>
            </span>
          </div>

          {/* Made with */}
          <p className="text-muted-foreground/70 text-sm">
            Made with{" "}
            <span className="text-red-400">❤️</span>
            {" "}using{" "}
            <span className="text-foreground font-medium">Next.js</span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="p-2 rounded-lg text-muted-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle text-center">
          <p className="text-muted-foreground/50 text-xs">
            © {new Date().getFullYear()} Brohammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
