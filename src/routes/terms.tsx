import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "이용약관 | 주소모아 링크모음" },
      { name: "description", content: "주소모아 링크모음 서비스 이용약관을 안내합니다. 서비스 이용 시 준수해야 할 사항과 면책 조항을 확인하세요." },
      { property: "og:title", content: "이용약관 | 주소모아" },
      { property: "og:url", content: `${SITE_URL}/terms` },
      { property: "og:locale", content: "ko_KR" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">홈</Link> <span>›</span> 이용약관
        </nav>
        <h1 className="font-display text-3xl font-bold tracking-tight">이용약관</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          주소모아는 한국 사용자에게 인기 사이트의 최신 주소를 안내하는 무료 링크모음 서비스입니다. 본 서비스를 이용함으로써 아래 조항에 동의한 것으로 간주됩니다.
        </p>
        <h2 className="mt-6 font-display text-xl font-bold">1. 서비스 목적</h2>
        <p className="mt-2 text-sm">주소모아는 외부 사이트의 접속 주소 안내를 목적으로 하며, 외부 사이트의 콘텐츠를 직접 제공하지 않습니다.</p>
        <h2 className="mt-6 font-display text-xl font-bold">2. 책임의 한계</h2>
        <p className="mt-2 text-sm">외부 사이트의 광고·콘텐츠로 인한 손해에 대해 주소모아는 책임을 지지 않습니다. 광고 차단 확장 프로그램 사용을 권장합니다.</p>
        <h2 className="mt-6 font-display text-xl font-bold">3. 금지 행위</h2>
        <p className="mt-2 text-sm">자동화된 크롤링, 무단 복제, 서비스 운영을 방해하는 행위는 금지됩니다.</p>
        <h2 className="mt-6 font-display text-xl font-bold">4. 약관 변경</h2>
        <p className="mt-2 text-sm">본 약관은 사전 고지 없이 변경될 수 있으며, 변경 사항은 본 페이지에 즉시 게시됩니다.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
