const About = () => {
  return (
    <section id="about">
      <h2>About & Skills</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am currently pursuing my B.Tech in Computer Science and Engineering at the National Institute of Technology, Warangal (CGPA: 8.63/10). 
          </p>
          <p>
            My passion lies in dissecting complex problems and building things from scratch. Whether it's crafting a custom in-memory database like Redis in C++ or developing decentralized federated networks, I enjoy working at the intersection of low-level systems and scalable backend architecture.
          </p>
          <p>
            With over 900+ algorithmic problems solved across platforms, I bring strong analytical skills to software development.
          </p>
        </div>

        <div className="skills-container">
          <div className="skill-group">
            <h3>Languages</h3>
            <div className="tags">
              <span className="tag">C++ (STL)</span>
              <span className="tag">Java</span>
              <span className="tag">SQL</span>
              <span className="tag">JavaScript</span>
              <span className="tag">HTML/CSS</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Frameworks & Tools</h3>
            <div className="tags">
              <span className="tag">Node.js</span>
              <span className="tag">Express</span>
              <span className="tag">React.js</span>
              <span className="tag">Prisma ORM</span>
              <span className="tag">Git & GitHub</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Databases & Cloud</h3>
            <div className="tags">
              <span className="tag">PostgreSQL</span>
              <span className="tag">Redis</span>
              <span className="tag">Oracle SQL</span>
              <span className="tag">BullMQ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;