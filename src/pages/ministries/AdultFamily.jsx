// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";

export default function AdultFamily() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Adult/Family Ministry</h3>
      </AnimatedSection>

      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={300}>
            <p>
              Through every stage of life, we need a community to journey with
              us. As we navigate life, we find that God desires to create a
              family that is not specific to one’s immediate family, but is
              bound together by the love of Christ. Life can be complicated and
              difficult at times—God never intended us to go through it alone.
              LGM Adult and Family Ministry strives to be a place where we can
              support, encourage, love, laugh, and cry with each other as we
              earnestly seek to build God’s kingdom within us and in this
              greater world. LGM Adult and Family Ministry is for mid-30s and up
              generally, but no one’s counting! Whether you are single, married,
              divorced, with kids or without, you are welcome to join us.
            </p>

            <h2>Contact: LGMAdultandFamilyMinistry@gmail.com</h2>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img
              src="/earl.jpg" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
