import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "문의하기 | 주소모아 링크모음" },
      { name: "description", content: "주소모아에 링크 추가 요청, 오류 신고, 광고 및 제휴 문의를 보내세요. 빠르게 확인 후 답변드립니다." },
      { property: "og:title", content: "문의하기 | 주소모아" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:locale", content: "ko_KR" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">홈</Link> <span>›</span> 문의하기
        </nav>
        <h1 className="font-display text-3xl font-bold tracking-tight">문의하기</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          주소 추가 요청, 잘못된 링크 신고, 광고·제휴 문의 등 모든 의견을 환영합니다. 아래 이메일로 연락 주시면 가능한 빠르게 답변드리겠습니다.
        </p>
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">이메일</p>
          <p className="mt-1 font-display text-lg font-bold">contact@translatebahasa.pro</p>
        </div>
        <h2 className="mt-8 font-display text-xl font-bold">자주 묻는 항목</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>새로운 링크 추가 요청 — 사이트명과 주소를 함께 보내주세요.</li>
          <li>잘못된 주소 신고 — 해당 페이지 URL과 함께 알려주세요.</li>
          <li>광고·제휴 — 회사명과 제안 내용을 포함해 주세요.</li>
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
