"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_CONFIG } from "@/data/companyConfig";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showTagline = true,
}) => {
  return (
    <Link
      href="#home"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-xl shrink-0 ${className}`}
      aria-label="Monarch Fabrication - Home"
    >
      {/* Geometric 'M' Emblem Badge */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-xl bg-white p-1.5 shadow-md shadow-cyan-500/15 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-white/80">
        <div className="relative w-full h-full">
          <Image
            src="/images/logo-emblem.png"
            alt="Monarch Fabrication Emblem"
            fill
            sizes="48px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col text-left shrink-0">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-black tracking-wider text-white text-base sm:text-lg xl:text-xl uppercase font-sans whitespace-nowrap">
            MONARCH
          </span>
          <span className="font-bold tracking-wider text-cyan-400 text-base sm:text-lg xl:text-xl uppercase font-sans whitespace-nowrap">
            FABRICATION
          </span>
        </div>
        {showTagline && (
          <span className="hidden xl:block text-[10px] xl:text-[11px] text-cyan-300 font-medium tracking-tight mt-1 leading-none whitespace-nowrap">
            {COMPANY_CONFIG.tagline}
          </span>
        )}
      </div>
    </Link>
  );
};
