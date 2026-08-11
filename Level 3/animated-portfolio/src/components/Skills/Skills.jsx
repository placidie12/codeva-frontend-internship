import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Django",
  "PostgreSQL",
  "Git & GitHub",
  "Networking",
  "Cybersecurity"
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;