import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Phone, Menu, X, MapPin, Mail, Globe, MessageCircle, ArrowUp, Clock, ShieldCheck, ArrowRight,
  ChevronDown
} from "lucide-react";
import { contact, nav, services, cities, footerNav } from "../data";
import { EASE, Magnetic, motion } from "./motion";
import { Logo } from "./Logo";
import { Icon } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 170);
  };

  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12.5px] 2xl:px-3.5 2xl:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap ${
      isActive ? "text-navy-950 font-bold" : "text-mutedfg hover:text-navy-950 hover:bg-gold-50/70"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top emergency announcement bar */}
      <motion.div
        animate={{ height: scrolled ? 0 : 36, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="hidden overflow-hidden bg-navy-950 text-[12px] font-medium text-slate-300 md:block"
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-crimson-500" />
            <span>Pan-India Labour Law &amp; Statutory Compliance · Delhi NCR · Bangalore · Mumbai</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Clock className="h-3.5 w-3.5 text-gold-400" /> Mon – Sat: 10:00 AM – 6:30 PM
            </span>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1.5 transition hover:text-white">
              <Mail className="h-3.5 w-3.5 text-gold-400" /> {contact.email}
            </a>
            <a href={contact.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-white transition hover:text-gold-300">
              <Phone className="h-3.5 w-3.5 text-crimson-400" /> {contact.phone}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main navigation header with extra-large logo and Services-only hover navigation */}
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(253,252,249,0.96)" : "rgba(253,252,249,0.92)",
          boxShadow: scrolled ? "0 10px 30px -15px rgba(9,23,61,0.12), 0 1px 0 rgba(9,23,61,0.06)" : "0 1px 0 rgba(9,23,61,0.04)",
        }}
        transition={{ duration: 0.3, ease: EASE }}
        className="relative backdrop-blur-md"
      >
        <div className="mx-auto flex h-[94px] md:h-[98px] max-w-[1440px] items-center justify-between gap-4 px-6 2xl:px-8">
          {/* Substantially Larger Logo */}
          <Logo className="block h-14 w-auto max-w-[260px] object-contain transition-transform duration-200 group-hover:scale-[1.03] sm:h-16 sm:max-w-[310px] md:h-[68px] md:max-w-[340px] lg:h-[72px] lg:max-w-[360px]" />

          {/* Floating pill navigation (Only Services has hover dropdown) */}
          <nav className="hidden items-center rounded-full border border-line/80 bg-white/85 p-1 shadow-sm xl:flex" aria-label="Main navigation">
            {nav.map((n) => {
              if (n.label === "Services") {
                return (
                  <div
                    key={n.href}
                    className="relative"
                    onMouseEnter={keepOpen}
                    onMouseLeave={scheduleClose}
                  >
                    <NavLink to={n.href} end={n.href === "/"} className={linkClass}>
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <motion.span
                              layoutId="nav-pill"
                              transition={{ type: "spring", stiffness: 400, damping: 32 }}
                              className="absolute inset-0 -z-10 rounded-full bg-gold-100 ring-1 ring-gold-500/20"
                            />
                          )}
                          <span>{n.label}</span>
                          <ChevronDown
                            className={`h-3 w-3 text-mutedfg transition-transform duration-200 ${
                              servicesOpen ? "rotate-180 text-navy-950" : ""
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </div>
                );
              }

              return (
                <div key={n.href} onMouseEnter={() => setServicesOpen(false)}>
                  <NavLink to={n.href} end={n.href === "/"} className={linkClass}>
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            className="absolute inset-0 -z-10 rounded-full bg-gold-100 ring-1 ring-gold-500/20"
                          />
                        )}
                        {n.label}
                      </>
                    )}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          {/* Right action area: Book Consultation button */}
          <div className="hidden items-center gap-4 xl:flex shrink-0">
            <Magnetic strength={0.2}>
              <Link
                to="/contact"
                className="shimmer relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-900/15 transition hover:bg-navy-800"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile hamburger toggle button */}
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-xl border border-line bg-white p-2.5 text-navy-900 shadow-sm xl:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ================= HOVER MEGA-DROPDOWN: SERVICES ONLY ================= */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              onMouseEnter={keepOpen}
              onMouseLeave={scheduleClose}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: EASE }}
              className="absolute left-1/2 top-full z-50 mt-2 w-[min(1100px,calc(100vw-32px))] -translate-x-1/2 rounded-2xl border border-line bg-white/98 p-6 text-navy-900 shadow-[0_24px_70px_-20px_rgba(9,23,61,0.22)] backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-crimson-600">
                    Comprehensive Labour Law &amp; Compliance Services
                  </span>
                  <p className="mt-0.5 text-xs text-mutedfg">
                    Statutory registrations, payroll, inspection defense, and end-to-end industrial advisory.
                  </p>
                </div>
                <Link
                  to="/services"
                  onClick={() => setServicesOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 transition hover:text-crimson-600"
                >
                  View All Services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 9).map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="group flex min-w-0 items-start gap-3 rounded-xl p-2.5 transition hover:bg-cream"
                  >
                    <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg bg-cream text-navy-900 transition group-hover:bg-crimson-50 group-hover:text-crimson-600">
                      <Icon name={service.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[13.5px] font-bold text-navy-950 group-hover:text-crimson-600 transition-colors">
                        {service.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[11.5px] text-mutedfg">
                        {service.desc}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-line bg-cream xl:hidden"
          >
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto px-6 py-5">
              {nav.map((n) => (
                <NavLink
                  key={n.href}
                  to={n.href}
                  end={n.href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-line/60 py-3 font-display text-[15px] font-semibold transition-colors ${
                      isActive ? "text-crimson-600 font-bold" : "text-navy-950 hover:text-crimson-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{n.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-crimson-600" />}
                    </>
                  )}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-xl bg-navy-900 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-navy-800"
              >
                Book Free Consultation
              </Link>
              <div className="mt-4 pt-3 border-t border-line text-xs text-mutedfg flex justify-between items-center">
                <a href={contact.phoneHref} className="font-semibold text-navy-900">{contact.phone}</a>
                <a href={`mailto:${contact.email}`} className="text-mutedfg">{contact.email}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-slate-300">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light className="block h-12 w-auto max-w-[230px] sm:h-14 sm:max-w-[260px]" />
          <p className="mt-6 text-[14.5px] leading-relaxed">
            Advocates &amp; Management Consultants for Industrial Matters. Labour law consultancy, statutory compliance,
            payroll and representation across India.
          </p>
          <div className="mt-6 flex items-center gap-3 text-xs font-semibold tracking-wide text-gold-300">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            Advocates on Record · Labour Courts to High Court
          </div>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-display text-[13px] font-bold tracking-wide text-white uppercase">Practice</h4>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            {footerNav.practice.map((l) => (
              <li key={l.href}><Link to={l.href} className="transition hover:text-gold-300">{l.label}</Link></li>
            ))}
            {services.slice(0, 3).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="transition hover:text-gold-300">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-display text-[13px] font-bold tracking-wide text-white uppercase">Resources</h4>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            {footerNav.tools.map((l) => (
              <li key={l.href}><Link to={l.href} className="transition hover:text-gold-300">{l.label}</Link></li>
            ))}
            {footerNav.legal.map((l) => (
              <li key={l.href}><Link to={l.href} className="transition hover:text-gold-300">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h4 className="font-display text-[13px] font-bold tracking-wide text-white uppercase">Head Office</h4>
          <ul className="mt-5 space-y-3.5 text-[14px]">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson-400" /><span>{contact.address.join(" ")}</span></li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <span>
                <a href={contact.phoneHref} className="block hover:text-white">{contact.phone}</a>
                <a href={contact.mobileHref} className="block text-slate-400 hover:text-white">{contact.mobile}</a>
              </span>
            </li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" /><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>
            <li className="flex gap-3"><Globe className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" /><a href="https://lexusconsultants.in" className="hover:text-white">{contact.web}</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {cities.slice(0, 8).map((c) => (
              <span key={c} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px]">{c}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-400 md:flex-row">
          <span>© {new Date().getFullYear()} Lexus Consultants. All Rights Reserved.</span>
          <span>Delhi NCR · Bangalore · Pan-India Practice</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy-900 shadow-xl"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <motion.a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.06 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <MessageCircle className="relative h-6 w-6" />
      </motion.a>
    </div>
  );
}
