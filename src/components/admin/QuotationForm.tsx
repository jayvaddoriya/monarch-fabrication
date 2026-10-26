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
} from "lucide-react";
import { Quotation, QuotationItem, QuotationFormData } from "@/types/quotation";
import { formatINR, generateNextQuotationNumber, calculateTotals } from "@/utils/quotationStorage";
import { COMPANY_CONFIG } from "@/data/companyConfig";

interface QuotationFormProps {
  initialQuotation?: Quotation | null;
  onSave: (data: QuotationFormData, shouldPreview?: boolean) => void;
  onCancel: () => void;
}

// Quick fabrication item templates for fast drafting
const QUICK_TEMPLATES = [
  { name: "SS-304 Balcony Glass Railing", size: "12mm Toughened Glass, 3ft Height", rate: 1850 },
  { name: "SS-304 Staircase Handrail", size: "Top Pipe 50mm, 3ft Height", rate: 1450 },
  { name: "MS Heavy Main Entrance Gate", size: "12ft Width × 7ft Height", rate: 45000 },
  { name: "MS Designer Safety Window Grill", size: "4ft × 4ft (12mm Square Bar)", rate: 3800 },
  { name: "Aluminium Domal Sliding Window (3-Track)", size: "6ft Width × 4ft Height with Mesh", rate: 550 },
  { name: "Invisible Safety Balcony Grills", size: "High-tensile SS-316 Wire Cable", rate: 160 },
  { name: "MS Heavy Industrial Shed / Truss", size: "Engineered Tubular Section", rate: 120 },
];

export const QuotationForm: React.FC<QuotationFormProps> = ({
  initialQuotation,
  onSave,
  onCancel,
}) => {
  const isEditing = Boolean(initialQuotation);

  // Form State
  const [customerName, setCustomerName] = useState(initialQuotation?.customerName || "");
  const [customerPhone, setCustomerPhone] = useState(initialQuotation?.customerPhone || "");
  const [customerLocation, setCustomerLocation] = useState(initialQuotation?.customerLocation || "");
  const [quotationNumber, setQuotationNumber] = useState(
    initialQuotation?.quotationNumber || generateNextQuotationNumber()
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
        partName: "SS-304 Balcony Railing with Glass",
        sizeDimension: "45 Running Feet, 3ft Height",
        quantity: 45,
        rate: 1800,
        amount: 81000,
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

  // Notes
  const [notes, setNotes] = useState(
    initialQuotation?.notes ||
      "1. Material Grade: Premium SS-304 / High Tensile MS as specified.\n2. Payment Terms: 50% advance with work order, 50% upon installation.\n3. Site readiness and electric power supply to be arranged by the client.\n4. Quotation valid for 30 days from date of issue."
  );

  const [validationError, setValidationError] = useState<string | null>(null);

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
        quantity: 1,
        rate: tpl.rate,
        amount: tpl.rate,
      },
    ]);
  };

  // Real-time Totals
  const { subtotal, discountAmount, gstAmount, grandTotal } = calculateTotals(
    items,
    discountType,
    discountValue,
    gstRate
  );

  // Form Validation & Submission
  const handleSubmit = (shouldPreview = false) => {
    setValidationError(null);

    if (!customerName.trim()) {
      setValidationError("Please enter the customer or company name.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!quotationNumber.trim()) {
      setValidationError("Please specify a quotation number.");
      return;
    }

    if (items.length === 0) {
      setValidationError("Please add at least one line item to the quotation.");
      return;
    }

    for (let i = 0; i < items.length; i++) {
      if (!items[i].partName.trim()) {
        setValidationError(`Please enter the part / product description for Item #${i + 1}.`);
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
      quotationNumber: quotationNumber.trim(),
      date,
      validUntil,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim() || undefined,
      customerLocation: customerLocation.trim() || undefined,
      items,
      subtotal,
      discountType,
      discountValue,
      discountAmount,
      gstRate,
      gstAmount,
      grandTotal,
      notes,
    };

    onSave(payload, shouldPreview);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Back to Quotations List"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span>{isEditing ? "Edit Quotation" : "Create New Quotation"}</span>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                {quotationNumber}
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Enter customer requirements, specify fabrication components, and generate high-resolution PNG quotes.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Quote</span>
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Save & Generate Image</span>
          </button>
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
            <span>Company Details (Automatic)</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="font-bold text-white text-sm">MONARCH FABRICATION</div>
            <div className="text-cyan-400 text-[11px] font-medium italic">
              &ldquo;{COMPANY_CONFIG.tagline}&rdquo;
            </div>
            <div className="text-slate-300 pt-1">
              <span className="text-slate-400 font-semibold">Phone / WhatsApp:</span>{" "}
              {COMPANY_CONFIG.contact.phone}
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400 font-semibold">Email:</span>{" "}
              {COMPANY_CONFIG.contact.email}
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400 font-semibold">Address:</span>{" "}
              {COMPANY_CONFIG.contact.address.fullAddress}
            </div>
          </div>
          <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Company logo & credentials are automatically embedded in generated images.</span>
          </div>
        </div>

        {/* Card 2: Customer & Quotation Details */}
        <div className="lg:col-span-8 p-5 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>Customer & Quotation Meta</span>
            </div>
            <span className="text-[11px] text-slate-400">* Required fields</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Customer / Client Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Rahul Sharma / Apex Infra Ltd"
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

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Quotation Number <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                value={quotationNumber}
                onChange={(e) => setQuotationNumber(e.target.value)}
                placeholder="e.g. MF-QT-2026-001"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white font-mono text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Project Site / Delivery Location
              </label>
              <input
                type="text"
                value={customerLocation}
                onChange={(e) => setCustomerLocation(e.target.value)}
                placeholder="e.g. Villa 14, Palm Residency, Ahmedabad"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Quotation Date
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
                Valid Until
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

      {/* Quick Component Suggestions */}
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

      {/* Quotation Line Items Table */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quotation Line Items ({items.length})
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

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                {/* Part Name */}
                <div className="md:col-span-5">
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
                <div className="md:col-span-3">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Size / Dimensions / Specs
                  </label>
                  <input
                    type="text"
                    value={item.sizeDimension}
                    onChange={(e) => handleItemChange(index, "sizeDimension", e.target.value)}
                    placeholder="e.g. 45 Running Feet, 3ft Height"
                    className="w-full px-3 py-2 rounded-lg bg-[#0b1222] border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none transition-colors"
                  />
                </div>

                {/* Quantity */}
                <div className="md:col-span-1">
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
                <div className="md:col-span-1">
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
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">
                    Amount (₹)
                  </label>
                  <div className="px-3 py-2 rounded-lg bg-[#0f1930] border border-cyan-500/20 text-cyan-300 font-bold font-mono text-right text-xs">
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
            Terms & Conditions / Special Notes
          </label>
          <textarea
            rows={5}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Specify payment milestones, delivery terms, material grades, or warranty details..."
            className="w-full p-3 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 text-white text-xs leading-relaxed outline-none transition-colors"
          />
          <span className="text-[11px] text-slate-500 block">
            These terms will be displayed cleanly at the bottom of the generated quotation document.
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

          {/* GST Selector */}
          <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">GST Applicable:</span>
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
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="text-slate-500 text-[11px]">Calculated GST ({gstRate}%):</span>
              <span className="text-white font-mono font-semibold">+ {formatINR(gstAmount)}</span>
            </div>
          </div>

          {/* Grand Total Highlight */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#060a14] to-[#0f1930] border border-cyan-500/30 flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Grand Total
              </span>
              <span className="text-[10px] text-cyan-400">All taxes & discounts included</span>
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
      <div className="sticky bottom-4 z-20 p-4 rounded-2xl bg-[#0b1222]/95 backdrop-blur-md border border-cyan-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">
            Total Quotation Value:{" "}
            <span className="text-white font-mono font-bold text-sm">{formatINR(grandTotal)}</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Quote</span>
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Save & Generate Image</span>
          </button>
        </div>
      </div>
    </div>
  );
};
