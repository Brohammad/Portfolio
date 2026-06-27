import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { StatsSection } from "@/components/sections/stats";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { TechFloatingSection } from "@/components/sections/tech-floating";
import { NowSection } from "@/components/sections/now";
import { UsesSection } from "@/components/sections/uses";
import { CertificationsSection } from "@/components/sections/certifications";
import { GithubSection } from "@/components/sections/github";
import { BlogSection } from "@/components/sections/blog";
import { ContactSection } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CommandPalette } from "@/components/ui/command-palette";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />

      <PageWrapper>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <TechFloatingSection />
        <NowSection />
        <CertificationsSection />
        <UsesSection />
        <GithubSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
      </PageWrapper>
    </>
  );
}
