import React, { useState, useEffect } from "react";
import "./AnimatedSection.css";

export default function AnimatedSection({
  children,
  className = "",
  delay = 1000,
  as: Wrapper = "div", // allow optional custom element tag
}) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const combinedClassName = `animated-section ${
    entered ? "entered" : ""
  } ${className}`.trim();

  return <Wrapper className={combinedClassName}>{children}</Wrapper>;
}
