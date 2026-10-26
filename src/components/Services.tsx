"use client";

import React, { useState } from "react";
import { Sparkles, Filter } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/companyConfig";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceModal } from "@/components/ServiceModal";

const CATEGORY_FILTERS = [
  { id: "all", label: "All Services (12)" },
  { id: "stainless-steel", label: "Stainless Steel (SS)" },
  { id: "mild-steel", label: "Mild Steel (MS)" },
  { id: "aluminium", label: "Aluminium" },
  { id: "custom", label: "Safety & Custom" },
];

interface ServicesProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const handleSelectForQuote = (title: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(title);
    }
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#060a14] relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fabrication Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              Our Core Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              From architectural stainless steel railings to heavy industrial mild steel structures and precision aluminium systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-500 shrink-0 mr-1 hidden sm:block" />
            {CATEGORY_FILTERS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-md shadow-cyan-500/25 font-bold"
                    : "bg-[#0b1222] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Services Responsive Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenModal={(srv) => setSelectedService(srv)}
              onSelectForQuote={handleSelectForQuote}
            />
          ))}
        </div>

        {/* Bottom Custom Work Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b1222] via-[#0d1a33] to-[#0b1222] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
              Have a unique architectural design or custom blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              True to our promise: &ldquo;We Will Make Whatever You Think..&rdquo; Send us your sketches or site dimensions.
            </p>
          </div>
          <button
            onClick={() => handleSelectForQuote("Custom Steel Fabrication")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
          >
            Submit Custom Specification
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={handleSelectForQuote}
      />
    </section>
  );
};
