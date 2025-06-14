import React from "react";
import useLatestPDF from "../hooks/useLatestPDF";

export default function LatestPDF() {
  const { pdf, loading } = useLatestPDF();

  if (loading) return <p>Loading PDF...</p>;
  if (!pdf) return <p>No PDF found.</p>;

  return (
    <p>
      <a href={pdf.viewUrl} target="_blank" rel="noopener noreferrer">
        View This Week's Bulletin
      </a>
    </p>
  );
}
