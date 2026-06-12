import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { COLLECTIONS } from "@/lib/site";

const BASE_URL = "https://translatebahasa.pro";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.5" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          ...COLLECTIONS.map((c) => ({
            path: `/링크/${encodeURI(c.hangulSlug)}`,
            changefreq: "daily" as const,
            priority: "0.8",
          })),
        ];


        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${encodeURI(e.path)}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `    <xhtml:link rel="alternate" hreflang="ko" href="${BASE_URL}${encodeURI(e.path)}"/>`,
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
