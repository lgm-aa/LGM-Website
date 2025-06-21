import { useEffect, useState } from "react";

const API_KEY = "AIzaSyBwpGY4D8V2aDmTFDd7lrbfUxzv7SQPTbU";
const CHANNEL_ID = "UCFN3i5-SUCJctC_h5hMiBBw";
const CACHE_KEY_SERMON = "latestSermonData";
const CACHE_KEY_TIMESTAMP = "latestSermonTimestamp";
const CACHE_DURATION_MS = 1000 * 60 * 60; // 1 hour

function getLastSundayTimeRange() {
  const now = new Date();
  const day = now.getDay(); // Sunday = 0
  const daysSinceSunday = day === 0 ? 0 : day;
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - daysSinceSunday);
  sunday.setHours(0, 0, 0, 0);

  const sundayEnd = new Date(sunday);
  sundayEnd.setHours(23, 59, 59, 999);

  console.log("📅 Sunday Time Range:");
  console.log("↪️ publishedAfter:", sunday.toISOString());
  console.log("↩️ publishedBefore:", sundayEnd.toISOString());

  return {
    publishedAfter: sunday.toISOString(),
    publishedBefore: sundayEnd.toISOString(),
  };
}

function getPreviousSundayISOString() {
  const now = new Date();
  const day = now.getDay(); // Sunday = 0
  const diff = day === 0 ? 7 : day; // If today is Sunday, go back a full week
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - diff);
  sunday.setHours(0, 0, 0, 0);
  return sunday.toISOString();
}

const useLatestSermon = () => {
  const [sermon, setSermon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestSermon = async () => {
      const cachedSermon = localStorage.getItem(CACHE_KEY_SERMON);
      const cachedTime = localStorage.getItem(CACHE_KEY_TIMESTAMP);
      const isFresh =
        cachedSermon &&
        cachedTime &&
        Date.now() - parseInt(cachedTime) < CACHE_DURATION_MS;

      if (isFresh) {
        const parsed = JSON.parse(cachedSermon);
        console.log("⚡ Using cached sermon:", parsed);
        setSermon(parsed);
        return;
      }

      console.log("🚀 Fetching latest sermon from YouTube...");
      try {
        const { publishedAfter, publishedBefore } = getLastSundayTimeRange();

        const searchUrl =
          `https://www.googleapis.com/youtube/v3/search?` +
          `key=${API_KEY}` +
          `&channelId=${CHANNEL_ID}` +
          `&part=snippet` +
          `&order=date` +
          `&maxResults=5` +
          `&type=video` +
          `&publishedAfter=${publishedAfter}` +
          `&publishedBefore=${publishedBefore}`;

        console.log("🔍 YouTube Search URL:", searchUrl);

        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        console.log("📦 YouTube Search Response:", searchData);

        const videoIds = searchData.items
          .map((item) => item.id.videoId)
          .filter(Boolean)
          .join(",");

        console.log("🎯 Extracted video IDs:", videoIds);

        if (!videoIds) {
          console.warn(
            "⚠️ No videos found for last Sunday. Falling back to channel."
          );
          setSermon({
            videoId: null,
            title: "Visit our YouTube Channel",
            publishedAt: null,
            fallbackUrl: "https://www.youtube.com/@LivingGraceMinistry",
          });
          return;
        }
        const videoDetailUrl =
          `https://www.googleapis.com/youtube/v3/videos?` +
          `key=${API_KEY}&id=${videoIds}&part=snippet`;

        console.log("📥 YouTube Video Details URL:", videoDetailUrl);

        const videosRes = await fetch(videoDetailUrl);
        const videosData = await videosRes.json();

        console.log("📦 Video Details Response:", videosData);

        const nonLivestreamVideos = videosData.items.filter(
          (video) =>
            video.snippet.liveBroadcastContent === "none" &&
            !video.snippet.title.toLowerCase().includes("livestream")
        );

        if (nonLivestreamVideos.length === 0) {
          console.warn(
            "⚠️ No suitable sermon videos found. Falling back to channel."
          );
          setSermon({
            videoId: null,
            title: "Visit our YouTube Channel",
            publishedAt: null,
            fallbackUrl: "https://www.youtube.com/@LivingGraceMinistry",
          });
          return;
        }

        const uploadedVideo = nonLivestreamVideos[0];

        const sermonData = {
          videoId: uploadedVideo.id,
          title: uploadedVideo.snippet.title,
          publishedAt: getPreviousSundayISOString(),
          fallbackUrl: "https://www.youtube.com/@LivingGraceMinistry",
        };

        console.log("✅ Final Sermon Object:", sermonData);

        setSermon(sermonData);
        localStorage.setItem(CACHE_KEY_SERMON, JSON.stringify(sermonData));
        localStorage.setItem(CACHE_KEY_TIMESTAMP, Date.now().toString());
      } catch (err) {
        console.error("❌ YouTube fetch failed:", err);
        setError("Failed to fetch sermon");
      }
    };

    fetchLatestSermon();
  }, []);

  return { sermon, error };
};

export default useLatestSermon;
