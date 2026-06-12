import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { COLLECTIONS, SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const staticDate = "2026-06-01";

        const entries = [
          { path: "/", changefreq: "daily", priority: "1.0", lastmod: today },
          { path: "/about", changefreq: "monthly", priority: "0.6", lastmod: staticDate },
          { path: "/contact", changefreq: "monthly", priority: "0.5", lastmod: staticDate },
          { path: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: staticDate },
          { path: "/terms", changefreq: "yearly", priority: "0.3", lastmod: staticDate },
          ...COLLECTIONS.map((c) => ({
            path: `/링크/${encodeURI(c.hangulSlug)}`,
            changefreq: "daily" as const,
            priority: "0.8",
            lastmod: today,
          })),
        ];

        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${encodeURI(e.path)}</loc>`,
              `    <lastmod>${e.lastmod}</lastmod>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `    <xhtml:link rel="alternate" hreflang="ko" href="${BASE_URL}${encodeURI(e.path)}"/>`,
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${encodeURI(e.path)}"/>`,
              `  </url>`,
            ].join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
