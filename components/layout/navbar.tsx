"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/data";
import { useScroll } from "@/hooks/use-scroll";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Now", href: "#now" },
  { label: "Blog", href: "#blog", badge: "Soon" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrolled } = useScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => l.href.replace("#", ""))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 text-white font-bold text-lg group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-shadow">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="tracking-tight">brohammad</span>
            <span className="text-primary">.tech</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "nav-link relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200",
                  activeSection === link.href.replace("#", "")
                    ? "text-white bg-white/5"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {link.badge}
                  </span>
                )}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-zinc-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              asChild
            >
              <a href={siteConfig.links.resume} download>
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-white/5 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2.5 text-sm font-medium rounded-lg text-left transition-colors",
                    activeSection === link.href.replace("#", "")
                      ? "text-white bg-white/10"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
              <div className="pt-2 border-t border-border-subtle mt-1 flex flex-col gap-2">
                <Button size="sm" variant="outline" className="w-full gap-2" asChild>
                  <a href={siteConfig.links.resume} download>
                    <Download className="w-3.5 h-3.5" />
                    Download Resume
                  </a>
                </Button>
                {mounted && (
                  <button
                    onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); setMobileOpen(false); }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-zinc-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
