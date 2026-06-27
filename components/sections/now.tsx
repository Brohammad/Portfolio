"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Target, BookMarked } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { nowPage } from "@/content/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function NowSection() {
  return (
    <section id="now" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Now"
          title="What I'm focused on"
          description="A snapshot of what I'm currently learning, building, and working toward — inspired by nownownow.com."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Learning */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 p-6 rounded-xl bg-card border border-border-subtle"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">Currently Learning</h3>
            </div>
            <div className="space-y-2">
              {nowPage.learning.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Building */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border-subtle"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Hammer className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="font-semibold text-foreground">Building</h3>
            </div>
            <div className="space-y-2">
              {nowPage.building.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border-subtle"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Target className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-foreground">Goals</h3>
            </div>
            <div className="space-y-2">
              {nowPage.goals.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 p-6 rounded-xl bg-gradient-to-r from-blue-950/20 to-purple-950/20 border border-blue-500/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <BookMarked className="w-4 h-4 text-orange-400" />
              </div>
              <h3 className="font-semibold text-foreground">Reading</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {nowPage.reading.map((book) => (
                <motion.div
                  key={book}
                  variants={itemVariants}
                  className="px-3 py-2 rounded-lg bg-white/5 border border-border-subtle text-sm text-foreground/80"
                >
                  {book}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
