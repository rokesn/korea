import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import "../styles.css";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL, SITE_OG_IMAGE } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">페이지를 찾을 수 없습니다</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          페이지를 불러오지 못했습니다
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          일시적인 오류가 발생했습니다. 새로고침하거나 홈으로 이동해 주세요.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            다시 시도
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            홈으로 이동
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "google-site-verification", content: "_DPFUb1sKA2bfOSpeozuRZmIAhg7ChQdAmDk8_kqudk" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "주소모아" },
 { name: "naver-site-verification", content: "YOUR_NAVER_VERIFICATION_CODE" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "주소모아" },
      { property: "og:locale", content: "ko_KR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#6366f1" },
      { httpEquiv: "content-language", content: "ko" },
      { title: "주소모아 링크모음 | 짭플릭스·토렌트킴·코티비씨 최신 주소 안내 2026" },
      { property: "og:title", content: "주소모아 링크모음 | 빠르고 편리한 주소 안내" },
      { name: "twitter:title", content: "주소모아 링크모음 | 빠르고 편리한 주소 안내" },
      { name: "description", content: "주소모아(translatebahasa.pro)는 짭플릭스, 보자요넷, 티비룸, 후후티비, 티비몬, 티비착, 링크천국, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이 등 한국 인기 사이트의 최신 주소·대체 링크를 한곳에서 빠르고 안전하게 안내합니다. 12개 키워드 큐레이션, 무료 이용." },
      { property: "og:description", content: "주소모아(translatebahasa.pro)는 짭플릭스, 보자요넷, 티비룸, 후후티비, 티비몬, 티비착, 링크천국, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이 등 한국 인기 사이트의 최신 주소·대체 링크를 한곳에서 빠르고 안전하게 안내합니다. 12개 키워드 큐레이션, 무료 이용." },
      { name: "twitter:description", content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 빠르고 안전하게 안내합니다." },
      { property: "og:image", content: SITE_OG_IMAGE },
      { property: "og:image:alt", content: "주소모아 — 한국 링크모음 서비스" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:secure_url", content: SITE_OG_IMAGE },
      { name: "twitter:image", content: SITE_OG_IMAGE },
      { name: "twitter:image:alt", content: "주소모아 — 한국 링크모음 서비스" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "dns-prefetch", href: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev" },
      { rel: "preload", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap", as: "style" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "alternate", hrefLang: "ko", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "주소모아",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          description: "한국 사용자를 위한 링크모음 및 주소 안내 사이트",
          inLanguage: "ko",
          areaServed: "KR",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: "Korean",
            url: `${SITE_URL}/contact`,
          },
          sameAs: ["https://twitter.com/", "https://youtube.com/", "https://facebook.com/"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          name: ["홈", "링크모음", "토렌트", "소개", "문의"],
          url: [
            `${SITE_URL}/`,
            `${SITE_URL}/#collections`,
            `${SITE_URL}/#torrent`,
            `${SITE_URL}/about`,
            `${SITE_URL}/contact`,
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: "주소모아 운영자",
          url: `${SITE_URL}/about`,
          jobTitle: "링크모음 큐레이터",
          description: "주소모아 운영자 — 한국 인기 사이트 최신 주소를 수집·검증·공유합니다.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "@id": `${SITE_URL}/#webapp`,
          name: "주소모아",
          url: SITE_URL,
          description: "한국 인기 사이트 최신 주소 링크모음 서비스",
          applicationCategory: "UtilityApplication",
          operatingSystem: "Any",
          inLanguage: "ko",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
