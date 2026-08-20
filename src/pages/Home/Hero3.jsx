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
const isoCertificate = "/certificates/gst.pdf";
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
    link.download = "GST-GOGA-STAINLESS.pdf";
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
        className={`w-full mr-10 lg:w-[42%] bg-[#173f52] px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 flex flex-col justify-between relative min-h-[500px] lg:min-h-screen transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#d79b20]/30"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#d79b20]/30"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#d79b20]/5 rounded-full blur-3xl"></div>

        {/* GST Certificate Badge Section - UPPERCASE */}
        <div className="mt-6 flex items-start gap-4 relative z-10">
          <div className="border border-[#d92b20]/30 p-3 text-[#d92b20] flex items-center justify-center w-12 h-12 rounded-xl bg-[#d79b20]/10">
            <FaIndustry className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.15em] font-bold text-[#d92b20] block uppercase mb-1">
              TAX REGISTRATION
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              GST <br />
              CERTIFICATE
            </h2>
          </div>
        </div>

        {/* Certificate Description - UPPERCASE */}
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed my-6 max-w-md relative z-10 uppercase">
          VERIFIES OUR VALID GOODS AND SERVICES TAX REGISTRATION, ENSURING
          COMPLETE TAX COMPLIANCE AND TRANSPARENT BUSINESS OPERATIONS ACROSS ALL
          DOMESTIC AND INTERNATIONAL TRANSACTIONS.
        </p>

        {/* View Certificate Button */}
        <div className="w-full max-w-md bg-[#102f3d] hover:bg-[#3682a5] transition text-white flex items-center justify-between rounded-xl shadow-lg shadow-[#d79b20]/20 mb-3 cursor-pointer group relative z-10">
          <div
            className="p-4 md:p-5 flex flex-col text-left flex-1"
            onClick={handleViewCertificate}
          >
            <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-2">
              <FaFileDownload className="w-3 h-3" />
              VIEW GST CERTIFICATE
            </span>
            <span className="text-[10px] text-white/70 mt-0.5 font-medium uppercase">
              PDF FORMAT • OFFICIAL TAX REGISTRATION
            </span>
          </div>
          <div
            className="bg-white/20 p-5 md:p-6 flex items-center justify-center group-hover:bg-white/30 transition rounded-r-xl"
            onClick={handleViewCertificate}
          >
            <span className="text-lg">↗</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="w-full max-w-md bg-[#d92b20] hover:bg-[#d42e44] transition text-white flex items-center justify-between rounded-xl border border-[#d79b20]/30 shadow-lg shadow-[#d79b20]/10 mb-8 cursor-pointer group relative z-10">
          <div
            className="p-4 md:p-5 flex flex-col text-left flex-1"
            onClick={handleViewUdyam}
          >
            <span className="text-xs font-bold tracking-wider uppercase flex items-center gap-2">
              <FaFileDownload className="w-3 h-3" />
              VIEW Udyam CERTIFICATE
            </span>
            <span className="text-[10px] text-white/50 mt-0.5 font-medium uppercase">
             PDF FORMAT • OFFICIAL TAX REGISTRATION
            </span>
          </div>
          <div
            className="bg-white/5 p-5 md:p-6 flex items-center justify-center group-hover:bg-white/10 transition rounded-r-xl"
            onClick={handleViewUdyam}
          >
            <span className="text-lg">↓</span>
          </div>
        </div>

        {/* Execute Verification Action - UPPERCASE */}
        <div className="w-full border-t border-white/10 pt-6 mt-auto relative z-10">
          <Link
            to="/certificates"
            className="text-[10px] tracking-[0.15em] font-bold text-white uppercase hover:text-[#d92b20] transition flex items-center gap-2 group"
          >
            <FaShieldAlt className="w-3 h-3 group-hover:scale-110 transition-transform" />
            VIEW ALL CERTIFICATES
          </Link>
        </div>

        {/* Trust Badges - UPPERCASE */}
        <div className="flex gap-4 mt-6 relative z-10">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="w-3 h-3 text-[#d92b20]" />
            <span className="text-[8px] text-white/60 uppercase tracking-wider">
              GST REGISTERED
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaAward className="w-3 h-3 text-[#d92b20]" />
            <span className="text-[8px] text-white/60 uppercase tracking-wider">
              TAX COMPLIANT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
