import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-chrome-r0GB9mtT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CEB8BCwF.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
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
							" 문의하기"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold tracking-tight",
						children: "문의하기"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "주소 추가 요청, 잘못된 링크 신고, 광고·제휴 문의 등 모든 의견을 환영합니다. 아래 이메일로 연락 주시면 가능한 빠르게 답변드리겠습니다."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "이메일"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-lg font-bold",
							children: "contact@translatebahasa.pro"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-xl font-bold",
						children: "자주 묻는 항목"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "새로운 링크 추가 요청 — 사이트명과 주소를 함께 보내주세요." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "잘못된 주소 신고 — 해당 페이지 URL과 함께 알려주세요." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "광고·제휴 — 회사명과 제안 내용을 포함해 주세요." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ContactPage as component };
