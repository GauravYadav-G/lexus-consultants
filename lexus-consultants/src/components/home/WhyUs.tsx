import { whyUs } from "../../data";
import { Icon, SectionHead } from "../ui";
import { Item, Stagger } from "../motion";

/* ============================ WHY LEXUS (Dark SafePoint anchor) ============================ */
export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-20">
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div className="animate-float-slow absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-crimson-500/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead
          compact
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
