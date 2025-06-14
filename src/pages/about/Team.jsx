// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";

export default function Team() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Meet our Pastor</h3>
      </AnimatedSection>
      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={300}>
            <p>Pastor Steve Khang</p>

            <h2>
              Please feel free to reach out to us via email
              livinggraceministry@gmail.com
            </h2>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img
              src="/psk.jpg"
              // src="/ohn.JPG"
              alt="Pastor Steve"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
