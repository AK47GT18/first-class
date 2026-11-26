import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiPhone } from "react-icons/hi2";

export default function PreFooterCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-20 sm:py-24 text-white">
      {/* Background image fills the entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="First Class Holdings Limited"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Build Something <span className="text-blue-300">That Lasts</span>
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              Partner with First Class Holdings Limited for engineering, networking, and custom software.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-blue-50"
            >
              Work With Us
              <HiArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+265891679608"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/20"
            >
              <HiPhone className="h-4 w-4 text-blue-300" />
              <span className="font-mono text-xs">+265 891 67 96 08</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
