import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        className="btn"
        style={{
          position: "fixed",
          top: "18px",
          right: "24px",
          zIndex: 1000,
          padding: "10px 18px",
          fontSize: "0.9rem",
        }}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
