function Journey() {
  const journeyItems = [
    {
      number: "01",
      title: "Computer Science",
      text: "Building the foundation through academic study and learning the fundamentals of computing."
    },
    {
      number: "02",
      title: "Programming",
      text: "Learning to think through problems using programming languages and logical problem-solving."
    },
    {
      number: "03",
      title: "Web Development",
      text: "Turning ideas into interactive interfaces while learning modern frontend technologies."
    },
    {
      number: "04",
      title: "Backend & Databases",
      text: "Understanding what happens behind the interface through servers, APIs and databases."
    },
    {
      number: "05",
      title: "Real Projects",
      text: "Putting knowledge into practice by building projects that solve practical problems."
    },
    {
      number: "06",
      title: "What's Next",
      text: "Continuing to grow my skills and work toward becoming a professional software developer."
    }
  ];

  return (
    <section className="journey" id="journey">

      <div className="journey-heading">

        <p className="section-label">
          04 — MY JOURNEY
        </p>

        <h2>
          Learning,
          <span> building, growing.</span>
        </h2>

      </div>

      <div className="journey-list">

        {journeyItems.map((item) => (
          <div className="journey-item" key={item.number}>

            <span className="journey-number">
              {item.number}
            </span>

            <div className="journey-info">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Journey;