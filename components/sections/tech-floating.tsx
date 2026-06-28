"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";

const techItems = [
  "TypeScript", "Node.js", "Python", "React", "Next.js", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "AWS", "FastAPI", "OpenAI",
];

export function TechFloatingSection() {
  return (
    <Section tone="alt">
      <SectionHeader
        badge="Tech Stack"
        title="Powered by"
        description="The core technologies I reach for when building production systems."
      />

      <SectionContent>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {techItems.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.35 }}
              whileHover={{ scale: 1.01 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-card border border-border-subtle hover:border-primary/25 transition-all cursor-default group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/35 group-hover:bg-primary transition-colors" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
