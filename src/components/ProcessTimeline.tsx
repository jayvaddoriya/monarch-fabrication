"use client";

import React from "react";
import { Sparkles, MessageSquare, Compass, Flame, ShieldCheck, Clock } from "lucide-react";
import { PROCESS_STEPS } from "@/data/companyConfig";

const STEP_ICONS = [
  <MessageSquare key="1" className="w-5 h-5 text-cyan-400" />,
  <Compass key="2" className="w-5 h-5 text-cyan-400" />,
  <Flame key="3" className="w-5 h-5 text-cyan-400" />,
  <ShieldCheck key="4" className="w-5 h-5 text-cyan-400" />,
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#090f1d] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Our Work Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A transparent four-step workflow from the first phone call or sketch to seamless structural installation.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#0b1222] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 group flex flex-col justify-between"
            >
              {/* Step Number & Icon Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-slate-800 group-hover:text-cyan-500/40 transition-colors font-mono">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    {STEP_ICONS[index]}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight uppercase group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Step Sub-details */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <p className="text-[11px] text-cyan-400 font-medium leading-normal">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Timeline Notice Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center gap-2.5 text-center max-w-2xl mx-auto">
          <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
          <p className="text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Important Note:</span> Actual turnaround timelines vary depending on project scale, architectural custom geometry, and chosen coating/finishing options.
          </p>
        </div>
      </div>
    </section>
  );
};
