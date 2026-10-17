import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Hero, IndustriesMarquee, About, Services, WhyCompliance, BeforeAfter, Industries, WhyUs, Process, Laws, Presence, FAQ, CTA,
} from "../components/Sections";
import { Journey, HealthCheck, Insights } from "../components/Premium";
import { SectionHead } from "../components/ui";
import { Item, Stagger } from "../components/motion";
import { Newsletter } from "../components/Page";

export function Home() {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <About />
      <Journey />
      <Services />
      <div className="-mt-8 bg-muted pb-16 text-center">
        <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white hover:bg-navy-800">
          Explore all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <WhyCompliance />
      <BeforeAfter />
      <HealthCheck />
      <Industries />
      <WhyUs />
      <Process />

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="How We Work" title="Practical support, built around your business." sub="We combine legal knowledge with an understanding of day-to-day operations to make compliance clear, timely and manageable." />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Know the rules", "In-depth knowledge of Central and State labour laws, with attention to changing requirements."],
              ["Fit your operations", "Solutions tailored to your industry, workforce size, business structure and compliance needs."],
              ["Stay supported", "Timely compliance management, transparent communication and a long-term partnership approach."],
            ].map(([title, copy]) => (
              <Item key={title}>
                <article className="h-full rounded-2xl border border-line bg-white p-7">
                  <h3 className="font-display text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mutedfg">{copy}</p>
                </article>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Laws />
      <Insights />
      <div className="-mt-8 bg-muted pb-16 text-center">
        <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900">
          All insights <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <Presence />
      <FAQ />
      <div className="-mt-10 bg-white pb-16 text-center">
        <Link to="/faqs" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900">
          View all FAQs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionHead eyebrow="Contact Lexus" title="Talk to a compliance expert." sub="Share your requirements with our team and get guidance tailored to your business." />
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-crimson-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-crimson-500">
            Schedule a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Newsletter />
      <CTA />
    </>
  );
}
