import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { COLLECTIONS, SITE_URL } from "@/lib/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ArrowUpRight, Search, Zap, Shield, Clock } from "lucide-react";

const TITLE = "주소모아 링크모음 | 빠르고 편리한 주소 안내";
const DESC =
  "주소 모아와 링크 모음을 한곳에. 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 인기 사이트의 최신 주소와 대체 링크를 빠르고 안전하게 안내하는 한국 사용자 전용 링크모음입니다.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "주소 모아, 링크 모음, 주소모아, 링크모음, 짭플릭스, 코티비씨, 토렌트, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렌트순위, 토렌트추천, 토렝이" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "주소모아",
          url: SITE_URL,
          inLanguage: "ko",
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "주소모아 추천 링크모음",
          itemListElement: COLLECTIONS.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${c.keyword} 링크모음`,
            url: `${SITE_URL}/링크/${encodeURI(c.hangulSlug)}`,
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("전체");
  const categories = useMemo(
    () => ["전체", ...Array.from(new Set(COLLECTIONS.map((c) => c.category)))],
    [],
  );
  const filtered = COLLECTIONS.filter(
    (c) =>
      (category === "전체" || c.category === category) &&
      (query === "" ||
        c.keyword.includes(query) ||
        c.tagline.includes(query) ||
        c.slug.includes(query.toLowerCase())),
  );
  const torrentItems = COLLECTIONS.filter((c) => c.category === "토렌트");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 -z-10 hero-aurora opacity-80" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
          <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-grad-brand" />
              한국 사용자 전용 · {COLLECTIONS.length}개 키워드 큐레이션
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
              주소를 모으다,<br />
              <span className="text-grad-brand">링크를 정리하다.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              짭플릭스 · 코티비씨 · 토렌트킴 · 토렌트큐큐 · 토렝이까지.
              자주 바뀌는 사이트 주소를 한 번에 찾아드립니다.
            </p>

            {/* Search */}
            <form
              role="search"
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex max-w-xl items-center gap-1.5 rounded-2xl border border-border bg-card/80 p-1.5 shadow-xl shadow-brand/10 backdrop-blur"
            >
              <Search size={18} className="ml-3 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="키워드 검색 (예: 토렌트순위)"
                className="flex-1 bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded-xl bg-grad-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:opacity-95"
              >
                검색
              </button>
            </form>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                    category === cat
                      ? "border-transparent bg-grad-brand text-white shadow-md shadow-brand/30"
                      : "border-border bg-card/60 hover:border-foreground/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-border/60 bg-card/30">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3">
            {[
              { icon: Zap, t: "초고속 안내", d: "한 번의 클릭으로 최신 접속 주소" },
              { icon: Shield, t: "검증된 링크", d: "수시 점검·미러 사이트 함께 안내" },
              { icon: Clock, t: "24/7 업데이트", d: "도메인 변경 즉시 반영" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-grad-brand text-white">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COLLECTIONS */}
        <section id="collections" className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">
                Collections
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">인기 링크모음</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                실시간으로 검증된 {COLLECTIONS.length}개의 키워드 큐레이션
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">검색 결과가 없습니다.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c, i) => (
                <Link
                  key={c.slug}
                  to="/링크/$slug"
                  params={{ slug: c.hangulSlug }}
                  className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-transparent hover:ring-brand"
                >
                  <span
                    aria-hidden
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-grad-brand opacity-0 blur-3xl transition group-hover:opacity-40"
                  />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs font-medium">
                      {c.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {c.keyword}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{c.tagline}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{c.links.length}개 링크</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-grad-brand">
                      바로가기 <ArrowUpRight size={14} className="text-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* TORRENT FEATURE STRIP */}
        <section id="torrent" className="border-y border-border/60 bg-card/30">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">
                  Featured · 토렌트
                </p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
                  지금 가장 많이 찾는 토렌트 사이트
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  토렌트킴 · 토렌트큐큐 · 토렌트씨 · 토렝이의 최신 주소를 한 번에.
                </p>
              </div>
              <a href="#collections" className="text-sm font-medium text-grad-brand">
                전체 보기 →
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {torrentItems.map((c) => (
                <Link
                  key={c.slug}
                  to="/링크/$slug"
                  params={{ slug: c.hangulSlug }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition hover:border-transparent hover:ring-brand"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-grad-brand" />
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Torrent
                    </span>
                  </div>
                  <p className="mt-3 font-display text-lg font-bold">{c.keyword}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.tagline}</p>
                  <ArrowUpRight
                    size={16}
                    className="absolute right-4 top-4 text-muted-foreground transition group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT + FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">
                About
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold">주소모아란?</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                주소모아는 한국 사용자들이 자주 찾는 사이트의 최신 주소를 모아 안내하는
                링크모음 전문 서비스입니다. 짭플릭스, 코티비씨, 보자요넷, 티비룸, 후후티비,
                티비몬, 링크천국, 티비착, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이 등
                도메인 변경으로 접속이 불편했던 사용자들을 위해 검증된 최신 링크를 빠르게 제공합니다.
              </p>
              <ol className="mt-6 space-y-3">
                {[
                  "상단 검색창에 원하는 키워드를 입력합니다.",
                  "카테고리 필터로 OTT, 방송, 토렌트 등을 좁힙니다.",
                  "키워드 카드를 클릭해 최신 주소와 대체 링크를 확인합니다.",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grad-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-6">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div id="faq">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">
                FAQ
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold">자주 묻는 질문</h2>
              <dl className="mt-4 space-y-3">
                {[
                  { q: "주소모아는 무엇인가요?", a: "자주 찾는 사이트의 최신 주소와 대체 링크를 한곳에 모아 제공하는 한국 사용자 전용 링크모음 사이트입니다." },
                  { q: "링크는 얼마나 자주 업데이트되나요?", a: "도메인 변경이 감지될 때마다 빠르게 업데이트하여 항상 최신 주소를 유지합니다." },
                  { q: "무료로 이용할 수 있나요?", a: "네, 모든 링크모음은 회원가입 없이 무료로 이용할 수 있습니다." },
                  { q: "토렌트 사이트는 어디서 찾나요?", a: "상단의 토렌트 섹션 또는 카테고리에서 토렌트킴, 토렌트큐큐, 토렝이 등을 확인할 수 있습니다." },
                ].map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-border bg-card p-4 open:ring-brand">
                    <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                      {f.q}
                      <span className="text-grad-brand transition group-open:rotate-45 text-xl leading-none">+</span>
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
