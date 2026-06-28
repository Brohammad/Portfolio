"use client";

import { motion } from "framer-motion";
import { MapPin, Layers, Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { experiences } from "@/content/data";

export function ExperienceSection() {
  return (
    <Section id="experience" tone="default" spacing="spacious" width="narrow">
      <SectionHeader
        badge="Experience"
        title="Production impact"
        description="What shipped, at what scale, and why the architecture looks the way it does."
        align="left"
      />

      <SectionContent tight>
        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-3 bottom-3 w-px timeline-line" />

          <div className="space-y-8">
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

                <article className="card-static card-body incident-card lg:px-9 lg:py-9">
                  <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b divider-subtle">
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
                    </div>
                  </header>

                  {exp.impact.length > 0 && (
                    <div className="py-6 border-b divider-subtle">
                      <p className="text-caption text-success mb-4">Outcomes</p>
                      <ul className="space-y-3">
                        {exp.impact.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-foreground/85 leading-[1.75] font-medium pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-1 before:h-1 before:rounded-full before:bg-success/60"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.scale.length > 0 && (
                    <div className="py-6 border-b divider-subtle">
                      <div className="flex items-center gap-2 mb-4">
                        <Gauge className="w-3.5 h-3.5 text-muted-foreground/60" />
                        <p className="text-caption">Scale</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.scale.map((item) => (
                          <span key={item} className="metric-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.architecture && (
                    <div className="py-6 border-b divider-subtle">
                      <div className="flex items-center gap-2 mb-3">
                        <Layers className="w-3.5 h-3.5 text-muted-foreground/60" />
                        <p className="text-caption">Architecture</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-[1.75]">
                        {exp.architecture}
                      </p>
                    </div>
                  )}

                  {exp.decisions.length > 0 && (
                    <div className="py-6 border-b divider-subtle">
                      <p className="text-caption mb-4">Key Decisions</p>
                      <ul className="space-y-2.5">
                        {exp.decisions.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground leading-[1.75] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary/50 before:text-xs"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-6">
                    <p className="text-caption mb-4">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="tech" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
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
              <div className="card-static card-body lg:px-9 lg:py-7">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold text-foreground tracking-tight">
                      B.Tech · Electrical & Electronics Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
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
