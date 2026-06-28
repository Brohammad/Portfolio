"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Brain,
  Monitor,
  Network,
} from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { skillGroups } from "@/content/data";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Database,
  Cloud,
  Brain,
  Monitor,
  Network,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function SkillsSection() {
  return (
    <Section id="skills" tone="elevated" spacing="default">
      <SectionHeader
        badge="Systems"
        title="What I build with"
        description="Technologies grouped by the systems they power — not alphabetically."
        align="left"
        className="max-w-xl"
      />

      <SectionContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] || Server;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="card-static card-body hover:border-primary/12 transition-colors duration-300"
              >
                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-9 h-9 rounded-[calc(var(--radius)-6px)] bg-primary/[0.06] border border-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-[15px] h-[15px] text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-[15px] tracking-tight">
                      {group.category}
                    </h3>
                    {group.description && (
                      <p className="text-xs text-muted-foreground/70 mt-1 leading-relaxed">
                        {group.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="tech-chip">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionContent>
    </Section>
  );
}
