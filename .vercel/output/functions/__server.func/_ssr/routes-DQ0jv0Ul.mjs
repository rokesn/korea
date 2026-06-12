import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as COLLECTIONS } from "./site-D5Rkcff-.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Search, c as ArrowUpRight, i as Shield, s as Clock, t as Zap } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-chrome-r0GB9mtT.mjs";
import { t as MODIFIED } from "./routes-BXej9TBV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQ0jv0Ul.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HERO_SHORTCUTS = [
	"짭플릭스",
	"토렌트킴",
	"코티비씨",
	"토렌트큐큐",
	"토렝이"
];
var FAQ_ITEMS = [
	{
		q: "주소모아는 무엇인가요?",
		a: "주소모아는 자주 찾는 한국 사이트의 최신 주소와 대체 링크를 한곳에 모아 제공하는 링크모음 사이트입니다. 회원가입 없이 무료로 이용할 수 있습니다."
	},
	{
		q: "짭플릭스·토렌트킴 주소가 막혔을 때 어떻게 하나요?",
		a: "주소모아의 해당 키워드 페이지에서 최신 대체 주소와 미러 사이트를 바로 확인할 수 있습니다. 페이지를 북마크해 두면 언제든 빠르게 접근할 수 있습니다."
	},
	{
		q: "토렌트 사이트 주소가 자주 바뀌는 이유는?",
		a: "국내 ISP의 차단 정책으로 인해 도메인이 주기적으로 변경됩니다. 주소모아는 변경을 감지하면 즉시 최신 주소로 업데이트합니다."
	},
	{
		q: "어떤 카테고리의 사이트를 안내하나요?",
		a: "OTT(짭플릭스·보자요넷), 실시간 방송(코티비씨·티비룸·후후티비·티비몬·티비착), 토렌트(토렌트킴·토렌트큐큐·토렌트씨·토렝이·토렌트순위·토렌트추천), 링크모음(링크천국) 등 4개 카테고리를 제공합니다."
	},
	{
		q: "VPN 없이도 접속 가능한 주소를 안내하나요?",
		a: "네, 주소모아는 VPN 없이도 접속 가능한 주소를 우선적으로 안내합니다. 단, ISP 환경에 따라 다를 수 있으므로 대체 주소도 함께 확인하세요."
	},
	{
		q: "링크는 얼마나 자주 업데이트되나요?",
		a: "도메인 변경이 감지될 때마다 즉시 업데이트하며, 주기적인 점검을 통해 모든 링크의 접속 가능 여부를 확인합니다."
	},
	{
		q: "사이트 이용 시 보안은 괜찮나요?",
		a: "외부 사이트 방문 시 uBlock Origin 등 광고 차단 확장 프로그램과 최신 백신 소프트웨어를 함께 사용하시길 권장합니다. 주소모아 자체에는 별도의 광고나 추적 코드가 없습니다."
	},
	{
		q: "무료로 이용할 수 있나요?",
		a: "네, 주소모아의 모든 링크모음은 회원가입·결제 없이 무료로 이용할 수 있습니다."
	}
];
function Home() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("전체");
	const categories = (0, import_react.useMemo)(() => ["전체", ...Array.from(new Set(COLLECTIONS.map((c) => c.category)))], []);
	const filtered = COLLECTIONS.filter((c) => (category === "전체" || c.category === category) && (query === "" || c.keyword.includes(query) || c.tagline.includes(query) || c.slug.includes(query.toLowerCase())));
	const torrentItems = COLLECTIONS.filter((c) => c.category === "토렌트");
	const modifiedDate = new Date(MODIFIED).toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"aria-labelledby": "hero-heading",
						className: "relative overflow-hidden border-b border-border/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 hero-aurora opacity-80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 grid-bg opacity-50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-6xl px-4 pt-20 pb-24 md:pt-28 md:pb-32 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-1.5 w-1.5 rounded-full bg-grad-brand",
												"aria-hidden": "true"
											}),
											"한국 사용자 전용 · ",
											COLLECTIONS.length,
											"개 키워드 큐레이션"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										id: "hero-heading",
										className: "mt-6 font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]",
										children: [
											"주소를 모으다,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-grad-brand",
												children: "링크를 정리하다."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-2xl text-base md:text-lg font-semibold text-foreground/80 leading-relaxed",
										children: "짭플릭스 · 코티비씨 · 토렌트킴 · 토렌트큐큐 · 토렝이 최신 주소"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-2 max-w-2xl text-sm text-muted-foreground leading-relaxed",
										children: "자주 바뀌는 한국 인기 사이트 접속 주소를 한곳에서 빠르게 찾아드립니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										role: "search",
										"aria-label": "키워드 검색",
										onSubmit: (e) => e.preventDefault(),
										className: "mx-auto mt-10 flex max-w-xl items-center gap-1.5 rounded-2xl border border-border bg-card/80 p-1.5 shadow-xl shadow-brand/10 backdrop-blur",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
												size: 18,
												className: "ml-3 text-muted-foreground",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "search",
												value: query,
												onChange: (e) => setQuery(e.target.value),
												placeholder: "키워드 검색 (예: 토렌트순위, 짭플릭스)",
												"aria-label": "사이트 키워드 검색",
												autoComplete: "off",
												className: "flex-1 bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												"aria-label": "검색 실행",
												className: "rounded-xl bg-grad-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 hover:opacity-95",
												children: "검색"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "바로가기:" }), HERO_SHORTCUTS.map((kw) => {
											const col = COLLECTIONS.find((c) => c.keyword === kw);
											return col ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/링크/$slug",
												params: { slug: col.hangulSlug },
												className: "hover:text-foreground hover:underline transition-colors",
												"aria-label": `${kw} 최신 주소 링크모음 바로가기`,
												children: kw
											}, kw) : null;
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap justify-center gap-2",
										role: "group",
										"aria-label": "카테고리 필터",
										children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setCategory(cat),
											"aria-pressed": category === cat,
											className: `rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${category === cat ? "border-transparent bg-grad-brand text-white shadow-md shadow-brand/30" : "border-border bg-card/60 hover:border-foreground/30"}`,
											children: cat
										}, cat))
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"aria-labelledby": "features-heading",
						className: "border-b border-border/60 bg-card/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "features-heading",
							className: "sr-only",
							children: "주소모아 서비스 특징"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3",
							children: [
								{
									icon: Zap,
									heading: "초고속 안내",
									desc: "한 번의 클릭으로 최신 접속 주소"
								},
								{
									icon: Shield,
									heading: "검증된 링크",
									desc: "수시 점검·미러 사이트 함께 안내"
								},
								{
									icon: Clock,
									heading: "24/7 업데이트",
									desc: "도메인 변경 즉시 반영"
								}
							].map(({ icon: Icon, heading, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-grad-brand text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										size: 18,
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: heading
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: desc
								})] })]
							}, heading))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "collections",
						"aria-labelledby": "collections-heading",
						className: "mx-auto max-w-6xl px-4 py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 flex items-end justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand",
									children: "Collections"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "collections-heading",
									className: "mt-2 font-display text-3xl md:text-4xl font-bold",
									children: "인기 링크모음"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: [
										"실시간으로 검증된 ",
										COLLECTIONS.length,
										"개의 키워드 큐레이션 — 짭플릭스·코티비씨·토렌트킴·토렌트큐큐 등"
									]
								})
							] })
						}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "status",
							className: "py-12 text-center text-muted-foreground",
							children: "검색 결과가 없습니다."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							role: "list",
							className: "grid gap-5 list-none sm:grid-cols-2 lg:grid-cols-3",
							"aria-label": "링크모음 목록",
							children: filtered.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/링크/$slug",
								params: { slug: c.hangulSlug },
								"aria-label": `${c.keyword} 링크모음 바로가기`,
								className: "group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-transparent hover:ring-brand",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-grad-brand opacity-0 blur-3xl transition group-hover:opacity-40"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs font-medium",
											children: c.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] uppercase tracking-wider text-muted-foreground",
											"aria-hidden": "true",
											children: ["#", String(i + 1).padStart(2, "0")]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-xl font-bold tracking-tight",
										children: [
											c.keyword,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "sr-only",
												children: "주소 링크모음"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "line-clamp-2 text-sm text-muted-foreground",
										children: c.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-muted-foreground/70",
										children: [c.keyword, " 최신 주소 · 링크모음"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex items-center justify-between pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted-foreground",
											children: [c.links.length, "개 링크"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-xs font-medium text-grad-brand",
											children: ["최신 주소 보기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
												size: 14,
												"aria-hidden": "true",
												className: "text-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
											})]
										})]
									})
								]
							}) }, c.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "torrent",
						"aria-labelledby": "torrent-heading",
						className: "border-y border-border/60 bg-card/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-4 py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand",
										children: "Featured · 토렌트"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "torrent-heading",
										className: "mt-2 font-display text-3xl md:text-4xl font-bold",
										children: "지금 가장 많이 찾는 토렌트 사이트"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "토렌트킴 · 토렌트큐큐 · 토렌트씨 · 토렝이의 최신 주소를 한 번에 확인하세요."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#collections",
									className: "text-sm font-medium text-grad-brand hover:underline",
									"aria-label": "전체 링크모음 목록으로 이동",
									children: "전체 링크모음 보기 →"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								role: "list",
								className: "grid gap-4 list-none sm:grid-cols-2 lg:grid-cols-4",
								"aria-label": "토렌트 사이트 링크모음",
								children: torrentItems.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/링크/$slug",
									params: { slug: c.hangulSlug },
									"aria-label": `${c.keyword} 최신 주소 바로가기`,
									className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-5 transition hover:border-transparent hover:ring-brand",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "h-2 w-2 rounded-full bg-grad-brand",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] uppercase tracking-wider text-muted-foreground",
												children: "Torrent"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "mt-3 font-display text-lg font-bold",
											children: [
												c.keyword,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "sr-only",
													children: "최신 주소"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 line-clamp-2 text-xs text-muted-foreground",
											children: c.tagline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											size: 16,
											"aria-hidden": "true",
											className: "absolute right-4 top-4 text-muted-foreground transition group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
										})
									]
								}) }, c.slug))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-labelledby": "about-heading",
						className: "mx-auto max-w-4xl px-4 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "about-heading",
									className: "mt-2 font-display text-3xl font-bold",
									children: "주소모아란?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-7 text-muted-foreground",
									children: "주소모아는 한국 사용자들이 자주 찾는 사이트의 최신 주소를 모아 안내하는 링크모음 전문 서비스입니다. 짭플릭스, 코티비씨, 보자요넷, 티비룸, 후후티비, 티비몬, 링크천국, 티비착, 토렌트킴, 토렌트큐큐, 토렌트씨, 토렝이 등 도메인 변경으로 접속이 불편했던 사용자들을 위해 검증된 최신 링크를 빠르게 제공합니다."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 space-y-3",
									"aria-label": "주소모아 이용 방법 3단계",
									children: [
										"상단 검색창에 원하는 키워드를 입력합니다.",
										"카테고리 필터로 OTT, 방송, 토렌트 등을 좁힙니다.",
										"키워드 카드를 클릭해 최신 주소와 대체 링크를 확인합니다."
									].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grad-brand text-xs font-bold text-white",
											"aria-hidden": "true",
											children: i + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "pt-0.5 text-sm leading-6",
											children: s
										})]
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "text-sm font-medium text-grad-brand hover:underline",
										"aria-label": "주소모아 서비스 소개 페이지 보기",
										children: "서비스 소개 전체 보기 →"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("time", {
										dateTime: MODIFIED,
										className: "text-xs text-muted-foreground",
										"aria-label": "최근 업데이트",
										children: ["업데이트: ", modifiedDate]
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "faq",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-[0.2em] text-grad-brand",
										children: "FAQ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-3xl font-bold",
										children: "자주 묻는 질문"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "짭플릭스·토렌트킴·코티비씨 관련 자주 묻는 질문"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
										className: "mt-4 space-y-3",
										children: FAQ_ITEMS.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
											open: idx === 0,
											className: "group rounded-2xl border border-border bg-card p-4 open:ring-brand",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
												className: "cursor-pointer list-none font-semibold flex items-center justify-between text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ml-2 shrink-0 text-grad-brand transition group-open:rotate-45 text-xl leading-none",
													"aria-hidden": "true",
													children: "+"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "mt-2 text-sm leading-6 text-muted-foreground",
												children: f.a
											})]
										}, f.q))
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
