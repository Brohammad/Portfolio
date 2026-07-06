"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { nowPage } from "@/content/data";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};

function JournalPanel({
  title,
  items,
  className,
  compact,
}: {
  title: string;
  items: string[];
  className?: string;
  compact?: boolean;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={cn(
        "interactive-card rounded-[var(--radius)] bg-card border border-border-subtle p-5 sm:p-6 h-full",
        className
      )}
    >
      <p className="text-block-label mb-3">{title}</p>
      <ul className={cn("space-y-2.5", compact && "space-y-2")}>
        {items.map((item) => (
          <li
            key={item}
            className="journal-entry text-[13px] text-muted-foreground leading-[1.7]"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function NowSection() {
  return (
    <Section id="now" tone="default" spacing="default" width="wide">
      <SectionHeader
        badge="Now"
        title="Engineering journal"
        description={`Updated ${nowPage.lastUpdated}. Active work, research, and what I'm thinking about.`}
        align="left"
        className="max-w-2xl"
      />

      <SectionContent loose className="space-y-5 lg:space-y-6">
        {/* Momentum highlights */}
        <motion.div
          {...fadeUp}
          className="grid sm:grid-cols-2 gap-4 lg:gap-5"
        >
          <div className="interactive-card rounded-[var(--radius)] bg-card border border-border-subtle p-5 sm:p-6">
            <p className="text-block-label mb-2.5">Current Obsession</p>
            <p className="text-[14.5px] text-foreground/88 leading-[1.65] font-medium">
              {nowPage.currentObsession}
            </p>
          </div>
          <div className="interactive-card rounded-[var(--radius)] bg-card border border-border-subtle p-5 sm:p-6">
            <p className="text-block-label mb-2.5">Favorite Problem</p>
            <p className="text-[14.5px] text-foreground/88 leading-[1.65] font-medium">
              {nowPage.favoriteProblem}
            </p>
          </div>
        </motion.div>

        {/* Primary journal grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <JournalPanel title="Currently Building" items={nowPage.building} />
          <JournalPanel title="Currently Reading" items={nowPage.reading} />
          <JournalPanel title="Currently Exploring" items={nowPage.exploring} />
          <JournalPanel title="Current Research" items={nowPage.research} />
          <JournalPanel title="Next Projects" items={nowPage.nextProjects} />
          <JournalPanel title="Engineering Goals" items={nowPage.goals} />
        </div>

        {/* Notes + ideas */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
          <JournalPanel title="Ideas" items={nowPage.ideas} compact />
          <JournalPanel title="Technical Notes" items={nowPage.technicalNotes} compact />
        </div>
      </SectionContent>
    </Section>
  );
}
