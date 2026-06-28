"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
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

const commands = [
  {
    group: "Navigate",
    items: [
      { icon: Home, label: "Go to Home", action: () => scrollTo("#home") },
      { icon: User, label: "About Me", action: () => scrollTo("#about") },
      { icon: Briefcase, label: "Experience", action: () => scrollTo("#experience") },
      { icon: FolderOpen, label: "Projects", action: () => scrollTo("#projects") },
      { icon: Wrench, label: "Skills", action: () => scrollTo("#skills") },
      { icon: User, label: "Now", action: () => scrollTo("#now") },
      { icon: Mail, label: "Contact Me", action: () => scrollTo("#contact") },
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
        action: () => window.open(siteConfig.links.resume, "_blank"),
      },
    ],
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  el?.scrollIntoView({ behavior: "smooth" });
}

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
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[9996] bg-foreground/20 backdrop-blur-sm flex items-start justify-center pt-[18vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-4"
          >
            <Command
              className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
              shouldFilter={true}
            >
              <div className="flex items-center border-b border-border px-4">
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
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground cursor-pointer hover:bg-foreground/5 hover:text-foreground data-[selected=true]:bg-foreground/5 data-[selected=true]:text-foreground transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-muted-foreground/70 shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        {"suffix" in item && item.suffix}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>

              <div className="border-t border-border px-4 py-2.5 flex items-center gap-4 text-xs text-muted-foreground">
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
