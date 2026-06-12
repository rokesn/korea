import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SITE_URL, SITE_OG_IMAGE } from "@/lib/site";

const LAST_UPDATED = "2026-06-12";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "개인정보처리방침 | 주소모아" },
      { name: "description", content: "주소모아의 개인정보처리방침을 안내합니다. 수집 항목, 이용 목적, 보관 기간, 제3자 공유 여부 및 사용자 권리를 확인하세요." },
      { property: "og:title", content: "개인정보처리방침 | 주소모아" },
      { property: "og:description", content: "주소모아의 개인정보처리방침을 안내합니다. 수집 항목, 이용 목적, 보관 기간, 제3자 공유 여부 및 사용자 권리를 확인하세요." },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ko_KR" },
      { property: "og:image", content: SITE_OG_IMAGE },
      { property: "og:image:alt", content: "주소모아 개인정보처리방침" },
      { name: "twitter:title", content: "개인정보처리방침 | 주소모아" },
      { name: "twitter:description", content: "주소모아의 개인정보처리방침을 안내합니다." },
      { name: "twitter:image", content: SITE_OG_IMAGE },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "개인정보처리방침", item: `${SITE_URL}/privacy` },
          ],
        }),
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">홈</Link> <span aria-hidden="true">›</span> 개인정보처리방침
        </nav>
        <h1 className="font-display text-3xl font-bold tracking-tight">개인정보처리방침</h1>
        <p className="mt-1 text-xs text-muted-foreground">최종 업데이트: {LAST_UPDATED}</p>
        <p className="mt-4 text-sm text-muted-foreground leading-7">
          주소모아(이하 "서비스")는 사용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 및 관련 법령을 준수합니다. 본 사이트는 단순 링크 안내 서비스로, 회원가입·로그인 기능이 없으며 개인을 직접 식별할 수 있는 정보를 수집하지 않습니다.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold">1. 수집하는 정보</h2>
        <p className="mt-2 text-sm leading-7">
          주소모아는 최소한의 정보만 수집합니다:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7">
          <li><strong>자동 수집 정보:</strong> 방문 통계를 위한 익명화된 접속 로그 (브라우저 종류, 접속 시간, 참조 URL, 페이지 조회 수 등)</li>
          <li><strong>쿠키/로컬 스토리지:</strong> 다크 모드 설정, 카테고리 필터 상태 등 사용자 편의를 위한 기기 내 저장 데이터</li>
          <li><strong>문의 이메일:</strong> 사용자가 직접 이메일로 문의를 보내는 경우 해당 이메일 주소와 내용</li>
        </ul>
        <p className="mt-2 text-sm text-muted-foreground">성명, 주민등록번호, 금융정보 등 민감한 개인정보는 수집하지 않습니다.</p>

        <h2 className="mt-8 font-display text-xl font-bold">2. 정보의 이용 목적</h2>
        <p className="mt-2 text-sm leading-7">수집된 정보는 다음 목적으로만 사용됩니다:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7">
          <li>서비스 품질 개선 및 사용자 경험 최적화</li>
          <li>비정상 접근 및 자동화 봇 탐지·차단</li>
          <li>문의에 대한 답변 및 서비스 운영</li>
          <li>통계 분석을 통한 콘텐츠 개선</li>
        </ul>

        <h2 className="mt-8 font-display text-xl font-bold">3. 정보의 보관 기간</h2>
        <p className="mt-2 text-sm leading-7">
          접속 로그 등 자동 수집 데이터는 수집 후 최대 <strong>6개월</strong> 이내 파기합니다. 문의 이메일은 문의 처리 완료 후 <strong>1년</strong> 보관 후 파기됩니다. 법령에 의해 보존이 필요한 경우 해당 법령에 따른 기간 동안 보관합니다.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold">4. 제3자 제공 및 공유</h2>
        <p className="mt-2 text-sm leading-7">
          주소모아는 원칙적으로 수집된 정보를 제3자에게 제공하지 않습니다. 단, 다음의 경우는 예외입니다:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7">
          <li>법원, 수사기관 등 법령에 의한 적법한 요청이 있는 경우</li>
          <li>사용자가 사전에 동의한 경우</li>
        </ul>

        <h2 className="mt-8 font-display text-xl font-bold">5. 쿠키 및 유사 기술</h2>
        <p className="mt-2 text-sm leading-7">
          본 서비스는 기능성 쿠키(예: 테마 설정)를 사용할 수 있습니다. 사용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 일부 기능(예: 다크 모드 기억)이 작동하지 않을 수 있습니다. 분석 도구(예: Google Analytics)를 사용하는 경우 해당 서비스의 데이터 수집·처리 정책이 별도로 적용됩니다.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold">6. 외부 링크 및 제3자 사이트</h2>
        <p className="mt-2 text-sm leading-7">
          주소모아는 외부 사이트의 콘텐츠·정책·개인정보 처리 방침에 대해 책임지지 않습니다. 본 서비스의 링크를 클릭하면 해당 외부 사이트로 이동하며, 그 이후의 개인정보 처리는 각 사이트의 방침에 따릅니다. 외부 사이트 이용 전 해당 사이트의 개인정보처리방침을 확인하시기 바랍니다.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold">7. 사용자 권리</h2>
        <p className="mt-2 text-sm leading-7">
          사용자는 개인정보 보호법에 따라 다음 권리를 행사할 수 있습니다:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-7">
          <li>자신에 관한 정보 열람 요청</li>
          <li>오류 정정 요청</li>
          <li>삭제(잊힐 권리) 요청</li>
          <li>처리 정지 요청</li>
        </ul>
        <p className="mt-2 text-sm text-muted-foreground">권리 행사는 <Link to="/contact" className="text-primary hover:underline">문의 페이지</Link>를 통해 요청하실 수 있습니다.</p>

        <h2 className="mt-8 font-display text-xl font-bold">8. 개인정보 처리방침 변경</h2>
        <p className="mt-2 text-sm leading-7">
          법령 개정, 서비스 변경 등의 사유로 본 방침이 변경될 수 있습니다. 변경 시 본 페이지 상단의 "최종 업데이트" 날짜를 갱신하고, 중요한 변경사항은 서비스 내 공지를 통해 안내합니다.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold">9. 개인정보 보호책임자</h2>
        <p className="mt-2 text-sm leading-7">
          개인정보 관련 문의, 열람 요청, 침해 신고 등은 아래로 연락 주십시오:
        </p>
        <div className="mt-3 rounded-xl border border-border bg-card p-4 text-sm">
          <p><strong>개인정보 보호책임자:</strong> 주소모아 운영팀</p>
          <p className="mt-1"><strong>이메일:</strong> contact@translatebahasa.pro</p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card/50 p-4 text-sm text-muted-foreground">
          개인정보 침해 신고는 개인정보보호위원회(<a href="https://www.pipc.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.pipc.go.kr</a>) 또는 개인정보침해신고센터(국번없이 118)에 하실 수 있습니다.
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
