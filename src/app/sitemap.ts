import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ultimatebond.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}