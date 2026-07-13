"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { Section, SectionContent } from "@/components/layout/section";
import { siteConfig } from "@/content/data";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" tone="default" spacing="default" width="narrow">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-heading text-center"
      >
        Contact
      </motion.h2>

      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-8"
        >
          <p className="text-[1.0625rem] text-muted-foreground leading-relaxed">
            Open to founding engineer roles and early co-founder conversations.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-[15px] text-foreground hover:text-primary transition-colors"
            >
              {siteConfig.links.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] transition-colors focus-ring"
              aria-label="Copy email"
            >
              {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" asChild>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${siteConfig.links.email}`}>
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button asChild>
              <a href={siteConfig.links.resume} download>
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
