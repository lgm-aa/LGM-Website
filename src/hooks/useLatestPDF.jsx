import { useEffect, useState } from "react";

export default function useLatestPDF() {
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/latest-pdf")
      .then((res) => res.json())
      .then((data) => {
        setPdf(data);
      })
      .catch((err) => {
        console.error("Error loading PDF:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { pdf, loading };
}
