"use client";
import { useState, useEffect } from "react";

interface DownloaderProps {
  platform?: "youtube" | "facebook" | "instagram" | "tiktok" | "twitter" | "all";
}

export default function Downloader({ platform = "all" }: DownloaderProps) {
  const [type, setType] = useState("video");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("mp4");

  // Sync state with selected platform
  useEffect(() => {
    if (platform === "youtube") {
      setType("video");
    } else if (platform === "instagram" || platform === "facebook" || platform === "tiktok" || platform === "twitter") {
      setType("social");
    }
  }, [platform]);

  const handleDownload = async () => {
    if (!url) {
      alert("Please paste a valid URL");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, type })
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
        setActiveTab("mp4");
      } else {
        setError(data.error || "Unknown error occurred. Please make sure the link is valid and public.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const getPlaceholder = () => {
    switch (platform) {
      case "youtube": return "Paste YouTube video, shorts, or music link here...";
      case "instagram": return "Paste Instagram video, reels, or photo link here...";
      case "facebook": return "Paste Facebook video or watch link here...";
      case "tiktok": return "Paste TikTok video link here...";
      case "twitter": return "Paste Twitter/X post link here...";
      default: return "Paste post or video URL here...";
    }
  };

  const videoSources = result?.sources?.filter((s: any) => !s.quality.toLowerCase().includes('mp3') && !s.quality.toLowerCase().includes('audio')) || [];
  const audioSources = result?.sources?.filter((s: any) => s.quality.toLowerCase().includes('mp3') || s.quality.toLowerCase().includes('audio')) || [];

  return (
    <>
      <div className="glass rounded-3xl p-8 mb-12 shadow-sm border border-slate-100 bg-white/95">
        {/* Render Tabs ONLY if platform is 'all' (home page) */}
        {platform === "all" && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button onClick={() => setType('video')} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-slate-100 ${type === 'video' ? 'bg-slate-200 text-slate-800' : 'bg-slate-50 text-slate-600'}`}>Video</button>
            <button onClick={() => setType('mp3')} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-slate-100 ${type === 'mp3' ? 'bg-slate-200 text-slate-800' : 'bg-slate-50 text-slate-600'}`}>Audio (MP3)</button>
            <button onClick={() => setType('social')} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-slate-100 ${type === 'social' ? 'bg-slate-200 text-slate-800' : 'bg-slate-50 text-slate-600'}`}>Auto Detect</button>
          </div>
        )}

        <div className="relative flex flex-col md:flex-row gap-3">
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}
            placeholder={getPlaceholder()}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl p-5 pr-6 md:pr-40 outline-none focus:border-red-500/40 focus:bg-white transition-all text-lg placeholder:text-slate-400 text-slate-800" />
          <button onClick={handleDownload} disabled={loading}
            className="md:absolute md:right-2 md:top-2 md:bottom-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 md:py-0 rounded-xl font-bold transition-all shadow-md shadow-red-500/10 active:scale-95 disabled:opacity-50">
            {loading ? "Analyzing..." : "Download"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="glass p-8 rounded-3xl flex items-center justify-center gap-4 animate-fade-in mb-12 bg-white/95 border border-slate-100">
          <div className="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-slate-500 font-medium">Extracting download links...</span>
        </div>
      )}

      {error && (
        <div className="glass p-8 rounded-3xl border-red-100 text-center animate-fade-in mb-12 bg-red-50/50">
          <p className="text-red-500 font-semibold mb-2">Analysis Failed</p>
          <p className="text-slate-500 text-sm">{error}</p>
        </div>
      )}

      {result && (
        <div className="glass rounded-3xl overflow-hidden animate-fade-in mb-12 bg-white/95 border border-slate-100">
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-48 shrink-0">
              <div className="relative aspect-video md:aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
                {result.thumbnail ? (
                  <img src={result.thumbnail} className="w-full h-full object-cover" alt="Thumbnail" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  </div>
                )}
                {result.duration && <div className="absolute bottom-2 right-2 bg-black/75 text-xs font-bold px-2 py-1 rounded-md text-white">{result.duration}</div>}
              </div>
            </div>

            <div className="grow w-full">
              <h3 className="text-xl font-bold mb-6 text-slate-800 leading-tight">{result.title}</h3>

              <div className="flex gap-4 border-b border-slate-100 mb-6">
                <button onClick={() => setActiveTab('mp4')} className={`pb-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'mp4' ? 'border-red-500 text-slate-800' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Video Options</button>
                {audioSources.length > 0 && (
                  <button onClick={() => setActiveTab('mp3')} className={`pb-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'mp3' ? 'border-red-500 text-slate-800' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Audio Options</button>
                )}
              </div>

              <div className="overflow-x-auto">
                {activeTab === 'mp4' && videoSources.length === 0 && <p className="text-slate-500 text-sm italic">No options available for this format.</p>}
                {activeTab === 'mp3' && audioSources.length === 0 && <p className="text-slate-500 text-sm italic">No options available for this format.</p>}
                
                {((activeTab === 'mp4' && videoSources.length > 0) || (activeTab === 'mp3' && audioSources.length > 0)) && (
                  <table className="w-full text-left quality-table">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="text-[11px] uppercase tracking-wider text-slate-400 pb-3 font-semibold">Quality / Format</th>
                        <th className="text-[11px] uppercase tracking-wider text-slate-400 pb-3 font-semibold">Extension</th>
                        <th className="text-[11px] uppercase tracking-wider text-right text-slate-400 pb-3 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(activeTab === 'mp4' ? videoSources : audioSources).map((s: any, idx: number) => (
                        <tr key={idx} className="border-t border-slate-50">
                          <td className="font-bold text-sm text-slate-700 py-3">{s.quality}</td>
                          <td className="text-xs text-slate-500 py-3">{activeTab.toUpperCase()}</td>
                          <td className="text-right py-3">
                            <a href={`/api/proxy?url=${encodeURIComponent(s.url)}&filename=${encodeURIComponent(result.title || 'video')}.${activeTab}`}
                               target="_blank" rel="noopener noreferrer"
                               className="inline-block bg-slate-50 hover:bg-red-500 hover:text-white hover:border-red-500 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-all border border-slate-200">
                                Download File
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
