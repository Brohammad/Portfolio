"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Target, BookMarked, FlaskConical, Compass } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { nowPage } from "@/content/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function JournalBlock({
  icon: Icon,
  title,
  items,
  className,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`card-static p-7 lg:p-8 ${className ?? ""}`}
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b divider-subtle">
        <Icon className="w-4 h-4 text-muted-foreground/60" />
        <h3 className="font-semibold text-foreground text-[15px] tracking-tight">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <motion.p
            key={item}
            variants={itemVariants}
            className="journal-entry text-sm text-muted-foreground leading-[1.75]"
          >
            {item}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export function NowSection() {
  return (
    <Section id="now" tone="default" spacing="spacious">
      <SectionHeader
        badge="Now"
        title="Engineering journal"
        description={`Last updated ${nowPage.lastUpdated}. What I'm learning, building, and exploring right now.`}
        align="left"
        className="max-w-2xl"
      />

      <SectionContent className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-7">
        <div className="space-y-6">
          <JournalBlock
            icon={BookOpen}
            title="Currently Learning"
            items={nowPage.learning}
          />
          <JournalBlock
            icon={FlaskConical}
            title="Experiments"
            items={nowPage.experiments}
          />
        </div>

        <div className="space-y-6">
          <JournalBlock
            icon={Hammer}
            title="Building"
            items={nowPage.building}
          />
          <JournalBlock
            icon={Compass}
            title="Exploring"
            items={nowPage.exploring}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2 card-static p-7 lg:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b divider-subtle">
                <BookMarked className="w-4 h-4 text-muted-foreground/60" />
                <h3 className="font-semibold text-foreground text-[15px] tracking-tight">Reading</h3>
              </div>
              <div className="space-y-3">
                {nowPage.reading.map((book) => (
                  <motion.p
                    key={book}
                    variants={itemVariants}
                    className="journal-entry text-sm text-muted-foreground leading-[1.75]"
                  >
                    {book}
                  </motion.p>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b divider-subtle">
                <Target className="w-4 h-4 text-muted-foreground/60" />
                <h3 className="font-semibold text-foreground text-[15px] tracking-tight">Roadmap</h3>
              </div>
              <div className="space-y-3">
                {nowPage.goals.map((goal) => (
                  <motion.p
                    key={goal}
                    variants={itemVariants}
                    className="journal-entry text-sm text-muted-foreground leading-[1.75]"
                  >
                    {goal}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
