"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { blogPosts, blogTopics } from "@/content/data";

export function BlogSection() {
  return (
    <Section id="blog" tone="alt" spacing="default" width="wide">
      <SectionHeader
        badge="Writing"
        title="Technical notes"
        description="Deep dives on production backend and AI engineering. In progress."
        align="left"
        className="max-w-xl"
      />

      <SectionContent>
        {blogPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="interactive-card rounded-[var(--radius)] bg-card border border-border-subtle p-7 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-[calc(var(--radius)-4px)] bg-primary/[0.06] border border-primary/10 flex items-center justify-center shrink-0">
                  <PenLine className="w-4 h-4 text-primary/80" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-foreground tracking-tight">
                    Articles in progress
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mt-1 max-w-[40ch]">
                    Writing on systems that survive production — not tutorials.
                  </p>
                </div>
              </div>

              <p className="text-block-label mb-3">Planned topics</p>
              <ul className="space-y-2.5">
                {blogTopics.slice(0, 5).map((topic) => (
                  <li
                    key={topic}
                    className="journal-entry text-[13px] text-muted-foreground leading-[1.7]"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-muted-foreground/40 mt-6">
                +{blogTopics.length - 5} more topics queued
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {blogPosts.map((post, i) => (
              <motion.a
                key={post.id}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="interactive-card group rounded-[var(--radius)] bg-card border border-border-subtle p-7 flex flex-col h-full focus-ring"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tech-chip-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-foreground text-[15px] mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {post.title}
                </h3>
                <p className="text-[13px] text-muted-foreground line-clamp-2 mb-5 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground/45 mt-auto">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </SectionContent>
    </Section>
  );
}
