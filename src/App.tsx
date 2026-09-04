import { useCallback, useEffect, useState } from "react";
import { Header, NoiseOverlay, StickyCta, Ticker } from "./components/Chrome";
import { Hero, StatsBand } from "./components/Hero";
import { Benefits, DayTimeline, Ingredients, Lifestyle } from "./components/Sections";
import { Faq, FinalCta, Offers, Testimonials } from "./components/Social";
import { Footer, LegalModal, type LegalKind } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { useRevealOnScroll } from "./lib/hooks";

const CONSENT_KEY = "zenfit_cookie_consent";

export default function App() {
  const [cookieOpen, setCookieOpen] = useState(false);
  const [legal, setLegal] = useState<LegalKind | null>(null);

  useRevealOnScroll();

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(CONSENT_KEY);
    } catch {
      saved = null;
    }
    if (saved) return;
    const t = window.setTimeout(() => setCookieOpen(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  const saveConsent = (choice: "aceitar" | "fechar") => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, ts: Date.now() }));
    } catch {
      /* armazenamento indisponível */
    }
  };

  const handleAccept = useCallback(() => {
    saveConsent("aceitar");
    setCookieOpen(false);
  }, []);

  const handleDismiss = useCallback(() => {
    saveConsent("fechar");
    setCookieOpen(false);
  }, []);

  const anyModalOpen = cookieOpen || legal !== null;

  return (
    <>
      <div className="relative min-h-screen bg-cream">
        <Ticker />
        <Header />
        <main>
          <Hero />
          <StatsBand />
          <Benefits />
          <DayTimeline />
          <Ingredients />
          <Lifestyle />
          <Testimonials />
          <Offers />
          <Faq />
          <FinalCta />
        </main>
        <Footer onOpenLegal={setLegal} onOpenCookies={() => setCookieOpen(true)} />
        <StickyCta hidden={anyModalOpen} />
        <NoiseOverlay />
      </div>

      {legal && <LegalModal kind={legal} onClose={() => setLegal(null)} />}
      <CookieConsent open={cookieOpen} onAccept={handleAccept} onDismiss={handleDismiss} />
    </>
  );
}
