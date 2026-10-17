import { CheckCircle2, XCircle } from "lucide-react";
import { SectionHead } from "../ui";
import { motion, EASE } from "../motion";

/* ============================ BEFORE / AFTER LEXUS ============================ */
export function BeforeAfter() {
  const before = [
    "Scattered filings across disparate vendors",
    "Notices discovered late during audit deadlines",
    "Constant risk of damages, interest & prosecution",
    "Reactive, penalty-driven fire-fighting posture",
  ];
  const after = [
    "One accountable partner managing every statute",
    "Compliance calendar managed proactively every month",
    "Cloud-backed registers, records & challans ready",
    "Advisory-led, zero-penalty peace of mind",
  ];

  return (
    <section className="bg-cream py-16 md:py-20 border-t border-line">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <SectionHead
          compact
          center={false}
          eyebrow="Client Transformation"
          title="What changes on the day we take over."
          sub="No black boxes. From day one, Lexus maps your statutory obligations, fixes outstanding notice gaps, and installs predictable monthly discipline."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl border border-red-200 bg-red-50/50 p-6 shadow-sm"
          >
            <div className="text-[11px] font-bold tracking-wider text-red-600 uppercase">
              Before Lexus
            </div>
            <ul className="mt-5 space-y-3.5 text-[13.5px]">
              {before.map((b) => (
                <li key={b} className="flex gap-2.5 text-slate-700">
                  <XCircle className="h-4.5 w-4.5 shrink-0 text-red-500 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-2xl bg-navy-900 p-6 text-white shadow-xl shadow-navy-900/25"
          >
            <div className="text-[11px] font-bold tracking-wider text-gold-400 uppercase">
              After Lexus
            </div>
            <ul className="mt-5 space-y-3.5 text-[13.5px]">
              {after.map((b) => (
                <li key={b} className="flex gap-2.5 text-slate-200">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-gold-400 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
