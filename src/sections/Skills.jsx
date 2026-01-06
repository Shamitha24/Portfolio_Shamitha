import { motion } from "framer-motion";

const skills = [
  "C, C++, Java, Python, C#, SQL, JavaScript",
  "React, Node.js, Express, .NET, WPF",
  "MongoDB, MySQL, Hive, Impala, PySpark",
  "AWS, Databricks, HDFS, Tableau, Kafka",
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((skill, i) => (
          <motion.div
            className="card"
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } },
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
