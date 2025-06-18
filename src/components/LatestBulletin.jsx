import React from "react";
import useLatestPDF from "../hooks/useLatestBulletin";

export default function LatestBulletin() {
  const { pdfUrl, error } = useLatestPDF();

  if (error) return <p>{error}</p>;
  if (!pdfUrl) return <p>Loading PDF...</p>;

  return (
    <p>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        📄 View This Week's Bulletin
      </a>
    </p>
  );
}
