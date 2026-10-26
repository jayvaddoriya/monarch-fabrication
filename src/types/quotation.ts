export interface QuotationItem {
  id: string;
  partName: string;
  sizeDimension: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Quotation {
  id: string;
  quotationNumber: string; // e.g. MF-QT-2026-001
  date: string; // YYYY-MM-DD
  validUntil?: string; // YYYY-MM-DD
  customerName: string;
  customerPhone?: string;
  customerLocation?: string;
  items: QuotationItem[];
  subtotal: number;
  discountType: "percentage" | "fixed";
  discountValue: number;
  discountAmount: number;
  gstRate: number; // e.g. 0, 5, 12, 18, 28
  gstAmount: number;
  grandTotal: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type QuotationFormData = Omit<Quotation, "id" | "createdAt" | "updatedAt">;
