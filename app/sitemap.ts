import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://socialdownloader-ten.vercel.app";

  const routes = [
    "",
    "/youtube",
    "/instagram",
    "/facebook",
    "/tiktok",
    "/twitter",
  ];

  return routes.map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}