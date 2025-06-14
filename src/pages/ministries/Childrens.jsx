// src/pages/About/OurStory.jsx
import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import "../../LGM.css";

export default function Childrens() {
  return (
    <main className="our-story-page landing-page">
      <AnimatedSection className="hero ministry-title" delay={100}>
        <h3>Children’s Ministry</h3>
      </AnimatedSection>
      <div className="our-story-wrapper">
        <div className="our-story-text">
          <AnimatedSection className="hero" delay={300}>
            <p>
              Our children’s ministry is a joyful community where kids (grades
              K-5) gather together to learn about God’s love, grow in faith, and
              build lasting friendships. Through engaging Bible lessons and fun
              activities we aim to help students discover what it means to
              follow Jesus and share His love with the world. We believe every
              child is a living miracle from God (Psalms 127:3), and we strive
              to nurture their faith in ways that are exciting and rooted in the
              love of Christ.
            </p>

            <h2>Contact: Justin Hyun - jushyun@umich.edu</h2>
          </AnimatedSection>
        </div>

        <div className="our-story-photo">
          <AnimatedSection className="hero" delay={300}>
            <img
              src="/Children.jpeg"
              // src="/ohn.JPG"
              alt="Children's Ministry"
            />
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
