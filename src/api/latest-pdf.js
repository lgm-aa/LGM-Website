// server/api/latest-pdf.js

const folderId = "1SIrrTZVTsGwOm2itvdFs1FrAa53fydoa";

// 🧠 In-memory cache
let cachedPdf = null;
let cachedAt = null;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export default function registerLatestPdfRoute(app, API_KEY) {
  app.get("/api/latest-pdf", async (req, res) => {
    try {
      const now = Date.now();

      // ✅ Serve from cache if available and fresh
      if (cachedPdf && cachedAt && now - cachedAt < CACHE_DURATION_MS) {
        console.log("✅ Serving cached PDF");
        return res.json(cachedPdf);
      }

      if (!API_KEY) {
        console.error("❌ Missing API Key");
        return res.status(500).json({ error: "Missing API key" });
      }

      // Step 1: List PDFs in the folder
      const listUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&fields=files(id,name)&key=${API_KEY}`;
      console.log("📥 Fetching PDF list:", listUrl);

      const listRes = await fetch(listUrl);
      const listData = await listRes.json();

      if (!listData.files || listData.files.length === 0) {
        console.warn("⚠️ No PDFs found.");
        return res.status(404).json({ error: "No PDFs found in folder." });
      }

      const file = listData.files[0];
      const fileId = file.id;

      // Step 2: Get file metadata (web view link)
      const metaUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?fields=name,webViewLink&key=${API_KEY}`;
      const metadataRes = await fetch(metaUrl);
      const metadata = await metadataRes.json();

      if (!metadata.webViewLink) {
        throw new Error("webViewLink not found. Make sure the file is shared publicly.");
      }

      const result = {
        id: fileId,
        name: metadata.name,
        viewUrl: metadata.webViewLink,
      };

      // ✅ Store in cache
      cachedPdf = result;
      cachedAt = now;

      console.log("✅ New PDF fetched and cached");
      res.json(result);
    } catch (err) {
      console.error("🔥 Google Drive API error:", err);
      res.status(500).json({
        error: "Failed to fetch PDF file",
        details: err.message || "Unknown server error",
      });
    }
  });
}
