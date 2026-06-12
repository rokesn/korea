import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { COLLECTIONS, SITE_URL, SITE_OG_IMAGE, getCollection } from "@/lib/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ArrowUpRight, ExternalLink, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/링크/$slug")({
  head: ({ params }) => {
    const col = getCollection(params.slug);
    if (!col) return { meta: [{ title: "페이지를 찾을 수 없습니다 | 주소모아" }] };
    const title = `${col.keyword} 링크모음 | 최신 주소 안내 — 주소모아`;
    const desc = col.metaDescription;
    const canonical = `${SITE_URL}/링크/${encodeURIComponent(col.hangulSlug)}`;
    const MODIFIED = "2026-06-12T00:00:00+09:00";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `${col.keyword} 주소, ${col.keyword} 링크, ${col.keyword} 최신 주소, ${col.keyword} 대체 링크, 주소모아` },
        { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
        { name: "NaverBot", content: "all, index, follow" },
        { name: "Yeti",     content: "index, follow" },
        { property: "og:title",       content: title },
        { property: "og:description", content: desc },
        { property: "og:url",         content: canonical },
        { property: "og:type",        content: "website" },
        { property: "og:site_name",   content: "주소모아" },
        { property: "og:locale",      content: "ko_KR" },
        { property: "og:image",       content: SITE_OG_IMAGE },
        { property: "og:image:alt",   content: `${col.keyword} 링크모음 — 주소모아` },
        { property: "og:image:width",  content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type",   content: "image/png" },
        { name: "twitter:card",        content: "summary_large_image" },
        { name: "twitter:title",       content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image",       content: SITE_OG_IMAGE },
        { name: "twitter:image:alt",   content: `${col.keyword} 링크모음 — 주소모아` },
      ],
      links: [
        { rel: "canonical", href: canonical },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${canonical}#webpage`,
            url: canonical,
            name: title,
            description: desc,
            inLanguage: "ko",
            dateModified: MODIFIED,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            breadcrumb: { "@id": `${canonical}#breadcrumb` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${canonical}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "홈",     item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "링크모음", item: `${SITE_URL}/#collections` },
              { "@type": "ListItem", position: 3, name: `${col.keyword} 링크모음`, item: canonical },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${col.keyword} 최신 주소 링크모음`,
            description: desc,
            url: canonical,
            numberOfItems: col.links.length,
            itemListElement: col.links.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: l.name,
              description: l.description,
              url: l.url,
            })),
          }),
        },
        col.faqs.length > 0
          ? {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: col.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }
          : null,
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: col.howTo.name,
            step: col.howTo.steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              text: s,
            })),
          }),
        },
      ].filter(Boolean) as any,
    };
  },
  loader: ({ params }) => {
    const col = getCollection(params.slug);
    if (!col) throw notFound();
    return { col };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">페이지를 찾을 수 없습니다</h2>
        <p className="mt-2 text-sm text-muted-foreground">요청하신 키워드 페이지가 존재하지 않습니다.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  ),
  component: CollectionPage,
});

function CollectionPage() {
  const { col } = Route.useLoaderData();
  const related = COLLECTIONS.filter((c) => col.related.includes(c.slug)).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">

        {/* ─── BREADCRUMB ─── */}
        <nav aria-label="브레드크럼" className="border-b border-border/60 bg-card/30">
          <div className="mx-auto flex max-w-6xl items-center gap-1.5 px-4 py-2.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground hover:underline">홈</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <a href="/#collections" className="hover:text-foreground hover:underline">링크모음</a>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-foreground font-medium">{col.keyword}</span>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section
          aria-labelledby="kw-heading"
          className="relative overflow-hidden border-b border-border/60"
        >
          <div className="absolute inset-0 -z-10 hero-aurora opacity-60" />
          <div className="mx-auto max-w-4xl px-4 py-16 md:py-20 text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
              {col.category}
            </span>
            <h1
              id="kw-heading"
              className="mt-4 font-display text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              {col.keyword} <span className="text-grad-brand">링크모음</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
              {col.tagline}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 space-y-14">

          {/* ─── DEFINITION ─── */}
          <section aria-labelledby="def-heading">
            <h2 id="def-heading" className="font-display text-2xl font-bold mb-3">
              {col.keyword}이란?
            </h2>
            <p className="text-muted-foreground leading-7">{col.definition}</p>
            <p className="mt-4 text-muted-foreground leading-7">{col.summary}</p>
          </section>

          {/* ─── LINKS ─── */}
          <section aria-labelledby="links-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">Links</p>
            <h2 id="links-heading" className="mt-1 font-display text-2xl font-bold mb-5">
              {col.keyword} 최신 주소 모음
            </h2>
            <ul role="list" className="space-y-3">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition hover:border-transparent hover:ring-brand"
                    aria-label={`${link.name} — ${link.description}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-grad-brand text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-sm">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                    <ExternalLink
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-muted-foreground transition group-hover:text-foreground"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ─── HOW TO ─── */}
          <section aria-labelledby="howto-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">How To</p>
            <h2 id="howto-heading" className="mt-1 font-display text-2xl font-bold mb-5">
              {col.howTo.name}
            </h2>
            <ol className="space-y-3" aria-label={col.howTo.name}>
              {col.howTo.steps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grad-brand text-xs font-bold text-white mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* ─── FAQ ─── */}
          {col.faqs.length > 0 && (
            <section id="faq" aria-labelledby="faq-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">FAQ</p>
              <h2 id="faq-heading" className="mt-1 font-display text-2xl font-bold mb-5">
                {col.keyword} 자주 묻는 질문
              </h2>
              <dl className="space-y-3">
                {col.faqs.map((f, idx) => (
                  <details
                    key={f.q}
                    open={idx === 0}
                    className="group rounded-2xl border border-border bg-card p-4 open:ring-brand"
                  >
                    <summary className="cursor-pointer list-none font-semibold flex items-center justify-between text-sm">
                      <dt>{f.q}</dt>
                      <span className="ml-2 shrink-0 text-grad-brand transition group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
                    </summary>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</dd>
                  </details>
                ))}
              </dl>
            </section>
          )}

          {/* ─── RELATED ─── */}
          {related.length > 0 && (
            <section aria-labelledby="related-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">Related</p>
              <h2 id="related-heading" className="mt-1 font-display text-2xl font-bold mb-5">
                관련 링크모음
              </h2>
              <ul role="list" className="grid gap-4 sm:grid-cols-3">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/링크/$slug"
                      params={{ slug: c.hangulSlug }}
                      aria-label={`${c.keyword} 최신 주소 링크모음 보기`}
                      className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-4 transition hover:border-transparent hover:ring-brand"
                    >
                      <span className="inline-flex items-center rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs font-medium w-fit">
                        {c.category}
                      </span>
                      <h3 className="font-display text-base font-bold">
                        {c.keyword} <span className="sr-only">링크모음</span>
                      </h3>
                      <p className="line-clamp-2 text-xs text-muted-foreground">{c.tagline}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-grad-brand mt-auto">
                        최신 주소 보기 <ArrowUpRight size={12} aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ─── BACK ─── */}
          <div className="border-t border-border/60 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-grad-brand hover:underline"
              aria-label="전체 링크모음 목록으로 돌아가기"
            >
              ← 전체 링크모음 보기
            </Link>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
