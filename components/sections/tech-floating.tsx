"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

const techItems = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "FastAPI", color: "#009688" },
  { name: "OpenAI", color: "#412991" },
];

export function TechFloatingSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech Stack"
          title="Powered by"
          description="The core technologies I reach for when building production systems."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {techItems.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              animate={{
                y: [0, -6, 0],
              }}
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#111113] border border-white/5 hover:border-white/10 transition-colors cursor-default"
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: tech.color }}
              />
              <span className="text-sm font-medium text-zinc-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
