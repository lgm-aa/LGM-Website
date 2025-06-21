import React from "react";
import "./YoutubeChannel.css";

export default function YoutubeChannel() {
  return (
    <div className="youtube-channel">
      <div className="youtube-channel-header">
        <h2 className="youtube-channel-title">Visit our YouTube Channel</h2>
      </div>
      <div className="youtube-channel-button-wrapper">
        <a
          className="homepage-button"
          href="https://www.youtube.com/@LivingGraceMinistry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
