import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, RotateCcw,
  Newspaper, Scale, Factory, MapPin, Globe, ChevronLeft,
} from "lucide-react";
import { journey, healthQuestions, insights } from "../data";
import { Eyebrow, SectionHead } from "./ui";
import { Item, Magnetic, Reveal, Stagger, WordReveal, motion, EASE } from "./motion";

/* ================= JOURNEY / LEGACY TIMELINE (SafePoint Tempo) ================= */
const journeyIcons = [Scale, Factory, MapPin, Globe];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 72%", "end 58%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 md:py-20 text-white">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36">
              <Reveal><Eyebrow light>Our Practice Evolution</Eyebrow></Reveal>
              <h2 className="mt-6 max-w-lg font-display text-[1.9rem] leading-[1.12] font-semibold tracking-[-0.025em] md:text-[2.6rem]">
                <WordReveal text="Three decades of dependable legal and labour counsel." />
              </h2>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-[16px] leading-7 text-slate-300">
                  From a specialist industrial-matters practice in Delhi to an all-India compliance institution for establishments, factories and corporate groups.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 border-t border-white/15 pt-5 text-[12px] font-semibold tracking-[0.08em] text-slate-400 uppercase">
                  Advocates on record &nbsp;·&nbsp; One accountable partner &nbsp;·&nbsp; Labour Court to High Court
                </p>
              </Reveal>
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-7">
            <div className="absolute top-2 bottom-2 left-0 w-px bg-white/15">
              <motion.div style={{ scaleY: line }} className="h-full origin-top bg-crimson-500" />
            </div>
            {journey.map((j, i) => {
              const JIcon = journeyIcons[i % journeyIcons.length];
              return (
                <motion.article
                  key={j.phase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: i * 0.06, ease: EASE }}
                  className="relative grid gap-5 border-b border-white/12 py-9 pl-9 first:pt-1 md:grid-cols-[100px_1fr] md:pl-12"
                >
                  <span className="absolute left-[-5px] top-11 h-[11px] w-[11px] bg-crimson-500 ring-4 ring-navy-950 first:top-3" />
                  <div>
                    <JIcon className="h-5 w-5 text-gold-400" />
                    <p className="mt-3 text-[10px] font-bold tracking-[0.2em] text-gold-300 uppercase">{j.phase}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-[21px] font-semibold leading-snug text-white">{j.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">{j.desc}</p>
                    <p className="mt-4 text-[11px] font-semibold tracking-wide text-slate-500 uppercase">{j.tags.join(" · ")}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ COMPLIANCE HEALTH CHECK (SafePoint Interactive Tempo) ============ */
function ScoreDial({ score }: { score: number }) {
  const R = 64;
  const C = 2 * Math.PI * R;
  const frac = score / 100;
  return (
    <div className="relative mx-auto h-40 w-40">
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <circle cx="80" cy="80" r={R} fill="none" stroke="#e8edf4" strokeWidth="12" />
        <motion.circle
          cx="80"
          cy="80"
          r={R}
          fill="none"
          stroke={score >= 80 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626"}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={{ strokeDashoffset: C * (1 - frac) }}
          transition={{ duration: 1.2, ease: EASE }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="font-display text-4xl font-extrabold text-navy-950">{score}</div>
          <div className="text-[11px] font-bold tracking-wider text-mutedfg uppercase">/ 100 Health</div>
        </div>
      </div>
    </div>
  );
}

export function HealthCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = step >= healthQuestions.length;
  const score: number = answers.reduce<number>((a, b) => a + b, 0);

  const tier =
    score >= 80
      ? {
          t: "Strong Compliance Posture",
          d: "Your core filings look well disciplined. A structured compliance audit with Lexus ensures you stay fully protected when new labour code amendments roll out.",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        }
      : score >= 50
        ? {
            t: "Moderate Risk Exposure",
            d: "Critical registers or renewal dates may need attention. A missed inspection notice can lead to penalties. We recommend a compliance review with our team.",
            badge: "bg-amber-50 text-amber-700 border-amber-200",
          }
        : {
            t: "High Exposure to Penalties & Prosecution",
            d: "Substantial statutory liabilities detected across filings or documentation. Immediate executive attention is recommended before notices escalate into litigation.",
            badge: "bg-red-50 text-red-700 border-red-200",
          };

  const pick = (v: number) => {
    const next = [...answers];
    next[step] = v;
    setAnswers(next);
    setStep(step + 1);
  };

  return (
    <section className="bg-white py-16 md:py-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          compact
          eyebrow="Interactive Diagnostic · 60 Seconds"
          title="Check your organisation's compliance health."
          sub="Answer 5 straightforward statutory questions to instantly identify notice risks, filing vulnerabilities, and audit preparedness."
        />

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-line bg-cream shadow-xl shadow-navy-900/5">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-line bg-white px-7 py-4">
              <span className="text-[11.5px] font-bold uppercase tracking-wider text-navy-900">
                {done ? "Diagnostic Result" : `Question ${Math.min(step + 1, healthQuestions.length)} of ${healthQuestions.length}`}
              </span>
              {!done && (
                <div className="flex gap-1.5">
                  {healthQuestions.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-7 rounded-full transition-colors duration-200 ${
                        i < step ? "bg-crimson-600" : i === step ? "bg-navy-900" : "bg-line"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content area */}
            <div className="p-7 md:p-10">
              <AnimatePresence mode="wait">
                {!done ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <h3 className="font-display text-lg leading-snug font-bold text-ink md:text-xl">
                      {healthQuestions[step].q}
                    </h3>
                    <p className="mt-2 text-xs text-mutedfg">{healthQuestions[step].hint}</p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {([
                        ["Fully on track", 20],
                        ["Partially / Unsure", 10],
                        ["No / Behind", 0],
                      ] as const).map(([label, v]) => (
                        <button
                          key={label}
                          onClick={() => pick(v)}
                          className="group rounded-xl border border-line bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:shadow-md"
                        >
                          <span className="block font-display text-xs font-bold text-ink transition group-hover:text-white">
                            {label}
                          </span>
                          <span className="mt-1 flex items-center gap-1 text-[11px] text-mutedfg transition group-hover:text-slate-300">
                            Select <ArrowRight className="h-3 w-3" />
                          </span>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-mutedfg hover:text-navy-900 transition"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" /> Previous Question
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="text-center"
                  >
                    <ScoreDial score={score} />
                    <h3 className="mt-5 font-display text-xl font-bold text-navy-950">{tier.t}</h3>
                    <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-mutedfg md:text-sm">
                      {tier.d}
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                      <Magnetic>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-navy-800"
                        >
                          <span>Request Free Audit Review</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </Magnetic>
                      <button
                        onClick={() => {
                          setStep(0);
                          setAnswers([]);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-3 text-xs font-semibold text-navy-900 hover:bg-muted"
                      >
                        <RotateCcw className="h-3.5 w-3.5" /> Retake Diagnostic
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= INSIGHTS & UPDATES (SafePoint Tempo) ================= */
export function Insights() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
          compact
            center={false}
            eyebrow="Advisory Insights"
            title="Labour law &amp; statutory briefings."
            sub="Practical commentary on circulars, compliance calendars, and Labour Code developments."
          />
          <Reveal delay={0.15}>
            <Magnetic strength={0.2}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-xs font-bold text-navy-950 shadow-sm transition hover:border-navy-900"
              >
                <Newspaper className="h-4 w-4 text-crimson-600" />
                <span>Discuss Your Establishment</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <Stagger gap={0.08} className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((a) => (
            <Item key={a.title} className="h-full">
              <Link
                to={`/insights/${a.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy-900 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="border-l-2 border-crimson-600 pl-2 text-[10.5px] font-bold uppercase tracking-wider text-crimson-700">
                    {a.tag}
                  </span>
                  <span className="text-xs text-mutedfg font-medium">{a.read}</span>
                </div>

                <h3 className="mt-5 font-display text-[18px] font-bold text-ink transition group-hover:text-navy-900">
                  {a.title}
                </h3>
                <p className="mt-2.5 flex-1 text-xs leading-relaxed text-mutedfg">{a.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-bold text-navy-950">
                  <span className="group-hover:text-crimson-600 transition">Read Advisory Note</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
