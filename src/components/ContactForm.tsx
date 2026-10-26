"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Phone, MessageSquare, Mail } from "lucide-react";
import { SERVICES_DATA } from "@/data/companyConfig";

interface ContactFormProps {
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceCategory: preselectedService || "Stainless Steel Railings",
    location: "",
    preferredContact: "whatsapp" as "phone" | "whatsapp" | "email",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "notice";
    text: string;
  } | null>(null);

  // Update selected service if preselectedService prop changes
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceCategory: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Client-side validation
    if (!formData.fullName.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your full name." });
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setStatusMessage({ type: "error", text: "Please enter a valid phone number." });
      return;
    }
    if (!formData.description.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please describe your project or measurement details.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMessage({
          type: data.status === "logged_needs_credentials" ? "notice" : "success",
          text: data.message,
        });
        // Clear form on success
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceCategory: "Stainless Steel Railings",
          location: "",
          preferredContact: "whatsapp",
          description: "",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Failed to submit enquiry. Please call or WhatsApp us directly.",
        });
      }
    } catch (err) {
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please reach out to us via direct WhatsApp or Phone.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-cyan-500/30 shadow-2xl shadow-cyan-950/20 text-left space-y-4"
    >
      <div className="border-b border-slate-800 pb-4 mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
          Request a Quotation
        </h3>
        <p className="text-xs text-slate-300 mt-1 font-normal">
          Fill in your project details below. Our fabrication specialist will review your requirements and respond promptly.
        </p>
      </div>

      {/* Status Alert Banner */}
      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-xs flex items-start gap-3 border ${
            statusMessage.type === "success"
              ? "bg-emerald-950/50 text-emerald-300 border-emerald-500/40"
              : statusMessage.type === "notice"
              ? "bg-cyan-950/60 text-cyan-200 border-cyan-400/40"
              : "bg-rose-950/50 text-rose-300 border-rose-500/40"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : statusMessage.type === "notice" ? (
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          )}
          <span className="leading-relaxed">{statusMessage.text}</span>
        </div>
      )}

      {/* Row 1: Full Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder-slate-500 outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
            Phone Number <span className="text-cyan-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 81530 73266"
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder-slate-500 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email & Project Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. yourname@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder-slate-500 outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
            Project Site Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Sector 14 / City"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder-slate-500 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Service Category Selector */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
          Service Category <span className="text-cyan-400">*</span>
        </label>
        <select
          name="serviceCategory"
          value={formData.serviceCategory}
          onChange={handleChange}
          required
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs outline-none transition-colors cursor-pointer"
        >
          {SERVICES_DATA.map((srv) => (
            <option key={srv.id} value={srv.title} className="bg-[#0b1222] text-white">
              {srv.title} ({srv.materialType})
            </option>
          ))}
          <option value="Other Custom Metalwork" className="bg-[#0b1222] text-white">
            Other Custom Metalwork / Drawings
          </option>
        </select>
      </div>

      {/* Row 4: Preferred Contact Method */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-2">
          <label
            className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
              formData.preferredContact === "whatsapp"
                ? "bg-[#25D366]/15 border-[#25D366] text-[#25D366]"
                : "bg-[#070c18] border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="whatsapp"
              checked={formData.preferredContact === "whatsapp"}
              onChange={handleChange}
              className="sr-only"
            />
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </label>

          <label
            className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
              formData.preferredContact === "phone"
                ? "bg-cyan-500/15 border-cyan-400 text-cyan-400"
                : "bg-[#070c18] border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === "phone"}
              onChange={handleChange}
              className="sr-only"
            />
            <Phone className="w-3.5 h-3.5" />
            <span>Phone</span>
          </label>

          <label
            className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
              formData.preferredContact === "email"
                ? "bg-sky-500/15 border-sky-400 text-sky-400"
                : "bg-[#070c18] border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === "email"}
              onChange={handleChange}
              className="sr-only"
            />
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </label>
        </div>
      </div>

      {/* Row 5: Project Description */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
          Project Description & Dimensions <span className="text-cyan-400">*</span>
        </label>
        <textarea
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          placeholder="Approximate dimensions, design preferences, number of floors, or site conditions..."
          required
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-xs placeholder-slate-500 outline-none transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Enquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Quotation Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center font-normal">
        We respect your privacy. Your information is strictly used for quote calculation and communication.
      </p>
    </form>
  );
};
