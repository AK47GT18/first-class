import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowRight, LuHouse } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Access Restricted (403) | First Class Holdings Limited",
  description: "You do not have administrative clearance to access this resource.",
};

export default function ForbiddenPage() {
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">

        {/* 2D Vector Illustration — Cryptographic Padlock & Perimeter Gateway */}
        <div className="md:col-span-5 flex justify-center">
          <svg
            className="w-64 h-64 sm:w-72 sm:h-72 text-slate-900"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Ambient grid background */}
            <rect x="20" y="20" width="200" height="200" rx="4" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="20" y1="120" x2="220" y2="120" stroke="#F1F5F9" strokeWidth="1.5" />
            <line x1="120" y1="20" x2="120" y2="220" stroke="#F1F5F9" strokeWidth="1.5" />

            {/* Perimeter Shield Outline */}
            <path
              d="M120 45L175 68V115C175 152 149 184 120 195C91 184 65 152 65 115V68L120 45Z"
              stroke="#CBD5E1"
              strokeWidth="1.5"
              fill="#F8FAFC"
            />

            {/* Inner Security Gate */}
            <path
              d="M120 60L162 78V114C162 143 142 168 120 177C98 168 78 143 78 114V78L120 60Z"
              stroke="#2563EB"
              strokeWidth="1.5"
              fill="#EFF6FF"
            />

            {/* Padlock Shackle */}
            <path
              d="M106 112V99C106 91.268 112.268 85 120 85C127.732 85 134 91.268 134 99V112"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Padlock Body */}
            <rect x="98" y="112" width="44" height="34" rx="3" stroke="#2563EB" strokeWidth="2" fill="#FFFFFF" />

            {/* Keyhole */}
            <circle cx="120" cy="125" r="3.5" fill="#2563EB" />
            <path d="M120 128V135" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />

            {/* Diagonal boundary ticks */}
            <line x1="50" y1="50" x2="60" y2="60" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="190" y1="50" x2="180" y2="60" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Content */}
        <div className="md:col-span-7 space-y-6 text-left">
          <p className="text-6xl sm:text-7xl font-bold font-mono tracking-tighter text-slate-300">
            403
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Access restricted
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
              You do not have clearance to view this directory or network partition. Please verify your credentials or contact system operations.
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
              <span>Request Access</span>
              <LuArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
