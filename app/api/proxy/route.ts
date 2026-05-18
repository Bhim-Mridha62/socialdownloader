import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    const filename = searchParams.get("filename");

    if (!url) {
        return new NextResponse("URL is required", { status: 400 });
    }

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const headers = new Headers();
        
        // Robust RFC 5987 Content-Disposition formatting to handle unicode characters like emojis without throwing ByteString errors in Node.js / standard Headers
        let cleanFilename = (filename || 'video.mp4').replace(/[^\x20-\x7E]/g, '');
        if (!cleanFilename.trim()) {
            cleanFilename = 'video.mp4';
        }
        const encodedFilename = encodeURIComponent(filename || 'video.mp4');
        headers.set("Content-Disposition", `attachment; filename="${cleanFilename}"; filename*=UTF-8''${encodedFilename}`);
        
        const contentType = response.headers.get("content-type");
        if (contentType) headers.set("Content-Type", contentType);
        
        const contentLength = response.headers.get("content-length");
        if (contentLength) headers.set("Content-Length", contentLength);

        return new NextResponse(response.body, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error("Proxy Error:", error);
        return new NextResponse("Failed to download video", { status: 500 });
    }
}
