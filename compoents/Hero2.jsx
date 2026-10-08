
"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
} from "react";
import Image from "next/image";
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
    src: "/1.png",
    alt: "Apple BKC Architectural Showcase",
    color: "#ffffff",
  },
  {
    id: 2,
    title: "Where Design Meets Performance.",
    description:
      "Built around performance. Delivered for Maruti Suzuki. With 4,000+ toilet cubicles installed at the Kadkhoda plant, our solutions are made for scale, precision, and demanding environments.",
    src: "/2.png",
    alt: "Maruti Suzuki",
    color: "#ffffff",
  },
  {
    id: 5,
    title: "Custom Cubicles for Every Space.",
    description:
      "Designed for demanding footfall. Delivered across 50+ MCD & McDonald's outlets, our toilet cubicles combine durability, hygiene, and consistent performance across every location.",
    src: "/ChatGPT Image Jan 20, 2026, 05_48_24 PM - Copy.png",
    alt: "McDonald's",
    color: "#ffffff",
  },
  {
    id: 4,
    title: "Built for Modern Washrooms.",
    description:
      "Made for high-traffic environments. Our toilet cubicle solutions across KFC outlets are built for everyday performance, easy maintenance, and lasting durability.",
    src: "/4.png",
    alt: "KFC",
    color: "#ffffff",
  },
];

/* =========================================================
   TYPEWRITER
========================================================= */

const TypewriterText = memo(function TypewriterText({
  text,
  speed = 35,
  onComplete,
  className = "",
}) {
  const [displayedText, setDisplayedText] = useState("");

  const frameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    lastTimeRef.current = 0;

    setDisplayedText("");

    const animate = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const elapsed = time - lastTimeRef.current;

      if (elapsed >= speed) {
        const charactersToAdd = Math.max(
          1,
          Math.floor(elapsed / speed)
        );

        indexRef.current = Math.min(
          indexRef.current + charactersToAdd,
          text.length
        );

        setDisplayedText(text.slice(0, indexRef.current));

        lastTimeRef.current = time;

        if (indexRef.current >= text.length) {
          frameRef.current = null;

          if (onComplete) {
            onComplete();
          }

          return;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}

      {displayedText.length < text.length && (
        <span className="ml-1 inline-block font-light opacity-70">
          |
        </span>
      )}
    </span>
  );
});

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero2() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const swiperRef = useRef(null);
  const slideTimerRef = useRef(null);

  const currentSlide =
    HERO_SLIDES[activeSlideIndex] || HERO_SLIDES[0];

  /* =========================================================
     CLEAR SLIDE TIMER
  ========================================================= */

  const clearSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }
  }, []);

  /* =========================================================
     TYPEWRITER COMPLETE
  ========================================================= */

  const handleTypewriterComplete = useCallback(() => {
    clearSlideTimer();

    slideTimerRef.current = setTimeout(() => {
      if (
        swiperRef.current &&
        !swiperRef.current.destroyed
      ) {
        swiperRef.current.slideNext();
      }
    }, 1800);
  }, [clearSlideTimer]);

  /* =========================================================
     CLEANUP
  ========================================================= */

  useEffect(() => {
    return () => {
      clearSlideTimer();
    };
  }, [clearSlideTimer]);

  /* =========================================================
     SLIDE CHANGE
  ========================================================= */

  const handleSlideChange = useCallback(
    (swiper) => {
      clearSlideTimer();

      setActiveSlideIndex(swiper.realIndex);
    },
    [clearSlideTimer]
  );

  /* =========================================================
     CONSULTATION
  ========================================================= */

  const handleConsultation = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="w-full bg-white pt-2 pb-8 font-sans text-black antialiased sm:pt-3 sm:pb-10 lg:pt-4 lg:pb-12">
        <div className="mx-auto w-full max-w-[1750px] px-4 lg:px-10">

          {/* =================================================
              DESKTOP CTA + DESCRIPTION
          ================================================= */}

          <div className="mt-4 hidden items-center gap-5 md:flex sm:gap-8 lg:gap-10">
            <button
              type="button"
              onClick={handleConsultation}
              className="
                inline-flex
                w-fit
                shrink-0
                cursor-pointer
                items-center
                justify-center
                gap-2.5
                border
                border-black
                bg-transparent
                px-6
                py-2.5
                text-xs
                font-medium
                text-black
                transition-colors
                duration-200
                hover:bg-black
                hover:text-white
                sm:text-sm
              "
            >
              <span>Book a Free Consultation</span>
              <span className="text-sm leading-none">
                →
              </span>
            </button>

            <p className="min-h-[48px] max-w-3xl text-xs leading-relaxed text-gray-500 sm:text-sm">
              <TypewriterText
                key={`description-${activeSlideIndex}`}
                text={currentSlide.description}
                speed={12}
                onComplete={handleTypewriterComplete}
              />
            </p>
          </div>

          {/* =================================================
              HERO SLIDER
          ================================================= */}

          <div className="mt-5 grid items-stretch gap-4 sm:mt-8 md:gap-6">
            <div
              className="
                group/slider
                relative
                h-[65vh]
                min-h-[480px]
                w-full
                overflow-hidden
                rounded-[22px]
                shadow-sm
                md:h-[80vh]
                md:min-h-[600px]
              "
            >
              {/* =================================================
                  HEADING
              ================================================= */}

              <h1
                className="
                  absolute
                  left-5
                  top-20
                  z-20
                  max-w-[90%]
                  text-3xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.04em]
                  transition-colors
                  duration-500
                  sm:text-6xl
                  md:left-20
                  md:top-24
                  md:max-w-7xl
                  lg:left-30
                  lg:text-[68px]
                  xl:text-[76px]
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
                speed={600}
                pagination={{
                  clickable: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
                className="hero-swiper h-full w-full text-white"
              >
                {HERO_SLIDES.map((slide, index) => (
                  <SwiperSlide
                    key={slide.id}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      loading={
                        index === 0 ? "eager" : "lazy"
                      }
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 100vw,
                        1750px
                      "
                      quality={75}
                      className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="pointer-events-none absolute inset-0 z-10 bg-black/40" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE CTA + DESCRIPTION
      ===================================================== */}

      <div className="flex flex-col gap-5 bg-white px-5 py-5 md:hidden">
        <button
          type="button"
          onClick={handleConsultation}
          className="
            inline-flex
            w-fit
            shrink-0
            cursor-pointer
            items-center
            justify-center
            gap-2.5
            border
            border-black
            bg-transparent
            px-6
            py-2.5
            text-xs
            font-medium
            text-black
            transition-colors
            duration-200
            active:bg-black
            active:text-white
          "
        >
          <span>Book a Free Consultation</span>

          <span className="text-sm leading-none">
            →
          </span>
        </button>

        <p className="min-h-[48px] max-w-3xl text-xs leading-relaxed text-gray-500 sm:text-sm">
          <TypewriterText
            key={`mobile-description-${activeSlideIndex}`}
            text={currentSlide.description}
            speed={12}
            onComplete={handleTypewriterComplete}
          />
        </p>
      </div>

      {/* =====================================================
          POPUP
      ===================================================== */}

      <PopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

