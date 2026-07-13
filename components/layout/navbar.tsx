"use client";

import { useState, useEffect, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Terminal, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll-to-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data";
import { useScroll } from "@/hooks/use-scroll";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
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
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href.replace("#", ""));
  };

  return (
    <>
      <header className="navbar-header fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          className={cn(
            "navbar-shell glass pointer-events-auto",
            "flex h-[var(--navbar-inner-height)] items-center justify-between gap-4 lg:gap-6",
            scrolled && "glass-scrolled"
          )}
        >
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 text-foreground font-medium shrink-0 group"
            aria-label="Go to home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[calc(var(--radius)-4px)] bg-primary flex items-center justify-center shadow-[var(--shadow-button)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] group-hover:shadow-[var(--shadow-md)] group-active:scale-[0.98]">
              <Terminal className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] text-primary-foreground" />
            </div>
            <div className="hidden sm:flex flex-col items-start leading-none gap-1">
              <span className="text-[15px] lg:text-[16px] tracking-tight font-semibold">
                brohammad<span className="text-primary">.tech</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground/70">
                Portfolio
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0" aria-label="Primary">
            <div className="navbar-nav-track">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Fragment key={link.href}>
                    {index > 0 && <span className="navbar-nav-separator" aria-hidden />}
                    <button
                      onClick={() => handleNavClick(link.href)}
                      data-active={isActive}
                      className={cn(
                        "nav-link relative px-3.5 xl:px-4 py-2.5 text-[14px] xl:text-[15px] font-medium rounded-[calc(var(--radius)-4px)] transition-[color,background-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-ring whitespace-nowrap",
                        isActive
                          ? "nav-link-active"
                          : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.045]"
                      )}
                    >
                      {link.label}
                    </button>
                  </Fragment>
                );
              })}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="navbar-divider" aria-hidden />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 flex items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.045] hover:-translate-y-px transition-[color,background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-ring"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-[17px] h-[17px]" /> : <Moon className="w-[17px] h-[17px]" />}
              </button>
            )}
            <Button
              size="default"
              className="h-11 min-w-[8.75rem] px-5 text-[14px] gap-2"
              asChild
            >
              <a href={siteConfig.links.resume} download>
                <Download className="w-4 h-4 shrink-0" />
                <span>Resume</span>
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.05] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-4 right-4 sm:left-6 sm:right-6 z-50 top-[calc(var(--navbar-height)+0.375rem)] lg:hidden"
            >
              <div className="rounded-[calc(var(--radius)+4px)] border border-border-subtle bg-card/96 backdrop-blur-xl shadow-[var(--shadow-lg)] overflow-hidden">
                <div className="px-3 py-3 flex flex-col">
                  {navLinks.map((link, index) => (
                    <Fragment key={link.href}>
                      {index > 0 && (
                        <div className="h-px bg-border-subtle/80 mx-2" aria-hidden />
                      )}
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          "px-4 py-3.5 text-[16px] font-medium rounded-[calc(var(--radius)-2px)] text-left transition-colors",
                          activeSection === link.href.replace("#", "")
                            ? "text-foreground bg-primary/[0.08]"
                            : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                        )}
                      >
                        {link.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
                <div className="px-4 pb-4 pt-2 border-t border-border-subtle flex flex-col sm:flex-row gap-3">
                  {mounted && (
                    <Button
                      variant="outline"
                      className="flex-1 h-11"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      {theme === "dark" ? "Light mode" : "Dark mode"}
                    </Button>
                  )}
                  <Button className="flex-1 h-11 gap-2" asChild>
                    <a href={siteConfig.links.resume} download>
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Resume</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
