import Link from "next/link";
import { projects, siteConfig } from "@/content/data";
import type { Project, ProjectTier } from "@/types";

const tierOrder: ProjectTier[] = ["flagship", "supporting", "upcoming"];

const tierLabels: Record<ProjectTier, string> = {
  flagship: "flagship · ai & distributed systems",
  supporting: "supporting · product engineering",
  upcoming: "upcoming",
  experiment: "experiments",
};

const projectYears: Record<string, string> = {
  voxforge: "2025–26",
  bugsathi: "2026",
  signalmine: "2025–26",
  "paint-intelligence": "2025",
  arden: "2026+",
};

function byTier(tier: ProjectTier) {
  return projects.filter((p) => p.tier === tier);
}

function ProjectRow({ project }: { project: Project }) {
  const year = projectYears[project.id] ?? "2025";
  const caseStudy = `/projects/${project.id}`;

  return (
    <article className="list-row" style={{ cursor: "default" }}>
      <div className="list-row-head">
        <span className="list-title">{project.title}</span>
        <span className="list-meta">{year}</span>
      </div>
      <p className="list-role">{project.problemStatement}</p>
      <p className="list-body">{project.description}</p>
      <p className="list-body" style={{ marginTop: "0.65rem" }}>
        <span className="list-meta">my role · </span>
        {project.contribution}
      </p>
      <p className="list-body" style={{ marginTop: "0.5rem" }}>
        <span className="list-meta">hard part · </span>
        {project.mainEngineeringChallenge}
      </p>
      {project.metrics && (
        <div className="list-tags" style={{ marginTop: "0.85rem" }}>
          {project.metrics.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      )}
      <div className="list-tags" style={{ marginTop: "0.65rem" }}>
        {project.tech.slice(0, 8).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="project-links" style={{ marginTop: "1rem" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="section-more">
            github →
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="section-more">
            demo →
          </a>
        )}
        {project.status !== "coming-soon" && (
          <Link href={caseStudy} className="section-more">
            case study →
          </Link>
        )}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="page-shell section-block" aria-label="projects">
      <h2 className="section-kicker">projects · inspect the work</h2>
      <p className="list-body" style={{ marginBottom: "2rem", maxWidth: "40rem" }}>
        Flagship repos are the fastest path to judge engineering depth — source, tests, ADRs, and case studies
        on this site stay aligned via shared catalog data.
      </p>

      {tierOrder.map((tier) => {
        const items = byTier(tier);
        if (items.length === 0) return null;
        return (
          <div key={tier} className="project-tier-block" style={{ marginBottom: "2.5rem" }}>
            <h3 className="section-kicker" style={{ fontSize: "0.7rem", marginBottom: "1rem" }}>
              {tierLabels[tier]}
            </h3>
            <div className="list-stack">
              {items.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      })}

      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="section-more"
      >
        all repositories on github →
      </a>
    </section>
  );
}
