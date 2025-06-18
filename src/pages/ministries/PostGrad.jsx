// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";

export default function PostGrad() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Post-Grad Ministry</h3>
      </AnimatedSection>

      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={300}>
            <p>
              For those who have embarked on this strange and wonderful quest
              that sometimes we call “adulting”, we are faced with many
              challenges of how to stay connected to our faith, to ultimate
              purpose, and to each other. At LGM, it is our desire that you
              don’t go on this journey alone. Postgrad is primarily for
              after-college-aged folks, roughly early twenties to late-twenties
              but no one’s counting. We have grad students, working folks, and
              people still trying to figure out what’s next. We’d love to have
              you come check out Postgrad!
            </p>

            <h2>Contact: Ian Yu - 9921ianyu@gmail.com</h2>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img
              src="/pg.jpg" // Replace with your actual image path
              alt="Living Grace Ministry"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
