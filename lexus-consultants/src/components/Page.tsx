import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { contact } from "../data";
import { Eyebrow } from "./ui";
import { Magnetic, WordReveal } from "./motion";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-[12px] text-mutedfg">
      <Link to="/" className="hover:text-navy-900">Home</Link>
      {items.map((it) => (
        <span key={it.label} className="inline-flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" />
          {it.to ? (
            <Link to={it.to} className="hover:text-navy-900">{it.label}</Link>
          ) : (
            <span className="font-semibold text-navy-900">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  highlight = [],
  crumbs,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  highlight?: string[];
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream pt-36 pb-12 md:pt-44 md:pb-16">
      <div className="grid-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Breadcrumb items={crumbs} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[2.2rem] leading-[1.12] font-bold tracking-tight text-ink md:text-[3.1rem]">
            <WordReveal text={title} highlight={highlight} />
          </h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-mutedfg">{sub}</p>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="border-y border-line bg-white py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-xl font-bold text-ink">Monthly compliance updates, straight to your inbox.</h3>
          <p className="mt-1.5 text-sm text-mutedfg">Circulars, deadlines and labour-law changes — curated for HR and business owners across India.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${contact.email}?subject=Subscribe%20to%20Lexus%20updates`;
          }}
          className="flex w-full max-w-md gap-2"
        >
          <input
            type="email"
            required
            placeholder="Work email"
            className="flex-1 rounded-full border border-line bg-cream px-5 py-3 text-sm outline-none focus:border-navy-900"
          />
          <button className="rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white hover:bg-navy-800">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Turn compliance from a liability into a competitive edge." }: { title?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-12 md:py-14 text-white">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-gold-400 uppercase">Free 15-min compliance audit</p>
          <h2 className="mt-2 max-w-xl font-display text-2xl font-bold md:text-3xl">{title}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-crimson-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-crimson-500">
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold hover:bg-white/10">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Newsletter />
      <CtaBand />
    </>
  );
}
