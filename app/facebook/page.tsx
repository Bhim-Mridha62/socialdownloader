import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Downloader from "@/components/Downloader";

export const metadata: Metadata = {
  title: "Facebook Video Downloader — Download FB Videos in HD/SD Online",
  description: "Free online Facebook Video Downloader. Save Facebook videos, live broadcasts, and FB watch clips in HD quality without redirects. Safe and fast.",
  keywords: [
    "facebook video downloader", "download facebook video", "fb video downloader",
    "save facebook videos hd", "download fb watch video", "facebook downloader free"
  ],
};

export default function FacebookDownloader() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-extrabold text-sm uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
            Safe FB Downloader
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight text-slate-800 leading-tight">
            Facebook Video Downloader <br />
            <span className="text-blue-600">in HD & SD Quality</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Extract and download Facebook videos, live recordings, and reels in pristine quality directly through our server proxy.
          </p>
        </div>

        {/* Custom Facebook Downloader Widget */}
        <Downloader platform="facebook" />

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">High Definition (HD) Support</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Whenever available, our scraper extracts both high-definition (720p/1080p) and standard-definition (360p) streams so you can save data or choose high quality.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-2">Fast Direct Link Proxying</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We stream files directly via proxy, preserving content length headers and enabling full multi-threaded high-speed downloading.
            </p>
          </div>
        </div>

        {/* SEO Article */}
        <section className="mt-20 prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            The Easiest Way to Download Facebook Videos Online
          </h2>
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              Facebook remains one of the largest social hubs, showcasing amazing news highlights, creative cooking channels, 
              funny viral recordings, and educational livestreams. If you've ever wished to save a Facebook video to share with offline friends or 
              backup on your storage drive, our <strong>Facebook Downloader</strong> makes the process completely seamless.
            </p>

            <h3 className="text-xl font-bold text-slate-800">Key Advantages of SocialDownloader Facebook Tool</h3>
            <p>
              Traditional FB downloaders force you to watch long dynamic ads, register accounts, or trick you into installing malicious chrome extensions. 
              We offer a clean, light-mode, and optimized developer pipeline:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>HD & SD Detection:</strong> We scan Facebook video structures to retrieve all public source URLs, allowing you to choose between HD and SD qualities instantly.</li>
              <li><strong>No Redirect Popups:</strong> Your browser stays clean. We stream the file directly from our proxy server to avoid adware.</li>
              <li><strong>Works Everywhere:</strong> Tested and optimized on Windows, macOS, Android, and iOS devices.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800">Quick Guide: How to Save Facebook Watch Videos</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Navigate to Facebook, open the target video post, and copy the video URL from the share menu or your web address bar.</li>
              <li>Paste the Facebook link inside the search box above.</li>
              <li>Click the "Download" button to start the metadata parsing sequence.</li>
              <li>Select your preferred quality (HD Video or SD Video) from the options, and click "Download File" to start the high-speed transfer.</li>
            </ol>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
            Facebook Downloader FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Can I download Facebook Live videos?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes, but only after the live broadcast has ended and the creator has published the replay video as a public post.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Do I need to install software?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No, our online tool operates entirely in your web browser. You do not need to install any mobile apps, extensions, or native desktop tools.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
