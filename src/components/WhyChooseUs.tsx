"use client";

import React from "react";
import {
  Ruler,
  ShieldCheck,
  Layers,
  Sparkles,
  Building2,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { WHY_CHOOSE_US_POINTS } from "@/data/companyConfig";

const ICON_MAP: Record<string, React.ReactNode> = {
  Ruler: <Ruler className="w-6 h-6 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
  Layers: <Layers className="w-6 h-6 text-cyan-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  Building2: <Building2 className="w-6 h-6 text-cyan-400" />,
  Headphones: <Headphones className="w-6 h-6 text-cyan-400" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#060a14] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fabrication Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Why Choose Monarch Fabrication
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            We focus on genuine craftsmanship, exact site measurements, and structural durability without relying on inflated claims or generic templates.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_POINTS.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                {ICON_MAP[item.icon] || <CheckCircle2 className="w-6 h-6 text-cyan-400" />}
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight uppercase group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0d1629] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <p className="text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white">Direct Workshop Fabrication:</span> No middlemen or sub-contracting markups. You communicate directly with skilled fabricators.
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider whitespace-nowrap"
          >
            Request a Consultation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
