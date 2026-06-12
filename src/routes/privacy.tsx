import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "개인정보처리방침 | 주소모아" },
      { name: "description", content: "주소모아의 개인정보처리방침을 안내합니다. 수집 항목, 이용 목적, 보관 기간 및 사용자 권리를 확인하세요." },
      { property: "og:title", content: "개인정보처리방침 | 주소모아" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { property: "og:locale", content: "ko_KR" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">홈</Link> <span>›</span> 개인정보처리방침
        </nav>
        <h1 className="font-display text-3xl font-bold tracking-tight">개인정보처리방침</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          주소모아는 사용자의 개인정보를 소중히 여기며, 관련 법령을 준수합니다. 본 사이트는 단순 링크 안내 서비스로, 회원가입·로그인을 요구하지 않으며 개인을 식별할 수 있는 정보를 수집하지 않습니다.
        </p>
        <h2 className="mt-6 font-display text-xl font-bold">1. 수집 항목</h2>
        <p className="mt-2 text-sm">방문 통계를 위한 익명화된 접속 로그(브라우저, 접속 시간 등)만 수집할 수 있습니다.</p>
        <h2 className="mt-6 font-display text-xl font-bold">2. 이용 목적</h2>
        <p className="mt-2 text-sm">서비스 품질 개선 및 비정상 접근 차단 용도로만 이용됩니다.</p>
        <h2 className="mt-6 font-display text-xl font-bold">3. 외부 링크 면책</h2>
        <p className="mt-2 text-sm">주소모아는 외부 사이트의 콘텐츠·정책에 대해 책임지지 않으며, 모든 링크는 사용자의 편의를 위한 안내일 뿐입니다.</p>
        <h2 className="mt-6 font-display text-xl font-bold">4. 문의</h2>
        <p className="mt-2 text-sm">관련 문의는 <Link to="/contact" className="text-primary hover:underline">문의 페이지</Link>를 이용해 주세요.</p>
      </main>
      <SiteFooter />
    </div>
  );
}
