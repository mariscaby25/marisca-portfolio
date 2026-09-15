function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-heading">

        <p className="section-label">
          02 — SKILLS & EXPERTISE
        </p>

        <h2>
          Technologies I'm
          <span> building with.</span>
        </h2>

        <p className="skills-intro">
          Technologies and tools I'm currently learning, building with,
          and developing experience in.
        </p>

      </div>

      <div className="skills-grid">

        <div className="skill-category">
          <span>01</span>
          <h3>Frontend Development</h3>

          <div className="skill-list">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JSX</p>
            <p>React</p>
          </div>
        </div>

        <div className="skill-category">
          <span>02</span>
          <h3>Backend Development</h3>

          <div className="skill-list">
            <p>Node.js</p>
          </div>
        </div>

        <div className="skill-category">
          <span>03</span>
          <h3>Databases</h3>

          <div className="skill-list">
            <p>MySQL</p>
            <p>Supabase</p>
          </div>
        </div>

        <div className="skill-category">
          <span>04</span>
          <h3>Programming</h3>

          <div className="skill-list">
            <p>Java</p>
            <p>C++</p>
            <p>Python</p>
          </div>
        </div>

        <div className="skill-category">
          <span>05</span>
          <h3>Tools & Version Control</h3>

          <div className="skill-list">
            <p>Git</p>
            <p>GitHub</p>
            <p>Vite</p>
          </div>
        </div>

      </div>

      <div className="languages-section">

        <div>
          <p className="section-label">
            LANGUAGES & TEACHING
          </p>

          <h3>
            German — <span>B2 / Upper Intermediate</span>
          </h3>
        </div>

        <div className="language-info">
          <p>Goethe-Zertifikat B2</p>
          <p>Part-time German teaching experience</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;