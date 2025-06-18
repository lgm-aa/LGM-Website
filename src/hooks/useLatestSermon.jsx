import { useEffect, useState } from "react";

export default function useLatestSermon() {
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBase = import.meta.env.VITE_API_BASE || ""; // fallback for local dev

  useEffect(() => {
    async function fetchSermon() {
      try {
        console.log("🔄 Fetching latest sermon...");
        const res = await fetch(`${apiBase}/api/latest-sermon`);

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(
            `Fetch failed: ${res.status} ${res.statusText} - ${errorText}`
          );
        }

        const data = await res.json();
        console.log("✅ Sermon fetched:", data);
        setSermon(data);
      } catch (err) {
        console.error("❌ Failed to fetch latest sermon:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSermon();
  }, [apiBase]);

  return { sermon, loading, error };
}
