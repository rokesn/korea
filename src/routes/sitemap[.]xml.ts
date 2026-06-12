import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { COLLECTIONS, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];

        const staticPages = [
          { path: "/",        priority: "1.0", changefreq: "daily",   lastmod: today },
          { path: "/about",   priority: "0.7", changefreq: "monthly", lastmod: today },
          { path: "/contact", priority: "0.5", changefreq: "monthly", lastmod: today },
          { path: "/privacy", priority: "0.3", changefreq: "yearly",  lastmod: today },
          { path: "/terms",   priority: "0.3", changefreq: "yearly",  lastmod: today },
        ];

        const collectionPages = COLLECTIONS.map((c) => ({
          path: `/링크/${c.hangulSlug}`,
          priority: "0.9",
          changefreq: "daily",
          lastmod: today,
        }));

        const allPages = [...staticPages, ...collectionPages];

        const urls = allPages
          .map((e) => {
            const loc = `${SITE_URL}${encodeURIComponent(e.path).replace(/%2F/g, "/")}`;
            return [
              `  <url>`,
              `    <loc>${loc}</loc>`,
              `    <lastmod>${e.lastmod}</lastmod>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n");
          })
          .join("\n");

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
          `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`,
          `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9`,
          `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
          urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
