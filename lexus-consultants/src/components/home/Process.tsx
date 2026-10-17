import { process } from "../../data";
import { SectionHead } from "../ui";
import { motion, EASE } from "../motion";

/* ============================ PROCESS ============================ */
export function Process() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          compact
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
