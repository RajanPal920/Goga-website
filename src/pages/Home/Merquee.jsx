// src/components/home/Marquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const Merquee = () => {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#102F3D] via-[#173F52] to-[#102F3D] py-5 relative border-y border-[#173F52]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#102F3D] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#102F3D] to-transparent z-10"></div>

      <Marquee
        speed={45}
        gradient={false}
        pauseOnHover={true}
        pauseOnClick={true}
        autoFill={true}
        loop={0}
      >
        {[
          "GOGA STAINLESS — ISO 9001:2015 CERTIFIED COMPANY",
          "STAINLESS STEEL PIPES & TUBES",
          "BUTTWELD & FORGED FITTINGS",
          "FLANGES & FERRULE FITTINGS",
          "SHEETS, PLATES & COILS",
          "FASTENERS & DAIRY FITTINGS",
          "ROUND, SQUARE & HEX BARS",
        ].map((text, index) => (
          <React.Fragment key={index}>
            <span className="mx-6 inline-flex items-center gap-3 whitespace-nowrap">
              <span className="text-[#D92B20] text-xl">◆</span>
              <span className="text-white text-lg md:text-xl font-bold tracking-wider hover:text-[#D92B20] transition-colors duration-300">
                {text}
              </span>
              <span className="text-[#D92B20] text-xl">◆</span>
              <span className="w-px h-6 bg-[#D92B20]/40 mx-4"></span>
            </span>
          </React.Fragment>
        ))}
      </Marquee>
    </section>
  );
};

export default Merquee;
