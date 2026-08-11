import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience section">
      <h2>Experience</h2>

      <div className="experience-container">
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>IT Internship</h3>

          <p className="experience-type">
            IT Support & Networking
          </p>

          <p>
            During my IT internship, I gained practical experience
            in providing technical support and troubleshooting hardware 
            and software issues. I assisted users with computer-related 
            problems, performed basic system maintenance, configured and
            troubleshot network connections, and documented technical 
            issues and solutions. This experience helped me develop
            problem-solving, communication, teamwork, and technical 
            support skills in a real working environment.
          </p>
        </motion.div>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Software Development</h3>

          <p className="experience-type">
            Academic & Personal Projects
          </p>

          <p>
            Through academic and personal projects, I have gained practical 
            experience developing web applications and working with databases 
            and APIs. I have worked with technologies including React, JavaScript,
            Python, Django, PostgreSQL, REST APIs, Git, and GitHub. These projects
            have strengthened my understanding of frontend development,
            backend development, database management, API integration,
            and version control.
          </p>
          </motion.div>

          <motion.div
  className="experience-card"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <h3>Final Year Project</h3>

  <p className="experience-type">
    Internship Connection and Tracking System
  </p>

  <p>
    Developed an Internship Connection and Tracking System designed to
    help students discover internship opportunities and manage their
    internship applications. The system was developed using Django and
    PostgreSQL, providing experience in backend development, database
    design, authentication, API development, and building practical
    solutions to real-world problems.
  </p>
</motion.div>
      </div>
    </section>
  );
}

export default Experience;