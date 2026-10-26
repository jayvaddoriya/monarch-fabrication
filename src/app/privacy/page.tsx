import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { COMPANY_CONFIG } from "@/data/companyConfig";

export const metadata = {
  title: "Privacy Policy | MONARCH FABRICATION",
  description: "Privacy policy and customer data handling practices of Monarch Fabrication.",
};

export default function PrivacyPage() {
  const { contact } = COMPANY_CONFIG;

  return (
    <div className="min-h-screen bg-[#060a14] text-slate-300">
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-[#090f1d]/90 backdrop-blur-md py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-slate-400">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                1. Information We Collect
              </h2>
              <p>
                When you interact with Monarch Fabrication through our website enquiry form, phone calls, or WhatsApp, we may collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Your full name and contact information (phone number, WhatsApp number, email address).</li>
                <li>Project site location, approximate structural dimensions, and architectural drawings.</li>
                <li>Chosen fabrication categories (such as stainless steel railings, mild steel staircases, or aluminium systems).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                2. How We Use Your Information
              </h2>
              <p>
                The information you provide is strictly used for legitimate business purposes, specifically:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Preparing and delivering precise quotation estimates and technical specifications.</li>
                <li>Scheduling on-site measurements and structural inspections.</li>
                <li>Communicating progress during fabrication, coating, and installation.</li>
                <li>Addressing customer support inquiries and warranty queries.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                3. Information Sharing & Security
              </h2>
              <p>
                Monarch Fabrication does not sell, rent, trade, or share your personal data with third-party marketing companies. Your data is accessible solely to our direct fabrication team and authorized installation personnel responsible for completing your metalwork project.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                4. Contacting Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request the deletion or update of your contact details, please reach out directly:
              </p>
              <div className="p-4 rounded-xl bg-[#0b1222] border border-slate-800 space-y-2 text-xs sm:text-sm">
                <p className="font-bold text-white uppercase">{COMPANY_CONFIG.name}</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contact.phoneDisplay}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contact.email}</span>
                </p>
                <p className="text-slate-400">{contact.address.fullAddress}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
