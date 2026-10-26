"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageSquare, Info } from "lucide-react";
import { ServiceItem, getWhatsAppUrl } from "@/data/companyConfig";

interface ServiceCardProps {
  service: ServiceItem;
  onOpenModal: (service: ServiceItem) => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onOpenModal,
  onSelectForQuote,
}) => {
  const whatsAppUrl = getWhatsAppUrl(service.title);

  return (
    <div className="group flex flex-col justify-between bg-[#0b1222] border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 relative">
      <div>
        {/* Card Image */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-900">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-[#0b1222]/20 to-transparent" />

          {/* Material Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-[#070c18]/90 text-cyan-300 border border-cyan-400/30 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
              {service.materialType}
            </span>
          </div>

          {/* Quick badge */}
          {service.badge && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 rounded bg-slate-950/80 text-white/90 text-[10px] font-semibold border border-white/20">
                {service.badge}
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6 space-y-3.5">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase group-hover:text-cyan-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
            {service.shortDescription}
          </p>

          {/* Feature highlights */}
          <div className="space-y-1.5 pt-1">
            {service.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 pt-0 space-y-2.5">
        <div className="flex items-center gap-2">
          {/* View Details Button */}
          <button
            type="button"
            onClick={() => onOpenModal(service)}
            className="flex-1 py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
          >
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>Specifications</span>
          </button>

          {/* WhatsApp Direct Query */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-colors shrink-0"
            title={`Enquire on WhatsApp about ${service.title}`}
            aria-label={`Enquire on WhatsApp about ${service.title}`}
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        {/* Request Quote Button */}
        <button
          type="button"
          onClick={() => onSelectForQuote(service.title)}
          className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-sky-500/20 hover:from-cyan-400 hover:to-sky-400 text-cyan-300 hover:text-slate-950 border border-cyan-500/40 hover:border-transparent text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all duration-200"
        >
          <span>Request a Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
