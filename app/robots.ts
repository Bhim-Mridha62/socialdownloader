import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = "https://socialdownloader-ten.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
