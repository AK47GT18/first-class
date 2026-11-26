import type { Metadata } from "next";
import Link from "next/link";
import { LuFileText, LuMail, LuPhone, LuMapPin, LuArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Terms and Conditions | First Class Holdings Limited",
  description: "Commercial operating terms, service level commitments, procurement guidelines, and warranty policies.",
};

const termsSections = [
  { id: "definitions", title: "1. Definitions & Framework" },
  { id: "procurement", title: "2. Equipment Supply & Delivery" },
  { id: "installation", title: "3. Engineering, Installations & Site Access" },
  { id: "surveillance", title: "4. Surveillance & Security Deployments" },
  { id: "software", title: "5. Custom Software & Intellectual Property" },
  { id: "sla", title: "6. SLAs & Maintenance Protocols" },
  { id: "payment", title: "7. Commercial Terms & Quotation Validity" },
  { id: "warranties", title: "8. Warranties & Limitation of Liability" },
  { id: "law", title: "9. Governing Law & Dispute Resolution" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white">
      {/* ── Sub-Hero Header ── */}
      <section className="bg-slate-900 text-white py-20 sm:py-24 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Commercial Operations
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Standard commercial terms governing equipment procurement, enterprise engineering, surveillance systems, software development, and professional technical services.
            </p>
            <p className="text-xs font-mono text-slate-400 pt-2">
              Effective Date: January 1, 2026 | Document Reference: FCH-COMM-TOC-002
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Terms Body ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Sidebar Sticky Navigation */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="p-6 bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-sm tracking-tight">
                  <LuFileText className="h-4 w-4 text-blue-600" />
                  <span>Document Outline</span>
                </div>
                <nav className="space-y-2">
                  {termsSections.map((item) => (
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
                  Commercial Contracting
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For formal Master Services Agreements (MSA) or procurement tender documentation:
                </p>
                <a
                  href="mailto:procurement@firstclassmw.com"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <span>procurement@firstclassmw.com</span>
                  <LuArrowRight className="h-3 w-3" />
                </a>
              </div>
            </aside>

            {/* Editorial Legal Content */}
            <article className="lg:col-span-8 prose prose-slate max-w-none space-y-12 text-slate-700">

              {/* 1. Definitions */}
              <section id="definitions" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  1. Definitions &amp; Framework
                </h2>
                <p className="text-base leading-relaxed">
                  These Terms and Conditions constitute a legally binding agreement between First Class Holdings Limited (&ldquo;First Class Holdings&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) and the purchasing client, enterprise partner, or contracting entity (&ldquo;Client&rdquo;, &ldquo;you&rdquo;).
                </p>
                <p className="text-base leading-relaxed">
                  Engagement of First Class Holdings through execution of a quotation, purchase order, statement of work (SOW), or service agreement confirms unconditional acceptance of these terms, unless superseded by an executed Master Services Agreement (MSA) signed by authorized directors.
                </p>
              </section>

              {/* 2. Procurement */}
              <section id="procurement" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  2. Equipment Supply &amp; Delivery
                </h2>
                <p className="text-base leading-relaxed">
                  First Class Holdings acts as an authorized supplier of enterprise telecommunications hardware, networking switches, fiber optics, servers, and surveillance equipment sourced through verified channel distributors (including Cisco, Huawei, ZTE, Mustek, and Pinnacle ICT).
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>
                    <strong>Delivery Schedules:</strong> Quoted lead times are reasonable estimations subject to global logistics and customs clearance procedures. First Class Holdings shall not be liable for project delays caused by port congestion or statutory customs bottlenecks.
                  </li>
                  <li>
                    <strong>Risk of Loss:</strong> Title and risk of loss transfer to the Client upon formal delivery and physical handover to the Client&rsquo;s designated premises or freight forwarding agent.
                  </li>
                  <li>
                    <strong>Inspection &amp; Acceptance:</strong> The Client must conduct physical inspection of delivered equipment within five (5) business days of handover. Discrepancies must be recorded in writing on the formal Delivery Note.
                  </li>
                </ul>
              </section>

              {/* 3. Installation */}
              <section id="installation" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  3. Engineering, Installations &amp; Site Access
                </h2>
                <p className="text-base leading-relaxed">
                  Where contracts entail physical engineering, structured cabling, or infrastructure deployment:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>
                    <strong>Site Preparedness:</strong> The Client is responsible for securing landlord permissions, architectural approvals, continuous electrical power, clean grounding rods, and adequate ventilation prior to deployment date.
                  </li>
                  <li>
                    <strong>Occupational Safety:</strong> All engineering personnel operate under strict Occupational Safety and Health (OSH) standards. First Class Holdings reserves the right to suspend on-site work if hazardous conditions arise without proper mitigation.
                  </li>
                  <li>
                    <strong>Acceptance Testing:</strong> Completion of installation shall be verified via a joint commissioning audit and formalized with a signed Certificate of Completion (CoC).
                  </li>
                </ul>
              </section>

              {/* 4. Surveillance */}
              <section id="surveillance" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  4. Surveillance &amp; Security Deployments
                </h2>
                <p className="text-base leading-relaxed">
                  All closed-circuit television (CCTV), access control systems, and automated perimeter monitoring systems installed by First Class Holdings are deployed for lawful commercial security purposes.
                </p>
                <p className="text-base leading-relaxed">
                  The Client remains the sole Data Controller regarding footage, facial metadata, and access logs recorded on deployed hardware. The Client warrants that appropriate employee notifications and statutory registrations required under the Malawi Data Protection Act (2023) are properly maintained.
                </p>
              </section>

              {/* 5. Software */}
              <section id="software" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  5. Custom Software &amp; Intellectual Property
                </h2>
                <p className="text-base leading-relaxed">
                  For software engineering, portals, web applications, and enterprise automation delivered by First Class Holdings:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>
                    <strong>Client Work Product:</strong> Upon settlement of all contractual balances, full title to custom-developed source code, schemas, and design assets developed specifically for the Client shall transfer to the Client.
                  </li>
                  <li>
                    <strong>Pre-Existing IP:</strong> First Class Holdings retains ownership of all pre-existing software libraries, architectural frameworks, developer tooling, and reusable modules embedded in deliverables.
                  </li>
                </ul>
              </section>

              {/* 6. SLA */}
              <section id="sla" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  6. SLAs &amp; Maintenance Protocols
                </h2>
                <p className="text-base leading-relaxed">
                  Technical support contracts and Service Level Agreements (SLAs) define specific response and resolution intervals categorized by incident severity:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li><strong>Priority 1 (Critical Outage):</strong> Initial technical response within 2 hours; 24/7 dispatch.</li>
                  <li><strong>Priority 2 (Degraded Network Operations):</strong> Initial technical response within 4 hours during normal business hours.</li>
                  <li><strong>Priority 3 (Routine Maintenance &amp; Requests):</strong> Response within 24 hours.</li>
                </ul>
              </section>

              {/* 7. Commercial Terms */}
              <section id="payment" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  7. Commercial Terms &amp; Quotation Validity
                </h2>
                <p className="text-base leading-relaxed">
                  All official quotations provided by First Class Holdings remain valid for fourteen (14) calendar days from issuance, unless explicitly noted otherwise, owing to fluctuations in foreign currency exchange rates for imported electronics.
                </p>
                <p className="text-base leading-relaxed">
                  Invoices are payable within thirty (30) days of issue date unless alternative phased milestone terms are defined in the project SOW. Invoices are subject to applicable Malawi Value Added Tax (VAT) and statutory withholding tax protocols.
                </p>
              </section>

              {/* 8. Warranties & Liability */}
              <section id="warranties" className="scroll-mt-28 space-y-4 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  8. Warranties &amp; Limitation of Liability
                </h2>
                <p className="text-base leading-relaxed">
                  Hardware supplied by First Class Holdings carries original Original Equipment Manufacturer (OEM) pass-through warranties (typically 12 to 36 months depending on vendor). First Class Holdings warrants its installation craftsmanship for a period of twelve (12) months following commissioning.
                </p>
                <p className="text-base leading-relaxed">
                  To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, special, or consequential damages, including loss of profits, data corruption, or business interruption. First Class Holdings&rsquo; aggregate liability under any claim shall not exceed the total fees paid by Client under the applicable SOW.
                </p>
              </section>

              {/* 9. Governing Law */}
              <section id="law" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  9. Governing Law &amp; Dispute Resolution
                </h2>
                <p className="text-base leading-relaxed">
                  These Terms and Conditions shall be governed by, interpreted, and enforced in accordance with the substantive laws of the Republic of Malawi.
                </p>
                <p className="text-base leading-relaxed">
                  Any dispute, controversy, or claim arising out of or relating to these terms shall first be addressed through good-faith executive negotiation. If unresolved within thirty (30) business days, the dispute shall be referred to arbitration in Lilongwe, Malawi, under the Arbitration Act of Malawi.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-6 space-y-3 not-prose mt-6">
                  <p className="font-bold text-slate-900 text-sm">
                    First Class Holdings Limited — Commercial Legal Department
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
