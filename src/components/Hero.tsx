"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Shield, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/companyConfig";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#060a14]"
    >
      {/* Background Architectural Metalwork Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural Stainless Steel and Glass Railing Fabrication"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-90 transform scale-105"
        />
        {/* Layered industrial dark gradient overlays to match cyan & navy brand theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a14] via-[#070e20]/90 to-[#070e20]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-[#060a14]/60" />
        {/* Subtle geometric grid overlay echoing architectural blueprints */}
        <div className="absolute inset-0 bg-industrial-grid opacity-40 pointer-events-none" />
      </div>

      {/* Floating subtle geometric decorative accent lines */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Logo Tagline Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/50"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="uppercase tracking-wider text-[11px] sm:text-xs text-white/90">
              {COMPANY_CONFIG.tagline}
            </span>
          </motion.div>

          {/* Animated Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] uppercase"
          >
            Precision Fabrication.{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200">
              Strength That Lasts.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal"
          >
            Custom steel, MS, and aluminium fabrication solutions for homes, commercial spaces, and industrial projects. Engineered to architectural standards with made-to-measure precision.
          </motion.p>

          {/* CTAs: Request Free Quote & Explore Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base font-bold text-slate-950 uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-400 rounded-xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group text-center"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl backdrop-blur-sm transition-all duration-300 text-center"
            >
              <Wrench className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Explore Our Services</span>
            </a>

            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneTel}`}
              className="inline-flex items-center justify-center px-4 py-4 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors sm:hidden text-center"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Call Us Directly</span>
            </a>
          </motion.div>

          {/* Quick Trust Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tight">100% Custom</p>
                <p className="text-[11px] text-slate-400">Made to measure</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tight">Tested Metals</p>
                <p className="text-[11px] text-slate-400">SS, MS & Aluminium</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tight">Precision Weld</p>
                <p className="text-[11px] text-slate-400">Clean joint finishes</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-tight">On-Site Fit</p>
                <p className="text-[11px] text-slate-400">Safe installation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
