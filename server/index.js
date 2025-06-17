import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import registerLatestPdfRoute from "../src/api/latest-pdf.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Support for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend files from Vite build
app.use(express.static(path.join(__dirname, "../dist")));

// Handle client-side routing (e.g., React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCFN3i5-SUCJctC_h5hMiBBw"; // Living Grace Ministry

// Cache variables
let cachedSermon = null;
let cachedAt = null;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

// Register Google Drive PDF API route
registerLatestPdfRoute(app, API_KEY);

// Helper: Get time range for most recent Sunday
function getLastSundayTimeRange() {
  const now = new Date();
  const day = now.getDay(); // Sunday = 0
  const daysSinceSunday = day === 0 ? 0 : day;
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - daysSinceSunday);
  sunday.setHours(0, 0, 0, 0);
  const sundayEnd = new Date(sunday);
  sundayEnd.setHours(23, 59, 59, 999);
  return {
    publishedAfter: sunday.toISOString(),
    publishedBefore: sundayEnd.toISOString(),
  };
}

// Register YouTube sermon route
app.get("/api/latest-sermon", async (req, res) => {
  try {
    const now = Date.now();

    if (cachedSermon && cachedAt && now - cachedAt < CACHE_DURATION_MS) {
      console.log("✅ Serving cached sermon");
      return res.json(cachedSermon);
    }

    if (!API_KEY) {
      console.error("Missing YOUTUBE_API_KEY");
      return res.status(500).json({ error: "Missing YouTube API key" });
    }

    const { publishedAfter, publishedBefore } = getLastSundayTimeRange();
    console.log("Looking for videos posted between:", publishedAfter, "and", publishedBefore);

    const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=5&type=video&publishedAfter=${publishedAfter}&publishedBefore=${publishedBefore}`;
    const searchRes = await fetch(searchUrl);

    if (!searchRes.ok) {
      const text = await searchRes.text();
      console.error("YouTube API request failed:", searchRes.status, searchRes.statusText, text);
      return res.status(500).json({ error: "YouTube API request failed" });
    }

    const searchData = await searchRes.json();

    if (!searchData || !Array.isArray(searchData.items)) {
      console.error("Unexpected YouTube API response format:", JSON.stringify(searchData, null, 2));
      return res.status(500).json({ error: "Malformed YouTube API response" });
    }

    const videoIds = searchData.items.map((item) => item.id.videoId).filter(Boolean).join(",");
    if (!videoIds) {
      console.warn("No video IDs found in search results.");
      return res.status(404).json({ error: "No valid video IDs found" });
    }

    const detailsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet`
    );
    const detailsData = await detailsRes.json();

    const uploadedVideo = detailsData.items.find(
      (video) => video.snippet.liveBroadcastContent === "none"
    );

    if (!uploadedVideo) {
      console.warn("No true uploads found (only livestreams?)");
      return res.status(404).json({ error: "No uploaded videos found" });
    }

    const result = {
      videoId: uploadedVideo.id,
      title: uploadedVideo.snippet.title,
      thumbnail: uploadedVideo.snippet.thumbnails?.high?.url,
      publishedAt: uploadedVideo.snippet.publishedAt,
    };

    cachedSermon = result;
    cachedAt = now;

    console.log("✅ New sermon fetched and cached");
    res.json(result);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
