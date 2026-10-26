"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Download,
  MessageSquare,
  Printer,
  Edit,
  CheckCircle2,
  Loader2,
  FileText,
  FileCheck,
  Building2,
  Receipt,
} from "lucide-react";
import { Quotation } from "@/types/quotation";
import {
  formatINR,
  formatDisplayDate,
  numberToWordsINR,
} from "@/utils/quotationStorage";
import {
  downloadQuotationImage,
  downloadQuotationPDF,
  shareQuotationOnWhatsApp,
} from "@/utils/quotationImageGenerator";
import { COMPANY_CONFIG } from "@/data/companyConfig";

interface QuotationPreviewModalProps {
  quotation: Quotation;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (quotation: Quotation) => void;
}

export const QuotationPreviewModal: React.FC<QuotationPreviewModalProps> = ({
  quotation,
  isOpen,
  onClose,
  onEdit,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [shareNotice, setShareNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const isBill = quotation.documentType === "bill";

  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      await downloadQuotationPDF(quotation);
      setShareNotice("PDF document downloaded successfully!");
      setTimeout(() => setShareNotice(null), 4000);
    } catch (err) {
      console.error("PDF download failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  const handleDownloadPNG = async () => {
    setDownloading(true);
    try {
      await downloadQuotationImage(quotation);
      setShareNotice("High-resolution PNG image downloaded successfully!");
      setTimeout(() => setShareNotice(null), 4000);
    } catch (err) {
      console.error("PNG download failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  const handleWhatsAppShare = async () => {
    setDownloading(true);
    try {
      // Download PDF / PNG first so user has file ready to attach
      await downloadQuotationPDF(quotation);
      shareQuotationOnWhatsApp(quotation);

      setShareNotice(
        "PDF downloaded & WhatsApp opened! Simply attach the downloaded PDF in the chat."
      );
      setTimeout(() => setShareNotice(null), 6000);
    } catch (err) {
      console.error("WhatsApp share failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0b1222] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#070c18] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>{isBill ? "Tax Invoice Preview" : "Quotation Preview"}</span>
              <span className="font-mono text-xs text-cyan-400">({quotation.quotationNumber})</span>
            </h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onEdit(quotation)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>

            {/* Quick Actions (Visible on sm+ in top bar, always visible in bottom bar) */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadPDF}
                disabled={downloading}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/25 disabled:opacity-50"
              >
                {downloading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <FileCheck className="w-3.5 h-3.5" />
                )}
                <span>Download PDF</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadPNG}
                disabled={downloading}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PNG</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppShare}
                disabled={downloading}
                className="px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#25D366]/20 disabled:opacity-50"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                <span>WhatsApp</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Share Notice Banner */}
        {shareNotice && (
          <div className="p-3 bg-emerald-950/70 border-b border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{shareNotice}</span>
          </div>
        )}

        {/* Document Scrollable View Area (White Paper Sheet Look) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-900/60">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-300 space-y-6 print:border-none print:shadow-none print:p-0">
            {/* Header: Company Emblem & Info */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b-2 border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-xl bg-white p-1.5 shrink-0 border border-slate-200 shadow-sm">
                  <Image
                    src="/images/logo-emblem.png"
                    alt="Monarch Fabrication Emblem"
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight uppercase leading-tight font-sans">
                    MONARCH FABRICATION
                  </h1>
                  <p className="text-xs text-sky-700 font-bold italic">
                    &ldquo;{COMPANY_CONFIG.tagline}&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-tight font-medium">
                    {COMPANY_CONFIG.contact.address.fullAddress}
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium">
                    Phone: {COMPANY_CONFIG.contact.phone} &bull; Email: {COMPANY_CONFIG.contact.email}
                  </p>
                  <p className="text-[11px] text-slate-900 font-bold font-mono mt-0.5">
                    GSTIN: {COMPANY_CONFIG.contact.gstin} &bull; State: {COMPANY_CONFIG.contact.stateName} (Code: {COMPANY_CONFIG.contact.stateCode})
                  </p>
                </div>
              </div>

              {/* Document Meta Badge */}
              <div className="text-right">
                <div className="inline-block px-3 py-1 rounded bg-slate-950 text-cyan-400 text-xs font-black uppercase tracking-wider mb-2">
                  {isBill ? "TAX INVOICE" : "ESTIMATE / QUOTATION"}
                </div>
                <div className="text-xs space-y-0.5">
                  <div>
                    <span className="text-slate-500 font-semibold">{isBill ? "Invoice #: " : "Quote #: "}</span>
                    <span className="font-mono font-bold text-sky-800">{quotation.quotationNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold">Date: </span>
                    <span className="text-slate-800 font-medium">{formatDisplayDate(quotation.date)}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold">{isBill ? "Due Date: " : "Validity: "}</span>
                    <span className="text-slate-800 font-medium">
                      {quotation.validUntil ? formatDisplayDate(quotation.validUntil) : isBill ? "Immediate" : "30 Days"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="block text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-0.5">
                  {isBill ? "Billed To / Buyer Details" : "Quotation Prepared For"}
                </span>
                <span className="block font-bold text-slate-950 text-sm">
                  {quotation.customerName}
                </span>
                <span className="text-slate-600 block mt-0.5">
                  Phone: {quotation.customerPhone || "Not specified"}
                </span>
                {isBill && (
                  <span className="text-slate-900 block mt-0.5 font-bold font-mono">
                    Buyer GSTIN: {quotation.customerGstin || "URP (Unregistered Person)"}
                  </span>
                )}
              </div>
              <div>
                <span className="block text-[10px] font-bold text-sky-700 uppercase tracking-wider mb-0.5">
                  {isBill ? "Delivery / Project Site Location" : "Project Site Location"}
                </span>
                <span className="text-slate-800 font-medium block">
                  {quotation.customerLocation || "Surat, Gujarat"}
                </span>
                {isBill && (
                  <span className="text-slate-600 block mt-0.5">
                    State: {quotation.customerState || "GUJARAT (024)"}
                  </span>
                )}
              </div>
            </div>

            {/* Items Table */}
            <div className="border border-slate-300 rounded-lg overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-slate-950 text-white uppercase text-[11px] font-bold">
                    <th className="py-2.5 px-3 text-center w-12">#</th>
                    <th className="py-2.5 px-3">Part / Description</th>
                    <th className="py-2.5 px-3">Size / Specs</th>
                    {isBill && <th className="py-2.5 px-3 text-center w-16">HSN</th>}
                    <th className="py-2.5 px-3 text-center w-14">Qty</th>
                    <th className="py-2.5 px-3 text-right w-24">Rate (₹)</th>
                    <th className="py-2.5 px-3 text-right w-28">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {quotation.items.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                    >
                      <td className="py-2.5 px-3 text-center text-slate-500 font-medium">
                        {index + 1}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900">
                        {item.partName}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 font-normal">
                        {item.sizeDimension || "-"}
                      </td>
                      {isBill && (
                        <td className="py-2.5 px-3 text-center text-slate-500 font-mono">
                          {item.hsnSacCode || "7308"}
                        </td>
                      )}
                      <td className="py-2.5 px-3 text-center font-semibold text-slate-900">
                        {item.quantity}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-slate-700">
                        {formatINR(item.rate).replace("₹", "")}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-950">
                        {formatINR(item.amount).replace("₹", "")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary & Totals */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              {/* Terms & Notes (Left) */}
              <div className="sm:col-span-7 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                <span className="font-bold text-sky-800 text-[11px] uppercase tracking-wider block">
                  {isBill ? "Terms of Sale & Payment" : "Terms & Conditions"}
                </span>
                <p className="text-[11px] text-slate-600 whitespace-pre-line leading-relaxed font-normal">
                  {quotation.notes}
                </p>
              </div>

              {/* Totals Breakdown (Right) */}
              <div className="sm:col-span-5 p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span className="font-mono font-bold text-slate-900">
                    {formatINR(quotation.subtotal)}
                  </span>
                </div>

                {quotation.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>
                      Discount ({quotation.discountType === "percentage" ? `${quotation.discountValue}%` : "Fixed"}):
                    </span>
                    <span className="font-mono font-bold">
                      - {formatINR(quotation.discountAmount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-slate-700 font-semibold pt-1 border-t border-slate-200">
                  <span>Taxable Value:</span>
                  <span className="font-mono font-bold text-slate-900">
                    {formatINR(quotation.taxableAmount ?? (quotation.subtotal - quotation.discountAmount))}
                  </span>
                </div>

                {quotation.gstRate > 0 && (
                  <>
                    {quotation.gstType !== "inter" ? (
                      <>
                        <div className="flex justify-between text-slate-600">
                          <span>CGST ({quotation.gstRate / 2}%):</span>
                          <span className="font-mono font-semibold text-slate-900">
                            + {formatINR(quotation.cgstAmount ?? Math.round(quotation.gstAmount / 2))}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>SGST ({quotation.gstRate / 2}%):</span>
                          <span className="font-mono font-semibold text-slate-900">
                            + {formatINR(quotation.sgstAmount ?? (quotation.gstAmount - Math.round(quotation.gstAmount / 2)))}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between text-slate-600">
                        <span>IGST ({quotation.gstRate}%):</span>
                        <span className="font-mono font-semibold text-slate-900">
                          + {formatINR(quotation.gstAmount)}
                        </span>
                      </div>
                    )}
                  </>
                )}

                <div className="pt-2 border-t-2 border-slate-300 flex justify-between items-center">
                  <span className="font-black text-slate-950 text-sm uppercase">
                    Total Amount:
                  </span>
                  <span className="font-mono font-black text-lg text-sky-800">
                    {formatINR(quotation.grandTotal)}
                  </span>
                </div>
              </div>
            </div>

            {/* Amount in Words */}
            <div className="px-3.5 py-2 rounded bg-slate-100 border border-slate-200 text-xs flex items-center gap-2">
              <span className="font-bold text-slate-600">Amount in Words:</span>
              <span className="font-semibold italic text-slate-900">
                {numberToWordsINR(quotation.grandTotal)}
              </span>
            </div>

            {/* Signatory Footer */}
            <div className="pt-6 border-t border-slate-200 flex items-end justify-between text-xs">
              <div>
                <p className="text-[11px] text-slate-600 font-bold">
                  Monarch Fabrication &bull; GSTIN: {COMPANY_CONFIG.contact.gstin}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {COMPANY_CONFIG.contact.address.fullAddress} &bull; Surat
                </p>
              </div>

              <div className="text-center w-48">
                <div className="border-b border-slate-400 pb-1 mb-1 font-bold text-slate-900">
                  For MONARCH FABRICATION
                </div>
                <span className="text-[11px] text-slate-500">Authorized Signatory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-3 sm:p-4 bg-[#070c18] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-400 truncate">
            Customer: <strong className="text-white">{quotation.customerName}</strong> &bull; Total:{" "}
            <strong className="text-cyan-400 font-mono">{formatINR(quotation.grandTotal)}</strong>
          </span>

          <div className="grid grid-cols-3 sm:flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="py-2 px-2 sm:px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/25 disabled:opacity-50 text-center"
            >
              <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadPNG}
              disabled={downloading}
              className="py-2 px-2 sm:px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer border border-slate-700 disabled:opacity-50 text-center"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>PNG</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppShare}
              disabled={downloading}
              className="py-2 px-2 sm:px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer shadow-lg shadow-[#25D366]/20 disabled:opacity-50 text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950 shrink-0" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
