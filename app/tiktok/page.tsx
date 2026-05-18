import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Downloader from "@/components/Downloader";

export const metadata: Metadata = {
  title: "TikTok Downloader Without Watermark — Save TikTok Videos Online",
  description: "Free and fast online TikTok Downloader. Save TikTok videos in Full HD quality without watermarks or logos. No registration, unlimited downloads.",
  keywords: [
    "tiktok downloader", "download tiktok video", "tiktok downloader no watermark",
    "save tiktok video without watermark", "tiktok to mp3", "download tiktok music"
  ],
};

export default function TikTokDownloader() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-extrabold text-sm uppercase tracking-widest bg-teal-50 px-3 py-1.5 rounded-full">
            No Watermark Downloader
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-slate-800 leading-tight">
            TikTok Video Downloader <br />
            <span className="text-teal-600">Without Watermark</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Extract clean TikTok videos in High Definition without the moving watermark or platform logos.
          </p>
        </div>

        {/* Custom TikTok Downloader Widget */}
        <Downloader platform="tiktok" />

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">Completely Clean Videos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We cleanly filter out watermark assets, giving you pristine source MP4 files that are perfect for compiling reactions, edits, or saving offline backups.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">TikTok MP3 Audio Extractor</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Love a trending background sound? Our scraper automatically isolates the original audio file so you can download it as high-quality MP3 directly.
            </p>
          </div>
        </div>

        {/* SEO Article */}
        <section className="mt-20 prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            How to Download TikTok Videos Online Without Watermark?
          </h2>
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              TikTok has revolutionized visual media, showcasing high-energy transitions, viral dances, educational fast-facts, and trending challenges. 
              While the official TikTok app lets you download some videos natively, it stamps a heavy, moving watermark and logo across the screen. 
              This makes sharing or reusing the clip highly distracting. Our online <strong>TikTok Downloader</strong> extracts the clean source video, 
              giving you a high-definition, watermark-free result.
            </p>

            <h3 className="text-xl font-bold text-slate-800">Why Choose SocialDownloader TikTok Tool?</h3>
            <p>
              Many tools require you to download invasive apps, pay subscriptions, or deal with annoying popup ads. We stand out by offering:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Perfect Watermark Removal:</strong> Direct API scraping isolates the exact raw MP4 stream before platform watermarks are merged.</li>
              <li><strong>Integrated MP3 Audio Saver:</strong> Get direct access to trending sounds for offline music or ringtone creation.</li>
              <li><strong>Total Anonymity:</strong> You do not need to register, linking no accounts during the process.</li>
              <li><strong>Safe & Secure Proxying:</strong> No virus threats or redirected malware. We process the download cleanly.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800">4 Simple Steps to Get Clean TikTok Videos</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open TikTok, open the target video post, and copy the share link.</li>
              <li>Open our TikTok Downloader page and paste the link in the input box above.</li>
              <li>Click the "Download" button to run our fast cloud scraper.</li>
              <li>Once the video details load, choose "HD No Watermark" (or "MP3 Audio" if you just want the sound) and click "Download File".</li>
            </ol>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
            TikTok Downloader FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Are there any limits on downloading TikTok videos?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No, there are absolutely no download limits! You can extract and save as many TikTok videos as you wish completely for free.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Can I download private TikTok videos?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No. The private status of TikTok videos is locked down behind user authorization. Our scrapers only interact with public media files.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
