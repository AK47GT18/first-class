import type { Metadata } from "next";
import Link from "next/link";
import { LuShieldCheck, LuMail, LuPhone, LuMapPin, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Privacy Policy | First Class Holdings Limited",
  description: "Our policies and commitments regarding data protection, telemetry governance, and privacy compliance.",
};

const sections = [
  { id: "overview", title: "1. Overview & Scope" },
  { id: "collection", title: "2. Information We Collect" },
  { id: "lawful-basis", title: "3. Lawful Basis for Processing" },
  { id: "infrastructure", title: "4. Infrastructure & Telemetry Governance" },
  { id: "security", title: "5. Information Security & Encryption" },
  { id: "retention", title: "6. Data Retention Policies" },
  { id: "third-party", title: "7. Hardware Partners & Third Parties" },
  { id: "rights", title: "8. Your Statutory Rights" },
  { id: "contact", title: "9. Contact the Data Protection Officer" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* ── Sub-Hero Header ── */}
      <section className="bg-slate-900 text-white py-20 sm:py-24 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Corporate Governance
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              First Class Holdings Limited is committed to upholding the highest standards of confidentiality, data integrity, and statutory compliance under the laws of the Republic of Malawi.
            </p>
            <p className="text-xs font-mono text-slate-400 pt-2">
              Effective Date: January 1, 2026 | Document Reference: FCH-GOV-POL-001
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Legal Body ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Sidebar Sticky Navigation */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="p-6 bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-sm tracking-tight">
                  <LuShieldCheck className="h-4 w-4 text-blue-600" />
                  <span>Document Outline</span>
                </div>
                <nav className="space-y-2">
                  {sections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs font-mono text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-6 border border-slate-200 bg-white space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Compliance Officer
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For statutory requests or data audit documentation, reach our Legal &amp; Compliance Directorate.
                </p>
                <a
                  href="mailto:compliance@firstclassmw.com"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <span>compliance@firstclassmw.com</span>
                  <LuArrowRight className="h-3 w-3" />
                </a>
              </div>
            </aside>

            {/* Editorial Legal Content */}
            <article className="lg:col-span-8 prose prose-slate max-w-none space-y-12 text-slate-700">

              {/* 1. Overview */}
              <section id="overview" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  1. Overview &amp; Scope
                </h2>
                <p className="text-base leading-relaxed">
                  First Class Holdings Limited (&ldquo;First Class Holdings&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates as a diversified enterprise delivering engineering, infrastructure deployment, enterprise networking, surveillance systems, and custom software development across Africa.
                </p>
                <p className="text-base leading-relaxed">
                  This Privacy Policy outlines how we gather, protect, process, and retain corporate and personal data when you interact with our web platforms, contract our infrastructure services, or utilize client portals. We conduct all operations in full compliance with the Malawi Data Protection Act (2023) and applicable international data governance standards.
                </p>
              </section>

              {/* 2. Collection */}
              <section id="collection" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  2. Information We Collect
                </h2>
                <p className="text-base leading-relaxed">
                  Depending on the nature of our commercial engagement, First Class Holdings may collect the following categories of data:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>
                    <strong>Corporate &amp; Contact Credentials:</strong> Names, executive titles, organization names, official email addresses, billing addresses, and verified corporate telephone numbers.
                  </li>
                  <li>
                    <strong>Technical &amp; Site Assessment Data:</strong> Physical layout drawings, server room schematics, electrical ratings, IP subnet ranges, and telecommunications architecture provided for installation feasibility studies.
                  </li>
                  <li>
                    <strong>Device &amp; Telemetry Diagnostics:</strong> MAC addresses, network topology logs, interface throughput statistics, and hardware firmware versions collected during networking deployment or maintenance service level agreements (SLAs).
                  </li>
                  <li>
                    <strong>Physical Security &amp; Surveillance Metadata:</strong> System access logs, CCTV camera positioning indices, and diagnostic telemetry from surveillance systems deployed on client premises. <em>Note: First Class Holdings does not store or process proprietary client surveillance footage unless expressly contracted under a managed security agreement.</em>
                  </li>
                </ul>
              </section>

              {/* 3. Lawful Basis */}
              <section id="lawful-basis" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  3. Lawful Basis for Processing
                </h2>
                <p className="text-base leading-relaxed">
                  We process data strictly under lawful conditions, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>
                    <strong>Contractual Performance:</strong> To formulate quotations, deliver contracted hardware, provision custom software, and fulfill ongoing technical SLAs.
                  </li>
                  <li>
                    <strong>Legal &amp; Regulatory Compliance:</strong> Satisfying statutory audit, customs clearance, taxation, and import requirements established by the Malawi Revenue Authority (MRA) and registrar authorities.
                  </li>
                  <li>
                    <strong>Legitimate Commercial Interests:</strong> Ensuring network resilience, diagnosing hardware failures, preventing unauthorized intrusion, and enhancing client portal performance.
                  </li>
                </ul>
              </section>

              {/* 4. Infrastructure & Telemetry */}
              <section id="infrastructure" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  4. Infrastructure &amp; Telemetry Governance
                </h2>
                <p className="text-base leading-relaxed">
                  In provisioning enterprise networking, fiber backbones, and server infrastructure, First Class Holdings configures appliances according to the principle of least privilege. Telemetry gathered during system commissioning is anonymized and used solely to verify line attenuation, packet transmission efficiency, and power stability.
                </p>
                <p className="text-base leading-relaxed">
                  Client payload data traversing routers, switches, and optical transport gear engineered by First Class Holdings is never intercepted, decoded, or inspected by our personnel without explicit, warrant-backed or SLA-stipulated client authorization.
                </p>
              </section>

              {/* 5. Security */}
              <section id="security" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  5. Information Security &amp; Encryption
                </h2>
                <p className="text-base leading-relaxed">
                  We maintain robust technical and physical safeguards to prevent data corruption, loss, or unauthorized interception:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>
                    All web transmission is encrypted using TLS 1.3 cryptographic suites with strict transport security (HSTS).
                  </li>
                  <li>
                    Enterprise databases and client backup archives are encrypted at rest using AES-256 standards with distributed key management.
                  </li>
                  <li>
                    Role-based access control (RBAC), multi-factor authentication (MFA), and automated audit trails govern all engineering management consoles.
                  </li>
                </ul>
              </section>

              {/* 6. Retention */}
              <section id="retention" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  6. Data Retention Policies
                </h2>
                <p className="text-base leading-relaxed">
                  We retain information only as long as necessary to fulfill the objectives for which it was assembled. Project documentation, equipment serial registers, and signed acceptance certificates are archived for a statutory period of seven (7) years in line with commercial compliance regulations.
                </p>
                <p className="text-base leading-relaxed">
                  Upon contract expiration and satisfaction of legal obligations, electronic records are scrubbed and physical media is shredded in accordance with ISO/IEC 27001 sanitization methodologies.
                </p>
              </section>

              {/* 7. Third Parties */}
              <section id="third-party" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  7. Hardware Partners &amp; Third Parties
                </h2>
                <p className="text-base leading-relaxed">
                  First Class Holdings partners with verified global technology manufacturers including Cisco Systems, Huawei Technologies, ZTE Corporation, Mustek, and Pinnacle ICT. In facilitating warranty validation, hardware replacement, and firmware provisioning, minimal device identifiers (such as chassis serial numbers) may be transmitted to manufacturer verification registries. We strictly prohibit third parties from utilizing this data for independent commercial or marketing purposes.
                </p>
              </section>

              {/* 8. Rights */}
              <section id="rights" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  8. Your Statutory Rights
                </h2>
                <p className="text-base leading-relaxed">
                  Under the Malawi Data Protection Act (2023), enterprise representatives and individual clients hold distinct rights concerning their personal records:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li><strong>Right to Confirmation &amp; Access:</strong> You may request a copy of all personal records maintained by First Class Holdings.</li>
                  <li><strong>Right to Rectification:</strong> You may request prompt correction of outdated or inaccurate corporate profiles.</li>
                  <li><strong>Right to Erasure:</strong> You may request deletion of records where processing is no longer required by contract or statute.</li>
                  <li><strong>Right to Restrict or Object:</strong> You may object to data processing for specific secondary operational objectives.</li>
                </ul>
              </section>

              {/* 9. Contact */}
              <section id="contact" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  9. Contact the Data Protection Officer
                </h2>
                <p className="text-base leading-relaxed">
                  To exercise your statutory rights or submit questions regarding data handling within First Class Holdings Limited, please contact our Data Governance Office:
                </p>
                <div className="bg-slate-50 border border-slate-200 p-6 space-y-3 not-prose">
                  <p className="font-bold text-slate-900 text-sm">
                    First Class Holdings Limited — Legal &amp; Compliance Office
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600">
                    <div className="flex items-center gap-2">
                      <LuMapPin className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Lilongwe, Malawi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuMail className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>info@firstclassmw.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuPhone className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>+265 999 000 000</span>
                    </div>
                  </div>
                </div>
              </section>

            </article>

          </div>
        </div>
      </section>
    </div>
  );
}
