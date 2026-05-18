import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Downloader from "@/components/Downloader";

export const metadata: Metadata = {
  title: "YouTube Video Downloader & MP3 Converter — Free & Fast",
  description: "Download YouTube videos to MP4 in HD/4K and convert YouTube to MP3 audio online. Fast speed, no redirect popups, and totally free.",
  keywords: [
    "youtube downloader", "youtube to mp3", "youtube to mp4", "youtube video downloader",
    "convert youtube to mp3 online", "download youtube shorts", "save youtube video high quality"
  ],
};

export default function YouTubeDownloader() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-red-500 font-extrabold text-sm uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded-full">
            Fast YouTube Downloader
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-slate-800 leading-tight">
            YouTube Video Downloader <br />
            <span className="text-red-500">& MP3 Converter</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Convert and download YouTube videos, Shorts, and songs directly to your device without redirects.
          </p>
        </div>

        {/* Custom YouTube Downloader Widget */}
        <Downloader platform="youtube" />

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">High Quality MP4 Video Extraction</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Save your favorite YouTube tutorials, movies, and Vlogs in 1080p, 720p HD, and standard resolutions. The choice is yours.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">High Bitrate YouTube to MP3</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Extract audios easily at standard high-quality bitrate. Perfect for making custom offline music collections and saving podcasts.
            </p>
          </div>
        </div>

        {/* SEO Article */}
        <section className="mt-20 prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            Free Online YouTube Video Downloader
          </h2>
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              YouTube is the world's largest video hosting platform, hosting billions of hours of creative tutorials, educational guides, 
              movies, and music. Often, you might want to save YouTube videos for offline viewing during flights, travel, or remote locations 
              with poor internet connectivity. Since YouTube Premium's offline download feature is restricted and paid, our 
              <strong> YouTube Downloader</strong> serves as the perfect online free alternative.
            </p>

            <h3 className="text-xl font-bold text-slate-800">Why Use Our Online YouTube Downloader?</h3>
            <p>
              Many online downloaders use intrusive third-party redirections, push browser extensions that steal personal information, or limit 
              your download speed. We utilize secure node-side extraction pipelines to query public media servers directly. With us, you get:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zero Limits:</strong> Convert and download unlimited videos without throttling constraints.</li>
              <li><strong>No Registrations:</strong> Access the utility immediately without filling out forms or email validations.</li>
              <li><strong>Direct Downloads:</strong> Avoid landing on spam pages. Click download, stream via our proxy server, and save directly to your downloads directory.</li>
              <li><strong>Mobile Friendly:</strong> Responsive light-mode layout works seamlessly on iOS Safari, Android Chrome, and all web browsers.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800">How to Convert YouTube Videos to MP4 & MP3?</h3>
            <p>
              We've designed an extremely simple experience for our visitors:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open YouTube, navigate to the video, and copy its URL from the address bar or the sharing popup.</li>
              <li>Paste the URL inside our dedicated YouTube search bar above.</li>
              <li>Select your target format. Choose <strong>Video</strong> for MP4 files or <strong>Audio (MP3)</strong> to extract sound.</li>
              <li>Click the "Download" button, review the extracted details, and click "Download File" inside the quality table.</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-800">Legal Compliance and Copyright Disclaimer</h3>
            <p>
              Please note that downloading copyrighted content without the permission of the original owner is against YouTube's terms of service. 
              Our YouTube Downloader should only be used to save public domain content, creative commons media, or educational videos where you 
              have explicit authorization from the creator.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
            YouTube Downloader FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Can I download YouTube Shorts?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes! Our engine automatically detects and processes YouTube Shorts URLs. Simply copy the Short's sharing link and paste it into the downloader.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">How fast is the conversion process?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Conversion takes only a few seconds depending on the duration of the YouTube video. Our fast background processors handle everything instantly.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Does this work on iPhone / iPad?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes. iOS modern browsers support direct file downloading. Simply click our "Download File" button, and iOS Safari will download it directly into your Files app.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
