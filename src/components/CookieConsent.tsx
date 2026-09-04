import { useEffect, useRef } from "react";
import { useBodyLock } from "../lib/hooks";
import { COOKIE_REDIRECT_URL } from "../lib/site";
import { Icon } from "./ui";

export function CookieConsent({
  open,
  onAccept,
  onDismiss,
}: {
  open: boolean;
  onAccept: () => void;
  onDismiss: () => void;
}) {
  const acceptRef = useRef<HTMLButtonElement>(null);
  useBodyLock(open);

  useEffect(() => {
    if (open) acceptRef.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onDismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onDismiss]);

  /** Salva o consentimento e leva o usuário ao checkout na mesma aba. */
  const chooseAndRedirect = (choice: "aceitar" | "fechar") => {
    if (choice === "aceitar") onAccept();
    else onDismiss();
    window.location.assign(COOKIE_REDIRECT_URL);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
    >
      {/* o site fica fosco atrás */}
      <div className="frost-overlay frost-enter absolute inset-0" aria-hidden="true" />

      <div className="modal-pop relative w-full max-w-md overflow-hidden rounded-[1.5rem] border border-forest/12 bg-paper shadow-[0_50px_100px_-40px_rgb(11_59_42/0.8)]">
        <div className="flex items-center justify-center gap-2.5 border-b border-forest/8 bg-cream pt-7 pb-5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-lime">
            <Icon name="cookie" className="h-5 w-5" />
          </span>
          <h2
            id="cookie-title"
            className="font-display text-xl font-extrabold uppercase tracking-[0.12em] text-forest"
          >
            Política de Cookies
          </h2>
        </div>

        <div className="px-7 pb-7 pt-6">
          <p className="text-center text-[15px] leading-relaxed text-mist">
            Este site utiliza cookies para melhorar a sua experiência de navegação e fornecer serviços
            personalizados a você.
          </p>
          <p className="mt-4 text-center text-[12px] font-semibold leading-relaxed text-mist/80">
            Ao clicar em <strong className="text-pine">Aceitar</strong>, você concorda com cookies essenciais,
            de desempenho e marketing. Em <strong className="text-clay">Fechar</strong>, mantemos apenas os
            essenciais. Você pode rever essa escolha a qualquer momento no rodapé.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <button
              ref={acceptRef}
              type="button"
              onClick={() => chooseAndRedirect("aceitar")}
              className="btn-cta rounded-xl bg-pine px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-cream shadow-[0_14px_30px_-14px_rgb(20_86_62/0.9)] hover:bg-forest"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => chooseAndRedirect("fechar")}
              className="btn-cta rounded-xl bg-clay px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-cream shadow-[0_14px_30px_-14px_rgb(194_74_56/0.9)] hover:bg-[#a83c2c]"
            >
              Fechar
            </button>
          </div>

          <p className="mt-5 text-center text-[11px] font-semibold text-mist/70">
            A Política de Cookies completa está disponível no rodapé do site.
          </p>
        </div>
      </div>
    </div>
  );
}
