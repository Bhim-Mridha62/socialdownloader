"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "All Downloader", href: "/" },
    { name: "YouTube", href: "/youtube" },
    { name: "Instagram", href: "/instagram" },
    { name: "Facebook", href: "/facebook" },
    { name: "TikTok", href: "/tiktok" },
    { name: "Twitter/X", href: "/twitter" },
  ];

  return (
    <header className="py-5 px-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100/80 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:scale-105 transition-all">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">
            Social<span className="text-red-500">Downloader</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-600 justify-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 px-2 rounded-lg hover:text-red-500 ${isActive ? "text-red-500 bg-red-50/50" : "hover:bg-slate-50"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
