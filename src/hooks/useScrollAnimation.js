import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
