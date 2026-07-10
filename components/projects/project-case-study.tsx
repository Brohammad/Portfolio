import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/social-icons";
import type { Project, ProjectCaseStudy } from "@/types";

interface ProjectCaseStudyViewProps {
  project: Project;
  caseStudy: ProjectCaseStudy;
}

export function ProjectCaseStudyView({ project, caseStudy }: ProjectCaseStudyViewProps) {
  return (
    <article className="section-container section-container-wide py-[calc(var(--navbar-height)+2.5rem)] pb-20 lg:pb-28">
      <div className="max-w-3xl mb-10 lg:mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[14px] text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <p className="text-caption text-primary mb-3">Case Study</p>
        <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.03em] leading-tight text-foreground">
          {project.title}
        </h1>
        <p className="mt-5 text-[1.0625rem] sm:text-[1.125rem] text-muted-foreground leading-[1.75]">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_18rem] gap-10 lg:gap-14 items-start">
        <div className="space-y-10 min-w-0">
          <section className="space-y-4">
            <h2 className="text-block-label">Problem</h2>
            <p className="text-[16px] text-foreground/85 leading-[1.8]">{caseStudy.problem}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-block-label">Solution</h2>
            <p className="text-[16px] text-foreground/85 leading-[1.8]">{caseStudy.solution}</p>
          </section>

          {project.architecture && (
            <section className="case-study-panel space-y-4">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-primary/70" />
                <h2 className="text-block-label">Architecture</h2>
              </div>
              <p className="text-[15px] text-muted-foreground leading-[1.8]">{project.architecture}</p>
            </section>
          )}

          <section className="space-y-4">
            <h2 className="text-block-label">What I Built</h2>
            <div className="overflow-x-auto rounded-[var(--radius)] border border-border-subtle">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr className="border-b border-border-subtle bg-muted/20">
                    <th className="px-4 py-3 font-medium text-foreground/80">Area</th>
                    <th className="px-4 py-3 font-medium text-foreground/80">Deliverable</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudy.deliverables.map((row) => (
                    <tr key={row.area} className="border-b border-border-subtle/70 last:border-0">
                      <td className="px-4 py-3 font-medium text-foreground/75 align-top whitespace-nowrap">
                        {row.area}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground leading-relaxed">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-block-label">Technical Decisions</h2>
            <ul className="space-y-4">
              {caseStudy.decisions.map((decision) => (
                <li
                  key={decision.title}
                  className="p-5 rounded-[calc(var(--radius)-2px)] border border-border-subtle bg-card/50"
                >
                  <p className="text-[15px] font-medium text-foreground/90">{decision.title}</p>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mt-2">{decision.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-block-label">Results</h2>
            <ul className="space-y-3">
              {caseStudy.results.map((result) => (
                <li
                  key={result}
                  className="text-[15px] text-muted-foreground leading-relaxed flex gap-3"
                >
                  <span className="text-primary shrink-0 mt-0.5">→</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-[calc(var(--navbar-height)+1.5rem)] space-y-6">
          <div className="content-panel space-y-4">
            <h2 className="text-block-label">Links</h2>
            <ul className="space-y-2.5">
              {caseStudy.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] text-primary hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="content-panel space-y-4">
              <h2 className="text-block-label">Highlights</h2>
              <ul className="space-y-2.5">
                {project.metrics.map((metric) => (
                  <li key={metric} className="text-[14px] text-muted-foreground leading-relaxed">
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
