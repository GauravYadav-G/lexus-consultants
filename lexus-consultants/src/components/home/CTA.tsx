import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { contact } from "../../data";

/* ============================ CLOSING CTA ============================ */
export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-10 md:py-12 text-white">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="animate-float-slow absolute top-1/2 left-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-crimson-500/20 blur-[130px]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center lg:flex-row lg:text-left">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold-400">
            <Calendar className="h-4 w-4" /> Free 15-Min Statutory Audit
          </span>
          <h2 className="mt-3 font-display text-xl font-bold tracking-tight md:text-3xl">
            Turn statutory compliance into a competitive advantage.
          </h2>
          <p className="mt-2 text-xs text-slate-300 md:text-sm">
            One conversation with an experienced Lexus partner. Zero obligation. Full confidentiality.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          <Link
            to="/contact"
            className="shimmer inline-flex items-center gap-2 rounded-full bg-crimson-600 px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-crimson-600/30 transition hover:bg-crimson-500"
          >
            <span>Book My Free Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/20"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
