import { useEffect, useState } from "react";

export default function useLatestSermon() {
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSermon() {
      try {
        const res = await fetch("/api/latest-sermon");
        if (!res.ok) throw new Error("Failed to fetch sermon");
        const data = await res.json();
        setSermon(data);
      } catch (err) {
        console.error("Failed to fetch latest sermon:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSermon();
  }, []);

  //   console.log(sermon);
  return { sermon, loading, error };
}
