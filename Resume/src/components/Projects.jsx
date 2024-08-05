import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/",
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="project">
      <div className="projects-inner-container projects-inner-container-md projects-inner-container-lg">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid projects-grid-md projects-grid-lg">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-name">{project.name}</h3>
              <p className="project-technologies">{project.technologies}</p>
              <a
                href={project.github}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
