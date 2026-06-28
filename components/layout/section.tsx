import { cn } from "@/lib/utils";

type SectionTone = "default" | "alt" | "elevated";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  tone?: SectionTone;
  glow?: boolean;
  children: React.ReactNode;
}

const toneClass: Record<SectionTone, string> = {
  default: "section-tone-default",
  alt: "section-tone-alt",
  elevated: "section-tone-elevated",
};

export function Section({
  id,
  className,
  containerClassName,
  tone = "default",
  glow = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section", toneClass[tone], glow && "section-glow", className)}
    >
      <div className={cn("section-container relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionContent({
  className,
  tight = false,
  children,
}: {
  className?: string;
  tight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(tight ? "section-content-tight" : "section-content", className)}>
      {children}
    </div>
  );
}
