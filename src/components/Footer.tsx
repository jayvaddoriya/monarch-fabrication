"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { COMPANY_CONFIG, SERVICES_DATA } from "@/data/companyConfig";

// Clean, high-contrast SVG brand icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { contact, socialLinks } = COMPANY_CONFIG;

  return (
    <footer className="bg-[#050811] border-t border-slate-800 text-slate-400 text-xs relative overflow-hidden">
      {/* Decorative Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Statement (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo showTagline={true} />

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mt-3 font-normal">
              {COMPANY_CONFIG.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-cyan-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>&ldquo;{COMPANY_CONFIG.tagline}&rdquo;</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-400 transition-colors">
                  Work Process
                </a>
              </li>
              <li>
                <a href="#owners" className="hover:text-cyan-400 transition-colors font-semibold">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Fabrication Services
            </h4>
            <ul className="space-y-1.5">
              {SERVICES_DATA.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors truncate block"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 mt-1"
                >
                  <span>View all 12 services</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Channels (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Contact & Quotations
            </h4>
            <div className="space-y-2.5">
              {/* Office Phone */}
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Office: {contact.phoneDisplay}</span>
              </a>

              {/* Quotation Phone */}
              <a
                href={`tel:${contact.quotePhoneTel}`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Quote: {contact.quotePhoneDisplay}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contact.whatsappNumberOnly}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {contact.whatsapp}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{contact.email}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-2 pt-1 border-t border-slate-800/80">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{contact.address.fullAddress}</span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <p>{contact.openingHours.weekday}</p>
                  <p className="text-slate-400">{contact.openingHours.weekend}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Compliance */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {currentYear} MONARCH FABRICATION. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <a href="#owners" className="hover:text-cyan-400 transition-colors">
              3 Partners / Owners
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Request Quotation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
