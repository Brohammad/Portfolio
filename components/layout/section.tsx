import { cn } from "@/lib/utils";

type SectionTone = "default" | "alt" | "elevated";
type SectionSpacing = "default" | "compact" | "spacious";
type SectionWidth = "default" | "narrow" | "wide";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  width?: SectionWidth;
  glow?: boolean;
  children: React.ReactNode;
}

const toneClass: Record<SectionTone, string> = {
  default: "section-tone-default",
  alt: "section-tone-alt",
  elevated: "section-tone-elevated",
};

const spacingClass: Record<SectionSpacing, string> = {
  default: "section",
  compact: "section section-compact",
  spacious: "section section-spacious",
};

const widthClass: Record<SectionWidth, string> = {
  default: "section-container",
  narrow: "section-container section-container-narrow",
  wide: "section-container section-container-wide",
};

export function Section({
  id,
  className,
  containerClassName,
  tone = "default",
  spacing = "default",
  width = "default",
  glow = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacingClass[spacing], toneClass[tone], glow && "section-glow", className)}
    >
      <div className={cn(widthClass[width], "relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionContent({
  className,
  tight = false,
  loose = false,
  featured = false,
  children,
}: {
  className?: string;
  tight?: boolean;
  loose?: boolean;
  featured?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        featured
          ? "section-content-featured"
          : loose
            ? "section-content-loose"
            : tight
              ? "section-content-tight"
              : "section-content",
        className
      )}
    >
      {children}
    </div>
  );
}
