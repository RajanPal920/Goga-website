// src/pages/About/About.jsx - Fixed Hero Section
import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaGlobe,
  FaBoxes,
  FaHeadset,
  FaTrophy,
  FaAward,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaBuilding,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";

import heroBg from "../../assets/images/industries/hero2.png";
import workshop from "../../assets/images/industries/workshop.webp";
import aboutCardData from "../../data/aboutCard";
import industriesData from "../../data/industriesData";

const About = () => {
  return (
    <>
      {/* HERO SECTION - IMAGE ONLY */}
      {/* =============================== */}
      <section
        className="relative w-full overflow-hidden bg-[#102F3D]"
        style={{
          aspectRatio: "1415/570",
          marginTop: "var(--navbar-total-height)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="GOGA STAINLESS Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* =============================== */}
      {/* ABOUT SECTION - PERFECTLY ALIGNED IMAGE */}
      {/* =============================== */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* IMAGE SECTION - LEFT SIDE */}
            <div className="relative order-1 lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="relative w-full max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                {/* Decorative Background Elements - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-6 -left-6 w-20 h-20 md:w-24 md:h-24 border-4 border-[#D92B20] rounded-2xl opacity-20"></div>
                <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 border-4 border-[#D92B20]/30 rounded-2xl opacity-20"></div>

                {/* Gradient Glow - Hidden on mobile */}
                <div className="hidden sm:block absolute -inset-4 bg-gradient-to-br from-[#D92B20]/10 to-[#173F52]/10 rounded-3xl blur-2xl"></div>

                {/* Image Container - Responsive aspect ratio */}
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-[#f5f5f5]">
                  {/* Mobile/Tablet: 16:9, Desktop: taller */}
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: "16/9", // Default for mobile/tablet
                    }}
                  >
                    {/* Desktop override using media query */}
                    <style jsx>{`
                      @media (min-width: 1024px) {
                        .desktop-ratio {
                          aspect-ratio: 5/3 !important;
                        }
                      }
                    `}</style>
                    <div
                      className="relative w-full desktop-ratio"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <img
                        src={workshop}
                        alt="Workshop"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative Dots Pattern - Hidden on mobile */}
                <div className="hidden lg:block absolute -z-10 top-1/2 -translate-y-1/2 -right-6 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>
              </div>
            </div>

            {/* TEXT SECTION - RIGHT SIDE */}
            <div className="order-2 lg:order-2">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-10 sm:w-12 h-0.5 bg-[#D92B20]"></span>
                <span className="text-[#D92B20] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  About Us
                </span>
              </div>

              <h2 className="text-[#173F52] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                ABOUT GOGA STAINLESS <br />
                <span className="text-[#D92B20]">PVT. LTD. EXPORT</span>
              </h2>

              <div className="mt-3 sm:mt-4 md:mt-6 space-y-2 sm:space-y-3 md:space-y-4">
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  GOGA STAINLESS is a trusted manufacturer, stockist, supplier
                  and exporter of premium metal products. We serve oil & gas,
                  petrochemical, power generation, marine, pharmaceutical, food
                  processing and infrastructure industries.
                </p>

                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Our commitment to quality, timely delivery and technical
                  excellence enables us to support critical industrial projects
                  across domestic and international markets.
                </p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-4 md:mt-6">
                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaCheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    ISO Certified
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaGlobe className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    Global Reach
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaShieldAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    Premium Quality
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaHeadset className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    24/7 Support
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-5 sm:mt-6 md:mt-8 bg-[#173F52] hover:bg-[#102F3D] text-white font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#173F52]/25 text-sm sm:text-base"
              >
                Learn More About Us
                <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* WHY CHOOSE US SECTION */}
      {/* =============================== */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#D92B20]"></span>
              <span className="text-[#D92B20] text-sm font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>
              <span className="w-12 h-0.5 bg-[#D92B20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#173F52] leading-tight">
              TRUSTED BY GLOBAL <br />
              <span className="text-[#D92B20]">INDUSTRIAL BUYERS</span>
            </h2>

            <p className="mt-4 text-slate-500 leading-8 max-w-2xl mx-auto">
              Delivering premium metal products with quality assurance, global
              reach and dependable supply chain support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {aboutCardData.map((card, index) => {
              const Icon = card.svg;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D92B20]/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D92B20] to-[#173F52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <div className="w-16 h-16 rounded-2xl bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-all duration-300">
                    <Icon
                      size={32}
                      className="text-[#D92B20] group-hover:text-white transition-all"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#173F52] group-hover:text-[#D92B20] transition-colors">
                    {card.title}
                  </h3>

                  <div className="w-12 h-0.5 bg-[#D92B20] rounded-full my-4"></div>

                  <p className="text-slate-500 leading-7">{card.description}</p>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <FaArrowRight className="w-4 h-4 text-[#D92B20]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* INDUSTRIES SECTION */}
      {/* =============================== */}
      <section className="w-full py-20 bg-[#173F52]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#D92B20]"></span>
              <span className="text-[#D92B20] text-sm font-semibold uppercase tracking-widest">
                Application Industries
              </span>
              <span className="w-12 h-0.5 bg-[#D92B20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              INDUSTRIES WE <span className="text-[#D92B20]">SERVE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#173F52] via-[#173F52]/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-bold">
                    {industry.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#D92B20] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute top-4 right-4 bg-[#D92B20]/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaArrowRight className="w-4 h-4 text-[#D92B20]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* CTA SECTION */}
      {/* =============================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-20 mt-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#173F52] via-[#102F3D] to-[#173F52] py-16 px-8 lg:px-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D92B20]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D92B20]/5 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-[#D92B20]"></span>
                <span className="text-[#D92B20] text-sm font-semibold uppercase tracking-widest">
                  Global Metal Supplier
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] text-white">
                Looking For A <br />
                <span className="text-[#D92B20]">Reliable</span> Industrial{" "}
                <br />
                Metal Partner?
              </h2>

              <p className="mt-6 max-w-xl text-lg text-blue-100/80 leading-relaxed">
                From stainless steel piping solutions to specialty alloys, GOGA
                STAINLESS Export delivers quality products with global reach and
                dependable support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/contact"
                className="group bg-[#D92B20] hover:bg-[#B91F17] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D92B20]/25 flex items-center justify-center gap-2"
              >
                Get A Quote
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/products"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                View Products
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
