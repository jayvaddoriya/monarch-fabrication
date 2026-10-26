"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  User,
  Phone,
  MessageSquare,
  Mail,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/data/companyConfig";

export const OwnerSection: React.FC = () => {
  const { owners, leadershipStatement } = COMPANY_CONFIG;

  return (
    <section id="owners" className="py-20 lg:py-28 bg-[#060a14] relative overflow-hidden border-t border-slate-800/80">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Backed by hands-on fabrication experience, dedicated site management, and client-first communication.
          </p>
        </div>

        {/* 3 Owners Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {owners.map((owner, idx) => (
            <div
              key={owner.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 relative group"
            >
              <div>
                {/* Photo & Badge Frame */}
                <div className="relative mb-6">
                  <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group-hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                    <Image
                      src={owner.image}
                      alt={owner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-[#0b1222]/15 to-transparent" />
                  </div>

                  {/* Owner Number Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#070c18]/90 border border-cyan-400/30 text-[10px] font-bold text-cyan-300 uppercase tracking-wider backdrop-blur-sm shadow-md">
                    Leadership Partner
                  </div>

                  <div className="absolute -bottom-3 right-4 p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 text-slate-950 shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                    {owner.name}
                  </h3>
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {owner.designation}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium pt-1">
                    {owner.roleDescription}
                  </p>
                </div>

                {/* Bio & Specialization */}
                <p className="mt-4 text-xs text-slate-300 leading-relaxed font-normal">
                  {owner.bio}
                </p>

                <div className="mt-4 p-2.5 rounded-lg bg-[#070c18] border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white">Specialty:</strong> {owner.specialization}
                  </span>
                </div>
              </div>

              {/* Direct Owner Contact Channels */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Direct Contact
                </span>

                <div className="grid grid-cols-3 gap-2">
                  {/* Direct Phone */}
                  <a
                    href={`tel:${owner.phoneTel}`}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#070c18] hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-colors group/btn"
                    title={`Call ${owner.name}`}
                  >
                    <Phone className="w-4 h-4 mb-1 text-cyan-400" />
                    <span className="text-[10px] font-semibold">Call</span>
                  </a>

                  {/* Direct WhatsApp */}
                  <a
                    href={`https://wa.me/${owner.whatsappNumberOnly}?text=${encodeURIComponent(`Hello ${owner.name}, I would like to inquire about a fabrication project with Monarch Fabrication.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#070c18] hover:bg-emerald-950/40 border border-slate-800 hover:border-[#25D366]/40 text-slate-300 hover:text-[#25D366] transition-colors group/btn"
                    title={`WhatsApp ${owner.name}`}
                  >
                    <MessageSquare className="w-4 h-4 mb-1 text-[#25D366]" />
                    <span className="text-[10px] font-semibold">WhatsApp</span>
                  </a>

                  {/* Direct Email */}
                  <a
                    href={`mailto:${owner.email}`}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#070c18] hover:bg-sky-950/40 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-colors group/btn"
                    title={`Email ${owner.name}`}
                  >
                    <Mail className="w-4 h-4 mb-1 text-sky-400" />
                    <span className="text-[10px] font-semibold">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Leadership Statement */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b1222] via-[#0e1a34] to-[#0b1222] border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Our Shared Commitment
            </span>
            <p className="text-sm sm:text-base font-semibold text-white italic">
              &ldquo;{leadershipStatement}&rdquo;
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
          >
            Connect With The Owners
          </a>
        </div>
      </div>
    </section>
  );
};
