"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { experiences } from "@/content/data";

export function ExperienceSection() {
  return (
    <Section id="experience" tone="default" containerClassName="max-w-3xl">
      <SectionHeader
        badge="Experience"
        title="Where I've worked"
        description="Enterprise AI systems and backend infrastructure in production."
        align="center"
      />

      <SectionContent tight>
        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-3 bottom-3 w-px timeline-line" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 sm:pl-14"
              >
                <div className="absolute left-4 sm:left-5 top-7 -translate-x-1/2 z-10">
                  <div
                    className={`w-2 h-2 rounded-full ring-4 ring-background ${
                      exp.current ? "bg-primary" : "bg-border"
                    }`}
                  />
                </div>

                <div className="card-static card-body lg:px-9 lg:py-9">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b divider-subtle">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-[1.0625rem] font-semibold text-foreground leading-tight tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <Badge variant="default" className="text-[10px]">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground/75">{exp.company}</span>
                        <span aria-hidden className="text-border">·</span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 opacity-60" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <span className="text-xs text-muted-foreground px-3 py-1.5 rounded-full bg-muted/50 border border-border-subtle whitespace-nowrap">
                        {exp.duration}
                      </span>
                      <span className="text-xs text-muted-foreground capitalize px-3 py-1.5 rounded-full bg-muted/50 border border-border-subtle">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="py-6 border-b divider-subtle">
                    <p className="text-caption mb-4">Responsibilities</p>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((r, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground leading-[1.75] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-1 before:h-1 before:rounded-full before:bg-border"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements.length > 0 && (
                    <div className="py-6 border-b divider-subtle">
                      <p className="text-caption text-success mb-4">Key Impact</p>
                      <ul className="space-y-3">
                        {exp.achievements.map((a, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground leading-[1.75] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-1 before:h-1 before:rounded-full before:bg-success/50"
                          >
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-6">
                    <p className="text-caption mb-4">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="tech" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 sm:pl-14"
            >
              <div className="absolute left-4 sm:left-5 top-7 -translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-border ring-4 ring-background" />
              </div>
              <div className="card-static card-body lg:px-9 lg:py-9">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold text-foreground tracking-tight">
                      B.Tech in Electrical & Electronics Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      National Institute of Technology Calicut
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground px-3 py-1.5 rounded-full bg-muted/50 border border-border-subtle w-fit whitespace-nowrap">
                    2021 – 2025
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
