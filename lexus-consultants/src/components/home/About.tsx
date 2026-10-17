import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../ui";
import { Reveal, WordReveal } from "../motion";
import aboutImg from "../../assets/about.jpg";

/* ============================ ABOUT (SafePoint Tempo) ============================ */
export function About() {
  const principles = [
    ["Three Decades of Practice", "Founded as Advocates & Management Consultants for Industrial Matters, with deep roots in Delhi NCR and Bangalore."],
    ["The Compliance Alarm Clock", "We act before deadlines become damages, interest or prosecution — not after a notice reaches the boardroom."],
    ["One Accountability Partner", "Every statute, register, return, challan and inspection handled through one dedicated point of contact."],
    ["Value-Led Retainers", "Clear scope and transparent pricing, designed to deliver legal security without hidden surprises."],
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <figure className="relative lg:sticky lg:top-28 lg:col-span-5">
            <div className="overflow-hidden bg-muted shadow-[0_30px_70px_-34px_rgba(9,23,61,0.35)]">
              <img src={aboutImg} alt="Senior Lexus advocate reviewing a statutory register" className="aspect-[4/5] w-full object-cover" />
            </div>
            <figcaption className="mt-4 flex items-center justify-between border-b border-line pb-4 text-[11px] font-semibold tracking-[0.12em] text-mutedfg uppercase">
              <span>Institutional labour-law practice</span>
              <span>New Delhi · Pan India</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-7 lg:pt-5">
            <Reveal><Eyebrow>About Lexus Consultants</Eyebrow></Reveal>
            <h2 className="mt-6 max-w-2xl font-display text-[1.9rem] leading-[1.12] font-semibold tracking-[-0.025em] text-ink md:text-[2.5rem]">
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
