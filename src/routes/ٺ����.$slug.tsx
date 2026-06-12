import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS, SITE_URL, getCollection } from "@/lib/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/링크/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const c = loaderData.collection;
    const url = `${SITE_URL}/링크/${encodeURI(c.hangulSlug)}`;
    const title = `${c.keyword} 링크모음 | 주소모아`;
    return {
      meta: [
        { title },
        { name: "description", content: c.metaDescription },
        { name: "keywords", content: `${c.keyword}, ${c.keyword} 주소, ${c.keyword} 링크모음, 주소모아` },
        { property: "og:title", content: title },
        { property: "og:description", content: c.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "ko_KR" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: c.metaDescription },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "ko", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description: c.metaDescription,
            url,
            inLanguage: "ko",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL + "/" },
              { "@type": "ListItem", position: 2, name: "링크모음", item: SITE_URL + "/#collections" },
              { "@type": "ListItem", position: 3, name: c.keyword, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${c.keyword} 링크모음`,
            itemListElement: c.links.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: l.name,
              url: l.url,
            })),
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
              name: s,
              text: s,
            })),
          }),
        },
      ],
    };
  },
  component: CollectionPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 grid place-items-center text-center px-4">
        <div>
          <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다</h1>
          <p className="mt-2 text-muted-foreground">요청하신 키워드의 링크모음이 존재하지 않습니다.</p>
          <Link to="/" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground">
            홈으로
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
});

function CollectionPage() {
  const data = Route.useLoaderData() as { collection: NonNullable<ReturnType<typeof getCollection>> };
  const c = data.collection;
  const related = c.related
    .map((s) => getCollection(s))
    .filter((x): x is NonNullable<ReturnType<typeof getCollection>> => Boolean(x));

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 -z-10 hero-aurora opacity-70" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
          <div className="mx-auto max-w-4xl px-4 pt-14 pb-16">
            <nav aria-label="경로" className="text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link to="/" className="hover:text-foreground">홈</Link></li>
                <li aria-hidden>›</li>
                <li><a href="/#collections" className="hover:text-foreground">링크모음</a></li>
                <li aria-hidden>›</li>
                <li className="font-medium text-foreground">{c.keyword}</li>
              </ol>
            </nav>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-grad-brand" />
                {c.category}
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                {c.links.length}개 검증 링크
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              {c.keyword} <span className="text-grad-brand">링크모음</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {c.tagline}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12">
          <article aria-label={`${c.keyword} 링크모음 본문`}>
            {/* Definition */}
            <section className="rounded-3xl border border-border bg-card p-6 ring-brand">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">
                {c.keyword}이란?
              </p>
              <p className="mt-2 leading-7">{c.definition}</p>
            </section>

            {/* Summary */}
            <section className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold">개요</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-grad-brand" />
              <p className="mt-4 leading-7 text-foreground/90">{c.summary}</p>
            </section>

            {/* Latest links */}
            <section className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold">최신 링크</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-grad-brand" />
              <p className="mt-3 text-sm text-muted-foreground">
                검증된 <strong className="text-foreground">{c.keyword}</strong>의 최신 접속 주소입니다.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {c.links.map((l, i) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="group relative flex flex-col gap-1 overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-transparent hover:ring-brand"
                    >
                      <span aria-hidden className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-grad-brand opacity-0 blur-3xl transition group-hover:opacity-40" />
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          #{String(i + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight size={16} className="text-muted-foreground transition group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <span className="font-semibold">{l.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{l.url}</span>
                      <span className="text-sm text-muted-foreground">{l.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* How to */}
            <section className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold">이용 방법</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-grad-brand" />
              <ol className="mt-5 space-y-3">
                {c.howTo.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-grad-brand text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1 leading-6">{s}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold">자주 묻는 질문</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-grad-brand" />
              <dl className="mt-5 space-y-3">
                {c.faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-border bg-card p-4 open:ring-brand">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                      {f.q}
                      <span className="text-xl leading-none text-grad-brand transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </dl>
            </section>

            {/* Related */}
            <section className="mt-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold">관련 주소 모음</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-grad-brand" />
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/링크/$slug"
                    params={{ slug: r.hangulSlug }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-transparent hover:ring-brand"
                  >
                    <p className="font-semibold">{r.keyword}</p>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{r.tagline}</p>
                    <ArrowUpRight size={14} className="absolute right-3 top-3 text-muted-foreground transition group-hover:text-foreground" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-border bg-grad-brand p-px">
                <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-card p-5 text-center">
                  <p className="text-sm text-muted-foreground">더 많은 키워드를 찾고 있나요?</p>
                  <Link to="/" className="mt-2 inline-flex items-center gap-1 font-semibold text-grad-brand">
                    홈에서 전체 링크모음 보기 →
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

// Ensure all collections are referenced for type-aware tooling
export const __ALL_SLUGS = COLLECTIONS.map((c) => c.slug);
