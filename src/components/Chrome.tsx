import { useEffect, useState } from "react";
import { NAV_LINKS, TICKER_ITEMS } from "../lib/site";
import { useScrollPast } from "../lib/hooks";
import { CtaButton, Icon } from "./ui";
import { cn } from "../utils/cn";

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative z-40 overflow-hidden border-b border-forest/10 bg-forest py-2.5 text-cream">
      <div className="ticker-track gap-0">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 px-6 text-[11px] font-bold uppercase tracking-[0.18em] text-cream/85"
          >
            <Icon name="leaf" className="h-3.5 w-3.5 text-lime" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <a href="#topo" className="group flex items-center gap-2.5" aria-label="ZenFit Cápsulas — início">
      <span
        className={cn(
          "grid h-10 w-10 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[-8deg]",
          tone === "dark" ? "bg-forest text-lime" : "bg-lime text-forest",
        )}
      >
        <Icon name="leaf" className="h-5 w-5" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-xl font-extrabold tracking-tight",
            tone === "dark" ? "text-forest" : "text-cream",
          )}
        >
          ZenFit
        </span>
        <span
          className={cn(
            "block text-[10px] font-extrabold uppercase tracking-[0.34em]",
            tone === "dark" ? "text-pine/70" : "text-lime",
          )}
        >
          Cápsulas
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-forest/10 bg-cream/85 py-3 shadow-[0_10px_30px_-18px_rgb(11_59_42/0.35)] backdrop-blur-md"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-bold text-forest/80 transition-colors hover:text-forest"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CtaButton size="sm" variant="forest" className="hidden sm:inline-flex">
            Garantir meu ZenFit
          </CtaButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-forest/15 text-forest lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-500 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-5 pt-3 sm:px-8" aria-label="Menu móvel">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-bold text-forest transition-colors hover:bg-forest/5"
              >
                {l.label}
              </a>
            ))}
            <CtaButton size="sm" variant="forest" className="mt-2 w-full">
              Garantir meu ZenFit
            </CtaButton>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function StickyCta({ hidden }: { hidden: boolean }) {
  const past = useScrollPast(520);
  const show = past && !hidden;
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-500",
        show ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!show}
    >
      <div className="border-t border-forest/15 bg-paper/95 px-4 py-3 shadow-[0_-16px_40px_-20px_rgb(11_59_42/0.45)] backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-display text-sm font-extrabold text-forest">ZenFit Cápsulas · 60 cápsulas</p>
            <p className="text-xs font-semibold text-mist">Planos a partir de R$ 99 por pote · garantia de 7 dias</p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-pine sm:hidden">Garantia de 7 dias</p>
          <CtaButton size="md" variant="lime" className="flex-1 sm:flex-none">
            Quero minha oferta
          </CtaButton>
        </div>
      </div>
    </div>
  );
}

export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="noise-bg pointer-events-none fixed inset-0 z-30 opacity-[0.055] mix-blend-multiply"
    />
  );
}
