// src/pages/Home.jsx
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom"; // if you’re using react-router
import LatestSermon from "../components/LatestSermon";
import Livestream from "../components/Livestream";

import "./Home.css";

export default function Home() {
  return (
    <main className="landing-page">
      <AnimatedSection className="hero" delay={100}>
        <h1>Living Grace Ministry</h1>
        <p>
          Making a community of Jesus’s disciples who love like Jesus through
          God’s grace
        </p>
        <Link to="/about/our_story" className="dropdown-item">
          <button>Learn More</button>
        </Link>
      </AnimatedSection>

      <AnimatedSection className="hero" delay={100}>
        <h1>Sunday Service</h1>
        <p>
          Join us for snacks and fellowship at 12:45 pm. Service starts at 1:30
          pm in the KUMCAA building, next door to our previous building
        </p>

        <Link to="/about/sunday_service" className="dropdown-item">
          <button>Learn More</button>
        </Link>

        <div className="our-story-wrapper">
          <div className="our-story-photo">
            <img src="/KM_EntranceA.png"></img>
          </div>

          <div className="our-story-photo">
            <img src="/KM_EntranceB.png"></img>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="hero" delay={100}>
        <h1>Join us on Youtube!</h1>
        <Livestream />
        <LatestSermon />
      </AnimatedSection>
    </main>
  );
}
