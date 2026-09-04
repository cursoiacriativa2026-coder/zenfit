import { FAQS, MEDICAL_NOTICE, PLANS, TESTIMONIALS } from "../lib/site";
import { BottleMark, CtaButton, Icon, SectionTitle, Stars } from "./ui";
import { cn } from "../utils/cn";

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden bg-sand/40 py-24 lg:py-32">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          align="center"
          kicker="Experiências reais"
          title={
            <>
              Quem já colocou o ZenFit na <span className="text-leaf">rotina</span>.
            </>
          }
          lead="Avaliações coletadas no pós-compra da plataforma Braip. Relatos individuais: sua experiência pode ser diferente."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={cn(
                "postcard reveal relative rounded-[1.5rem] border border-forest/10 bg-paper p-8 shadow-[0_24px_50px_-30px_rgb(11_59_42/0.45)]",
                t.rotate,
                i % 2 === 1 && "md:translate-y-8",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 rotate-[-3deg] rounded-sm bg-lime/80 shadow-sm"
              />
              <div className="flex items-center justify-between gap-4">
                <Stars />
                <span className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-leaf">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} /> Compra verificada
                </span>
              </div>
              <p className="mt-5 text-[16.5px] leading-relaxed text-ink/85">“{t.text}”</p>
              <footer className="mt-6 flex items-center gap-4 border-t border-forest/10 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-forest font-display text-sm font-extrabold text-lime">
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-display text-base font-extrabold text-forest">
                    {t.name}, {t.age} anos
                  </p>
                  <p className="text-xs font-semibold text-mist">{t.city}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
        <p className="reveal mt-14 text-center text-[13px] font-semibold text-mist">
          Depoimentos relativos a experiências individuais, cedidos por clientes que autorizaram a publicação.
          Resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}

export function Offers() {
  return (
    <section id="planos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          align="center"
          kicker="Planos e garantia"
          title={
            <>
              Escolha o tamanho da sua <span className="text-leaf">constância</span>.
            </>
          }
          lead="Quanto maior o plano, menor o valor por pote — porque mudança de hábito leva tempo. Todos com garantia incondicional de 7 dias."
        />

        <div className="mt-16 grid items-stretch gap-7 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <article
              key={p.name}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={cn(
                "reveal card-lift relative flex flex-col rounded-[1.8rem] border p-8",
                p.highlight
                  ? "border-forest bg-forest text-cream shadow-[0_44px_90px_-40px_rgb(11_59_42/0.75)] lg:-translate-y-4 lg:scale-[1.03]"
                  : "border-forest/12 bg-paper text-forest",
              )}
            >
              {p.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink shadow">
                  Mais escolhido
                </span>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight">{p.name}</h3>
                  <p className={cn("text-sm font-semibold", p.highlight ? "text-cream/65" : "text-mist")}>
                    {p.days}
                  </p>
                </div>
                <span className={cn("flex gap-1", p.highlight ? "text-lime" : "text-pine")} aria-label={`${p.pots} potes`}>
                  {Array.from({ length: p.pots }).map((_, k) => (
                    <BottleMark key={k} className="h-7 w-5" />
                  ))}
                </span>
              </div>

              <div className="mt-7 flex items-end gap-2">
                <span className={cn("text-sm font-bold", p.highlight ? "text-cream/60" : "text-mist")}>R$</span>
                <span className="font-display text-6xl font-extrabold leading-none tracking-tight">{p.price}</span>
              </div>
              <p className={cn("mt-2 text-sm font-bold", p.highlight ? "text-lime" : "text-leaf")}>
                {p.installments} · {p.perPot}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-[15px] font-semibold">
                    <Icon
                      name="check"
                      strokeWidth={2.6}
                      className={cn("mt-0.5 h-4 w-4 shrink-0", p.highlight ? "text-lime" : "text-leaf")}
                    />
                    <span className={p.highlight ? "text-cream/85" : "text-ink/80"}>{perk}</span>
                  </li>
                ))}
              </ul>

              <CtaButton variant={p.highlight ? "lime" : "forest"} className="mt-8 w-full">
                Garantir este plano
              </CtaButton>
              <p className={cn("mt-4 text-center text-[11px] font-bold uppercase tracking-[0.16em]", p.highlight ? "text-cream/55" : "text-mist")}>
                Pix · Cartão em até 12x · Boleto
              </p>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 grid gap-6 rounded-[1.8rem] border border-forest/12 bg-paper p-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-forest text-lime">
            <Icon name="shield" className="h-10 w-10" />
          </span>
          <div>
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-forest">
              Garantia incondicional de 7 dias
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-mist">
              Recebeu e não sentiu que é para você? Devolvemos 100% do valor pago dentro de 7 dias após o
              recebimento, conforme o art. 49 do CDC. Sem formulário infinito, sem pergunta constrangedora —
              basta acionar o suporte da Braip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="duvidas" className="relative bg-sand/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              kicker="Perguntas frequentes"
              title={
                <>
                  Transparência antes do <span className="text-leaf">checkout</span>.
                </>
              }
              lead="Se a sua dúvida não estiver aqui, fale com nosso atendimento ou, melhor ainda, com o seu médico."
            />
            <div className="reveal mt-9 rounded-[1.5rem] border border-forest/12 bg-paper p-7">
              <p className="font-display text-lg font-extrabold text-forest">Ainda em dúvida?</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Nosso time responde em até 1 dia útil:{" "}
                <a
                  href="mailto:suporte@zenfitcaps.com.br"
                  className="font-bold text-pine underline decoration-lime decoration-2 underline-offset-4"
                >
                  suporte@zenfitcaps.com.br
                </a>
              </p>
              <p className="mt-4 border-t border-forest/10 pt-4 text-[13px] font-semibold leading-relaxed text-mist">
                {MEDICAL_NOTICE}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                style={{ transitionDelay: `${i * 50}ms` }}
                className="faq-item reveal group rounded-[1.3rem] border border-forest/12 bg-paper open:border-forest/30 open:shadow-[0_24px_50px_-30px_rgb(11_59_42/0.4)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-display text-lg font-extrabold tracking-tight text-forest">
                  {f.q}
                  <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest/8 text-pine">
                    <Icon name="plus" className="h-4.5 w-4.5" strokeWidth={2.4} />
                  </span>
                </summary>
                <p className="px-6 pb-7 leading-relaxed text-mist">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-cream lg:py-28">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.12] invert" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(203_232_79/0.16),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="reveal text-[11px] font-extrabold uppercase tracking-[0.3em] text-lime">
          Oferta ativa por tempo limitado
        </p>
        <h2 className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
          Sua próxima versão começa com uma <span className="text-lime">escolha pequena</span>: duas cápsulas por
          dia.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
          Entre para o time de mais de 12 mil clientes que decidiram parar de brigar com a fome — com garantia
          total de 7 dias para testar sem risco.
        </p>
        <div className="reveal mt-10 flex justify-center">
          <CtaButton size="lg" variant="lime">
            Quero meu ZenFit agora
          </CtaButton>
        </div>
        <p className="reveal mx-auto mt-8 max-w-xl text-[12.5px] font-semibold leading-relaxed text-cream/55">
          {MEDICAL_NOTICE}
        </p>
      </div>
    </section>
  );
}
