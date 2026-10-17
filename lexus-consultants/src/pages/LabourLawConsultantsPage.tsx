import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero, PageShell } from "../components/Page";
import { SectionHead } from "../components/ui";

const codeCards = [
  ["Code on Wages, 2019", "Minimum wages, timely payment of wages, wage definitions and bonus provisions."],
  ["Industrial Relations Code, 2020", "Trade unions, standing orders, employment relations, retrenchment, layoffs and dispute resolution."],
  ["Code on Social Security, 2020", "Social security provisions including EPF, ESI, gratuity, maternity benefits, and frameworks for unorganised, gig and platform workers."],
  ["OSH and Working Conditions Code, 2020", "Workplace safety, health, working conditions, contract labour and related establishment requirements."],
];

const employerChanges = [
  ["Review workforce classifications", "Check employee and worker categories against the definitions and scope of the applicable Codes."],
  ["Issue appointment letters", "Maintain formal employment documentation, including appointment letters, in line with applicable requirements."],
  ["Review social security coverage", "Reassess EPF, ESI and other benefits using the current definitions, coverage criteria and any notified schemes."],
  ["Track wage requirements", "Review wage structures against minimum wage requirements and the statutory floor-wage framework."],
  ["Update records and systems", "Align payroll, contracts, HR policies, registers and filings with applicable Code provisions and rules."],
  ["Revisit contract labour and workforce processes", "Check working hours, contractor responsibilities, safety practices and restructuring processes against current requirements."],
];

const services = [
  { title: "Statutory registrations", intro: "We help identify and manage registrations and licences relevant to your business and workforce.", items: ["Provident Fund (PF) registration", "Employees’ State Insurance (ESI) registration", "Shops and Establishments registration", "Professional Tax registration", "Labour Welfare Fund registration", "Contract labour registrations and licences", "Factory registration and licensing"] },
  { title: "Payroll and statutory compliance", intro: "Payroll support includes salary processing, statutory deductions, records and filings under applicable requirements.", items: ["PF and ESI returns and payments", "Professional Tax filings", "Labour Welfare Fund contributions", "Minimum wage compliance", "Wage payment requirements", "Bonus and gratuity calculations under applicable rules"] },
  { title: "Labour law audits and health checks", intro: "A structured review helps surface gaps and gives your team a practical corrective-action plan.", items: ["Review records and documentation", "Identify compliance gaps and risks", "Recommend corrective actions", "Prepare for statutory inspections", "Build a compliance calendar"] },
  { title: "Contract labour management", intro: "We support principal employers and contractors with the documentation and processes required for contract labour engagements.", items: ["Principal employer and contractor registrations", "Statutory registers and records", "Wage payment process review", "Licence renewals", "Advice on employer and contractor responsibilities"] },
  { title: "Employee welfare and benefits", intro: "Practical support for statutory benefits and workplace welfare obligations relevant to your organisation.", items: ["Gratuity compliance and fund support", "Maternity benefit guidance", "Employees’ compensation support", "Workplace safety and welfare measures", "Employee benefit scheme advisory"] },
  { title: "Labour disputes and grievances", intro: "We help businesses respond to employment issues with a careful, documented and process-led approach.", items: ["Response letters and legal notices", "Representation before labour authorities", "Disciplinary procedure guidance", "Domestic enquiry support", "Termination and retrenchment compliance guidance", "Employment disputes, grievances and labour court matters"] },
  { title: "HR policy and documentation", intro: "Clear workplace documentation helps teams follow consistent processes and understand their responsibilities.", items: ["Employment contracts and appointment letters", "HR policy manuals", "Standard operating procedures for HR", "Employee handbooks", "Leave policy review based on applicable state requirements"] },
  { title: "Government authority liaison", intro: "We assist with regulatory communication so your internal team can keep business operations moving.", items: ["Labour department inspections", "Responses to PF, ESI and labour office notices", "Renewals and approvals follow-up", "Correspondence with regulatory bodies"] },
];

const industries = ["Manufacturing and industrial units", "IT and IT-enabled services", "Retail and e-commerce", "Hospitality and tourism", "Healthcare and pharmaceuticals", "Construction and infrastructure", "Logistics and transportation", "Educational institutions", "Startups and small businesses"];

const process = [
  ["Understand your business", "We learn about your business structure, workforce size, industry, locations and current compliance position."],
  ["Assess compliance", "We review existing processes and records to identify gaps, risks and matters needing attention."],
  ["Build a tailored plan", "We prepare a compliance plan shaped around your requirements, responsibilities and timelines."],
  ["Implement and document", "We support registrations, filings, documentation and process changes, as agreed for the engagement."],
  ["Monitor and support", "We continue to help track changing requirements, recurring deadlines and your organisation’s needs."]
];

const benefits = [
  ["Experienced team", "Practical experience with labour law matters across different sectors and workforce structures."],
  ["Customised solutions", "Recommendations shaped around your business, workforce, locations and compliance requirements."],
  ["Timely compliance support", "Proactive tracking helps your team plan for recurring filings and renewals."],
  ["Transparent pricing", "Clear engagement scope and pricing, discussed with you before work begins."],
  ["Confidentiality and trust", "Careful handling of business and employee information."],
  ["Pan-India support", "Assistance for organisations operating in one or multiple states, subject to applicable local requirements."],
  ["Responsive communication", "A reachable team to help answer questions and coordinate the next steps."]
];

const challenges = [
  ["Unclear applicability", "Businesses can find it difficult to identify which central, state and sector requirements apply to their workforce."],
  ["Missed deadlines", "Without a reliable tracking process, filings and renewals can be overlooked."],
  ["Inconsistent records", "Gaps in documentation can create difficulty during inspections, audits or employee matters."],
  ["Employee disputes", "Grievances and disciplinary matters need consistent, fair and properly documented procedures."],
  ["Rapid business growth", "As a business scales or enters new states, its compliance responsibilities and internal workload can grow."]
];

const faqs = [
  ["What does a labour law consultant do?", "A labour law consultant helps businesses understand and manage employment-related requirements. This can include registrations, payroll compliance, employee welfare, workplace documentation and dispute support."],
  ["Is labour law compliance mandatory for small businesses?", "Requirements depend on the business, workforce, activities and location. Small businesses may have obligations under applicable labour, social security and state laws, so it is useful to review their specific position."],
  ["How often do labour laws change in India?", "Central and state requirements can change through legislation, rules, notifications and clarifications. Businesses should monitor the requirements that apply to their locations and operations."],
  ["What are the new Labour Codes?", "The four Labour Codes are the Code on Wages, 2019; Industrial Relations Code, 2020; Code on Social Security, 2020; and Occupational Safety, Health and Working Conditions Code, 2020. They came into force on 21 November 2025. Businesses should review current rules and transition requirements for their establishment."],
  ["Do the Labour Codes affect existing registrations?", "The effect depends on the registration, establishment and applicable transition provisions. Do not assume that an existing registration alone meets every updated requirement; review it against current rules and notifications."],
  ["Are gig workers, platform workers and contract employees covered?", "The Social Security Code includes provisions for gig and platform workers and provides for social security schemes. Specific benefits depend on applicable schemes, notifications and eligibility. Contract workers’ responsibilities and coverage depend on the engagement and the law that applies."],
  ["Can Lexus support businesses in multiple states?", "Lexus provides Pan-India support and can help review state-specific requirements relevant to your operations."],
  ["Which industries does Lexus work with?", "Lexus supports a range of sectors, including manufacturing, IT, retail, hospitality, healthcare, construction, logistics, education and startups."],
  ["How do I get started?", "Contact Lexus through the website. The team can discuss your organisation, workforce and requirements, then suggest suitable next steps."]
];

export function LabourLawConsultantsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Labour Law Consultant Services"
        title="Expert labour law consultants helping businesses stay compliant, confident, and protected."
        sub="From your first employee to a workforce spread across India, Lexus Consultants helps you navigate labour law, payroll and workplace requirements with practical, tailored support."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Labour Law Consultants" }]}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-mutedfg">
            <p>Running a business means managing many responsibilities. Labour law compliance is one that employers need to plan for carefully. Businesses across India must understand requirements covering wages, working hours, employee benefits, workplace safety, social security and dispute resolution. Missed deadlines or misunderstood requirements can lead to penalties, disputes and reputational harm.</p>
            <p>That is where Lexus Consultants comes in. Our experienced labour law consultants support startups, SMEs, manufacturing units and large corporates with applicable labour requirements, so business teams can focus on their work. We bring practical experience, regulatory knowledge and a problem-solving approach to each engagement.</p>
            <p>Whether you need support with statutory registrations, payroll compliance, employee welfare or a labour dispute, our team can guide you through the relevant steps.</p>
          </div>
          <aside className="rounded-3xl border border-line bg-cream p-7 md:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400"><ShieldCheck className="h-6 w-6" /></span>
            <h2 className="mt-5 font-display text-xl font-bold text-navy-950">Why compliance matters</h2>
            <ul className="mt-5 space-y-4">
              {["Reduce the risk of penalties and legal action", "Protect your organisation’s reputation", "Support fair treatment and employee trust", "Keep operations prepared for inspections", "Stay audit-ready with organised records and timely filings"].map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-mutedfg"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-crimson-600" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="India’s Labour Codes" title="A changed compliance framework for employers." sub="Four Labour Codes came into force nationwide on 21 November 2025, consolidating provisions from 29 central labour laws. Applicable requirements, rules and transition steps should be checked for each business and location." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {codeCards.map(([title, copy], i) => <article key={title} className="rounded-2xl border border-line bg-white p-6 md:p-7"><span className="text-xs font-bold tracking-[0.15em] text-crimson-600 uppercase">Code 0{i + 1}</span><h3 className="mt-2 font-display text-xl font-bold text-navy-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mutedfg">{copy}</p></article>)}
          </div>
          <h3 className="mt-12 font-display text-2xl font-bold text-navy-950">What employers should review</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {employerChanges.map(([title, copy]) => <article key={title} className="rounded-2xl border border-line bg-white p-5"><h4 className="font-display font-bold text-navy-900">{title}</h4><p className="mt-2 text-sm leading-relaxed text-mutedfg">{copy}</p></article>)}
          </div>
          <p className="mt-6 rounded-2xl border border-gold-500/30 bg-gold-50 p-5 text-sm leading-relaxed text-mutedfg">The Codes affect wages, contracts, safety, social security and industrial relations. Old documents and processes may need review. Lexus supports businesses with policy, appointment-letter, payroll and social security reviews, and monitors relevant Central and State notifications. Specific requirements continue to depend on applicable rules and the facts of each establishment.</p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Who We Are" title="Practical legal and compliance support, built around your business." sub="We work with HR teams, business owners and finance departments to understand operating needs and provide tailored support rather than generic advice." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["In-depth understanding of Central and State labour requirements", "Practical, business-friendly guidance", "Timely and accurate compliance management", "Transparent communication throughout the engagement", "A long-term partnership approach", "Workplaces that are fair, safe and legally sound"].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-line bg-cream p-5 text-sm leading-relaxed text-ink"><CheckCircle2 className="h-5 w-5 shrink-0 text-crimson-600" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Our Services" title="Labour law consultancy across the employee lifecycle." sub="From registrations and payroll to disputes and government liaison, our support covers key workplace compliance needs." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service, i) => <article key={service.title} className="rounded-2xl border border-line bg-white p-6 md:p-7"><span className="text-xs font-bold tracking-[0.15em] text-crimson-600 uppercase">Service 0{i + 1}</span><h3 className="mt-2 font-display text-xl font-bold text-navy-900">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-mutedfg">{service.intro}</p><ul className="mt-4 grid gap-2 sm:grid-cols-2">{service.items.map((item) => <li key={item} className="flex gap-2 text-xs leading-relaxed text-ink"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson-600" />{item}</li>)}</ul></article>)}
          </div>
          <div className="mt-8 text-center"><Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-800">Explore all services <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHead center={false} eyebrow="Industries We Serve" title="Advice shaped around your sector and workforce." sub="Requirements can vary with industry, workforce structure and business location. We tailor our approach to your organisation’s circumstances." />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">{industries.map((item) => <div key={item} className="rounded-xl border border-line bg-cream px-4 py-3 text-sm font-semibold text-navy-900">{item}</div>)}</div>
          </div>
          <div>
            <SectionHead center={false} eyebrow="Our Approach" title="A clear process from assessment to ongoing support." />
            <ol className="mt-7 space-y-4">{process.map(([title, copy], i) => <li key={title} className="flex gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-xs font-bold text-gold-400">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-display font-bold text-navy-900">{title}</h3><p className="mt-1 text-sm leading-relaxed text-mutedfg">{copy}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Why Lexus" title="A reliable partner for the work behind compliance." sub="Businesses choose Lexus for consistent support that helps them manage labour law obligations effectively." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([title, copy]) => <article key={title} className="rounded-2xl border border-line bg-white p-6"><h3 className="font-display font-bold text-navy-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-mutedfg">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Common Challenges" title="We help make complicated compliance work manageable." sub="Businesses often come to us with recurring questions and process gaps. Our team helps assess the situation and plan practical next steps." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{challenges.map(([title, copy]) => <article key={title} className="rounded-2xl border border-line bg-cream p-6"><h3 className="font-display font-bold text-navy-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-mutedfg">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead eyebrow="Frequently Asked Questions" title="Labour law consultancy FAQs." />
          <div className="mt-10 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-line bg-white p-5"><summary className="cursor-pointer list-none pr-8 font-display font-bold text-navy-950 marker:hidden">{question}<span className="float-right text-crimson-600 transition group-open:rotate-45">+</span></summary><p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-mutedfg">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-12 md:py-16 text-white">
        <div className="grid-lines absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="text-[11px] font-bold tracking-[0.2em] text-gold-300 uppercase">Let’s make compliance simple</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Build a compliant, confident and future-ready business.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">With the right guidance, labour compliance can become a manageable part of business operations. Talk to Lexus about protecting employee rights, managing obligations and reducing avoidable compliance risks.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-crimson-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-crimson-500">Talk to a consultant <ArrowRight className="h-4 w-4" /></Link>
          <p className="mt-5 text-[11px] leading-relaxed text-slate-400">General information only. Applicability depends on current law, rules, notifications, state, establishment and individual facts. Consult a qualified professional before acting.</p>
        </div>
      </section>
    </PageShell>
  );
}
