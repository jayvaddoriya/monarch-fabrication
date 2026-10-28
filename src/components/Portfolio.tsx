"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Play,
  Pause,
  Layers,
  ArrowRight,
  Eye,
  Clock,
} from "lucide-react";
import {
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
  PortfolioImage,
} from "@/data/portfolioData";
import { COMPANY_CONFIG, getWhatsAppUrl } from "@/data/companyConfig";

interface PortfolioProps {
  onSelectServiceForQuote?: (title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("invisible-grill");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [lightboxImage, setLightboxImage] = useState<PortfolioImage | null>(null);

  // Active Category
  const activeCategory: PortfolioCategory =
    PORTFOLIO_CATEGORIES.find((c) => c.slug === activeCategorySlug) ||
    PORTFOLIO_CATEGORIES[0];

  const totalSlides = activeCategory.images.length;

  // Touch Swipe State
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Slide navigation
  const nextSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
    setIsAutoPlaying(false);
  };

  // Switch Category
  const handleCategoryChange = (slug: string) => {
    setActiveCategorySlug(slug);
    setCurrentSlideIndex(0);
    setIsAutoPlaying(true);
  };

  // Autoplay Effect
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, totalSlides]);

  // Handle Touch Gestures for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped Left -> Next
      nextSlide();
      setIsAutoPlaying(false);
    } else if (diff < -50) {
      // Swiped Right -> Prev
      prevSlide();
      setIsAutoPlaying(false);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      if (e.key === "Escape") setLightboxImage(null);
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage, nextSlide, prevSlide]);

  const activeImage: PortfolioImage | undefined = activeCategory.images[currentSlideIndex];

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#070c18] relative overflow-hidden">
      {/* Anchor alias for backwards compatibility */}
      <div id="gallery" className="absolute -top-24 pointer-events-none" />
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-5 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Actual Fabrication Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight font-sans">
            OUR PORTFOLIO
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Real on-site fabrication and installation projects by Monarch Fabrication. Browse our verified work by category with full interactive sliders and high-resolution galleries.
          </p>
        </div>

        {/* Category Selector Tabs (Line by Line Categories) */}
        <div className="mb-10">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Categories:</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              More categories being added line by line
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {PORTFOLIO_CATEGORIES.map((cat, idx) => {
              const isActive = cat.slug === activeCategorySlug;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer border ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 border-cyan-300 shadow-lg shadow-cyan-500/25"
                      : "bg-[#0b1222] border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <span>
                    {idx + 1}. {cat.name}
                  </span>
                  {cat.isAvailable ? (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                        isActive
                          ? "bg-slate-950 text-cyan-300"
                          : "bg-cyan-950 text-cyan-400 border border-cyan-500/30"
                      }`}
                    >
                      {cat.images.length} Photos
                    </span>
                  ) : (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 border border-slate-800 font-normal">
                      Next
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE CATEGORY SHOWCASE */}
        {activeCategory.isAvailable && activeImage ? (
          <div className="space-y-8">
            {/* Category Intro Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1222] border border-cyan-500/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                    {activeCategory.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                    {activeCategory.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                  {activeCategory.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {activeCategory.description}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                <a
                  href={getWhatsAppUrl(`Hello Monarch Fabrication, I would like to inquire about ${activeCategory.name} installation.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#25D366]/20 cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* MAIN INTERACTIVE SLIDER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Slider Viewport (8 Cols) */}
              <div className="lg:col-span-7 xl:col-span-8">
                <div
                  className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group select-none"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Active Slide Image */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] bg-slate-900">
                    <Image
                      src={activeImage.image}
                      alt={activeImage.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />

                    {/* Gradient Overlay for Readable Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

                    {/* Top Controls Badge: Slide Counter & Fullscreen */}
                    <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-4 flex items-center justify-between z-10">
                      <div className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md">
                        <span className="text-cyan-400">
                          {currentSlideIndex + 1 < 10 ? `0${currentSlideIndex + 1}` : currentSlideIndex + 1}
                        </span>
                        <span className="text-slate-500">/</span>
                        <span className="text-slate-400">
                          {totalSlides < 10 ? `0${totalSlides}` : totalSlides}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                          className="p-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer shadow-md"
                          title={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
                        >
                          {isAutoPlaying ? (
                            <Pause className="w-3.5 h-3.5 text-cyan-400" />
                          ) : (
                            <Play className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setLightboxImage(activeImage)}
                          className="p-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer shadow-md"
                          title="Open Fullscreen Image"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Prev / Next Navigation Arrows */}
                    <button
                      type="button"
                      onClick={() => {
                        prevSlide();
                        setIsAutoPlaying(false);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/70 hover:bg-cyan-500 text-white hover:text-slate-950 border border-white/15 transition-all flex items-center justify-center cursor-pointer shadow-xl backdrop-blur-md z-10"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        nextSlide();
                        setIsAutoPlaying(false);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/70 hover:bg-cyan-500 text-white hover:text-slate-950 border border-white/15 transition-all flex items-center justify-center cursor-pointer shadow-xl backdrop-blur-md z-10"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Bottom Caption Overlay on Image */}
                    <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-5 z-10 space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{activeImage.location}</span>
                      </div>
                      <h4 className="text-base sm:text-xl font-bold text-white uppercase tracking-tight line-clamp-2">
                        {activeImage.title}
                      </h4>
                    </div>
                  </div>

                  {/* Thumbnail Navigation Strip */}
                  <div className="p-3 bg-[#070c18] border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
                    {activeCategory.images.map((img, idx) => {
                      const isSelected = idx === currentSlideIndex;
                      return (
                        <button
                          key={img.id}
                          type="button"
                          onClick={() => goToSlide(idx)}
                          className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                            isSelected
                              ? "border-cyan-400 ring-2 ring-cyan-500/30 scale-105"
                              : "border-slate-800 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img.image}
                            alt={img.title}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-cyan-500/10" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Slide Meta & Fabrication Details (4 Cols) */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-5">
                {/* Active Image Details Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-4 shadow-xl">
                  <div className="space-y-1 pb-3 border-b border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      Work Specimen #{currentSlideIndex + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                      {activeImage.title}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{activeImage.location}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {activeImage.description}
                  </p>

                  {/* Engineering Specs Pills */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Engineering Specifications:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeImage.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-[#070c18] border border-slate-800 text-cyan-300 text-[11px] font-semibold flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <a
                      href={getWhatsAppUrl(
                        `Hi Monarch Fabrication, I am inquiring about your ${activeCategory.name} project: "${activeImage.title}". Please share quotation details.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Get Quote For This Design</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectServiceForQuote) {
                          onSelectServiceForQuote(
                            activeCategory.slug === "invisible-grill"
                              ? "Invisible Safety Grills"
                              : activeCategory.slug === "aluminium-partitions"
                              ? "Aluminium Partitions"
                              : "Aluminium Windows"
                          );
                        }
                        const contactEl = document.getElementById("contact");
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Request Site Measurement</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>

                {/* Safety & Quality Assurance Badge */}
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-[11px]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>
                      {activeCategory.slug === "invisible-grill"
                        ? "Monarch Safety Guarantee"
                        : "Monarch Precision Engineering"}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {activeCategory.slug === "invisible-grill"
                      ? "Every invisible grill is anchored using high-tensile 316-grade stainless steel cables with heavy aluminium track tensioning. Suitable for high-rise buildings up to 40+ floors."
                      : activeCategory.slug === "aluminium-elevation"
                      ? "Custom-fabricated exterior elevations and vertical louvers engineered with high-tensile architectural alloy sections and all-weather exterior powder coating to withstand heavy wind loads and intense sunlight."
                      : activeCategory.slug === "aluminium-partitions"
                      ? "Engineered modular partition framing with acoustic dampening seals, concealed wiring raceways, and toughened/frosted glass options for professional corporate offices and industrial plants."
                      : activeCategory.slug === "glass-windows"
                      ? "Custom-engineered architectural glass systems featuring structural silicone butt-joint 90° corner glazing, toughened safety glass, and cantilevered box projections built for panoramic clarity and extreme weather resilience."
                      : activeCategory.slug === "glass-elevation"
                      ? "High-performance structural glazing curtain walls and point-fixed spider glass facades engineered with toughened laminated safety glass and stainless steel fittings to withstand severe wind pressure and seismic criteria."
                      : "Every aluminium window & sliding section is fabricated using heavy-gauge architectural alloy sections with precision nylon bearing rollers and EPDM weather-proofing seals for smooth, silent operation."}
                  </p>
                </div>
              </div>
            </div>

            {/* 5-GRID PHOTO GALLERY AT-A-GLANCE */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
                    <span>All {activeCategory.name} Project Photos</span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      {activeCategory.images.length}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    Click any project photo to expand in high-resolution full screen.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {activeCategory.images.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => setLightboxImage(img)}
                    className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400/50 shadow-lg cursor-pointer transition-all aspect-[4/5]"
                  >
                    <Image
                      src={img.image}
                      alt={img.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-1.5 rounded-lg bg-slate-950/80 text-cyan-400 backdrop-blur-sm">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 inset-x-2.5 space-y-0.5">
                      <span className="text-[10px] text-cyan-400 font-mono block">
                        Project #{idx + 1}
                      </span>
                      <h5 className="text-xs font-bold text-white truncate">
                        {img.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* PLACEHOLDER FOR UPCOMING CATEGORIES (USER ADDS LINE BY LINE) */
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0b1222] border border-dashed border-slate-800 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
              <Clock className="w-7 h-7" />
            </div>
            <div className="max-w-md mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Adding Work Line by Line
              </span>
              <h3 className="text-xl font-bold text-white uppercase">
                {activeCategory.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We are actively uploading our real workshop and installation project photos for this category.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => handleCategoryChange("invisible-grill")}
                className="px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider hover:bg-cyan-500/25 transition-colors cursor-pointer"
              >
                ← Back to Invisible Grill (5 Photos)
              </button>
              <a
                href={getWhatsAppUrl(`Hello Monarch Fabrication, please share portfolio photos and quote for ${activeCategory.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#25D366] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/80 border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl h-[85vh] flex flex-col justify-between">
            {/* Main Lightbox Image Viewport */}
            <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Details Strip */}
            <div className="p-4 mt-3 rounded-xl bg-[#0b1222]/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div>
                <h4 className="font-bold text-white text-sm uppercase">
                  {lightboxImage.title}
                </h4>
                <p className="text-[11px] text-cyan-400 mt-0.5">
                  {lightboxImage.location}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppUrl(`Hello Monarch Fabrication, I saw this project: "${lightboxImage.title}" in your portfolio. Please send quotation.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Inquire</span>
                </a>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white uppercase text-[11px] font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
