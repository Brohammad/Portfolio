import { blogPosts, blogTopics, siteConfig } from "@/content/data";

export function WritingSection() {
  return (
    <section id="writing" className="page-shell section-block" aria-label="writing · engineering notes">
      <h2 className="section-kicker">writing · engineering notes</h2>
      <p className="list-body" style={{ maxWidth: "42rem", marginBottom: "1.5rem" }}>
        Long-form notes grounded in repos I built — not framework tutorials. Published articles will link here;
        until then, these topics match active implementation work on{" "}
        <a href={siteConfig.links.github}>GitHub</a> and case studies on this site.
      </p>

      {blogPosts.length === 0 ? (
        <div className="list-stack">
          <article className="list-row" style={{ cursor: "default" }}>
            <p className="list-role">in progress</p>
            <ul className="writing-topics">
              {blogTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>
        </div>
      ) : (
        <div className="list-stack">
          {blogPosts.map((post) => (
            <a key={post.id} href={`/writing/${post.slug}`} className="list-row">
              <div className="list-row-head">
                <span className="list-title">{post.title}</span>
                <span className="list-meta">{post.date}</span>
              </div>
              <p className="list-body">{post.excerpt}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
