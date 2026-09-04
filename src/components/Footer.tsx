import { useEffect } from "react";
import { LEGAL, MEDICAL_NOTICE, NAV_LINKS } from "../lib/site";
import { useBodyLock } from "../lib/hooks";
import { Icon } from "./ui";
import { Logo } from "./Chrome";

export type LegalKind = keyof typeof LEGAL;

export function LegalModal({ kind, onClose }: { kind: LegalKind; onClose: () => void }) {
  const doc = LEGAL[kind];
  useBodyLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={doc.title}>
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="frost-overlay frost-enter absolute inset-0 cursor-default"
      />
      <div className="modal-pop relative flex max-h-[82vh] w-full max-w-2xl flex-col overflow-hidden rounded-[1.6rem] border border-forest/15 bg-paper shadow-2xl">
        <header className="flex items-center justify-between gap-6 border-b border-forest/10 bg-cream px-7 py-5">
          <div>
            <h2 className="font-display text-xl font-extrabold tracking-tight text-forest">{doc.title}</h2>
            <p className="text-xs font-semibold text-mist">{doc.updated}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest hover:text-cream"
            aria-label="Fechar janela"
          >
            <Icon name="close" className="h-4.5 w-4.5" />
          </button>
        </header>
        <div className="overflow-y-auto px-7 py-6">
          {doc.sections.map((s) => (
            <section key={s.h} className="mb-6 last:mb-0">
              <h3 className="font-display text-base font-extrabold text-forest">{s.h}</h3>
              {s.p.map((par) => (
                <p key={par.slice(0, 24)} className="mt-2 text-[14.5px] leading-relaxed text-mist">
                  {par}
                </p>
              ))}
            </section>
          ))}
          <p className="mt-8 rounded-xl border border-amber/40 bg-amber/10 p-4 text-[13px] font-semibold leading-relaxed text-ink/75">
            {MEDICAL_NOTICE}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Footer({
  onOpenLegal,
  onOpenCookies,
}: {
  onOpenLegal: (k: LegalKind) => void;
  onOpenCookies: () => void;
}) {
  return (
    <footer className="relative bg-ink pb-28 pt-20 text-cream/80 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal rounded-[1.6rem] border border-amber/35 bg-amber/10 p-7 sm:p-8">
          <p className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.2em] text-amber">
            <Icon name="shield" className="h-4.5 w-4.5" /> Aviso importante
          </p>
          <p className="mt-3 max-w-4xl text-[14.5px] leading-relaxed text-cream/80">
            {MEDICAL_NOTICE} Este produto é um suplemento alimentar, não é um medicamento e não substitui uma
            alimentação equilibrada nem hábitos saudáveis. Resultados variam de pessoa para pessoa.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-cream/60">
              Suplemento alimentar desenvolvido para apoiar saciedade, energia estável e uma relação mais leve
              com a comida. Fabricado em planta certificada em Boas Práticas de Fabricação.
            </p>
            <div className="mt-5 flex gap-2">
              {["Pix", "Cartão 12x", "Boleto"].map((p) => (
                <span
                  key={p}
                  className="rounded-lg border border-cream/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-cream/70"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-lime">Navegue</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-lime">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Documentos legais">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-lime">Transparência</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              <li>
                <button type="button" onClick={() => onOpenLegal("privacidade")} className="transition-colors hover:text-lime">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onOpenLegal("termos")} className="transition-colors hover:text-lime">
                  Termos de Uso
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onOpenLegal("cookies")} className="transition-colors hover:text-lime">
                  Política de Cookies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCookies}
                  className="flex items-center gap-2 transition-colors hover:text-lime"
                >
                  <Icon name="cookie" className="h-4 w-4" /> Preferências de cookies
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-lime">Atendimento</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              <li>
                <a href="mailto:suporte@zenfitcaps.com.br" className="transition-colors hover:text-lime">
                  suporte@zenfitcaps.com.br
                </a>
              </li>
              <li className="text-cream/60">Segunda a sexta, das 9h às 18h (exceto feriados)</li>
              <li className="text-cream/60">Pedidos e garantia processados pela plataforma Braip</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-7 text-[12px] font-semibold text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ZenFit Cápsulas. Todos os direitos reservados.</p>
          <p className="max-w-xl sm:text-right">
            Este site não é destinado a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte sempre
            um médico ou profissional de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
}
