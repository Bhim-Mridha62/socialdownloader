const express = require("express");
const cors = require("cors");
const path = require("path");
const btch = require("btch-downloader");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/*
========================================
All-in-One Social Media Downloader API
========================================
*/

const { Readable } = require("stream");

app.get("/api/proxy", async (req, res) => {
    const { url, filename } = req.query;
    if (!url) return res.status(400).send("URL is required");

    try {
        const response = await fetch(decodeURIComponent(url), {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

        const contentType = response.headers.get("content-type");
        const contentLength = response.headers.get("content-length");

        res.setHeader("Content-Disposition", `attachment; filename="${filename || 'video.mp4'}"`);
        if (contentType) res.setHeader("Content-Type", contentType);
        if (contentLength) res.setHeader("Content-Length", contentLength);

        Readable.fromWeb(response.body).pipe(res);
    } catch (error) {
        console.error("Proxy Error:", error);
        res.status(500).send("Failed to download video");
    }
});

app.post("/api/download", async (req, res) => {
    const { url, type } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL required" });
    }

    try {
        if ((type === 'video' || type === 'mp3') && (url.includes('youtube.com') || url.includes('youtu.be'))) {
            // YouTube specific
            const result = await btch.youtube(url);
            console.log("YouTube Result:", result);
            if (!result || !result.status) {
                return res.status(400).json({ error: "Could not fetch YouTube video." });
            }

            const sources = [];
            if (type === 'mp3') {
                sources.push({ quality: '128kbps', url: result.mp3, render: false });
            } else {
                sources.push({ quality: '720p (HD)', url: result.mp4, render: false });
            }

            return res.json({
                success: true,
                title: result.title || "YouTube Video",
                thumbnail: result.thumbnail,
                duration: result.duration || "N/A",
                sources: sources
            });
        } else {
            // Social (Instagram, Facebook, etc.)
            let result;
            let sources = [];
            let title = "Social Media Video";
            let thumbnail = "";

            if (url.includes('instagram.com')) {
                result = await btch.igdl(url);
                console.log("Instagram Result:", result);
                // Handle btch igdl structure
                if (result && result.result) {
                    result.result.forEach(item => {
                        if (item.url) sources.push({ quality: 'MP4', url: item.url, render: false });
                    });
                    thumbnail = result.result[0]?.thumbnail || "";
                }
            } else if (url.includes('facebook.com') || url.includes('fb.watch')) {
                result = await btch.fbdown(url);
                console.log("Facebook Result:", result);
                if (result) {
                    if (result.HD) sources.push({ quality: '720p (HD)', url: result.HD, render: false });
                    if (result.Normal_video) sources.push({ quality: '360p (SD)', url: result.Normal_video, render: false });
                    thumbnail = result.thumbnail || "";
                    title = result.title || "Facebook Video";
                }
            } else if (url.includes('tiktok.com')) {
                result = await btch.ttdl(url);
                if (result && result.result) {
                    if (result.result.video) sources.push({ quality: 'HD No Watermark', url: result.result.video, render: false });
                    if (result.result.audio) sources.push({ quality: 'MP3 Audio', url: result.result.audio, render: false });
                    thumbnail = result.result.thumbnail || "";
                    title = result.result.title || "TikTok Video";
                }
            } else if (url.includes('twitter.com') || url.includes('x.com')) {
                result = await btch.twitter(url);
                if (Array.isArray(result)) {
                    result.forEach(item => {
                        sources.push({ quality: item.quality || 'MP4', url: item.url, render: false });
                    });
                }
            } else {
                result = await btch.aio(url);
                if (result && result.result) {
                    sources.push({ quality: 'Download', url: result.result, render: false });
                }
            }

            if (sources.length === 0) {
                 return res.status(400).json({ error: "Could not fetch media quality options." });
            }

            return res.json({
                success: true,
                title: title,
                thumbnail: thumbnail,
                sources: sources
            });
        }
    } catch (error) {
        console.error("Download Error:", error);
        res.status(500).json({ error: "Download failed. Check server logs." });
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});