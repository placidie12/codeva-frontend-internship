import { motion } from "framer-motion";
import "./Contacts.css";

function Contacts() {
  return (
    <section id="contact" className="contact section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>

        <p className="contact-intro">
          Have a project idea, opportunity, or just want to connect?
          Feel free to reach out.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            aria-label="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            aria-label="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contacts;