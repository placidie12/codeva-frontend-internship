import { motion, useReducedMotion } from "framer-motion";
import "./Hero.css";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={shouldReduceMotion ? {} : containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? false : "visible"}
      >
        <motion.p
          className="hero-greeting"
          variants={shouldReduceMotion ? {} : itemVariants}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={shouldReduceMotion ? {} : itemVariants}
        >
          MWIZERWA PLACIDIE
        </motion.h1>

        <motion.h2
          variants={shouldReduceMotion ? {} : itemVariants}
        >
          IT Student & Aspiring Software Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          variants={shouldReduceMotion ? {} : itemVariants}
        >
          I am passionate about software development, web technologies,
          networking, and building practical digital solutions that solve
          real-world problems.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={shouldReduceMotion ? {} : itemVariants}
        >
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
        animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: 0.8,
                delay: 1,
              }
        }
      >
        <div className="hero-circle">
          <span>MW</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;