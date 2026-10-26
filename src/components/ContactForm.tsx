"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  MessageSquare,
  Mail,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { SERVICES_DATA, COMPANY_CONFIG } from "@/data/companyConfig";

interface ContactFormProps {
  preselectedService?: string;
}

interface SubmittedData {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  location: string;
  preferredContact: "phone" | "whatsapp" | "email";
  description: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<SubmittedData>({
    fullName: "",
    phone: "",
    email: "",
    serviceCategory: preselectedService || "Stainless Steel Railings",
    location: "",
    preferredContact: "whatsapp",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
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

  // Helper to build formatted WhatsApp pre-filled text
  const buildWhatsAppMessage = (data: SubmittedData) => {
    const lines = [
      `*NEW QUOTATION REQUEST - MONARCH FABRICATION*`,
      `----------------------------------------`,
      `👤 *Customer Name:* ${data.fullName}`,
      `📞 *Phone Number:* ${data.phone}`,
      data.email ? `✉️ *Email:* ${data.email}` : null,
      `🏗️ *Service Required:* ${data.serviceCategory}`,
      data.location ? `📍 *Site Location:* ${data.location}` : null,
      `💬 *Preferred Contact:* ${data.preferredContact.toUpperCase()}`,
      `----------------------------------------`,
      `📝 *Project Details / Dimensions:*`,
      data.description,
    ].filter(Boolean);

    return lines.join("\n");
  };

  // Helper to build WhatsApp URL
  const getDirectWhatsAppUrl = (data: SubmittedData) => {
    const text = buildWhatsAppMessage(data);
    return `https://wa.me/${COMPANY_CONFIG.contact.whatsappNumberOnly}?text=${encodeURIComponent(
      text
    )}`;
  };

  // Helper to build mailto URL
  const getDirectMailtoUrl = (data: SubmittedData) => {
    const subject = `[Quotation Request] ${data.serviceCategory} - ${data.fullName}`;
    const body = [
      `Hello Monarch Fabrication Team,`,
      ``,
      `I would like to request a quotation for custom fabrication work:`,
      ``,
      `Customer Name: ${data.fullName}`,
      `Phone Number: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Service Required: ${data.serviceCategory}`,
      `Site Location: ${data.location || "Not specified"}`,
      `Preferred Contact Method: ${data.preferredContact}`,
      ``,
      `Project Description & Dimensions:`,
      data.description,
      ``,
      `Thank you,`,
      data.fullName,
    ].join("\n");

    return `mailto:${COMPANY_CONFIG.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // Validate form fields
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your full name." });
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setStatusMessage({ type: "error", text: "Please enter a valid phone number." });
      return false;
    }
    if (!formData.description.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please describe your project or measurement details.",
      });
      return false;
    }
    return true;
  };

  // Main dispatch handler: submits online & directly launches WhatsApp or Email for free
  const handleDispatch = async (channel: "whatsapp" | "email" | "auto") => {
    if (!validateForm()) return;

    setStatusMessage(null);
    setLoading(true);

    const currentData = { ...formData };

    try {
      // 1. Submit to local API for server logging / records
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentData),
      });

      const result = await res.json();

      // 2. Determine target channel (free direct delivery)
      const targetChannel =
        channel === "auto"
          ? currentData.preferredContact === "email"
            ? "email"
            : "whatsapp"
          : channel;

      // 3. Direct launch
      if (targetChannel === "whatsapp") {
        const waUrl = getDirectWhatsAppUrl(currentData);
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } else if (targetChannel === "email") {
        const mailUrl = getDirectMailtoUrl(currentData);
        window.location.href = mailUrl;
      }

      // 4. Save submitted state and show success confirmation
      setSubmittedData(currentData);
      setStatusMessage({
        type: "success",
        text:
          result.message ||
          `Thank you, ${currentData.fullName}! Your quotation request has been received. Our team will contact you promptly.`,
      });

      // Clear current form fields
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        serviceCategory: preselectedService || "Stainless Steel Railings",
        location: "",
        preferredContact: "whatsapp",
        description: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback: direct launch anyway even if network has an issue
      if (channel === "whatsapp" || currentData.preferredContact === "whatsapp") {
        window.open(getDirectWhatsAppUrl(currentData), "_blank");
      }
      setSubmittedData(currentData);
      setStatusMessage({
        type: "success",
        text: `Your message is ready! You can send it directly to WhatsApp (+91 81530 73266) or Email below.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setStatusMessage(null);
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-cyan-500/30 shadow-2xl shadow-cyan-950/20 text-left space-y-5">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
          Request a Quotation
        </h3>
        <p className="text-xs text-slate-300 mt-1 font-normal">
          Fill in your project details. Enquiries are sent directly to our team via WhatsApp, Email, or Phone.
        </p>
      </div>

      {/* Status Alert Banner */}
      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-xs flex items-start gap-3 border ${
            statusMessage.type === "success"
              ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/50"
              : "bg-rose-950/50 text-rose-300 border-rose-500/40"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <span className="font-semibold block text-white text-xs sm:text-sm">
              {statusMessage.type === "success" ? "Enquiry Received Successfully" : "Submission Notice"}
            </span>
            <span className="leading-relaxed block text-slate-200">{statusMessage.text}</span>
          </div>
        </div>
      )}

      {/* Direct Quick Action Delivery Box when successfully submitted */}
      {submittedData && (
        <div className="p-4 rounded-xl bg-[#070c18] border border-cyan-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Instant Dispatch
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">100% Free & Direct</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-normal font-normal">
            Your quotation details are ready. Tap below to send or review directly with our team:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={getDirectWhatsAppUrl(submittedData)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Send on WhatsApp</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
            </a>

            <a
              href={getDirectMailtoUrl(submittedData)}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-sky-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phoneTel}`}
              className="text-xs text-cyan-300 hover:text-cyan-200 font-semibold inline-flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {COMPANY_CONFIG.contact.phone}</span>
            </a>
            <button
              type="button"
              onClick={handleResetForm}
              className="text-[11px] text-slate-400 hover:text-slate-200 font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Submit Another</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Form Fields */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleDispatch("auto");
        }}
        className="space-y-4"
      >
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

        {/* Action Buttons: 2 Direct Send Buttons (WhatsApp & Email/Online) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Button 1: Send on WhatsApp */}
          <button
            type="button"
            onClick={() => handleDispatch("whatsapp")}
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7a6e] text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Send on WhatsApp</span>
              </>
            )}
          </button>

          {/* Button 2: Send Message / Email */}
          <button
            type="button"
            onClick={() => handleDispatch("email")}
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-slate-950" />
                <span>Send via Email</span>
                <Send className="w-3.5 h-3.5 text-slate-950" />
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-slate-400 text-center font-normal pt-1">
          Direct communication with Darshan Patel &bull; Call / WhatsApp:{" "}
          <a
            href={`tel:${COMPANY_CONFIG.contact.phoneTel}`}
            className="text-cyan-400 hover:underline font-semibold"
          >
            {COMPANY_CONFIG.contact.phone}
          </a>
        </p>
      </form>
    </div>
  );
};
