"use client";

import { motion } from "framer-motion";
import { PenLine, ArrowRight, Clock } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/content/data";

const upcomingTopics = [
  "Building reliable multi-agent systems with LangGraph",
  "RAG in production: chunking strategies that actually work",
  "Implementing Raft consensus from scratch in Go",
  "Redis caching patterns for high-throughput APIs",
  "LLM evaluation pipelines you can't skip in production",
  "System design: API gateway from scratch",
  "Kafka for event-driven backend architectures",
  "Prompt engineering for structured LLM outputs",
];

export function BlogSection() {
  return (
    <Section id="blog" tone="alt">
      <SectionHeader
        badge="Blog"
        title="Technical Writing"
        description="Deep dives into backend engineering, distributed systems, and AI. Articles coming soon."
      />

      <SectionContent>
        {blogPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="card-static p-10 sm:p-12 flex flex-col items-center gap-8">
              <div className="w-14 h-14 rounded-[var(--radius)] bg-primary/[0.08] border border-primary/12 flex items-center justify-center">
                <PenLine className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-semibold text-foreground tracking-tight">Technical articles coming soon</h3>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mx-auto">
                  Writing in-depth posts about systems engineering, AI pipelines, and production software.
                </p>
              </div>

              <div className="w-full max-w-md space-y-3">
                <p className="text-caption text-center mb-4">
                  Upcoming topics
                </p>
                {upcomingTopics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-4 p-4 rounded-[calc(var(--radius)-4px)] bg-muted/40 border border-border-subtle text-left"
                  >
                    <Clock className="w-4 h-4 text-muted-foreground/45 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {blogPosts.map((post, i) => (
              <motion.a
                key={post.id}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="surface-card card-hover p-8 group flex flex-col h-full"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/[0.08] text-primary border border-primary/12"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-3 group-hover:text-primary transition-colors tracking-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground/45 mt-auto">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            All Articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </SectionContent>
    </Section>
  );
}
