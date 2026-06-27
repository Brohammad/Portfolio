"use client";

import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/content/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-semibold text-sm">
              brohammad<span className="text-blue-400">.tech</span>
            </span>
          </div>

          {/* Made with */}
          <p className="text-zinc-500 text-sm">
            Made with{" "}
            <span className="text-red-400">❤️</span>
            {" "}using{" "}
            <span className="text-white font-medium">Next.js</span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Brohammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
