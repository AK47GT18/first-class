import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import PreFooterCTA from "@/components/PreFooterCTA";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Our Partners | First Class Holdings Limited",
  description:
    "Building strong alliances with global industry leaders and premier distributors to deliver world-class solutions across Africa.",
};

const partners = [
  {
    name: "Huawei",
    logo: "/images/huawei.svg",
    role: "Global Technology Partner",
  },
  {
    name: "Cisco Systems",
    logo: "/images/cisco.png",
    role: "Networking Solutions Partner",
  },
  {
    name: "ZTE Corporation",
    logo: "/images/zte.png",
    role: "Telecommunications Partner",
  },
  {
    name: "Hiperdist",
    logo: "/images/hipperdist.png",
    role: "Distribution Partner",
  },
  {
    name: "Pinnacle ICT",
    logo: "/images/pinnacle.png",
    role: "Technology Solutions Partner",
  },
  {
    name: "Mustek Limited",
    logo: "/images/mustek.png",
    role: "Hardware & Electronics Partner",
  },
];

const commitments = [
  "Authorized hardware and firmware access across all partner brands",
  "Direct warranty support and advanced replacement SLA programmes",
  "Early access to next-generation infrastructure product lines",
  "Joint technical enablement and enterprise solution design support",
  "Priority allocation during supply chain constraints",
  "Co-deployment for large-scale national infrastructure rollouts",
];

export default function PartnersPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── SUB-HERO ── */}
      <section
        className="relative w-full bg-slate-950 pt-40 sm:pt-52 pb-20 sm:pb-28 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-partners.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/50 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
            Technology Ecosystem
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.02]">
            Strategic Alliances
          </h1>
          <p className="mt-5 mx-auto max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            Partnering with global industry leaders and premier distributors to deliver world-class engineering, networking, and technology solutions.
          </p>
        </div>
      </section>

      {/* ── PARTNERS SECTION ── */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end pb-14 border-b border-slate-200 mb-14 sm:mb-16">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  Our Partners
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                  Trusted alliances.<br className="hidden sm:block" /> World-class delivery.
                </h2>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed self-end">
                At First Class Holdings Limited, strategic partnerships are the cornerstone of our innovation and sustainable growth. By collaborating with renowned global technology providers and distributors, we ensure our clients receive the highest quality products, cutting-edge solutions, and unparalleled service delivery.
              </p>
            </div>

            {/* ── PARTNERS INTERNAL DIVIDED GRID (BORDERS IN-BETWEEN ONLY, NO OUTER BORDER) ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, i) => {
                // Internal dividers: borders only between items, no outer boundary borders
                const borderClasses = [
                  // Mobile (1 col): divider between items, none on bottom of last
                  i < 5 ? "border-b border-slate-200" : "border-b-0",
                  // Tablet (2 cols): vertical divider between cols, horizontal divider between rows
                  i % 2 === 0 ? "sm:border-r sm:border-slate-200" : "sm:border-r-0",
                  i < 4 ? "sm:border-b sm:border-slate-200" : "sm:border-b-0",
                  // Desktop (3 cols): vertical dividers between cols, horizontal divider between row 1 & row 2
                  (i + 1) % 3 !== 0 ? "lg:border-r lg:border-slate-200" : "lg:border-r-0",
                  i < 3 ? "lg:border-b lg:border-slate-200" : "lg:border-b-0",
                ].join(" ");

                return (
                  <div
                    key={partner.name}
                    className={`group flex flex-col justify-between p-8 sm:p-10 hover:bg-slate-50/60 transition-colors ${borderClasses}`}
                  >
                    {/* Logo */}
                    <div className="relative h-11 w-36 mb-8 flex items-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="160px"
                        className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Info: Role & Name */}
                    <div className="space-y-1 pt-4 border-t border-slate-100">
                      <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold block">
                        {partner.role}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── COMMITMENT SECTION ── */}
      <section className="bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  Alliance Standards
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                  A Commitment to Credibility
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Our affiliations with these global industry leaders validate our technical capabilities and guarantee internationally compliant, enterprise-grade deployments across Africa.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-blue-600 pl-6 pr-2 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <span>Partner With Us</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                      <LuArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3 py-4">
                    <LuCircleCheck className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── PRE-FOOTER CTA ── */}
      <PreFooterCTA />
    </div>
  );
}
