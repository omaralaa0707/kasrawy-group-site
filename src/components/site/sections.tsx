"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { useKasrawy } from "@/content/schema-ext";
import { BRANDS, HIGHLIGHT_ONLY, POSTS, PROFILE, NEWS } from "@/content/media";
import { Gate } from "@/components/webgl/gate";

/* ---------------------------------------------------------------- motion -- */

function useOnScreen<T extends HTMLElement>(rootMargin = "-8% 0px -8% 0px") {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reveal = () => node.setAttribute("data-seen", "");
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin]);
  return ref;
}

function fi(i: number): CSSProperties {
  return { "--flash-i": i } as CSSProperties;
}

function Flash({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useOnScreen<HTMLDivElement>();
  return (
    <div ref={ref} data-flash="" className={className}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------- nav -- */

export function Nav() {
  const { dir, toggleLocale } = useLocale();
  const c = useKasrawy();
  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-ground/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="signmark flex items-center gap-2 text-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mark.svg" alt="" className="h-6 w-6 invert" aria-hidden />
          KASRAWY GROUP
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {c.nav.map((l) => (
            <a key={l.href} href={l.href} className="label hover:text-cream">
              {l.label}
            </a>
          ))}
        </nav>
        <button onClick={toggleLocale} className="chip rounded-sm border border-gold/50 px-2.5 py-1.5 text-gold">
          {dir === "rtl" ? "EN" : "ع"}
        </button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------- hero -- */

function Hero() {
  const c = useKasrawy();
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pt-16">
      <Flash className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div data-flash-item style={fi(0)} className="min-w-0">
          <p className="label mb-4">{c.hero.eyebrow}</p>
          <h1 className="sign text-hero m-hero mb-5">{c.hero.headline}</h1>
          <p className="text-lead max-w-prose text-muted">{c.hero.sub}</p>
          <p className="fine mt-4 border-s-2 border-gold ps-3 italic">{c.hero.finding}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={PROFILE.mapsUrl} target="_blank" rel="noreferrer" className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ground">
              {c.hero.primaryCta}
            </a>
            <a href="#brands" className="label rounded-sm border border-cream/30 px-5 py-2.5">
              {c.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div data-flash-item style={fi(1)} className="grid grid-cols-2 gap-3 self-start">
          {c.hero.counts.map((s) => (
            <div key={s.label} className="rounded-sm bg-panel p-4">
              <p className="signmark tnum text-2xl">{s.value}</p>
              <p className="fine text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Flash>
    </section>
  );
}

/* ----------------------------------------------------------------- brands -- */

function Brands() {
  const c = useKasrawy();
  return (
    <section id="brands" className="border-t border-cream/10 bg-panel/40 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Flash className="max-w-3xl">
          <p data-flash-item style={fi(0)} className="label mb-3">{c.brands.eyebrow}</p>
          <h2 data-flash-item style={fi(1)} className="sign text-display m-head mb-4">{c.brands.heading}</h2>
          <p data-flash-item style={fi(2)} className="text-muted">{c.brands.intro}</p>
        </Flash>
        <Flash className="mt-8 grid gap-4 sm:grid-cols-2">
          {BRANDS.map((b, i) => (
            <div key={b.name} data-flash-item style={fi(i)} className="rounded-sm bg-panel p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="latin text-lg font-semibold">{b.name}</h3>
                <span className={`chip rounded-sm px-2 py-1 ${b.status === "represented" ? "bg-gold text-ground" : "bg-ground text-muted"}`}>
                  {b.status === "represented" ? c.brands.statusRepresented : c.brands.statusAnnounced}
                </span>
              </div>
              <p className="fine mt-2 text-muted">{c.brands.evidence[b.name]}</p>
            </div>
          ))}
        </Flash>
        <p className="fine mt-4 max-w-3xl text-muted">
          {c.brands.highlightFootnote.replace("AITO", HIGHLIGHT_ONLY)}
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- authors -- */

function Authors() {
  const c = useKasrawy();
  const selfPosts = POSTS.filter((p) => !p.isCollab);
  const collabPosts = POSTS.filter((p) => p.isCollab);
  return (
    <section id="authors" className="border-t border-cream/10 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Flash className="max-w-3xl">
          <p data-flash-item style={fi(0)} className="label mb-3">{c.authors.eyebrow}</p>
          <h2 data-flash-item style={fi(1)} className="sign text-display m-head mb-4">{c.authors.heading}</h2>
          <p data-flash-item style={fi(2)} className="text-muted">{c.authors.intro}</p>
        </Flash>

        <Flash className="mt-8 grid gap-6 md:grid-cols-2">
          <div data-flash-item style={fi(0)} className="rounded-sm bg-panel p-5">
            <p className="label mb-3">{c.authors.selfLabel} · {selfPosts.length}</p>
            <ul className="flex flex-col gap-2.5">
              {selfPosts.map((p) => (
                <li key={p.code} className="fine border-b border-cream/10 pb-2.5 last:border-0 last:pb-0">{c.authors.summaries[p.code]}</li>
              ))}
            </ul>
          </div>
          <div data-flash-item style={fi(1)} className="rounded-sm bg-panel p-5">
            <p className="label mb-3">{c.authors.collabLabel} · {collabPosts.length}</p>
            <ul className="flex flex-col gap-2.5">
              {collabPosts.map((p) => (
                <li key={p.code} className="fine border-b border-cream/10 pb-2.5 last:border-0 last:pb-0">
                  <span className="latin chip text-gold">@{p.author}</span> — {c.authors.summaries[p.code]}
                </li>
              ))}
            </ul>
          </div>
        </Flash>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- gate -- */

function GateSection() {
  const c = useKasrawy();
  return (
    <section id="gate" className="border-t border-cream/10 bg-panel/40 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Flash className="max-w-3xl">
          <p data-flash-item style={fi(0)} className="label mb-3">{c.gate.eyebrow}</p>
          <h2 data-flash-item style={fi(1)} className="sign text-display m-head mb-4">{c.gate.heading}</h2>
          <p data-flash-item style={fi(2)} className="text-muted">{c.gate.intro}</p>
        </Flash>
        <div className="mt-8">
          <Gate />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- news -- */

function News() {
  const c = useKasrawy();
  return (
    <section id="news" className="border-t border-cream/10 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Flash className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div data-flash-item style={fi(0)} className="min-w-0">
            <p className="label mb-3">{c.news.eyebrow}</p>
            <h2 className="sign text-display m-head mb-4">{c.news.heading}</h2>
            <p className="fine text-muted">{c.news.sourceLabel} <span className="latin chip text-gold">{NEWS.source}</span></p>
          </div>
          <div data-flash-item style={fi(1)} className="min-w-0 rounded-sm bg-panel p-5">
            <p className="latin text-base font-semibold">{NEWS.headline}</p>
            <p className="fine latin mt-3 text-muted">&ldquo;{c.news.quote}&rdquo;</p>
            <p className="fine latin mt-3 text-muted">{c.news.detail}</p>
            <p className="label mb-2 mt-5">{c.news.partnersLabel}</p>
            <div className="flex flex-wrap gap-1.5">
              {NEWS.partners.map((p) => (
                <span key={p} className="chip rounded-sm bg-ground px-2 py-1 normal-case">{p}</span>
              ))}
            </div>
          </div>
        </Flash>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- contact -- */

function Contact() {
  const c = useKasrawy();
  return (
    <section id="contact" className="border-t border-cream/10 bg-panel/40 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Flash className="grid gap-8 md:grid-cols-2">
          <div data-flash-item style={fi(0)}>
            <h2 className="sign text-display m-head mb-4">{c.contact.heading}</h2>
            <p className="label mb-1">{c.contact.addressLabel}</p>
            <p className="bidi mb-3">{c.contact.address}</p>
            <p className="fine text-muted">{c.contact.noPhoneNote}</p>
          </div>
          <div data-flash-item style={fi(1)} className="flex flex-col items-start gap-3">
            <a href={c.contact.mapsUrl} target="_blank" rel="noreferrer" className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ground">{c.contact.cta}</a>
            {c.contact.instagramUrl && (
              <a href={c.contact.instagramUrl} target="_blank" rel="noreferrer" className="label rounded-sm border border-cream/30 px-5 py-2.5">Instagram</a>
            )}
          </div>
        </Flash>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ shell -- */

export function Sections() {
  return (
    <main>
      <Hero />
      <Brands />
      <Authors />
      <GateSection />
      <News />
      <Contact />
    </main>
  );
}

export function Footer() {
  const c = useKasrawy();
  return (
    <footer className="border-t border-cream/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5">
        <p className="fine text-muted">{c.footer.rights}</p>
      </div>
    </footer>
  );
}
