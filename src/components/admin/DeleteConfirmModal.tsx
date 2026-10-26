"use client";

import React from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { Quotation } from "@/types/quotation";

interface DeleteConfirmModalProps {
  quotation: Quotation | null;
  isOpen: boolean;
  onConfirm: (id: string) => void;
  onCancel: () => void;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  quotation,
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen || !quotation) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-[#0b1222] border border-rose-500/30 rounded-2xl shadow-2xl p-6 space-y-4">
        {/* Warning Icon & Heading */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-tight">
              Delete Quotation?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Are you sure you want to delete quotation{" "}
              <strong className="text-white font-mono">{quotation.quotationNumber}</strong> for{" "}
              <strong className="text-cyan-400">{quotation.customerName}</strong>?
            </p>
            <p className="text-[11px] text-rose-400/90 mt-1">
              This action cannot be undone.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onConfirm(quotation.id)}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg shadow-rose-600/20"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Confirm Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
