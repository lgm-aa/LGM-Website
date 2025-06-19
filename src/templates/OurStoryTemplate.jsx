// src/components/StorySection.jsx
import React from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function OurStoryTemplate({ text, image, reverse = false }) {
  return (
    <div className="our-story-wrapper">
      {!reverse ? (
        <>
          <div className="our-story-text">
            <AnimatedSection className="hero" delay={100}>
              {text}
            </AnimatedSection>
          </div>
          <div className="our-story-photo">
            <AnimatedSection className="hero" delay={100}>
              <img src={image.src} alt={image.alt} />
            </AnimatedSection>
          </div>
        </>
      ) : (
        <>
          <div className="our-story-photo">
            <AnimatedSection className="hero" delay={100}>
              <img src={image.src} alt={image.alt} />
            </AnimatedSection>
          </div>
          <div className="our-story-text">
            <AnimatedSection className="hero" delay={100}>
              {text}
            </AnimatedSection>
          </div>
        </>
      )}
    </div>
  );
}
