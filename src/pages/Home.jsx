// src/pages/Home.jsx
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom"; // if you’re using react-router
import LatestSermon from "../components/LatestSermon";

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

      <AnimatedSection>
        <div class="iframe-container">
          <iframe
            width="768"
            height="432"
            src="https://www.youtube.com/embed/live_stream?channel=UCFN3i5-SUCJctC_h5hMiBBw&autoplay=1"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </AnimatedSection>

      <LatestSermon />
    </main>
  );
}
