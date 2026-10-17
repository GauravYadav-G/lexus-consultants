import { SectionHead } from "../ui";
import { Item, Stagger } from "../motion";

export function PracticalSupport() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead compact eyebrow="How We Work" title="Practical support, built around your business." sub="We combine legal knowledge with an understanding of day-to-day operations to make compliance clear, timely and manageable." />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Know the rules", "In-depth knowledge of Central and State labour laws, with attention to changing requirements."],
            ["Fit your operations", "Solutions tailored to your industry, workforce size, business structure and compliance needs."],
            ["Stay supported", "Timely compliance management, transparent communication and a long-term partnership approach."],
          ].map(([title, copy]) => (
            <Item key={title}><article className="h-full rounded-2xl border border-line bg-white p-7"><h3 className="font-display text-lg font-bold text-navy-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-mutedfg">{copy}</p></article></Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
