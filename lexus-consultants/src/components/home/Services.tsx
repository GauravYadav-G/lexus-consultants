import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, X, Check } from "lucide-react";
import { services, type Service } from "../../data";
import heroImg from "../../assets/hero.jpg";
import { Icon, SectionHead } from "../ui";
import { GlowCard, Reveal, motion, EASE } from "../motion";

/* ============================ SERVICES MODAL & GRID ============================ */
const serviceCategories = ["All", "Core Compliance", "Workforce & Payroll", "Advisory & Representation", "Licensing", "Accounting"] as const;

function getServiceCategory(title: string): (typeof serviceCategories)[number] {
  if (/Audits|Contract Labour|Welfare|Disputes|HR Policy|Authorities/.test(title)) return "Advisory & Representation";
  if (/Labour|Establishment|Factory/.test(title)) return "Core Compliance";
  if (/Payroll|Manpower/.test(title)) return "Workforce & Payroll";
  if (/Fire|Shop|FSSAI/.test(title)) return "Licensing";
  if (/Accounting/.test(title)) return "Accounting";
  return "Core Compliance";
}

export function Services() {
  const [activeTab, setActiveTab] = useState<(typeof serviceCategories)[number]>("All");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filtered = services.filter((s) => activeTab === "All" || getServiceCategory(s.title) === activeTab);

  return (
    <section id="services" className="relative isolate overflow-hidden bg-navy-950 py-14 md:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-50 md:bg-fixed"
        style={{ backgroundImage: `url("${heroImg}")` }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-navy-950/70" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          compact
          light
          eyebrow="Our Services"
          title="Every compliance you need, handled."
          sub="From registrations and payroll to audits, employee matters, licences and representation — a comprehensive range of labour law and business support services."
        />

        {/* Category Filter Pills (SafePoint Tempo) */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2">
          {serviceCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveTab(c)}
              className={`rounded-full px-4 py-2 text-[11px] font-bold transition duration-200 sm:px-5 sm:text-xs ${
                activeTab === c
                  ? "bg-navy-900 text-white shadow-md shadow-navy-900/15"
                  : "border border-line bg-white text-mutedfg hover:border-navy-900 hover:text-navy-900"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {/* Services Cards Grid */}
        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((s, idx) => (
              <motion.div
                key={s.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="h-full"
              >
                <GlowCard className="group h-full rounded-2xl">
                  <div className="flex h-full flex-col rounded-2xl border border-line/80 bg-white/95 p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-crimson-500/70 group-hover:shadow-xl group-hover:shadow-navy-900/10 sm:p-5">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-400 transition duration-300 group-hover:bg-crimson-600 group-hover:text-white">
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span className="font-display text-xs font-bold text-mutedfg/60">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-wider text-crimson-600">
                      {getServiceCategory(s.title)}
                    </span>
                    <h3 className="mt-1 font-display text-[17px] font-bold leading-snug text-ink">{s.title}</h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-mutedfg">{s.desc}</p>

                    <ul className="mt-4 space-y-1.5 border-t border-line/70 pt-4 text-xs">
                      {s.points.slice(0, 3).map((p) => (
                        <li key={p} className="flex items-start gap-2 text-slate-700">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson-600" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center justify-between gap-2 border-t border-line/60 pt-4">
                      <button
                        onClick={() => setSelectedService(s)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 transition hover:text-crimson-600"
                      >
                        <span>Explore full scope</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                      <Link to="/contact" className="text-xs font-semibold text-mutedfg hover:text-navy-900">
                        Enquire →
                      </Link>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-8 flex justify-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-md transition hover:bg-gold-100">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Detail Scope Dialog */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-line bg-white p-5 shadow-2xl sm:p-7 md:p-9"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 rounded-full p-2 text-mutedfg hover:bg-muted hover:text-navy-900 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon name={selectedService.icon} className="h-6 w-6" />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-crimson-600">
                    {getServiceCategory(selectedService.title)}
                  </span>
                  <h3 className="max-w-full pr-8 font-display text-xl font-bold text-ink md:text-2xl">{selectedService.title}</h3>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-mutedfg">{selectedService.desc}</p>

              <div className="mt-6 rounded-2xl bg-cream p-5 border border-line">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-navy-950">
                  Deliverables &amp; Scope of Work
                </h4>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-[13.5px]">
                  {selectedService.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <div className="text-xs text-mutedfg">
                  Ready to deploy across Delhi NCR, Bangalore &amp; Pan-India.
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="rounded-full border border-line px-5 py-2.5 text-xs font-semibold text-navy-950 hover:bg-muted"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-navy-800"
                  >
                    <span>Request Retainer Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
