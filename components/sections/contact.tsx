"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, MapPin, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/content/data";

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
    // In production: connect to a form API (Formspree, Resend, etc.)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Let's build something"
          description="Open to full-time opportunities, collaborations, and interesting projects. Don't hesitate to reach out."
        />

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you&apos;re a recruiter from a top-tier tech company, a founder
                building something ambitious, or an engineer who wants to collaborate
                on open source — I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-card border border-border-subtle group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/70">Email</div>
                    <div className="text-sm text-foreground">{siteConfig.links.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-muted-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border-subtle">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/70">Location</div>
                  <div className="text-sm text-foreground">Available Globally · Open to Relocation</div>
                </div>
              </div>
            </div>

            {/* Social + Resume */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground/50 uppercase tracking-wider">Connect</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={`mailto:${siteConfig.links.email}`}>
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </Button>
                <Button variant="gradient" size="sm" className="gap-2" asChild>
                  <a href={siteConfig.links.resume} download>
                    <Download className="w-3.5 h-3.5" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-muted-foreground/70 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border-subtle text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground/70 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border-subtle text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-muted-foreground/70 mb-1.5">Message</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Hi Brohammad, I'd love to discuss..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border-subtle text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-colors resize-none"
                />
              </div>

              {submitted ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <Check className="w-4 h-4" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              ) : (
                <Button type="submit" size="lg" variant="gradient" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              )}

              <p className="text-xs text-muted-foreground/50 text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
