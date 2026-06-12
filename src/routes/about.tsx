import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SITE_URL, COLLECTIONS } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "주소모아 소개 | 한국 링크모음·주소 안내 사이트" },
      { name: "description", content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 안전하게 안내하는 서비스입니다." },
      { property: "og:title", content: "주소모아 소개" },
      { property: "og:description", content: "한국 사용자를 위한 신뢰할 수 있는 링크모음 서비스, 주소모아를 소개합니다." },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:locale", content: "ko_KR" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">홈</Link> <span>›</span> 소개
        </nav>
        <h1 className="font-display text-3xl font-bold tracking-tight">주소모아 소개</h1>
        <p className="mt-4 text-muted-foreground">
          주소모아는 한국 인터넷 사용자를 위해 자주 변경되는 인기 사이트의 최신 주소와 검증된 링크를 한곳에 모아 제공하는 링크모음 서비스입니다.
          짭플릭스, 코티비씨, 보자요넷 같은 OTT·방송 사이트부터 토렌트킴, 토렌트큐큐, 토렝이 등 인기 토렌트 사이트의 접속 주소까지 빠르고 안전하게 안내합니다.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold">서비스 특징</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>매일 점검되는 최신 접속 주소와 미러 링크 제공</li>
          <li>카테고리별로 정리된 직관적인 링크모음 구조</li>
          <li>모바일·데스크톱 모두 빠르게 동작하는 가벼운 페이지</li>
          <li>SEO·GEO 최적화로 검색·AI 답변에서도 쉽게 발견</li>
        </ul>
        <h2 className="mt-8 font-display text-xl font-bold">인기 링크모음 바로가기</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          {COLLECTIONS.map((c) => (
            <li key={c.slug}>
              <Link to="/링크/$slug" params={{ slug: c.hangulSlug }} className="text-primary hover:underline">
                {c.keyword}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
