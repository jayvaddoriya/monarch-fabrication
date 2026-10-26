"use client";

import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Save,
  ArrowLeft,
  Sparkles,
  Calculator,
  FileText,
  User,
  AlertCircle,
  Building2,
  Calendar,
  Layers,
  Image as ImageIcon,
  Receipt,
  FileCheck,
} from "lucide-react";
import { Quotation, QuotationItem, QuotationFormData, DocumentType } from "@/types/quotation";
import {
  formatINR,
  generateNextQuotationNumber,
  calculateTotals,
} from "@/utils/quotationStorage";
import { COMPANY_CONFIG } from "@/data/companyConfig";

interface QuotationFormProps {
  initialQuotation?: Quotation | null;
  onSave: (data: QuotationFormData, shouldPreview?: boolean) => void;
  onCancel: () => void;
}

// Quick fabrication item templates for fast drafting
const QUICK_TEMPLATES = [
  { name: "SS-304 Balcony Glass Railing", size: "12mm Toughened Glass, 3.5ft Height", hsn: "7308", rate: 1850 },
  { name: "SS-304 Staircase Handrail", size: "Top Pipe 50mm, 3ft Height", hsn: "7308", rate: 1450 },
  { name: "MS Heavy Main Entrance Gate", size: "12ft Width × 7ft Height", hsn: "7308", rate: 45000 },
  { name: "MS Designer Safety Window Grill", size: "4ft × 4ft (12mm Square Bar)", hsn: "7308", rate: 3800 },
  { name: "Aluminium Domal Sliding Window (3-Track)", size: "6ft Width × 4ft Height with Mesh", hsn: "7610", rate: 550 },
  { name: "Invisible Safety Balcony Grills", size: "High-tensile SS-316 Wire Cable", hsn: "7308", rate: 160 },
  { name: "MS Heavy Industrial Shed / Truss", size: "Engineered Tubular Section", hsn: "7308", rate: 180 },
];

export const QuotationForm: React.FC<QuotationFormProps> = ({
  initialQuotation,
  onSave,
  onCancel,
}) => {
  const isEditing = Boolean(initialQuotation);

  // Document Type State
  const [documentType, setDocumentType] = useState<DocumentType>(
    initialQuotation?.documentType || "quotation"
  );

  // Customer State
  const [customerName, setCustomerName] = useState(initialQuotation?.customerName || "");
  const [customerPhone, setCustomerPhone] = useState(initialQuotation?.customerPhone || "");
  const [customerLocation, setCustomerLocation] = useState(
    initialQuotation?.customerLocation || "Surat, Gujarat"
  );
  const [customerGstin, setCustomerGstin] = useState(initialQuotation?.customerGstin || "");
  const [customerState, setCustomerState] = useState(
    initialQuotation?.customerState || "GUJARAT (024)"
  );

  // Number & Dates
  const [quotationNumber, setQuotationNumber] = useState(
    initialQuotation?.quotationNumber || generateNextQuotationNumber(documentType)
  );
  const [date, setDate] = useState(
    initialQuotation?.date || new Date().toISOString().split("T")[0]
  );
  const [validUntil, setValidUntil] = useState(
    initialQuotation?.validUntil ||
      new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0]
  );

  // Items State
  const [items, setItems] = useState<QuotationItem[]>(
    initialQuotation?.items || [
      {
        id: `item-${Date.now()}-1`,
        partName: "SS-304 Balcony Railing with 12mm Toughened Glass",
        sizeDimension: "45 Running Feet, 3.5ft Height",
        hsnSacCode: "7308",
        quantity: 45,
        rate: 1850,
        amount: 83250,
      },
    ]
  );

  // Discount & GST
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">(
    initialQuotation?.discountType || "fixed"
  );
  const [discountValue, setDiscountValue] = useState<number>(
    initialQuotation?.discountValue ?? 0
  );
  const [gstRate, setGstRate] = useState<number>(initialQuotation?.gstRate ?? 18);
  const [gstType, setGstType] = useState<"intra" | "inter">(
    initialQuotation?.gstType || "intra"
  );

  // Notes
  const [notes, setNotes] = useState(
    initialQuotation?.notes ||
      (documentType === "bill"
        ? "1. Tax Invoice subject to Surat jurisdiction.\n2. Goods once sold will not be taken back or exchanged.\n3. Payment strictly due within 15 days of invoice date.\n4. Certified that the particulars given above are true and correct."
        : "1. Material Grade: Premium SS-304 / High Tensile MS as specified.\n2. Payment Terms: 50% advance with work order, 50% upon installation.\n3. Site readiness and electric power supply to be arranged by the client.\n4. Quotation valid for 30 days from date of issue.")
  );

  const [validationError, setValidationError] = useState<string | null>(null);

  // Switch Document Type
  const handleDocumentTypeChange = (type: DocumentType) => {
    setDocumentType(type);
    if (!isEditing) {
      setQuotationNumber(generateNextQuotationNumber(type));
      if (type === "bill") {
        setNotes(
          "1. Tax Invoice subject to Surat jurisdiction.\n2. Goods once sold will not be taken back or exchanged.\n3. Payment strictly due within 15 days of invoice date.\n4. Certified that the particulars given above are true and correct."
        );
      } else {
        setNotes(
          "1. Material Grade: Premium SS-304 / High Tensile MS as specified.\n2. Payment Terms: 50% advance with work order, 50% upon installation.\n3. Site readiness and electric power supply to be arranged by the client.\n4. Quotation valid for 30 days from date of issue."
        );
      }
    }
  };

  // Dynamic Item Handlers
  const handleItemChange = (
    index: number,
    field: keyof QuotationItem,
    value: string | number
  ) => {
    setItems((prev) => {
      const updated = [...prev];
      const item = { ...updated[index] };

      if (field === "quantity") {
        const num = Math.max(1, Number(value) || 0);
        item.quantity = num;
        item.amount = num * item.rate;
      } else if (field === "rate") {
        const num = Math.max(0, Number(value) || 0);
        item.rate = num;
        item.amount = item.quantity * num;
      } else if (field === "partName") {
        item.partName = String(value);
      } else if (field === "sizeDimension") {
        item.sizeDimension = String(value);
      } else if (field === "hsnSacCode") {
        item.hsnSacCode = String(value);
      }

      updated[index] = item;
      return updated;
    });
  };

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        partName: "",
        sizeDimension: "",
        hsnSacCode: "7308",
        quantity: 1,
        rate: 0,
        amount: 0,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length <= 1) {
      setValidationError("Quotation must have at least one item.");
      return;
    }
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleApplyTemplate = (tpl: typeof QUICK_TEMPLATES[0]) => {
    setItems((prev) => [
      ...prev,
      {
        id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        partName: tpl.name,
        sizeDimension: tpl.size,
        hsnSacCode: tpl.hsn,
        quantity: 1,
        rate: tpl.rate,
        amount: tpl.rate,
      },
    ]);
  };

  // Real-time Automatic Amount Calculation
  const {
    subtotal,
    discountAmount,
    taxableAmount,
    cgstAmount,
    sgstAmount,
    igstAmount,
    gstAmount,
    grandTotal,
  } = calculateTotals(items, discountType, discountValue, gstRate, gstType);

  // Form Validation & Submission
  const handleSubmit = (shouldPreview = false) => {
    setValidationError(null);

    if (!customerName.trim()) {
      setValidationError("Please enter the customer or firm name.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!quotationNumber.trim()) {
      setValidationError("Please specify a document number.");
      return;
    }

    if (items.length === 0) {
      setValidationError("Please add at least one line item to the document.");
      return;
    }

    for (let i = 0; i < items.length; i++) {
      if (!items[i].partName.trim()) {
        setValidationError(`Please enter description for Item #${i + 1}.`);
        return;
      }
      if (items[i].quantity <= 0) {
        setValidationError(`Quantity for Item #${i + 1} must be greater than zero.`);
        return;
      }
      if (items[i].rate < 0) {
        setValidationError(`Rate for Item #${i + 1} cannot be negative.`);
        return;
      }
    }

    const payload: QuotationFormData = {
      documentType,
      quotationNumber: quotationNumber.trim(),
      date,
      validUntil,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim() || undefined,
      customerLocation: customerLocation.trim() || undefined,
      customerGstin: customerGstin.trim().toUpperCase() || undefined,
      customerState: customerState.trim() || undefined,
      items,
      subtotal,
      discountType,
      discountValue,
      discountAmount,
      taxableAmount,
      gstRate,
      gstType,
      cgstAmount,
      sgstAmount,
      igstAmount,
      gstAmount,
      grandTotal,
      notes,
    };

    onSave(payload, shouldPreview);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar Navigation (Fully responsive across all screen widths) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <button
            type="button"
            onClick={onCancel}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Back to List"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h2 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2 flex-wrap">
              <span className="truncate">
                {isEditing
                  ? `Edit ${documentType === "bill" ? "Tax Invoice" : "Quotation"}`
                  : `Create New ${documentType === "bill" ? "Tax Invoice / Bill" : "Quotation"}`}
              </span>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 shrink-0">
                {quotationNumber}
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">
              Draft official fabrication quotation or GST Tax Invoice with instant PDF & PNG downloads.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end shrink-0">
          <button
            type="button"
            onClick={onCancel}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Save</span>
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Save &amp; Generate PDF / Image</span>
            <span className="sm:hidden">Generate</span>
          </button>
        </div>
      </div>

      {/* Document Type Switcher Tabs */}
      <div className="p-3 rounded-2xl bg-[#0b1222] border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider mr-1 sm:mr-2">
            Mode:
          </span>
          <button
            type="button"
            onClick={() => handleDocumentTypeChange("quotation")}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
              documentType === "quotation"
                ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                : "bg-[#070c18] border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Quotation</span>
          </button>

          <button
            type="button"
            onClick={() => handleDocumentTypeChange("bill")}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
              documentType === "bill"
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                : "bg-[#070c18] border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Receipt className="w-3.5 h-3.5" />
            <span>GST Tax Invoice</span>
          </button>
        </div>

        <div className="text-[11px] text-cyan-300 font-medium">
          {documentType === "bill" ? (
            <span className="text-emerald-400 font-semibold">
              ✓ Includes Monarch GSTIN (24ABSFM1732G1Z9), Customer GSTIN, CGST/SGST breakdown
            </span>
          ) : (
            <span>Standard commercial estimate without mandatory buyer GSTIN</span>
          )}
        </div>
      </div>

      {/* Validation Error Alert */}
      {validationError && (
        <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>{validationError}</span>
        </div>
      )}

      {/* Grid: Company Info (Auto) & Customer Meta */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Card 1: Company Profile (Auto reused) */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider pb-2 border-b border-slate-800">
            <Building2 className="w-4 h-4" />
            <span>Seller / Supplier Details</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="font-bold text-white text-sm">MONARCH FABRICATION</div>
            <div className="text-cyan-400 text-[11px] font-medium italic">
              &ldquo;{COMPANY_CONFIG.tagline}&rdquo;
            </div>

            {/* Official GSTIN */}
            <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-white font-mono font-bold text-xs">
              <span className="text-cyan-400 font-semibold block text-[10px] uppercase">
                Monarch GSTIN:
              </span>
              {COMPANY_CONFIG.contact.gstin}
            </div>

            <div className="text-slate-300 pt-1">
              <span className="text-slate-400 font-semibold">State & Code:</span>{" "}
              {COMPANY_CONFIG.contact.stateName} (Code: {COMPANY_CONFIG.contact.stateCode})
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400 font-semibold">Workshop Location:</span>{" "}
              {COMPANY_CONFIG.contact.address.fullAddress}
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400 font-semibold">Phone:</span>{" "}
              {COMPANY_CONFIG.contact.phone}
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400 font-semibold">Email:</span>{" "}
              {COMPANY_CONFIG.contact.email}
            </div>
          </div>
        </div>

        {/* Card 2: Customer & Quotation Details */}
        <div className="lg:col-span-8 p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>
                {documentType === "bill"
                  ? "Billed To / Buyer Information"
                  : "Customer & Quotation Meta"}
              </span>
            </div>
            <span className="text-[11px] text-slate-400">* Required fields</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Customer / Firm Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Radhe Krishna Textile Mills / Rahul Sharma"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Customer Phone Number (For WhatsApp)
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. +91 98251 12345"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
              />
            </div>

            {/* Customer GSTIN Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                <span>Buyer GSTIN / Tax ID</span>
                <span className="text-[10px] text-cyan-400 font-normal">
                  {documentType === "bill" ? "Optional for B2B" : "Optional"}
                </span>
              </label>
              <input
                type="text"
                value={customerGstin}
                onChange={(e) => setCustomerGstin(e.target.value.toUpperCase())}
                placeholder="e.g. 24AAACR1234F1Z8 (Leave blank if unregistered)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white font-mono uppercase text-xs outline-none transition-colors"
              />
            </div>

            {/* Site / Delivery Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Site / Delivery Location <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={customerLocation}
                onChange={(e) => setCustomerLocation(e.target.value)}
                placeholder="e.g. Plot 104, Sachin GIDC, Surat"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                {documentType === "bill" ? "Invoice / Bill Number" : "Quotation Number"}{" "}
                <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={quotationNumber}
                onChange={(e) => setQuotationNumber(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white font-mono text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Buyer State & Code
              </label>
              <input
                type="text"
                value={customerState}
                onChange={(e) => setCustomerState(e.target.value)}
                placeholder="e.g. GUJARAT (024)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Document Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                {documentType === "bill" ? "Payment Due Date" : "Valid Until"}
              </label>
              <input
                type="date"
                value={validUntil}
                onChange={(e) => setValidUntil(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Fabrication Component Suggestions */}
      <div className="p-4 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Quick Fabrication Items (1-Click Add)</span>
          </span>
          <span className="text-[11px] text-slate-500">Tap to append pre-set fabrication item</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {QUICK_TEMPLATES.map((tpl, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleApplyTemplate(tpl)}
              className="px-2.5 py-1.5 rounded-lg bg-[#070c18] hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3 h-3 text-cyan-400" />
              <span>{tpl.name}</span>
              <span className="text-[10px] text-slate-500">({formatINR(tpl.rate)})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Line Items Table */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {documentType === "bill" ? "Bill Line Items" : "Quotation Line Items"} ({items.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={handleAddItem}
            className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>
        </div>

        {/* Dynamic Items */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-[#070c18] border border-slate-800/90 hover:border-cyan-500/30 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-cyan-400 uppercase tracking-wider">
                  Item #{index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  disabled={items.length <= 1}
                  className="text-rose-400 hover:text-rose-300 text-xs flex items-center gap-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-12 gap-2.5 sm:gap-3 items-end">
                {/* Part Name */}
                <div className="col-span-2 sm:col-span-6 md:col-span-5">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Part / Product Description <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={item.partName}
                    onChange={(e) => handleItemChange(index, "partName", e.target.value)}
                    placeholder="e.g. SS-304 Balcony Railing with 12mm Glass"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-[#0b1222] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
                  />
                </div>

                {/* Size / Dimension */}
                <div className="col-span-2 sm:col-span-6 md:col-span-3">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Size / Dimensions / Specs
                  </label>
                  <input
                    type="text"
                    value={item.sizeDimension}
                    onChange={(e) => handleItemChange(index, "sizeDimension", e.target.value)}
                    placeholder="e.g. 45 Running Feet, 3.5ft Height"
                    className="w-full px-3 py-2 rounded-lg bg-[#0b1222] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
                  />
                </div>

                {/* HSN Code (If Bill) */}
                {documentType === "bill" && (
                  <div className="col-span-1 sm:col-span-2 md:col-span-1">
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                      HSN
                    </label>
                    <input
                      type="text"
                      value={item.hsnSacCode || "7308"}
                      onChange={(e) => handleItemChange(index, "hsnSacCode", e.target.value)}
                      className="w-full px-2 py-2 rounded-lg bg-[#0b1222] border border-slate-800 focus:border-cyan-400 text-white text-center font-mono text-xs outline-none"
                    />
                  </div>
                )}

                {/* Quantity */}
                <div className={documentType === "bill" ? "col-span-1 sm:col-span-1 md:col-span-1" : "col-span-1 sm:col-span-1 md:col-span-1"}>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Qty
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                    className="w-full px-2 py-2 rounded-lg bg-[#0b1222] border border-slate-800 focus:border-cyan-400 text-white text-center font-bold text-xs outline-none transition-colors"
                  />
                </div>

                {/* Rate per Unit */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Rate (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, "rate", e.target.value)}
                    className="w-full px-2 py-2 rounded-lg bg-[#0b1222] border border-slate-800 focus:border-cyan-400 text-white text-right font-mono text-xs outline-none transition-colors"
                  />
                </div>

                {/* Calculated Item Total */}
                <div className={documentType === "bill" ? "col-span-1 sm:col-span-2 md:col-span-1" : "col-span-1 sm:col-span-2 md:col-span-2"}>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Amount (₹)
                  </label>
                  <div className="px-2.5 py-2 rounded-lg bg-[#0f1930] border border-cyan-500/20 text-cyan-300 font-bold font-mono text-right text-xs">
                    {formatINR(item.amount)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddItem}
          className="w-full py-3 rounded-xl border border-dashed border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-950/20 text-slate-400 hover:text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Another Line Item</span>
        </button>
      </div>

      {/* Calculations & Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Notes & Terms Box */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-2">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
            {documentType === "bill" ? "Invoice Terms & Declarations" : "Terms & Conditions"}
          </label>
          <textarea
            rows={6}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs leading-relaxed outline-none transition-colors font-mono"
          />
          <span className="text-[11px] text-slate-500 block">
            Will be printed clearly at the bottom of the PDF and image.
          </span>
        </div>

        {/* Totals Breakdown */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3.5">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider pb-2 border-b border-slate-800">
            <Calculator className="w-4 h-4" />
            <span>Automatic Amount Calculation</span>
          </div>

          {/* Subtotal */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Subtotal ({items.length} items):</span>
            <span className="text-white font-mono font-bold">{formatINR(subtotal)}</span>
          </div>

          {/* Discount Selector */}
          <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Discount:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setDiscountType("percentage")}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    discountType === "percentage"
                      ? "bg-cyan-500 text-slate-950"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  %
                </button>
                <button
                  type="button"
                  onClick={() => setDiscountType("fixed")}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    discountType === "fixed"
                      ? "bg-cyan-500 text-slate-950"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  ₹
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                value={discountValue}
                onChange={(e) => setDiscountValue(Math.max(0, Number(e.target.value) || 0))}
                placeholder={discountType === "percentage" ? "5%" : "₹3,000"}
                className="w-full px-3 py-1.5 rounded-lg bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-right font-mono text-xs outline-none"
              />
              <span className="text-emerald-400 font-mono text-xs font-semibold whitespace-nowrap">
                - {formatINR(discountAmount)}
              </span>
            </div>
          </div>

          {/* Taxable Value */}
          <div className="flex items-center justify-between text-xs text-slate-300 pt-1 border-t border-slate-800/80">
            <span className="text-slate-400 font-semibold">Taxable Amount:</span>
            <span className="text-white font-mono font-bold">{formatINR(taxableAmount)}</span>
          </div>

          {/* GST Tax Type & Rate */}
          <div className="space-y-2 pt-1 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">GST Supply Mode:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setGstType("intra")}
                  className={`px-2.5 py-1 rounded text-[10px] font-bold transition-colors ${
                    gstType === "intra"
                      ? "bg-cyan-500 text-slate-950 font-black"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Gujarat (CGST+SGST)
                </button>
                <button
                  type="button"
                  onClick={() => setGstType("inter")}
                  className={`px-2.5 py-1 rounded text-[10px] font-bold transition-colors ${
                    gstType === "inter"
                      ? "bg-cyan-500 text-slate-950 font-black"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Inter-State (IGST)
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">GST Rate:</span>
              <div className="flex items-center gap-1">
                {[0, 5, 12, 18, 28].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setGstRate(rate)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors ${
                      gstRate === rate
                        ? "bg-cyan-500 text-slate-950 font-black"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
            </div>

            {/* Split Breakdown */}
            {gstRate > 0 && (
              <div className="p-2.5 rounded-lg bg-[#070c18] border border-slate-800/80 space-y-1 text-xs">
                {gstType === "intra" ? (
                  <>
                    <div className="flex justify-between text-slate-400">
                      <span>CGST ({gstRate / 2}%):</span>
                      <span className="font-mono text-white font-semibold">
                        + {formatINR(cgstAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>SGST ({gstRate / 2}%):</span>
                      <span className="font-mono text-white font-semibold">
                        + {formatINR(sgstAmount)}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between text-slate-400">
                    <span>IGST ({gstRate}%):</span>
                    <span className="font-mono text-white font-semibold">
                      + {formatINR(igstAmount)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-cyan-300 font-bold pt-1 border-t border-slate-800 text-[11px]">
                  <span>Total GST ({gstRate}%):</span>
                  <span className="font-mono">+ {formatINR(gstAmount)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Grand Total Highlight */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#060a14] to-[#0f1930] border border-cyan-500/30 flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {documentType === "bill" ? "Invoice Total" : "Grand Total"}
              </span>
              <span className="text-[10px] text-cyan-400">All taxes included</span>
            </div>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-black text-cyan-400 font-mono tracking-tight">
                {formatINR(grandTotal)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Submit Strip */}
      <div className="sticky bottom-4 z-20 p-3 sm:p-4 rounded-2xl bg-[#0b1222]/95 backdrop-blur-md border border-cyan-500/30 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center justify-between sm:justify-start gap-2">
          <span className="text-xs text-slate-400">
            Total {documentType === "bill" ? "Invoice" : "Quotation"}:
          </span>
          <span className="text-white font-mono font-black text-sm sm:text-base text-cyan-300">
            {formatINR(grandTotal)}
          </span>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Save</span>
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-1.5 cursor-pointer flex-1 sm:flex-initial justify-center"
          >
            <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">Save &amp; Generate PDF / Image</span>
            <span className="sm:hidden">Generate PDF / PNG</span>
          </button>
        </div>
      </div>
    </div>
  );
};
