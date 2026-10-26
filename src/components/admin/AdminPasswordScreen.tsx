"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock, Eye, EyeOff, ShieldCheck, ArrowRight, AlertCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/companyConfig";

interface AdminPasswordScreenProps {
  onAuthenticated: () => void;
}

export const AdminPasswordScreen: React.FC<AdminPasswordScreenProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Front-end verification as specified
    setTimeout(() => {
      if (password === "123456") {
        if (typeof window !== "undefined") {
          localStorage.setItem("monarch_admin_auth", "true");
        }
        onAuthenticated();
      } else {
        setError("Invalid access password. Please enter the correct administrator password.");
        setPassword("");
        setLoading(false);
      }
    }, 250);
  };

  return (
    <div className="min-h-screen bg-[#060a14] flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden text-slate-200">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Card Container */}
        <div className="bg-[#0b1222] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 backdrop-blur-md">
          {/* Header & Logo */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white p-2 shadow-lg shadow-cyan-500/20 mb-3 border border-white/80">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Monarch Fabrication"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase">
              Monarch Fabrication
            </h1>
            <p className="text-xs text-cyan-400 font-medium tracking-wide mt-1">
              Admin Quotation Management
            </p>
          </div>

          {/* Secure Access Notice */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs mb-5">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Restricted internal portal. Authorized personnel only.</span>
          </div>

          {/* Error Message Banner */}
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs mb-4 animate-shake">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Enter Admin Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="••••••••"
                  required
                  autoFocus
                  className="w-full pl-10 pr-11 py-2.5 rounded-xl bg-[#070c18] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? "Verifying..." : "Unlock Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer reassurance */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <span className="text-[11px] text-slate-500 font-normal">
              Monarch Fabrication &bull; Contact: {COMPANY_CONFIG.contact.phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
