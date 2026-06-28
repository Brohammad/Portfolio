import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { StatsSection } from "@/components/sections/stats";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { TechFloatingSection } from "@/components/sections/tech-floating";
import { NowSection } from "@/components/sections/now";
import { UsesSection } from "@/components/sections/uses";
import { GithubSection } from "@/components/sections/github";
import { BlogSection } from "@/components/sections/blog";
import { ContactSection } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CommandPalette } from "@/components/ui/command-palette";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <div className="section-pause section-tone-elevated" aria-hidden />
        <TechFloatingSection />
        <NowSection />
        <UsesSection />
        <GithubSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
