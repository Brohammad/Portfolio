"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/layout/section";
import { experiences, education } from "@/content/data";

export function ExperienceSection() {
  return (
    <Section id="experience" tone="elevated" spacing="default" width="wide">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-heading"
      >
        Experience
      </motion.h2>

      <SectionContent className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="p-6 sm:p-7 rounded-[var(--radius)] surface-card"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-[1.0625rem] font-semibold text-foreground tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-[15px] text-primary mt-1">{exp.company}</p>
              </div>
              <p className="text-[14px] text-muted-foreground tabular-nums">{exp.duration}</p>
            </div>

            <ul className="mt-5 space-y-2.5">
              {exp.achievements.slice(0, 3).map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary shrink-0 select-none">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {exp.technologies.slice(0, 8).map((tech) => (
                <span key={tech} className="tech-chip-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}

        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="p-6 sm:p-7 rounded-[var(--radius)] surface-card"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-[1.0625rem] font-semibold text-foreground tracking-tight">
                {education.degree}, {education.field}
              </h3>
              <p className="text-[15px] text-primary mt-1">{education.institution}</p>
            </div>
            <p className="text-[14px] text-muted-foreground tabular-nums">{education.year}</p>
          </div>
        </motion.article>
      </SectionContent>
    </Section>
  );
}
