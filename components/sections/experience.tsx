import { experiences, education } from "@/content/data";

const workCopy: Record<
  string,
  { role: string; summary: string; tags: string[] }
> = {
  pwc: {
    role: "associate software engineer · backend + ai",
    summary:
      "building an agentic deal platform for a banking client — async ingestion, nlp extraction, ml classification, and the apis the sales desk actually uses. ~50 deals/day end to end in under 60 seconds, with evaluation logging and azure deploy discipline.",
    tags: ["python", "fastapi", "postgres", "langchain", "azure", "docker"],
  },
  voxforge: {
    role: "founder / principal engineer",
    summary:
      "solo-built open-source voice ai infra — unified ws/rest/webrtc pipeline, langgraph agents, pgvector rag, eval + replay, and one-command https deploy. 354+ tests at 81% coverage.",
    tags: ["python", "fastapi", "langgraph", "livekit", "docker", "otel"],
  },
};

export function ExperienceSection() {
  const ordered = [...experiences].sort((a, b) => {
    if (a.id === "pwc") return -1;
    if (b.id === "pwc") return 1;
    return 0;
  });

  return (
    <section id="work" className="page-shell section-block" aria-label="work · recent years">
      <h2 className="section-kicker">work · recent years</h2>

      <div className="list-stack">
        {ordered.map((exp) => {
          const copy = workCopy[exp.id];
          return (
            <article key={exp.id} className="list-row" style={{ cursor: "default" }}>
              <div className="list-row-head">
                <span className="list-title">{exp.company}</span>
                <span className="list-meta">{exp.duration}</span>
              </div>
              <p className="list-role">{copy?.role ?? exp.role}</p>
              <p className="list-body">{copy?.summary ?? exp.achievements[0]}</p>
              <div className="list-tags">
                {(copy?.tags ?? exp.technologies.slice(0, 6)).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          );
        })}

        <article className="list-row" style={{ cursor: "default" }}>
          <div className="list-row-head">
            <span className="list-title">{education.institution}</span>
            <span className="list-meta">{education.year}</span>
          </div>
          <p className="list-role">
            {education.degree} · {education.field}
          </p>
        </article>
      </div>
    </section>
  );
}
