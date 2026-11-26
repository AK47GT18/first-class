"use client";

import { useState } from "react";
import { LuCheck, LuSend } from "react-icons/lu";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 600);
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <LuCheck className="h-6 w-6 stroke-[3]" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">
            Message Sent Successfully
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            Thank you for reaching out to First Class Holdings Limited. A dedicated technical director will review your inquiry and respond within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-blue-700"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 font-medium">
              {errorMessage}
            </div>
          )}

          {/* Row 1: Name & Company (Kassapay 2-column style) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1.5">
                Name <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-medium text-slate-700 mb-1.5">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-mono transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                Email <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
              />
            </div>
          </div>

          {/* Row 3: Subject / Service */}
          <div>
            <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject / Service Required"
              value={formData.subject}
              onChange={handleChange}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
            />
          </div>

          {/* Row 4: Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1.5">
              Message <span className="text-blue-600">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition resize-none"
            />
          </div>

          {/* Solid Blue Full-Width Action Button (Kassapay Style) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60 cursor-pointer"
            >
              {status === "submitting" ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
