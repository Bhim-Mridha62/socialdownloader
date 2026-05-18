import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-4 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
              </svg>
            </div>
            <span className="font-bold text-slate-800">SocialDownloader</span>
          </div>
          <p className="text-slate-400 text-xs">
            © 2026 SocialDownloader. Free and high-quality online media downloader proxy tool.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link href="/youtube" className="hover:text-red-500 transition-colors">YouTube Downloader</Link>
          <Link href="/instagram" className="hover:text-red-500 transition-colors">Instagram Downloader</Link>
          <Link href="/facebook" className="hover:text-red-500 transition-colors">Facebook Downloader</Link>
          <Link href="/tiktok" className="hover:text-red-500 transition-colors">TikTok Downloader</Link>
          <Link href="/twitter" className="hover:text-red-500 transition-colors">Twitter Downloader</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-slate-100 mt-8 pt-6 text-center text-[10px] text-slate-400">
        Disclaimer: This online utility is only for personal, non-commercial purposes. We do not host any copyrighted videos on our servers. All media streamed directly from official CDN nodes.
      </div>
    </footer>
  );
}
