import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Replace with your actual production domain when deploying
  const domain = "https://socialdownloader.online";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
