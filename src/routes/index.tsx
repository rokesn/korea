import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { COLLECTIONS, SITE_URL, SITE_OG_IMAGE, SITE_NAME } from "@/lib/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ArrowUpRight, Search, Zap, Shield, Clock } from "lucide-react";

const TITLE = "주소모아 링크모음 | 짭플릭스·토렌트킴·코티비씨 최신 주소 안내";
const DESC =
  "주소모아에서 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이, 보자요넷, 티비룸 등 한국 인기 사이트의 최신 주소와 대체 링크를 한곳에서 빠르고 안전하게 확인하세요.";

const PUBLISHED = "2026-06-01T00:00:00+09:00";
const MODIFIED  = "2026-06-12T00:00:00+09:00";

const FAQ_ITEMS = [
  {
    q: "주소모아는 무엇인가요?",
    a: "주소모아는 자주 찾는 한국 사이트의 최신 주소와 대체 링크를 한곳에 모아 제공하는 링크모음 사이트입니다. 회원가입 없이 무료로 이용할 수 있습니다.",
  },
  {
    q: "짭플릭스·토렌트킴 주소가 막혔을 때 어떻게 하나요?",
    a: "주소모아의 해당 키워드 페이지에서 최신 대체 주소와 미러 사이트를 바로 확인할 수 있습니다. 페이지를 북마크해 두면 언제든 빠르게 접근할 수 있습니다.",
  },
  {
    q: "토렌트 사이트 주소가 자주 바뀌는 이유는?",
    a: "국내 ISP의 차단 정책으로 인해 도메인이 주기적으로 변경됩니다. 주소모아는 변경을 감지하면 즉시 최신 주소로 업데이트합니다.",
  },
  {
    q: "어떤 카테고리의 사이트를 안내하나요?",
    a: "OTT(짭플릭스·보자요넷), 실시간 방송(코티비씨·티비룸·후후티비·티비몬·티비착), 토렌트(토렌트킴·토렌트큐큐·토렌트씨·토렝이·토렌트순위·토렌트추천), 링크모음(링크천국) 등 4개 카테고리를 제공합니다.",
  },
  {
    q: "VPN 없이도 접속 가능한 주소를 안내하나요?",
    a: "네, 주소모아는 VPN 없이도 접속 가능한 주소를 우선적으로 안내합니다. 단, ISP 환경에 따라 다를 수 있으므로 대체 주소도 함께 확인하세요.",
  },
  {
    q: "링크는 얼마나 자주 업데이트되나요?",
    a: "도메인 변경이 감지될 때마다 즉시 업데이트하며, 주기적인 점검을 통해 모든 링크의 접속 가능 여부를 확인합니다.",
  },
  {
    q: "사이트 이용 시 보안은 괜찮나요?",
    a: "외부 사이트 방문 시 uBlock Origin 등 광고 차단 확장 프로그램과 최신 백신 소프트웨어를 함께 사용하시길 권장합니다. 주소모아 자체에는 별도의 광고나 추적 코드가 없습니다.",
  },
  {
    q: "무료로 이용할 수 있나요?",
    a: "네, 주소모아의 모든 링크모음은 회원가입·결제 없이 무료로 이용할 수 있습니다.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { name: "NaverBot",  content: "all, index, follow" },
      { name: "Yeti",      content: "index, follow" },
      { name: "geo.region",    content: "KR" },
      { name: "geo.country",   content: "KR" },
      { name: "geo.placename", content: "대한민국" },
      { name: "DC.language",   content: "ko" },
      { name: "target",        content: "all" },
      { property: "og:title",       content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url",         content: SITE_URL + "/" },
      { property: "og:type",        content: "website" },
      { property: "og:site_name",   content: SITE_NAME },
      { property: "og:image",       content: SITE_OG_IMAGE },
      { property: "og:image:alt",   content: "주소모아 링크모음 — 한국 인기 사이트 최신 주소" },
      { property: "og:image:width",  content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:updated_time", content: MODIFIED },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time",  content: MODIFIED },
      { property: "article:section",        content: "링크모음" },
      { name: "twitter:title",       content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image",       content: SITE_OG_IMAGE },
      { name: "twitter:image:alt",   content: "주소모아 링크모음 — 한국 인기 사이트 최신 주소" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "sitemap", type: "application/xml", href: `${SITE_URL}/sitemap.xml` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "주소모아",
          alternateName: ["주소모아 링크모음", "juso-moa", "jusomoа"],
          url: SITE_URL,
          description: DESC,
          inLanguage: "ko",
          datePublished: PUBLISHED,
          dateModified: MODIFIED,
          publisher: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "주소모아",
            url: SITE_URL,
            logo: `${SITE_URL}/favicon.svg`,
          },
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
          "@id": `${SITE_URL}/#collection-list`,
          name: "주소모아 추천 링크모음",
          description: "짭플릭스, 코티비씨, 토렌트킴 등 한국 인기 사이트의 최신 주소 링크모음 목록",
          url: SITE_URL,
          numberOfItems: COLLECTIONS.length,
          itemListOrder: "https://schema.org/ItemListOrderDescending",
          itemListElement: COLLECTIONS.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${c.keyword} 링크모음`,
            description: c.metaDescription,
            url: `${SITE_URL}/링크/${encodeURI(c.hangulSlug)}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          name: "주소모아 자주 묻는 질문",
          mainEntity: FAQ_ITEMS.map((f) => ({
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
          ],
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

        {/* ─── HERO ─── */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden border-b border-border/60"
        >
          <div className="absolute inset-0 -z-10 hero-aurora opacity-80" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
          <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-grad-brand" aria-hidden="true" />
              한국 사용자 전용 · {COLLECTIONS.length}개 키워드 큐레이션
            </p>
            <h1
              id="hero-heading"
              className="mt-6 font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              주소를 모으다,<br />
              <span className="text-grad-brand">링크를 정리하다.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg font-semibold text-foreground/80 leading-relaxed">
              짭플릭스 · 코티비씨 · 토렌트킴 · 토렌트큐큐 · 토렝이 최신 주소
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              자주 바뀌는 한국 인기 사이트 접속 주소를 한곳에서 빠르게 찾아드립니다.
            </p>

            {/* Search */}
            <form
              role="search"
              aria-label="키워드 검색"
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex max-w-xl items-center gap-1.5 rounded-2xl border border-border bg-card/80 p-1.5 shadow-xl shadow-brand/10 backdrop-blur"
            >
              <Search size={18} className="ml-3 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="키워드 검색 (예: 토렌트순위, 짭플릭스)"
                aria-label="사이트 키워드 검색"
                autoComplete="off"
                className="flex-1 bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="검색 실행"
                className="rounded-xl bg-grad-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:opacity-95"
              >
                검색
              </button>
            </form>

            <div
              className="mt-6 flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="카테고리 필터"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  aria-pressed={category === cat}
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

        {/* ─── TRUST STRIP ─── */}
        <section
          aria-labelledby="features-heading"
          className="border-b border-border/60 bg-card/30"
        >
          <h2 id="features-heading" className="sr-only">주소모아 서비스 특징</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3">
            {[
              { icon: Zap,    heading: "초고속 안내",   desc: "한 번의 클릭으로 최신 접속 주소" },
              { icon: Shield, heading: "검증된 링크",   desc: "수시 점검·미러 사이트 함께 안내" },
              { icon: Clock,  heading: "24/7 업데이트", desc: "도메인 변경 즉시 반영" },
            ].map(({ icon: Icon, heading, desc }) => (
              <div key={heading} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-grad-brand text-white">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{heading}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── COLLECTIONS ─── */}
        <section
          id="collections"
          aria-labelledby="collections-heading"
          className="mx-auto max-w-6xl px-4 py-16"
        >
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">
                Collections
              </p>
              <h2 id="collections-heading" className="mt-2 font-display text-3xl md:text-4xl font-bold">
                인기 링크모음
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                실시간으로 검증된 {COLLECTIONS.length}개의 키워드 큐레이션 —
                짭플릭스·코티비씨·토렌트킴·토렌트큐큐 등
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p role="status" className="py-12 text-center text-muted-foreground">검색 결과가 없습니다.</p>
          ) : (
            <ul
              className="grid gap-5 list-none sm:grid-cols-2 lg:grid-cols-3"
              aria-label="링크모음 목록"
            >
              {filtered.map((c, i) => (
                <li key={c.slug}>
                  <Link
                    to="/링크/$slug"
                    params={{ slug: c.hangulSlug }}
                    aria-label={`${c.keyword} 링크모음 바로가기`}
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
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground" aria-hidden="true">
                        #{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {c.keyword} <span className="sr-only">주소 링크모음</span>
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{c.tagline}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">{c.links.length}개 링크</span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-grad-brand">
                        최신 주소 보기 <ArrowUpRight size={14} aria-hidden="true" className="text-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ─── TORRENT FEATURE STRIP ─── */}
        <section
          id="torrent"
          aria-labelledby="torrent-heading"
          className="border-y border-border/60 bg-card/30"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">
                  Featured · 토렌트
                </p>
                <h2 id="torrent-heading" className="mt-2 font-display text-3xl md:text-4xl font-bold">
                  지금 가장 많이 찾는 토렌트 사이트
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  토렌트킴 · 토렌트큐큐 · 토렌트씨 · 토렝이의 최신 주소를 한 번에 확인하세요.
                </p>
              </div>
              <a
                href="#collections"
                className="text-sm font-medium text-grad-brand hover:underline"
                aria-label="전체 링크모음 섹션으로 이동"
              >
                전체 보기 →
              </a>
            </div>
            <ul className="grid gap-4 list-none sm:grid-cols-2 lg:grid-cols-4" aria-label="토렌트 사이트 링크모음">
              {torrentItems.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/링크/$slug"
                    params={{ slug: c.hangulSlug }}
                    aria-label={`${c.keyword} 최신 주소 바로가기`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-5 transition hover:border-transparent hover:ring-brand"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-grad-brand" aria-hidden="true" />
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Torrent</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold">
                      {c.keyword} <span className="sr-only">최신 주소</span>
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.tagline}</p>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="absolute right-4 top-4 text-muted-foreground transition group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── ABOUT + FAQ ─── */}
        <section
          aria-labelledby="about-heading"
          className="mx-auto max-w-4xl px-4 py-20"
        >
          <div className="grid gap-10 md:grid-cols-2">

            {/* About */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">About</p>
              <h2 id="about-heading" className="mt-2 font-display text-3xl font-bold">주소모아란?</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                주소모아는 한국 사용자들이 자주 찾는 사이트의 최신 주소를 모아 안내하는
                링크모음 전문 서비스입니다. 짭플릭스, 코티비씨, 보자요넷, 티비룸, 후후티비,
                티비몬, 링크천국, 티비착, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이 등
                도메인 변경으로 접속이 불편했던 사용자들을 위해 검증된 최신 링크를 빠르게 제공합니다.
              </p>
              <ol className="mt-6 space-y-3" aria-label="주소모아 이용 방법 3단계">
                {[
                  "상단 검색창에 원하는 키워드를 입력합니다.",
                  "카테고리 필터로 OTT, 방송, 토렌트 등을 좁힙니다.",
                  "키워드 카드를 클릭해 최신 주소와 대체 링크를 확인합니다.",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grad-brand text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-6">{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center gap-4">
                <Link
                  to="/about"
                  className="text-sm font-medium text-grad-brand hover:underline"
                  aria-label="주소모아 서비스 소개 페이지 보기"
                >
                  서비스 소개 전체 보기 →
                </Link>
                <time
                  dateTime={MODIFIED}
                  className="text-xs text-muted-foreground"
                  aria-label="최근 업데이트"
                >
                  업데이트: 2026-06-12
                </time>
              </div>
            </div>

            {/* FAQ */}
            <div id="faq">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand">FAQ</p>
              <h2 className="mt-2 font-display text-3xl font-bold">자주 묻는 질문</h2>
              <p className="mt-1 text-sm text-muted-foreground">짭플릭스·토렌트킴·코티비씨 관련 자주 묻는 질문</p>
              <dl className="mt-4 space-y-3">
                {FAQ_ITEMS.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-border bg-card p-4 open:ring-brand"
                  >
                    <summary className="cursor-pointer list-none font-semibold flex items-center justify-between text-sm">
                      <dt>{f.q}</dt>
                      <span
                        className="ml-2 shrink-0 text-grad-brand transition group-open:rotate-45 text-xl leading-none"
                        aria-hidden="true"
                      >+</span>
                    </summary>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">{f.a}</dd>
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
