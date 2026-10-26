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
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 rounded-xl bg-white p-1 sm:p-1.5 shadow-md shadow-cyan-500/15 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-white/80">
        <div className="relative w-full h-full">
          <Image
            src="/images/logo-emblem.png"
            alt="Monarch Fabrication Emblem"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col text-left shrink-0">
        <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
          <span className="font-black tracking-wider text-white text-sm sm:text-base lg:text-base 2xl:text-lg uppercase font-sans whitespace-nowrap">
            MONARCH
          </span>
          <span className="font-bold tracking-wider text-cyan-400 text-sm sm:text-base lg:text-base 2xl:text-lg uppercase font-sans whitespace-nowrap">
            FABRICATION
          </span>
        </div>
        {showTagline && (
          <span className="hidden 2xl:block text-[10px] 2xl:text-[11px] text-cyan-300 font-medium tracking-tight mt-1 leading-none whitespace-nowrap">
            {COMPANY_CONFIG.tagline}
          </span>
        )}
      </div>
    </Link>
  );
};
