import React from "react";
import useLatestSermon from "../hooks/useLatestSermon";
import "./LatestSermon.css";

export default function LatestSermon() {
  const { sermon, loading, error } = useLatestSermon();

  if (loading) return <p>Loading latest sermon...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!sermon) return <p>No sermon found.</p>;
  console.log(JSON.stringify(sermon, null, 2));

  return (
    <section className="latest-sermon">
      <div className="latest-sermon-header">
        <p className="latest-label">LATEST SERMON</p>
        <h2 className="sermon-title">{sermon.title}</h2>

        <p className="sermon-date">
          {sermon.publishedAt
            ? new Date(sermon.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Date unavailable"}
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
    </section>
  );
}
