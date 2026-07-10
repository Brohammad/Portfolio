import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectCaseStudyView } from "@/components/projects/project-case-study";
import { projects, projectCaseStudies, siteConfig } from "@/content/data";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = projectCaseStudies.find((study) => study.slug === slug);
  const project = caseStudy
    ? projects.find((item) => item.id === caseStudy.projectId)
    : undefined;

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = projectCaseStudies.find((study) => study.slug === slug);
  const project = caseStudy
    ? projects.find((item) => item.id === caseStudy.projectId)
    : undefined;

  if (!caseStudy || !project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <ProjectCaseStudyView project={project} caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  );
}
