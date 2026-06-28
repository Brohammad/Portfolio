"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Terminal, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data";
import { useScroll } from "@/hooks/use-scroll";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrolled } = useScroll(16);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const sections = ["home", ...navLinks.map((l) => l.href.replace("#", ""))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "glass glass-scrolled" : "bg-transparent"
        )}
      >
        <nav className="section-container h-[4.75rem] grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 text-foreground font-medium shrink-0 group justify-self-start"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-[calc(var(--radius)-4px)] bg-primary flex items-center justify-center shadow-[var(--shadow-button)] transition-all duration-200 group-hover:scale-[1.02]">
              <Terminal className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-[15px] tracking-tight hidden sm:inline">
              brohammad<span className="text-primary">.tech</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center justify-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  data-active={isActive}
                  className={cn(
                    "nav-link relative px-5 py-2.5 text-[13px] font-medium rounded-[calc(var(--radius)-6px)] transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2.5 shrink-0 justify-self-end">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 flex items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-[15px] h-[15px]" /> : <Moon className="w-[15px] h-[15px]" />}
              </button>
            )}
            <Button size="default" asChild>
              <a href={siteConfig.links.resume} download>
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors justify-self-end col-start-3"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[4.75rem] left-0 right-0 z-40 glass md:hidden"
          >
            <div className="section-container py-6 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-3.5 text-sm font-medium rounded-[var(--radius)] text-left transition-colors",
                    activeSection === link.href.replace("#", "")
                      ? "text-foreground bg-foreground/[0.04]"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-5 mt-3 border-t border-border-subtle flex flex-col gap-3">
                <Button className="w-full" asChild>
                  <a href={siteConfig.links.resume} download>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
