import macroImg from "../assets/capsulas-macro.jpg";
import { BENEFITS, DAY_STEPS, INGREDIENTS } from "../lib/site";
import { CtaButton, Icon, SectionTitle } from "./ui";
import { cn } from "../utils/cn";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            kicker="Por que ZenFit"
            title={
              <>
                Apoio onde a dieta costuma <span className="text-leaf">quebrar</span>: a sua fome.
              </>
            }
            lead="Não é mágica, é fisiologia acompanhada de hábitos. A fórmula atua nos três fronts que mais sabotam uma rotina: apetite, energia e relação emocional com a comida."
          />
          <p className="reveal max-w-xs border-l-2 border-forest/15 pl-4 text-sm font-semibold leading-relaxed text-mist">
            Suplemento alimentar coadjuvante. Não substitui alimentação equilibrada nem atividade física.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {BENEFITS.map((b, i) => (
            <article
              key={b.title}
              style={{ transitionDelay: `${i * 70}ms` }}
              className={cn(
                "reveal card-lift group relative overflow-hidden rounded-[1.6rem] border p-7",
                b.span,
                i === 0
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/10 bg-paper text-forest",
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  "absolute -right-10 -top-10 h-32 w-32 rounded-full transition-transform duration-700 group-hover:scale-125",
                  i === 0 ? "bg-lime/10" : "bg-forest/5",
                )}
              />
              <span
                className={cn(
                  "relative grid h-12 w-12 place-items-center rounded-xl",
                  i === 0 ? "bg-lime text-forest" : "bg-forest text-lime",
                )}
              >
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <p
                className={cn(
                  "mt-6 text-[10px] font-extrabold uppercase tracking-[0.24em]",
                  i === 0 ? "text-lime" : "text-leaf",
                )}
              >
                {b.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">{b.title}</h3>
              <p className={cn("mt-3 leading-relaxed", i === 0 ? "text-cream/75" : "text-mist")}>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DayTimeline() {
  return (
    <section id="como-age" className="relative overflow-hidden bg-forest py-24 text-cream lg:py-32">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.12] invert" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              tone="light"
              kicker="Um dia com ZenFit"
              title={
                <>
                  A fórmula acompanha o relógio da <span className="text-lime">sua fome</span>.
                </>
              }
              lead="Duas cápsulas pela manhã e os ativos trabalham nas janelas do dia em que o apetite costuma decidir por você."
            />
            <div className="reveal mt-9">
              <CtaButton variant="lime">Começar minha rotina</CtaButton>
            </div>
            <p className="reveal mt-6 text-[13px] font-semibold text-cream/60">
              Rotina ilustrativa baseada na sugestão de uso do rótulo. Percepções variam entre pessoas.
            </p>
          </div>
        </div>

        <ol className="relative lg:col-span-7">
          <span aria-hidden="true" className="absolute bottom-6 left-[6.97rem] top-6 w-px bg-cream/15 sm:left-[8.97rem]" />
          {DAY_STEPS.map((s, i) => (
            <li
              key={s.time}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal group relative flex gap-6 pb-10 last:pb-0 sm:gap-10"
            >
              <span className="w-20 shrink-0 pt-1 text-right font-display text-lg font-extrabold text-lime sm:w-24 sm:text-xl">
                {s.time}
              </span>
              <span className="relative mt-2 grid h-4 w-4 shrink-0 place-items-center">
                <span className="absolute h-4 w-4 rounded-full bg-lime/25 transition-transform duration-500 group-hover:scale-150" />
                <span className="h-2 w-2 rounded-full bg-lime" />
              </span>
              <div className="rounded-[1.4rem] border border-cream/12 bg-cream/[0.06] p-6 transition-colors duration-500 group-hover:border-lime/40 group-hover:bg-cream/[0.1]">
                <h3 className="font-display text-xl font-extrabold tracking-tight text-cream">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-cream/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Ingredients() {
  return (
    <section id="composicao" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          align="center"
          kicker="Rótulo aberto"
          title={
            <>
              Seis ativos, zero <span className="text-leaf">mistério</span>.
            </>
          }
          lead="Cada componente entra com dose declarada e função específica. Nada de blend proprietário escondido: o que está no rótulo é o que está na cápsula."
        />

        <div className="reveal relative mt-14 overflow-hidden rounded-[2rem] border border-forest/10 shadow-[0_36px_70px_-38px_rgb(11_59_42/0.5)]">
          <img
            src={macroImg}
            alt="Cápsulas vegetais esverdeadas saindo de um frasco de vidro sobre linho creme, com folhas de chá verde e gengibre"
            className="kenburns h-56 w-full object-cover sm:h-72"
            loading="lazy"
            width={1200}
            height={627}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/20 to-transparent"
          />
          <p className="absolute left-6 top-1/2 max-w-xs -translate-y-1/2 font-display text-xl font-extrabold leading-snug text-cream sm:left-10 sm:text-2xl">
            Cápsulas 100% vegetais, corante natural e zero açúcar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INGREDIENTS.map((ing, i) => (
            <article
              key={ing.name}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal card-lift group rounded-[1.6rem] border border-forest/10 bg-paper p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-forest/15 bg-cream text-pine transition-colors duration-500 group-hover:bg-forest group-hover:text-lime">
                  <Icon name={ing.icon} className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-forest/8 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-pine">
                  {ing.dose}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight text-forest">{ing.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-mist">{ing.text}</p>
            </article>
          ))}
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl rounded-[1.4rem] border border-amber/40 bg-amber/10 p-6 text-center">
          <p className="text-sm font-semibold leading-relaxed text-ink/80">
            Produto dispensado de registro sanitário conforme a Resolução RDC nº 240/2018 da ANVISA.{" "}
            <strong>Não é medicamento</strong> e não se destina a diagnosticar, tratar, curar ou prevenir
            doenças. Gestantes, lactantes e menores de 19 anos não devem consumir sem orientação médica.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Lifestyle() {
  const checks = [
    "Refeições escolhidas por fome real, não por ansiedade",
    "Treino rendendo com energia estável, sem crash",
    "Noites sem assaltar a geladeira às 23h",
    "Constância que vira hábito — e hábito que vira resultado",
  ];
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 shadow-[0_40px_80px_-40px_rgb(11_59_42/0.55)]">
            <img
              src="https://images.pexels.com/photos/5163847/pexels-photo-5163847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Mulher sorrindo enquanto amarra o tênis ao ar livre, pronta para treinar"
              className="kenburns h-[24rem] w-full object-cover sm:h-[30rem]"
              loading="lazy"
              width={1200}
              height={627}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 right-6 font-display text-lg font-extrabold text-cream drop-shadow">
              “A constância ficou fácil quando a fome parou de gritar.”
            </p>
          </div>
          <div className="float-y absolute -right-4 -top-6 rounded-2xl border border-forest/10 bg-paper px-5 py-4 shadow-[0_20px_44px_-20px_rgb(11_59_42/0.5)] sm:-right-8">
            <p className="font-display text-2xl font-extrabold text-forest">90 dias</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-mist">janela recomendada de uso</p>
          </div>
        </div>

        <div>
          <SectionTitle
            kicker="ZenFit na vida real"
            title={
              <>
                O complemento que segura a ponta entre a <span className="text-leaf">intenção e o prato</span>.
              </>
            }
            lead="ZenFit não faz milagre sozinho: ele apoia sua fisiologia enquanto você constrói a rotina. É a diferença entre remar contra a maré e remar com ela."
          />
          <ul className="mt-9 space-y-4">
            {checks.map((c, i) => (
              <li
                key={c}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="reveal flex items-start gap-3.5 text-[17px] font-semibold text-forest/90"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <div className="reveal mt-10 flex flex-wrap items-center gap-5">
            <CtaButton variant="forest">Garantir meu pote hoje</CtaButton>
            <span className="text-sm font-bold text-mist">ou comece pelo plano de 30 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
