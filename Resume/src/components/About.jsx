import AboutImage from "../assets/aboutme-image.jpg";
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-inner-container about-inner-container-md about-inner-container-lg">
        <h2 className="about-title">About Me</h2>
        <div className="about-content about-content-md">
          <img
            src={AboutImage}
            alt=""
            className="about-image about-image-md"
          />
          <div className="flex-1">
            <p className="about-description">
              Highly motivated IT personnel with a solid foundation in programming languages
              such as Java, HTML, and PHP, along with a strong understanding of networking
              concepts, database management, and cybersecurity principles. I am eager to
              expand my knowledge and possess a keen ability to learn from others. Recognized
              for being hardworking, disciplined, and intelligent, I am self-motivated and excel in
              team-oriented environments. Known for my strong problem-solving skills, attention
              to detail, and enthusiasm for technology, I am seeking an opportunity to apply my
              skills and develop professionally within a dynamic IT team. I am eager to contribute
              to innovative projects and gain valuable industry experience.
            </p>
            <div className="about-skills">
              <div className="skill">
                <label htmlFor="htmlandcss" className="skill-label">
                  HTML & CSS
                </label>
                <div className="skill-bar">
                  <div className="skill-bar-inner"></div>
                </div>
              </div>
              <div className="skill">
                <label htmlFor="php" className="skill-label">
                  Php
                </label>
                <div className="skill-bar">
                  <div className="skill-bar-inner skill-bar-inner-react"></div>
                </div>
              </div>
              <div className="skill">
                <label htmlFor="reactjs" className="skill-label">
                  React JS
                </label>
                <div className="skill-bar">
                  <div className="skill-bar-inner skill-bar-inner-node"></div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div>
                <h3 className="stat-title">0</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="stat-title">5+</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="stat-title">3+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
