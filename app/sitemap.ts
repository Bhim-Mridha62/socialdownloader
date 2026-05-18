import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual production domain when deploying
  const domain = "https://socialdownloader.online";

  const routes = ["", "/youtube", "/instagram", "/facebook", "/tiktok", "/twitter"];

  return routes.map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
