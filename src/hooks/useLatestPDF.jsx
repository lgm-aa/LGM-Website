import { useEffect, useState } from "react";

export default function useLatestPDF() {
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiBase = import.meta.env.VITE_API_BASE || ""; // fallback for local dev

  useEffect(() => {
    fetch(`${apiBase}/api/latest-pdf`)
      .then((res) => res.json())
      .then((data) => {
        setPdf(data);
      })
      .catch((err) => {
        console.error("Error loading PDF:", err);
      })
      .finally(() => setLoading(false));
  }, [apiBase]);

  return { pdf, loading };
}
