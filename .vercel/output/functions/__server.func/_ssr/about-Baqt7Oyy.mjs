import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as COLLECTIONS } from "./site-D5Rkcff-.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-chrome-r0GB9mtT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Baqt7Oyy.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "breadcrumb",
						className: "mb-4 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:underline",
								children: "홈"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "›"
							}),
							" 소개"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold tracking-tight",
						children: "주소모아 소개"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "주소모아는 한국 인터넷 사용자를 위해 자주 변경되는 인기 사이트의 최신 주소와 검증된 링크를 한곳에 모아 제공하는 링크모음 서비스입니다. 짭플릭스, 코티비씨, 보자요넷 같은 OTT·방송 사이트부터 토렌트킴, 토렌트큐큐, 토렝이 등 인기 토렌트 사이트의 접속 주소까지 빠르고 안전하게 안내합니다."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-xl font-bold",
						children: "서비스 특징"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "매일 점검되는 최신 접속 주소와 미러 링크 제공" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "카테고리별로 정리된 직관적인 링크모음 구조" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "모바일·데스크톱 모두 빠르게 동작하는 가벼운 페이지" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "SEO·GEO 최적화로 검색·AI 답변에서도 쉽게 발견" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-xl font-bold",
						children: "인기 링크모음 바로가기"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3",
						children: COLLECTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/링크/$slug",
							params: { slug: c.hangulSlug },
							className: "text-primary hover:underline",
							children: c.keyword
						}) }, c.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AboutPage as component };
