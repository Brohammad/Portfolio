"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Brain,
  Monitor,
  Code2,
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
  Code2,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function SkillsSection() {
  return (
    <Section id="skills" tone="default">
      <SectionHeader
        badge="Skills & Technologies"
        title="What I work with"
        description="A curated set of technologies I use to build backend systems, AI applications, and cloud infrastructure."
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
            const Icon = iconMap[group.icon] || Code2;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="surface-card card-hover card-body"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-[calc(var(--radius)-4px)] bg-primary/[0.08] border border-primary/12 flex items-center justify-center shrink-0">
                    <Icon className="w-[18px] h-[18px] text-muted-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-[1.0625rem] tracking-tight">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-tag px-3 py-1.5 rounded-full text-[13px] text-muted-foreground bg-foreground/[0.03] border border-border-subtle cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-20 sm:mt-24"
        >
          <p className="text-center text-caption mb-8">
            Also familiar with
          </p>
          <div className="flex gap-2.5 flex-wrap justify-center max-w-3xl mx-auto">
            {[
              "Kafka", "RabbitMQ", "Nginx", "Linux", "Terraform", "Kubernetes",
              "GraphQL", "WebSockets", "Jest", "Pytest", "Git", "gRPC", "Prometheus", "Grafana",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs text-muted-foreground bg-foreground/[0.02] border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
