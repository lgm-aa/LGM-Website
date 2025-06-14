// server/index.js
import express from "express";
import dotenv from "dotenv";
import registerLatestPdfRoute from "../src/api/latest-pdf.js";

dotenv.config();

const app = express();
const PORT = 5001;

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCFN3i5-SUCJctC_h5hMiBBw"; // Living Grace Ministry

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
    if (!API_KEY) {
      console.error("Missing YOUTUBE_API_KEY");
      return res.status(500).json({ error: "Missing YouTube API key" });
    }

    const { publishedAfter, publishedBefore } = getLastSundayTimeRange();
    console.log("Looking for videos posted between:", publishedAfter, "and", publishedBefore);

    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=5&type=video&publishedAfter=${publishedAfter}&publishedBefore=${publishedBefore}`
    );
    const searchData = await searchRes.json();

    const videoIds = searchData.items.map((item) => item.id.videoId).join(",");
    if (!videoIds) {
      console.warn("No videos found on Sunday.");
      return res.status(404).json({ error: "No Sunday videos found" });
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

    res.json({
      videoId: uploadedVideo.id,
      title: uploadedVideo.snippet.title,
      thumbnail: uploadedVideo.snippet.thumbnails?.high?.url,
      publishedAt: uploadedVideo.snippet.publishedAt,
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
