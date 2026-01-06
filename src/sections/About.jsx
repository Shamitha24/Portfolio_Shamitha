import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        I'm Shamitha Mamidi, an MSCS student at UT Dallas with 2+ years of
        experience at Mastercard, building scalable data pipelines and modern
        full-stack applications.
      </p>
    </motion.section>
  );
}

export default About;
