"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, MapPin, Tag, ArrowRight, MessageSquare } from "lucide-react";
import { GALLERY_PROJECTS, GalleryProject, getWhatsAppUrl } from "@/data/companyConfig";

const GALLERY_TABS = [
  { id: "all", label: "All Projects" },
  { id: "railings", label: "Railings" },
  { id: "staircases", label: "Stairs & Structural" },
  { id: "gates-grills", label: "Gates & Grills" },
  { id: "aluminium", label: "Aluminium" },
  { id: "custom-safety", label: "Safety & Custom" },
];

interface ProjectGalleryProps {
  onSelectProjectForQuote?: (title: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProjectForQuote }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxProject, setLightboxProject] = useState<GalleryProject | null>(null);

  const filteredProjects = GALLERY_PROJECTS.filter((proj) => {
    if (activeTab === "all") return true;
    return proj.category === activeTab;
  });

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              Featured Work & Installations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              A curated portfolio of fabricated railings, gates, custom staircases, aluminium systems, and protective structures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {GALLERY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-md shadow-cyan-500/20 font-bold"
                    : "bg-[#0b1222] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxProject(project)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Meta Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-[#070c18]/90 text-cyan-300 border border-cyan-400/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  {project.categoryLabel}
                </span>

                <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-medium mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{project.locationTag}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight uppercase group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2 opacity-90 font-normal">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Custom Photos */}
        <p className="mt-8 text-center text-xs text-slate-400">
          Showing representative architectural fabrication styles. Project images and client references are maintained in our central configuration file.
        </p>
      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setLightboxProject(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-4xl bg-[#0b1222] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-res Image Preview */}
            <div className="relative h-[380px] sm:h-[480px] w-full bg-slate-950">
              <Image
                src={lightboxProject.imageUrl}
                alt={lightboxProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Lightbox Information Bar */}
            <div className="p-6 bg-[#070c18] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {lightboxProject.categoryLabel}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">{lightboxProject.locationTag}</span>
                </div>
                <h3 className="text-xl font-bold text-white uppercase">{lightboxProject.title}</h3>
                <p className="text-xs text-slate-300 font-normal">{lightboxProject.description}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(`Project reference: ${lightboxProject.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-bold uppercase tracking-wider transition-colors"
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
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Get Similar Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
