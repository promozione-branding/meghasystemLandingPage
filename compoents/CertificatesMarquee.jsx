"use client";

import React from "react";
import Image from "next/image";

const CERTIFICATES = [
  { id: 1, src: "/assets/certificates/1.png", alt: "Quality Certification 1" },
  { id: 2, src: "/assets/certificates/2.png", alt: "Quality Certification 2" },
  { id: 3, src: "/assets/certificates/3.png", alt: "Quality Certification 3" },
  { id: 4, src: "/assets/certificates/4.png", alt: "Quality Certification 4" },
  { id: 5, src: "/assets/certificates/5.png", alt: "Quality Certification 5" },
  { id: 6, src: "/assets/certificates/6.png", alt: "Quality Certification 6" },
  { id: 7, src: "/assets/certificates/7.png", alt: "Quality Certification 7" },
  { id: 8, src: "/assets/certificates/8.png", alt: "Quality Certification 8" },
  { id: 9, src: "/assets/certificates/9.png", alt: "Quality Certification 9" },
  { id: 10, src: "/assets/certificates/10.png", alt: "Quality Certification 10" },
  { id: 11, src: "/assets/certificates/11.png", alt: "Quality Certification 11" },
  { id: 12, src: "/assets/certificates/12.png", alt: "Quality Certification 12" },
  { id: 13, src: "/assets/certificates/13.png", alt: "Quality Certification 13" },
];

export default function CertificatesMarquee() {
  const marqueeCertificates = [...CERTIFICATES, ...CERTIFICATES];

  return (
    <section className="relative w-full overflow-hidden border-y border-gray-200/80 bg-[#f8f9fa] pt-12 pb-6 font-sans text-[#0d2461] sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto flex max-w-[1750px] flex-col-reverse items-center gap-12 px-6 lg:grid lg:grid-cols-12 lg:gap-8">

        {/* Marquee Track */}
        <div className="group relative flex w-full items-center overflow-hidden py-4 lg:col-span-7 xl:col-span-8">

          {/* Left Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent sm:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#f8f9fa] via-[#f8f9fa]/90 to-transparent sm:w-32" />

          {/* Moving Track */}
          <div className="animate-marquee-reverse flex w-max items-center gap-6 will-change-transform group-hover:[animation-play-state:paused] sm:gap-8">
            {marqueeCertificates.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="group/card relative flex h-40 w-32 shrink-0 cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-48 sm:w-40 lg:h-52 lg:w-44"
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 768px) 128px, 176px"
                    className="object-contain p-1 transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="relative z-20 flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left xl:col-span-4">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0d2461]/10 bg-[#0d2461]/5 px-3.5 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f5bd24]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0d2461] sm:text-xs">
              Accreditations &amp; Standards
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0d2461] sm:text-4xl lg:text-[42px]">
            Certified for Precision, Safety &amp; Durability
          </h2>

          <p className="mt-4 max-w-lg text-sm text-gray-600 sm:text-base">
            Our restroom cubicles and wall paneling systems conform to rigorous
            international quality, fire-rating, and ISO standard compliance.
          </p>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-reverse {
          animation: marqueeReverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
}