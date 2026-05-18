import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Downloader from "@/components/Downloader";

export const metadata: Metadata = {
  title: "Twitter/X Video Downloader — Download X Videos to MP4 Online",
  description: "Free online Twitter/X Video Downloader. Convert and download Twitter/X videos and GIFs directly to MP4 in high quality for free. No login needed.",
  keywords: [
    "twitter video downloader", "x video downloader", "download twitter videos",
    "save x.com videos online", "twitter gif downloader", "convert twitter video to mp4"
  ],
};

export default function TwitterDownloader() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-slate-800 font-extrabold text-sm uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-full">
            Twitter & X Downloader
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-slate-800 leading-tight">
            Twitter (X) Video Downloader <br />
            <span className="text-slate-500">to High Quality MP4</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Quickly convert Twitter/X status posts to downloadable MP4 videos and GIFs in various resolution options.
          </p>
        </div>

        {/* Custom Twitter Downloader Widget */}
        <Downloader platform="twitter" />

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">Convert Embedded GIFs to MP4</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Twitter loops GIFs using proprietary player wrappers. Our advanced tool parses the status structure to extract the direct MP4 file cleanly.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">Multi-Resolution Options</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Whenever available, our Twitter media fetcher will locate multiple resolution configurations (HD, Medium, SD) for your convenience.
            </p>
          </div>
        </div>

        {/* SEO Article */}
        <section className="mt-20 prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            Free Online Twitter/X Video Downloader
          </h2>
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              Twitter (now rebranded as X) is a primary source of hot news, trending tech updates, gaming highlights, and funny memes. 
              Users share hundreds of thousands of engaging videos and looping GIFs every single day. Since X does not offer an official button 
              to save these clips locally, our <strong>Twitter Video Downloader</strong> provides a fast, reliable, and completely free way 
              to extract these videos as standard MP4 files.
            </p>

            <h3 className="text-xl font-bold text-slate-800">Why Use Our Twitter (X) Video Downloader?</h3>
            <p>
              Other downloaders require you to log into your Twitter account or flood your browser with pop-ups. We provide a completely streamlined tool:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Completely Safe & Anonymous:</strong> No log-ins or browser extensions needed. Protect your privacy completely.</li>
              <li><strong>GIF to MP4 Conversion:</strong> We convert Twitter's looping GIFs to standard playable MP4 formats automatically.</li>
              <li><strong>Zero Cost:</strong> Unlimited downloads for all public posts. Enjoy top proxy bandwidth for free.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800">How to Save Videos from Twitter / X?</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Find the tweet containing the video or GIF you want to save.</li>
              <li>Click the share icon and select "Copy Link". Alternatively, copy the URL from your web browser's address bar.</li>
              <li>Paste the link inside our Twitter downloader search field above.</li>
              <li>Click the "Download" button to trigger the media parser.</li>
              <li>Choose your preferred resolution from the quality options table and click "Download File".</li>
            </ol>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
            Twitter Video Downloader FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Can I download videos from private Twitter/X accounts?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No. If an account has its tweets protected (private), our server cannot access the media structure. We only support public posts.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Does this downloader host videos on its servers?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No, we do not host or archive any videos on our servers. All videos are fetched directly from Twitter's CDN servers and streamed to you via proxy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
