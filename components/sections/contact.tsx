import { siteConfig, foundingEngineer } from "@/content/data";

export function ContactSection() {
  return (
    <section id="contact" className="page-shell section-block" aria-label="contact">
      <h2 className="section-kicker">contact</h2>

      <div className="contact-block">
        <p>{foundingEngineer.contactBlurb}</p>
        <p>
          <a className="contact-email" href={`mailto:${siteConfig.links.email}`}>
            {siteConfig.links.email}
          </a>
        </p>
        <div className="social-row">
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
          <span className="social-sep" aria-hidden>
            ×
          </span>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <span className="social-sep" aria-hidden>
            ×
          </span>
          <a href={siteConfig.links.resume} download>
            resume
          </a>
        </div>
      </div>

      <div className="colophon">
        <h3 className="section-kicker" style={{ marginBottom: "0.75rem" }}>
          colophon
        </h3>
        <p>
          set in instrument serif for the masthead, ibm plex mono for everything else.
          rebuilt often. the field begins as deterministic static and animates on capable
          desktops. last updated {siteConfig.lastUpdated}.
        </p>
      </div>
    </section>
  );
}
