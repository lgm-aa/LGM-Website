// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";
export default function YouthGroup() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>
          "The purpose of Living Grace Ministry is to nurture genuine Christian
          discipleship through grace."
        </h3>
      </AnimatedSection>
      {/* <AnimatedSection className="hero" delay={150}>
        <h2>
          “Let no one despise you for your youth, but set the believers an
          example in speech, in conduct, in love, in faith, in purity.” (1
          Timothy 4:12)
        </h2>
      </AnimatedSection> */}
      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={100}>
            <p>
              We are a ministry that strives to live out grace practically in
              the Ann Arbor community. In the world today, grace is often in
              short supply. Even in churches, we do not always reflect the
              radical grace of Jesus Christ that would welcome ANYONE to come
              and that would call us to value even the least amongst us. Living
              Grace Ministry is a community where we want to see true
              transformation so that we can build God’s kingdom, and we
              encourage people to do so through love, forgiveness, and grace,
              not through judgment or guilt.
            </p>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={100}>
            <img
              src="/lgm_easter.jpg" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="our-story-wrapper">
        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={100}>
            <img
              src="/ant.jpg" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>

        <div className="our-story-text">
          <AnimatedSection className="hero" delay={100}>
            <p>
              Living Grace Ministry is a United Methodist Church. Formerly, the
              English ministry of Korean United Methodist Church of Ann Arbor,
              we are independent as of July 2023, but we still have a close
              partnership and relationship with the Korean Church. LGM is not
              all Korean, and we welcome anyone to join us for fellowship and
              worship!
            </p>

            <p>
              We are Christ-centered, outreach and mission-minded, and dedicated
              to training and equipping disciples and leaders. At LGM, all are
              welcome!
            </p>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
