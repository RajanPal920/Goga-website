// src/pages/Contact/Contact.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/industries/main-banner.webp";
import {
  Building2,
  Factory,
  Globe2,
  Lock,
  Phone,
  Mail,
  Clock3,
  Send,
  MapPin,
  Navigation,
  Diamond,
  ShieldCheck,
  CheckCircle,
  Loader2,
  MessageCircle,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import logo from "../../assets/images/logo/goga-logo-wordmark.png";
import logoIcon from "../../assets/images/logo/goga-logo-icon.png";
import logoWordmark from "../../assets/images/logo/goga-logo-wordmark.png";
import testimonials from "../../data/testimonials";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specification: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = `Inquiry from ${formData.name} - GOGA STAINLESS`;

      const body =
        `%0A%0A` +
        `---------- INQUIRY DETAILS ----------%0A%0A` +
        `Name: ${formData.name}%0A` +
        `Phone: ${formData.phone}%0A` +
        `Email: ${formData.email}%0A` +
        `Component Specification: ${formData.specification || "N/A"}%0A%0A` +
        `---------- REQUIREMENTS ----------%0A%0A` +
        `${formData.message}%0A%0A` +
        `---------- %0A` +
        `This inquiry was sent from the GOGA STAINLESS Website Contact Form`;

      const mailtoLink = `mailto:gogastainless@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      window.location.href = mailtoLink;

      setShowSuccess(true);
      setShowError(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        specification: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setShowError(true);
      setShowSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessToast = () => {
    setShowSuccess(false);
  };

  const closeErrorToast = () => {
    setShowError(false);
  };

  return (
    <>
      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-lg mx-4"
          >
            <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-2xl p-5 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -ml-10 -mb-10"></div>

              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-200">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-green-800 uppercase tracking-wider">
                    Email Prepared Successfully!
                  </h4>
                  <p className="text-sm text-green-700 mt-1 leading-relaxed">
                    Your inquiry has been prepared. Please check your email
                    client to send the message.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-green-600">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>Redirecting to your email client...</span>
                  </div>
                </div>

                <button
                  onClick={closeSuccessToast}
                  className="flex-shrink-0 p-1 hover:bg-green-200/50 rounded-lg transition-colors text-green-600"
                  aria-label="Close notification"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative mt-3 w-full h-1 bg-green-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Toast */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-lg mx-4"
          >
            <div className="relative bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl shadow-2xl p-5 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-500"></div>

              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-200">
                    <span className="text-2xl">⚠️</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-red-800 uppercase tracking-wider">
                    Failed to Open Email
                  </h4>
                  <p className="text-sm text-red-700 mt-1 leading-relaxed">
                    Unable to open your email client. Please contact us directly
                    at{" "}
                    <a
                      href="mailto:gogastainless@gmail.com"
                      className="font-bold underline hover:text-red-900"
                    >
                      gogastainless@gmail.com
                    </a>
                  </p>
                </div>

                <button
                  onClick={closeErrorToast}
                  className="flex-shrink-0 p-1 hover:bg-red-200/50 rounded-lg transition-colors text-red-600"
                  aria-label="Close notification"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      {/* =============================== */}
      {/* HERO SECTION - WITH SAME OVERLAY AS HERO1 */}
      {/* =============================== */}
      <section
        className="relative w-full max-w-full overflow-hidden bg-[#102F3D] md:!bg-transparent h-[calc(100vw*0.417)] md:h-[calc(102vh-var(--navbar-total-height))]"
        style={{
          marginTop: "var(--navbar-total-height)",
          overflowX: "hidden",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={heroBg}
          alt="GOGA STAINLESS Hero Background"
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-center select-none"
          loading="eager"
        />

        {/* ================= SAME OVERLAY ON MOBILE & DESKTOP ================= */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#173f52]/80 via-[#173f52]/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#173f52]/40 via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10 z-10"></div>

        {/* ================= BOTTOM GRADIENT SHADOW ================= */}
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#173f52]/90 via-[#173f52]/40 to-transparent z-10"></div>

        {/* ================= TEXT CONTENT ================= */}
        <div className="absolute inset-0 flex items-end justify-start px-3 sm:px-4 md:px-12 lg:px-20 pb-4 sm:pb-6 md:pb-12 lg:pb-16 z-20">
          <div className="max-w-3xl w-full">
            {/* Company Name with Line */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
              <span className="w-6 sm:w-8 md:w-12 h-0.5 bg-[#E52713]"></span>
              <span className="text-[#E52713] text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-widest">
                GOGA STAINLESS
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] uppercase">
              Contact Us
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1.5 sm:mt-2 md:mt-3 lg:mt-4 max-w-2xl leading-relaxed">
              Your subtitle text goes here. Premium Quality Stainless Steel
              Products for Global Industries.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
              <Link
                to="/products"
                className="bg-[#E52713] hover:bg-[#B91F17] text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E52713]/25 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base"
              >
                Explore Products
                <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 hover:border-white text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 text-xs sm:text-sm md:text-base"
              >
                Get a Quote
              </Link>
            </div>

            {/* Bottom Section - Divider */}
            <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 pt-3 sm:pt-4 md:pt-5 lg:pt-6 border-t border-white/20">
              {/* Categories */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                <span className="text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[11px] font-extrabold uppercase tracking-wider">
                  QUALITY STAINLESS STEEL PRODUCTS
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                <span className="text-white sm:text-white/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium uppercase tracking-wider">
                  SHEETS & PLATES
                </span>
                <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">
                  |
                </span>
                <span className="text-white sm:text-white/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium uppercase tracking-wider">
                  FLANGES
                </span>
                <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">
                  |
                </span>
                <span className="text-white sm:text-white/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium uppercase tracking-wider">
                  FASTENERS
                </span>
              </div>

              {/* Material Grades */}
              <div className="mt-1.5 sm:mt-2 md:mt-3 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-white">S STEEL</span>
                  <span className="text-white sm:text-white/80">
                    04 / 316 / 321
                  </span>
                </div>
                <span className="text-white hidden sm:inline">|</span>
                <span className="text-white sm:hidden">•</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-white">DUPLEX STEEL</span>
                  <span className="text-white sm:text-white/80">
                    SAT 2205 / 2507
                  </span>
                </div>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="text-white/20 sm:hidden">•</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-white">TITANIUM</span>
                  <span className="text-white sm:text-white/80">
                    GRADE 2 / 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SLIDE INDICATOR ================= */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 text-white/50 text-xs sm:text-sm font-medium hidden md:block z-20">
          <span className="text-white">01</span>
          <span className="mx-1">/</span>
          <span>01</span>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
                Client Testimonials
              </span>
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#173F52] tracking-tight">
              What Our <span className="text-[#D92B20]">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#173F52] flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#173F52] text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#D92B20] font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm italic">
                  "{testimonial.review}"
                </p>
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#D92B20] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="w-full py-20 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
                Operational Routing Nodes
              </span>
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#173F52] tracking-tight">
              Corporate Directory
            </h2>
            <div className="w-16 h-1 bg-[#D92B20] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {/* Card 1 - Head Office */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#D92B20]/40 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D92B20] to-[#173F52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D92B20]/10 group-hover:bg-[#D92B20] transition-all duration-300">
                <Building2 className="h-7 w-7 text-[#D92B20] group-hover:text-white transition-all" />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#173F52] uppercase leading-tight group-hover:text-[#D92B20] transition-colors">
                Head Office &
                <br />
                Correspondence
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                GOGA STAINLESS
              </p>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#D92B20]/30 to-transparent"></div>

              <div className="mt-4 flex-1">
                <div className="flex items-start gap-3 text-sm text-slate-500">
                  <MapPin className="w-4 h-4 text-[#D92B20] flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Plot No-408/428, Har-Har Wala Bldg, House No-62A, 3rd Floor,
                    P.B. Marg, Mumbai-400004
                  </p>
                </div>
                <div className="mt-3 flex items-start gap-3 text-sm text-slate-500">
                  <Phone className="w-4 h-4 text-[#D92B20] flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="tel:+918452828260"
                      className="block hover:text-[#D92B20] transition-colors"
                    >
                      +91 845 282 8260
                    </a>
                    <a
                      href="tel:+9102266595141"
                      className="block hover:text-[#D92B20] transition-colors mt-0.5"
                    >
                      022-6659 5141
                    </a>
                  </div>
                </div>
                <div className="mt-3 flex items-start gap-3 text-sm text-slate-500">
                  <MessageCircle className="w-4 h-4 text-[#D92B20] flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="https://wa.me/918452828260"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-[#D92B20] transition-colors"
                    >
                      +91 845 282 8260
                    </a>
                    <a
                      href="https://wa.me/9102266595141"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-[#D92B20] transition-colors mt-0.5"
                    >
                      022-6659 5141
                    </a>
                  </div>
                </div>
                <div className="mt-3 flex items-start gap-3 text-sm text-slate-500">
                  <Mail className="w-4 h-4 text-[#D92B20] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:gogastainless@gmail.com"
                    className="hover:text-[#D92B20] transition-colors break-all"
                  >
                    gogastainless@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Manufacturing & Logistics */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#D92B20]/40 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D92B20] to-[#173F52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D92B20]/10 group-hover:bg-[#D92B20] transition-all duration-300">
                <Factory className="h-7 w-7 text-[#D92B20] group-hover:text-white transition-all" />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#173F52] uppercase leading-tight group-hover:text-[#D92B20] transition-colors">
                Manufacturing &
                <br />
                Logistics
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Heavy Industry Stockyards
              </p>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#D92B20]/30 to-transparent"></div>

              <div className="mt-4 flex-1">
                <div className="flex items-start gap-3 text-sm text-slate-500">
                  <MapPin className="w-4 h-4 text-[#D92B20] flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Plot No-408/428, Har-Har Wala Bldg, House No-62A, 3rd Floor,
                    P.B. Marg, Mumbai-400004
                  </p>
                </div>
                <div className="mt-3 flex items-start gap-3 text-sm text-slate-500">
                  <Phone className="w-4 h-4 text-[#D92B20] flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="tel:+918452828260"
                      className="block hover:text-[#D92B20] transition-colors"
                    >
                      +91 845 282 8260
                    </a>
                    <a
                      href="tel:+9102266595141"
                      className="block hover:text-[#D92B20] transition-colors mt-0.5"
                    >
                      022-6659 5141
                    </a>
                  </div>
                </div>
                <div className="mt-3 flex items-start gap-3 text-sm text-slate-500">
                  <Mail className="w-4 h-4 text-[#D92B20] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:gogastainless@gmail.com"
                    className="hover:text-[#D92B20] transition-colors break-all"
                  >
                    gogastainless@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Central Communications */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#D92B20]/40 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D92B20] to-[#173F52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D92B20]/10 group-hover:bg-[#D92B20] transition-all duration-300">
                <Globe2 className="h-7 w-7 text-[#D92B20] group-hover:text-white transition-all" />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#173F52] uppercase leading-tight group-hover:text-[#D92B20] transition-colors">
                Central
                <br />
                Communications
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Real-Time Routing Channels
              </p>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#D92B20]/30 to-transparent"></div>

              <div className="mt-4 flex-1 space-y-3">
                <a
                  href="https://wa.me/918452828260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col hover:text-[#D92B20] transition-colors group/link"
                >
                  <span className="text-xs text-[#D92B20] font-semibold uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <span className="text-sm text-slate-600 group-hover/link:text-[#D92B20] transition-colors">
                    +91 845 282 8260 / 022-6659 5141
                  </span>
                </a>

                <a
                  href="tel:+918452828260"
                  className="flex flex-col hover:text-[#D92B20] transition-colors group/link"
                >
                  <span className="text-xs text-[#D92B20] font-semibold uppercase tracking-wider">
                    Phone Numbers
                  </span>
                  <span className="text-sm text-slate-600 group-hover/link:text-[#D92B20] transition-colors">
                    +91 845 282 8260 / 022-6659 5141
                  </span>
                </a>

                <a
                  href="mailto:gogastainless@gmail.com"
                  className="flex flex-col hover:text-[#D92B20] transition-colors group/link"
                >
                  <span className="text-xs text-[#D92B20] font-semibold uppercase tracking-wider">
                    Secure Email
                  </span>
                  <span className="text-sm text-slate-600 group-hover/link:text-[#D92B20] transition-colors break-all">
                    gogastainless@gmail.com
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="w-full bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] shadow-2xl">
          {/* Left Side - Form */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
                Inquiry Form
              </span>
            </div>

            <h2 className="text-3xl uppercase md:text-4xl font-black text-[#173F52] tracking-tight">
              Transmit Technical
              <span className="text-[#D92B20] block mt-1">Inquiry</span>
            </h2>

            <div className="mt-4 rounded-xl bg-blue-50 border border-blue-200 p-3 text-blue-700 text-xs font-medium flex items-center gap-2">
              <span className="text-lg">📧</span>
              This will open your default email client with pre-filled
              information
            </div>

            <div className="mt-4 rounded-xl border border-[#D92B20]/20 bg-[#D92B20]/5 p-4 md:p-5 relative overflow-hidden flex items-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[#D92B20]/20">
                <Lock className="h-4 w-4 text-[#D92B20]" />
              </div>
              <div>
                <h3 className="font-bold text-[#173F52] uppercase tracking-wider text-sm">
                  Inquiry Routing Gateway
                </h3>
                <p className="text-slate-500 text-[11px] font-medium uppercase mt-0.5">
                  Secure Industrial Grade Communication Framework
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Representative Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#D92B20] focus:bg-white focus:ring-2 focus:ring-[#D92B20]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Phone Matrix Contact *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#D92B20] focus:bg-white focus:ring-2 focus:ring-[#D92B20]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="company@domain.com"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#D92B20] focus:bg-white focus:ring-2 focus:ring-[#D92B20]/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Component Specification
                  </label>
                  <input
                    type="text"
                    name="specification"
                    value={formData.specification}
                    onChange={handleChange}
                    placeholder="e.g. ASTM A312 TP304"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#D92B20] focus:bg-white focus:ring-2 focus:ring-[#D92B20]/20"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5 mt-1">
                  <label className="uppercase text-[11px] tracking-[0.2em] font-bold text-slate-500">
                    Detailed Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Specify dimensions, quantities, and operational environment..."
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800 outline-none transition-all resize-none placeholder:text-slate-400 focus:border-[#D92B20] focus:bg-white focus:ring-2 focus:ring-[#D92B20]/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-[#173F52] hover:bg-[#122a6e] py-3.5 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[#173F52]/20 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Preparing Email...
                  </>
                ) : (
                  <>
                    Execute Data Transmission
                    <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 via-blue-950 to-blue-600 p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center"
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right,#fff 1px,transparent 1px),
                  linear-gradient(to bottom,#fff 1px,transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-blue-300"></span>
                <span className="text-xs font-bold tracking-[0.25em] text-blue-200 uppercase">
                  Global Sales Desk
                </span>
              </div>

              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white">
                Global Sales
                <br />
                <span className="text-blue-200">Desk</span>
              </h2>

              <div className="mt-6 rounded-2xl border border-white/20 bg-blue-500/20 backdrop-blur-md p-6 shadow-2xl relative overflow-hidden group hover:border-white/30 hover:bg-blue-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl -mr-10 -mt-10"></div>

                <span className="inline-block rounded-md border border-blue-300/30 bg-blue-400/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-200">
                  INT_SALES_NODE
                </span>

                <h3 className="mt-3 text-xl font-bold tracking-wide text-white uppercase">
                  MR. MAHENDRA HATDIA
                </h3>
                <p className="text-blue-100 text-xs mt-1 uppercase tracking-wider font-medium">
                  Head of Operations
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href="tel:+918452828260"
                    className="flex items-center gap-3 text-blue-50 hover:text-white transition-all duration-300 group/link bg-white/10 p-2.5 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30"
                  >
                    <div className="bg-blue-400/40 p-2 rounded-lg text-blue-200 group-hover/link:bg-blue-400 group-hover/link:text-white transition-all duration-300">
                      <Phone size={16} />
                    </div>
                    <span className="font-medium tracking-wide text-sm">
                      +91 845 282 8260
                    </span>
                  </a>

                  <a
                    href="tel:+9102266595141"
                    className="flex items-center gap-3 text-blue-50 hover:text-white transition-all duration-300 group/link bg-white/10 p-2.5 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30"
                  >
                    <div className="bg-blue-400/40 p-2 rounded-lg text-blue-200 group-hover/link:bg-blue-400 group-hover/link:text-white transition-all duration-300">
                      <Phone size={16} />
                    </div>
                    <span className="font-medium tracking-wide text-sm">
                      022-6659 5141
                    </span>
                  </a>

                  <a
                    href="https://wa.me/918452828260"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-50 hover:text-white transition-all duration-300 group/link bg-white/10 p-2.5 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30"
                  >
                    <div className="bg-blue-400/40 p-2 rounded-lg text-blue-200 group-hover/link:bg-blue-400 group-hover/link:text-white transition-all duration-300">
                      <MessageCircle size={16} />
                    </div>
                    <span className="font-medium tracking-wide text-sm">
                      WhatsApp: +91 845 282 8260
                    </span>
                  </a>

                  <a
                    href="mailto:gogastainless@gmail.com"
                    className="flex items-center gap-3 text-blue-50 hover:text-white transition-all duration-300 group/link bg-white/10 p-2.5 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30"
                  >
                    <div className="bg-blue-400/40 p-2 rounded-lg text-blue-200 group-hover/link:bg-blue-400 group-hover/link:text-white transition-all duration-300">
                      <Mail size={16} />
                    </div>
                    <span className="font-medium tracking-wide text-sm">
                      gogastainless@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/20 bg-blue-500/20 backdrop-blur-md p-6 shadow-2xl group hover:border-white/30 hover:bg-blue-500/30 transition-all duration-300">
                <span className="inline-block rounded-md border border-blue-300/30 bg-blue-400/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-200">
                  SYS_AVAILABILITY
                </span>

                <h3 className="mt-3 text-lg font-bold uppercase tracking-wide text-white">
                  Operational Timeline
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/20 p-2 rounded-lg text-blue-200 mt-0.5">
                      <Clock3 size={16} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold tracking-wide">
                        Mon - Sat
                      </p>
                      <p className="text-blue-100 text-xs mt-0.5">
                        9:00 AM - 7:00 PM (IST)
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-medium text-blue-200 uppercase tracking-wider">
                    <span>Sunday</span>
                    <span className="px-2 py-1 rounded-full bg-red-500/30 text-red-200 text-[10px] border border-red-500/20">
                      System Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
                Geospatial Distribution Core
              </span>
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl uppercase font-black text-[#173F52]">
              Factory Coordinates Mapping
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12"
          >
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-4 rounded-xl bg-white px-5 py-3 shadow-2xl border border-slate-200 z-20">
              <img
                src={logo}
                alt="GOGA STAINLESS"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-sm font-extrabold text-[#173F52] uppercase">
                  GOGA STAINLESS
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  VERIFIED SUPPLY NODE
                </p>
              </div>
            </div>

            <div className="absolute -top-5 -left-5 w-8 h-8 border-l-4 border-t-4 border-[#D92B20] z-20"></div>
            <div className="absolute -bottom-5 -right-5 w-8 h-8 border-r-4 border-b-4 border-[#D92B20] z-20"></div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.344415865406!2d72.831571!3d18.9898411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce171d455555%3A0xa92b2e172cc31cf1!2sGOGA%20STAINLESS!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="620"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full"
                title="GOGA STAINLESS - Mumbai Office Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl bg-[#173F52] p-8 shadow-xl text-white"
          >
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-[#D92B20]" size={32} />
              <div>
                <h3 className="text-2xl font-bold uppercase text-white">
                  Head Office
                </h3>
                <p className="mt-3 leading-7 text-slate-300 text-sm">
                  Plot No-408, Har-Har Wala Bldg, Office No-62 3rd Floor, P.B.
                  Marg, Mumbai-400004, Maharashtra
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  <a
                    href="tel:+918452828260"
                    className="text-slate-300 hover:text-[#D92B20] transition-colors flex items-center gap-2"
                  >
                    <Phone size={14} /> +91 845 282 8260
                  </a>
                  <a
                    href="tel:+9102266595141"
                    className="text-slate-300 hover:text-[#D92B20] transition-colors flex items-center gap-2"
                  >
                    <Phone size={14} /> 022-6659 5141
                  </a>
                  <a
                    href="mailto:gogastainless@gmail.com"
                    className="text-slate-300 hover:text-[#D92B20] transition-colors flex items-center gap-2"
                  >
                    <Mail size={14} /> gogastainless@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//GOGA+STAINLESS,+Plot+No-408,+Har-Har+Wala+Bldg,+Office+No-62+3rd+Floor,+P.B.+Marg,+Mumbai-400+004,+Mumbai,+Maharashtra+400004/@19.4390303,72.8160861,14z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#D92B20] hover:bg-[#c08a1a] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D92B20]/25"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      {/* Warehouse Footer */}
      <section className="w-full py-4 bg-[#173F52] flex items-center justify-center border-t border-[#D92B20]/20">
        <h6 className="flex items-center gap-3 text-white text-sm md:text-base font-medium px-4 text-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D92B20] flex-shrink-0">
            <Diamond size={16} className="text-[#173F52] fill-[#173F52]" />
          </span>
          Operational Warehouse: Plot No-408/428, Har-Har Wala Bldg, House
          No-62A, 3rd Floor, P.B. Marg, Mumbai-400004
        </h6>
      </section>
    </>
  );
};

export default Contact;
