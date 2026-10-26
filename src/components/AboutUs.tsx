"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Ruler, Sparkles, Hammer, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/companyConfig";

const MATERIALS_INFO = [
  {
    id: "ss",
    name: "Stainless Steel (SS)",
    badge: "Architectural & Corrosion-Resistant",
    description:
      "Engineered for luxury railings, exposed balconies, and exterior architectural applications where rust immunity and high-sheen satin or mirror finishes are paramount.",
    pros: ["Superior weather & rust resistance", "Sleek modern mirror/satin aesthetic", "Zero periodic repainting required"],
    bestFor: "Balcony railings, glass balustrades, invisible safety anchors, architectural fittings.",
  },
  {
    id: "ms",
    name: "Mild Steel (MS)",
    badge: "High Strength & Structural Rigidity",
    description:
      "The foundational backbone for heavy load-bearing staircases, entrance gates, security grills, and industrial structural frameworks offering immense mechanical strength.",
    pros: ["Exceptional structural load tolerance", "Versatile shaping and laser-cut patterns", "Cost-effective for large spans & frames"],
    bestFor: "Internal & external staircases, heavy sliding gates, window security grills, structural frames.",
  },
  {
    id: "aluminium",
    name: "Architectural Aluminium",
    badge: "Lightweight & Smooth Glide Systems",
    description:
      "Precision-extruded alloy profiles designed for high-performance sliding windows, acoustic office glass partitions, and slimline fenestration systems.",
    pros: ["Naturally rust-proof & lightweight", "Ultra-smooth sliding roller motion", "Powder-coated & anodized color choices"],
    bestFor: "Sliding windows, casement windows, office cabin partitions, mosquito mesh frames.",
  },
];

export const AboutUs: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("ss");

  const currentMaterial = MATERIALS_INFO.find((m) => m.id === selectedMaterial) || MATERIALS_INFO[0];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#090f1d] relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Monarch Fabrication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Crafting Metal With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Architectural Precision
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Monarch Fabrication is a premier fabrication business providing custom metalwork, durable materials, and precise installation tailored to residential, commercial, and industrial spaces.
          </p>
        </div>

        {/* 2-Column Content Grid: Imagery & Core Capabilities */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-black/60 group">
              <div className="relative h-[380px] sm:h-[450px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Precision Metalwork and Fabrication Workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b1222]/90 backdrop-blur-md border border-cyan-500/30">
                <p className="text-xs sm:text-sm font-semibold text-white italic">
                  &ldquo;{COMPANY_CONFIG.tagline}&rdquo;
                </p>
                <p className="text-[11px] text-cyan-400 mt-1 uppercase tracking-wider font-medium">
                  Monarch Fabrication Core Philosophy
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Strengths & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0d1629] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">
                  Custom Engineering
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Every project is made to measure based on rigorous on-site measurements and architectural layout specifications.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0d1629] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">
                  Durable Materials
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  We use verified grades of Stainless Steel, structural Mild Steel, and heavy-gauge architectural Aluminium profiles.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0d1629] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">
                  Precision Finishing
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Smooth weld grinding, anti-corrosive primer pre-treatment, and high-durability electrostatic powder coating or satin polish.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0d1629] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">
                  On-Site Installation
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Rigid fastening, plumb alignment, and safety verification carried out by our disciplined on-site installation team.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  Need expert guidance on metal choices?
                </p>
                <p className="text-xs text-slate-400">
                  We help select the ideal material for durability, safety, and budget.
                </p>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-cyan-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Consult With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Material Selection Guide (SS vs MS vs Aluminium) */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                Material Expertise: Clear & Transparent
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                We clearly differentiate materials so you know exactly what is being fabricated for your site.
              </p>
            </div>

            {/* Material Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-[#0b1222] border border-slate-800 shrink-0">
              {MATERIALS_INFO.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedMaterial === mat.id
                      ? "bg-gradient-to-r from-cyan-500 to-sky-400 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {mat.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Material Detail Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-cyan-500/30 relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[11px] font-bold tracking-wider uppercase border border-cyan-500/30">
                  {currentMaterial.badge}
                </div>
                <h4 className="text-xl font-bold text-white">{currentMaterial.name}</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {currentMaterial.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Recommended Applications:
                  </span>
                  <p className="text-xs text-slate-300">{currentMaterial.bestFor}</p>
                </div>
              </div>

              <div className="bg-[#070c18] p-5 rounded-xl border border-slate-800 md:w-80 shrink-0 space-y-2.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                  Key Advantages
                </span>
                {currentMaterial.pros.map((pro, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
