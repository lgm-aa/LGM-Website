import React from "react";
import useLatestSermon from "../hooks/useLatestSermon";
import AnimatedSection from "./AnimatedSection";
import "./LatestSermon.css";

export default function LatestSermon() {
  const { sermon, error } = useLatestSermon();

  if (error) return <p>Error loading sermon.</p>;
  if (!sermon) return null; // no loading text

  return (
    <AnimatedSection>
      <div className="latest-sermon">
        <div className="latest-sermon-header">
          <h2 className="latest-label">LATEST SERMON</h2>
          <h2 className="sermon-title">{sermon.title}</h2>
          <p className="sermon-date">
            {new Date(sermon.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="sermon-video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${sermon.videoId}`}
            title={sermon.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </AnimatedSection>
  );
}
