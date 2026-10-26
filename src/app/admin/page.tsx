"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Plus,
  Search,
  Download,
  MessageSquare,
  Eye,
  Edit,
  Trash2,
  Lock,
  LogOut,
  FileText,
  DollarSign,
  TrendingUp,
  Layers,
  Sparkles,
  Phone,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Receipt,
  FileCheck,
  Copy,
} from "lucide-react";
import { Quotation, QuotationFormData, DocumentType } from "@/types/quotation";
import {
  getQuotations,
  saveQuotation,
  deleteQuotation,
  formatINR,
  formatDisplayDate,
  generateNextQuotationNumber,
} from "@/utils/quotationStorage";
import {
  downloadQuotationImage,
  downloadQuotationPDF,
  shareQuotationOnWhatsApp,
} from "@/utils/quotationImageGenerator";
import { AdminPasswordScreen } from "@/components/admin/AdminPasswordScreen";
import { QuotationForm } from "@/components/admin/QuotationForm";
import { QuotationPreviewModal } from "@/components/admin/QuotationPreviewModal";
import { DeleteConfirmModal } from "@/components/admin/DeleteConfirmModal";
import { COMPANY_CONFIG } from "@/data/companyConfig";

type AdminView = "list" | "create" | "edit";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [docFilter, setDocFilter] = useState<"all" | "quotation" | "bill">("all");
  const [view, setView] = useState<AdminView>("list");

  // Selected quotation for edit / preview / delete
  const [selectedQuote, setSelectedQuote] = useState<Quotation | null>(null);
  const [previewQuote, setPreviewQuote] = useState<Quotation | null>(null);
  const [quoteToDelete, setQuoteToDelete] = useState<Quotation | null>(null);

  // Toast notice
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Check auth state on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("monarch_admin_auth");
      setIsAuthenticated(auth === "true");
    }
  }, []);

  // Load quotations once authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const data = getQuotations();
      setQuotations(data);
    }
  }, [isAuthenticated]);

  // Handle Logout
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("monarch_admin_auth");
    }
    setIsAuthenticated(false);
    setView("list");
  };

  // Filtered quotations based on search query & document type filter
  const filteredQuotations = useMemo(() => {
    return quotations.filter((item) => {
      // Document type filter
      if (docFilter !== "all") {
        const itemType = item.documentType || (item.quotationNumber.includes("INV") ? "bill" : "quotation");
        if (itemType !== docFilter) return false;
      }

      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        item.customerName.toLowerCase().includes(q) ||
        item.quotationNumber.toLowerCase().includes(q) ||
        (item.customerPhone && item.customerPhone.toLowerCase().includes(q)) ||
        (item.customerLocation && item.customerLocation.toLowerCase().includes(q)) ||
        (item.customerGstin && item.customerGstin.toLowerCase().includes(q))
      );
    });
  }, [quotations, searchQuery, docFilter]);

  // Dashboard Summary Metrics
  const metrics = useMemo(() => {
    const totalDocs = quotations.length;
    const totalQuotes = quotations.filter((q) => q.documentType !== "bill").length;
    const totalBills = quotations.filter((q) => q.documentType === "bill").length;
    const totalValue = quotations.reduce((acc, q) => acc + q.grandTotal, 0);
    return { totalDocs, totalQuotes, totalBills, totalValue };
  }, [quotations]);

  // Save Quotation Handler (Create or Update)
  const handleSaveQuotation = (data: QuotationFormData, shouldPreview = false) => {
    const saved = saveQuotation(data, selectedQuote?.id);
    const updatedList = getQuotations();
    setQuotations(updatedList);

    const docName = saved.documentType === "bill" ? "Tax Invoice" : "Quotation";
    showToast(
      selectedQuote
        ? `${docName} ${saved.quotationNumber} updated successfully!`
        : `${docName} ${saved.quotationNumber} created successfully!`
    );

    setSelectedQuote(null);
    if (shouldPreview) {
      setPreviewQuote(saved);
      setView("list");
    } else {
      setView("list");
    }
  };

  // Delete Quotation Handler
  const handleConfirmDelete = (id: string) => {
    const deletedQuote = quotations.find((q) => q.id === id);
    const success = deleteQuotation(id);
    if (success) {
      setQuotations(getQuotations());
      showToast(`Document ${deletedQuote?.quotationNumber || ""} deleted.`);
    }
    setQuoteToDelete(null);
  };

  // Direct Download PDF Handler
  const handleDirectDownloadPDF = async (quote: Quotation) => {
    const docName = quote.documentType === "bill" ? "Tax Invoice" : "Quotation";
    showToast(`Generating PDF for ${docName} ${quote.quotationNumber}...`);
    try {
      await downloadQuotationPDF(quote);
      showToast(`Downloaded ${quote.quotationNumber} PDF successfully!`);
    } catch (err) {
      console.error("Direct PDF download failed:", err);
    }
  };

  // Direct Download PNG handler from list
  const handleDirectDownloadPNG = async (quote: Quotation) => {
    showToast(`Generating PNG for ${quote.quotationNumber}...`);
    try {
      await downloadQuotationImage(quote);
      showToast(`Downloaded ${quote.quotationNumber} PNG image!`);
    } catch (err) {
      console.error("Direct PNG download failed:", err);
    }
  };

  // Direct WhatsApp share from list
  const handleDirectWhatsApp = async (quote: Quotation) => {
    showToast(`Downloading PDF & opening WhatsApp...`);
    try {
      await downloadQuotationPDF(quote);
      shareQuotationOnWhatsApp(quote);
      showToast(`Document downloaded! Attach it in WhatsApp chat.`);
    } catch (err) {
      console.error("Direct WhatsApp failed:", err);
    }
  };

  // 1-Click Convert Quotation to Tax Invoice Bill
  const handleConvertToBill = (quote: Quotation) => {
    const newBillNumber = generateNextQuotationNumber("bill");
    const convertedQuote: Quotation = {
      ...quote,
      id: "", // new record
      documentType: "bill",
      quotationNumber: newBillNumber,
      date: new Date().toISOString().split("T")[0],
      validUntil: new Date(Date.now() + 15 * 86400000).toISOString().split("T")[0],
      notes:
        "1. Tax Invoice subject to Surat jurisdiction.\n2. Goods once sold will not be taken back or exchanged.\n3. Payment strictly due within 15 days of invoice date.\n4. Certified that the particulars given above are true and correct.",
    };
    setSelectedQuote(convertedQuote);
    setView("create");
    showToast(`Converting ${quote.quotationNumber} to Tax Invoice ${newBillNumber}...`);
  };

  // Show loading spinner while determining auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#060a14] flex items-center justify-center text-cyan-400">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            Loading Admin Portal...
          </span>
        </div>
      </div>
    );
  }

  // Show Password Screen if not authenticated
  if (!isAuthenticated) {
    return <AdminPasswordScreen onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#060a14] text-slate-200">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-industrial-grid opacity-15 pointer-events-none" />

      {/* Admin Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#0b1222]/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white p-1.5 shadow-md shadow-cyan-500/20 flex items-center justify-center shrink-0 border border-white/80">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Monarch Fabrication"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-base tracking-wider uppercase">
                  MONARCH
                </span>
                <span className="font-bold text-cyan-400 text-base tracking-wider uppercase">
                  FABRICATION
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Admin Billing & Quotes
                </span>
              </div>
              <span className="text-[11px] text-slate-400 hidden sm:block">
                GSTIN: <strong className="text-white font-mono">{COMPANY_CONFIG.contact.gstin}</strong> &bull; {COMPANY_CONFIG.contact.email}
              </span>
            </div>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            {view === "list" && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedQuote(null);
                    setView("create");
                  }}
                  className="px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Quote / Bill</span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={handleLogout}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Lock Admin Portal / Logout"
            >
              <LogOut className="w-4 h-4 text-rose-400" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 p-3.5 px-4 rounded-xl bg-cyan-950/90 border border-cyan-400/40 text-cyan-200 text-xs font-medium shadow-2xl backdrop-blur-md flex items-center gap-2.5 animate-slide-in">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* VIEW 1: CREATE OR EDIT FORM */}
        {(view === "create" || view === "edit") && (
          <QuotationForm
            initialQuotation={selectedQuote}
            onSave={handleSaveQuotation}
            onCancel={() => {
              setSelectedQuote(null);
              setView("list");
            }}
          />
        )}

        {/* VIEW 2: DASHBOARD QUOTATIONS LIST */}
        {view === "list" && (
          <div className="space-y-6">
            {/* Overview Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1222] border border-slate-800/90 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Quotations
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">
                    {metrics.totalQuotes}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1222] border border-slate-800/90 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Receipt className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Tax Invoices
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    {metrics.totalBills}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1222] border border-slate-800/90 shadow-lg flex items-center gap-3 col-span-2 sm:col-span-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Total Value Quoted / Billed
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-cyan-300 font-mono">
                    {formatINR(metrics.totalValue)}
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="p-4 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
              {/* Type Filter Buttons */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#070c18] border border-slate-800 shrink-0">
                <button
                  type="button"
                  onClick={() => setDocFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    docFilter === "all"
                      ? "bg-cyan-500 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  All ({quotations.length})
                </button>
                <button
                  type="button"
                  onClick={() => setDocFilter("quotation")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    docFilter === "quotation"
                      ? "bg-cyan-500 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Quotes ({metrics.totalQuotes})
                </button>
                <button
                  type="button"
                  onClick={() => setDocFilter("bill")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    docFilter === "bill"
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Bills ({metrics.totalBills})
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by customer, quote #, GSTIN, or location..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
                <span>
                  Showing <strong className="text-white">{filteredQuotations.length}</strong> records
                </span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-cyan-400 hover:underline cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Content Table / Cards */}
            {filteredQuotations.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#0b1222] border border-dashed border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 mx-auto flex items-center justify-center text-slate-500">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white uppercase">
                  {searchQuery ? "No matching records found" : "No documents created yet"}
                </h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  {searchQuery
                    ? "Try searching with a different customer name, phone number, GSTIN, or quote number."
                    : "Create your first professional fabrication quotation or GST Tax Invoice with automatic calculations and PDF/PNG exports."}
                </p>
              </div>
            ) : (
              <>
                {/* Desktop & Laptop Table */}
                <div className="hidden lg:block rounded-2xl bg-[#0b1222] border border-slate-800 overflow-hidden shadow-xl">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#070c18] border-b border-slate-800 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                        <th className="py-3.5 px-4">Doc Type</th>
                        <th className="py-3.5 px-4">Number</th>
                        <th className="py-3.5 px-4">Date</th>
                        <th className="py-3.5 px-4">Customer & Site Location</th>
                        <th className="py-3.5 px-4">Customer GSTIN</th>
                        <th className="py-3.5 px-4 text-center">Items</th>
                        <th className="py-3.5 px-4 text-right">Grand Total (₹)</th>
                        <th className="py-3.5 px-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {filteredQuotations.map((quote) => {
                        const isBill = quote.documentType === "bill";
                        return (
                          <tr
                            key={quote.id}
                            className="hover:bg-slate-900/60 transition-colors group"
                          >
                            {/* Document Type Badge */}
                            <td className="py-3.5 px-4">
                              <span
                                className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                                  isBill
                                    ? "bg-emerald-950/70 text-emerald-400 border-emerald-500/30"
                                    : "bg-cyan-950/70 text-cyan-400 border-cyan-500/30"
                                }`}
                              >
                                {isBill ? "Tax Invoice" : "Quotation"}
                              </span>
                            </td>

                            {/* Doc Number */}
                            <td className="py-3.5 px-4 font-mono font-bold text-white text-xs whitespace-nowrap">
                              {quote.quotationNumber}
                            </td>

                            {/* Date */}
                            <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                              {formatDisplayDate(quote.date)}
                            </td>

                            {/* Customer & Location */}
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-white text-xs">{quote.customerName}</div>
                              {quote.customerLocation && (
                                <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
                                  {quote.customerLocation}
                                </div>
                              )}
                            </td>

                            {/* Customer GSTIN */}
                            <td className="py-3.5 px-4 font-mono text-[11px]">
                              {quote.customerGstin ? (
                                <span className="text-emerald-400 font-semibold">{quote.customerGstin}</span>
                              ) : (
                                <span className="text-slate-600">—</span>
                              )}
                            </td>

                            {/* Items Count */}
                            <td className="py-3.5 px-4 text-center text-slate-400">
                              {quote.items.length}
                            </td>

                            {/* Grand Total */}
                            <td className="py-3.5 px-4 text-right">
                              <span className="font-mono font-black text-cyan-300 text-sm">
                                {formatINR(quote.grandTotal)}
                              </span>
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                {/* Preview Modal */}
                                <button
                                  type="button"
                                  onClick={() => setPreviewQuote(quote)}
                                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors cursor-pointer"
                                  title="View Preview"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>

                                {/* Direct Download PDF */}
                                <button
                                  type="button"
                                  onClick={() => handleDirectDownloadPDF(quote)}
                                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-sky-950 text-slate-400 hover:text-sky-300 border border-slate-800 transition-colors cursor-pointer"
                                  title="Download PDF Document"
                                >
                                  <FileCheck className="w-3.5 h-3.5" />
                                </button>

                                {/* Direct Download PNG */}
                                <button
                                  type="button"
                                  onClick={() => handleDirectDownloadPNG(quote)}
                                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors cursor-pointer"
                                  title="Download PNG Image"
                                >
                                  <Download className="w-3.5 h-3.5" />
                                </button>

                                {/* WhatsApp Share */}
                                <button
                                  type="button"
                                  onClick={() => handleDirectWhatsApp(quote)}
                                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors cursor-pointer"
                                  title="Share on WhatsApp"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" />
                                </button>

                                {/* Convert to Bill (if quote) */}
                                {!isBill && (
                                  <button
                                    type="button"
                                    onClick={() => handleConvertToBill(quote)}
                                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-400 hover:text-emerald-300 border border-slate-800 transition-colors cursor-pointer"
                                    title="Convert to GST Tax Invoice"
                                  >
                                    <Receipt className="w-3.5 h-3.5" />
                                  </button>
                                )}

                                {/* Edit */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedQuote(quote);
                                    setView("edit");
                                  }}
                                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-amber-950 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors cursor-pointer"
                                  title="Edit Document"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>

                                {/* Delete */}
                                <button
                                  type="button"
                                  onClick={() => setQuoteToDelete(quote)}
                                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors cursor-pointer"
                                  title="Delete Document"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile & Tablet Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
                  {filteredQuotations.map((quote) => {
                    const isBill = quote.documentType === "bill";
                    return (
                      <div
                        key={quote.id}
                        className="p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3.5 shadow-lg"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                              isBill
                                ? "bg-emerald-950/70 text-emerald-400 border-emerald-500/30"
                                : "bg-cyan-950/70 text-cyan-400 border-cyan-500/30"
                            }`}
                          >
                            {isBill ? "Tax Invoice" : "Quotation"}
                          </span>
                          <span className="font-mono font-bold text-white text-xs">
                            {quote.quotationNumber}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-white">{quote.customerName}</h4>
                          {quote.customerLocation && (
                            <div className="text-xs text-slate-400 mt-0.5">
                              Site: {quote.customerLocation}
                            </div>
                          )}
                          {quote.customerGstin && (
                            <div className="text-xs text-emerald-400 font-mono mt-0.5">
                              GSTIN: {quote.customerGstin}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                          <span className="text-slate-400">{formatDisplayDate(quote.date)}</span>
                          <span className="text-base font-black text-cyan-400 font-mono">
                            {formatINR(quote.grandTotal)}
                          </span>
                        </div>

                        {/* Card Actions */}
                        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-800">
                          <button
                            type="button"
                            onClick={() => setPreviewQuote(quote)}
                            className="py-2 rounded-lg bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDirectDownloadPDF(quote)}
                            className="py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-bold flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDirectWhatsApp(quote)}
                            className="py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Share</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setSelectedQuote(quote);
                              setView("edit");
                            }}
                            className="py-2 rounded-lg bg-slate-900 hover:bg-amber-950 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {/* Preview Modal */}
      {previewQuote && (
        <QuotationPreviewModal
          quotation={previewQuote}
          isOpen={Boolean(previewQuote)}
          onClose={() => setPreviewQuote(null)}
          onEdit={(q) => {
            setPreviewQuote(null);
            setSelectedQuote(q);
            setView("edit");
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {quoteToDelete && (
        <DeleteConfirmModal
          quotation={quoteToDelete}
          isOpen={Boolean(quoteToDelete)}
          onConfirm={handleConfirmDelete}
          onCancel={() => setQuoteToDelete(null)}
        />
      )}
    </div>
  );
}
