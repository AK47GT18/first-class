"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LuArrowRight,
  LuMenu,
  LuX,
} from "react-icons/lu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white border-b border-slate-200/90 py-3.5 sm:py-4 shadow-sm text-slate-900"
            : "bg-transparent py-5 sm:py-6 text-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center transition hover:opacity-85 focus:outline-none"
            aria-label="First Class Holdings Home"
          >
            <Image
              src="/images/logo-white.webp"
              alt="First Class Holdings Limited"
              width={140}
              height={38}
              priority
              className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300 ${
                scrolled || mobileMenuOpen ? "brightness-0" : ""
              }`}
            />
          </Link>

          {/* Center Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive
                        ? "text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                      : isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${
                        scrolled ? "bg-blue-600" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition shadow-sm ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20"
                  : "bg-white text-slate-950 hover:bg-slate-100 shadow-md"
              }`}
            >
              <span>Get Started</span>
              <LuArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center rounded-xl p-2 transition cursor-pointer ${
                scrolled || mobileMenuOpen
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/15"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <LuX className="h-6 w-6 stroke-[2.2]" />
              ) : (
                <LuMenu className="h-6 w-6 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>

        {/* ── Top-Down Dropdown Menu with Natural Scroll ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 ${
            mobileMenuOpen
              ? "max-h-[calc(100vh-4rem)] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="bg-white overflow-y-auto max-h-[calc(100vh-4.5rem)] px-6 py-6 space-y-6 text-slate-900 shadow-2xl">
            {/* Clean Navigation Links */}
            <nav className="divide-y divide-slate-100 border-b border-slate-100">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between py-4 transition-colors ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "text-slate-800 hover:text-blue-600 font-medium"
                    }`}
                  >
                    <span className="text-base tracking-tight">{link.name}</span>
                    <LuArrowRight
                      className={`h-4 w-4 transition-transform ${
                        isActive
                          ? "text-blue-600 translate-x-0.5"
                          : "text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA & Attribution */}
            <div className="pt-2 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition"
              >
                <span>Work With Us</span>
                <LuArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-center font-mono text-[11px] text-slate-400">
                © 2026 First Class Holdings Limited
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Dimmed backdrop when mobile menu is open from top */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 md:hidden"
        />
      )}
    </>
  );
}
