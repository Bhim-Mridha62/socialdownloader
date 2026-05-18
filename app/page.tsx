import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Downloader from "@/components/Downloader";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-800 leading-tight">
            Download Anything, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              From Anywhere.
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            The fastest, cleanest way to download videos and audio from your favorite social media platforms in Full HD & 4K quality.
          </p>
        </div>

        {/* Downloader Widget */}
        <Downloader platform="all" />

        {/* Dynamic AdSense Friendly Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Lightning Fast Processing</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our advanced cloud API processors fetch, parse, and serve your media requests instantly with top speeds.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <div className="w-12 h-12 bg-green-100 text-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z"></path></svg>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">No Adware & Popups</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Tired of websites redirecting you to suspicious spam links? SocialDownloader streams directly without redirects.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl border-slate-100 bg-white shadow-sm">
            <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Multiple Audio & Video Resolutions</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We extract all available video qualities (1080p, 720p, 360p) as well as MP3 audio extractions automatically.
            </p>
          </div>
        </div>

        {/* Detailed High-Value AdSense & SEO Content */}
        <section className="mt-20 prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
            Ultimate All-in-One Online Social Media Downloader
          </h2>
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              In today's digital era, social media platforms are filled with amazing educational tutorials, funny clips, 
              captivating reels, and high-energy music videos. However, most popular platforms like <strong>YouTube, Instagram, 
              Facebook, and TikTok</strong> do not provide an official offline download button. This is why we created 
              <strong> SocialDownloader</strong> — your premium, lightweight, and completely free web utility to save 
              your favorite social media posts directly to your smartphone, tablet, or desktop computer.
            </p>

            <h3 className="text-xl font-bold text-slate-800">Supported Platforms & Direct Extraction Services</h3>
            <p>
              We provide state-of-the-art server-side scrapers designed specifically to access public CDNs and stream the raw file 
              to your browser safely. Here are the core services you can enjoy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>YouTube to MP4 Downloader:</strong> Instantly fetch high-definition YouTube videos and extract them into high-quality MP4 file containers.</li>
              <li><strong>YouTube to MP3 Converter:</strong> Extract crystal-clear audio at 128kbps for offline offline music playback, podcasts, and sound clips.</li>
              <li><strong>Instagram Reels & Video Downloader:</strong> Anonymously save Instagram Reels, videos, posts, and IGTV clips in their native resolutions.</li>
              <li><strong>Facebook HD Downloader:</strong> Grab Facebook videos in High Definition (HD) or Standard Definition (SD) without log-ins.</li>
              <li><strong>TikTok No-Watermark Downloader:</strong> Get TikTok videos cleanly without any distracting watermarks or logos.</li>
              <li><strong>Twitter/X Video Downloader:</strong> Download videos and GIFs embedded in tweets seamlessly.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800">How to Use SocialDownloader Online?</h3>
            <p>
              We pride ourselves on offering a simple 3-step process that eliminates redirects and complicated steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Copy Link:</strong> Go to your favorite social platform, select the video or post, and copy the URL.</li>
              <li><strong>Paste & Analyze:</strong> Paste the copied link inside our clean light-mode search bar above and click the "Download" button.</li>
              <li><strong>Choose Quality & Save:</strong> Review the media thumbnail and duration. Choose your preferred quality format (MP4 or MP3) from the generated options table and click "Download File" to instantly start the direct proxy download.</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-800">Why SocialDownloader is the Best Choice?</h3>
            <p>
              Unlike traditional downloaders, we prioritize user safety and speed. Traditional websites utilize invasive redirect advertisements, 
              pop-ups, and background malware miners. SocialDownloader processes the file on our secure proxy servers, feeding the download stream 
              directly to you. The external site will never know your identity, and your downloads remain completely anonymous and safe.
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Is SocialDownloader free to use?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Yes! Our service is 100% free, requiring no user registration, monthly subscriptions, or software installations. It works completely online via your web browser.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Can I download private social media videos?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No, our downloader can only process media that is public. We respect the privacy policies of social media creators and cannot download private or restricted posts.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Are there any download limits?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                There are absolutely no download limits! You can convert and download as many videos and audios as you want throughout the day.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Why does the proxy download fail sometimes?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Some platforms constantly update their security layers or CDN configurations. If a link fails, wait a few minutes and try again. Our developers constantly update our scrapers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
