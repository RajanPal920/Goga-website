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
      {/* =============================== */}
      {/* HERO SECTION - FIXED IMAGE ALIGNMENT */}
      {/* =============================== */}
      <section className="w-5xl min-h-[900px] lg:min-h-[670px]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="GOGA STAINLESS Hero Background"
            className="w-full h-full object-cover object-center"
          />

          </div>

          {/* Pattern
          <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>
        </div> */}

        {/* Hero Content
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-40">
          <div className="max-w-3xl">
            {/* <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#D92B20]"></span>

              <span className="text-[#D92B20] text-sm font-semibold uppercase tracking-widest">
                Global Metal Supplies & Exporter
              </span>
            </div>

            <h1 className="text-white font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1]">
              ENGINEERED FOR
              <br />
              <span className="text-[#D92B20]">PERFORMANCE.</span>
              <br />
              BUILT FOR GLOBAL
              <br />
              <span className="text-[#D92B20]">INDUSTRY.</span>
            </h1>

            <p className="text-slate-200 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
              GOGA STAINLESS supplies Stainless Steel, Duplex
              Steel, Super Duplex Steel, Nickel Alloys, Titanium, Inconel,
              Monel, Hastelloy and industrial piping products to customers
              worldwide.
            </p> */}

            {/* <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/products"
                className="bg-[#D92B20] hover:bg-[#B91F17] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D92B20]/30"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div> */} 

        {/* Stats Cards
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 transition duration-300 hover:bg-white/15">
              <div className="w-12 h-12 rounded-xl bg-[#D92B20]/20 flex items-center justify-center mb-4">
                <FaGlobe className="text-[#D92B20] text-xl" />
              </div>

              <h2 className="text-3xl font-bold text-white">50+</h2>

              <p className="text-slate-300 text-sm mt-2">Countries Served</p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 transition duration-300 hover:bg-white/15">
              <div className="w-12 h-12 rounded-xl bg-[#D92B20]/20 flex items-center justify-center mb-4">
                <FaBoxes className="text-[#D92B20] text-xl" />
              </div>

              <h2 className="text-3xl font-bold text-white">5000+</h2>

              <p className="text-slate-300 text-sm mt-2">Product Variants</p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 transition duration-300 hover:bg-white/15">
              <div className="w-12 h-12 rounded-xl bg-[#D92B20]/20 flex items-center justify-center mb-4">
                <FaAward className="text-[#D92B20] text-xl" />
              </div>

              <h2 className="text-3xl font-bold text-white">ISO</h2>

              <p className="text-slate-300 text-sm mt-2">Certified Quality</p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 transition duration-300 hover:bg-white/15">
              <div className="w-12 h-12 rounded-xl bg-[#D92B20]/20 flex items-center justify-center mb-4">
                <FaHeadset className="text-[#D92B20] text-xl" />
              </div>

              <h2 className="text-3xl font-bold text-white">24/7</h2>

              <p className="text-slate-300 text-sm mt-2">Customer Support</p>
            </div>
          </div>
        </div> */}
      </section>

      {/* =============================== */}
      {/* ABOUT SECTION - REDESIGNED IMAGE STRUCTURE */}
      {/* =============================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* IMAGE SECTION - LEFT SIDE */}
            <div className="relative order-1 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px] lg:max-w-full">
                {/* Decorative Background Elements */}
                <div className="absolute -top-6 -left-6 w-20 h-20 md:w-24 md:h-24 border-4 border-[#D92B20] rounded-2xl opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 border-4 border-[#D92B20]/30 rounded-2xl opacity-20"></div>

                {/* Gradient Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D92B20]/10 to-[#173F52]/10 rounded-3xl blur-2xl"></div>

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[520px]">
                  <img
                    src={workshop}
                    alt="Workshop"
                    className="w-full h-[520px] object-fill"
                  />
                </div>

                {/* Floating Badge Cards */}
                {/* <div className="absolute -bottom-3 left-3 md:-bottom-4 md:left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-3 md:p-4 lg:p-5 border border-[#D92B20]/10 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#D92B20]/10 flex items-center justify-center flex-shrink-0">
                    <FaTrophy className="w-5 h-5 md:w-6 md:h-6 text-[#D92B20]" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold text-[#173F52]">
                      25+ Years
                    </p>
                    <p className="text-[10px] md:text-xs text-slate-500">
                      Industry Experience
                    </p>
                  </div>
                </div> */}

                {/* <div className="absolute -top-3 right-3 opacity-20 md:-top-4 md:right-8 bg-[#173F52]/95 backdrop-blur-sm rounded-2xl shadow-2xl p-3 md:p-4 border border-[#D92B20]/20 hidden sm:flex items-center gap-2 md:gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#D92B20] border-2 border-white flex items-center justify-center text-white text-[10px] md:text-xs font-bold">
                      J
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-[10px] md:text-xs font-bold">
                      M
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white text-[10px] md:text-xs font-bold">
                      A
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-white">
                      Trusted Team
                    </p>
                    <p className="text-[8px] md:text-[10px] text-slate-400">
                      100+ Experts
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Decorative Dots Pattern */}
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 -right-6 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>
            </div>

            {/* TEXT SECTION - RIGHT SIDE */}
            <div className="order-2 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-[#D92B20]"></span>
                <span className="text-[#D92B20] text-sm font-semibold uppercase tracking-widest">
                  About Us
                </span>
              </div>

              <h2 className="text-[#173F52] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                ABOUT GOGA STAINLESS <br />
                <span className="text-[#D92B20]">PVT. LTD. EXPORT</span>
              </h2>

              <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
                <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  GOGA STAINLESS is a trusted manufacturer,
                  stockist, supplier and exporter of premium metal products. We
                  serve oil & gas, petrochemical, power generation, marine,
                  pharmaceutical, food processing and infrastructure industries.
                </p>

                <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  Our commitment to quality, timely delivery and technical
                  excellence enables us to support critical industrial projects
                  across domestic and international markets.
                </p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-4 md:mt-6">
                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaCheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-slate-700">
                    ISO Certified
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaGlobe className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-slate-700">
                    Global Reach
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaShieldAlt className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-slate-700">
                    Premium Quality
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 bg-slate-50 rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-[#D92B20]/5 transition-colors group">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#D92B20]/10 flex items-center justify-center group-hover:bg-[#D92B20] transition-colors flex-shrink-0">
                    <FaHeadset className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D92B20] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-slate-700">
                    24/7 Support
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 md:mt-8 bg-[#173F52] hover:bg-[#102F3D] text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#173F52]/25 text-sm md:text-base"
              >
                Learn More About Us
                <FaArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
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
                From stainless steel piping solutions to specialty alloys,
                GOGA STAINLESS Export delivers quality products
                with global reach and dependable support.
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
