import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuCctv,
  LuCode,
  LuCpu,
  LuGauge,
  LuGlobe,
  LuNetwork,
} from "react-icons/lu";
import PreFooterCTA from "@/components/PreFooterCTA";

export const metadata: Metadata = {
  title: "First Class Holdings Limited | Delivering Excellence Across Africa",
  description:
    "Delivering innovative, high-quality solutions across multiple sectors with a commitment to excellence and sustainable growth. Building value, empowering communities, and driving Africa's future.",
};

const serviceList = [
  {
    icon: LuCpu,
    title: "Engineering & Infrastructure",
    description:
      "High-quality engineering solutions including electronics supply and infrastructure deployment.",
    tag: "Physical Infrastructure",
    href: "/services",
  },
  {
    icon: LuNetwork,
    title: "Networking Solutions",
    description:
      "Secure and scalable network design, installation, and optimization.",
    tag: "Enterprise IT & Fiber",
    href: "/services",
  },
  {
    icon: LuCctv,
    title: "Surveillance Systems",
    description:
      "Advanced CCTV and monitoring solutions for business security.",
    tag: "Security & Monitoring",
    href: "/services",
  },
  {
    icon: LuGauge,
    title: "Technical Services",
    description:
      "Professional consultation, installations, and maintenance.",
    tag: "SLA & Advisory",
    href: "/services",
  },
  {
    icon: LuCode,
    title: "Software Development",
    description:
      "Custom web, mobile, and desktop applications tailored to your business.",
    tag: "Custom Applications",
    href: "/services",
  },
  {
    icon: LuGlobe,
    title: "Digital Solutions",
    description:
      "Enterprise platforms, portals, and automation tools.",
    tag: "Digital Platforms",
    href: "/services",
  },
];

const coreValues = [
  {
    num: "01",
    title: "Excellence",
    description:
      "We deliver first-class quality across all our services and solutions.",
  },
  {
    num: "02",
    title: "Integrity",
    description:
      "We uphold transparency, accountability, and trust in every engagement.",
  },
  {
    num: "03",
    title: "Innovation",
    description:
      "We embrace forward-thinking solutions to solve modern challenges.",
  },
  {
    num: "04",
    title: "Customer Focus",
    description:
      "We prioritize client success through tailored, results-driven solutions.",
  },
  {
    num: "05",
    title: "Sustainability",
    description:
      "We build solutions that create long-term economic and social impact.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">

      {/* ── 1. HERO — Full-bleed landscape ── */}
      <section
        className="relative w-full min-h-[96vh] sm:min-h-screen lg:min-h-[105vh] bg-slate-950 flex flex-col justify-end pt-36 sm:pt-44 pb-20 sm:pb-28 lg:pb-32 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/55 pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* Bottom-left: Title + exact user text + CTA pill */}
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-300 font-semibold">
                First Class Holdings Limited
              </span>
              <h1 className="mt-3 text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Delivering innovative, high-quality solutions across multiple sectors.
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                Building value, empowering communities, and driving Africa&apos;s future.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-600 pl-6 pr-2 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
                >
                  <span>Work With Us</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                    <LuArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-white/80 hover:text-white px-4 py-2 transition-colors"
                >
                  <span>Explore Services</span>
                  <LuArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BORDERLESS FULL-COLOR INFINITE LOGO STRIP ── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-6 sm:py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div className="flex w-full overflow-hidden items-center">
          <div className="flex animate-marquee gap-14 sm:gap-20 lg:gap-24 items-center shrink-0">
            {[
              { name: "Cisco Systems", logo: "/images/cisco.png" },
              { name: "ZTE Corporation", logo: "/images/zte.png" },
              { name: "Huawei", logo: "/images/huawei.svg" },
              { name: "Mustek Limited", logo: "/images/mustek.png" },
              { name: "Hiperdist", logo: "/images/hipperdist.png" },
              { name: "Pinnacle ICT", logo: "/images/pinnacle.png" },
              { name: "Cisco Systems", logo: "/images/cisco.png" },
              { name: "ZTE Corporation", logo: "/images/zte.png" },
              { name: "Huawei", logo: "/images/huawei.svg" },
              { name: "Mustek Limited", logo: "/images/mustek.png" },
              { name: "Hiperdist", logo: "/images/hipperdist.png" },
              { name: "Pinnacle ICT", logo: "/images/pinnacle.png" },
            ].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="relative h-10 sm:h-12 w-28 sm:w-36 shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex animate-marquee gap-14 sm:gap-20 lg:gap-24 items-center shrink-0 ml-14 sm:ml-20 lg:ml-24"
          >
            {[
              { name: "Cisco Systems", logo: "/images/cisco.png" },
              { name: "ZTE Corporation", logo: "/images/zte.png" },
              { name: "Huawei", logo: "/images/huawei.svg" },
              { name: "Mustek Limited", logo: "/images/mustek.png" },
              { name: "Hiperdist", logo: "/images/hipperdist.png" },
              { name: "Pinnacle ICT", logo: "/images/pinnacle.png" },
              { name: "Cisco Systems", logo: "/images/cisco.png" },
              { name: "ZTE Corporation", logo: "/images/zte.png" },
              { name: "Huawei", logo: "/images/huawei.svg" },
              { name: "Mustek Limited", logo: "/images/mustek.png" },
              { name: "Hiperdist", logo: "/images/hipperdist.png" },
              { name: "Pinnacle ICT", logo: "/images/pinnacle.png" },
            ].map((partner, index) => (
              <div
                key={`${partner.name}-dup-${index}`}
                className="relative h-10 sm:h-12 w-28 sm:w-36 shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT US: WHO WE ARE ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

            {/* Left Column: Narrative (Exact User Text) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Who We Are
              </h2>
              <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-medium">
                First Class Holdings Limited is a dynamic and diversified investment company committed to delivering high-quality products and services across multiple sectors. We operate with a strong focus on innovation, operational excellence, and sustainable growth.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                With a forward-looking approach, we identify and develop opportunities that create long-term value for stakeholders while contributing to economic growth and meaningful social impact across Africa.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 group transition-colors"
                >
                  <span>Learn More About Us</span>
                  <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Corporate Photo & Benchmarks */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src="/images/corp-3.jpg"
                  alt="First Class Holdings team at work"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-200 pt-5 border-t border-slate-200">
                <div className="pr-4">
                  <p className="text-3xl sm:text-4xl font-bold font-mono text-slate-900">10+</p>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
                    Years of Execution
                  </p>
                </div>
                <div className="pl-6">
                  <p className="text-3xl sm:text-4xl font-bold font-mono text-slate-900">90+</p>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
                    Projects Delivered
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE OFFER: OUR KEY SERVICES ── */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                What We Offer
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Our Key Services
              </h2>
              <p className="mt-3 text-base text-slate-600">
                We deliver structured, scalable, and innovative solutions across multiple industries.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 pb-1"
            >
              <span>View All Services</span>
              <LuArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Hairline Service Rows (Blended, No Card Boxes) */}
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {serviceList.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group py-7 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white sm:px-4 -mx-2 px-2 transition-colors"
                >
                  <div className="flex items-center gap-4 sm:w-5/12">
                    <Icon className="h-5 w-5 text-slate-900 group-hover:text-blue-600 shrink-0 transition-colors" />
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {service.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed sm:w-6/12 sm:pl-4">
                    {service.description}
                  </p>

                  <div className="sm:w-1/12 flex justify-end">
                    <LuArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. WHY CHOOSE US & CORE VALUES ── */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">

            {/* Left Narrative & Quote Callout (Exact User Text) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                We combine expertise, innovation, and strategic execution.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                To deliver solutions that drive real impact and long-term value.
              </p>

              <blockquote className="border-l-2 border-blue-600 pl-4 py-1 italic text-slate-800 text-sm sm:text-base leading-relaxed">
                &ldquo;We don’t just deliver services, we build lasting value, empower businesses, and drive sustainable growth across every sector we touch.&rdquo;
              </blockquote>

              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                A trusted partner committed to excellence, innovation, and long-term impact.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-600 pl-6 pr-2 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <span>Work With Us</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                    <LuArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: 5 Values List */}
            <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
              {coreValues.map((val) => (
                <div
                  key={val.title}
                  className="py-6 sm:py-7 flex items-start gap-4 sm:gap-6"
                >
                  <span className="text-xs font-mono text-slate-400 font-semibold w-6 shrink-0 pt-0.5">
                    {val.num}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {val.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. PRE-FOOTER CTA ── */}
      <PreFooterCTA />
    </div>
  );
}
