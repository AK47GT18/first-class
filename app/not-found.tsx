import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowRight, LuHouse } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Page Not Found | First Class Holdings Limited",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">

        {/* 2D Vector Illustration — Optical fiber line broken / searching */}
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

            {/* Radar / Signal wave */}
            <circle cx="120" cy="120" r="70" stroke="#E2E8F0" strokeWidth="1.5" />
            <circle cx="120" cy="120" r="45" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="120" cy="120" r="22" stroke="#2563EB" strokeWidth="2" fill="#EFF6FF" />

            {/* Central beacon node */}
            <circle cx="120" cy="120" r="6" fill="#2563EB" />

            {/* Disconnected fiber line vectors */}
            <path d="M40 120H95" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <circle cx="95" cy="120" r="3" fill="#64748B" />

            <path d="M145 120H200" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            <circle cx="145" cy="120" r="3" fill="#EF4444" />

            {/* Search pointer coordinate */}
            <line x1="120" y1="120" x2="160" y2="80" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            <circle cx="160" cy="80" r="4" fill="#2563EB" />
            <line x1="160" y1="72" x2="160" y2="62" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="168" y1="80" x2="178" y2="80" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Content */}
        <div className="md:col-span-7 space-y-6 text-left">
          <p className="text-6xl sm:text-7xl font-bold font-mono tracking-tighter text-slate-300">
            404
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Page not found
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
              The page you are looking for doesn&apos;t exist, has been relocated, or is temporarily offline.
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
              <span>Contact Support</span>
              <LuArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
