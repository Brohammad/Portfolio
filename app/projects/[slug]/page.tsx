import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, siteConfig, projectCaseStudies } from "@/content/data";
import { EditorialCaseStudy } from "@/components/projects/editorial-case-study";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.status !== "coming-soon")
    .map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.problemStatement,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.problemStatement,
      url: `${siteConfig.url}/projects/${slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  const caseStudy = projectCaseStudies.find((cs) => cs.projectId === project.id);

  if (!caseStudy) {
    notFound();
  }

  return <EditorialCaseStudy project={project} caseStudy={caseStudy} />;
}
