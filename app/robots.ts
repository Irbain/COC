import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = process.env.NEXT_PUBLIC_URL;
  const allowed = ["/en", "/fr", "/ar", "/uz", "/ru", "/privacy", "/terms"];

  return {
    rules: [
      // General rules for all bots
      {
        userAgent: "*",
        allow: allowed,
        disallow: ["/private/", "/admin/", "/"],
      },
      // Rules specific to Googlebot
      {
        userAgent: "Googlebot",
        allow: allowed,
        disallow: "/no-google/",
      },
      // Rules specific to Bingbot
      {
        userAgent: "Bingbot",
        allow: allowed,
        disallow: "/bing-no/",
      },
      // Rules specific to Yandex
      {
        userAgent: "Yandex",
        allow: allowed,
        disallow: ["/secret/", "/yandex-no/"],
      },
    ],
    sitemap: `${url}sitemap.xml`,
    host: url,
  };
}
