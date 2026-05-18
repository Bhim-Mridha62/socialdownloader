import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Downloader from "@/components/Downloader";

export const metadata: Metadata = {
  title: "Instagram Downloader — Save Reels, Videos, & Photos Online",
  description: "Free and fast Instagram Downloader. Download Instagram Reels, videos, IGTV, and photos in high quality anonymously. No login required.",
  keywords: [
    "instagram downloader", "instagram reels downloader", "download instagram videos",
    "save instagram reels", "download instagram photos online", "ig downloader", "instagram video saver"
  ],
};

export default function InstagramDownloader() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-pink-600 font-extrabold text-sm uppercase tracking-widest bg-pink-50 px-3 py-1.5 rounded-full">
            Instagram Reels Saver
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-slate-800 leading-tight">
            Instagram Video & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Reels Downloader</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Save Instagram Reels, native posts, and IGTV videos in Full HD MP4 directly to your camera roll.
          </p>
        </div>

        {/* Custom Instagram Downloader Widget */}
        <Downloader platform="instagram" />

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">Anonymous Reels Saving</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Download Instagram Reels in their original HD quality cleanly. No login or authentication is required, meaning your actions remain completely private.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">Original Audio & Video</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We extract direct CDN streams to preserve high-fidelity audio tracks and vibrant 1080p resolution parameters during the proxy process.
            </p>
          </div>
        </div>

        {/* SEO Article */}
        <section className="mt-20 prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            How to Download Instagram Reels & Videos Anonymously?
          </h2>
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              Instagram has transformed into a global visual sharing platform, highlighting incredible travel spots, inspiring cooking reels, 
              artistic clips, and personal vlogs. Since Instagram's app does not support downloading public posts straight to your mobile gallery, 
              our <strong>Instagram Downloader</strong> is designed to bypass this limit cleanly.
            </p>

            <h3 className="text-xl font-bold text-slate-800">Advanced Features of Our Instagram Downloader</h3>
            <p>
              Whether you are an aspiring content creator seeking references or simply compiling a collection of inspirational videos for personal 
              study, our tool simplifies the entire workflow:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Secure Proxy Servers:</strong> We tunnel our fetch requests through backend proxies so that Instagram never logs your IP address or account identifiers.</li>
              <li><strong>High Resolution MP4s:</strong> Get native quality MP4 outputs without heavy lossy conversions.</li>
              <li><strong>Photo Extractor:</strong> We also support public post photos. If you paste a multi-image carousel or photo post, we fetch the source image in the highest resolution.</li>
              <li><strong>No Third-Party Redirects:</strong> We directly stream the media, completely keeping you away from harmful advertisement networks.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800">Steps to Save Instagram Content Directly</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open Instagram on your device, open the target post or Reel, and click the three dots icon to copy the post link.</li>
              <li>Open our Instagram Downloader page, and paste the URL in the input field above.</li>
              <li>Press the "Download" button to let our backend scraper analyze the post details.</li>
              <li>Once loaded, review the video thumbnail, and click "Download File" to instantly start the direct proxy download stream.</li>
            </ol>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
            Instagram Downloader FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Do I need to log into my Instagram account?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No, you never have to log in or enter your credentials. Our tool operates completely externally, keeping your profile secure.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Can I download Reels from private Instagram accounts?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No. Instagram's architecture heavily secures private profiles, blocking external scraping servers. Our tool can only process links from public accounts.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Is there a cost associated with downloading?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No, this online downloader is completely free and unlimited for all personal and educational purposes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
