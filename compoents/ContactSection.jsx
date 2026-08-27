"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  Video,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Form:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="flex items-center justify-center bg-slate-50 p-4 py-12 font-sans antialiased text-slate-900 sm:p-6 lg:p-8">
      <div className="relative w-full max-w-[1400px] overflow-hidden rounded-[16px] border border-slate-100 bg-white p-2 sm:p-8 lg:p-12">
        <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

          {/* ================= LEFT INFO PANEL ================= */}
          <aside className="flex flex-col justify-between space-y-6 rounded-[16px] bg-[#E5E2E0] p-6 sm:p-8 lg:col-span-4">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-[1.2] tracking-tight text-black">
                Let's Talk Beautiful Spaces.
              </h2>

              {/* Info Cards */}
              <div className="space-y-4 pt-1">

                {/* Phone */}
                <div className="flex items-center gap-3.5 rounded-[12px] bg-[#F0EDED] p-4.5">
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
                      +91 9873735713
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 rounded-[12px] bg-[#F0EDED] p-4.5">
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

                {/* Address */}
                <div className="flex items-start gap-3.5 rounded-[12px] bg-[#F0EDED] p-4.5">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-800">
                    <MapPin className="h-5 w-5 stroke-[1.5]" />
                  </div>

                  <div>
                    <p className="text-[12px] leading-tight text-slate-600">
                      Visit Us
                    </p>

                    <p className="mt-0.5 text-base font-semibold leading-snug tracking-tight text-black">
                      Adore Business City, Sector 72-73,
                      Faridabad, Haryana, 121004
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2.5 border-t border-black/10 pt-4">
              <p className="text-xs font-semibold text-slate-800">
                Connect with us:
              </p>

              <div className="flex items-center gap-3">

                <a
                  href="#facebook"
                  className="text-slate-800 transition-all hover:text-black"
                  aria-label="Facebook"
                >
                  <Share2 className="h-4 w-4" />
                </a>

                <a
                  href="#twitter"
                  className="text-slate-800 transition-all hover:text-black"
                  aria-label="Twitter"
                >
                  <Globe className="h-4 w-4" />
                </a>

                <a
                  href="#youtube"
                  className="text-slate-800 transition-all hover:text-black"
                  aria-label="YouTube"
                >
                  <Video className="h-4 w-4" />
                </a>

              </div>
            </div>
          </aside>

          {/* ================= RIGHT FORM PANEL ================= */}
          <main className="flex flex-col justify-between py-2 sm:pr-2 lg:col-span-8">
            <header>
              <h2 className="text-5xl font-bold leading-tight tracking-tight text-black">
                Send Us a Message
              </h2>
            </header>

            <form
              onSubmit={handleSubmit}
              className="relative z-10 mt-8 space-y-5"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">
                    Name <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">
                    Email <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>

              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Write Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-800">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-[8px] border border-slate-100 bg-[#F8F7F7] px-5 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-1 focus:ring-slate-300"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-[4px] bg-black px-8 py-4 text-sm font-medium tracking-wide text-white transition-all hover:bg-neutral-900 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </main>
        </div>

        {/* ================= BACKGROUND SVG ================= */}
        <div className="pointer-events-none absolute -bottom-8 -right-8 z-0 h-[380px] w-[380px] opacity-[0.14] sm:h-[460px] sm:w-[460px]">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            stroke="#0F172A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
          >
            {/* Floor Grid */}
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

            {/* Central Cubicle */}
            <path d="M250 160 L330 200 L330 290 L250 250 Z" />
            <path d="M250 160 L170 200 L170 290 L250 250 Z" />
            <path d="M250 160 L330 120 L250 80 L170 120 Z" />

            {/* Partition */}
            <path d="M250 80 L250 160" strokeWidth="2.5" />
            <path d="M170 120 L170 200" strokeWidth="2" />
            <path d="M330 120 L330 200" strokeWidth="2" />

            {/* Desk */}
            <path
              d="M210 200 L290 160 L320 175 L240 215 Z"
              fill="#0F172A"
              fillOpacity="0.04"
            />

            <path d="M240 215 L240 255" />
            <path d="M320 175 L320 215" />

            {/* Monitor */}
            <path d="M270 170 L285 162 L285 178 L270 186 Z" />
            <path d="M277 183 L277 190" />

            {/* Right Pod */}
            <path d="M330 200 L410 240 L410 330 L330 290 Z" />
            <path d="M330 200 L410 160 L330 120" />
            <path d="M410 160 L410 240" strokeWidth="2" />

            {/* Left Pod */}
            <path d="M170 200 L90 240 L90 330 L170 290 Z" />
            <path d="M170 200 L90 160 L170 120" />
            <path d="M90 160 L90 240" strokeWidth="2" />

            {/* Office Chair */}
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