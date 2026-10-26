import { Quotation, QuotationItem, QuotationFormData } from "@/types/quotation";

const STORAGE_KEY = "monarch_quotations_v1";

// Format numbers into Indian Rupee Currency representation (e.g. ₹1,45,000)
export function formatINR(amount: number): string {
  if (isNaN(amount)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

// Convert numbers into words according to Indian Numbering System
export function numberToWordsINR(num: number): string {
  const rounded = Math.round(num);
  if (rounded === 0) return "Zero Rupees Only";

  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertTwoDigits(n: number): string {
    if (n === 0) return "";
    if (n < 20) return a[n];
    return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
  }

  function convertThreeDigits(n: number): string {
    const hundred = Math.floor(n / 100);
    const rest = n % 100;
    let res = "";
    if (hundred > 0) {
      res += a[hundred] + " Hundred";
      if (rest > 0) res += " and ";
    }
    if (rest > 0) {
      res += convertTwoDigits(rest);
    }
    return res;
  }

  let crore = Math.floor(rounded / 10000000);
  let remainder = rounded % 10000000;
  let lakh = Math.floor(remainder / 100000);
  remainder = remainder % 100000;
  let thousand = Math.floor(remainder / 1000);
  let hundreds = remainder % 1000;

  let words = "";

  if (crore > 0) {
    words += convertThreeDigits(crore) + " Crore ";
  }
  if (lakh > 0) {
    words += convertTwoDigits(lakh) + " Lakh ";
  }
  if (thousand > 0) {
    words += convertTwoDigits(thousand) + " Thousand ";
  }
  if (hundreds > 0) {
    words += convertThreeDigits(hundreds);
  }

  return words.trim() + " Rupees Only";
}

// Format ISO/Date string into clean display format (e.g. 26 Oct 2026)
export function formatDisplayDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    if (!year || !month || !day) return dateStr;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// Calculate all quotation totals accurately
export function calculateTotals(
  items: QuotationItem[],
  discountType: "percentage" | "fixed",
  discountValue: number,
  gstRate: number
) {
  const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.rate), 0);

  let discountAmount = 0;
  if (discountType === "percentage") {
    discountAmount = Math.round((subtotal * Math.max(0, discountValue)) / 100);
  } else {
    discountAmount = Math.max(0, discountValue);
  }
  if (discountAmount > subtotal) {
    discountAmount = subtotal;
  }

  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const gstAmount = Math.round((taxableAmount * Math.max(0, gstRate)) / 100);
  const grandTotal = taxableAmount + gstAmount;

  return {
    subtotal,
    discountAmount,
    gstAmount,
    grandTotal,
  };
}

// Initial seed quotations for first time admin load
const SEED_QUOTATIONS: Quotation[] = [
  {
    id: "seed-qt-001",
    quotationNumber: "MF-QT-2026-001",
    date: new Date().toISOString().split("T")[0],
    validUntil: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
    customerName: "Rahul Sharma",
    customerPhone: "+91 98251 12345",
    customerLocation: "Villa 14, Palm Residency, Ahmedabad",
    items: [
      {
        id: "item-1",
        partName: "Stainless Steel SS-304 Balcony Railing with 12mm Toughened Glass",
        sizeDimension: "48 Running Feet, 3.5ft Height",
        quantity: 48,
        rate: 1850,
        amount: 88800,
      },
      {
        id: "item-2",
        partName: "SS-304 Staircase Handrail with Heavy Duty Balusters",
        sizeDimension: "32 Running Feet, 3ft Height",
        quantity: 32,
        rate: 1450,
        amount: 46400,
      },
    ],
    subtotal: 135200,
    discountType: "fixed",
    discountValue: 3200,
    discountAmount: 3200,
    gstRate: 18,
    gstAmount: 23760,
    grandTotal: 155760,
    notes:
      "1. Material Grade: Premium SS-304 with Mirror Finish.\n2. 50% advance along with work order, 50% upon successful installation.\n3. Complete site installation, buffing, and high-tensile anchor fasteners included.\n4. Quotation valid for 30 days from date of issue.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "seed-qt-002",
    quotationNumber: "MF-QT-2026-002",
    date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
    validUntil: new Date(Date.now() + 29 * 86400000).toISOString().split("T")[0],
    customerName: "Patel Agro Mills & Warehouse",
    customerPhone: "+91 99240 55678",
    customerLocation: "Plot 88, GIDC Industrial Estate, Gujarat",
    items: [
      {
        id: "item-3",
        partName: "Mild Steel (MS) Heavy Duty Sliding Factory Gate with Anti-Rust Primer",
        sizeDimension: "24ft Width × 8ft Height (Box Section 75×75mm)",
        quantity: 1,
        rate: 68000,
        amount: 68000,
      },
      {
        id: "item-4",
        partName: "Structural MS Spiral Fire Staircase with Checkered Plate Steps",
        sizeDimension: "2 Floors (22ft Total Vertical Rise)",
        quantity: 1,
        rate: 94000,
        amount: 94000,
      },
    ],
    subtotal: 162000,
    discountType: "percentage",
    discountValue: 5,
    discountAmount: 8100,
    gstRate: 18,
    gstAmount: 27702,
    grandTotal: 181602,
    notes:
      "1. Epoxy zinc-phosphate primer applied before dispatch.\n2. Crane/lifting and on-site electric power to be arranged by the client.\n3. Quotation valid for 30 days.",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

// Retrieve all quotations from localStorage (with auto-seed on initial empty run)
export function getQuotations(): Quotation[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_QUOTATIONS));
      return SEED_QUOTATIONS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error("Failed to read quotations from localStorage:", err);
    return [];
  }
}

// Get single quotation by ID
export function getQuotationById(id: string): Quotation | null {
  const all = getQuotations();
  return all.find((q) => q.id === id) || null;
}

// Generate next sequential unique quotation number (e.g. MF-QT-2026-003)
export function generateNextQuotationNumber(): string {
  const all = getQuotations();
  const year = new Date().getFullYear();
  const prefix = `MF-QT-${year}-`;

  const existingNumbers = all
    .map((q) => q.quotationNumber)
    .filter((num) => num.startsWith(prefix))
    .map((num) => {
      const parts = num.split("-");
      const last = parseInt(parts[parts.length - 1], 10);
      return isNaN(last) ? 0 : last;
    });

  const nextSeq = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : all.length + 1;
  return `${prefix}${String(nextSeq).padStart(3, "0")}`;
}

// Save or Update Quotation
export function saveQuotation(formData: QuotationFormData, idToUpdate?: string): Quotation {
  const all = getQuotations();
  const now = new Date().toISOString();

  const { subtotal, discountAmount, gstAmount, grandTotal } = calculateTotals(
    formData.items,
    formData.discountType,
    formData.discountValue,
    formData.gstRate
  );

  let updatedQuote: Quotation;

  if (idToUpdate) {
    // Update existing
    const existingIndex = all.findIndex((q) => q.id === idToUpdate);
    updatedQuote = {
      ...formData,
      id: idToUpdate,
      subtotal,
      discountAmount,
      gstAmount,
      grandTotal,
      createdAt: existingIndex >= 0 ? all[existingIndex].createdAt : now,
      updatedAt: now,
    };

    if (existingIndex >= 0) {
      all[existingIndex] = updatedQuote;
    } else {
      all.unshift(updatedQuote);
    }
  } else {
    // Create new
    updatedQuote = {
      ...formData,
      id: `qt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      subtotal,
      discountAmount,
      gstAmount,
      grandTotal,
      createdAt: now,
      updatedAt: now,
    };
    all.unshift(updatedQuote);
  }

  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  }

  return updatedQuote;
}

// Delete Quotation by ID
export function deleteQuotation(id: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const all = getQuotations();
    const filtered = all.filter((q) => q.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (err) {
    console.error("Error deleting quotation:", err);
    return false;
  }
}
