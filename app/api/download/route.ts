import { NextRequest, NextResponse } from "next/server";
import btch from "btch-downloader";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { url, type } = body;

        if (!url) {
            return NextResponse.json({ error: "URL required" }, { status: 400 });
        }

        if ((type === 'video' || type === 'mp3') && (url.includes('youtube.com') || url.includes('youtu.be'))) {
            // YouTube specific
            const result: any = await btch.youtube(url);
            console.log("YouTube Result:", result);
            if (!result || !result.status) {
                return NextResponse.json({ error: "Could not fetch YouTube video." }, { status: 400 });
            }

            const sources = [];
            if (type === 'mp3') {
                sources.push({ quality: '128kbps', url: result.mp3, render: false });
            } else {
                sources.push({ quality: '720p (HD)', url: result.mp4, render: false });
            }

            return NextResponse.json({
                success: true,
                title: result.title || "YouTube Video",
                thumbnail: result.thumbnail,
                duration: result.duration || "N/A",
                sources: sources
            });
        } else {
            // Social (Instagram, Facebook, etc.)
            let result: any;
            let sources: any[] = [];
            let title = "Social Media Video";
            let thumbnail = "";

            if (url.includes('instagram.com')) {
                result = await btch.igdl(url);
                console.log("Instagram Result:", result);
                if (result && result.result) {
                    result.result.forEach((item: any) => {
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
                    result.forEach((item: any) => {
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
                 return NextResponse.json({ error: "Could not fetch media quality options." }, { status: 400 });
            }

            return NextResponse.json({
                success: true,
                title: title,
                thumbnail: thumbnail,
                sources: sources
            });
        }
    } catch (error) {
        console.error("Download Error:", error);
        return NextResponse.json({ error: "Download failed. Check server logs." }, { status: 500 });
    }
}
