"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { Logo } from "@/components/Logo";
import { COMPANY_CONFIG, getWhatsAppUrl } from "@/data/companyConfig";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", shortLabel: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", shortLabel: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Owners", href: "#owners" },
  { label: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "gallery", "why-us", "process", "owners", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-[#060a14]/95 backdrop-blur-md border-b border-cyan-500/20 py-2 sm:py-2.5 shadow-xl shadow-black/60"
            : "bg-gradient-to-b from-[#060a14]/95 via-[#060a14]/85 to-transparent py-2.5 sm:py-3.5"
        }`}
      >
        {/* Responsive Container engineered to fit 1024px, 1280px, 1366px, 1440px & 1920px screens perfectly */}
        <div className="w-full px-3 sm:px-4 lg:px-4 xl:px-6 2xl:px-10 max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between gap-2 lg:gap-2 xl:gap-3 2xl:gap-6 w-full">
            {/* Left: Brand Logo */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Middle: Desktop Navigation (Single row with adaptive labels & spacing on laptops) */}
            <nav
              className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 2xl:gap-1.5 flex-1 mx-1 xl:mx-2"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-2 lg:px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold whitespace-nowrap rounded-lg transition-all duration-200 shrink-0 ${
                      isActive
                        ? "text-cyan-400 font-bold bg-cyan-950/40"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="inline 2xl:hidden">{link.shortLabel || link.label}</span>
                    <span className="hidden 2xl:inline">{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick Actions Cluster */}
            <div className="hidden sm:flex items-center gap-1.5 lg:gap-2 xl:gap-2.5 2xl:gap-3 shrink-0">
              {/* Direct Phone Line (Icon only on laptops, full direct line badge on large desktops) */}
              <a
                href={`tel:${COMPANY_CONFIG.contact.phoneTel}`}
                className="flex items-center gap-2 px-2 lg:px-2.5 2xl:px-3 py-1.5 text-xs rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-950/30 transition-all group shrink-0"
                title={`Call Monarch Fabrication: ${COMPANY_CONFIG.contact.phoneDisplay}`}
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left whitespace-nowrap hidden 2xl:block">
                  <span className="block text-[9px] text-slate-400 uppercase tracking-widest leading-none font-semibold">
                    Direct Line
                  </span>
                  <span className="font-bold text-xs tracking-tight text-white group-hover:text-cyan-300">
                    {COMPANY_CONFIG.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* WhatsApp Quick Icon */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-colors flex items-center justify-center shrink-0"
                title="Chat on WhatsApp (+91 81530 73266)"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Request Quote Button */}
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-3 lg:px-3.5 xl:px-4 py-1.5 lg:py-2 text-xs font-bold text-slate-950 uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-400 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group whitespace-nowrap shrink-0"
              >
                <span className="hidden 2xl:inline">Request a Quote</span>
                <span className="inline 2xl:hidden">Get Quote</span>
                <ArrowRight className="w-3 h-3 lg:w-3.5 lg:h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button (Below 1024px) */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY_CONFIG.contact.phoneTel}`}
                className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 transition-colors sm:hidden"
                aria-label="Call Monarch Fabrication"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs bg-[#0b1222] border-l border-cyan-500/20 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Navigation</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="mt-6 flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between whitespace-nowrap"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <a
            href={`tel:${COMPANY_CONFIG.contact.phoneTel}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call: {COMPANY_CONFIG.contact.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366]/20 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
