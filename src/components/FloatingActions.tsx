"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, ChevronUp } from "lucide-react";
import { COMPANY_CONFIG, getWhatsAppUrl } from "@/data/companyConfig";

interface FloatingActionsProps {
  currentServiceContext?: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ currentServiceContext }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsAppUrl = getWhatsAppUrl(currentServiceContext);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-slate-950 font-bold shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat with Monarch Fabrication on WhatsApp"
        title="WhatsApp Enquiry"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
        <MessageSquare className="w-5 h-5 sm:w-5 sm:h-5 fill-slate-950 text-slate-950" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-slate-950">
          WhatsApp Us
        </span>
      </a>

      {/* Floating Call Button (Mobile Only) */}
      <a
        href={`tel:${COMPANY_CONFIG.contact.phoneTel}`}
        className="pointer-events-auto sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-slate-950 font-bold shadow-2xl shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
        aria-label="Call Monarch Fabrication"
        title="Call Directly"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
