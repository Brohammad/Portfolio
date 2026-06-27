"use client";

import { motion } from "framer-motion";
import { PenLine, ArrowRight, Clock } from "lucide-react";
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
    <section id="blog" className="py-24 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Blog"
          title="Technical Writing"
          description="Deep dives into backend engineering, distributed systems, and AI. Articles coming soon."
        />

        {blogPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            {/* Empty state */}
            <div className="max-w-2xl mx-auto p-10 rounded-2xl bg-[#111113] border border-white/5 flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center">
                <PenLine className="w-7 h-7 text-blue-400" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold text-white">Technical articles coming soon</h3>
                <p className="text-zinc-500 text-sm max-w-sm">
                  Writing in-depth posts about systems engineering, AI pipelines, and production software.
                </p>
              </div>

              {/* Upcoming topics */}
              <div className="w-full max-w-md space-y-2.5">
                <p className="text-xs text-zinc-600 uppercase tracking-wider text-center mb-3">
                  Upcoming topics
                </p>
                {upcomingTopics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/5 text-left"
                  >
                    <Clock className="w-4 h-4 text-zinc-600 shrink-0" />
                    <span className="text-sm text-zinc-400">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <motion.a
                key={post.id}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover group p-5 rounded-xl bg-[#111113] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Button variant="ghost" className="gap-2 text-zinc-400 hover:text-white">
            All Articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
