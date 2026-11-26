"use client";

import { useEffect } from "react";
import Link from "next/link";
import { LuRotateCw, LuHouse } from "react-icons/lu";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected client-side runtime errors
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">

        {/* 2D Vector Illustration — Server Rack Diagnostic & Signal Interruption */}
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

            {/* Server Chassis 1 */}
            <rect x="50" y="55" width="140" height="34" rx="2" stroke="#CBD5E1" strokeWidth="1.5" fill="#F8FAFC" />
            <circle cx="68" cy="72" r="3.5" fill="#10B981" />
            <circle cx="80" cy="72" r="3.5" fill="#2563EB" />
            <line x1="100" y1="72" x2="175" y2="72" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

            {/* Server Chassis 2 (Fault Unit) */}
            <rect x="50" y="103" width="140" height="34" rx="2" stroke="#2563EB" strokeWidth="2" fill="#EFF6FF" />
            <circle cx="68" cy="120" r="3.5" fill="#EF4444" />
            <circle cx="80" cy="120" r="3.5" fill="#F59E0B" />
            {/* Pulsing warning signal */}
            <path d="M102 120H120L126 112L134 128L140 120H175" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Server Chassis 3 */}
            <rect x="50" y="151" width="140" height="34" rx="2" stroke="#CBD5E1" strokeWidth="1.5" fill="#F8FAFC" />
            <circle cx="68" cy="168" r="3.5" fill="#10B981" />
            <circle cx="80" cy="168" r="3.5" fill="#94A3B8" />
            <line x1="100" y1="168" x2="175" y2="168" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

            {/* Diagnostic trace loop */}
            <path d="M190 120H208V170H190" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Content */}
        <div className="md:col-span-7 space-y-6 text-left">
          <p className="text-6xl sm:text-7xl font-bold font-mono tracking-tighter text-slate-300">
            500
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              System encountered an error
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
              An unexpected condition interrupted this request. Our engineering telemetry has been notified.
            </p>
            {error.digest && (
              <p className="text-xs font-mono text-slate-400">
                Trace ID: {error.digest}
              </p>
            )}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <LuRotateCw className="h-4 w-4" />
              <span>Try Again</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <LuHouse className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
