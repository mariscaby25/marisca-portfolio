function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          A little about
          <span> my journey.</span>
        </h2>
      </div>

      <div className="about-content">

        <div className="about-text">

          <p>
            I'm Marisca Boamah Mintah, a Computer Science student at
            Accra Technical University with a strong interest in software
            development and web development.
          </p>

          <p>
            My journey in technology has involved learning programming
            languages, databases, version control, and modern web
            development technologies. Through hands-on projects, I've
            been able to apply what I've learned and gain a better
            understanding of how different parts of a software
            application work together.
          </p>

          <p>
            I enjoy building practical digital solutions, exploring new
            technologies, and continuously improving my technical skills.
            I'm currently focused on developing stronger real-world
            experience and growing toward a career as a software
            developer.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <span>01</span>
            <h3>Education</h3>
            <p>Accra Technical University</p>
            <small>Computer Science</small>
          </div>

          <div className="about-card">
            <span>02</span>
            <h3>Career Goal</h3>
            <p>Software Developer</p>
            <small>Building practical solutions</small>
          </div>

          <div className="about-card">
            <span>03</span>
            <h3>Focus</h3>
            <p>Web Development</p>
            <small>Frontend & Backend</small>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;