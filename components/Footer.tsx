import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Strategic Partners", href: "/partners" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "Engineering & Infrastructure", href: "/services" },
  { name: "Enterprise Networking & Fiber", href: "/services" },
  { name: "Boardroom Video Conferencing", href: "/services" },
  { name: "Surveillance & CCTV Systems", href: "/services" },
  { name: "Digital Power & Solar Inverters", href: "/services" },
  { name: "Custom Software & Mobile Apps", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* ── Brand & Direct Contact (Spans 5 cols) ── */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.webp"
                alt="First Class Holdings Limited"
                width={160}
                height={42}
                className="h-9 w-auto object-contain brightness-0"
              />
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              First Class Holdings Limited is a dynamic and diversified investment company delivering high-quality engineering, networking, surveillance, and software solutions across Africa.
            </p>

            <div className="space-y-1 text-sm text-slate-700 pt-2 border-t border-slate-100">
              <p className="font-semibold text-slate-900">Head Office</p>
              <p className="text-slate-600">Lilongwe, Central Region, Malawi</p>
              <div className="pt-1 space-y-0.5 text-sm">
                <a
                  href="mailto:director@firstclassmw.com"
                  className="block text-slate-700 hover:text-blue-600 transition-colors"
                >
                  director@firstclassmw.com
                </a>
                <a
                  href="tel:+265891679608"
                  className="block font-mono text-slate-700 hover:text-blue-600 transition-colors"
                >
                  +265 891 67 96 08 / +265 995 52 60 69
                </a>
              </div>
            </div>
          </div>

          {/* ── Company Pages (Spans 2 cols) ── */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Company
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services (Spans 3 cols) ── */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Services
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Operational Info (Spans 2 cols) ── */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Hours
            </p>
            <div className="text-sm text-slate-600 space-y-1 leading-relaxed">
              <p className="font-medium text-slate-800">Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p>Weekend: Closed</p>
              <p className="pt-2 text-xs font-mono font-medium text-blue-600">
                24/7 SLA Emergency Support
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p className="font-mono text-xs sm:text-sm">
            © 2026 First Class Holdings Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300">|</span>
            <span className="font-mono text-slate-500">Lilongwe, Malawi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
