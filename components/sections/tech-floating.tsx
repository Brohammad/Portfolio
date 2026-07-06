"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { techStack } from "@/content/data";

export function TechFloatingSection() {
  return (
    <Section tone="alt" spacing="default" width="wide">
      <SectionHeader
        badge="Tech Stack"
        title="Core production stack"
        description="The technologies behind shipped systems."
        align="center"
      />

      <SectionContent>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025, duration: 0.3 }}
              className="tech-chip cursor-default hover:border-primary/20 hover:text-primary transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
