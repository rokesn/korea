import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as COLLECTIONS } from "./site-D5Rkcff-.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Sun, o as Moon, r as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-chrome-r0GB9mtT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" && localStorage.getItem("theme");
		const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initial = stored ?? (prefersDark ? "dark" : "light");
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
		setMounted(true);
	}, []);
	const toggle = () => {
		setTheme((t) => {
			const next = t === "light" ? "dark" : "light";
			document.documentElement.classList.toggle("dark", next === "dark");
			try {
				localStorage.setItem("theme", next);
			} catch {}
			return next;
		});
	};
	return {
		theme,
		toggle,
		mounted
	};
}
function SiteHeader() {
	const { theme, toggle, mounted } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative grid h-9 w-9 place-items-center rounded-xl bg-grad-brand text-white font-bold shadow-lg shadow-brand/30",
						children: ["주", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-px rounded-xl ring-1 ring-white/30" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold tracking-tight",
							children: "주소모아"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tracking-[0.18em] text-muted-foreground",
							children: "링크모음"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "주요 메뉴",
					className: "hidden items-center gap-1 text-sm md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-lg px-3 py-2 hover:bg-accent",
							children: "홈"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#collections",
							className: "rounded-lg px-3 py-2 hover:bg-accent",
							children: "링크모음"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#torrent",
							className: "rounded-lg px-3 py-2 hover:bg-accent",
							children: "토렌트"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "rounded-lg px-3 py-2 hover:bg-accent",
							children: "소개"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-lg px-3 py-2 hover:bg-accent",
							children: "문의"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "테마 전환",
						onClick: toggle,
						className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-card hover:bg-accent transition",
						children: mounted ? theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 16 })
					})
				})
			]
		})
	});
}
function SiteFooter() {
	const ott = COLLECTIONS.filter((c) => c.category === "OTT" || c.category === "방송" || c.category === "링크모음");
	const torrent = COLLECTIONS.filter((c) => c.category === "토렌트");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-20 border-t border-border/60 bg-card/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-grad-brand text-white font-bold",
							children: "주"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base font-bold",
							children: "주소모아"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "한국 사용자 전용 링크모음"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "짭플릭스, 코티비씨, 토렌트킴 등 인기 사이트의 최신 주소를 한곳에서 안내합니다."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 font-display text-sm font-bold",
						children: "주요 페이지"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						"aria-label": "주요 페이지 링크",
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "text-muted-foreground hover:text-foreground hover:underline",
								children: "홈"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "text-muted-foreground hover:text-foreground hover:underline",
								children: "주소모아 소개"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-muted-foreground hover:text-foreground hover:underline",
								children: "문의하기"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "text-muted-foreground hover:text-foreground hover:underline",
								children: "개인정보처리방침"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "text-muted-foreground hover:text-foreground hover:underline",
								children: "이용약관"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/sitemap.xml",
								className: "text-muted-foreground hover:text-foreground hover:underline",
								children: "사이트맵"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 font-display text-sm font-bold",
						children: "OTT · 방송 링크모음"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						"aria-label": "OTT·방송 링크모음",
						className: "space-y-2 text-sm",
						children: ott.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/링크/$slug",
							params: { slug: c.hangulSlug },
							className: "text-muted-foreground hover:text-foreground hover:underline",
							children: [c.keyword, " 주소"]
						}) }, c.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 font-display text-sm font-bold",
						children: "토렌트 링크모음"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						"aria-label": "토렌트 링크모음",
						className: "space-y-2 text-sm",
						children: torrent.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/링크/$slug",
							params: { slug: c.hangulSlug },
							className: "text-muted-foreground hover:text-foreground hover:underline",
							children: [c.keyword, " 주소"]
						}) }, c.slug))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" 주소모아 · 모든 권리 보유"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "안전한 인터넷 이용을 위해 광고 차단 확장 프로그램 사용을 권장합니다." })]
			})]
		})
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
