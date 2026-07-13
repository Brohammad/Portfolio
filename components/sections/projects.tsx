"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { projects } from "@/content/data";

function projectHref(project: (typeof projects)[number]) {
  return project.demo ?? project.caseStudyUrl ?? project.github ?? "#";
}

export function ProjectsSection() {
  return (
    <Section id="projects" tone="alt" spacing="default" width="wide">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-heading"
      >
        Projects
      </motion.h2>

      <SectionContent>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const href = projectHref(project);
            const external = href.startsWith("http");

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="block h-full p-6 rounded-[var(--radius)] surface-card card-hover group"
                >
                  <h3 className="text-[1.0625rem] font-semibold text-foreground tracking-tight leading-snug">
                    {project.title}
                    {(project.demo || project.github) && (
                      <span className="text-primary font-medium ml-1.5">
                        — More Info
                        <ExternalLink className="inline w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-70 transition-opacity" />
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </SectionContent>
    </Section>
  );
}
