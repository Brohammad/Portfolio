"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FieldArt } from "@/components/ui/field-art";
import { siteConfig } from "@/content/data";

const nav = [
  { href: "#work", label: "work", hint: "production systems" },
  { href: "#projects", label: "projects", hint: "inspect the repos" },
  { href: "#writing", label: "writing", hint: "engineering notes" },
  { href: "#contact", label: "contact", hint: "say hello" },
];

export function HeroSection() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const isDark = (resolvedTheme ?? theme) !== "light";

  return (
    <>
      {mounted && (
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle color theme"
        >
          {isDark ? "light" : "dark"}
        </button>
      )}

      <section id="home" className="page-shell masthead">
        <div className="masthead-copy">
          <p className="role-eyebrow">aabid mohamed a · backend · distributed systems &amp; ai infrastructure</p>

          <h1 className="display-name">brohammad</h1>

          <p className="hero-lede">{siteConfig.tagline}</p>
          <p className="hero-sub">{siteConfig.headline}</p>
          <p className="hero-stack">{siteConfig.techIdentity}</p>

          <nav className="leader-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="leader-link">
                <span className="leader-label">{item.label}</span>
                <span className="leader-dots" aria-hidden />
                <span className="leader-hint">{item.hint}</span>
              </a>
            ))}
          </nav>

          <div className="social-row">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
            <span className="social-sep" aria-hidden>
              ×
            </span>
            <a href={siteConfig.links.resume} download>
              resume
            </a>
            <span className="social-sep" aria-hidden>
              ×
            </span>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <span className="social-sep" aria-hidden>
              ×
            </span>
            <a href={`mailto:${siteConfig.links.email}`}>email</a>
          </div>
        </div>

        <FieldArt />
      </section>
    </>
  );
}
