import React from "react";
import AnimatedSection from "./AnimatedSection";
import "./LatestSermon.css";

export default function Livestream() {
  return (
    <AnimatedSection>
      <div className="latest-sermon">
        <div className="latest-sermon-header">
          <h2 className="sermon-title">Livestream</h2>
        </div>
        <div className="sermon-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=UCFN3i5-SUCJctC_h5hMiBBw&autoplay=1"
            frameBorder="0" // ✅ use camelCase in React
            allowFullScreen // ✅ use camelCase for boolean attributes
            title="LGM Livestream" // ✅ title for accessibility
          ></iframe>
        </div>
      </div>
    </AnimatedSection>
  );
}
