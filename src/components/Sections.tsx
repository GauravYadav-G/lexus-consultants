import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Phone, CheckCircle2, XCircle, ChevronDown, Gavel, BookOpen, Mail, MapPin, Send,
  Briefcase, ShieldAlert, BadgeCheck, ShieldCheck, Calendar, X, Check, Search,
} from "lucide-react";
import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import {
  contact, stats, services, industries, laws, advisory, whyUs, process, benefits, faqs, cities, type Service,
} from "../data";
import { Eyebrow, Icon, SectionHead } from "./ui";
import { Counter, GlowCard, Item, Magnetic, Reveal, Stagger, WordReveal, motion, EASE } from "./motion";

/* ============================ HERO (SafePoint Tempo) ============================ */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 52]);

  return (
    <>
      <section id="home" ref={ref} className="relative isolate flex min-h-[850px] items-center overflow-hidden bg-navy-950 pt-36 text-white md:pt-44">
        <motion.img
          src={heroImg}
          alt="Lexus consultant reviewing statutory compliance with business leaders"
          style={{ y: imageY }}
          className="absolute inset-0 -z-30 h-[112%] w-full object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,13,36,0.98)_0%,rgba(5,13,36,0.9)_42%,rgba(5,13,36,0.36)_75%,rgba(5,13,36,0.14)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/25" />

        <motion.div style={{ y: contentY }} className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 md:pb-28">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-gold-300 uppercase"
            >
              <span className="h-px w-10 bg-crimson-500" />
              Labour law consultants · India-wide support
            </motion.div>

            <h1 className="mt-7 font-display text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[4.15rem] xl:text-[4.7rem]">
              <WordReveal text="Labour law compliance, made clear and manageable." delay={0.15} highlight={["manageable."]} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.7, ease: EASE }}
              className="mt-7 max-w-2xl text-[17px] leading-relaxed text-slate-200 md:text-[18px]"
            >
              Experienced consultants help startups, SMEs, manufacturers and large businesses manage registrations, payroll compliance, employee welfare and labour matters, so they can focus on running their business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.88, ease: EASE }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Magnetic>
                <Link to="/contact" className="group inline-flex items-center gap-2 bg-crimson-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:bg-crimson-500">
                  Schedule a consultation
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10">
                <Phone className="h-4 w-4 text-gold-400" /> {contact.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[13px] text-slate-300"
            >
              <span>Advocates &amp; Management Consultants</span>
              <span>Delhi NCR · Bangalore · Pan India</span>
              <span>Labour Court to High Court</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-8 md:px-8 ${i > 0 ? "border-l border-line" : ""}`}>
              <div className="font-display text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[12px] font-semibold text-mutedfg">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ============================ SECTOR MARQUEE ============================ */
export function IndustriesMarquee() {
  const list = [...industries, ...industries];
  return (
    <section className="border-y border-line bg-muted/60 py-8">
      <div className="mx-auto mb-5 flex max-w-7xl items-center justify-between px-6">
        <p className="text-[11px] font-bold tracking-[0.2em] text-mutedfg uppercase">
          Trusted by Businesses Across India
        </p>
        <span className="text-xs text-mutedfg font-medium">16+ Diverse Industrial Sectors</span>
      </div>
      <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-8">
          {list.map((i, idx) => (
            <span key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-[15px] font-semibold text-navy-950">{i}</span>
              <span className="h-px w-8 bg-crimson-500/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ ABOUT (SafePoint Tempo) ============================ */
export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [32, -32]), { stiffness: 80, damping: 22 });

  const principles = [
    ["Three Decades of Practice", "Founded as Advocates & Management Consultants for Industrial Matters, with deep roots in Delhi NCR and Bangalore."],
    ["The Compliance Alarm Clock", "We act before deadlines become damages, interest or prosecution — not after a notice reaches the boardroom."],
    ["One Accountability Partner", "Every statute, register, return, challan and inspection handled through one dedicated point of contact."],
    ["Value-Led Retainers", "Clear scope and transparent pricing, designed to deliver legal security without hidden surprises."],
  ];

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.figure style={{ y: imageY }} className="relative lg:col-span-5">
            <div className="overflow-hidden bg-muted shadow-[0_30px_70px_-34px_rgba(9,23,61,0.35)]">
              <img src={aboutImg} alt="Senior Lexus advocate reviewing a statutory register" className="aspect-[4/5] w-full object-cover" />
            </div>
            <figcaption className="mt-4 flex items-center justify-between border-b border-line pb-4 text-[11px] font-semibold tracking-[0.12em] text-mutedfg uppercase">
              <span>Institutional labour-law practice</span>
              <span>New Delhi · Pan India</span>
            </figcaption>
          </motion.figure>

          <div className="lg:col-span-7 lg:pt-5">
            <Reveal><Eyebrow>About Lexus Consultants</Eyebrow></Reveal>
            <h2 className="mt-6 max-w-2xl font-display text-[2.2rem] leading-[1.1] font-semibold tracking-[-0.025em] text-ink md:text-[3.25rem]">
              <WordReveal text="A three-decade institutional compliance practice." />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-[17px] leading-8 text-mutedfg">
                Lexus Consultants helps businesses across India navigate labour legislation with practical advice and hands-on compliance support. We work with HR, business owners and finance teams to tailor solutions to each organisation’s industry, workforce and operating needs.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <blockquote className="mt-8 max-w-2xl border-l-2 border-crimson-600 pl-6 font-display text-xl leading-8 font-medium text-navy-900">
                “Compliance should be a seamless part of running your business — practical, timely and clear.”
              </blockquote>
            </Reveal>

            <div className="mt-12 border-t border-navy-900/15">
              {principles.map(([title, desc], i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <div className="grid gap-3 border-b border-line py-6 sm:grid-cols-[56px_1fr]">
                    <span className="font-display text-lg font-semibold text-crimson-600">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-[18px] font-bold text-ink">{title}</h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-6 text-mutedfg">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition hover:text-crimson-600">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="services" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Our Services"
          title="Every compliance you need, handled."
          sub="From registrations and payroll to audits, employee matters, licences and representation — a comprehensive range of labour law and business support services."
        />

        {/* Category Filter Pills (SafePoint Tempo) */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {serviceCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveTab(c)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition duration-200 ${
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
        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition duration-300 group-hover:-translate-y-1 group-hover:border-crimson-500/70 group-hover:shadow-xl group-hover:shadow-navy-900/10">
                    <div className="flex items-start justify-between">
                      <span className="grid h-13 w-13 place-items-center rounded-xl bg-navy-900 text-gold-400 transition duration-300 group-hover:bg-crimson-600 group-hover:text-white">
                        <Icon name={s.icon} className="h-6 w-6" />
                      </span>
                      <span className="font-display text-xs font-bold text-mutedfg/60">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-wider text-crimson-600">
                      {getServiceCategory(s.title)}
                    </span>
                    <h3 className="mt-1 font-display text-[19px] font-bold text-ink">{s.title}</h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-mutedfg">{s.desc}</p>

                    <ul className="mt-5 space-y-2 border-t border-line/70 pt-5 text-[13px]">
                      {s.points.slice(0, 4).map((p) => (
                        <li key={p} className="flex items-start gap-2 text-slate-700">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson-600" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-line/60">
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
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-line bg-white p-7 shadow-2xl md:p-9"
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
                  <h3 className="font-display text-2xl font-bold text-ink">{selectedService.title}</h3>
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
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-36">
          <SectionHead
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
    <section className="bg-cream py-24 md:py-32 border-t border-line">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <SectionHead
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

/* ============================ INDUSTRIES CLIENTELE ============================ */
export function Industries() {
  return (
    <section id="industries" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Clientele · Sectors We Advise"
          title="Deep statutory expertise across every sector."
          sub="Statutory nuances differ across IT offices, manufacturing plants, logistics hubs, and hospitals. Our practice is structured to match your industry language."
        />

        <Stagger gap={0.04} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {industries.map((ind) => (
            <Item key={ind} variant="pop">
              <Link
                to="/contact"
                className="group flex items-center justify-between gap-2.5 rounded-xl border border-line bg-cream px-4.5 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:shadow-md"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Briefcase className="h-4 w-4 shrink-0 text-crimson-600 transition group-hover:text-gold-400" />
                  <span className="truncate text-xs font-bold text-ink transition group-hover:text-white">{ind}</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-mutedfg/50 transition group-hover:text-gold-400" />
              </Link>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ WHY LEXUS (Dark SafePoint anchor) ============================ */
export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div className="animate-float-slow absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-crimson-500/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead
          light
          eyebrow="Why Lexus"
          title="Built for businesses that treat compliance as non-negotiable."
          sub="You don't hire us because compliance is optional. You hire us because getting it wrong is expensive."
        />

        <Stagger gap={0.09} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <Item key={w.title} className="h-full">
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-white/[0.08]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500/15 text-gold-400 transition duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-[18px] font-bold text-white">{w.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-300">{w.desc}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ PROCESS ============================ */
export function Process() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Compliance Process"
          title="A rigorous, four-phase engagement."
          sub="No black boxes. Every Lexus engagement follows the same accountable path — from discovery to assurance."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {process.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="group relative rounded-2xl border border-line bg-cream p-7 transition duration-300 hover:border-navy-900 hover:shadow-lg"
            >
              <div className="font-display text-4xl font-extrabold text-navy-900/15 transition group-hover:text-crimson-600">
                0{i + 1}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-mutedfg">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ LABOUR LAWS EXPLORER ============================ */
export function Laws() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = laws.filter((l) => l.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section id="laws" className="bg-muted py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        {/* Left: Acts List with Search */}
        <div className="lg:col-span-7">
          <SectionHead
            center={false}
            eyebrow="Labour Laws &amp; Statutes"
            title="Acts we cover, end to end."
            sub="Complete monthly filing, annual return, and statutory register maintenance under all central and state Acts."
          />

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-sm focus-within:border-navy-900 focus-within:ring-2 focus-within:ring-navy-900/10">
            <Search className="h-4 w-4 text-mutedfg" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter Acts — e.g. PF, Factories, Minimum Wages, CLRA..."
              className="w-full text-xs font-medium text-ink outline-none placeholder:text-mutedfg/60"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="text-xs text-mutedfg hover:text-navy-900">
                Clear
              </button>
            )}
          </div>

          <div className="mt-6 grid max-h-[360px] gap-x-8 overflow-y-auto border-t border-line pr-2 sm:grid-cols-2">
            {filtered.map((l) => (
              <div key={l} className="flex items-center gap-2 border-b border-line py-3 text-xs font-semibold text-navy-900">
                <BookOpen className="h-3.5 w-3.5 text-crimson-600" />
                <span>{l}</span>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-xs text-mutedfg py-4">No matching Act found. We likely cover it under allied state rules.</p>
            )}
          </div>
          <p className="mt-3 text-[11px] text-mutedfg">
            Showing {filtered.length} of {laws.length} major Acts · Plus state Professional Tax and Labour Welfare Funds
          </p>
        </div>

        {/* Right: Advisory & Litigation Issues Covered */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-lg shadow-navy-900/5 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <Gavel className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Industrial Matters &amp; Legal Advice</h3>
                <span className="text-xs text-mutedfg">Advocates for Industrial Disputes</span>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-mutedfg">
              Lexus clients seek advice on critical industrial matters ranging from employee disputes to domestic enquiries:
            </p>

            <ul className="mt-5 space-y-2.5 text-xs border-t border-line pt-5">
              {advisory.slice(0, 8).map((a) => (
                <li key={a} className="flex items-start gap-2 text-slate-700">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson-600" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-muted py-3 text-xs font-bold text-navy-950 transition hover:bg-navy-900 hover:text-white"
            >
              <span>Schedule Legal Case Evaluation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ PAN-INDIA PRESENCE ============================ */
export function Presence() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 md:p-14 text-white">
          <div className="grid-lines absolute inset-0 opacity-50" />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow light>Pan India Presence</Eyebrow>
              <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                Headquartered in Delhi. Providing services across India.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Personalised attention, quick and quality service to every client on a Pan-India basis at value price.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:col-span-7">
              {cities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-200 transition hover:bg-white hover:text-navy-950"
                >
                  <MapPin className="h-3.5 w-3.5 text-crimson-400" />
                  <span>{c}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FAQS ============================ */
export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faqs" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHead
          eyebrow="Frequently Asked Questions"
          title="Answers before you ask."
          sub="The questions we hear most often from CHROs, CFOs and Founders — answered plainly."
        />

        <div className="mt-14 space-y-3.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition duration-200 ${
                  isOpen ? "border-navy-900 bg-white shadow-md" : "border-line bg-white/80 hover:border-line"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                >
                  <span className="font-display text-[15px] font-bold text-ink">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-navy-900">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                    >
                      <p className="px-5 pb-5 text-xs leading-relaxed text-mutedfg md:px-6 md:pb-6">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ CONTACT ============================ */
export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}%0D%0ACompany: ${d.get("company")}%0D%0APhone: ${d.get("phone")}%0D%0AEmail: ${d.get("email")}%0D%0AService: ${d.get("service")}%0D%0A%0D%0AMessage:%0D%0A${d.get("message")}`;
    window.location.href = `mailto:${contact.email}?subject=Labour Compliance Consultation - ${d.get("name")}&body=${body}`;
    setSent(true);
  };

  const inputStyle =
    "w-full rounded-xl border border-line bg-cream px-4 py-3 text-xs font-medium text-ink outline-none transition focus:border-navy-900 focus:bg-white focus:ring-2 focus:ring-navy-900/10";

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        {/* Left: Contact Details */}
        <div className="lg:col-span-5">
          <SectionHead
            center={false}
            eyebrow="Contact Lexus"
            title="Talk to a compliance partner."
            sub="Fifteen minutes with an experienced consultant — walk away with a clear diagnostic of your statutory standing. Zero obligation."
          />

          <div className="mt-8 space-y-3.5">
            <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-mutedfg">Head Office</span>
                <span className="mt-1 block text-xs font-semibold text-ink">{contact.address.join(" ")}</span>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-crimson-600 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-mutedfg">Direct Phone</span>
                <a href={contact.phoneHref} className="mt-1 block text-xs font-bold text-ink hover:text-crimson-600">
                  {contact.phone}
                </a>
                <a href={contact.mobileHref} className="block text-xs text-mutedfg hover:text-crimson-600">
                  Mobile: {contact.mobile}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-mutedfg">Email Inquiries</span>
                <a href={`mailto:${contact.email}`} className="mt-1 block text-xs font-semibold text-ink hover:text-crimson-600">
                  {contact.email}
                </a>
                <span className="block text-[11px] text-mutedfg">Rapid turnaround within 24 business hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Lead Consultation Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-navy-900/5 md:p-9"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-crimson-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-crimson-600">Free 15-Min Audit</span>
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold text-ink">Request a Compliance Case Evaluation</h3>
            <p className="mt-1.5 text-xs text-mutedfg">
              Tell us about your establishment or factory requirements and an advocate or senior consultant will respond promptly.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Full Name *</label>
                <input required name="name" placeholder="e.g. Rajesh Kumar" className={inputStyle} />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Company Name</label>
                <input name="company" placeholder="e.g. Apex Technologies Pvt Ltd" className={inputStyle} />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Phone Number *</label>
                <input required name="phone" type="tel" placeholder="+91 98765 43210" className={inputStyle} />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Email Address</label>
                <input name="email" type="email" placeholder="rajesh@company.com" className={inputStyle} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Select Primary Service</label>
                <select name="service" className={inputStyle} defaultValue="">
                  <option value="" disabled>Select your primary requirement</option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Brief Details / Nature of Inquiry</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Number of employees, locations, notice pending, or compliance requirements..."
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="shimmer relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-navy-900 py-3.5 text-xs font-bold text-white shadow-lg shadow-navy-900/15 transition hover:bg-navy-800"
              >
                <Send className="h-4 w-4 text-gold-400" />
                <span>Submit Evaluation Request</span>
              </button>
            </div>

            {sent && (
              <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-center text-xs font-medium text-emerald-800">
                Thank you! Your default email client has been prepared with your inquiry. You can send it directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================ CLOSING CTA ============================ */
export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="animate-float-slow absolute top-1/2 left-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-crimson-500/20 blur-[130px]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold-400">
            <Calendar className="h-4 w-4" /> Free 15-Min Statutory Audit
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-4xl">
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
