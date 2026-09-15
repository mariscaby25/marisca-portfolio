function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-heading">

        <p className="section-label">
          03 — SELECTED PROJECTS
        </p>

        <h2>
          Things I've
          <span> built.</span>
        </h2>

        <p>
          A selection of projects I've built while developing my skills
          in software and web development.
        </p>

      </div>

      <div className="project-list">

        {/* Freelancer Marketplace */}

        <article className="project-card">

          <div className="project-image">
            <img
              src="/images/freelancer-marketplace.png"
              alt="Freelancer Marketplace project"
            />
          </div>

          <div className="project-content">

            <span className="project-number">
              PROJECT 01
            </span>

            <h3>Freelancer Marketplace</h3>

            <p>
              A web-based platform designed to connect clients with
              freelancers. The platform allows clients to post job
              opportunities while freelancers can create profiles,
              discover available jobs, and submit applications.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/mariscaby25/Freelancer-Marketplace"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              VIEW PROJECT →
            </a>

          </div>

        </article>


        {/* GlowHair Store */}

        <article className="project-card project-reverse">

          <div className="project-image">
            <img
              src="/images/glowhair-store.png"
              alt="GlowHair Store project"
            />
          </div>

          <div className="project-content">

            <span className="project-number">
              PROJECT 02
            </span>

            <h3>GlowHair Store</h3>

            <p>
              A web-based hair shopping platform that allows customers
              to browse available hair products and contact the business
              to place orders.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>Supabase</span>
            </div>

            <a
              href="https://github.com/mariscaby25"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              VIEW PROJECTS →
            </a>

          </div>

        </article>

      </div>

      <p className="more-projects">
        More projects coming soon.
      </p>

    </section>
  );
}

export default Projects;