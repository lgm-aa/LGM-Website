// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";

export default function Ministries() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero" delay={100}>
        <h2>Check out our different Ministries!</h2>
      </AnimatedSection>
      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={300}>
            <p>
              We would love for you to be a part of our growing community of
              faith. Our ministry brings together different cultures and age
              groups, including Children’s Ministry (pre-school to 5th grade),
              Youth Group (grades 6-12), Campus Ministry (undergraduate),
              Postgrad Ministry (post-college aged young adults including grad
              students, early to late 20s), and Family Group (for our more
              seasoned members). All are welcome!
            </p>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img
              src="/ministries.JPG" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
