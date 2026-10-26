"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Send,
} from "lucide-react";
import { COMPANY_CONFIG, getWhatsAppUrl } from "@/data/companyConfig";
import { ContactForm } from "@/components/ContactForm";

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const { contact } = COMPANY_CONFIG;
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#090f1d] relative overflow-hidden">
      {/* Background Grid & Accents */}
      <div className="absolute inset-0 bg-industrial-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Connect With Monarch Fabrication
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Whether you require site measurements, drawing estimations, or urgent fabrication consultations, reach us across our direct channels.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Information Cards & Quotation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Options */}
            <div className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3.5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>Direct Contact Channels</span>
                <span className="text-[10px] text-cyan-400 font-mono">Monarch Fabrication</span>
              </h3>

              {/* 1. Main Office Phone */}
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#070c18] hover:bg-cyan-950/30 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Main Office & Customer Care
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300">
                    {contact.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* 2. Dedicated Quotation Hotline */}
              <a
                href={`tel:${contact.quotePhoneTel}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#070c18] hover:bg-cyan-950/30 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Quotation & Drawing Estimation Hotline
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-300">
                    {contact.quotePhoneDisplay}
                  </span>
                </div>
              </a>

              {/* 3. Official WhatsApp */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#070c18] hover:bg-emerald-950/30 border border-slate-800/80 hover:border-[#25D366]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Official WhatsApp (Send Photos & Sketches)
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-300">
                    {contact.whatsapp}
                  </span>
                </div>
              </a>

              {/* 4. Official Email Address */}
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#070c18] hover:bg-sky-950/30 border border-slate-800/80 hover:border-sky-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Official Email
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-300">
                    {contact.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Address & Hours */}
            <div className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-3 border-b border-slate-800">
                Workshop & Site Location
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-white leading-relaxed">
                    {contact.address.fullAddress}
                  </p>
                  <a
                    href={contact.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-300 space-y-0.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Working Hours
                  </span>
                  <p className="font-medium text-white">{contact.openingHours.weekday}</p>
                  <p className="text-slate-400">{contact.openingHours.weekend}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Location Preview */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0b1222] h-48 relative">
              <iframe
                src={contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monarch Fabrication Workshop Location Map"
              />
            </div>
          </div>

          {/* Right Column: Accessible Quotation Form */}
          <div className="lg:col-span-7">
            <ContactForm preselectedService={preselectedService} />
          </div>
        </div>
      </div>
    </section>
  );
};
