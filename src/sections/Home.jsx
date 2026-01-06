import { motion } from "framer-motion";
import profilePic from "../assets/profile_image.jpg";

function Home() {
  return (
    <motion.section
      id="home"
      className="container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "40px",
        justifyContent: "center",
      }}
    >
      {/* Text */}
      <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
        <h1>Shamitha Mamidi</h1>

        <h2 style={{ color: "var(--text-muted)", fontWeight: 500 }}>
          Software Engineer · Full-Stack & Data Systems
        </h2>

        <p>
          MSCS student at UT Dallas with 2+ years of experience at Mastercard,
          building scalable data pipelines and modern full-stack applications.
        </p>

        <div className="buttons">
          <a className="btn" href="/resume.pdf" target="_blank">Resume</a>
          <a className="btn" href="https://github.com/Shamitha24" target="_blank">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/shamitha-mamidi-1556a0233/" target="_blank">LinkedIn</a>
        </div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img
          src={profilePic}
          alt="Shamitha Mamidi"
          style={{
            width: "250px",
            borderRadius: "50%",
            border: "4px solid #f4b1dfff", 
            boxShadow: "0 12px 30px rgba(255,79,163,0.3)"
          }}
        />
      </motion.div>
    </motion.section>
  );
}

export default Home;
