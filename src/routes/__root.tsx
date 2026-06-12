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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "주소모아" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "주소모아" },
      { property: "og:locale", content: "ko_KR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#6366f1" },
      { httpEquiv: "content-language", content: "ko" },
      { title: "주소모아 링크모음 | 빠르고 편리한 주소 안내" },
      { property: "og:title", content: "주소모아 링크모음 | 빠르고 편리한 주소 안내" },
      { name: "twitter:title", content: "주소모아 링크모음 | 빠르고 편리한 주소 안내" },
      { name: "description", content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 빠르고 안전하게 안내합니다." },
      { property: "og:description", content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 빠르고 안전하게 안내합니다." },
      { name: "twitter:description", content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 빠르고 안전하게 안내합니다." },

      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/503ab073-f8bd-4396-a36b-7a1945e6eda6/id-preview-76067a4c--738e003c-9ac9-457a-a684-1b94a624e2f1.lovable.app-1781224175413.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/503ab073-f8bd-4396-a36b-7a1945e6eda6/id-preview-76067a4c--738e003c-9ac9-457a-a684-1b94a624e2f1.lovable.app-1781224175413.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@400;700&display=swap" },
      { rel: "alternate", hrefLang: "ko", href: "https://translatebahasa.pro/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "주소모아",
          url: "https://translatebahasa.pro",
          description: "한국 사용자를 위한 링크모음 및 주소 안내 사이트",
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
