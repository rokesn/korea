import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { i as SITE_URL, n as SITE_NAME, r as SITE_OG_IMAGE, t as COLLECTIONS } from "./site-D5Rkcff-.mjs";
import { a as createRouter, c as createFileRoute, d as useRouter, l as createRootRouteWithContext, n as Scripts, o as Outlet, r as HeadContent, s as lazyRouteComponent, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MODIFIED } from "./routes-BXej9TBV.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BaHu-ILf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "페이지를 찾을 수 없습니다"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "요청하신 페이지가 존재하지 않거나 이동되었습니다."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "홈으로 이동"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "페이지를 불러오지 못했습니다"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "일시적인 오류가 발생했습니다. 새로고침하거나 홈으로 이동해 주세요."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "다시 시도"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "홈으로 이동"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "format-detection",
				content: "telephone=no"
			},
			{
				name: "author",
				content: "주소모아"
			},
			{
				name: "naver-site-verification",
				content: "YOUR_NAVER_VERIFICATION_CODE"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "주소모아"
			},
			{
				property: "og:locale",
				content: "ko_KR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#6366f1"
			},
			{
				httpEquiv: "content-language",
				content: "ko"
			},
			{ title: "주소모아 링크모음 | 짭플릭스·토렌트킴·코티비씨 최신 주소 안내 2026" },
			{
				property: "og:title",
				content: "주소모아 링크모음 | 빠르고 편리한 주소 안내"
			},
			{
				name: "twitter:title",
				content: "주소모아 링크모음 | 빠르고 편리한 주소 안내"
			},
			{
				name: "description",
				content: "주소모아(translatebahasa.pro)는 짭플릭스, 보자요넷, 티비룸, 후후티비, 티비몬, 티비착, 링크천국, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이 등 한국 인기 사이트의 최신 주소·대체 링크를 한곳에서 빠르고 안전하게 안내합니다. 12개 키워드 큐레이션, 무료 이용."
			},
			{
				property: "og:description",
				content: "주소모아(translatebahasa.pro)는 짭플릭스, 보자요넷, 티비룸, 후후티비, 티비몬, 티비착, 링크천국, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이 등 한국 인기 사이트의 최신 주소·대체 링크를 한곳에서 빠르고 안전하게 안내합니다. 12개 키워드 큐레이션, 무료 이용."
			},
			{
				name: "twitter:description",
				content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 빠르고 안전하게 안내합니다."
			},
			{
				property: "og:image",
				content: SITE_OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "주소모아 — 한국 링크모음 서비스"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:type",
				content: "image/png"
			},
			{
				property: "og:image:secure_url",
				content: SITE_OG_IMAGE
			},
			{
				name: "twitter:image",
				content: SITE_OG_IMAGE
			},
			{
				name: "twitter:image:alt",
				content: "주소모아 — 한국 링크모음 서비스"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "googlebot",
				content: "index, follow"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "dns-prefetch",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "dns-prefetch",
				href: "https://fonts.gstatic.com"
			},
			{
				rel: "dns-prefetch",
				href: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev"
			},
			{
				rel: "preload",
				href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap",
				as: "style"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.svg"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "alternate",
				hrefLang: "ko",
				href: `${SITE_URL}/`
			},
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: `${SITE_URL}/`
			}
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
						url: `${SITE_URL}/contact`
					},
					sameAs: [
						"https://twitter.com/",
						"https://youtube.com/",
						"https://facebook.com/"
					]
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "SiteNavigationElement",
					name: [
						"홈",
						"링크모음",
						"토렌트",
						"소개",
						"문의"
					],
					url: [
						`${SITE_URL}/`,
						`${SITE_URL}/#collections`,
						`${SITE_URL}/#torrent`,
						`${SITE_URL}/about`,
						`${SITE_URL}/contact`
					]
				})
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
					description: "주소모아 운영자 — 한국 인기 사이트 최신 주소를 수집·검증·공유합니다."
				})
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
					inLanguage: "ko"
				})
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ko",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./terms-ZewTg4vr.mjs");
var Route$6 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: "이용약관 | 주소모아 링크모음" },
			{
				name: "description",
				content: "주소모아 링크모음 서비스 이용약관을 안내합니다. 서비스 이용 시 준수해야 할 사항, 책임 범위, 금지 행위 및 면책 조항을 확인하세요."
			},
			{
				property: "og:title",
				content: "이용약관 | 주소모아 링크모음"
			},
			{
				property: "og:description",
				content: "주소모아 링크모음 서비스 이용약관을 안내합니다. 서비스 이용 시 준수해야 할 사항, 책임 범위, 금지 행위 및 면책 조항을 확인하세요."
			},
			{
				property: "og:url",
				content: `${SITE_URL}/terms`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "ko_KR"
			},
			{
				property: "og:image",
				content: SITE_OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "주소모아 이용약관"
			},
			{
				name: "twitter:title",
				content: "이용약관 | 주소모아 링크모음"
			},
			{
				name: "twitter:description",
				content: "주소모아 링크모음 서비스 이용약관을 안내합니다."
			},
			{
				name: "twitter:image",
				content: SITE_OG_IMAGE
			},
			{
				name: "robots",
				content: "noindex, follow"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/terms`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "홈",
					item: SITE_URL
				}, {
					"@type": "ListItem",
					position: 2,
					name: "이용약관",
					item: `${SITE_URL}/terms`
				}]
			})
		}]
	})
});
var BASE_URL = SITE_URL;
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const staticDate = "2026-06-01";
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[
		{
			path: "/",
			changefreq: "daily",
			priority: "1.0",
			lastmod: today
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.6",
			lastmod: staticDate
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.5",
			lastmod: staticDate
		},
		{
			path: "/privacy",
			changefreq: "yearly",
			priority: "0.3",
			lastmod: staticDate
		},
		{
			path: "/terms",
			changefreq: "yearly",
			priority: "0.3",
			lastmod: staticDate
		},
		...COLLECTIONS.map((c) => ({
			path: `/링크/${encodeURI(c.hangulSlug)}`,
			changefreq: "daily",
			priority: "0.8",
			lastmod: today
		}))
	].map((e) => [
		`  <url>`,
		`    <loc>${BASE_URL}${encodeURI(e.path)}</loc>`,
		`    <lastmod>${e.lastmod}</lastmod>`,
		`    <changefreq>${e.changefreq}</changefreq>`,
		`    <priority>${e.priority}</priority>`,
		`    <xhtml:link rel="alternate" hreflang="ko" href="${BASE_URL}${encodeURI(e.path)}"/>`,
		`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${encodeURI(e.path)}"/>`,
		`  </url>`
	].join("\n")).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./privacy-CzgVvwxu.mjs");
var Route$4 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "개인정보처리방침 | 주소모아" },
			{
				name: "description",
				content: "주소모아의 개인정보처리방침을 안내합니다. 수집 항목, 이용 목적, 보관 기간, 제3자 공유 여부 및 사용자 권리를 확인하세요."
			},
			{
				property: "og:title",
				content: "개인정보처리방침 | 주소모아"
			},
			{
				property: "og:description",
				content: "주소모아의 개인정보처리방침을 안내합니다. 수집 항목, 이용 목적, 보관 기간, 제3자 공유 여부 및 사용자 권리를 확인하세요."
			},
			{
				property: "og:url",
				content: `${SITE_URL}/privacy`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "ko_KR"
			},
			{
				property: "og:image",
				content: SITE_OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "주소모아 개인정보처리방침"
			},
			{
				name: "twitter:title",
				content: "개인정보처리방침 | 주소모아"
			},
			{
				name: "twitter:description",
				content: "주소모아의 개인정보처리방침을 안내합니다."
			},
			{
				name: "twitter:image",
				content: SITE_OG_IMAGE
			},
			{
				name: "robots",
				content: "noindex, follow"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/privacy`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "홈",
					item: SITE_URL
				}, {
					"@type": "ListItem",
					position: 2,
					name: "개인정보처리방침",
					item: `${SITE_URL}/privacy`
				}]
			})
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./contact-CEB8BCwF.mjs");
var Route$3 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "문의하기 | 주소모아 링크모음" },
			{
				name: "description",
				content: "주소모아에 링크 추가 요청, 오류 신고, 광고 및 제휴 문의를 보내세요. 빠르게 확인 후 답변드립니다."
			},
			{
				property: "og:title",
				content: "문의하기 | 주소모아 링크모음"
			},
			{
				property: "og:description",
				content: "주소모아에 링크 추가 요청, 오류 신고, 광고 및 제휴 문의를 보내세요. 빠르게 확인 후 답변드립니다."
			},
			{
				property: "og:url",
				content: `${SITE_URL}/contact`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "ko_KR"
			},
			{
				property: "og:image",
				content: SITE_OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "주소모아 문의하기"
			},
			{
				name: "twitter:title",
				content: "문의하기 | 주소모아 링크모음"
			},
			{
				name: "twitter:description",
				content: "주소모아에 링크 추가 요청, 오류 신고, 광고 및 제휴 문의를 보내세요. 빠르게 확인 후 답변드립니다."
			},
			{
				name: "twitter:image",
				content: SITE_OG_IMAGE
			},
			{
				name: "twitter:image:alt",
				content: "주소모아 문의하기"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/contact`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "홈",
					item: SITE_URL
				}, {
					"@type": "ListItem",
					position: 2,
					name: "문의하기",
					item: `${SITE_URL}/contact`
				}]
			})
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./about-Baqt7Oyy.mjs");
var Route$2 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "주소모아 소개 | 한국 링크모음·주소 안내 사이트" },
			{
				name: "description",
				content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 안전하게 안내하는 서비스입니다."
			},
			{
				property: "og:title",
				content: "주소모아 소개 | 한국 링크모음·주소 안내 사이트"
			},
			{
				property: "og:description",
				content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 안전하게 안내하는 서비스입니다."
			},
			{
				property: "og:url",
				content: `${SITE_URL}/about`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "ko_KR"
			},
			{
				property: "og:image",
				content: SITE_OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "주소모아 소개 — 한국 링크모음 서비스"
			},
			{
				name: "twitter:title",
				content: "주소모아 소개 | 한국 링크모음·주소 안내 사이트"
			},
			{
				name: "twitter:description",
				content: "주소모아는 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐 등 한국 인기 사이트의 최신 주소와 링크모음을 한곳에서 안전하게 안내하는 서비스입니다."
			},
			{
				name: "twitter:image",
				content: SITE_OG_IMAGE
			},
			{
				name: "twitter:image:alt",
				content: "주소모아 소개 — 한국 링크모음 서비스"
			}
		],
		links: [{
			rel: "canonical",
			href: `${SITE_URL}/about`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "홈",
					item: SITE_URL
				}, {
					"@type": "ListItem",
					position: 2,
					name: "소개",
					item: `${SITE_URL}/about`
				}]
			})
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./routes-DQ0jv0Ul.mjs");
var TITLE = "주소모아 링크모음 | 짭플릭스·토렌트킴·코티비씨 최신 주소 안내 2026";
var DESC = "주소모아에서 짭플릭스, 코티비씨, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이, 보자요넷, 티비룸 등 한국 인기 사이트의 최신 주소와 대체 링크를 한곳에서 빠르고 안전하게 확인하세요.";
var PUBLISHED = "2026-06-01T00:00:00+09:00";
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESC
			},
			{
				name: "keywords",
				content: "짭플릭스 주소, 토렌트킴 주소, 코티비씨 주소, 토렌트큐큐, 토렝이, 보자요넷, 티비룸, 후후티비, 티비몬, 티비착, 링크천국, 한국 링크모음, 최신 주소, 대체 링크, 주소모아"
			},
			{
				name: "robots",
				content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
			},
			{
				name: "googlebot",
				content: "index, follow, max-snippet:-1, max-image-preview:large"
			},
			{
				name: "NaverBot",
				content: "all, index, follow"
			},
			{
				name: "Yeti",
				content: "index, follow"
			},
			{
				name: "geo.region",
				content: "KR"
			},
			{
				name: "geo.country",
				content: "KR"
			},
			{
				name: "geo.placename",
				content: "대한민국"
			},
			{
				name: "DC.language",
				content: "ko"
			},
			{
				name: "target",
				content: "all"
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESC
			},
			{
				property: "og:url",
				content: SITE_URL + "/"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:image",
				content: SITE_OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "주소모아 링크모음 — 한국 인기 사이트 최신 주소"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:title",
				content: TITLE
			},
			{
				name: "twitter:description",
				content: DESC
			},
			{
				name: "twitter:image",
				content: SITE_OG_IMAGE
			},
			{
				name: "twitter:image:alt",
				content: "주소모아 링크모음 — 한국 인기 사이트 최신 주소"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/"
		}, {
			rel: "sitemap",
			type: "application/xml",
			href: `${SITE_URL}/sitemap.xml`
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					"@id": `${SITE_URL}/#website`,
					name: "주소모아",
					alternateName: [
						"주소모아 링크모음",
						"juso-moa",
						"jusomoа"
					],
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
						logo: `${SITE_URL}/favicon.svg`
					},
					potentialAction: {
						"@type": "SearchAction",
						target: `${SITE_URL}/?q={search_term_string}`,
						"query-input": "required name=search_term_string"
					}
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebPage",
					"@id": `${SITE_URL}/#webpage`,
					url: `${SITE_URL}/`,
					name: TITLE,
					description: DESC,
					isPartOf: { "@id": `${SITE_URL}/#website` },
					about: { "@id": `${SITE_URL}/#organization` },
					inLanguage: "ko",
					datePublished: PUBLISHED,
					dateModified: MODIFIED,
					breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
					speakable: {
						"@type": "SpeakableSpecification",
						cssSelector: ["#hero-heading", "#collections-heading"]
					}
				})
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
						image: SITE_OG_IMAGE
					}))
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					"@id": `${SITE_URL}/#breadcrumb`,
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "홈",
						item: SITE_URL
					}]
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "HowTo",
					"@id": `${SITE_URL}/#howto`,
					name: "주소모아에서 사이트 주소 찾는 방법",
					description: "주소모아를 이용해 짭플릭스·토렌트킴 등 최신 주소를 찾는 3단계 방법",
					step: [
						{
							"@type": "HowToStep",
							position: 1,
							name: "키워드 입력",
							text: "상단 검색창에 원하는 키워드를 입력합니다."
						},
						{
							"@type": "HowToStep",
							position: 2,
							name: "카테고리 선택",
							text: "카테고리 필터로 OTT, 방송, 토렌트 등을 좁힙니다."
						},
						{
							"@type": "HowToStep",
							position: 3,
							name: "주소 확인",
							text: "키워드 카드를 클릭해 최신 주소와 대체 링크를 확인합니다."
						}
					]
				})
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_¦n¦n_._slug-GRa9I2Be.mjs");
var Route = createFileRoute("/+¦n¦n+/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var TermsRoute = Route$6.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$7
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var PrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	PrivacyRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	Char43Char166nChar166nChar43SlugRoute: Route.update({
		id: "/+¦n¦n+/$slug",
		path: "/+¦n¦n+/$slug",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
