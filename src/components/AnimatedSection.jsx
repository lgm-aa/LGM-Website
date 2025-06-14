import React, { useState, useEffect } from "react";
import "./AnimatedSection.css";

export default function AnimatedSection({
  children,
  className = "",
  delay = 1000, // milliseconds before starting
}) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <section
      className={`animated-section ${entered ? "entered" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
