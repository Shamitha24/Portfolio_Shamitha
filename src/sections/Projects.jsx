import { motion } from "framer-motion";

const projects = [
  {
    title: "Photo Sharing App",
    desc: "Full-stack web app with React, Node.js, Express, MongoDB. Secure login, likes, comments, friend interactions.",
    link: "https://github.com/PhotoApp",
  },
  {
    title: "Neural Sentiment Classification",
    desc: "PyTorch NLP model predicting 5-class Yelp ratings, optimized with Optuna.",
    link: "https://github.com/NLP-Sentiment",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project, i) => (
          <motion.div
            className="card"
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } },
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a className="btn" href={project.link} target="_blank">
              View
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
