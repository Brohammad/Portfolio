"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/layout/section";
import { skillGroups } from "@/content/data";

export function SkillsSection() {
  return (
    <Section id="skills" tone="default" spacing="default" width="wide">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-heading"
      >
        Languages, Frameworks &amp; Tools
      </motion.h2>

      <SectionContent className="space-y-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <h3 className="text-block-label mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill.name} className="tech-chip">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </SectionContent>
    </Section>
  );
}
