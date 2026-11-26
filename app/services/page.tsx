import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuBuilding2,
  LuCctv,
  LuCode,
  LuCompass,
  LuCpu,
  LuGauge,
  LuHeartPulse,
  LuLandmark,
  LuNetwork,
  LuRadio,
  LuSearch,
  LuShoppingBag,
  LuSmartphone,
  LuVideo,
  LuZap,
  LuLayers,
  LuTrendingUp,
} from "react-icons/lu";
import ServicesConstructor from "@/components/ServicesConstructor";
import PreFooterCTA from "@/components/PreFooterCTA";

export const metadata: Metadata = {
  title: "Our Services | First Class Holdings Limited",
  description:
    "Comprehensive, world-class solutions designed to drive your business forward and create sustainable value across Africa.",
};

const catalogSections = [
  {
    id: "engineering",
    eyebrow: "Physical Infrastructure",
    title: "Engineering & Infrastructure",
    summary:
      "Robust physical infrastructure, electronics procurement, structured networking backbones, and clean power systems to power modern facilities.",
    img: "/images/service-infra.jpg",
    items: [
      {
        title: "Engineering & Electronics",
        sub: "Enterprise Hardware",
        desc: "Procurement, certified supply, and digital power infrastructure for modern facilities.",
        icon: LuCpu,
      },
      {
        title: "Enterprise Networking",
        sub: "High-Capacity Connectivity",
        desc: "Structured cabling, optical fiber backbones, multi-gigabit routing, and high-density campus WiFi.",
        icon: LuNetwork,
      },
      {
        title: "Video Conferencing",
        sub: "Boardroom Telepresence",
        desc: "Intelligent meeting rooms, PTZ camera arrays, ceiling microphones, and hybrid workspaces.",
        icon: LuVideo,
      },
      {
        title: "Surveillance & CCTV",
        sub: "Security & Monitoring",
        desc: "High-definition IP surveillance, biometric access control, and centralized security control rooms.",
        icon: LuCctv,
      },
    ],
  },
  {
    id: "technical",
    eyebrow: "Technical Support",
    title: "Technical Services & Maintenance",
    summary:
      "Certified network designing, precision field installations, preventive maintenance schedules, and strategic technical advisory.",
    img: "/images/service-technical.jpg",
    items: [
      {
        title: "Network Designing",
        sub: "Architecture & Audits",
        desc: "Certified topology mapping, RF heatmaps, cybersecurity blueprints, and technical consulting.",
        icon: LuCompass,
      },
      {
        title: "Preventive Maintenance",
        sub: "24/7 SLA Engineering",
        desc: "Scheduled inspections, rapid field dispatch, component replacement, and system uptime guarantees.",
        icon: LuGauge,
      },
    ],
  },
  {
    id: "software",
    eyebrow: "Custom Digital",
    title: "Software Development",
    summary:
      "Custom business software, desktop applications, high-performance web portals, and native mobile platforms engineered for scale.",
    img: "/images/service-software.jpg",
    items: [
      {
        title: "Custom Software Solutions",
        sub: "Web & Enterprise Portals",
        desc: "Custom business software, desktop applications, workflows, and automated ERP integrations.",
        icon: LuCode,
      },
      {
        title: "Mobile Applications",
        sub: "iOS & Android Development",
        desc: "Scalable, secure mobile applications designed for seamless user experience and field operations.",
        icon: LuSmartphone,
      },
    ],
  },
];

const approachPhases = [
  {
    num: "01",
    phase: "Discovery & Consultation",
    desc: "Operational audit, site assessments, and requirement mapping to define project parameters.",
    icon: LuSearch,
  },
  {
    num: "02",
    phase: "Planning & Design",
    desc: "Certified architecture schematics, equipment procurement lists, and milestone delivery schedules.",
    icon: LuLayers,
  },
  {
    num: "03",
    phase: "Implementation & Deployment",
    desc: "Certified on-site installations and agile software engineering with zero operational disruption.",
    icon: LuZap,
  },
  {
    num: "04",
    phase: "Ongoing Support & Optimization",
    desc: "Continuous SLA maintenance, preventative servicing, and strategic lifecycle upgrades.",
    icon: LuTrendingUp,
  },
];

const industries = [
  {
    name: "Corporate & Enterprise",
    icon: LuBuilding2,
    detail: "Campus optical backbones, boardroom AV, power systems & ERP portals.",
  },
  {
    name: "Telecommunications",
    icon: LuRadio,
    detail: "High-capacity carrier transmission, fiber routing & site security.",
  },
  {
    name: "Education & Government",
    icon: LuLandmark,
    detail: "Public digital access portals, institution-wide networks & surveillance.",
  },
  {
    name: "Healthcare",
    icon: LuHeartPulse,
    detail: "Continuous digital power backup, secure clinical networks & biometric access.",
  },
  {
    name: "Retail & Commerce",
    icon: LuShoppingBag,
    detail: "Point-of-sale systems, automated inventory software & smart branch CCTV.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── SUB-HERO ── */}
      <section
        className="relative w-full bg-slate-950 pt-40 sm:pt-52 pb-20 sm:pb-28 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-services.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/50 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.02]">
            Our Services
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            Comprehensive, world-class solutions designed to drive your business forward and create sustainable value.
          </p>
        </div>
      </section>


      {/* ── SERVICES CONSTRUCTOR ── */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Interactive Scope Builder
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight max-w-xl">
              Configure Your Engagement
            </h2>
          </div>
          <ServicesConstructor />
        </div>
      </section>

      {/* ── SOLUTIONS CATALOG ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Catalog header — wide editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end pb-14 border-b border-slate-200 mb-20 sm:mb-28">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Modular Capabilities
              </span>
              <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.0]">
                Solutions Catalog
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed lg:max-w-md self-end">
              From physical telecommunications backbones to bespoke enterprise portals — standardized and custom service offerings.
            </p>
          </div>

          {/* Editorial Sections */}
          <div className="space-y-20 sm:space-y-28">
            {catalogSections.map((section, idx) => (
              <div
                key={section.id}
                id={section.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
              >
                {/* Image — alternates side */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-100 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={section.img}
                      alt={section.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  {/* Floating eyebrow label */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
                      {section.eyebrow}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-0 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="pb-8 border-b border-slate-200">
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                      {section.title}
                    </h3>
                    <p className="mt-4 text-base text-slate-500 leading-relaxed">
                      {section.summary}
                    </p>
                  </div>

                  {/* Capability rows — hairline divided */}
                  <div className="divide-y divide-slate-100">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="group py-6 flex items-start gap-5"
                        >
                          <div className="mt-0.5 shrink-0">
                            <Icon className="h-5 w-5 text-slate-900 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                              <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h4>
                              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                                {item.sub}
                              </span>
                            </div>
                            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            aria-label={`Inquire about ${item.title}`}
                            className="mt-0.5 shrink-0 text-slate-900 group-hover:text-blue-600 transition-colors"
                          >
                            <LuArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE DELIVER — VERTICAL NUMBERED LIST ── */}
      <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end pb-14 border-b border-slate-200 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Structured Methodology
              </span>
              <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.0]">
                How We Deliver
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed lg:max-w-md self-end">
              A structured, collaborative methodology to ensure every project is delivered on time, within budget, and to the highest standards.
            </p>
          </div>

          {/* Numbered phase rows */}
          <div className="divide-y divide-slate-200">
            {approachPhases.map((phase) => {
              const PhaseIcon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-10 items-start py-9 sm:py-10"
                >
                  {/* Number */}
                  <div className="sm:col-span-1">
                    <span className="text-xs font-mono text-slate-900 group-hover:text-blue-400 transition-colors">
                      {phase.num}
                    </span>
                  </div>
                  {/* Icon + Phase */}
                  <div className="sm:col-span-4 flex items-center gap-4">
                    <PhaseIcon className="h-5 w-5 text-slate-900 group-hover:text-blue-600 transition-colors shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {phase.phase}
                    </h3>
                  </div>
                  {/* Description */}
                  <div className="sm:col-span-7 sm:pl-4">
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── INDUSTRIES SERVED ── */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left sticky header */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600">
                Sectors & Market Reach
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Industries Served
              </h2>
              <p className="text-base text-slate-500 leading-relaxed">
                Specialized technical infrastructure and software solutions tailored to sector-specific operational realities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 group transition-colors pt-2"
              >
                <span>Discuss Your Sector</span>
                <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right hairline-divided sector list */}
            <div className="lg:col-span-8 divide-y divide-slate-100 border-t border-slate-200">
              {industries.map((ind) => {
                const IndIcon = ind.icon;
                return (
                  <div
                    key={ind.name}
                    className="group py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5 sm:w-5/12">
                      <IndIcon className="h-5 w-5 text-slate-900 group-hover:text-blue-600 shrink-0 transition-colors" />
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {ind.name}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed sm:w-7/12 sm:pl-4">
                      {ind.detail}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── PRE-FOOTER CTA ── */}
      <PreFooterCTA />
    </div>
  );
}
