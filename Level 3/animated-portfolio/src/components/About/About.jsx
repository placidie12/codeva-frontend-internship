import {motion} from 'framer-motion';
import "./About.css";

function About() {
    return (

        <motion.div
        id="about"
        className="about section"
        initial={{ opacity: 0, y: 60}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8}}
        viewpoint={{ once: true }}
        >
            <h2>About Me</h2>
    <div className="about-content">
        <div>
              <p>
            I am an Information Technology graduate with a strong interest in software development and technology. 
            I enjoy learning how technology can be used to solve real-world problems and create useful digital solutions.
            I am a curious and motivated person who believes in continuous learning and improving my skills through practical experience. 
                    </p>

              <p>
           My technical interests and experience include web development, software development, networking, and cybersecurity. 
           I have worked with technologies such as HTML, CSS, JavaScript, React, Python, Django, PostgreSQL, REST APIs, Git, 
           and GitHub. Through academic, internship, and personal projects, I have developed practical skills in building web applications,
            working with databases, integrating APIs, troubleshooting technical problems, and collaborating on projects.
          </p>

             <p>
            I am currently focused on growing into a skilled software developer and building a strong professional career in technology.
             I am always looking for opportunities to learn new technologies, work on challenging projects, and gain experience in real-world environments.
              My goal is to use my skills and creativity to develop reliable and impactful solutions while continuing to grow both personally and professionally.
             </p>   
        </div>

         <div className="about-info">
            <strong>
                Education
            </strong>
            <span>Information Technology Student</span>
         </div>
         <div>
                <strong>Focus</strong>
                <span>Software Development, Web Development, Networking, Cybersecurity</span>
            </div>
            <div>
                <strong>Interests</strong>
                <span>Technology, Continuous Learning, Problem Solving</span>
            </div>
            
     </div>
            
        </motion.div>
    );
}
export default About;