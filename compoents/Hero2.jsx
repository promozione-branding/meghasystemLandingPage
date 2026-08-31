"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import PopupForm from "./PopupForm";

/* =========================================================
   HERO SLIDES
========================================================= */

const HERO_SLIDES = [
  {
    id: 1,
    title: "Premium Cubicles, Made to Last.",
    description:
      "Designed with precision. With 500+ toilet cubicles installed at the Foxconn facility for Apple, our solutions bring together scale, precision, and dependable performance.",
    src: "/1.jpeg",
    alt: "Apple BKC Architectural Showcase",

    // Heading color
    color: "#ffffff",
  },

  {
    id: 2,
    title: "Where Design Meets Performance.",
    description:
      "Built around performance. Delivered for Maruti Suzuki. With 4,000+ toilet cubicles installed at the Kadkhoda plant, our solutions are made for scale, precision, and demanding environments.",
    src: "/2.jpeg",
    alt: "Maruti Suzuki",

    // Heading color
    color: "#ffffff",
  },

  {
    id: 5,
    title: "Custom Cubicles for Every Space.",
    description:
      "Designed for demanding footfall. Delivered across 50+ MCD & McDonald's outlets, our toilet cubicles combine durability, hygiene, and consistent performance across every location.",
    src: "/3.jpeg",
    alt: "McDonald",

    // Heading color
    color: "#ffffff",
  },

  {
    id: 4,
    title: "Built for Modern Washrooms.",
    description:
      "Made for high-traffic environments. Our toilet cubicle solutions across KFC outlets are built for everyday performance, easy maintenance, and lasting durability.",
    src: "/4.jpeg",
    alt: "KFC",

    // Heading color
    color: "#ffffff",
  },
];

/* =========================================================
   TYPEWRITER COMPONENT
========================================================= */

function TypewriterText({ text, speed = 35, onComplete, className = "" }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;

    setDisplayedText("");
    setIsTyping(true);

    const timer = setInterval(() => {
      index += 1;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
        setIsTyping(false);

        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}

      {isTyping && (
        <span className="ml-1 inline-block animate-pulse font-light">|</span>
      )}
    </span>
  );
}

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero2() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const swiperRef = useRef(null);
  const videoRef = useRef(null);
  const slideTimerRef = useRef(null);

  /* Current active slide */
  const currentSlide = HERO_SLIDES[activeSlideIndex] || HERO_SLIDES[0];

  /* =========================================================
     TYPEWRITER COMPLETE
  ========================================================= */

  const handleTypewriterComplete = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }

    slideTimerRef.current = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 1800);
  }, []);

  /* =========================================================
     CLEANUP TIMER
  ========================================================= */

  useEffect(() => {
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, []);

  /* =========================================================
     CONSULTATION
  ========================================================= */

  const handleConsultation = () => {
    setOpen(true);
  };

  /* =========================================================
     VIDEO SPEED
  ========================================================= */

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="w-full bg-white text-black font-sans antialiased pt-2 sm:pt-3 lg:pt-4 pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto max-w-[1750px] px-4 lg:px-10">
          {/* =================================================
              ACTION BUTTON + DESCRIPTION
          ================================================= */}

          <div className="mt-4 hidden md:flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 lg:gap-10">
            {/* CTA BUTTON */}

            <button
              type="button"
              onClick={handleConsultation}
              className="
                inline-flex
                items-center
                justify-center
                gap-2.5
                border
                border-black
                bg-transparent
                px-6
                py-2.5
                text-xs
                sm:text-sm
                font-medium
                text-black
                transition-all
                duration-200
                hover:bg-black
                hover:text-white
                cursor-pointer
                w-fit
                shrink-0
              "
            >
              <span>Book a Free Consultation</span>

              <span className="text-sm leading-none">→</span>
            </button>

            {/* =================================================
                TYPEWRITER DESCRIPTION
            ================================================= */}

            <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-gray-500 min-h-[48px]">
              <TypewriterText
                key={`description-${activeSlideIndex}`}
                text={currentSlide.description}
                speed={12}
                onComplete={handleTypewriterComplete}
              />
            </p>
          </div>

          {/* =================================================
              BOTTOM FEATURE GRID
          ================================================= */}

          <div className="mt-5 sm:mt-8 grid grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6 items-stretch">
            {/* =================================================
                RIGHT SHOWCASE SLIDER
            ================================================= */}

            <div
              className="
                relative
                min-h-[320px]
                sm:min-h-[380px]
                lg:min-h-[440px]
                xl:min-h-[480px]
                w-full
                overflow-hidden
                rounded-[22px]
                shadow-sm
                group/slider
              "
            >
              {/* =================================================
                  DYNAMIC HEADING
              ================================================= */}

              <h1
                className="
                  absolute
                  z-[50]
                  
                  top-25
                  left-5
                  md:left-30
                  max-w-7xl
                  text-3xl
                  sm:text-6xl
                  lg:text-[68px]
                  xl:text-[76px]
                  font-semibold
                  tracking-[-0.04em]
                  leading-[1.02]
                  transition-colors
                  duration-700
                  ease-in-out
                "
                style={{
                  color: currentSlide.color,
                }}
              >
                <TypewriterText
                  key={`title-${activeSlideIndex}`}
                  text={currentSlide.title}
                  speed={45}
                />
              </h1>

              {/* =================================================
                  SWIPER
              ================================================= */}

              <Swiper
                modules={[EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                loop={true}
                speed={800}
                pagination={{
                  clickable: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveSlideIndex(swiper.realIndex);
                }}
                className="w-full h-full hero-swiper text-white"
              >
                {HERO_SLIDES.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="
                      relative
                      w-full
                      h-full
                      min-h-[320px]
                      sm:min-h-[380px]
                      lg:min-h-[440px]
                      xl:min-h-[480px]
                    "
                  >
                    {/* IMAGE */}

                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={slide.id === 1}
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POPUP FORM
      ===================================================== */}

      <PopupForm isOpen={open} onClose={() => setOpen(false)} />

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-[#0d2461] to-black">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f5bd24] animate-pulse" />

                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Megha Systems — Brand Showreel
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="
                  p-1.5
                  rounded-full
                  bg-white/10
                  text-white
                  hover:bg-white/20
                  transition-colors
                  cursor-pointer
                "
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* =================================================
                VIDEO PLAYER
            ================================================= */}

            {/* 
            <div className="relative aspect-video w-full bg-black">

              <video
                src="/assets/video/video_1.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>

            </div>
            */}
          </div>
        </div>
      )}

      <div className="mt-0 flex flex-col py-5 px-5 md:hidden bg-white sm:flex-row sm:items-center gap-5 sm:gap-8 lg:gap-10">
        {/* CTA BUTTON */}

        <button
          type="button"
          onClick={handleConsultation}
          className="
                inline-flex
                items-center
                justify-center
                gap-2.5
                border
                border-black
                bg-transparent
                px-6
                py-2.5
                text-xs
                sm:text-sm
                font-medium
                text-black
                transition-all
                duration-200
                hover:bg-black
                hover:text-white
                cursor-pointer
                w-fit
                shrink-0
              "
        >
          <span>Book a Free Consultation</span>

          <span className="text-sm leading-none">→</span>
        </button>

        {/* =================================================
                TYPEWRITER DESCRIPTION
            ================================================= */}

        <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-gray-500 min-h-[48px]">
          <TypewriterText
            key={`description-${activeSlideIndex}`}
            text={currentSlide.description}
            speed={12}
            onComplete={handleTypewriterComplete}
          />
        </p>
      </div>
    </>
  );
}
