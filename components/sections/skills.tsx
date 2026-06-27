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
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] to-[#09090b]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Skills & Technologies"
          title="What I work with"
          description="A curated set of technologies I use to build backend systems, AI applications, and cloud infrastructure."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] || Code2;

            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className="card-hover group p-6 rounded-xl bg-[#111113] border border-white/5 hover:border-white/10 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-blue-400 w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">{group.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag px-3 py-1 rounded-full text-sm text-zinc-400 bg-white/5 border border-white/5 cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 overflow-hidden"
        >
          <p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-6">
            Also familiar with
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            {[
              "Kafka",
              "RabbitMQ",
              "Nginx",
              "Linux",
              "Terraform",
              "Kubernetes",
              "GraphQL",
              "WebSockets",
              "Jest",
              "Pytest",
              "Git",
              "gRPC",
              "Prometheus",
              "Grafana",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs text-zinc-500 bg-white/3 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
