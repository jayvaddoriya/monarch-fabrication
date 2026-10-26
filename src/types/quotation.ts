export type DocumentType = "quotation" | "bill";

export interface QuotationItem {
  id: string;
  partName: string;
  sizeDimension: string;
  hsnSacCode?: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Quotation {
  id: string;
  documentType?: DocumentType; // "quotation" | "bill" (defaults to "quotation" if undefined)
  quotationNumber: string; // e.g. MF-QT-2026-001 or MF-INV-2026-001
  date: string; // YYYY-MM-DD
  validUntil?: string; // YYYY-MM-DD
  customerName: string;
  customerPhone?: string;
  customerLocation?: string; // Site location / delivery address
  customerGstin?: string; // Customer GSTIN (optional)
  customerState?: string; // Customer State & Code
  items: QuotationItem[];
  subtotal: number;
  discountType: "percentage" | "fixed";
  discountValue: number;
  discountAmount: number;
  taxableAmount?: number;
  gstRate: number; // e.g. 0, 5, 12, 18, 28
  gstType?: "intra" | "inter"; // intra: CGST+SGST (Gujarat), inter: IGST
  cgstAmount?: number;
  sgstAmount?: number;
  igstAmount?: number;
  gstAmount: number;
  grandTotal: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type QuotationFormData = Omit<Quotation, "id" | "createdAt" | "updatedAt">;
