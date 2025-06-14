// server/api/latest-pdf.js
const folderId = "1SIrrTZVTsGwOm2itvdFs1FrAa53fydoa";

export default function registerLatestPdfRoute(app, API_KEY) {
  app.get("/api/latest-pdf", async (req, res) => {
    try {
      if (!API_KEY) {
        console.error("❌ Missing API Key");
        return res.status(500).json({ error: "Missing API key" });
      }

      // Step 1: List PDFs in the folder
      const listUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&fields=files(id,name)&key=${API_KEY}`;
      console.log("📥 Fetching PDF list:", listUrl);

      const listRes = await fetch(listUrl);
      const listData = await listRes.json();
      console.log("📦 Files returned:", JSON.stringify(listData, null, 2));

      if (!listData.files || listData.files.length === 0) {
        console.warn("⚠️ No PDFs found.");
        return res.status(404).json({ error: "No PDFs found in folder." });
      }

      const file = listData.files[0];
      const fileId = file.id;

      // Step 2: Get file metadata
      const metaUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?fields=name,webViewLink&key=${API_KEY}`;
      console.log("📤 Fetching metadata:", metaUrl);

      const metadataRes = await fetch(metaUrl);
      const metadata = await metadataRes.json();
      console.log("🧾 Metadata response:", JSON.stringify(metadata, null, 2));

      if (!metadata.webViewLink) {
        throw new Error("webViewLink not found on file. Check if file is shared publicly.");
      }

      res.json({
        id: fileId,
        name: metadata.name,
        viewUrl: metadata.webViewLink,
      });
    } catch (err) {
      console.error("🔥 Google Drive API error:", err);
      res.status(500).json({
        error: "Failed to fetch PDF file",
        details: err.message || "Unknown server error"
      });
    }
  });
}
