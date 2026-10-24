import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, siteConfig } from "@/content/data";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  const external = project.demo ?? project.caseStudyUrl ?? project.github;

  return (
    <main id="main-content" className="page-shell section-block">
      <Link href="/#projects" className="section-more" style={{ marginTop: 0, marginBottom: "2rem" }}>
        ← projects
      </Link>

      <p className="section-kicker">{project.title}</p>
      <h1 className="display-name" style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)" }}>
        {project.title}
      </h1>

      <p className="list-body" style={{ marginTop: "1.5rem", maxWidth: "42rem" }}>
        {project.longDescription ?? project.description}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="list-tags" style={{ marginTop: "1.5rem" }}>
          {project.metrics.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      )}

      <div className="list-tags" style={{ marginTop: "1rem" }}>
        {project.tech.slice(0, 10).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {external && (
        <a href={external} target="_blank" rel="noopener noreferrer" className="section-more">
          open live →
        </a>
      )}
    </main>
  );
}
