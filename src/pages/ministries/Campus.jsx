// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";

export default function Campus() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Campus Ministry</h3>
      </AnimatedSection>

      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={300}>
            <p>
              The college years can be a time of great growth and challenge. It
              is in this time that so many of us find our identity and purpose.
              What will that be? Who will we be? What will we live for in this
              life? LGM Campus hopes to help you find your identity and purpose,
              and we hope you find it in Christ! We have a vibrant campus-based
              ministry for undergraduate students or college-aged or anyone who
              would like to be involved in ministry that takes place primarily
              on University of Michigan campus, regardless if you’re in school
              or not. You are welcome here at LGM, come check us out!
            </p>

            <h2>Contact: Sammy Kim samueki@umich.edu</h2>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img
              src="/campus.JPG" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
