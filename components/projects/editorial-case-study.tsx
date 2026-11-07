import Link from "next/link";
import type { ReactNode } from "react";
import type { Project, ProjectCaseStudy } from "@/types";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: "2.25rem" }}>
      <h2 className="section-kicker" style={{ marginBottom: "0.75rem" }}>
        {title}
      </h2>
      <div className="list-body" style={{ maxWidth: "42rem" }}>
        {children}
      </div>
    </section>
  );
}

export function EditorialCaseStudy({
  project,
  caseStudy,
}: {
  project: Project;
  caseStudy: ProjectCaseStudy;
}) {
  return (
    <main id="main-content" className="page-shell section-block">
      <Link href="/#projects" className="section-more" style={{ marginTop: 0, marginBottom: "2rem" }}>
        ← projects
      </Link>

      <p className="section-kicker">case study</p>
      <h1 className="display-name" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
        {project.title}
      </h1>
      <p className="list-body" style={{ marginTop: "1rem", maxWidth: "42rem" }}>
        {project.problemStatement}
      </p>

      <Section title="problem">{caseStudy.problem}</Section>
      <Section title="solution">{caseStudy.solution}</Section>
      {caseStudy.requirements && <Section title="requirements">{caseStudy.requirements}</Section>}
      {caseStudy.architectureDiagramNote && (
        <Section title="architecture">{caseStudy.architectureDiagramNote}</Section>
      )}
      {project.architecture && (
        <p className="list-body" style={{ maxWidth: "42rem", marginTop: "0.75rem" }}>
          {project.architecture}
        </p>
      )}
      {caseStudy.eventFlow && <Section title="event & data flow">{caseStudy.eventFlow}</Section>}
      {caseStudy.reliability && <Section title="reliability">{caseStudy.reliability}</Section>}
      {caseStudy.security && <Section title="security">{caseStudy.security}</Section>}
      {caseStudy.testing && <Section title="testing">{caseStudy.testing}</Section>}
      {caseStudy.performance && <Section title="performance">{caseStudy.performance}</Section>}

      <Section title="what i built">
        <ul className="writing-topics">
          {caseStudy.deliverables.map((d) => (
            <li key={d.area}>
              <strong>{d.area}.</strong> {d.detail}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="key decisions">
        <ul className="writing-topics">
          {caseStudy.decisions.map((d) => (
            <li key={d.title}>
              <strong>{d.title}.</strong> {d.detail}
            </li>
          ))}
        </ul>
      </Section>

      {caseStudy.tradeoffs && caseStudy.tradeoffs.length > 0 && (
        <Section title="trade-offs">
          <ul className="writing-topics">
            {caseStudy.tradeoffs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>
      )}

      {caseStudy.lessonsLearned && caseStudy.lessonsLearned.length > 0 && (
        <Section title="lessons">
          <ul className="writing-topics">
            {caseStudy.lessonsLearned.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="verified results">
        <ul className="writing-topics">
          {caseStudy.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Section>

      {caseStudy.evidenceGaps && caseStudy.evidenceGaps.length > 0 && (
        <Section title="evidence gaps">
          <ul className="writing-topics">
            {caseStudy.evidenceGaps.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </Section>
      )}

      <div className="project-links" style={{ marginTop: "2rem" }}>
        {caseStudy.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="section-more">
            {link.label} →
          </a>
        ))}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="section-more">
            github →
          </a>
        )}
      </div>
    </main>
  );
}
