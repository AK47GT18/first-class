"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const domains = [
  {
    id: "infrastructure",
    name: "Engineering & Infrastructure",
    subtitle: "Physical Foundations & Energy",
    image: "/images/service-infra.jpg",
    description:
      "Robust physical infrastructure, electronics procurement, structured networking backbones, and uninterrupted power solutions for modern facilities across Africa.",
    capabilities: [
      "Supply of Electronics & Hardware",
      "Enterprise Networking & Fiber Optics",
      "Video Conferencing Solutions",
      "Surveillance & CCTV Systems",
      "Digital Power & Solar Inverters",
    ],
  },
  {
    id: "technical",
    name: "Technical Services",
    subtitle: "Architecture, Audits & SLA Maintenance",
    image: "/images/service-technical.jpg",
    description:
      "Certified network design, hardware installation, preventive maintenance schedules, and 24/7 technical advisory tailored to enterprise uptime requirements.",
    capabilities: [
      "Network Designing & RF Audits",
      "Certified Hardware Installations",
      "Scheduled Preventive Maintenance",
      "Strategic Technical Consultation",
      "24/7 SLA Emergency Dispatch",
    ],
  },
  {
    id: "software",
    name: "Software Development",
    subtitle: "Digital Platforms & Custom Applications",
    image: "/images/service-software.jpg",
    description:
      "Custom software solutions, high-performance web portals, and native mobile applications engineered for African operational scale and enterprise workflows.",
    capabilities: [
      "Custom Enterprise Business Software",
      "Desktop Operational Applications",
      "Web Applications & Portals",
      "Mobile Applications (iOS & Android)",
      "Automated Workflow & API Integrations",
    ],
  },
];

export default function ServicesConstructor() {
  const [selectedId, setSelectedId] = useState<string>("infrastructure");
  const active = domains.find((d) => d.id === selectedId) || domains[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[560px]">
      {/* Left Panel — Domain Selection */}
      <div className="flex flex-col justify-between gap-10 pr-0 lg:pr-16 py-10 border-b lg:border-b-0 lg:border-r border-slate-200">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Select Service Domain
          </p>
          <div className="space-y-0 divide-y divide-slate-100">
            {domains.map((domain) => {
              const isActive = domain.id === selectedId;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setSelectedId(domain.id)}
                  className={`w-full text-left py-5 group flex items-start justify-between gap-4 cursor-pointer transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <div>
                    <p
                      className={`text-base font-semibold tracking-tight leading-snug transition-colors ${
                        isActive ? "text-slate-900" : ""
                      }`}
                    >
                      {domain.name}
                    </p>
                    <p
                      className={`text-xs mt-0.5 font-mono transition-colors ${
                        isActive ? "text-blue-600" : "text-slate-400"
                      }`}
                    >
                      {domain.subtitle}
                    </p>
                  </div>
                  <span
                    className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                      isActive ? "bg-blue-600 scale-125" : "bg-slate-200"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Scope Details */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed">
            {active.description}
          </p>
          <ul className="space-y-2">
            {active.capabilities.map((cap) => (
              <li key={cap} className="flex items-center gap-2.5 text-sm text-slate-800">
                <span className="h-px w-4 bg-blue-500 shrink-0" />
                {cap}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 group transition-colors"
          >
            <span>Request Custom Proposal</span>
            <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Right Panel — Visual */}
      <div className="relative pl-0 lg:pl-16 py-10 flex items-center">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 rounded-none">
          <Image
            src={active.image}
            alt={active.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-all duration-700"
            priority
          />
          {/* Floating Label */}
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-sm">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-900 font-semibold">
              {active.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
