function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-label">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Marisca</span>
        </h1>

        <h2>
          Computer Science Student & Aspiring Software Developer
        </h2>

        <p className="hero-description">
          I'm a Computer Science student at Accra Technical University
          with a growing passion for software development and web
          technologies. I enjoy turning ideas into practical digital
          solutions while continuously improving my programming and
          development skills.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            VIEW MY PROJECTS
          </a>

          <a href="#contact" className="btn btn-secondary">
            GET IN TOUCH
          </a>
        </div>

      </div>

      <div className="hero-photo">
        <div className="photo-frame">
          <img
            src="/images/profile.jpg"
            alt="Marisca Boamah Mintah"
          />
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
        SCROLL TO EXPLORE
      </div>

    </section>
  );
}

export default Hero;