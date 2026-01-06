import { motion } from "framer-motion";

const experiences = [
  {
    company: "Mastercard Inc.",
    role: "Software Development Engineer",
    location: "Pune, India",
    duration: "Jul 2022 – Jun 2024",
    details: [
      "Built and maintained end-to-end PySpark and Python data pipelines for client-specific data feeds.",
      "Automated data validation, feed generation, and reporting workflows, reducing manual effort by 80%.",
      "Developed internal C# and .NET components for reusable cross-team modules.",
      "Applied Checkmarx security scans and authored technical documentation."
    ]
  },
  {
    company: "Coherent Corp.",
    role: "Application Development Intern",
    location: "Sherman, TX",
    duration: "Jun 2025 – Aug 2025",
    details: [
      "Designed and developed a production-ready desktop application using C#, WPF, XAML, and .NET 9.",
      "Implemented MES-based authentication, role-based UI, secure tab/column access, and improved UI/UX.",
      "Automated data ingestion, validation, and reporting using PowerShell, ClosedXML, and Serilog."
    ]
  },
  {
    company: "Honeywell Inc.",
    role: "Software Engineer Intern",
    location: "Remote",
    duration: "May 2021 – Jul 2021",
    details: [
      "Developed Sample Dashboard Project Export for dynamic UNEX dashboards, reducing manual effort by 35%.",
      "Designed 5+ data cubes and standardized templates for predictive analysis and inventory dashboards."
    ]
  }
];

function Experience() {
  return (
    <motion.section
      id="experience"
      className="section container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Experience</h2>
      <div className="grid">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="card"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div style={{ borderLeft: "4px solid var(--accent)", paddingLeft: "16px" }}>
              <h3>{exp.role}</h3>
              <p style={{ fontWeight: 600 }}>{exp.company} • {exp.location}</p>
              <p style={{ fontStyle: "italic", color: "var(--text-muted)" }}>{exp.duration}</p>
              <ul style={{ marginTop: "12px" }}>
                {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
