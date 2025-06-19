// src/pages/About/Team.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import OurStoryTemplate from "../../templates/OurStoryTemplate";
import "../../LGM.css";

export default function Team() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Meet our Pastor</h3>
      </AnimatedSection>

      <OurStoryTemplate
        text={
          <>
            <p>Pastor Steve Khang</p>
            <h2>
              Please feel free to reach out to us via email:
              <br />
              <a href="mailto:livinggraceministry@gmail.com">
                livinggraceministry@gmail.com
              </a>
            </h2>
          </>
        }
        image={{ src: "/psk.jpg", alt: "Pastor Steve" }}
      />
    </main>
  );
}
