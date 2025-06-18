// pages/api/latest-sermon.js

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCFN3i5-SUCJctC_h5hMiBBw"; // Replace if needed

// Utility: Get most recent Sunday time window
function getLastSundayTimeRange() {
  const now = new Date();
  const day = now.getDay(); // Sunday = 0
  const daysSinceSunday = day === 0 ? 0 : day;
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - daysSinceSunday);
  sunday.setHours(0, 0, 0, 0);

  const sundayEnd = new Date(sunday);
  sundayEnd.setHours(23, 59, 59, 999);

  console.log(sunday);
  console.log(sundayEnd);
  return {
    publishedAfter: sunday.toISOString(),
    publishedBefore: sundayEnd.toISOString(),
  };
}

export default async function handler(req, res) {
  try {
    const { publishedAfter, publishedBefore } = getLastSundayTimeRange();

    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?` +
        `key=${API_KEY}` +
        `&channelId=${CHANNEL_ID}` +
        `&part=snippet` +
        `&order=date` +
        `&maxResults=5` +
        `&type=video` +
        `&publishedAfter=${publishedAfter}` +
        `&publishedBefore=${publishedBefore}`
    );
    const searchData = await searchRes.json();

    const videoIds = searchData.items.map((item) => item.id.videoId).join(",");
    if (!videoIds) {
      return res.status(404).json({ error: "No videos found on last Sunday." });
    }

    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet`
    );
    const videosData = await videosRes.json();

    const uploadedVideo = videosData.items.find(
      (video) => video.snippet.liveBroadcastContent === "none"
    );

    if (!uploadedVideo) {
      return res
        .status(404)
        .json({ error: "No uploaded (non-livestream) videos found." });
    }

    res.status(200).json({ videoId: uploadedVideo.id });
  } catch (error) {
    console.error("YouTube API error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
