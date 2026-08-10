// src/components/home/Hero1.jsx
import { useEffect, useState } from "react";

import hero1 from "../../assets/images/industries/hero1.png";
import hero2 from "../../assets/images/industries/hero2.png";
import hero3 from "../../assets/images/industries/hero3.png";
import hero4 from "../../assets/images/industries/hero4.png";
import hero5 from "../../assets/images/industries/hero5.png";

const slides = [
  { image: hero2 },
  { image: hero1 },
  { image: hero3 },
  { image: hero4 },
  { image: hero5 },
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
        </div>
      ))}

      {/* ================= LEFT BUTTON ================= */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          md:left-6
          top-1/2
          -translate-y-1/2
          z-30

          flex
          items-center
          justify-center

          w-10
          h-10
          md:w-12
          md:h-12

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
          className="w-4 h-4 md:w-5 md:h-5"
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
          right-4
          md:right-6
          top-1/2
          -translate-y-1/2
          z-30

          flex
          items-center
          justify-center

          w-10
          h-10
          md:w-12
          md:h-12

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
          className="w-4 h-4 md:w-5 md:h-5"
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
          bottom-5
          md:bottom-7
          left-1/2
          -translate-x-1/2
          z-30

          flex
          items-center
          gap-2
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              h-2
              rounded-full
              cursor-pointer
              transition-all
              duration-300

              ${
                index === current
                  ? "w-8 md:w-10 bg-[#D92B20]"
                  : "w-2 bg-white/60 hover:bg-white"
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
