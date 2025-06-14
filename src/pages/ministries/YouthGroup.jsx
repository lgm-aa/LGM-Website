// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";

export default function YouthGroup() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Youth Group</h3>
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
          <AnimatedSection className="hero" delay={300}>
            <p>
              Our youth group is a vibrant community of young people who come
              together to explore their faith journey, build valuable
              friendships, and make positive impacts in the world. We’re a group
              of high school and middle school students (grades 6-12) who are
              passionate about having fun and learning about what it means to be
              a devoted follower of Christ who loves like Jesus, for life! “Let
              no one despise you for your youth, but set the believers an
              example in speech, in conduct, in love, in faith, in purity.” (1
              Timothy 4:12)
            </p>

            <h2>Contact: Sarah Chung - sarah201671@gmail.com</h2>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img
              src="/yg.png" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
