import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, ExternalLink } from "lucide-react";
import { getCollection, SITE_URL, SITE_OG_IMAGE, SITE_NAME } from "@/lib/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/링크/$slug")({
  head: ({ params }) => {
    const col = getCollection(params.slug);
    if (!col) return { meta: [{ title: "페이지 없음" }] };
    return {
      meta: [
        { title: `${col.keyword} 최신 주소 · 링크모음 | ${SITE_NAME}` },
        { name: "description", content: col.metaDescription },
        { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
        { property: "og:title", content: `${col.keyword} 최신 주소 · 링크모음 | ${SITE_NAME}` },
        { property: "og:description", content: col.metaDescription },
        { property: "og:url", content: `${SITE_URL}/링크/${encodeURIComponent(col.hangulSlug)}` },
        { property: "og:image", content: SITE_OG_IMAGE },
        { name: "twitter:title", content: `${col.keyword} 최신 주소 · 링크모음 | ${SITE_NAME}` },
        { name: "twitter:description", content: col.metaDescription },
        { name: "twitter:image", content: SITE_OG_IMAGE },
      ],
      links: [
        { rel: "canonical", href: `${SITE_URL}/링크/${encodeURIComponent(col.hangulSlug)}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${col.keyword} 최신 주소 · 링크모음`,
            description: col.metaDescription,
            url: `${SITE_URL}/링크/${encodeURIComponent(col.hangulSlug)}`,
            inLanguage: "ko",
            isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
          }),
        },
        {
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
        },
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
      ],
    };
  },
  loader: ({ params }) => {
    const col = getCollection(params.slug);
    if (!col) throw notFound();
    return col;
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">페이지를 찾을 수 없습니다</h2>
        <p className="mt-2 text-sm text-muted-foreground">요청하신 키워드 페이지가 존재하지 않거나 이동되었습니다.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  ),
  component: CollectionPage,
});

function CollectionPage() {
  const col = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 -z-10 hero-aurora opacity-60" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
          <div className="mx-auto max-w-4xl px-4 pt-16 pb-20">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              홈으로 돌아가기
            </Link>

            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium">
                {col.category}
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                {col.links.length}개 링크
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-grad-brand">{col.keyword}</span> 최신 주소
            </h1>
            <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {col.tagline}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 space-y-14">

          {/* ─── LINKS ─── */}
          <section aria-labelledby="links-heading">
            <h2 id="links-heading" className="font-display text-2xl font-bold mb-6">
              {col.keyword} 링크모음
            </h2>
            <ul role="list" className="grid gap-4 sm:grid-cols-2 list-none">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.name} — ${link.description}`}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-transparent hover:ring-brand"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-grad-brand text-white font-bold text-sm">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{link.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{link.description}</p>
                    </div>
                    <ExternalLink size={16} className="shrink-0 mt-1 text-muted-foreground transition group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* ─── ABOUT ─── */}
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="font-display text-2xl font-bold mb-4">
              {col.keyword}란?
            </h2>
            <p className="text-muted-foreground leading-7">{col.definition}</p>
            <p className="mt-4 text-muted-foreground leading-7">{col.summary}</p>
          </section>

          {/* ─── HOW TO ─── */}
          <section aria-labelledby="howto-heading">
            <h2 id="howto-heading" className="font-display text-2xl font-bold mb-6">
              {col.howTo.name}
            </h2>
            <ol className="space-y-3">
              {col.howTo.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-grad-brand text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm leading-6">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* ─── FAQ ─── */}
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display text-2xl font-bold mb-6">
              자주 묻는 질문
            </h2>
            <dl className="space-y-3">
              {col.faqs.map((f, i) => (
                <details
                  key={i}
                  open={i === 0}
                  className="group rounded-2xl border border-border bg-card p-5 open:ring-brand"
                >
                  <summary className="cursor-pointer list-none font-semibold flex items-center justify-between text-sm">
                    <dt>{f.q}</dt>
                    <span className="ml-2 shrink-0 text-grad-brand transition group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
                  </summary>
                  <dd className="mt-3 text-sm leading-6 text-muted-foreground">{f.a}</dd>
                </details>
              ))}
            </dl>
          </section>

          {/* ─── RELATED ─── */}
          {col.related && col.related.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="font-display text-2xl font-bold mb-6">
                관련 링크모음
              </h2>
              <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none">
                {col.related.map((slug) => {
                  const related = getCollection(slug);
                  if (!related) return null;
                  return (
                    <li key={slug}>
                      <Link
                        to="/링크/$slug"
                        params={{ slug: related.hangulSlug }}
                        aria-label={`${related.keyword} 링크모음 바로가기`}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 transition hover:border-transparent hover:ring-brand"
                      >
                        <div>
                          <p className="font-semibold text-sm">{related.keyword}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{related.category}</p>
                        </div>
                        <ArrowUpRight size={16} className="text-muted-foreground transition group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
