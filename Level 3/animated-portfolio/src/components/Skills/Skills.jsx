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
  "Cybersecurity",
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function Skills() {
  return (
    <section id="skills" className="skills section">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {skills.map((skill) => (
          <motion.div
            className="skill-card"
            key={skill}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
          >
            {skill}
          </motion.div>
        ))}

      </motion.div>

    </section>
  );
}

export default Skills;