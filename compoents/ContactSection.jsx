"use client";

import React, { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

const PROJECT_TYPES = [
  "Corporate office",
  "Hotel",
  "Hospital",
  "Shopping mall",
  "School / University",
  "Airport",
  "Factory / Industrial",
  "Government / Public infrastructure",
  "Residential",
];

const PRODUCTS = [
  "Not sure — need guidance",
  "Toilet cubicles",
  "Toilet partitions",
  "Urinal partitions",
  "Shower cubicles",
  "Hardware & accessories",
  "Custom washroom solution",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    projectType: "",
    cubicles: "",
    product: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    // Required field validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);

      // Keep the same API structure.
      // Extra quote details are included inside message.
      const data = {
        supplierToken: "6a9fb2bdd936bdc2bb1d6df7",
        platform: "Megha System Contact Form",
        platformEmail: "contact@meghasystems.com",

        name: formData.name.trim(),

        email: formData.email.trim(),

        company: formData.company.trim() || "NA",

        phone: formData.phone.trim(),

        product: formData.product.trim() || "N/A",

        place: formData.location.trim() || "N/A",

        message: `
Project Enquiry Details:

Project Location: ${formData.location.trim() || "N/A"}

Project Type: ${formData.projectType.trim() || "N/A"}

Approx. Number of Cubicles: ${formData.cubicles || "N/A"}

Product / Solution Interested In: ${formData.product.trim() || "N/A"}

Expected Timeline: ${formData.timeline.trim() || "N/A"}

Message:
${formData.message.trim() || "No additional message provided."}
        `.trim(),
      };

      const response = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Form submitted successfully:", response.data);

      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        location: "",
        projectType: "",
        cubicles: "",
        product: "",
        timeline: "",
        message: "",
      });

      // Hide success message after 4 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        err?.response?.data?.message ||
        "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="quote"
      className="flex items-center justify-center bg-slate-50 p-4 py-12 font-sans antialiased text-slate-900 sm:p-6 lg:p-8"
    >
      <div className="relative w-full max-w-[1400px] overflow-hidden rounded-[16px] border border-slate-100 bg-white p-2 sm:p-8 lg:p-12">
        <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* =====================================================
              LEFT CONTACT PANEL
          ====================================================== */}
          <aside className="flex flex-col justify-between space-y-6 rounded-[16px] bg-[#E5E2E0] p-6 sm:p-8 lg:col-span-4">
            <div className="space-y-6">
              {/* Heading */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-slate-600">
                  Get a quote
                </p>

                <h2 className="text-4xl font-bold leading-[1.2] tracking-tight text-black">
                  Planning a washroom project?
                  <br />
                  Let&apos;s build it right.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Share a few details and our team will get back to you with a
                  proposal and next steps.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-1">
                {/* ================= PHONE ================= */}
                <div className="flex items-center gap-3.5 rounded-[12px] bg-[#F0EDED] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-800">
                    <Phone className="h-5 w-5 stroke-[1.5]" />
                  </div>

                  <div>
                    <p className="text-[12px] leading-tight text-slate-600">
                      Call Us
                    </p>

                    <a
                      href="tel:+919873735713"
                      className="mt-0.5 block text-base font-semibold tracking-tight text-black"
                    >
                      +91 98737 35713
                    </a>

                    <a
                      href="tel:+919873735716"
                      className="block text-sm font-medium text-slate-700"
                    >
                      +91 98737 35716
                    </a>
                  </div>
                </div>

                {/* ================= EMAIL ================= */}
                <div className="flex items-center gap-3.5 rounded-[12px] bg-[#F0EDED] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-800">
                    <Mail className="h-5 w-5 stroke-[1.5]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[12px] leading-tight text-slate-600">
                      Mail Us
                    </p>

                    <a
                      href="mailto:contact@meghasystems.com"
                      className="mt-0.5 block break-all text-base font-semibold tracking-tight text-black"
                    >
                      contact@meghasystems.com
                    </a>
                  </div>
                </div>

                {/* ================= WHATSAPP ================= */}
                <div className="flex items-center gap-3.5 rounded-[12px] bg-[#F0EDED] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-800">
                    <Phone className="h-5 w-5 stroke-[1.5]" />
                  </div>

                  <div>
                    <p className="text-[12px] leading-tight text-slate-600">
                      WhatsApp
                    </p>

                    <a
                      href="https://wa.me/919873735713"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-base font-semibold tracking-tight text-black"
                    >
                      +91 98737 35713
                    </a>
                  </div>
                </div>

                {/* ================= ADDRESS ================= */}
                <div className="flex items-start gap-3.5 rounded-[12px] bg-[#F0EDED] p-4">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-800">
                    <MapPin className="h-5 w-5 stroke-[1.5]" />
                  </div>

                  <div>
                    <p className="text-[12px] leading-tight text-slate-600">
                      Head Office &amp; Factory
                    </p>

                    <p className="mt-0.5 text-base font-semibold leading-snug tracking-tight text-black">
                      Plot P10/J-3, Adore Business City, Sector 72-73,
                      Faridabad, Haryana 121004
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* =====================================================
              RIGHT FORM PANEL
          ====================================================== */}
          <main className="flex flex-col justify-between py-2 sm:pr-2 lg:col-span-8">
            {/* Heading */}
            <header>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
                Request a Quote
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Tell us about your project and requirements. Our team will
                contact you with the right solution.
              </p>
            </header>

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 mt-8 space-y-5"
            >
              {/* =================================================
                  NAME + COMPANY
              ================================================== */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-800"
                  >
                    Name <span className="text-rose-500">*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-slate-800"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* =================================================
                  EMAIL + PHONE
              ================================================== */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-800"
                  >
                    Email <span className="text-rose-500">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-800"
                  >
                    Phone <span className="text-rose-500">*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* =================================================
                  PROJECT LOCATION + PROJECT TYPE
              ================================================== */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Location */}
                <div className="space-y-2">
                  <label
                    htmlFor="location"
                    className="text-sm font-medium text-slate-800"
                  >
                    Project Location
                  </label>

                  <input
                    id="location"
                    type="text"
                    name="location"
                    placeholder="City / Location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="projectType"
                    className="text-sm font-medium text-slate-800"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full appearance-none rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="">Select Project Type</option>

                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* =================================================
                  CUBICLES + PRODUCT
              ================================================== */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Cubicles */}
                <div className="space-y-2">
                  <label
                    htmlFor="cubicles"
                    className="text-sm font-medium text-slate-800"
                  >
                    Approx. Number of Cubicles
                  </label>

                  <input
                    id="cubicles"
                    type="number"
                    name="cubicles"
                    min="1"
                    placeholder="e.g. 20"
                    value={formData.cubicles}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Product */}
                <div className="space-y-2">
                  <label
                    htmlFor="product"
                    className="text-sm font-medium text-slate-800"
                  >
                    Product / Solution
                  </label>

                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full appearance-none rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="">Select Product / Solution</option>

                    {PRODUCTS.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* =================================================
                  EXPECTED TIMELINE
              ================================================== */}
              <div className="space-y-2">
                <label
                  htmlFor="timeline"
                  className="text-sm font-medium text-slate-800"
                >
                  Expected Timeline
                </label>

                <input
                  id="timeline"
                  type="text"
                  name="timeline"
                  placeholder="e.g. Within 3 months"
                  value={formData.timeline}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full resize-none rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* =================================================
                  ERROR
              ================================================== */}
              {error && (
                <div className="rounded-[8px] bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* =================================================
                  SUCCESS
              ================================================== */}
              {success && (
                <div className="rounded-[8px] bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
                  Thank you — your enquiry has been received. Our team will get
                  back to you shortly.
                </div>
              )}

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-[4px] bg-black px-8 py-4 text-sm font-medium tracking-wide text-white transition-all hover:bg-neutral-900 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Request a Quote"}
                </button>
              </div>
            </form>
          </main>
        </div>

        {/* =====================================================
            BACKGROUND ARCHITECTURAL SVG
        ====================================================== */}
        <div className="pointer-events-none absolute -bottom-8 -right-8 z-0 h-[380px] w-[380px] opacity-[0.14] sm:h-[460px] sm:w-[460px]">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            stroke="#0F172A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M250 100 L450 200 L250 300 L50 200 Z"
              strokeDasharray="4 4"
              strokeWidth="1"
            />

            <path
              d="M250 200 L450 300 L250 400 L50 300 Z"
              strokeDasharray="4 4"
              strokeWidth="1"
            />

            <path d="M250 160 L330 200 L330 290 L250 250 Z" />

            <path d="M250 160 L170 200 L170 290 L250 250 Z" />

            <path d="M250 160 L330 120 L250 80 L170 120 Z" />

            <path d="M250 80 L250 160" strokeWidth="2.5" />

            <path d="M170 120 L170 200" strokeWidth="2" />

            <path d="M330 120 L330 200" strokeWidth="2" />

            <path
              d="M210 200 L290 160 L320 175 L240 215 Z"
              fill="#0F172A"
              fillOpacity="0.04"
            />

            <path d="M240 215 L240 255" />

            <path d="M320 175 L320 215" />

            <path d="M270 170 L285 162 L285 178 L270 186 Z" />

            <path d="M277 183 L277 190" />

            <path d="M330 200 L410 240 L410 330 L330 290 Z" />

            <path d="M330 200 L410 160 L330 120" />

            <path d="M410 160 L410 240" strokeWidth="2" />

            <path d="M170 200 L90 240 L90 330 L170 290 Z" />

            <path d="M170 200 L90 160 L170 120" />

            <path d="M90 160 L90 240" strokeWidth="2" />

            <ellipse cx="260" cy="275" rx="14" ry="8" />

            <path d="M260 275 L260 300" />

            <path d="M260 300 L248 310" />

            <path d="M260 300 L272 310" />

            <path d="M260 300 L260 312" />

            <path d="M248 260 C248 245, 272 245, 272 260 L272 272 C272 272, 248 272, 248 272 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
