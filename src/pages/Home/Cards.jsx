// src/components/home/Cards.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry } from "react-icons/fa";

import pipe from "../../assets/images/productImage/steel-pipes.webp";
import plates from "../../assets/images/productImage/plates.webp";
import rod from "../../assets/images/productImage/rod.webp";
import flanges from "../../assets/images/productImage/Flanges.webp";
import fastener from "../../assets/images/productImage/fastener.webp";
import buttweld from "../../assets/images/productImage/buttweld.webp";
import coil from "../../assets/images/productImage/coil.webp";
import valves from "../../assets/images/productImage/valves.webp";

const cardData = [
  {
    id: 1,
    title: "PIPES & TUBES",
    subtitle: "STAINLESS STEEL & ALLOYS",
    image: pipe,
    link: "/products/pipes",
    icon: FaIndustry,
    description:
      "Premium quality seamless & welded pipes and tubes for industrial applications",
  },
  {
    id: 2,
    title: "SHEETS & PLATES",
    subtitle: "STAINLESS STEEL & ALLOYS",
    image: plates,
    link: "/products/sheets",
    icon: FaIndustry,
    description: "High-grade sheets, plates & coils for heavy engineering",
  },
  {
    id: 3,
    title: "ROD & BAR",
    subtitle: "STAINLESS STEEL & ALLOYS",
    image: rod,
    link: "/products/round-bars",
    icon: FaIndustry,
    description: "Precision round, square & hex bars for critical machining",
  },
  {
    id: 4,
    title: "FLANGES",
    subtitle: "STAINLESS STEEL & ALLOYS",
    image: flanges,
    link: "/products/flanges",
    icon: FaIndustry,
    description:
      "High-strength ANSI/ASME flanges for secure piping connections",
  },
  {
    id: 5,
    title: "FASTENERS",
    subtitle: "NUTS & BOLTS",
    image: fastener,
    link: "/products/fasteners",
    icon: FaIndustry,
    description:
      "Reliable industrial fasteners & studs for demanding environments",
  },
  {
    id: 6,
    title: "BUTTWELD FITTINGS",
    subtitle: "PIPE FITTINGS",
    image: buttweld,
    link: "/products/buttweld-fittings",
    icon: FaIndustry,
    description:
      "Precision buttweld elbows, tees & reducers for piping systems",
  },
  {
    id: 7,
    title: "COILS",
    subtitle: "STAINLESS STEEL & ALLOYS",
    image: coil,
    link: "/products/coils",
    icon: FaIndustry,
    description:
      "High-quality stainless steel coils for continuous industrial processing",
  },
  {
    id: 8,
    title: "DAIRY & INDUSTRIAL VALVES",
    subtitle: "VALVES & FITTINGS",
    image: valves,
    link: "/products/valves",
    icon: FaIndustry,
    description: "Hygienic dairy fittings & heavy duty valves for flow control",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* HEADER SECTION */}
      <div className="w-full flex flex-col items-center text-center mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-10 h-1 bg-[#D92B20] rounded-full"></span>
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#D92B20] uppercase">
            GOGA STAINLESS PRODUCT RANGE
          </span>
          <span className="w-10 h-1 bg-[#D92B20] rounded-full"></span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#173F52] leading-tight">
          Industrial Product{" "}
          <span className="text-[#D92B20]">Classifications</span>
        </h2>

        <p className="text-slate-600 text-sm md:text-base font-medium mt-3 max-w-2xl">
          Stockists & suppliers of premium quality industrial products
          engineered for critical applications
        </p>

        <div className="w-16 h-1 bg-[#D92B20] mt-4 rounded-full"></div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto">
        {cardData.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.id}
              to={card.link}
              className="group relative block w-full h-[320px] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#D92B20] transition-all duration-300"
            >
              {/* Image - Always visible */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay - Appears on hover */}
              <div className="absolute inset-0 bg-[#102F3D]/0 group-hover:bg-[#102F3D]/70 transition-all duration-500"></div>

              {/* Content - Hidden by default, shows on hover */}
              <div className="absolute inset-0 p-6 z-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-1 bg-[#D92B20] mb-3 rounded-full"></div>

                <span className="inline-block text-[9px] font-extrabold tracking-[0.2em] text-white/80 uppercase mb-2">
                  {card.subtitle}
                </span>

                <h3 className="text-xl font-black text-white uppercase leading-tight">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-xs mt-2 leading-relaxed font-medium">
                  {card.description}
                </p>

                <div className="flex items-center gap-2 mt-3 text-slate-300 text-xs transition-all duration-300 group-hover:text-[#D92B20]">
                  <span className="font-bold uppercase tracking-wider">
                    Explore Range
                  </span>
                  <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-2 text-[#D92B20]" />
                </div>
              </div>

              {/* Icon Badge - Always visible, subtle */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#173F52]/60 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-[#D92B20]">
                <Icon className="w-4 h-4 text-white" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-[#173F52] hover:bg-[#D92B20] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          View All Products
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Cards;
