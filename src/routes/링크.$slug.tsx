import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCollection, SITE_URL, SITE_OG_IMAGE, COLLECTIONS } from "@/lib/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const TODAY = new Date().toISOString().split("T")[0];

export const Route = createFileRoute("/링크/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { collection: c } = loaderData;
    const url = `${SITE_URL}/링크/${encodeURIComponent(c.hangulSlug)}`;
    return {
      meta: [
        { title: `${c.keyword} 최신 주소 및 링크모음 | 주소모아` },
        { name: "description", content: c.metaDescription },
        { name: "keywords", content: `${c.keyword}, ${c.keyword} 주소, ${c.keyword} 링크, ${c.keyword} 최신 주소, 주소모아, 링크모음` },
        { property: "og:title", content: `${c.keyword} 최신 주소 및 링크모음 | 주소모아` },
        { property: "og:description", content: c.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "ko_KR" },
        { property: "og:image", content: SITE_OG_IMAGE },
        { property: "og:image:alt", content: `${c.keyword} 최신 주소 링크모음 — 주소모아` },
        { name: "twitter:title", content: `${c.keyword} 최신 주소 및 링크모음 | 주소모아` },
        { name: "twitter:description", content: c.metaDescription },
        { name: "twitter:image", content: SITE_OG_IMAGE },
        { name: "twitter:image:alt", content: `${c.keyword} 최신 주소 링크모음 — 주소모아` },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "ko", href: url },
        { rel: "alternate", hrefLang: "x-default", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemPage",
            name: `${c.keyword} 링크모음`,
            description: c.metaDescription,
            url,
            inLanguage: "ko",
            dateModified: TODAY,
            datePublished: "2026-06-01",
            isPartOf: { "@type": "WebSite", name: "주소모아", url: SITE_URL },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: `${c.keyword} 링크모음`, item: url },
              ],
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
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
            name: c.howTo.name,
            step: c.howTo.steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              text: s,
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: `${c.keyword} 링크모음`, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: CollectionPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">페이지를 찾을 수 없습니다</h2>
        <p className="mt-2 text-sm text-muted-foreground">요청하신 키워드 페이지가 없습니다.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  ),
});

function CollectionPage() {
  const { collection: c } = Route.useLoaderData();
  const related = c.related
    .map((slug) => COLLECTIONS.find((x) => x.slug === slug))
    .filter((x): x is NonNullable<typeof x> => !!x);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl w-full px-4 py-12">
        <nav aria-label="breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">홈</Link>
          <span className="mx-1" aria-hidden="true">›</span>
          <span>{c.keyword}</span>
        </nav>

        <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-2.5 py-0.5 text-xs font-medium">
          {c.category}
        </span>

        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">{c.keyword} 주소 링크모음</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-7">{c.tagline}</p>

        <section className="mt-8" aria-labelledby="definition-heading">
          <h2 id="definition-heading" className="font-display text-2xl font-bold mb-1">{c.keyword}란?</h2>
          <p className="text-sm leading-7 text-muted-foreground">{c.definition}</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{c.summary}</p>
        </section>

        <section className="mt-10" aria-labelledby="links-heading">
          <h2 id="links-heading" className="font-display text-2xl font-bold mb-4">{c.keyword} 최신 주소 모음</h2>
          <ul className="space-y-3">
            {c.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition hover:border-transparent hover:ring-1 hover:ring-brand"
                  aria-label={`${link.name} — ${link.description}`}
                >
                  <div>
                    <p className="font-semibold group-hover:text-primary">{link.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                  </div>
                  <ExternalLink size={16} className="shrink-0 text-muted-foreground group-hover:text-primary transition" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="howto-heading">
          <h2 id="howto-heading" className="font-display text-2xl font-bold mb-4">{c.howTo.name}</h2>
          <ol className="space-y-3">
            {c.howTo.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grad-brand text-xs font-bold text-white" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm leading-6">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-display text-2xl font-bold mb-4">자주 묻는 질문 (FAQ)</h2>
          <dl className="space-y-3">
            {c.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-4">
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  {f.q}
                  <span className="text-grad-brand transition group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </dl>
        </section>

        {related.length > 0 && (
          <section className="mt-12" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display text-2xl font-bold mb-4">관련 링크모음</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {related.map((rel) => (
                <Link
                  key={rel.hangulSlug}
                  to="/링크/$slug"
                  params={{ slug: rel.hangulSlug }}
                  aria-label={`${rel.keyword} 링크모음 바로가기`}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition hover:border-transparent hover:ring-1 hover:ring-brand"
                >
                  <div>
                    <p className="font-semibold">{rel.keyword}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{rel.tagline}</p>
                  </div>
                  <ArrowUpRight size={16} className="shrink-0 text-muted-foreground group-hover:text-primary transition" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-2xl border border-border bg-card/50 p-5 text-center">
          <p className="text-sm text-muted-foreground">더 많은 링크모음을 찾고 계신가요?</p>
          <Link
            to="/"
            className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-grad-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:opacity-95"
          >
            전체 링크모음 보기 <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
