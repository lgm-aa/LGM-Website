// src/pages/Bulletin.jsx
import React from "react";
import LatestBulletin from "../../components/LatestBulletin";
import "./Bulletin.css"; // Adjust path if necessary

export default function Bulletin() {
  return (
    <main className="bulletin-page">
      <h3 className="bulletin-title">Check out this week's bulletin!</h3>
      <div className="bulletin-link-wrapper">
        <LatestBulletin />
      </div>
    </main>
  );
}
