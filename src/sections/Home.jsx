import { motion } from "framer-motion";
import profilePic from "../assets/profile_image.jpg"; // make sure path is correct
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"; // icons

function Home() {
  return (
    <section
      id="home"
      className="section container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
      }}
    >
      {/* LEFT: Text */}
      <motion.div
        style={{ flex: "1 1 300px", minWidth: "280px" }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Shamitha Mamidi</h1>
        <h2 style={{ color: "var(--text-muted)", fontWeight: 500 }}>
          Software Engineer · Full-Stack & Data Systems
        </h2>
        <p>
          MSCS student at UT Dallas with 2+ years of experience at Mastercard,
          building scalable data pipelines and modern full-stack applications.
        </p>

        <div className="buttons">
          <a className="btn" href="/resume.pdf" target="_blank">
            <FaFileAlt style={{ marginRight: "8px" }} /> Resume
          </a>
          <a className="btn" href="https://github.com/Shamitha24" target="_blank">
            <FaGithub style={{ marginRight: "8px" }} /> GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/in/shamitha-mamidi-1556a0233/" target="_blank">
            <FaLinkedin style={{ marginRight: "8px" }} /> LinkedIn
          </a>
        </div>
      </motion.div>

      {/* RIGHT: Profile Image */}
      <motion.div
        style={{ flex: "0 0 250px", textAlign: "center" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img
          src={profilePic}
          alt="Shamitha Mamidi"
          className="profile-img"
        />
      </motion.div>
    </section>
  );
}

export default Home;
