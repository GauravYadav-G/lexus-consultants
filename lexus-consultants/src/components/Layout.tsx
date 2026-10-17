import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Phone, Menu, X, MapPin, Mail, Globe, ArrowUp, Clock, ShieldCheck, ArrowRight, Send,
  ChevronDown
} from "lucide-react";
import { contact, nav, services, cities, footerNav } from "../data";
import { EASE, Magnetic, motion } from "./motion";
import { Logo } from "./Logo";
import { Icon } from "./ui";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [payrollOpen, setPayrollOpen] = useState(false);
  const [payrollMobileOpen, setPayrollMobileOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationSent, setConsultationSent] = useState(false);
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
    setPayrollOpen(false);
    setPayrollMobileOpen(false);
  }, [location.pathname]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 170);
  };

  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
    setPayrollOpen(false);
  };

  const keepPayrollOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(false);
    setPayrollOpen(true);
  };

  const schedulePayrollClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setPayrollOpen(false), 170);
  };

  const handleConsultationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Service: ${form.get("service")}`,
      `Message: ${form.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Consultation request - ${form.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setConsultationSent(true);
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12.5px] xl:px-1.5 xl:text-[11px] 2xl:px-2.5 2xl:text-[12.5px] font-semibold transition-all duration-200 whitespace-nowrap ${
      isActive ? "text-navy-950 font-bold" : "text-mutedfg hover:text-navy-950 hover:bg-gold-50/70"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top emergency announcement bar */}
      <motion.div
        animate={{ height: scrolled ? 0 : 28, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="hidden overflow-hidden bg-navy-950 text-[12px] font-medium text-slate-300 md:block"
      >
        <div className="mx-auto flex h-7 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-crimson-500" />
            <span>Pan-India Labour Law &amp; Statutory Compliance · Delhi NCR · Bangalore · Mumbai</span>
          </div>
          <div className="hidden items-center gap-6 xl:flex">
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
        <div className="mx-auto flex h-[78px] sm:h-[86px] md:h-[98px] xl:h-[84px] 2xl:h-[98px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 2xl:px-8">
          {/* Substantially Larger Logo */}
          <Logo className="block h-12 w-auto max-w-[210px] object-contain transition-transform duration-200 group-hover:scale-[1.03] sm:h-14 sm:max-w-[300px] md:h-[68px] md:max-w-[330px] lg:h-[72px] lg:max-w-[340px] xl:h-14 xl:max-w-[230px] 2xl:h-[72px] 2xl:max-w-[340px]" />

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

              if (n.label === "Payroll & Benefits") {
                return (
                  <div
                    key={n.href}
                    className="relative"
                    onMouseEnter={keepPayrollOpen}
                    onMouseLeave={schedulePayrollClose}
                    onFocus={keepPayrollOpen}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) schedulePayrollClose();
                    }}
                  >
                    <NavLink to={n.href} aria-haspopup="true" aria-expanded={payrollOpen} className={linkClass}>
                      {({ isActive }) => (
                        <>
                          {isActive && <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 400, damping: 32 }} className="absolute inset-0 -z-10 rounded-full bg-gold-100 ring-1 ring-gold-500/20" />}
                          <span>{n.label}</span>
                          <ChevronDown className={`h-3 w-3 text-mutedfg transition-transform duration-200 ${payrollOpen ? "rotate-180 text-navy-950" : ""}`} />
                        </>
                      )}
                    </NavLink>
                    <AnimatePresence>
                      {payrollOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: EASE }}
                          className="absolute left-1/2 top-full z-50 mt-2 w-[min(360px,calc(100vw-32px))] -translate-x-1/2 rounded-2xl border border-line bg-white/98 p-3 text-navy-900 shadow-[0_24px_70px_-20px_rgba(9,23,61,0.22)] backdrop-blur-xl"
                        >
                          <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-crimson-600">Payroll &amp; employee benefits</p>
                          {[
                            { label: "Payroll & Benefits Calculators", detail: "PF, ESIC, professional tax and more", href: "/calculators" },
                            { label: "Payroll Management", detail: "Payroll processing and statutory deductions", href: "/services/payroll-management" },
                            { label: "Employee Welfare & Benefits", detail: "PF, ESI, gratuity and employee welfare", href: "/services/employee-welfare-benefits" },
                          ].map((item) => (
                            <Link key={item.href} to={item.href} onClick={() => setPayrollOpen(false)} className="block rounded-xl px-3 py-2.5 transition hover:bg-cream">
                              <span className="block text-sm font-bold text-navy-950">{item.label}</span>
                              <span className="mt-0.5 block text-xs text-mutedfg">{item.detail}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={n.href} onMouseEnter={() => { setServicesOpen(false); setPayrollOpen(false); }}>
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
          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-4">
            <Magnetic strength={0.2}>
              <button
                type="button"
                onClick={() => { setConsultationSent(false); setConsultationOpen(true); }}
                className="shimmer relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-navy-900/15 transition hover:bg-navy-800 2xl:px-6 2xl:py-3 2xl:text-sm"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </button>
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
            <div className="max-h-[calc(100dvh-120px)] overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
              {nav.map((n) => n.label === "Payroll & Benefits" ? (
                <div key={n.href} className="border-b border-line/60">
                  <div className="flex items-center gap-2">
                    <NavLink to={n.href} onClick={() => setOpen(false)} className={({ isActive }) => `flex flex-1 items-center justify-between py-3 font-display text-[15px] font-semibold transition-colors ${isActive ? "font-bold text-crimson-600" : "text-navy-950 hover:text-crimson-600"}`}>
                      {({ isActive }) => <><span>{n.label}</span>{isActive && <span className="h-1.5 w-1.5 rounded-full bg-crimson-600" />}</>}
                    </NavLink>
                    <button type="button" aria-label="Toggle payroll and benefits submenu" aria-expanded={payrollMobileOpen} onClick={() => setPayrollMobileOpen((value) => !value)} className="rounded-lg p-2 text-navy-900 hover:bg-white">
                      <ChevronDown className={`h-4 w-4 transition-transform ${payrollMobileOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {payrollMobileOpen && <div className="space-y-1 pb-3 pl-3">
                    {[
                      { label: "Payroll & Benefits Calculators", href: "/calculators" },
                      { label: "Payroll Management", href: "/services/payroll-management" },
                      { label: "Employee Welfare & Benefits", href: "/services/employee-welfare-benefits" },
                    ].map((item) => <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-mutedfg hover:bg-white hover:text-navy-950">{item.label}</NavLink>)}
                  </div>}
                </div>
              ) : (
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
                  {({ isActive }) => <><span>{n.label}</span>{isActive && <span className="h-1.5 w-1.5 rounded-full bg-crimson-600" />}</>}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => { setOpen(false); setConsultationSent(false); setConsultationOpen(true); }}
                className="mt-5 block w-full rounded-xl bg-navy-900 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-navy-800"
              >
                Book Free Consultation
              </button>
              <div className="mt-4 pt-3 border-t border-line text-xs text-mutedfg flex justify-between items-center">
                <a href={contact.phoneHref} className="font-semibold text-navy-900">{contact.phone}</a>
                <a href={`mailto:${contact.email}`} className="text-mutedfg">{contact.email}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {consultationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setConsultationOpen(false); }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-navy-950/65 p-4 backdrop-blur-sm"
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="my-auto w-full max-w-2xl rounded-3xl border border-line bg-white p-6 text-ink shadow-2xl md:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="consultation-modal-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-crimson-600">Free 15-Min Audit</span>
                  <h2 id="consultation-modal-title" className="mt-1 font-display text-2xl font-bold text-navy-950">Book a consultation</h2>
                  <p className="mt-1 text-sm text-mutedfg">Share a few details and our team will get back to you.</p>
                </div>
                <button type="button" onClick={() => setConsultationOpen(false)} aria-label="Close consultation form" className="rounded-full p-2 text-mutedfg transition hover:bg-muted hover:text-navy-950">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleConsultationSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold text-navy-950">Full name *<input required name="name" autoFocus placeholder="Your name" className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm font-normal outline-none focus:border-navy-900" /></label>
                <label className="text-xs font-semibold text-navy-950">Company<input name="company" placeholder="Company name" className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm font-normal outline-none focus:border-navy-900" /></label>
                <label className="text-xs font-semibold text-navy-950">Phone number *<input required name="phone" type="tel" placeholder="+91 98765 43210" className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm font-normal outline-none focus:border-navy-900" /></label>
                <label className="text-xs font-semibold text-navy-950">Email<input name="email" type="email" placeholder="you@company.com" className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm font-normal outline-none focus:border-navy-900" /></label>
                <label className="text-xs font-semibold text-navy-950 sm:col-span-2">Primary service
                  <select name="service" defaultValue="" className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm font-normal outline-none focus:border-navy-900">
                    <option value="">Select a service</option>
                    {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
                  </select>
                </label>
                <label className="text-xs font-semibold text-navy-950 sm:col-span-2">How can we help?
                  <textarea name="message" rows={3} placeholder="Briefly describe your requirements" className="mt-1.5 w-full resize-y rounded-xl border border-line bg-cream px-4 py-3 text-sm font-normal outline-none focus:border-navy-900" />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-navy-800">
                    <Send className="h-4 w-4 text-gold-400" /> Send consultation request
                  </button>
                  {consultationSent && <p className="mt-3 text-center text-xs text-emerald-700">Your email draft is ready. Send it from your email app to complete the request.</p>}
                </div>
              </form>
            </motion.div>
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
        <div className="mx-auto flex max-w-7xl justify-center px-6 pt-5 text-xs">
          <span className="inline-flex items-center gap-2 text-slate-300">
            <svg className="h-5 w-5 shrink-0 text-gold-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.1" />
              <g stroke="currentColor" strokeWidth=".9" strokeLinecap="round">
                {Array.from({ length: 24 }, (_, index) => (
                  <line key={index} x1="12" y1="4" x2="12" y2="10" transform={`rotate(${index * 15} 12 12)`} />
                ))}
              </g>
            </svg>
            <span>Committed to Compliance, Guided by Law.</span>
          </span>
        </div>
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
        href={contact.mobileHref}
        aria-label={`Call Lexus at ${contact.mobile}`}
        whileHover={{ scale: 1.06 }}
        className="grid h-12 w-12 place-items-center rounded-full border border-white/80 bg-white text-navy-950 shadow-xl transition hover:bg-cream"
      >
        <Phone className="h-5 w-5 stroke-[2.25]" />
      </motion.a>
      <motion.a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.06 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </motion.a>
    </div>
  );
}
