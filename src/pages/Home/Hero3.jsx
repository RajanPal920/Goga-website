// src/components/home/Hero3.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaAward,
  FaFileDownload,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";
import company from "../../config/company";

import downloadIcon from "../../assets/images/logo/download.jpg";
import icon from "../../assets/images/logo/down.jpg";

// ✅ FIXED IMPORTS: Correctly point to PDFs inside the /public folder
// In Vite/React, files in /public are accessed directly from the root '/'
const isoCertificate = "/certificates/iso-9001.pdf";
const udyamCertificate = "/certificates/udyam.pdf";

const Hero3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  // Handle ISO certificate download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = isoCertificate;
    link.download = "ISO-9001-GOGA-STAINLESS.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle ISO certificate view in new tab
  const handleViewCertificate = () => {
    window.open(isoCertificate, "_blank");
  };

  // Handle Udyam download
  const handleDownloadUdyam = () => {
    const link = document.createElement("a");
    link.href = udyamCertificate;
    link.download = "UDYAM-GOGA-STAINLESS.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Udyam view in new tab
  const handleViewUdyam = () => {
    window.open(udyamCertificate, "_blank");
  };

  return (
    <section
      // ✅ ADDED pt-[10vh] to clear the new double-height Navbar
      className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-white pt-[10vh] lg:pt-[10vh]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(217, 43, 32, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(217, 43, 32, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* LEFT SIDE - CONTENT & STATS */}
      <div
        ref={leftRef}
        className={`w-full lg:w-[58%] flex flex-col justify-between px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20 z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
        }`}
      >
        {/* Top Tagline */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-1 bg-[#D92B20] rounded-full"></span>
          <span className="text-xs font-bold tracking-[0.2em] text-[#173F52] uppercase">
            ISO 9001:2015 CERTIFIED INDUSTRIAL SUPPLIER
          </span>
        </div>

        {/* Main Header */}
        <div className="max-w-2xl mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] uppercase">
            <span className="text-[#173F52]">FORGING STRUCTURAL</span> <br />
            <span className="text-[#D92B20]">ABSOLUTE INTEGRITY.</span>
          </h1>
        </div>

        {/* Body Text */}
        <div className="max-w-2xl mb-10">
          <p className="text-slate-700 text-sm md:text-base leading-relaxed uppercase font-medium">
            GOGA STAINLESS CONSTRUCTS AND SUPPLIES HIGH-YIELD STAINLESS STEEL
            AND INDUSTRIAL RAW MATERIAL ARCHITECTURES ENGINEERED EXCLUSIVELY FOR
            HIGH-PRESSURE, SEVERE-TEMPERATURE ENVIRONMENTS. WE GUARANTEE
            COMPLETE DOCUMENTATION AND TRACABILITY ACROSS GLOBAL DISTRIBUTION
            NETWORKS.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-[#D92B20]/40 to-transparent mb-8"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mb-10">
          <div className="group">
            <h3 className="text-3xl md:text-4xl font-black text-[#D92B20] tracking-tight">
              100%
            </h3>
            <p className="text-[11px] font-extrabold tracking-wider text-[#173F52] mt-1 uppercase">
              ULTRASONIC TESTED
            </p>
          </div>
          <div className="group">
            <h3 className="text-3xl md:text-4xl font-black text-[#D92B20] tracking-tight">
              9001
            </h3>
            <p className="text-[11px] font-extrabold tracking-wider text-[#173F52] mt-1 uppercase">
              ISO CERTIFIED
            </p>
          </div>
          <div className="group">
            <h3 className="text-3xl md:text-4xl font-black text-[#D92B20] tracking-tight">
              ZERO
            </h3>
            <p className="text-[11px] font-extrabold tracking-wider text-[#173F52] mt-1 uppercase">
              DELAMINATION RATE
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="flex items-center gap-3 mt-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D92B20]"></span>
          <Link
            to="/products"
            className="text-xs uppercase font-extrabold tracking-wider text-[#173F52] hover:text-[#D92B20] transition flex items-center gap-2 group"
          >
            EXPLORE PRODUCT RANGE
            <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D92B20]" />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - GST CERTIFICATE CARD */}
      <div
        ref={rightRef}
        className={`w-full lg:w-[41%] bg-[#173F52] mt-6 md:mt-30
          px-9 py-6
          sm:px-6 sm:py-8
          md:px-8 md:py-12
          lg:px-10 lg:py-8
          xl:px-12 xl:py-15
          flex flex-col justify-around relative
          h-auto
          sm:h-[560px]
          md:h-[580px]
          lg:h-[500px]
          xl:h-[560px]
          transition-all duration-1000 ease-out delay-200
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#D92B20]/40"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#D92B20]/40"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#D92B20]/10 rounded-full blur-3xl"></div>

        {/* GST Certificate Badge Section */}
        <div className="mt-6 flex items-start gap-4 relative z-10">
          <div className="border border-[#D92B20]/40 p-3 text-[#D92B20] flex items-start justify-start w-12 h-12 rounded-xl bg-[#D92B20]/20">
            <FaIndustry className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[11px] tracking-[0.15em] font-extrabold text-[#D92B20] block uppercase mb-1">
              TAX REGISTRATION: {company.gstin}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              GST <br />
              CERTIFICATE
            </h2>
          </div>
        </div>

        {/* Certificate Description */}
        <p className="text-slate-200 text-xs md:text-sm leading-relaxed my-6 max-w-md relative z-10 uppercase font-medium">
          VERIFIES GOGA STAINLESS VALID GOODS AND SERVICES TAX REGISTRATION (
          {company.gstin}), ENSURING COMPLETE TAX COMPLIANCE AND TRANSPARENT
          BUSINESS OPERATIONS ACROSS ALL DOMESTIC AND INTERNATIONAL
          TRANSACTIONS.
        </p>

        {/* Download Image - side-by-side on desktop, stacked on mobile */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:gap-4 gap-4 relative z-10 border-none">
          <button
            type="button"
            onClick={handleDownload}
            aria-label="Download ISO certificate"
            className="w-full md:w-1/2 cursor-pointer group flex flex-col items-center justify-center h-[120px] md:h-[140px] bg-transparent rounded-md overflow-hidden border border-white/10 p-2"
          >
            <div className="flex items-center justify-center w-full h-[80px] md:h-[100px]">
              <img
                src={downloadIcon}
                alt="Download iso Certificate"
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <span className="mt-2 text-xs font-semibold uppercase text-white/90">
              ISO-Certificate
            </span>
          </button>

          <button
            type="button"
            onClick={handleDownloadUdyam}
            aria-label="Download Udyam certificate"
            className="w-full md:w-1/2 cursor-pointer group flex flex-col items-center justify-center h-[120px] md:h-[140px] bg-transparent rounded-md overflow-hidden border border-white/10 p-2"
          >
            <div className="flex items-center justify-center w-full h-[80px] md:h-[100px]">
              <img
                src={icon}
                alt="Download Udyam Certificate"
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <span className="mt-2 text-xs font-semibold uppercase text-white/90">
              Udyam-Certificate
            </span>
          </button>
        </div>

        {/* Execute Verification Action */}
        <div className="w-full border-t border-white/10 pt-6 mt-6 relative z-10">
          <Link
            to="/certificates"
            className="text-[11px] tracking-[0.15em] font-extrabold text-white uppercase hover:text-[#D92B20] transition flex items-center gap-2 group"
          >
            <FaShieldAlt className="w-3.5 h-3.5 text-[#D92B20] group-hover:scale-110 transition-transform" />
            VIEW ALL CERTIFICATES
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex gap-4 mt-6 relative z-10">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="w-3.5 h-3.5 text-[#D92B20]" />
            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
              GST REGISTERED
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaAward className="w-3.5 h-3.5 text-[#D92B20]" />
            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
              ISO 9001:2015 CERTIFIED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
