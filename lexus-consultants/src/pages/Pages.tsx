import { useState, type FormEvent } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Phone, Mail, Send, Link2,
  Search, Building2,
} from "lucide-react";
import {
  contact, offices, socialLinks, services, cities, faqs, extraFaqs, whyUs,
  labourCodes, laws, advisory, journey,
  insights, monthlyDues, annualDues, stats,
} from "../data";
import { Icon, SectionHead } from "../components/ui";
import { Item, Stagger, Counter } from "../components/motion";
import { PageHero, PageShell } from "../components/Page";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { LegalUpdates } from "../components/home/LegalUpdates";
import aboutImg from "../assets/about.jpg";

/* ================= ABOUT ================= */
export function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Lexus Consultants"
        title="Built on trust. Driven by compliance."
        sub="Lexus is a professional consultancy helping businesses stay compliant with labour laws and government regulations across India — Advocates and Management Consultants for Industrial Matters."
        crumbs={[{ label: "About" }]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <img src={aboutImg} alt="Lexus office" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl" />
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">Compliance shouldn't slow your business down.</h2>
            <p className="mt-4 leading-relaxed text-mutedfg">
              We help businesses in Delhi, Delhi NCR, Bangalore and across India manage labour law compliance and consultancy. A missed requirement can lead to penalties, legal disputes and reputational damage. Our experienced team helps employers understand their obligations and take practical steps to meet them.
            </p>
            <p className="mt-4 leading-relaxed text-mutedfg">
              We work closely with HR teams, business owners and finance departments, tailoring support to each organisation’s industry, workforce size and operating needs. Our services include statutory registrations, payroll compliance, labour law audits, contract labour management, employee welfare and representation.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-line bg-cream p-5">
                  <div className="font-display text-3xl font-extrabold text-navy-900">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-mutedfg">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Why Choose Us" title="Four reasons clients stay with Lexus." />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <Item key={w.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <Icon name={w.icon} className="h-8 w-8 text-crimson-600" />
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm text-mutedfg">{w.desc}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Our History and Practice" title="Nearly three decades in labour law consultancy." sub="Lexus describes itself as Advocates and Management Consultants for Industrial Matters, combining legal experience with practical compliance support." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {journey.map((item) => (
              <article key={item.phase} className="rounded-2xl border border-line bg-cream p-7">
                <span className="text-xs font-bold tracking-[0.14em] text-crimson-600 uppercase">{item.phase}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mutedfg">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Our Promise" title="Transparent, dedicated, proactive." />
          <ul className="mx-auto mt-10 max-w-2xl space-y-3 text-sm">
            {["In-depth knowledge of Central and State labour laws", "Practical, business-friendly guidance", "Timely and accurate compliance management", "Transparent communication", "A long-term partnership approach", "Representation before labour authorities and courts"].map((t) => (
              <li key={t} className="flex gap-3 rounded-xl border border-line bg-cream p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-crimson-600" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= SERVICES LIST ================= */
export function ServicesPage() {
  const cats = ["All", ...Array.from(new Set(services.map((s) => s.category)))];
  const [cat, setCat] = useState("All");
  const list = services.filter((s) => cat === "All" || s.category === cat);
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="Every compliance you need, handled."
        sub="From registration to representation — labour law, payroll, licences and HR under one roof across Delhi NCR, Bangalore and Pan India."
        crumbs={[{ label: "Services" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2.5 text-xs font-bold ${cat === c ? "bg-navy-900 text-white" : "border border-line bg-cream text-mutedfg"}`}>
                {c}
              </button>
            ))}
          </div>
          <Link to="/labour-law-consultants" className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-full border border-line bg-cream px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-navy-900 hover:bg-white">
            Read our labour law consultancy guide <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-7 transition hover:-translate-y-1 hover:border-navy-900 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="mt-5 text-[10px] font-bold tracking-wider text-crimson-600 uppercase">{s.category}</span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-mutedfg">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-900">
                  Explore service <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= LABOUR LAWS ================= */
export function LabourLawsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Labour laws and compliance"
        title="Understand the rules that shape your workplace."
        sub="Lexus advises businesses on labour legislation, statutory compliance, employee matters and representation. Requirements depend on your workforce, operations and location."
        crumbs={[{ label: "Labour Laws" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="India’s Labour Codes" title="Four Codes, a consolidated framework." sub="The four Labour Codes came into force on 21 November 2025. State rules and transition requirements may affect what applies to a particular establishment." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {labourCodes.map((code, i) => (
              <article key={code.title} className="rounded-2xl border border-line bg-cream p-6 md:p-7">
                <span className="text-xs font-bold tracking-[0.15em] text-crimson-600 uppercase">Code 0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-900">{code.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mutedfg">{code.desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-mutedfg">The list below names legislation and subject areas reflected in Lexus’s published service information. Several central enactments have been consolidated into the Labour Codes; applicability and current transition rules should be checked for each workplace and state.</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-navy-900 underline">
            <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2200433&lang=1&reg=3" target="_blank" rel="noreferrer">Government of India: Labour Codes announcement</a>
            <a href="https://lexusconsultants.in/Labour-Laws.html" target="_blank" rel="noreferrer">Lexus official Labour Laws page</a>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHead center={false} eyebrow="Legislation and subject areas" title="Compliance coverage" sub="Support spans registrations, periodic filings, registers, returns, inspection support and advice on employment matters." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {laws.map((law) => <li key={law} className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink">{law}</li>)}
            </ul>
          </div>
          <div>
            <SectionHead center={false} eyebrow="Advisory and representation" title="Workplace matters we advise on" />
            <ul className="mt-8 space-y-3">
              {advisory.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-line bg-white p-4 text-sm text-ink"><CheckCircle2 className="h-5 w-5 shrink-0 text-crimson-600" />{item}</li>)}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">Discuss your requirements <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= SERVICE DETAIL ================= */
export function ServiceDetailPage() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/services" replace />;
  const steps = ["Consultation", "Document collection", "Verification", "Application filing", "Authority processing", "Approval", "Post-approval compliance"];
  return (
    <PageShell>
      <PageHero
        eyebrow={s.category}
        title={`${s.title} in Delhi NCR, Bangalore & Pan India`}
        sub={s.desc}
        crumbs={[{ label: "Services", to: "/services" }, { label: s.title }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-2xl font-bold text-ink">What this engagement covers</h2>
            <p className="mt-3 text-mutedfg">
              Lexus Consultants provides this service from its New Delhi base and supports clients in locations including Bangalore, Mumbai, Chennai and Chandigarh. The work is tailored to the applicable requirements and your organisation’s needs.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 rounded-xl border border-line bg-cream p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" /> {p}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-2xl font-bold text-ink">How the process works</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((st, i) => (
                <li key={st} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-display font-bold text-ink">{st}</div>
                    <p className="text-sm text-mutedfg">The exact steps depend on the service, applicable requirements and information available for your organisation.</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-line bg-cream p-5 sm:p-7 lg:sticky lg:top-36">
              <h3 className="font-display text-lg font-bold text-ink">Talk to a consultant</h3>
              <p className="mt-2 text-sm text-mutedfg">Contact our team to discuss your {s.title.toLowerCase()} requirements.</p>
              <Link to="/contact" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-3 text-sm font-bold text-white">
                Book compliance audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={contact.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-navy-900">
                <Phone className="h-4 w-4 text-crimson-600" /> {contact.phone}
              </a>
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-xs font-bold tracking-wider text-mutedfg uppercase">Related services</p>
                <ul className="mt-3 space-y-2">
                  {services.filter((x) => x.slug !== s.slug).slice(0, 4).map((x) => (
                    <li key={x.slug}>
                      <Link to={`/services/${x.slug}`} className="text-sm font-medium text-navy-900 hover:text-crimson-600">{x.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= FAQS ================= */
export function FaqsPage() {
  const all = [...faqs, ...extraFaqs];
  const [open, setOpen] = useState(0);
  const [q, setQ] = useState("");
  const list = all.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase()));
  return (
    <PageShell>
      <PageHero
        eyebrow="Frequently Asked"
        title="Everything you wanted to know about compliance."
        sub="Straight answers from Lexus consultants — on PF, ESIC, labour law, licences, payroll and pricing."
        crumbs={[{ label: "FAQs" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 flex items-center gap-3 rounded-xl border border-line bg-cream px-4 py-3">
            <Search className="h-4 w-4 text-mutedfg" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search FAQs…" className="w-full bg-transparent text-sm outline-none" />
          </div>
          <div className="space-y-3">
            {list.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-line bg-cream">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-display font-bold text-ink">{f.q}</span>
                  <span className="text-navy-900">{open === i ? "–" : "+"}</span>
                </button>
                {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-mutedfg">{f.a}</p>}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-mutedfg">
            Didn't find your answer? <Link to="/contact" className="font-bold text-navy-900 underline">Ask a consultant</Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= INSIGHTS ================= */
export function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Labour law updates & employer insights."
        sub="Track dated regulatory changes with official sources, then explore practical guides for your compliance and HR teams."
        crumbs={[{ label: "Insights" }]}
      />
      <LegalUpdates />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead compact center={false} eyebrow="Guides & Explainers" title="Practical employer guidance." sub="Background and action-oriented reading on labour law compliance." />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((a) => (
            <Link key={a.slug} to={`/insights/${a.slug}`} className="group flex flex-col rounded-2xl border border-line bg-cream p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between text-[11px]">
                <span className="border-l-2 border-crimson-600 pl-2 font-bold tracking-wider text-crimson-700 uppercase">{a.tag}</span>
                <span className="text-mutedfg">{a.date}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink group-hover:text-navy-800">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-mutedfg">{a.desc}</p>
              <span className="mt-5 text-xs font-bold text-navy-900">{a.read} →</span>
            </Link>
          ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function InsightDetailPage() {
  const { slug } = useParams();
  const a = insights.find((x) => x.slug === slug);
  if (!a) return <Navigate to="/insights" replace />;
  return (
    <PageShell>
      <PageHero eyebrow={a.tag} title={a.title} sub={a.desc} crumbs={[{ label: "Insights", to: "/insights" }, { label: a.title }]} />
      <article className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold tracking-wider text-mutedfg uppercase">{a.date} · {a.read}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink">{a.body}</p>
          <p className="mt-6 leading-relaxed text-mutedfg">
            This note is general guidance drawn from Lexus practice in Delhi NCR, Bangalore and Pan India — not legal advice on your
            specific facts. Speak to a consultant before you act.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">
            Discuss with a consultant <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </PageShell>
  );
}

/* ================= CONTACT ================= */
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}%0D%0ACompany: ${d.get("company")}%0D%0APhone: ${d.get("phone")}%0D%0AEmail: ${d.get("email")}%0D%0AService: ${d.get("service")}%0D%0A%0D%0A${d.get("message")}`;
    window.location.href = `mailto:${contact.email}?subject=Consultation - ${d.get("name")}&body=${body}`;
    setSent(true);
  };
  const input = "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-navy-900 focus:bg-white";
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Lexus"
        title="Talk to a compliance expert."
        sub="Tell us about your business and compliance requirements. Our team will get in touch to understand how we can help."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {[
              { icon: MapPin, l: "Delhi — Head Office", v: contact.address.join(" "), href: contact.maps, external: true },
              { icon: Phone, l: "Call", v: `${contact.phone} · ${contact.mobile}`, href: contact.phoneHref },
              { icon: Mail, l: "Email", v: contact.email, href: `mailto:${contact.email}` },
            ].map((c) => (
              <a key={c.l} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noreferrer" : undefined} className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-400"><c.icon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-[11px] font-bold tracking-wider text-mutedfg uppercase">{c.l}</span>
                  <span className="mt-1 block font-semibold text-ink">{c.v}</span>
                </span>
              </a>
            ))}
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white"><WhatsAppIcon className="h-5 w-5" /></span>
              <span><span className="block text-[11px] font-bold tracking-wider text-mutedfg uppercase">WhatsApp</span><span className="mt-1 block font-semibold text-ink">{contact.mobile}</span></span>
            </a>
            <div className="rounded-2xl border border-line bg-cream p-5">
              <h3 className="font-display font-bold text-navy-900">Additional office addresses</h3>
              <p className="mt-1 text-xs leading-relaxed text-mutedfg">Other addresses published on the official Lexus contact page:</p>
              <ul className="mt-4 space-y-4">
                {offices.filter((office) => !office.primary).map((office) => (
                  <li key={office.city}>
                    <span className="block text-xs font-bold text-ink">{office.city}</span>
                    <span className="mt-1 block text-sm text-mutedfg">{office.address}</span>
                  </li>
                ))}
              </ul>
              <a href="https://lexusconsultants.in/Contact-Us.html" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-semibold text-navy-900 underline">View official contact page</a>
            </div>
            <div className="rounded-2xl border border-line bg-cream p-5">
              <h3 className="font-display font-bold text-navy-900">Connect with Lexus</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-900"><Link2 className="h-4 w-4" />{social.label}</a>)}
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-3xl border border-line p-8 shadow-xl lg:col-span-7">
            <h3 className="max-w-full break-words font-display text-xl leading-tight font-bold text-ink sm:text-2xl">Request a consultation</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Full name *" className={input} />
              <input name="company" placeholder="Company" className={input} />
              <input required name="phone" placeholder="Phone *" className={input} />
              <input name="email" type="email" placeholder="Email" className={input} />
              <select name="service" className={`${input} sm:col-span-2`} defaultValue="">
                <option value="" disabled>Select a service</option>
                {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
              <textarea name="message" rows={4} placeholder="How can we help?" className={`${input} sm:col-span-2`} />
            </div>
            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 py-3.5 text-sm font-bold text-white">
              <Send className="h-4 w-4 text-gold-400" /> Submit evaluation request
            </button>
            {sent && <p className="mt-3 text-center text-sm text-emerald-700">Your email client is ready to send the enquiry.</p>}
          </form>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= CAREERS ================= */
export function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers at Lexus"
        title="Build a career in compliance that actually matters."
        sub="Almost three decades of practice. Real ownership from day one — with the mentorship to grow into a partner."
        crumbs={[{ label: "Careers" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-cream p-8 text-center md:p-12">
            <h2 className="font-display text-2xl font-bold text-navy-900">Interested in working with Lexus?</h2>
            <p className="mt-4 text-sm leading-relaxed text-mutedfg">Lexus describes its work culture as an important part of the employee experience. For career enquiries, share your background and area of interest with the team.</p>
            <a href={`mailto:${contact.email}?subject=Career%20enquiry`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white">Email a career enquiry <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= LOCATIONS ================= */
export function LocationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pan India Presence"
        title="Headquartered in Delhi. Serving all of India."
        sub="Lexus publishes its head-office and branch contact details, and describes its labour law consultancy support as Pan India."
        crumbs={[{ label: "Locations" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-line bg-cream p-8 md:p-12">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400"><Building2 className="h-6 w-6" /></span>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">Head office — Vikas Puri, New Delhi</h3>
                <p className="mt-2 text-mutedfg">{contact.address.join(" ")}</p>
                <p className="mt-1 text-sm">{contact.phone} · {contact.mobile} · {contact.email}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {offices.filter((office) => !office.primary).map((office) => (
              <article key={office.city} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display font-bold text-navy-900">{office.city}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mutedfg">{office.address}</p>
              </article>
            ))}
          </div>
          <h3 className="mt-12 font-display text-xl font-bold text-ink">Service locations</h3>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {cities.map((c) => (
              <div key={c} className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink">
                <MapPin className="h-4 w-4 text-crimson-600" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= CALENDAR ================= */
export function CalendarPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Compliance Calendar"
        title="Plan recurring compliance work with clarity."
        sub="A planning checklist for payroll, registrations, records and periodic returns. Specific obligations and deadlines vary by law, state and establishment."
        crumbs={[{ label: "Compliance Calendar" }]}
      />
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-xl font-bold text-ink">Recurring compliance activities</h2>
          <p className="mt-2 text-sm leading-relaxed text-mutedfg">Use this as a planning prompt, not a due-date calendar. Confirm applicable dates and requirements for each state and establishment before filing.</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr><th className="px-4 py-3">Cadence</th><th className="px-4 py-3">Task</th><th className="px-4 py-3">Law</th></tr>
              </thead>
              <tbody>
                {monthlyDues.map((r) => (
                  <tr key={r.task} className="border-t border-line odd:bg-cream">
                    <td className="px-4 py-3 font-bold text-navy-900">{r.day}</td>
                    <td className="px-4 py-3">{r.task}</td>
                    <td className="px-4 py-3 text-mutedfg">{r.law}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="mt-12 font-display text-xl font-bold text-ink">Periodic reviews and filings</h2>
          <ul className="mt-4 space-y-3">
            {annualDues.map((r) => (
              <li key={r.task} className="flex justify-between gap-4 rounded-xl border border-line bg-cream px-5 py-4 text-sm">
                <span className="font-medium text-ink">{r.task}</span>
                <span className="shrink-0 font-bold text-crimson-600">{r.when}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

/* ================= LEGAL ================= */
export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const privacy = kind === "privacy";
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title={privacy ? "Privacy Policy" : "Terms of Use"}
        sub={privacy ? "How Lexus Consultants handles enquiry data submitted through this website." : "Terms governing use of the Lexus Consultants website and informational materials."}
        crumbs={[{ label: privacy ? "Privacy Policy" : "Terms of Use" }]}
      />
      <article className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-sm leading-relaxed text-mutedfg">
          {privacy ? (
            <>
              <p>Enquiries sent via the contact form or email are used only to respond to your request for labour-law consultancy. We do not sell personal data.</p>
              <p>Contact details (name, company, phone, email) are stored as needed to deliver the requested service and may be used to send compliance updates if you subscribe.</p>
              <p>For questions, write to {contact.email} or visit {contact.address.join(" ")}.</p>
            </>
          ) : (
            <>
              <p>Content on this site is general information on Indian labour law and statutory compliance, not legal advice on your specific facts. Confirm the current position before acting.</p>
              <p>Lexus Consultants is a labour law consultancy practice based at {contact.address.join(" ")}.</p>
              <p>Service engagements are governed by a separate retainer or engagement letter.</p>
            </>
          )}
        </div>
      </article>
    </PageShell>
  );
}


