import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="container">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Shamitha Mamidi
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ color: "var(--text-muted)", fontWeight: 500 }}
      >
        Software Engineer · Full-Stack & Data Systems
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        MSCS student at UT Dallas with 2+ years of experience at Mastercard,
        building scalable data pipelines and modern full-stack applications.
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a className="btn" href="/resume.pdf" target="_blank">Resume</a>
        <a className="btn secondary" href="https://github.com/Shamitha24" target="_blank">GitHub</a>
        <a className="btn secondary" href="https://www.linkedin.com/in/shamitha-mamidi-1556a0233/" target="_blank">LinkedIn</a>
      </motion.div>
    </section>
  );
}

export default Home;
