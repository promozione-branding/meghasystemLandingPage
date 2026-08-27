"use client";

import React, { useState } from "react";
import axios from "axios";

const products = [
  "Public Restroom",
  "Kids Restrooms",
  "Urinal Partitions",
  "Luxe Partition System",
];

export default function Form2() {
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    phone: "",
    product: "",
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.contactPerson ||
      !formData.phone ||
      !formData.email ||
      !formData.product
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const data = {
        platform: "Megha System Contact Form",
        platformEmail: "contact@meghasystems.com",
        name: formData.contactPerson,
        email: formData.email,
        company: "NA",
        phone: formData.phone,
        product: formData.product,
        place: "N/A",
        message: "Product enquiry",
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data
      );

      console.log("Form submitted:", res.data);

      setSuccess(true);

      setFormData({
        contactPerson: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    } catch (err) {
      console.error("Form submission error:", err);

      setError("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-2 md:py-5">
      <div className="mx-auto w-full max-w-7xl px-5">
        
        {/* HEADING */}
        <div className="mb-7 text-center md:mb-5">
          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#042555]
              sm:text-4xl
              md:text-5xl
            "
          >
            Transform your commercial space now!
          </h2>

          <p className="mx-auto hidden md:block mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
            Tell us what you need and our team will help you find the
            perfect restroom partition solution.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-lg
            md:p-5
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              lg:flex-row
              lg:items-center
            "
          >
            {/* NAME */}
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                text-sm
                text-slate-900
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-[#042555]
                focus:bg-white
                focus:ring-2
                focus:ring-[#042555]/10
                lg:flex-1
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              autoComplete="email"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                text-sm
                text-slate-900
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-[#042555]
                focus:bg-white
                focus:ring-2
                focus:ring-[#042555]/10
                lg:flex-1
              "
            />

            {/* MOBILE */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              maxLength={10}
              inputMode="numeric"
              autoComplete="tel"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                text-sm
                text-slate-900
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-[#042555]
                focus:bg-white
                focus:ring-2
                focus:ring-[#042555]/10
                lg:flex-1
              "
            />

            {/* PRODUCT */}
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                text-sm
                text-slate-700
                outline-none
                transition
                focus:border-[#042555]
                focus:bg-white
                focus:ring-2
                focus:ring-[#042555]/10
                lg:flex-1
              "
            >
              <option value="">Select Product</option>

              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>

            {/* SEND */}
            <button
              type="submit"
              disabled={loading}
              className="
                h-14
                w-full
                rounded-xl
                bg-[#042555]
                px-7
                text-sm
                font-semibold
                text-white
                shadow-md
                transition-all
                hover:bg-[#0f172a]
                disabled:cursor-not-allowed
                disabled:opacity-60
                lg:w-auto
                lg:min-w-[130px]
              "
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <p className="mt-3 text-center text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {/* SUCCESS */}
          {success && (
            <p className="mt-3 text-center text-sm font-medium text-green-600">
              Thank you! Your enquiry has been submitted successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}