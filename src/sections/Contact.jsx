import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>

      <div className="contact-buttons">
        <a href="mailto:sxm230333@utdallas.edu" className="btn">
          <FaEnvelope className="icon" />
          <span>Email</span>
        </a>

        <a href="https://www.linkedin.com/in/shamitha-mamidi-1556a0233/" className="btn" target="_blank">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/Shamitha24" className="btn" target="_blank">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
