"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  FolderOpen,
  Wrench,
  Mail,
  Download,
  ExternalLink,
  Search,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/content/data";
import { scrollToSection } from "@/lib/scroll-to-section";

const commands = [
  {
    group: "Navigate",
    items: [
      { icon: Home, label: "Go to Home", action: () => scrollToSection("home") },
      { icon: Wrench, label: "Skills", action: () => scrollToSection("skills") },
      { icon: FolderOpen, label: "Projects", action: () => scrollToSection("projects") },
      { icon: Briefcase, label: "Experience", action: () => scrollToSection("experience") },
      { icon: Mail, label: "Contact Me", action: () => scrollToSection("contact") },
    ],
  },
  {
    group: "Links",
    items: [
      {
        icon: GithubIcon,
        label: "GitHub Profile",
        action: () => window.open(siteConfig.links.github, "_blank"),
        suffix: <ExternalLink className="w-3 h-3 text-muted-foreground/70" />,
      },
      {
        icon: LinkedinIcon,
        label: "LinkedIn Profile",
        action: () => window.open(siteConfig.links.linkedin, "_blank"),
        suffix: <ExternalLink className="w-3 h-3 text-muted-foreground/70" />,
      },
      {
        icon: Mail,
        label: "Send Email",
        action: () => window.open(`mailto:${siteConfig.links.email}`),
      },
      {
        icon: Download,
        label: "Download Resume",
        action: () => {
          const link = document.createElement("a");
          link.href = siteConfig.links.resume;
          link.download = "";
          link.click();
        },
      },
    ],
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const runCommand = (action: () => void) => {
    action();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9996] bg-foreground/18 backdrop-blur-[4px] flex items-start justify-center pt-[16vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: -12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-4"
          >
            <Command
              className="rounded-[calc(var(--radius)+2px)] border border-border-subtle bg-card/98 shadow-[var(--shadow-lg)] overflow-hidden backdrop-blur-xl"
              shouldFilter={true}
            >
              <div className="flex items-center border-b border-border-subtle px-4">
                <Search className="w-4 h-4 text-muted-foreground/70 shrink-0" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="flex-1 px-3 py-4 bg-transparent text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none"
                  autoFocus
                />
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-foreground/5 text-muted-foreground/70 text-xs font-mono">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-muted-foreground/70">
                  No results found.
                </Command.Empty>

                {commands.map((group) => (
                  <Command.Group
                    key={group.group}
                    heading={
                      <span className="px-2 py-1.5 text-xs font-medium text-muted-foreground/70 uppercase tracking-wider">
                        {group.group}
                      </span>
                    }
                  >
                    {group.items.map((item) => (
                      <Command.Item
                        key={item.label}
                        value={item.label}
                        onSelect={() => runCommand(item.action)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-[calc(var(--radius)-4px)] text-sm text-muted-foreground cursor-pointer hover:bg-foreground/[0.045] hover:text-foreground data-[selected=true]:bg-primary/[0.06] data-[selected=true]:text-foreground transition-[background-color,color] duration-200"
                      >
                        <item.icon className="w-4 h-4 text-muted-foreground/70 shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        {"suffix" in item && item.suffix}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>

              <div className="border-t border-border-subtle px-4 py-2.5 flex items-center gap-4 text-xs text-muted-foreground/70">
                <span className="flex items-center gap-1">
                  <kbd className="font-mono">↑↓</kbd> navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="font-mono">↵</kbd> select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="font-mono">⌘K</kbd> toggle
                </span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
