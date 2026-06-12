import { Link } from "@tanstack/react-router";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Sparkles } from "lucide-react";
import { COLLECTIONS } from "@/lib/site";

export function SiteHeader() {
  const { theme, toggle, mounted } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-grad-brand text-white font-bold shadow-lg shadow-brand/30">
            주
            <span className="absolute -inset-px rounded-xl ring-1 ring-white/30" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">주소모아</span>
            <span className="text-[10px] tracking-[0.18em] text-muted-foreground">
              링크모음
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          <Link to="/" className="rounded-lg px-3 py-2 hover:bg-accent">홈</Link>
          <a href="/#collections" className="rounded-lg px-3 py-2 hover:bg-accent">링크모음</a>
          <a href="/#torrent" className="rounded-lg px-3 py-2 hover:bg-accent">토렌트</a>
          <Link to="/about" className="rounded-lg px-3 py-2 hover:bg-accent">소개</Link>
          <Link to="/contact" className="rounded-lg px-3 py-2 hover:bg-accent">문의</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="테마 전환"
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card hover:bg-accent transition"
          >
            {mounted ? (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />) : <Sparkles size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const ott = COLLECTIONS.filter((c) => c.category === "OTT" || c.category === "방송" || c.category === "링크모음");
  const torrent = COLLECTIONS.filter((c) => c.category === "토렌트");
  return (
    <footer className="mt-20 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-grad-brand text-white font-bold">
                주
              </span>
              <div>
                <p className="font-display text-base font-bold">주소모아</p>
                <p className="text-xs text-muted-foreground">한국 사용자 전용 링크모음</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              짭플릭스, 코티비씨, 토렌트킴 등 인기 사이트의 최신 주소를 한곳에서 안내합니다.
            </p>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-bold">주요 페이지</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground hover:underline">홈</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground hover:underline">주소모아 소개</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground hover:underline">문의하기</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground hover:underline">개인정보처리방침</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground hover:underline">이용약관</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-bold">OTT · 방송 링크모음</p>
            <ul className="space-y-2 text-sm">
              {ott.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/링크/$slug"
                    params={{ slug: c.hangulSlug }}
                    className="text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {c.keyword} 주소
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-display text-sm font-bold">토렌트 링크모음</p>
            <ul className="space-y-2 text-sm">
              {torrent.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/링크/$slug"
                    params={{ slug: c.hangulSlug }}
                    className="text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {c.keyword} 주소
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} 주소모아 · 모든 권리 보유</p>
          <p>안전한 인터넷 이용을 위해 광고 차단 확장 프로그램 사용을 권장합니다.</p>
        </div>
      </div>
    </footer>
  );
}
