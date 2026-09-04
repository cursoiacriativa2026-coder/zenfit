import bottleImg from "../assets/zenfit-bottle.jpg";
import { STATS } from "../lib/site";
import { useCountUp, useInView } from "../lib/hooks";
import { CtaButton, Icon, Kicker, Stars } from "./ui";

function StatItem({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const display = useCountUp(value, decimals, inView);
  return (
    <div ref={ref} className="reveal flex flex-col gap-1 px-6 py-6 first:pl-0 last:pr-0 sm:px-8">
      <span className="font-display text-4xl font-extrabold tracking-tight text-forest sm:text-[2.75rem]">
        {display}
        <span className="text-leaf">{suffix}</span>
      </span>
      <span className="text-sm font-semibold leading-snug text-mist">{label}</span>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="relative border-y border-forest/10 bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-forest/10 px-5 sm:px-8 lg:grid-cols-4 lg:divide-x">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
      <p className="border-t border-forest/10 px-5 py-3 text-center text-[11px] font-semibold text-mist sm:px-8">
        *Pesquisa de satisfação com 1.240 clientes que usaram por 90 dias (2025). Depoimentos individuais — os
        resultados variam de pessoa para pessoa.
      </p>
    </section>
  );
}

function CircleBadge() {
  return (
    <div className="spin-slow absolute -left-6 bottom-10 h-28 w-28 sm:-left-10 sm:h-32 sm:w-32" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <path id="circlePath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" className="fill-forest" />
        <text className="fill-lime text-[10px] font-bold uppercase" style={{ letterSpacing: "0.22em" }}>
          <textPath href="#circlePath">suplemento alimentar • zenfit •</textPath>
        </text>
        <g transform="translate(48,48)">
          <path
            d="M2 22C2 10 10 3 22 3c0 12-7 19-20 19Z"
            fill="none"
            stroke="#CBE84F"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {/* camadas de fundo */}
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(47_158_104/0.18),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-52 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(231_160_60/0.14),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <Kicker>Peptídeos bioativos + zinco + cromo</Kicker>
          <h1 className="mt-6 font-display text-[2.9rem] font-extrabold leading-[0.98] tracking-tight text-forest sm:text-6xl lg:text-[4.3rem]">
            <span className="line-mask">
              <span style={{ animationDelay: "0.05s" }}>Menos impulso.</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.18s" }}>Mais saciedade.</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.31s" }} className="text-leaf">
                Sem brigar com a comida.
              </span>
            </span>
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-mist">
            O ZenFit Cápsulas reúne peptídeos bioativos, zinco e cromo para apoiar o controle do apetite, o
            equilíbrio da glicose e uma energia estável ao longo do dia — sem dietas extremas, sem culpa e sem
            promessas mágicas.
          </p>

          <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton size="lg" variant="lime">
              Quero meu ZenFit com oferta
            </CtaButton>
            <a
              href="#planos"
              className="group inline-flex items-center gap-2 text-base font-extrabold text-forest underline decoration-lime decoration-4 underline-offset-8 transition-colors hover:text-pine"
            >
              Ver planos e garantia
              <Icon name="arrow" className="h-4 w-4 rotate-90 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          <ul className="reveal mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-bold text-forest/80">
            <li className="flex items-center gap-2">
              <Icon name="lock" className="h-4.5 w-4.5 text-leaf" /> Compra segura
            </li>
            <li className="flex items-center gap-2">
              <Icon name="shield" className="h-4.5 w-4.5 text-leaf" /> Garantia de 7 dias
            </li>
            <li className="flex items-center gap-2">
              <Icon name="truck" className="h-4.5 w-4.5 text-leaf" /> Envio para todo o Brasil
            </li>
          </ul>
          <p className="reveal mt-6 max-w-xl border-l-2 border-amber/70 pl-4 text-[13px] font-semibold leading-relaxed text-mist">
            As informações deste site são apenas informativas. Para maiores detalhes, consulte um médico ou
            profissional de saúde antes de iniciar qualquer suplementação.
          </p>
        </div>

        {/* palco do produto */}
        <div className="relative lg:col-span-6">
          <div className="reveal relative mx-auto max-w-md lg:max-w-lg">
            <div className="arch relative overflow-hidden border border-forest/10 bg-gradient-to-b from-pine to-forest shadow-[0_50px_90px_-40px_rgb(11_59_42/0.65)]">
              <img
                src={bottleImg}
                alt="Frasco do suplemento alimentar ZenFit Cápsulas sobre fundo creme, com folhas de chá verde ao lado"
                className="kenburns h-[26rem] w-full object-cover sm:h-[30rem]"
                width={900}
                height={1100}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgb(203_232_79/0.16),transparent_55%)]"
              />
            </div>

            <CircleBadge />

            <div className="float-y absolute -right-3 top-8 rounded-2xl border border-forest/10 bg-paper px-4 py-3 shadow-[0_20px_40px_-20px_rgb(11_59_42/0.5)] sm:-right-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-mist">Fórmula</p>
              <p className="font-display text-sm font-extrabold text-forest">Zinco · Cromo · B6</p>
            </div>
            <div className="float-y-slow absolute -left-3 top-1/3 rounded-2xl border border-forest/10 bg-paper px-4 py-3 shadow-[0_20px_40px_-20px_rgb(11_59_42/0.5)] sm:-left-10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-mist">Sem</p>
              <p className="font-display text-sm font-extrabold text-forest">Açúcar · Glúten</p>
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-forest/10 bg-forest px-5 py-4 text-cream shadow-[0_24px_50px_-22px_rgb(11_59_42/0.8)] sm:right-10">
              <Stars />
              <p className="mt-1.5 font-display text-sm font-extrabold">4,8 de 5</p>
              <p className="text-[11px] font-semibold text-cream/70">2.314 avaliações verificadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
