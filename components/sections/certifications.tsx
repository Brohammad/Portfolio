"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { certifications } from "@/content/data";

const issuerColors: Record<string, string> = {
  "Amazon Web Services": "from-orange-600/20 to-orange-700/10 border-orange-500/20",
  Microsoft: "from-blue-600/20 to-blue-700/10 border-blue-500/20",
  Google: "from-emerald-600/20 to-emerald-700/10 border-emerald-500/20",
  GitHub: "from-zinc-600/20 to-zinc-700/10 border-zinc-500/20",
};

const issuerIcon: Record<string, string> = {
  "Amazon Web Services": "AWS",
  Microsoft: "MS",
  Google: "G",
  GitHub: "GH",
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Certifications"
          title="Credentials & Badges"
          description="Working towards professional certifications in cloud, AI, and developer tools."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {certifications.map((cert, i) => {
            const gradientClass =
              issuerColors[cert.issuer] ||
              "from-zinc-600/20 to-zinc-700/10 border-zinc-500/20";
            const abbreviation = issuerIcon[cert.issuer] || cert.issuer[0];

            return (
              <motion.div
                key={cert.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className={`card-hover group p-5 rounded-xl bg-gradient-to-br border ${gradientClass} relative overflow-hidden`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {abbreviation}
                    </div>
                    <div>
                      <Award className="w-4 h-4 text-yellow-400 mb-1" />
                      <p className="text-xs text-zinc-500">{cert.issuer}</p>
                    </div>
                  </div>
                  {cert.placeholder && (
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-zinc-800 text-zinc-500 border border-white/5 shrink-0">
                      <Clock className="w-2.5 h-2.5" />
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-white leading-snug mb-2">
                  {cert.name}
                </h3>

                {cert.date && (
                  <p className="text-xs text-zinc-500">{cert.date}</p>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
