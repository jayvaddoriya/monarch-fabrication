import jsPDF from "jspdf";
import { Quotation } from "@/types/quotation";
import { formatINR, formatDisplayDate, numberToWordsINR } from "@/utils/quotationStorage";
import { COMPANY_CONFIG } from "@/data/companyConfig";

// Helper to wrap text into multiple lines based on maximum column width
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  if (!text) return [""];
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = words[0] || "";

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + " " + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width <= maxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

// Helper to load image as HTMLImageElement
function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

/**
 * Generates a high-resolution, pixel-perfect PNG image of a Quotation or Tax Invoice using HTML5 Canvas
 */
export async function generateQuotationImage(quotation: Quotation): Promise<string> {
  if (typeof window === "undefined") return "";

  const isBill = quotation.documentType === "bill";
  const scale = 2; // 2x Retina scale for crisp 300dpi printing & mobile readability
  const baseWidth = 1100;
  const padding = 45;
  const contentWidth = baseWidth - padding * 2;

  // Measurement canvas for row heights
  const measureCanvas = document.createElement("canvas");
  const mCtx = measureCanvas.getContext("2d")!;
  mCtx.font = "normal 14px system-ui, -apple-system, sans-serif";

  // Measure dynamic row heights for items
  interface MeasuredRow {
    partLines: string[];
    sizeLines: string[];
    rowHeight: number;
  }

  const measuredRows: MeasuredRow[] = quotation.items.map((item) => {
    const descWidth = isBill ? 360 : 380;
    const sizeWidth = isBill ? 170 : 190;

    mCtx.font = "bold 13px system-ui, -apple-system, sans-serif";
    const partLines = wrapText(mCtx, item.partName, descWidth);

    mCtx.font = "normal 12px system-ui, -apple-system, sans-serif";
    const sizeLines = wrapText(mCtx, item.sizeDimension || "-", sizeWidth);

    const maxLines = Math.max(partLines.length, sizeLines.length, 1);
    const rowHeight = Math.max(44, maxLines * 18 + 18);

    return { partLines, sizeLines, rowHeight };
  });

  const tableRowsHeight = measuredRows.reduce((acc, r) => acc + r.rowHeight, 0);

  // Measure notes lines
  const notesText = quotation.notes || "";
  mCtx.font = "normal 11px system-ui, -apple-system, sans-serif";
  const notesLines = notesText
    ? notesText.split("\n").flatMap((line) => wrapText(mCtx, line, 480))
    : [];
  const notesBlockHeight = Math.max(120, notesLines.length * 17 + 55);

  // Calculate dynamic canvas height
  const headerHeight = 185;
  const clientMetaHeight = isBill ? 155 : 125;
  const tableHeaderHeight = 42;
  const totalsSectionHeight = Math.max(170, notesBlockHeight);
  const wordsSectionHeight = 44;
  const footerSignHeight = 160;

  const baseHeight =
    padding +
    headerHeight +
    clientMetaHeight +
    tableHeaderHeight +
    tableRowsHeight +
    totalsSectionHeight +
    wordsSectionHeight +
    footerSignHeight +
    padding;

  const canvas = document.createElement("canvas");
  canvas.width = baseWidth * scale;
  canvas.height = baseHeight * scale;

  const ctx = canvas.getContext("2d")!;
  ctx.scale(scale, scale);

  // 1. Clean White Background & Professional Frame
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, baseWidth, baseHeight);

  // Subtle outer border
  ctx.strokeStyle = "#CBD5E1";
  ctx.lineWidth = 1;
  ctx.strokeRect(15, 15, baseWidth - 30, baseHeight - 30);

  // Top Electric Cyan Header Accent Strip
  const grad = ctx.createLinearGradient(0, 0, baseWidth, 0);
  grad.addColorStop(0, "#00B4D8");
  grad.addColorStop(0.5, "#38BDF8");
  grad.addColorStop(1, "#0077B6");
  ctx.fillStyle = grad;
  ctx.fillRect(15, 15, baseWidth - 30, 8);

  // 2. Company Brand Header (Left) & Document Meta (Right)
  let y = padding + 15;

  // Load Logo
  const logoImg = await loadImage("/images/logo-emblem.png");
  if (logoImg) {
    // Draw logo badge with clean white background and subtle border
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.roundRect(padding, y, 70, 70, 12);
    ctx.fill();

    ctx.strokeStyle = "#CBD5E1";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.drawImage(logoImg, padding + 8, y + 8, 54, 54);
  }

  // Company Name
  const textLeft = logoImg ? padding + 85 : padding;
  ctx.fillStyle = "#060A14";
  ctx.font = "900 24px system-ui, -apple-system, sans-serif";
  ctx.fillText("MONARCH FABRICATION", textLeft, y + 26);

  // Tagline
  ctx.fillStyle = "#0077B6";
  ctx.font = "italic 600 12px system-ui, -apple-system, sans-serif";
  ctx.fillText(`“${COMPANY_CONFIG.tagline}”`, textLeft, y + 43);

  // Contact Info & Verified GSTIN Details
  ctx.fillStyle = "#475569";
  ctx.font = "normal 11px system-ui, -apple-system, sans-serif";
  ctx.fillText(`Workshop & Office: ${COMPANY_CONFIG.contact.address.fullAddress}`, textLeft, y + 60);
  ctx.fillText(
    `Contact: ${COMPANY_CONFIG.contact.phone}   |   Email: ${COMPANY_CONFIG.contact.email}`,
    textLeft,
    y + 75
  );

  // GSTIN & State Badge on Header
  ctx.fillStyle = "#0F172A";
  ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `GSTIN: ${COMPANY_CONFIG.contact.gstin}   |   State: ${COMPANY_CONFIG.contact.stateName} (Code: ${COMPANY_CONFIG.contact.stateCode})`,
    textLeft,
    y + 91
  );

  // Document Heading & Meta Badge (Right Side)
  const metaRight = baseWidth - padding;
  ctx.fillStyle = "#0B1222";
  ctx.beginPath();
  ctx.roundRect(metaRight - 260, y, 260, 42, 8);
  ctx.fill();

  ctx.fillStyle = "#00B4D8";
  ctx.font = "900 20px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(isBill ? "TAX INVOICE" : "ESTIMATE / QUOTATION", metaRight - 130, y + 28);
  ctx.textAlign = "left";

  // Document Details Box
  ctx.fillStyle = "#060A14";
  ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
  ctx.fillText(isBill ? "Invoice No:" : "Quotation No:", metaRight - 250, y + 60);
  ctx.fillStyle = "#0077B6";
  ctx.fillText(quotation.quotationNumber, metaRight - 130, y + 60);

  ctx.fillStyle = "#060A14";
  ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
  ctx.fillText("Date:", metaRight - 250, y + 78);
  ctx.fillStyle = "#334155";
  ctx.fillText(formatDisplayDate(quotation.date), metaRight - 130, y + 78);

  ctx.fillStyle = "#060A14";
  ctx.fillText(isBill ? "Due Date:" : "Validity:", metaRight - 250, y + 94);
  ctx.fillStyle = "#334155";
  ctx.fillText(
    quotation.validUntil
      ? formatDisplayDate(quotation.validUntil)
      : isBill
      ? "Immediate"
      : "30 Days from date",
    metaRight - 130,
    y + 94
  );

  // Divider Line
  y += 112;
  ctx.strokeStyle = "#E2E8F0";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(padding, y);
  ctx.lineTo(baseWidth - padding, y);
  ctx.stroke();

  // 3. Customer / Bill-To Box with GSTIN & Site Location
  y += 15;
  const customerBoxHeight = isBill ? 95 : 75;
  ctx.fillStyle = "#F8FAFC";
  ctx.strokeStyle = "#E2E8F0";
  ctx.beginPath();
  ctx.roundRect(padding, y, contentWidth, customerBoxHeight, 8);
  ctx.fill();
  ctx.stroke();

  // Left side: Customer
  ctx.fillStyle = "#0077B6";
  ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
  ctx.fillText(isBill ? "BILLED TO / BUYER DETAILS:" : "QUOTATION PREPARED FOR:", padding + 16, y + 22);

  ctx.fillStyle = "#060A14";
  ctx.font = "900 15px system-ui, -apple-system, sans-serif";
  ctx.fillText(quotation.customerName, padding + 16, y + 42);

  ctx.fillStyle = "#475569";
  ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    `Contact Phone: ${quotation.customerPhone || "Not provided"}`,
    padding + 16,
    y + 60
  );

  if (isBill) {
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `Buyer GSTIN: ${quotation.customerGstin || "URP (Unregistered Person)"}`,
      padding + 16,
      y + 78
    );
  }

  // Right side: Site Location
  ctx.fillStyle = "#0077B6";
  ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
  ctx.fillText(isBill ? "DELIVERY / PROJECT SITE LOCATION:" : "PROJECT SITE LOCATION:", padding + 540, y + 22);

  ctx.fillStyle = "#060A14";
  ctx.font = "600 13px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    quotation.customerLocation || "Shivay compound, sardar chowk, khadsad, surat",
    padding + 540,
    y + 42
  );

  if (isBill) {
    ctx.fillStyle = "#475569";
    ctx.font = "normal 11px system-ui, -apple-system, sans-serif";
    ctx.fillText(
      `State: ${quotation.customerState || "GUJARAT (Code: 024)"}`,
      padding + 540,
      y + 60
    );
    ctx.fillText(
      `Place of Supply: ${quotation.customerLocation ? "Client Site" : "Gujarat (024)"}`,
      padding + 540,
      y + 78
    );
  }

  // 4. Items Table
  y += customerBoxHeight + 20;

  // Column X Coordinates & Widths
  const colX = isBill
    ? {
        sno: padding, // 40
        desc: padding + 40, // 420
        size: padding + 460, // 200
        hsn: padding + 660, // 75
        qty: padding + 735, // 65
        rate: padding + 800, // 100
        amount: padding + 900, // 110
      }
    : {
        sno: padding, // 45
        desc: padding + 45, // 460
        size: padding + 505, // 215
        hsn: 0,
        qty: padding + 720, // 80
        rate: padding + 800, // 100
        amount: padding + 900, // 110
      };

  // Table Header
  ctx.fillStyle = "#0B1222";
  ctx.beginPath();
  ctx.roundRect(padding, y, contentWidth, tableHeaderHeight, 6);
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 12px system-ui, -apple-system, sans-serif";

  ctx.textAlign = "center";
  ctx.fillText("#", colX.sno + 20, y + 25);

  ctx.textAlign = "left";
  ctx.fillText("PART / DESCRIPTION", colX.desc + 12, y + 25);
  ctx.fillText("SIZE / SPECIFICATION", colX.size + 10, y + 25);

  if (isBill) {
    ctx.textAlign = "center";
    ctx.fillText("HSN", colX.hsn + 37, y + 25);
  }

  ctx.textAlign = "center";
  ctx.fillText("QTY", colX.qty + 35, y + 25);

  ctx.textAlign = "right";
  ctx.fillText("RATE (₹)", colX.rate + 90, y + 25);
  ctx.fillText("AMOUNT (₹)", colX.amount + 95, y + 25);

  y += tableHeaderHeight;

  // Table Rows
  quotation.items.forEach((item, index) => {
    const row = measuredRows[index];
    const isEven = index % 2 === 0;

    // Row Background
    ctx.fillStyle = isEven ? "#FFFFFF" : "#F8FAFC";
    ctx.fillRect(padding, y, contentWidth, row.rowHeight);

    // Row bottom border
    ctx.strokeStyle = "#E2E8F0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, y + row.rowHeight);
    ctx.lineTo(baseWidth - padding, y + row.rowHeight);
    ctx.stroke();

    // S.No
    ctx.fillStyle = "#475569";
    ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(String(index + 1), colX.sno + 20, y + 22);

    // Part Name (multi-line)
    ctx.textAlign = "left";
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
    row.partLines.forEach((line, lIdx) => {
      ctx.fillText(line, colX.desc + 12, y + 20 + lIdx * 18);
    });

    // Size / Dimension (multi-line)
    ctx.fillStyle = "#475569";
    ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
    row.sizeLines.forEach((line, lIdx) => {
      ctx.fillText(line, colX.size + 10, y + 20 + lIdx * 18);
    });

    // HSN Code if Bill
    if (isBill) {
      ctx.textAlign = "center";
      ctx.fillStyle = "#64748B";
      ctx.font = "normal 11px system-ui, -apple-system, sans-serif";
      ctx.fillText(item.hsnSacCode || "7308", colX.hsn + 37, y + 22);
    }

    // Qty
    ctx.textAlign = "center";
    ctx.fillStyle = "#0F172A";
    ctx.font = "600 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(String(item.quantity), colX.qty + 35, y + 22);

    // Rate
    ctx.textAlign = "right";
    ctx.fillStyle = "#334155";
    ctx.font = "normal 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(formatINR(item.rate).replace("₹", ""), colX.rate + 90, y + 22);

    // Amount
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
    ctx.fillText(formatINR(item.amount).replace("₹", ""), colX.amount + 95, y + 22);

    y += row.rowHeight;
  });

  // Vertical Outer Lines on Table
  ctx.strokeStyle = "#CBD5E1";
  ctx.lineWidth = 1;
  ctx.strokeRect(padding, y - tableRowsHeight - tableHeaderHeight, contentWidth, tableRowsHeight + tableHeaderHeight);

  // 5. Notes / Terms (Left) & Totals Block (Right)
  y += 15;
  const bottomSectionStartY = y;

  // Notes Box (Left)
  const notesWidth = 510;
  ctx.fillStyle = "#F8FAFC";
  ctx.strokeStyle = "#E2E8F0";
  ctx.beginPath();
  ctx.roundRect(padding, y, notesWidth, totalsSectionHeight, 8);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0077B6";
  ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(isBill ? "TERMS OF SALE & PAYMENT INSTRUCTIONS:" : "TERMS & SPECIAL CONDITIONS:", padding + 16, y + 22);

  ctx.fillStyle = "#334155";
  ctx.font = "normal 11px system-ui, -apple-system, sans-serif";
  notesLines.forEach((line, lIdx) => {
    ctx.fillText(line, padding + 16, y + 42 + lIdx * 17);
  });

  // Totals Box (Right)
  const totalsLeft = padding + 530;
  const totalsWidth = contentWidth - 530;

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#E2E8F0";
  ctx.beginPath();
  ctx.roundRect(totalsLeft, y, totalsWidth, totalsSectionHeight, 8);
  ctx.fill();
  ctx.stroke();

  let totY = y + 24;

  // Subtotal
  ctx.fillStyle = "#475569";
  ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
  ctx.fillText("Subtotal:", totalsLeft + 16, totY);
  ctx.textAlign = "right";
  ctx.fillStyle = "#0F172A";
  ctx.font = "600 12px system-ui, -apple-system, sans-serif";
  ctx.fillText(formatINR(quotation.subtotal), totalsLeft + totalsWidth - 16, totY);

  // Discount
  if (quotation.discountAmount > 0) {
    totY += 20;
    ctx.textAlign = "left";
    ctx.fillStyle = "#059669";
    ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(`Discount (${quotation.discountType === "percentage" ? `${quotation.discountValue}%` : "Fixed"}):`, totalsLeft + 16, totY);
    ctx.textAlign = "right";
    ctx.font = "600 12px system-ui, -apple-system, sans-serif";
    ctx.fillText(`- ${formatINR(quotation.discountAmount)}`, totalsLeft + totalsWidth - 16, totY);
  }

  // Taxable Value
  if (quotation.discountAmount > 0 || isBill) {
    totY += 20;
    ctx.textAlign = "left";
    ctx.fillStyle = "#475569";
    ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
    ctx.fillText("Taxable Value:", totalsLeft + 16, totY);
    ctx.textAlign = "right";
    ctx.fillStyle = "#0F172A";
    ctx.font = "600 12px system-ui, -apple-system, sans-serif";
    const taxable = quotation.taxableAmount ?? (quotation.subtotal - quotation.discountAmount);
    ctx.fillText(formatINR(taxable), totalsLeft + totalsWidth - 16, totY);
  }

  // GST Breakdown
  if (quotation.gstRate > 0) {
    const isIntra = quotation.gstType !== "inter";
    if (isIntra) {
      // CGST (half)
      totY += 20;
      ctx.textAlign = "left";
      ctx.fillStyle = "#475569";
      ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
      const cgst = quotation.cgstAmount ?? Math.round(quotation.gstAmount / 2);
      ctx.fillText(`CGST (${quotation.gstRate / 2}%):`, totalsLeft + 16, totY);
      ctx.textAlign = "right";
      ctx.fillStyle = "#0F172A";
      ctx.font = "600 12px system-ui, -apple-system, sans-serif";
      ctx.fillText(`+ ${formatINR(cgst)}`, totalsLeft + totalsWidth - 16, totY);

      // SGST (half)
      totY += 20;
      ctx.textAlign = "left";
      ctx.fillStyle = "#475569";
      ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
      const sgst = quotation.sgstAmount ?? (quotation.gstAmount - cgst);
      ctx.fillText(`SGST (${quotation.gstRate / 2}%):`, totalsLeft + 16, totY);
      ctx.textAlign = "right";
      ctx.fillStyle = "#0F172A";
      ctx.font = "600 12px system-ui, -apple-system, sans-serif";
      ctx.fillText(`+ ${formatINR(sgst)}`, totalsLeft + totalsWidth - 16, totY);
    } else {
      // IGST (full)
      totY += 20;
      ctx.textAlign = "left";
      ctx.fillStyle = "#475569";
      ctx.font = "normal 12px system-ui, -apple-system, sans-serif";
      ctx.fillText(`IGST (${quotation.gstRate}%):`, totalsLeft + 16, totY);
      ctx.textAlign = "right";
      ctx.fillStyle = "#0F172A";
      ctx.font = "600 12px system-ui, -apple-system, sans-serif";
      ctx.fillText(`+ ${formatINR(quotation.gstAmount)}`, totalsLeft + totalsWidth - 16, totY);
    }
  }

  // Grand Total Highlight Card
  totY += 24;
  ctx.fillStyle = "#060A14";
  ctx.beginPath();
  ctx.roundRect(totalsLeft + 8, totY, totalsWidth - 16, 46, 6);
  ctx.fill();

  ctx.textAlign = "left";
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 13px system-ui, -apple-system, sans-serif";
  ctx.fillText("TOTAL AMOUNT:", totalsLeft + 18, totY + 28);

  ctx.textAlign = "right";
  ctx.fillStyle = "#00B4D8";
  ctx.font = "900 17px system-ui, -apple-system, sans-serif";
  ctx.fillText(formatINR(quotation.grandTotal), totalsLeft + totalsWidth - 18, totY + 28);

  // 6. Amount in Words Banner
  y = bottomSectionStartY + totalsSectionHeight + 12;

  ctx.fillStyle = "#F1F5F9";
  ctx.beginPath();
  ctx.roundRect(padding, y, contentWidth, 34, 6);
  ctx.fill();

  ctx.textAlign = "left";
  ctx.fillStyle = "#475569";
  ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
  ctx.fillText("Amount in Words:", padding + 16, y + 21);

  ctx.fillStyle = "#0F172A";
  ctx.font = "italic 600 12px system-ui, -apple-system, sans-serif";
  ctx.fillText(numberToWordsINR(quotation.grandTotal), padding + 130, y + 21);

  // 7. Footer: Signatory Box & Monarch Note
  y += 50;

  // Left side: Guarantee
  ctx.fillStyle = "#060A14";
  ctx.font = "bold 12px system-ui, -apple-system, sans-serif";
  ctx.fillText("Declaration & Certification:", padding, y + 20);

  ctx.fillStyle = "#475569";
  ctx.font = "normal 11px system-ui, -apple-system, sans-serif";
  ctx.fillText(
    "Certified that the particulars given above are true and correct. All fabrication items",
    padding,
    y + 36
  );
  ctx.fillText(
    "are produced with precision structural welding as per certified technical specifications.",
    padding,
    y + 52
  );

  // Right side: Authorized Signature
  const signLeft = baseWidth - padding - 220;
  ctx.textAlign = "center";
  ctx.strokeStyle = "#94A3B8";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(signLeft, y + 55);
  ctx.lineTo(signLeft + 220, y + 55);
  ctx.stroke();

  ctx.fillStyle = "#0F172A";
  ctx.font = "bold 12px system-ui, -apple-system, sans-serif";
  ctx.fillText("For MONARCH FABRICATION", signLeft + 110, y + 72);

  ctx.fillStyle = "#64748B";
  ctx.font = "normal 11px system-ui, -apple-system, sans-serif";
  ctx.fillText("Authorized Signatory", signLeft + 110, y + 88);

  // Bottom Cyan/Navy Brand Strip & Thank You
  y += 105;
  ctx.fillStyle = "#0B1222";
  ctx.beginPath();
  ctx.roundRect(15, baseHeight - 45, baseWidth - 30, 30, 4);
  ctx.fill();

  ctx.fillStyle = "#94A3B8";
  ctx.font = "normal 11px system-ui, -apple-system, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    `Thank you for your business!  •  Monarch Fabrication  •  GSTIN: ${COMPANY_CONFIG.contact.gstin}  •  ${COMPANY_CONFIG.contact.email}`,
    baseWidth / 2,
    baseHeight - 26
  );

  return canvas.toDataURL("image/png", 1.0);
}

/**
 * Downloads a quotation or bill as a high-quality PDF document file directly to the user's browser
 */
export async function downloadQuotationPDF(quotation: Quotation): Promise<void> {
  const dataUrl = await generateQuotationImage(quotation);
  if (!dataUrl) return;

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const imgProps = pdf.getImageProperties(dataUrl);
  const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  if (pdfHeight <= 297) {
    // Fits nicely on standard A4 page
    pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
  } else {
    // Multi-page handling if item list is long
    const pageHeight = 297;
    let heightLeft = pdfHeight;
    let position = 0;

    pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
    }
  }

  const prefix = quotation.documentType === "bill" ? "Monarch-Fabrication-Tax-Invoice" : "Monarch-Fabrication-Quotation";
  pdf.save(`${prefix}-${quotation.quotationNumber}.pdf`);
}

/**
 * Downloads a quotation as a high-quality PNG image file directly to the user's browser
 */
export async function downloadQuotationImage(quotation: Quotation): Promise<string> {
  const dataUrl = await generateQuotationImage(quotation);
  if (!dataUrl) return "";

  const prefix = quotation.documentType === "bill" ? "Monarch-Fabrication-Tax-Invoice" : "Monarch-Fabrication-Quotation";
  const filename = `${prefix}-${quotation.quotationNumber}.png`;
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return dataUrl;
}

/**
 * Opens WhatsApp with pre-filled message and direct customer link if available
 */
export function shareQuotationOnWhatsApp(quotation: Quotation) {
  const isBill = quotation.documentType === "bill";
  const docTitle = isBill ? "TAX INVOICE / BILL" : "QUOTATION ESTIMATE";
  const customerName = quotation.customerName;
  const quoteNo = quotation.quotationNumber;
  const total = formatINR(quotation.grandTotal);
  const date = formatDisplayDate(quotation.date);

  const textLines = [
    `*${docTitle} FROM MONARCH FABRICATION*`,
    `----------------------------------------`,
    `📄 *Document No:* ${quoteNo}`,
    `📅 *Date:* ${date}`,
    `👤 *Customer / Buyer:* ${customerName}`,
    quotation.customerGstin ? `🏢 *Customer GSTIN:* ${quotation.customerGstin}` : null,
    `📍 *Site Location:* ${quotation.customerLocation || "Surat, Gujarat"}`,
    `🏢 *Monarch GSTIN:* ${COMPANY_CONFIG.contact.gstin}`,
    `💰 *Grand Total:* ${total}`,
    `----------------------------------------`,
    `Hello ${customerName},`,
    isBill
      ? `Please find your official Tax Invoice (#${quoteNo}) from *Monarch Fabrication*.`
      : `Thank you for choosing *Monarch Fabrication*. Please find your custom quotation (#${quoteNo}) detailed below.`,
    ``,
    `📌 *Items Summary:*`,
    ...quotation.items.map(
      (item, idx) =>
        `${idx + 1}. *${item.partName}* (${item.sizeDimension || "Standard"}) - Qty: ${item.quantity} - ${formatINR(item.amount)}`
    ),
    ``,
    `💵 *Total Amount:* ${total}`,
    `----------------------------------------`,
    `For inquiries or payment updates, please reply here or call *+91 81530 73266*.`,
    `Email: ${COMPANY_CONFIG.contact.email}`,
    `_Monarch Fabrication • "We Will Make Whatever You Think.."_`,
  ].filter(Boolean);

  const fullText = textLines.join("\n");
  const encoded = encodeURIComponent(fullText);

  // If customer phone is available, clean it to digits only
  let targetUrl = `https://wa.me/?text=${encoded}`;
  if (quotation.customerPhone) {
    let cleanPhone = quotation.customerPhone.replace(/[^0-9]/g, "");
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone;
    }
    if (cleanPhone.length >= 10) {
      targetUrl = `https://wa.me/${cleanPhone}?text=${encoded}`;
    }
  }

  window.open(targetUrl, "_blank", "noopener,noreferrer");
}
