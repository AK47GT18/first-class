import type { Metadata } from "next";
import {
  LuClock,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";
import PreFooterCTA from "@/components/PreFooterCTA";

export const metadata: Metadata = {
  title: "Contact Us | First Class Holdings Limited",
  description:
    "First Class Holdings is ready to provide the right engineering, networking, surveillance, and software solutions according to your needs.",
};

const contactInfo = [
  {
    icon: LuMapPin,
    title: "Head Office",
    lines: ["Lilongwe, Central Region", "Malawi"],
  },
  {
    icon: LuMail,
    title: "Email Us",
    lines: ["director@firstclassmw.com", "sales@firstclassmw.com"],
    isEmail: true,
  },
  {
    icon: LuPhone,
    title: "Call Us",
    lines: ["+265 891 67 96 08", "+265 995 52 60 69"],
    isPhone: true,
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "X" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">

      {/* ── 1. SUB-HERO (Kassapay Inspired Layout, Standard Highlands Background) ── */}
      <section
        className="relative w-full bg-slate-950 pt-40 sm:pt-52 pb-32 sm:pb-40 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/50 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.02]">
            Contact us
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
            First Class Holdings is ready to provide the right solution according to your needs.
          </p>
        </div>
      </section>

      {/* ── 2. UNIFIED CONTACT CARD CONTAINER (Kassapay Style: Overlapping White Card) ── */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Get in touch */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Get in touch
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Have questions or need consultation? Our engineering and digital teams are ready to discuss your project requirements.
                </p>
              </div>

              {/* Contact Items with Solid Circular Blue Badges */}
              <div className="space-y-6 pt-2">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        {item.lines.map((line) => (
                          <div key={line}>
                            {item.isPhone ? (
                              <a
                                href={`tel:${line.replace(/\s+/g, "")}`}
                                className="block text-xs sm:text-sm font-mono text-slate-600 hover:text-blue-600 transition-colors"
                              >
                                {line}
                              </a>
                            ) : item.isEmail ? (
                              <a
                                href={`mailto:${line}`}
                                className="block text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors"
                              >
                                {line}
                              </a>
                            ) : (
                              <p className="text-xs sm:text-sm text-slate-600">
                                {line}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                    <LuClock className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      Operating Hours
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Mon – Fri: 8:00 AM – 5:00 PM
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      24/7 SLA emergency support available
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow Our Social Media */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Follow our social media
                </h4>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs hover:bg-blue-700 transition-colors"
                      >
                        <SocialIcon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Send us a message */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Send us a message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in the details below and an executive will contact you shortly.
                </p>
              </div>

              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. MAP SECTION (Kassapay Style Full-Width Location Embed) ── */}
      <section className="relative w-full bg-slate-100 border-t border-slate-200">
        <div className="w-full h-80 sm:h-96 relative overflow-hidden">
          <iframe
            title="First Class Holdings Limited Office Location in Lilongwe, Malawi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123869.60155097659!2d33.71391585!3d-13.9626121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d337d1d73507%3A0xc3f6bc6cf0cfa72a!2sLilongwe%2C%20Malawi!5e0!3m2!1sen!2smw!4v1700000000000!5m2!1sen!2smw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
          />
          {/* Location Badge Overlay */}
          <div className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3 shadow-lg border border-slate-200 pointer-events-none">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-ping" />
              <div>
                <p className="text-xs font-bold text-slate-900">First Class Holdings Limited</p>
                <p className="text-[11px] font-mono text-slate-500">Lilongwe, Central Region, Malawi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PRE-FOOTER CTA ── */}
      <PreFooterCTA />
    </div>
  );
}
