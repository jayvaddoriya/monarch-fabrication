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
} from "lucide-react";
import { Quotation, QuotationFormData } from "@/types/quotation";
import {
  getQuotations,
  saveQuotation,
  deleteQuotation,
  formatINR,
  formatDisplayDate,
} from "@/utils/quotationStorage";
import {
  downloadQuotationImage,
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

  // Filtered quotations based on search query
  const filteredQuotations = useMemo(() => {
    if (!searchQuery.trim()) return quotations;
    const q = searchQuery.toLowerCase().trim();
    return quotations.filter(
      (item) =>
        item.customerName.toLowerCase().includes(q) ||
        item.quotationNumber.toLowerCase().includes(q) ||
        (item.customerPhone && item.customerPhone.toLowerCase().includes(q)) ||
        (item.customerLocation && item.customerLocation.toLowerCase().includes(q))
    );
  }, [quotations, searchQuery]);

  // Dashboard Summary Metrics
  const metrics = useMemo(() => {
    const totalQuotes = quotations.length;
    const totalValue = quotations.reduce((acc, q) => acc + q.grandTotal, 0);
    const avgValue = totalQuotes > 0 ? Math.round(totalValue / totalQuotes) : 0;
    return { totalQuotes, totalValue, avgValue };
  }, [quotations]);

  // Save Quotation Handler (Create or Update)
  const handleSaveQuotation = (data: QuotationFormData, shouldPreview = false) => {
    const saved = saveQuotation(data, selectedQuote?.id);
    const updatedList = getQuotations();
    setQuotations(updatedList);

    showToast(
      selectedQuote
        ? `Quotation ${saved.quotationNumber} updated successfully!`
        : `Quotation ${saved.quotationNumber} created successfully!`
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
      showToast(`Quotation ${deletedQuote?.quotationNumber || ""} deleted.`);
    }
    setQuoteToDelete(null);
  };

  // Direct Download PNG handler from list
  const handleDirectDownload = async (quote: Quotation) => {
    showToast(`Generating PNG for ${quote.quotationNumber}...`);
    try {
      await downloadQuotationImage(quote);
      showToast(`Downloaded ${quote.quotationNumber} PNG image!`);
    } catch (err) {
      console.error("Direct download failed:", err);
    }
  };

  // Direct WhatsApp share from list
  const handleDirectWhatsApp = async (quote: Quotation) => {
    showToast(`Downloading image & opening WhatsApp...`);
    try {
      await downloadQuotationImage(quote);
      shareQuotationOnWhatsApp(quote);
      showToast(`Quotation image downloaded! Attach it in WhatsApp chat.`);
    } catch (err) {
      console.error("Direct WhatsApp failed:", err);
    }
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
                  Admin Panel
                </span>
              </div>
              <span className="text-[11px] text-slate-400 hidden sm:block">
                Quotation & Estimation Management System
              </span>
            </div>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            {view === "list" && (
              <button
                type="button"
                onClick={() => {
                  setSelectedQuote(null);
                  setView("create");
                }}
                className="px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Create Quotation</span>
                <span className="sm:hidden">New Quote</span>
              </button>
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
            {/* 3 Overview Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#0b1222] border border-slate-800/90 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Total Quotations
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    {metrics.totalQuotes}
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0b1222] border border-slate-800/90 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Total Quoted Value
                  </span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">
                    {formatINR(metrics.totalValue)}
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0b1222] border border-slate-800/90 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Average Quote Size
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    {formatINR(metrics.avgValue)}
                  </span>
                </div>
              </div>
            </div>

            {/* Search Bar & List Controls */}
            <div className="p-4 rounded-2xl bg-[#0b1222] border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="relative flex-1 min-w-[260px]">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by customer name, quotation number, or phone..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>
                  Showing <strong className="text-white">{filteredQuotations.length}</strong> of{" "}
                  {quotations.length} quotations
                </span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-cyan-400 hover:underline cursor-pointer"
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>

            {/* Quotations Content: Table for Desktop/Laptop, Responsive Cards for Mobile */}
            {filteredQuotations.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#0b1222] border border-dashed border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 mx-auto flex items-center justify-center text-slate-500">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white uppercase">
                  {searchQuery ? "No matching quotations found" : "No quotations created yet"}
                </h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  {searchQuery
                    ? "Try searching with a different customer name, phone number, or quote number."
                    : "Create your first professional fabrication quotation with automatic amount calculation and instant PNG image generation."}
                </p>
                {!searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedQuote(null);
                      setView("create");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create First Quotation</span>
                  </button>
                )}
              </div>
            ) : (
              <>
                {/* Desktop & Laptop Table */}
                <div className="hidden lg:block rounded-2xl bg-[#0b1222] border border-slate-800 overflow-hidden shadow-xl">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#070c18] border-b border-slate-800 text-slate-400 uppercase text-[10px] font-bold tracking-wider">
                        <th className="py-3.5 px-4">Quote #</th>
                        <th className="py-3.5 px-4">Date</th>
                        <th className="py-3.5 px-4">Customer Name & Site</th>
                        <th className="py-3.5 px-4">Phone Number</th>
                        <th className="py-3.5 px-4 text-center">Items</th>
                        <th className="py-3.5 px-4 text-right">Grand Total (₹)</th>
                        <th className="py-3.5 px-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {filteredQuotations.map((quote) => (
                        <tr
                          key={quote.id}
                          className="hover:bg-slate-900/60 transition-colors group"
                        >
                          {/* Quote Number */}
                          <td className="py-3.5 px-4">
                            <span className="font-mono font-bold text-cyan-400 text-xs px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/20">
                              {quote.quotationNumber}
                            </span>
                          </td>

                          {/* Date */}
                          <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                            {formatDisplayDate(quote.date)}
                          </td>

                          {/* Customer */}
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-white text-xs">{quote.customerName}</div>
                            {quote.customerLocation && (
                              <div className="text-[11px] text-slate-400 truncate max-w-[220px]">
                                {quote.customerLocation}
                              </div>
                            )}
                          </td>

                          {/* Phone */}
                          <td className="py-3.5 px-4 text-slate-300 font-mono text-[11px] whitespace-nowrap">
                            {quote.customerPhone || <span className="text-slate-600">—</span>}
                          </td>

                          {/* Items Count */}
                          <td className="py-3.5 px-4 text-center">
                            <span className="px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 font-semibold text-[11px]">
                              {quote.items.length} {quote.items.length === 1 ? "item" : "items"}
                            </span>
                          </td>

                          {/* Grand Total */}
                          <td className="py-3.5 px-4 text-right">
                            <span className="font-mono font-black text-cyan-300 text-sm">
                              {formatINR(quote.grandTotal)}
                            </span>
                          </td>

                          {/* Action Buttons */}
                          <td className="py-3.5 px-4 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              {/* Preview Modal Button */}
                              <button
                                type="button"
                                onClick={() => setPreviewQuote(quote)}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-950 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors cursor-pointer"
                                title="View Quotation Preview"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>

                              {/* Download PNG Button */}
                              <button
                                type="button"
                                onClick={() => handleDirectDownload(quote)}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-sky-950 text-slate-400 hover:text-sky-300 border border-slate-800 transition-colors cursor-pointer"
                                title="Download Quotation as PNG Image"
                              >
                                <Download className="w-3.5 h-3.5" />
                              </button>

                              {/* WhatsApp Share Button */}
                              <button
                                type="button"
                                onClick={() => handleDirectWhatsApp(quote)}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors cursor-pointer"
                                title="Share on WhatsApp"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </button>

                              {/* Edit Button */}
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedQuote(quote);
                                  setView("edit");
                                }}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-amber-950 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors cursor-pointer"
                                title="Edit Quotation"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>

                              {/* Delete Button */}
                              <button
                                type="button"
                                onClick={() => setQuoteToDelete(quote)}
                                className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors cursor-pointer"
                                title="Delete Quotation"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile & Tablet Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
                  {filteredQuotations.map((quote) => (
                    <div
                      key={quote.id}
                      className="p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3.5 shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-cyan-400 text-xs px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/20">
                          {quote.quotationNumber}
                        </span>
                        <span className="text-xs text-slate-400">
                          {formatDisplayDate(quote.date)}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white">{quote.customerName}</h4>
                        {quote.customerPhone && (
                          <div className="text-xs text-slate-400 mt-0.5">
                            Phone: {quote.customerPhone}
                          </div>
                        )}
                        {quote.customerLocation && (
                          <div className="text-xs text-slate-500 mt-0.5">
                            Site: {quote.customerLocation}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                        <span className="text-slate-400">
                          {quote.items.length} {quote.items.length === 1 ? "Item" : "Items"}
                        </span>
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
                          onClick={() => handleDirectDownload(quote)}
                          className="py-2 rounded-lg bg-slate-900 hover:bg-sky-950 text-slate-300 hover:text-sky-300 border border-slate-800 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PNG</span>
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
                  ))}
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
