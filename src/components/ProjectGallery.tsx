"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
  X,
  MapPin,
  ArrowRight,
  MessageSquare,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { GALLERY_PROJECTS, GalleryProject, getWhatsAppUrl } from "@/data/companyConfig";

// All distinct fabrication categories
const GALLERY_TABS = [
  { id: "all", label: "All Work" },
  { id: "ss-railings", label: "SS Railings" },
  { id: "steel-staircases", label: "Steel Staircases" },
  { id: "ms-gates-grills", label: "Gates & Grills" },
  { id: "ms-windows-grills", label: "Window Grills" },
  { id: "ms-structural", label: "MS Structural" },
  { id: "aluminium-windows", label: "Aluminium Windows" },
  { id: "aluminium-doors-partitions", label: "Aluminium Partitions" },
  { id: "ac-cages", label: "AC Cages" },
  { id: "mosquito-mesh", label: "Mosquito Mesh" },
  { id: "invisible-grills", label: "Invisible Grills" },
  { id: "custom-steel", label: "Custom Metalwork" },
];

interface ProjectGalleryProps {
  onSelectProjectForQuote?: (title: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProjectForQuote }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxProject, setLightboxProject] = useState<GalleryProject | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Compute item counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: GALLERY_PROJECTS.length };
    GALLERY_PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return GALLERY_PROJECTS;
    return GALLERY_PROJECTS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // When on "all", show initial 12 items unless "showAll" is toggled
  const displayedProjects = useMemo(() => {
    if (activeTab !== "all" || showAll) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 12);
  }, [filteredProjects, activeTab, showAll]);

  // Handle escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxProject(null);
    };
    if (lightboxProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxProject]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#090f1d] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fabrication Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Our Work & Project Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Explore authentic craftsmanship across all fabrication disciplines: stainless steel balustrades, custom stairs, entrance gates, aluminium systems, and architectural enclosures.
          </p>
        </div>

        {/* Filter Tabs Bar (Horizontal scrollable with counter badges) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none justify-start lg:justify-center flex-wrap">
          {GALLERY_TABS.map((tab) => {
            const count = categoryCounts[tab.id] || 0;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowAll(false);
                }}
                className={`group flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold scale-[1.02]"
                    : "bg-[#0b1222] text-slate-300 hover:text-white hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors ${
                    isActive
                      ? "bg-slate-950/30 text-slate-950 font-bold"
                      : "bg-slate-800 text-cyan-400 group-hover:bg-slate-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Projects Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxProject(project)}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between"
            >
              {/* Background Image */}
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Layered Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Header Tags */}
              <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#070c18]/90 text-cyan-300 border border-cyan-400/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                  {project.categoryLabel}
                </span>

                <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-colors backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption Area */}
              <div className="relative z-10 p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.locationTag}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight uppercase leading-snug group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 opacity-90 font-normal leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 text-[11px]">
                  <span className="text-slate-400 font-medium truncate">
                    {project.materialType}
                  </span>
                  <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show All Button (Active when in 'All' tab) */}
        {activeTab === "all" && filteredProjects.length > 12 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b1222] hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-cyan-950/40"
            >
              <span>
                {showAll
                  ? `Show Fewer Projects`
                  : `View All ${filteredProjects.length} Projects Across All Categories`}
              </span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Bottom Custom Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">
              Looking for a custom fabrication design not shown here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We fabricate bespoke products from your CAD files, sketches, or site measurements.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Custom fabrication inquiry from project gallery")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-colors shrink-0 shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Drawing on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto"
          onClick={() => setLightboxProject(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-4xl bg-[#0b1222] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-res Image Preview */}
            <div className="relative h-72 sm:h-[450px] w-full bg-slate-950">
              <Image
                src={lightboxProject.imageUrl}
                alt={lightboxProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Information Bar */}
            <div className="p-6 bg-[#070c18] border-t border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    <span>{lightboxProject.categoryLabel}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{lightboxProject.locationTag}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
                    {lightboxProject.title}
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-semibold self-start sm:self-auto">
                  {lightboxProject.materialType}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                {lightboxProject.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/80">
                <a
                  href={getWhatsAppUrl(`Project inquiry for: ${lightboxProject.title} (${lightboxProject.categoryLabel})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    if (onSelectProjectForQuote) {
                      onSelectProjectForQuote(lightboxProject.title);
                    }
                    setLightboxProject(null);
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Request Quote for this Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
