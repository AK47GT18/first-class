import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuAward,
  LuBuilding2,
  LuCompass,
  LuHandshake,
  LuHeartHandshake,
  LuLeaf,
  LuLightbulb,
  LuShieldCheck,
  LuTarget,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";
import PreFooterCTA from "@/components/PreFooterCTA";

export const metadata: Metadata = {
  title: "About Us | First Class Holdings Limited",
  description:
    "A dynamic and diversified investment company committed to delivering high-quality products and services across Africa.",
};

const coreValues = [
  {
    num: "01",
    title: "Excellence",
    desc: "We deliver first-class quality in everything we do.",
    icon: LuAward,
  },
  {
    num: "02",
    title: "Integrity",
    desc: "We uphold honesty, transparency, and accountability.",
    icon: LuShieldCheck,
  },
  {
    num: "03",
    title: "Innovation",
    desc: "We embrace creativity and forward-thinking solutions.",
    icon: LuLightbulb,
  },
  {
    num: "04",
    title: "Customer Focus",
    desc: "We prioritize customer satisfaction and experience.",
    icon: LuHeartHandshake,
  },
  {
    num: "05",
    title: "Sustainability",
    desc: "We are committed to long-term environmental and economic impact.",
    icon: LuLeaf,
  },
];

const provenPillars = [
  {
    num: "01",
    title: "Proven Track Record",
    desc: "Over a decade delivering mission-critical solutions across public and private sectors in Africa.",
    icon: LuAward,
  },
  {
    num: "02",
    title: "Expert Team",
    desc: "Our multidisciplinary engineers, developers, and strategists bring deep domain expertise to every engagement.",
    icon: LuUsers,
  },
  {
    num: "03",
    title: "Quality Assured",
    desc: "Every project is delivered to the highest standards with rigorous quality checks and post-delivery support.",
    icon: LuShieldCheck,
  },
  {
    num: "04",
    title: "Growth-Oriented",
    desc: "We don't just solve today's problems — we architect solutions that scale with your ambitions.",
    icon: LuTrendingUp,
  },
];

const differentiators = [
  {
    num: "01",
    title: "Diverse Expertise",
    desc: "Extensive experience across multiple sectors including engineering, technology, and software development.",
    icon: LuBuilding2,
  },
  {
    num: "02",
    title: "Strategic Partnerships",
    desc: "Strong alliances with global industry leaders ensuring we deliver cutting-edge, reliable solutions.",
    icon: LuHandshake,
  },
  {
    num: "03",
    title: "Innovation-Driven",
    desc: "A forward-looking approach focused on identifying and developing creative, modern, and efficient solutions.",
    icon: LuLightbulb,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── 1. SUB-HERO (Standard Highlands Background) ── */}
      <section
        className="relative w-full bg-slate-950 pt-40 sm:pt-52 pb-20 sm:pb-28 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/50 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.02]">
            About Us
          </h1>
          <p className="mt-5 mx-auto max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            A dynamic and diversified investment company committed to delivering high-quality products and services across Africa.
          </p>
        </div>
      </section>

      {/* ── 2. COMPANY OVERVIEW ── */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="pb-12 border-b border-slate-200 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Our Company
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Company Overview
            </h2>
          </div>

          {/* Split Content: Narrative + Provided Company Overview Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-medium">
                First Class Holdings Limited is a dynamic and diversified investment company committed to delivering high-quality products and services across multiple sectors. The company operates with a strong focus on innovation, operational excellence, and sustainable growth, positioning itself as a trusted partner in business and community development.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                With a forward-looking approach, First Class Holdings Limited seeks to identify and develop opportunities that create long-term value for stakeholders while contributing to economic growth and social impact.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 group transition-colors"
                >
                  <span>Work With Us</span>
                  <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src="/images/corp-1.jpg"
                  alt="First Class Holdings Professional Business Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Professional business team</span>
                <span className="text-blue-600 font-semibold uppercase tracking-wider">Direction</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. VISION & MISSION ── */}
      <section className="bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="pb-12 border-b border-slate-200 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Direction
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Vision &amp; Mission
            </h2>
          </div>

          {/* Clean 2-Column Ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Vision */}
            <div className="space-y-4 lg:pr-8">
              <div className="flex items-center gap-2.5">
                <LuCompass className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  Our Vision
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                To become a leading and trusted diversified holding company in Africa, delivering world-class solutions and creating sustainable value across all sectors we operate in.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4 pt-10 lg:pt-0 lg:pl-16">
              <div className="flex items-center gap-2.5">
                <LuTarget className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  Our Mission
                </span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                To invest in and build high-performing businesses that provide exceptional products and services, empower communities, and drive innovation through strong leadership, strategic partnerships, and a commitment to excellence.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. WHAT WE STAND FOR: OUR CORE VALUES ── */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end pb-12 border-b border-slate-200 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                What We Stand For
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Our Core Values
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed lg:max-w-md self-end">
              The principles that guide our decisions, actions, and the way we do business.
            </p>
          </div>

          {/* Split Content: Left Image + Right 5 Core Values */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src="/images/core-values.jpg"
                  alt="First Class Holdings Core Values — Unity, Integrity, and Shared Purpose"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Shared Commitment</span>
                <span className="text-blue-600 font-semibold uppercase tracking-wider">Integrity &amp; Unity</span>
              </div>
            </div>

            {/* Right: 5 Core Values — Clean Hairline Divided Ledger */}
            <div className="lg:col-span-7 divide-y divide-slate-200 border-b border-slate-200">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="group py-6 sm:py-7 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-6 hover:bg-slate-50/60 transition-colors sm:px-3 -mx-2 px-2"
                  >
                    <div className="flex items-center gap-3 sm:w-5/12">
                      <span className="text-xs font-mono text-slate-400 group-hover:text-blue-600 transition-colors w-6 shrink-0">
                        {val.num}
                      </span>
                      <Icon className="h-4 w-4 text-slate-900 group-hover:text-blue-600 transition-colors shrink-0" />
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:w-7/12">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. WHY CHOOSE US: TRUSTED. EXPERIENCED. COMMITTED TO EXCELLENCE. ── */}
      <section className="bg-slate-50 py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end pb-12 border-b border-slate-200 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Why Choose Us
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Trusted. Experienced. Committed to Excellence.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed lg:max-w-md self-end">
              First Class Holdings brings together a seasoned team of professionals with a singular mission — to deliver solutions that transform organisations and uplift communities across Africa.
            </p>
          </div>

          {/* 4 Pillars — Open Editorial Columns (No Card Boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {provenPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-slate-900 group-hover:text-blue-600 transition-colors" />
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {pillar.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 6. WHY CHOOSE US: OUR STRENGTHS & DIFFERENTIATORS ── */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-end pb-12 border-b border-slate-200 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Why Choose Us
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Our Strengths &amp; Differentiators
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed lg:max-w-md self-end">
              What sets First Class Holdings Limited apart in the marketplace.
            </p>
          </div>

          {/* 3 Differentiators — Open Editorial Columns (No Card Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.title}
                  className="group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-slate-900 group-hover:text-blue-600 transition-colors" />
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {diff.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 7. PRE-FOOTER CTA ── */}
      <PreFooterCTA />
    </div>
  );
}
