import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuCircleCheck,
} from "react-icons/lu";
import PreFooterCTA from "@/components/PreFooterCTA";

export const metadata: Metadata = {
  title: "Our Partners | First Class Holdings Limited",
  description:
    "Building strong alliances with global industry leaders and premier distributors to deliver world-class solutions across Africa.",
};

const partners = [
  {
    name: "Cisco Systems",
    logo: "/images/cisco.png",
    role: "Global Technology Partner",
    domain: "Networking Solutions Partner",
    description:
      "Enterprise routing, switching backbones, cybersecurity firewalls, and intelligent boardroom video conferencing solutions.",
  },
  {
    name: "ZTE Corporation",
    logo: "/images/zte.png",
    role: "Telecommunications Partner",
    domain: "Optical Transmission & Wireless",
    description:
      "Carrier-grade telecommunications infrastructure, high-capacity optical transport networks, and metropolitan connectivity.",
  },
  {
    name: "Huawei",
    logo: "/images/huawei.svg",
    role: "Telecommunications Partner",
    domain: "Digital Power & Carrier Networking",
    description:
      "Mission-critical digital power systems, industrial solar inverters, and high-efficiency enterprise telecom infrastructure.",
  },
  {
    name: "Mustek Limited",
    logo: "/images/mustek.png",
    role: "Hardware & Electronics Partner",
    domain: "Enterprise Hardware & Power Systems",
    description:
      "Southern Africa's foremost technology distributor, providing certified component procurement, server racks, and direct factory warranties.",
  },
  {
    name: "Hiperdist",
    logo: "/images/hipperdist.png",
    role: "Distribution Partner",
    domain: "Technology Distribution & Logistics",
    description:
      "Extensive regional IT distribution network ensuring seamless bonded warehousing, rapid spare parts deployment, and priority allocations.",
  },
  {
    name: "Pinnacle ICT",
    logo: "/images/pinnacle.png",
    role: "Technology Solutions Partner",
    domain: "ICT Infrastructure & Peripherals",
    description:
      "Leading southern and central African distributor delivering certified networking hardware, security telemetry, and enterprise peripherals.",
  },
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
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.02]">
            Strategic Alliances
          </h1>
          <p className="mt-5 mx-auto max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            Partnering with global industry leaders and premier distributors to deliver world-class engineering, networking, and technology solutions.
          </p>
        </div>
      </section>

      {/* ── PARTNER LOGO GRID ── */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end pb-14 border-b border-slate-200 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Technology Ecosystem
              </span>
              <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.0]">
                Our Partners
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed self-end">
              At First Class Holdings Limited, we believe that strategic partnerships are the cornerstone of innovation and sustainable growth. By collaborating with renowned global technology providers and distributors, we ensure that our clients receive the highest quality products, cutting-edge solutions, and unparalleled service delivery. Our partnerships are built on mutual trust, credibility, and a shared commitment to excellence.
            </p>
          </div>
        </div>

        {/* Full-width colored partner grid — no max-w container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col gap-5 p-8 sm:p-10 bg-white border-b border-r border-slate-200 transition-colors"
            >
              {/* Logo */}
              <div className="relative h-10 w-36">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="150px"
                  className="object-contain object-left"
                />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-widest font-semibold text-blue-600">
                  {partner.role}
                </p>
                <h3 className="text-lg font-bold text-slate-900">
                  {partner.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {partner.domain}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-500 border-t border-slate-100 pt-5">
                {partner.description}
              </p>

              {/* Alliance badge */}
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600">
                <LuCircleCheck className="h-3.5 w-3.5 shrink-0" />
                Authorized Alliance
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMITMENT TO CREDIBILITY ── */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Alliance Standards
              </span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                A Commitment to Credibility
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed self-start lg:pt-16">
              Our affiliations with these industry giants not only validate our technical capabilities but also guarantee that we deploy solutions that meet rigorous international standards. These collaborations empower us to drive digital transformation and infrastructure development with unmatched reliability.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRE-FOOTER CTA ── */}
      <PreFooterCTA />
    </div>
  );
}
