"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, MapPin, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig, foundingEngineer } from "@/content/data";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-[calc(var(--radius)-4px)] bg-card border border-border-subtle text-foreground text-[15px] placeholder:text-muted-foreground/38 focus:outline-none focus:border-primary/32 focus:ring-2 focus:ring-primary/[0.07] focus:shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,background-color] duration-200";

  return (
    <Section id="contact" tone="default" spacing="default" width="wide" className="section-chapter">
      <SectionHeader
        badge="Contact"
        title="Get in touch"
        description="Open to founding engineer roles and early co-founder conversations. Founders, recruiters, and engineers welcome."
        align="left"
        variant="featured"
      />

      <SectionContent featured className="grid lg:grid-cols-2 gap-10 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <p className="prose-body-lg">
            {foundingEngineer.contactBlurb}
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            {foundingEngineer.openTo}
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between interactive-card rounded-[var(--radius)] p-6">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-[calc(var(--radius)-4px)] bg-primary/[0.08] border border-primary/12 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-caption mb-1.5">Email</div>
                  <div className="text-[15px] text-foreground truncate">{siteConfig.links.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.045] hover:scale-105 active:scale-95 transition-[color,background-color,transform] duration-200 shrink-0 ml-3 focus-ring"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center gap-4 interactive-card rounded-[var(--radius)] p-6">
              <div className="w-11 h-11 rounded-[calc(var(--radius)-4px)] bg-success/[0.08] border border-success/12 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-success" />
              </div>
              <div>
                <div className="text-caption mb-1.5">Location</div>
                <div className="text-[15px] text-foreground leading-relaxed">Available Globally · Open to Relocation</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-caption">Connect</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="min-w-[8.5rem]" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="min-w-[8.5rem]" asChild>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="min-w-[8.5rem]" asChild>
                <a href={`mailto:${siteConfig.links.email}`}>
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button className="min-w-[8.5rem] gap-2" asChild>
                <a href={siteConfig.links.resume} download>
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <form onSubmit={handleSubmit} className="interactive-card rounded-[var(--radius)] p-6 sm:p-7 space-y-5" aria-label="Contact form">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-caption">Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-caption">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-caption">Message</label>
              <textarea
                required
                rows={6}
                placeholder="Hi Brohammad, I'd love to discuss..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className={`${inputClass} resize-none leading-relaxed`}
              />
            </div>

            {submitted ? (
              <div className="flex items-center gap-3 p-4 rounded-[calc(var(--radius)-4px)] bg-success/[0.08] border border-success/12 text-success text-sm">
                <Check className="w-4 h-4 shrink-0" />
                Message sent! I&apos;ll get back to you soon.
              </div>
            ) : (
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            )}

            <p className="text-[12px] text-muted-foreground/40 text-center">
              I typically respond within 24 hours.
            </p>
          </form>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
