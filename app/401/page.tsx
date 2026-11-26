import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowRight, LuHouse } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Authentication Required (401) | First Class Holdings Limited",
  description: "Identity verification is required to proceed.",
};

export default function UnauthorizedPage() {
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">

        {/* 2D Vector Illustration — Identity Credential & Digital Keycard Challenge */}
        <div className="md:col-span-5 flex justify-center">
          <svg
            className="w-64 h-64 sm:w-72 sm:h-72 text-slate-900"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Grid background */}
            <rect x="20" y="20" width="200" height="200" rx="4" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="20" y1="120" x2="220" y2="120" stroke="#F1F5F9" strokeWidth="1.5" />
            <line x1="120" y1="20" x2="120" y2="220" stroke="#F1F5F9" strokeWidth="1.5" />

            {/* Credential Card Body */}
            <rect x="65" y="55" width="110" height="130" rx="6" stroke="#CBD5E1" strokeWidth="1.5" fill="#FFFFFF" />
            <line x1="90" y1="67" x2="150" y2="67" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />

            {/* Avatar Placeholder */}
            <circle cx="120" cy="100" r="16" stroke="#2563EB" strokeWidth="1.5" fill="#EFF6FF" />
            <circle cx="120" cy="96" r="6" fill="#2563EB" />
            <path d="M109 112C109 107.5 114 105 120 105C126 105 131 107.5 131 112" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />

            {/* Data Barcodes / Verification lines */}
            <line x1="82" y1="130" x2="158" y2="130" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <line x1="82" y1="140" x2="135" y2="140" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <line x1="82" y1="150" x2="148" y2="150" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

            {/* Key icon on bottom corner */}
            <circle cx="165" cy="165" r="18" fill="#2563EB" />
            <path d="M165 158V168M165 168L169 164M165 168L161 164" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Content */}
        <div className="md:col-span-7 space-y-6 text-left">
          <p className="text-6xl sm:text-7xl font-bold font-mono tracking-tighter text-slate-300">
            401
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Authentication required
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
              Valid session credentials or an authorization token are needed to view this enterprise portal.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              <LuHouse className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors px-2 py-3"
            >
              <span>Contact Administrator</span>
              <LuArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
