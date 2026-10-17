import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { contact, stats } from "../../data";
import { Counter, Magnetic, WordReveal, motion, EASE } from "../motion";
import heroImg from "../../assets/hero.jpg";

/* ============================ HERO (SafePoint Tempo) ============================ */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 52]);

  return (
    <>
      <section id="home" ref={ref} className="relative isolate flex min-h-[calc(75vh+144px)] items-center overflow-hidden bg-navy-950 pt-36 text-white md:min-h-[calc(78vh+176px)] md:pt-44">
        <motion.img
          src={heroImg}
          alt="Lexus consultant reviewing statutory compliance with business leaders"
          style={{ y: imageY }}
          className="absolute inset-0 -z-30 h-[112%] w-full object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,13,36,0.98)_0%,rgba(5,13,36,0.9)_42%,rgba(5,13,36,0.36)_75%,rgba(5,13,36,0.14)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/25" />

        <motion.div style={{ y: contentY }} className="mx-auto w-full max-w-7xl px-6 py-8">
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

            <h1 className="mt-5 font-display text-[2.35rem] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[3rem] xl:text-[3.5rem]">
              <WordReveal text="Labour law compliance, made clear and manageable." delay={0.15} highlight={["manageable."]} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.7, ease: EASE }}
              className="mt-5 max-w-2xl text-[16px] leading-relaxed text-slate-200 md:text-[17px]"
            >
              Experienced consultants help startups, SMEs, manufacturers and large businesses manage registrations, payroll compliance, employee welfare and labour matters, so they can focus on running their business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.88, ease: EASE }}
              className="mt-6 flex flex-wrap gap-3"
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
              className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-4 text-[12px] text-slate-300"
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
            <div
              key={s.label}
              className={`py-8 px-3 sm:px-6 md:px-8 ${
                i % 2 === 1 ? "border-l border-line md:border-l-0" : ""
              } ${i > 0 ? "md:border-l md:border-line" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              }`}
            >
              <div className="font-display text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[12px] font-semibold text-mutedfg leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
