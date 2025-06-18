// src/hooks/useLatestPdf.js
import { useEffect, useState } from "react";

const FOLDER_ID = "1SIrrTZVTsGwOm2itvdFs1FrAa53fydoa";
const API_KEY = "AIzaSyBwpGY4D8V2aDmTFDd7lrbfUxzv7SQPTbU";
const CACHE_KEY_URL = "latestPdfUrl";
const CACHE_KEY_TIMESTAMP = "latestPdfTimestamp";
const CACHE_DURATION_MS = 1000 * 60 * 60; // 1 hour

const useLatestPdf = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestPdf = async () => {
      const cachedUrl = localStorage.getItem(CACHE_KEY_URL);
      const cachedTime = localStorage.getItem(CACHE_KEY_TIMESTAMP);
      const isFresh =
        cachedUrl &&
        cachedTime &&
        Date.now() - parseInt(cachedTime) < CACHE_DURATION_MS;

      if (isFresh) {
        console.log("⚡ Using cached PDF URL");
        setPdfUrl(cachedUrl);
        return;
      }

      console.log("📥 Fetching latest PDF from Google Drive...");

      try {
        const listUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='application/pdf'&orderBy=modifiedTime+desc&fields=files(id,name)&key=${API_KEY}`;
        console.log("🔗 Google Drive list URL:", listUrl);

        const res = await fetch(listUrl);
        const data = await res.json();

        console.log("📄 Drive API response:", data);

        if (!data.files || data.files.length === 0) {
          console.warn("⚠️ No PDF files found in folder");
          setError("No PDF files found in folder");
          return;
        }

        const latestFile = data.files[0];
        const pdfLink = `https://drive.google.com/file/d/${latestFile.id}/view`;

        setPdfUrl(pdfLink);
        localStorage.setItem(CACHE_KEY_URL, pdfLink);
        localStorage.setItem(CACHE_KEY_TIMESTAMP, Date.now().toString());

        console.log("✅ Latest file:", latestFile.name);
        console.log("🔗 Direct PDF URL:", pdfLink);
      } catch (err) {
        console.error("❌ Failed to fetch PDF:", err);
        setError("Failed to fetch PDF");
      }
    };

    fetchLatestPdf();
  }, []);

  return { pdfUrl, error };
};

export default useLatestPdf;
