// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";
export default function MissionVision() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Mission Spotlight: Central Asia Missions</h3>
      </AnimatedSection>

      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={100}>
            <p>
              Thank you to everyone for your amazing support! We are continuing
              our support for the UMC churches in Central Asia throughout the
              year. Please send money through our normal channels (see offering
              information), but please let Jason Um know if the money is meant
              for Central Asia missions (jasonum@gmail.com), thanks!
            </p>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={100}>
            <img
              src="/sanc.jpg" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
