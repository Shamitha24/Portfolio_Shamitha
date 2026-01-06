import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact</h2>
      <p style={{ marginBottom: "24px", color: "var(--text-muted)" }}>
        Feel free to reach out via email or connect with me on LinkedIn and GitHub.
      </p>

      <div className="buttons">
        <a
          className="btn"
          href="mailto:sxm230333@utdallas.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/shamitha-mamidi-1556a0233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="btn"
          href="https://github.com/Shamitha24"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
