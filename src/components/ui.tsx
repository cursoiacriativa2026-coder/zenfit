import type { ReactNode, SVGProps } from "react";
import { AFF_URL } from "../lib/site";
import { cn } from "../utils/cn";

/* ---------------- Ícones autorais (traço) ---------------- */

const PATHS: Record<string, ReactNode> = {
  bowl: (
    <>
      <path d="M4 12h16a8 8 0 0 1-16 0Z" />
      <path d="M9.5 8.5c0-1.6 1-1.7 1-3.2M14 8.5c0-1.6 1-1.7 1-3.2" />
    </>
  ),
  bolt: <path d="M13 2 4.5 14H10l-1 8 8.5-12H12l1-8Z" />,
  spark: <path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2Z" />,
  flame: (
    <path d="M12 3c3 4 6 6.2 6 10.2A6 6 0 0 1 6 13.2c0-2 1-4 3-6 0 2 .8 3 2 3 0-3 .2-5.2 1-7.2Z" />
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.4 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />,
  wave: (
    <>
      <path d="M3 9c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2" />
      <path d="M3 15c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 3-2" />
    </>
  ),
  hex: (
    <>
      <path d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6V7.1Z" />
      <circle cx="12" cy="11.7" r="2.6" />
    </>
  ),
  drop: <path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11Z" />,
  tea: (
    <>
      <path d="M5 10h11v4.5a5.5 5.5 0 0 1-11 0Z" />
      <path d="M16 11h1.8a2.6 2.6 0 0 1 0 5.2H16" />
      <path d="M8.5 6.5c.8-1.8 2.6-2.4 4.5-2-.6 1.9-2.2 2.8-4.5 2Z" />
    </>
  ),
  root: (
    <path d="M6 13c0-1.9 1.6-3.4 3.4-3.2.5-1.8 2.2-2.8 3.7-2.2 1.4.6 2.2 2 1.9 3.4 1.7-.3 3.3 1 3.3 2.8s-1.6 3.3-3.4 3.1c-.5 1.7-2.2 2.6-3.7 2-1.4-.6-2.2-2-1.9-3.3C7.5 15.7 6 14.7 6 13Z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v6.1c0 4.6-3.2 7.7-7.5 9.4-4.3-1.7-7.5-4.8-7.5-9.4V6Z" />
      <path d="M9 12l2.2 2.2L15.5 9.7" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  cookie: (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-8.5-8.5c0 2.4 1.6 3.6 3.4 3.6 1.5 0 2.4-.8 2.4-2 1.7 1.5 2.7 4 2.7 6.9Z" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2.2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 7h11v9h-11Z" />
      <path d="M13.5 10h4.2l3.3 3.2V16h-7.5" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  leaf: (
    <>
      <path d="M4.5 19.5C4.5 10 10.5 4.5 20 4.5c0 9.5-6 15-15.5 15Z" />
      <path d="M4.5 19.5C8.5 14 12.5 10 17 7.5" />
    </>
  ),
  capsule: (
    <>
      <rect x="3.2" y="8.6" width="17.6" height="7" rx="3.5" transform="rotate(-32 12 12)" />
      <path d="M9.4 7.6l5.2 8.8" />
    </>
  ),
  star: (
    <path
      d="M12 2.8l2.7 5.7 6.2.8-4.6 4.3 1.2 6.1-5.5-3-5.5 3 1.2-6.1L3.1 9.3l6.2-.8Z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export function Icon({
  name,
  className,
  ...rest
}: { name: keyof typeof PATHS | string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
      {...rest}
    >
      {PATHS[name] ?? PATHS.leaf}
    </svg>
  );
}

/* ---------------- CTA -> oferta ---------------- */

export function CtaButton({
  children,
  variant = "lime",
  size = "md",
  className,
  onClick,
}: {
  children: ReactNode;
  variant?: "lime" | "forest" | "outline" | "cream";
  size?: "md" | "lg" | "sm";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={AFF_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={onClick}
      className={cn(
        "btn-cta group inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold tracking-tight",
        size === "lg" && "px-9 py-4.5 text-lg",
        size === "md" && "px-7 py-3.5 text-base",
        size === "sm" && "px-5 py-2.5 text-sm",
        variant === "lime" &&
          "bg-lime text-ink shadow-[0_16px_34px_-14px_rgb(203_232_79/0.75)] hover:bg-[#d7f165]",
        variant === "forest" &&
          "bg-forest text-cream shadow-[0_16px_34px_-16px_rgb(11_59_42/0.8)] hover:bg-pine",
        variant === "cream" &&
          "bg-cream text-forest shadow-[0_16px_34px_-16px_rgb(244_239_226/0.5)] hover:bg-paper",
        variant === "outline" &&
          "border-2 border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-forest/5",
        className,
      )}
    >
      <span>{children}</span>
      <Icon name="arrow" className="btn-arrow h-5 w-5 shrink-0" />
    </a>
  );
}

/* ---------------- Apoios ---------------- */

export function Kicker({ children, tone = "forest" }: { children: ReactNode; tone?: "forest" | "lime" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em]",
        tone === "forest" ? "bg-forest/8 text-pine" : "bg-lime/15 text-lime",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full pulse-dot", tone === "forest" ? "bg-leaf" : "bg-lime")} />
      {children}
    </span>
  );
}

export function SectionTitle({
  kicker,
  title,
  lead,
  tone = "dark",
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  lead?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={cn("reveal max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Kicker tone={tone === "dark" ? "forest" : "lime"}>{kicker}</Kicker>
      <h2
        className={cn(
          "mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl",
          tone === "dark" ? "text-forest" : "text-cream",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-mist" : "text-cream/70")}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5 text-amber", className)} aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className="h-4 w-4" />
      ))}
    </span>
  );
}

export function BottleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" aria-hidden="true" className={cn("h-8 w-6", className)}>
      <rect x="8" y="1.5" width="8" height="4" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.5 6.5h7c2.6 1.6 4 4 4 7v13a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-13c0-3 1.4-5.4 4-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M4.8 15h14.4v8H4.8z" fill="currentColor" opacity="0.22" />
      <path d="M9.5 19h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
