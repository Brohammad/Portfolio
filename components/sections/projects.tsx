import { projects, siteConfig } from "@/content/data";

const projectYears: Record<string, string> = {
  voxforge: "2025–26",
  bugsathi: "2026",
  "paint-intelligence": "2025",
  alphaedge: "2025",
  "distributed-kv": "2025",
};

const featuredIds = ["voxforge", "bugsathi", "paint-intelligence", "alphaedge"];

function hrefFor(project: (typeof projects)[number]) {
  return project.demo ?? project.caseStudyUrl ?? project.github ?? "#";
}

export function ProjectsSection() {
  const featured = projects.filter((p) => featuredIds.includes(p.id));

  return (
    <section id="projects" className="page-shell section-block" aria-label="projects · on my own time">
      <h2 className="section-kicker">projects · on my own time</h2>

      <div className="list-stack">
        {featured.map((project) => {
          const href = hrefFor(project);
          const external = href.startsWith("http");
          return (
            <a
              key={project.id}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="list-row"
            >
              <div className="list-row-head">
                <span className="list-title">{project.title}</span>
                <span className="list-meta">{projectYears[project.id] ?? "2025"}</span>
              </div>
              <p className="list-body">{project.description}</p>
            </a>
          );
        })}
      </div>

      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="section-more"
      >
        more projects on github →
      </a>
    </section>
  );
}
