"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { experiences } from "@/content/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0a0a0d] to-[#09090b]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Experience"
          title="Where I've worked"
          description="My professional journey building enterprise AI systems and backend infrastructure."
          align="center"
        />

        <div className="mt-10 sm:mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "bg-blue-500 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                        : "bg-[#09090b] border-zinc-600"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="card-hover group p-5 sm:p-6 rounded-xl bg-[#111113] border border-white/5 hover:border-white/10 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white text-lg">{exp.role}</h3>
                        {exp.current && (
                          <Badge variant="default" className="text-[10px]">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <span className="font-medium text-zinc-300">{exp.company}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-zinc-500 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                        {exp.duration}
                      </span>
                      <span className="text-xs text-zinc-500 capitalize px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mb-4 space-y-1">
                      {exp.achievements.map((a, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <span className="text-emerald-400 shrink-0">▲</span>
                          <span className="text-zinc-400">{a}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="tech" className="text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative pl-16 sm:pl-20"
            >
              <div className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-[#09090b] border-2 border-zinc-600" />
              </div>
              <div className="p-5 sm:p-6 rounded-xl bg-[#111113] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-semibold text-white">B.Tech</h3>
                    <p className="text-zinc-400 text-sm mt-0.5">
                      National Institute of Technology Calicut
                    </p>
                  </div>
                  <span className="text-xs text-zinc-500 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 w-fit">
                    NIT Calicut
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
