import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Internship Connection and Tracking System",
    description:
      "A Django-based platform designed to help students and organizations manage internship opportunities and applications.",
    technologies: "Django, PostgreSQL, Python"
  },
  {
    title: "GitHub User Finder",
    description:
      "A React application that searches GitHub users through the GitHub REST API and displays profile information.",
    technologies: "React, Axios, JavaScript, REST API"
  },
  {
    title: "Smart Campus Manager",
    description:
      "A digital solution designed to improve the management of campus-related information and activities.",
    technologies: "Web Development"
  },
  {
    title: "Personal Expense Tracker",
    description:
      "An application for recording, organizing, and monitoring personal expenses.",
    technologies: "Web Development, Database"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.technologies}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;