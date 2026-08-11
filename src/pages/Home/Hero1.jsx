// src/components/home/Hero1.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import hero1 from "../../assets/images/industries/hero1.png";
import hero2 from "../../assets/images/industries/hero2.png";
import hero3 from "../../assets/images/industries/hero3.png";
import hero4 from "../../assets/images/industries/hero4.png";
import hero5 from "../../assets/images/industries/hero5.png";

const slides = [
  {
    image: hero1,
    title: "Built on Strength",
    subtitle: "Premium Quality Stainless Steel Products for Global Industries",
    tagline: "GOGA STAINLESS",
    categories: ["SHEETS & PLATES", "FLANGES", "FASTENERS"],
    grades: [
      { name: "S STEEL", spec: "04 / 316 / 321" },
      { name: "DUPLEX STEEL", spec: "SAT 2205 / 2507" },
      { name: "TITANIUM", spec: "GRADE 2 / 5" },
    ],
  },
  {
    image: hero2,
    title: "Quality Metals for Critical Industries",
    subtitle:
      "Trusted by Oil & Gas, Petrochemical, Marine & Power Generation Sectors",
    tagline: "GOGA STAINLESS",
    categories: ["SHEETS & PLATES", "FLANGES", "FASTENERS"],
    grades: [
      { name: "S STEEL", spec: "04 / 316 / 321" },
      { name: "DUPLEX STEEL", spec: "SAT 2205 / 2507" },
      { name: "TITANIUM", spec: "GRADE 2 / 5" },
    ],
  },
  {
    image: hero3,
    title: "Global Reach, Local Expertise",
    subtitle: "Serving 50+ Countries with Premium Metal Products",
    tagline: "GOGA STAINLESS",
    categories: ["SHEETS & PLATES", "FLANGES", "FASTENERS"],
    grades: [
      { name: "S STEEL", spec: "04 / 316 / 321" },
      { name: "DUPLEX STEEL", spec: "SAT 2205 / 2507" },
      { name: "TITANIUM", spec: "GRADE 2 / 5" },
    ],
  },
  {
    image: hero4,
    title: "Engineered for Performance",
    subtitle: "ISO Certified Quality Assurance Across All Product Lines",
    tagline: "GOGA STAINLESS",
    categories: ["SHEETS & PLATES", "FLANGES", "FASTENERS"],
    grades: [
      { name: "S STEEL", spec: "04 / 316 / 321" },
      { name: "DUPLEX STEEL", spec: "SAT 2205 / 2507" },
      { name: "TITANIUM", spec: "GRADE 2 / 5" },
    ],
  },
  {
    image: hero5,
    title: "Innovation in Metallurgy",
    subtitle: "Advanced Alloy Solutions for Tomorrow's Challenges",
    tagline: "GOGA STAINLESS",
    categories: ["SHEETS & PLATES", "FLANGES", "FASTENERS"],
    grades: [
      { name: "S STEEL", spec: "04 / 316 / 321" },
      { name: "DUPLEX STEEL", spec: "SAT 2205 / 2507" },
      { name: "TITANIUM", spec: "GRADE 2 / 5" },
    ],
  },
];

const Hero1 = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section
      className="relative w-full max-w-full overflow-hidden bg-[#102F3D] md:!bg-transparent h-[calc(100vw*0.417)] md:h-[calc(102vh-var(--navbar-total-height))]"
      style={{
        marginTop: "var(--navbar-total-height)",
        overflowX: "hidden",
        backgroundColor: "transparent",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ================= SLIDES ================= */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            w-full
            h-full
            transition-all
            duration-1000
            ease-in-out
            ${
              index === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
            }
          `}
        >
          <img
            src={slide.image}
            alt={`Goga Stainless Hero ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain md:object-cover object-center select-none"
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* ================= SAME OVERLAY ON MOBILE & DESKTOP ================= */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#173f52]/80 via-[#173f52]/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#173f52]/40 via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10 z-10"></div>

          {/* ================= BOTTOM GRADIENT SHADOW ================= */}
          <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#173f52]/90 via-[#173f52]/40 to-transparent z-10"></div>

          {/* ================= TEXT CONTENT ================= */}
          <div className="absolute inset-0 flex items-end justify-start px-2 sm:px-4 md:px-12 lg:px-20 pb-2 sm:pb-4 md:pb-12 lg:pb-16 z-20">
            <div className="max-w-3xl w-full">
              {/* Company Name with Line - Hidden on mobile, visible on desktop */}
              <div className="hidden md:flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                <span className="w-6 sm:w-8 md:w-12 h-0.5 bg-[#E52713]"></span>
                <span className="text-[#E52713] text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-widest">
                  {slide.tagline}
                </span>
              </div>

              {/* Title - Smaller on mobile */}
              <h1 className="text-white font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1] uppercase">
                {slide.title}
              </h1>

              {/* Subtitle - Smaller on mobile */}
              <p className="text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-1 sm:mt-1.5 md:mt-2 lg:mt-3 max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Buttons - Smaller on mobile */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                <Link
                  to="/products"
                  className="bg-[#E52713] hover:bg-[#B91F17] text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-lg sm:rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E52713]/25 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  Explore Products
                  <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/30 hover:border-white text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-white/10 text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Bottom Section - Divider - Hidden on mobile, visible on desktop */}
              <div className="hidden md:block mt-3 sm:mt-4 md:mt-5 lg:mt-6 pt-3 sm:pt-4 md:pt-5 lg:pt-6 border-t border-white/20">
                {/* Categories */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                  <span className="text-white/50 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[11px] font-bold uppercase tracking-wider">
                    QUALITY STAINLESS STEEL PRODUCTS
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                  {slide.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="text-white/70 sm:text-white/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium uppercase tracking-wider"
                    >
                      {category}
                      {idx < slide.categories.length - 1 && (
                        <span className="text-white/30 ml-1 sm:ml-2 md:ml-3">
                          |
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Material Grades */}
                <div className="mt-1.5 sm:mt-2 md:mt-3 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-wider">
                  {slide.grades.map((grade, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-2">
                      <span className="text-white/50">{grade.name}</span>
                      <span className="text-white/70 sm:text-white/80">
                        {grade.spec}
                      </span>
                      {idx < slide.grades.length - 1 && (
                        <span className="text-white/20 ml-1 sm:ml-2">|</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= SLIDE INDICATOR ================= */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 text-white/50 text-xs sm:text-sm font-medium hidden md:block z-20">
            <span className="text-white">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="mx-1">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      ))}

      {/* ================= LEFT BUTTON ================= */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-2 sm:left-4 md:left-6
          top-1/2
          -translate-y-1/2
          z-30

          flex
          items-center
          justify-center

          w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12

          rounded-full

          bg-black/20
          hover:bg-[#D92B20]

          backdrop-blur-md

          border
          border-white/30

          text-white

          shadow-lg

          hover:scale-110

          transition-all
          duration-300
        "
        aria-label="Previous slide"
      >
        <svg
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* ================= RIGHT BUTTON ================= */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-2 sm:right-4 md:right-6
          top-1/2
          -translate-y-1/2
          z-30

          flex
          items-center
          justify-center

          w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12

          rounded-full

          bg-black/20
          hover:bg-[#D92B20]

          backdrop-blur-md

          border
          border-white/30

          text-white

          shadow-lg

          hover:scale-110

          transition-all
          duration-300
        "
        aria-label="Next slide"
      >
        <svg
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* ================= SLIDE INDICATORS ================= */}
      <div
        className="
          absolute
          bottom-2 sm:bottom-3 md:bottom-5 lg:bottom-7
          left-1/2
          -translate-x-1/2
          z-30

          flex
          items-center
          gap-1 sm:gap-1.5 md:gap-2
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              h-1 sm:h-1.5 md:h-2
              rounded-full
              cursor-pointer
              transition-all
              duration-300

              ${
                index === current
                  ? "w-4 sm:w-5 md:w-8 lg:w-10 bg-[#D92B20]"
                  : "w-1 sm:w-1.5 md:w-2 bg-white/60 hover:bg-white"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero1;
