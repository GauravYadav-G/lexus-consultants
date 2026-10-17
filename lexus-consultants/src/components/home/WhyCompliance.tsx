import { CheckCircle2, Briefcase, ShieldAlert, BadgeCheck, ShieldCheck } from "lucide-react";
import { benefits } from "../../data";
import { SectionHead } from "../ui";
import { Item, Reveal, Stagger } from "../motion";

/* ============================ WHY COMPLIANCE MATTERS ============================ */
export function WhyCompliance() {
  const cards = [
    {
      icon: ShieldAlert,
    title: "Avoid penalties and legal action",
      desc: "Missing a statutory requirement can lead to penalties, legal consequences and disruption. Timely filings and well-maintained records help reduce those risks.",
    },
    {
      icon: BadgeCheck,
      title: "Protect your reputation",
      desc: "A compliance violation can affect your organisation’s credibility. Consistent, fair practices help protect trust with employees and business partners.",
    },
    {
      icon: Briefcase,
      title: "Build employee trust",
      desc: "Fair treatment and proper compliance support a positive work environment, employee confidence and smooth business operations.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-36">
          <SectionHead
          compact
            center={false}
            eyebrow="Why It Matters"
            title="Why labour compliance is non-negotiable."
            sub="Indian labour legislation protects workforce welfare while imposing stringent statutory duties on management. Getting it right is an operational advantage."
          />
          <Reveal delay={0.2} className="mt-8">
            <div className="rounded-2xl border border-line bg-cream p-6">
              <div className="flex items-center gap-2.5 text-xs font-bold text-navy-950 uppercase tracking-wider">
                <ShieldCheck className="h-4.5 w-4.5 text-crimson-600" />
                The Lexus Difference
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-mutedfg">
                Practical, business-friendly guidance, timely compliance management and clear communication, tailored to your organisation.
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger gap={0.1} className="space-y-5 lg:col-span-7">
          {cards.map((c) => (
            <Item key={c.title}>
              <div className="group flex gap-5 rounded-2xl border border-line bg-cream p-7 transition duration-300 hover:border-navy-900 hover:bg-navy-900 hover:shadow-xl hover:shadow-navy-900/10">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-crimson-50 text-crimson-600 transition duration-300 group-hover:bg-crimson-600 group-hover:text-white">
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-[18px] font-bold text-ink transition group-hover:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mutedfg transition group-hover:text-slate-300">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>

      {/* Benefits checklist strip */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-2xl border border-line bg-muted/40 p-6 md:p-8">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-navy-950 mb-5">
            Key Outcomes Delivered
          </h4>
          <Stagger gap={0.06} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Item key={b}>
                <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-800">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-crimson-600" />
                  <span>{b}</span>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
