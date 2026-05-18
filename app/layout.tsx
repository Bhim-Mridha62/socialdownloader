import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SocialDownloader — Free Video & Audio Downloader",
  description: "Download high-quality videos and audio from YouTube, Facebook, Instagram, and TikTok for free. No redirects, no sign-ups, and unlimited direct downloads.",
  keywords: [
    "social media downloader", "download youtube video", "instagram reels downloader", 
    "facebook video downloader", "tiktok no watermark downloader", "convert youtube to mp3", 
    "twitter video downloader", "x video downloader", "download online videos free"
  ],
  authors: [{ name: "SocialDownloader" }],
  openGraph: {
    title: "SocialDownloader — Free Video & Audio Downloader",
    description: "The fastest way to download videos and audio from social media platforms in HD/4K quality without redirects.",
    type: "website",
  },
  verification: {
    google: "gr3ZksuqWU4rq3ylgFRh0PsArfP1Bjk0XRr2s6lCKI8",
    other: {
      "msvalidate.01": "9A186FC0E3FA57C71D5874C82B367449",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-800 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
