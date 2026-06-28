"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Target, BookMarked } from "lucide-react";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { nowPage } from "@/content/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

function NowCard({
  icon: Icon,
  title,
  items,
  iconClass,
  dotClass,
  className,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  iconClass: string;
  dotClass: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`p-8 lg:p-9 card-static ${className ?? ""}`}
    >
      <div className="flex items-center gap-3.5 mb-8">
        <div className={`w-10 h-10 rounded-[calc(var(--radius)-4px)] border flex items-center justify-center shrink-0 ${iconClass}`}>
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="font-semibold text-foreground text-[1.0625rem] tracking-tight">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <motion.div
            key={item}
            variants={itemVariants}
            className="flex items-start gap-3 text-sm text-muted-foreground leading-[1.75]"
          >
            <span className={`w-1 h-1 rounded-full shrink-0 mt-2.5 ${dotClass}`} />
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function NowSection() {
  return (
    <Section id="now" tone="default">
      <SectionHeader
        badge="Now"
        title="What I'm focused on"
        description="A snapshot of what I'm currently learning, building, and working toward — inspired by nownownow.com."
      />

      <SectionContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        <NowCard
          icon={BookOpen}
          title="Currently Learning"
          items={nowPage.learning}
          iconClass="bg-primary/[0.08] border-primary/12 text-primary"
          dotClass="bg-primary/70"
          className="lg:col-span-2"
        />
        <NowCard
          icon={Hammer}
          title="Building"
          items={nowPage.building}
          iconClass="bg-secondary/10 border-secondary/20 text-primary"
          dotClass="bg-secondary/80"
        />
        <NowCard
          icon={Target}
          title="Goals"
          items={nowPage.goals}
          iconClass="bg-success/[0.08] border-success/12 text-success"
          dotClass="bg-success/70"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-4 card-static p-8 lg:p-9"
        >
          <div className="flex items-center gap-3.5 mb-8">
            <div className="w-10 h-10 rounded-[calc(var(--radius)-4px)] bg-primary/[0.08] border border-primary/12 flex items-center justify-center">
              <BookMarked className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-[1.0625rem] tracking-tight">Reading</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {nowPage.reading.map((book) => (
              <motion.div
                key={book}
                variants={itemVariants}
                className="px-4 py-2.5 rounded-[calc(var(--radius)-4px)] bg-muted/40 border border-border-subtle text-sm text-foreground/75"
              >
                {book}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
