"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiArrowRight, HiBars3, HiXMark } from "react-icons/hi2";

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
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md border-b border-slate-200 py-4 sm:py-5 shadow-sm text-slate-900"
          : "bg-transparent py-5 sm:py-6 text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center transition hover:opacity-85">
          <Image
            src="/images/logo-white.webp"
            alt="First Class Holdings Limited"
            width={140}
            height={38}
            priority
            className={`h-9 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-0" : ""
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
          {/* Solid Pill CTA Button */}
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition shadow-sm ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-slate-950 hover:bg-slate-100 shadow-md"
            }`}
          >
            <span>Get Started</span>
            <HiArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`inline-flex items-center justify-center rounded-lg p-2 transition ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/15 backdrop-blur-sm"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-5 pt-3 pb-6 md:hidden text-slate-900 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b-2 py-2 px-1 text-base font-medium transition-colors ${
                    isActive
                      ? "border-blue-600 text-blue-600 font-semibold"
                      : "border-transparent text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-sm font-semibold text-white shadow-xs hover:bg-blue-700"
            >
              <span>Get Started</span>
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
