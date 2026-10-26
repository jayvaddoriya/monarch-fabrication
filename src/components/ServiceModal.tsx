"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, MessageSquare, ArrowRight, Layers, Sparkles } from "lucide-react";
import { ServiceItem, getWhatsAppUrl } from "@/data/companyConfig";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsAppUrl = getWhatsAppUrl(service.title);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0b1222] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/50 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 w-full">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-[#0b1222]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-400/40 text-xs font-bold uppercase tracking-wider">
              {service.materialType}
            </span>
            {service.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 text-white/90 text-xs font-semibold border border-white/20">
                {service.badge}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {service.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {service.fullDescription}
            </p>
          </div>

          {/* Grid: Features & Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Features */}
            <div className="bg-[#070c18] p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Technical Features</span>
              </div>
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="bg-[#070c18] p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>Typical Applications</span>
              </div>
              {service.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Finishes */}
          {service.finishOptions.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Available Surface Finishes & Coatings
              </span>
              <div className="flex flex-wrap gap-2">
                {service.finishOptions.map((finish, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#070c18] text-slate-300 border border-slate-700 text-xs font-medium"
                  >
                    {finish}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#070c18] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onSelectForQuote(service.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Request Quote for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
