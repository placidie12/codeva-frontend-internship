import {motion} from 'framer-motion';
import "./Hero.css";

function Hero() {
    return(
        <section id="home" className="hero">
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
            
                <p className="hero-greeting">Hello I'm</p>
                <h1>MWIZERWA PLACIDIE</h1>
                <h2>IT student & Aspring Software Developer</h2>
                <p className="hero-description">
          I am passionate about software development, web technologies,
          networking, and building practical digital solutions that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View My Work</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>

        </div>
            </motion.div >

           < motion.div
           className="hero-card"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        >

           </motion.div>
        </section>
    );
}
export default Hero;
