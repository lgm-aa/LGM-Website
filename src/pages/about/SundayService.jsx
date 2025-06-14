// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";
export default function SundayService() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>About the Service</h3>
      </AnimatedSection>

      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={100}>
            <p>
              Our service starts at 1:30pm every Sunday. Please join us for
              snacks and fellowship at 12:45pm
            </p>

            <p>1536 Franklin St, Ann Arbor, MI 48103</p>

            <p>
              We share a building with{" "}
              <a href="https://maps.app.goo.gl/uaGb2FYHz77yMhG57">
                Korean United Methodist Church of Ann Arbor
              </a>
              .
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

      <div className="our-story-wrapper">
        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={100}>
            <img
              src="/sanc.jpg" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>

        <div className="our-story-text">
          <AnimatedSection className="hero" delay={100}>
            <p>
              We are just a short 5 minute drive from downtown Ann Arbor and the
              University of Michigan campus. We provide rides from campus,
              please contact our ride coordinator for more information.
            </p>

            <h2>Contact: Matt Nho - sarah201671@gmail.com</h2>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
