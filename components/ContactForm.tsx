"use client";

import { useState } from "react";
import { LuCheck, LuCircleAlert, LuRotateCw } from "react-icons/lu";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type FormTouched = Partial<Record<keyof FormData, boolean>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Official email address is required.";
        if (!EMAIL_REGEX.test(value.trim())) return "Please enter a valid email address (e.g. name@company.com).";
        return "";
      case "phone":
        if (value.trim() && !PHONE_REGEX.test(value.trim())) {
          return "Please enter a valid telephone number (e.g. +265 999 123 456).";
        }
        return "";
      case "message":
        if (!value.trim()) return "Please describe your inquiry or project scope.";
        if (value.trim().length < 10) return "Message must be at least 10 characters long.";
        return "";
      default:
        return "";
    }
  };

  const validateAll = (): FormErrors => {
    const newErrors: FormErrors = {};
    const fields: (keyof FormData)[] = ["name", "email", "phone", "message"];

    for (const field of fields) {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    }

    return newErrors;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as keyof FormData;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [field]: value }));

    // Re-validate immediately if the user has already touched this field
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched: FormTouched = {
      name: true,
      company: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);

    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus first element with error
      const firstInvalidField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstInvalidField);
      if (element) {
        element.focus();
      }
      return;
    }

    setStatus("submitting");

    // Simulate async submission
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
      setErrors({});
      setTouched({});
    }, 700);
  };

  const getInputClassName = (field: keyof FormData) => {
    const hasError = touched[field] && !!errors[field];
    return `block w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none ${
      hasError
        ? "border-rose-400 bg-rose-50/20 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
        : "border-slate-200 bg-slate-50/80 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
    }`;
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center transition-all animate-in fade-in zoom-in-95">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <LuCheck className="h-6 w-6 stroke-[3]" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">
            Message Sent Successfully
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for contacting First Class Holdings Limited. A dedicated technical director will review your inquiry and get in touch within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-xs transition hover:bg-blue-700 cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1.5">
                Full Name <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="e.g. John Banda"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                aria-invalid={touched.name && !!errors.name}
                aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                className={getInputClassName("name")}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium">
                  <LuCircleAlert className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-medium text-slate-700 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                placeholder="e.g. First Capital Bank"
                value={formData.company}
                onChange={handleChange}
                onBlur={() => handleBlur("company")}
                className={getInputClassName("company")}
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="+265 999 000 000"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                aria-invalid={touched.phone && !!errors.phone}
                aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
                className={`${getInputClassName("phone")} font-mono`}
              />
              {touched.phone && errors.phone && (
                <p id="phone-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium">
                  <LuCircleAlert className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                Official Email <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                className={getInputClassName("email")}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium">
                  <LuCircleAlert className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Subject / Service */}
          <div>
            <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1.5">
              Subject / Area of Interest
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="e.g. Enterprise Networking / CCTV Infrastructure"
              value={formData.subject}
              onChange={handleChange}
              onBlur={() => handleBlur("subject")}
              className={getInputClassName("subject")}
            />
          </div>

          {/* Row 4: Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1.5">
              Message / Project Scope <span className="text-blue-600">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Please provide details about your technical requirements or consultation objectives..."
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              aria-invalid={touched.message && !!errors.message}
              aria-describedby={touched.message && errors.message ? "message-error" : undefined}
              className={`${getInputClassName("message")} resize-none`}
            />
            {touched.message && errors.message && (
              <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 font-medium">
                <LuCircleAlert className="h-3.5 w-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Solid Blue Full-Width Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60 cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <LuRotateCw className="h-4 w-4 animate-spin" />
                  <span>Sending inquiry...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
