"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { ProjectGallery } from "@/components/ProjectGallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { OwnerSection } from "@/components/OwnerSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function HomePage() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>(
    "Stainless Steel Railings"
  );

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
  };

  return (
    <div className="relative min-h-screen bg-[#060a14] text-slate-200 flex flex-col">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <AboutUs />

        {/* 12 Core Services Section */}
        <Services onSelectServiceForQuote={handleSelectService} />

        {/* Project Gallery & Work Showcase */}
        <ProjectGallery onSelectProjectForQuote={handleSelectService} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Work Process 4-Step Timeline */}
        <ProcessTimeline />

        {/* Owner & Leadership Profile */}
        <OwnerSection />

        {/* Contact & Quotation Request Section */}
        <ContactSection preselectedService={selectedServiceForQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp, Call & Back-to-Top Controls */}
      <FloatingActions currentServiceContext={selectedServiceForQuote} />
    </div>
  );
}
