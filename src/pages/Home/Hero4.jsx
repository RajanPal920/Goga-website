// src/components/home/Hero4.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaIndustry,
  FaOilCan,
  FaFlask,
  FaShieldAlt,
  FaGlobe,
  FaAward,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteRight,
  FaChartLine,
  FaTruck,
  FaWarehouse,
  FaCogs,
} from "react-icons/fa";

import {
  adani,
  adityaBirla,
  cairn,
  environment,
  essar,
  godrej,
  health,
  hpGas,
  jindal,
  manufacturing,
  reliance,
  rpmexport,
  tataSteel,
  wipro,
  jsl,
  viz,
  sail,
  msl
} from "../../assets";

import {
  certifications,
  companylogos,
  countries,
  industriesData,
  logos,
  servicesData,
  smallCards,
  state,
  testimonials,
} from "../../data";

const Hero4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [counts, setCounts] = useState({
    materialGrades: 0,
    countries: 0,
    deliveries: 0,
    certified: 0,
    experience: 0,
  });
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const statsSectionRef = useRef(null);
  const industriesSectionRef = useRef(null);

  // Stats data - UPPERCASE labels
  const stats = [
    {
      key: "materialGrades",
      target: 50,
      label: "MATERIAL GRADES",
      icon: FaStar,
      suffix: "+",
    },
    {
      key: "countries",
      target: 20,
      label: "COUNTRIES SERVED",
      icon: FaGlobe,
      suffix: "+",
    },
    {
      key: "deliveries",
      target: 1000,
      label: "DELIVERIES",
      icon: FaTruck,
      suffix: "+",
    },
    {
      key: "certified",
      target: 100,
      label: "CERTIFIED MATERIAL",
      icon: FaAward,
      suffix: "+",
    },
    {
      key: "experience",
      target: 10,
      label: "YEARS EXPERIENCE",
      icon: FaChartLine,
      suffix: "+",
    },
  ];

  // Intersection Observer for Stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for Industries
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIndustriesVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (industriesSectionRef.current) {
      observer.observe(industriesSectionRef.current);
    }

    return () => {
      if (industriesSectionRef.current) {
        observer.unobserve(industriesSectionRef.current);
      }
    };
  }, []);

  // Counting animation for stats
  useEffect(() => {
    if (!isStatsVisible) return;

    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    const startValues = {
      materialGrades: 0,
      countries: 0,
      deliveries: 0,
      certified: 0,
      experience: 0,
    };

    const targetValues = {
      materialGrades: 50,
      countries: 20,
      deliveries: 1000,
      certified: 100,
      experience: 10,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        materialGrades: Math.min(
          Math.round(
            startValues.materialGrades +
              (targetValues.materialGrades - startValues.materialGrades) *
                progress,
          ),
          targetValues.materialGrades,
        ),
        countries: Math.min(
          Math.round(
            startValues.countries +
              (targetValues.countries - startValues.countries) * progress,
          ),
          targetValues.countries,
        ),
        deliveries: Math.min(
          Math.round(
            startValues.deliveries +
              (targetValues.deliveries - startValues.deliveries) * progress,
          ),
          targetValues.deliveries,
        ),
        certified: Math.min(
          Math.round(
            startValues.certified +
              (targetValues.certified - startValues.certified) * progress,
          ),
          targetValues.certified,
        ),
        experience: Math.min(
          Math.round(
            startValues.experience +
              (targetValues.experience - startValues.experience) * progress,
          ),
          targetValues.experience,
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isStatsVisible]);

  const getCount = (key) => counts[key] || 0;

  return (
    <>
      {/* =============================== */}
      {/* SECTION 1: THIRD-PARTY INSPECTION AGENCIES */}
      {/* =============================== */}
      <section className="w-full bg-[#173F52] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              QUALITY ASSURANCE FRAMEWORK
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            APPROVED THIRD-PARTY{" "}
            <span className="text-[#D92B20]">INSPECTION AGENCIES</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            OUR ENGINEERING COMPONENTS ARE UNIVERSALLY VERIFIED AND CERTIFIED BY
            GLOBAL METALLURGICAL AUTHORITIES.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="w-full max-w-6xl mx-auto border border-white/10 bg-[#173F52]/40 backdrop-blur-sm p-10 relative rounded-lg overflow-hidden">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D92B20]/50"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D92B20]/50"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D92B20]/50"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D92B20]/50"></div>

          <div className="w-full relative overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]">
              {logos.map((logo, index) => (
                <div
                  key={`group1-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]"
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <div
                  key={`group2-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 2: GLOBAL INDUSTRIAL CERTIFICATIONS */}
      {/* =============================== */}
      <section className="w-full bg-[#0d1f4a] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              QUALITY ASSURANCE PROTOCOL
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            GLOBAL INDUSTRIAL{" "}
            <span className="text-[#D92B20]">CERTIFICATIONS</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2 uppercase">
            OUR COMMITMENT TO ZERO-FAILURE PERFORMANCE IS BACKED BY GLOBALLY
            RECOGNIZED TRIPLE-STANDARD CERTIFICATIONS, ENSURING ABSOLUTE
            COMPLIANCE FOR HIGH-INTEGRITY INDUSTRIAL ENVIRONMENTS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto relative z-10">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-md border border-white/10 rounded-2xl p-8 pt-10 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D92B20]/30 hover:bg-white/5 hover:-translate-y-1 group min-h-[380px]"
            >
              <div className="mb-5 p-3.5 bg-[#D92B20]/10 rounded-xl border border-[#D92B20]/20 group-hover:bg-[#D92B20]/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold tracking-wide text-white mb-4 uppercase">
                {item.title}
              </h3>
              <div className="w-16 h-[2px] bg-[#D92B20]/30 mb-6 group-hover:bg-[#D92B20]/60 transition-colors duration-300"></div>
              <p className="text-slate-300 text-sm leading-relaxed mb-auto px-2 uppercase">
                {item.description}
              </p>
              <div className="mt-8 w-10 h-10 rounded-full bg-[#D92B20] flex items-center justify-center shadow-lg shadow-[#D92B20]/20 group-hover:scale-110 transition-transform duration-300">
                <FaCheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 3: STRATEGIC MANUFACTURER HERO */}
      {/* =============================== */}
      <section className="w-full pt-24 pb-12 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center relative overflow-hidden font-sans">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              GLOBAL METALLURGY STANDARDS
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto items-center justify-center">
          <h2 className="text-4xl lg:text-5xl font-black text-[#173F52] uppercase leading-[1.05] tracking-tighter">
            STRATEGIC MANUFACTURER OF <br /> HIGH-YIELD
          </h2>
          <h3 className="text-2xl md:text-5xl font-medium text-[#D92B20] uppercase leading-tight tracking-tight mt-2">
            INDUSTRIAL INFRASTRUCTURE <br /> COMPONENTS
          </h3>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 4: INJECTED METRIC FEATURE GRID */}
      {/* =============================== */}
      <section className="w-full bg-[#f8fafc] py-16 px-6 md:px-12 lg:px-24 font-sans flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col items-start justify-center flex-1 min-h-[200px] hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#D92B20]/10 flex items-center justify-center mb-6">
                <FaShieldAlt className="w-6 h-6 text-[#D92B20]" />
              </div>
              <p className="text-slate-600 font-medium text-[15px] md:text-base leading-relaxed text-left uppercase">
                GOGA STAINLESS COMMANDS SYSTEMIC QUALITY
                CONTROL OVER A DIVERSE INVENTORY OF CRITICAL PIPELINE
                CONFIGURATIONS, FORGED STEEL ASSEMBLIES, STRUCTURAL FASTENERS
                AND HEAVY-DUTY PLATES.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col items-start justify-center flex-1 min-h-[200px] hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#D92B20]/10 flex items-center justify-center mb-6">
                <FaCogs className="w-6 h-6 text-[#D92B20]" />
              </div>
              <p className="text-slate-600 font-medium text-[15px] md:text-base leading-relaxed text-left uppercase">
                ENGINEERED FOR ENERGY INFRASTRUCTURE, CHEMICAL PROCESSING AND
                POWER GENERATION SECTORS WHERE OPERATIONAL RELIABILITY IS
                CRITICAL.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full content-center">
            {smallCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-6 rounded-2xl hover:border-[#D92B20] shadow-sm hover:shadow-md flex flex-col items-start justify-center min-h-[120px] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <h4 className="text-[#173F52] font-black text-sm tracking-wider uppercase">
                    {card.title}
                  </h4>
                </div>
                <p className="text-slate-500 font-medium text-[13px] pl-8 uppercase">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 5: STATS BANNER WITH COUNTING ANIMATION */}
      {/* =============================== */}
      <section ref={statsSectionRef} className="px-6 md:px-16 lg:px-24 mb-10">
        <div className="max-w-7xl mx-auto bg-[#173F52] rounded-3xl p-10 grid grid-cols-2 md:grid-cols-5 gap-6 border border-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const count = getCount(stat.key);
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center border-r border-white/10 last:border-r-0 px-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-[#D92B20] mb-2">
                  <Icon className="w-6 h-6" />
                </div>
                <h5 className="text-3xl md:text-4xl font-bold text-[#D92B20] transition-all duration-300">
                  {count}
                  <span className="text-lg ml-0.5">{stat.suffix}</span>
                </h5>
                <p className="text-white/80 text-xs md:text-sm font-medium mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
                {/* Progress bar */}
                <div className="w-full max-w-[80px] h-0.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-[#D92B20] rounded-full transition-all duration-1000"
                    style={{
                      width: isStatsVisible
                        ? `${(count / stat.target) * 100}%`
                        : "0%",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 6: INDUSTRY SECTOR GRID WITH ANIMATION */}
      {/* =============================== */}
      <section
        ref={industriesSectionRef}
        className="w-full bg-[#173F52] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              GLOBAL INDUSTRIAL ECOSYSTEM
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            INDUSTRIES WE <span className="text-[#D92B20]">POWER</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2 uppercase">
            DELIVERING CERTIFIED INDUSTRIAL COMPONENTS TO MISSION-CRITICAL
            SECTORS WORLDWIDE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
          {industriesData.map((card, index) => {
            const Icon = card.icon || FaIndustry;
            return (
              <div
                key={card.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#173F52]/60 shadow-xl transition-all duration-700 hover:-translate-y-2 hover:border-[#D92B20]/40 ${
                  isIndustriesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D92B20] shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#D92B20] uppercase">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300 uppercase">
                      {card.subtitle}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D92B20]">
                      INDUSTRY SECTOR
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 7: STRATEGIC PARTNERSHIPS */}
      {/* =============================== */}
      <section className="w-full text-[#173F52] py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              TRUSTED SUPPLY NETWORK
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#173F52] uppercase leading-[1.15]">
            STRATEGIC <span className="text-[#D92B20]">PARTNERSHIPS</span>
          </h1>
        </div>

        <div className="w-full max-w-6xl mx-auto bg-[#173F52] backdrop-blur-sm p-10 relative rounded-lg overflow-hidden border border-white/10">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D92B20]/50"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D92B20]/50"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D92B20]/50"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D92B20]/50"></div>

          <div className="w-full relative overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]">
              {companylogos.map((logo, index) => (
                <div
                  key={`group1-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex gap-6 items-center shrink-0 min-w-full pr-6 animate-[marquee_25s_linear_infinite]"
              aria-hidden="true"
            >
              {companylogos.map((logo, index) => (
                <div
                  key={`group2-${index}`}
                  className="w-40 h-24 bg-white flex items-center justify-center p-4 shadow-inner rounded-lg hover:scale-105 transition-transform duration-300 select-none shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 8: SERVICES ACCORDION */}
      {/* =============================== */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
                OUR SERVICES
              </span>
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#173F52] uppercase">
              ENGINEERING <span className="text-[#D92B20]">EXCELLENCE</span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-500 leading-relaxed uppercase">
              PRECISION MANUFACTURING BACKED BY TECHNICAL EXPERTISE, RIGOROUS
              INSPECTION, AND COMPLETE SUPPLY-CHAIN TRANSPARENCY.
            </p>
          </div>

          <div className="flex h-[600px] bg-[#173F52] rounded-2xl overflow-hidden">
            {servicesData.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={tab.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative cursor-pointer transition-all duration-700 ease-in-out border-r border-white/10 last:border-r-0 overflow-hidden ${
                    isActive
                      ? "flex-[5] bg-white/5"
                      : "flex-[1.2] bg-transparent hover:bg-white/5"
                  }`}
                >
                  <div className="absolute top-7 left-7 text-[#D92B20] font-bold tracking-widest z-20">
                    {tab.id}
                  </div>
                  <div className="absolute top-7 right-7 text-white/30 text-2xl font-light">
                    +
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col justify-center px-14 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10 pointer-events-none"
                    }`}
                  >
                    <div className="w-12 h-12 border-l-4 border-t-4 border-[#D92B20] mb-8"></div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white whitespace-pre-line leading-tight uppercase">
                      {tab.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#D92B20] to-transparent my-8"></div>
                    <p className="max-w-md text-slate-300 leading-8 text-lg uppercase">
                      {tab.desc}
                    </p>
                  </div>

                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-between py-10 transition-all duration-500 ${
                      !isActive
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div></div>
                    <div
                      className="uppercase font-bold tracking-[0.3em] text-white/60 text-sm"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {tab.title.replace("\n", " ")}
                    </div>
                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 9: GLOBAL FOOTPRINT */}
      {/* =============================== */}
      <section className="w-full bg-[#173F52] text-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT - Equal width */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#D92B20]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
                SUPPLY CHAIN EXCELLENCE
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight uppercase">
              GLOBAL FOOTPRINT <br />
              <span className="text-[#D92B20]">& DOMESTIC REACH</span>
            </h1>

            <p className="mt-6 text-slate-300 leading-8 uppercase text-sm md:text-base">
              GOGA STAINLESS OPERATES A SOPHISTICATED
              INDUSTRIAL SUPPLY CHAIN, SERVING AS A CRITICAL MATERIAL PARTNER
              FOR REFINERIES, PETROCHEMICAL PLANTS, AND POWER STATIONS ACROSS
              50+ COUNTRIES AND EVERY MAJOR INDUSTRIAL HUB IN INDIA.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-4xl font-bold text-[#D92B20]">50+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  EXPORT COUNTRIES
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#D92B20]">100+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  DOMESTIC HUBS
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#D92B20]">500+</h3>
                <p className="text-sm uppercase text-white mt-2">
                  GUARANTEED RESPONSE
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - Equal width with full image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D92B20]/10">
              {/* Gradient Border */}
              <div className="absolute inset-0 p-[3px] bg-gradient-to-r from-[#D92B20] via-[#D92B20]/50 to-[#173F52] rounded-2xl"></div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-contain bg-white transition-transform duration-700 hover:scale-105"
                  src={rpmexport}
                  alt="GOGA STAINLESS"
                />

                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F52]/70 via-[#173F52]/20 to-transparent"></div>

                {/* Overlay Information Cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  <div className="bg-[#173F52]/90 backdrop-blur-md rounded-xl px-4 py-3 border border-[#D92B20]/30 flex-1 min-w-[100px]">
                    <p className="text-[#D92B20] text-lg font-bold">50+</p>
                    <p className="text-white/80 text-[10px] uppercase tracking-wider">
                      Countries Served
                    </p>
                  </div>
                  <div className="bg-[#173F52]/90 backdrop-blur-md rounded-xl px-4 py-3 border border-[#D92B20]/30 flex-1 min-w-[100px]">
                    <p className="text-[#D92B20] text-lg font-bold">100%</p>
                    <p className="text-white/80 text-[10px] uppercase tracking-wider">
                      Quality Assured
                    </p>
                  </div>
                  <div className="bg-[#173F52]/90 backdrop-blur-md rounded-xl px-4 py-3 border border-[#D92B20]/30 flex-1 min-w-[100px]">
                    <p className="text-[#D92B20] text-lg font-bold">24/7</p>
                    <p className="text-white/80 text-[10px] uppercase tracking-wider">
                      Global Support
                    </p>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-[#D92B20] text-[#173F52] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                  ISO 9001:2015
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D92B20]/50"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D92B20]/50"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-[#D92B20]/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#D92B20]/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 10: DOMESTIC SUPPLY CITIES */}
      {/* =============================== */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              NATIONAL INFRASTRUCTURE SUPPORT
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#173F52] uppercase leading-[1.15]">
            STRATEGIC <span className="text-[#D92B20]">DOMESTIC SUPPLY</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#173F52] to-[#D92B20] rounded-full"></div>

          <p className="text-[#173F52]/70 text-sm md:text-base max-w-2xl leading-relaxed mt-2 uppercase">
            GOGA STAINLESS SERVES AS A CRITICAL MATERIAL
            PARTNER FOR INDIA'S PREMIER INDUSTRIAL HUBS, DELIVERING
            HIGH-INTEGRITY ALLOYS FOR ZERO-FAILURE PERFORMANCE.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {state.map((item, index) => (
            <button
              key={index}
              className="py-3 px-6 rounded-full border border-[#D92B20]/30 bg-white text-[#173F52] font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D92B20] hover:to-[#c08a1a] hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-[#D92B20]/20 hover:-translate-y-1 uppercase"
            >
              <span className="text-[#D92B20] text-xs group-hover:text-white">
                ◆
              </span>
              {item.name}
            </button>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 11: INTERNATIONAL EXPORT NETWORK */}
      {/* =============================== */}
      <section className="w-full bg-[#173F52] text-white py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              GLOBAL TRADE AUTHORITY
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            INTERNATIONAL <span className="text-[#D92B20]">EXPORT NETWORK</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#D92B20] to-white/30 rounded-full"></div>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed mt-2 uppercase">
            AS A PREMIER ISO CERTIFIED MANUFACTURER, GOGA STAINLESS PVT.
            LTD. MAINTAINS A HIGH-VELOCITY EXPORT CORRIDOR, DELIVERING
            PRECISION-ENGINEERED PIPING SOLUTIONS TO OVER 50 COUNTRIES
            WORLDWIDE.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {countries.map((country) => (
            <button
              key={country.name}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D92B20] hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D92B20] to-[#173F52] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-white">
                <span
                  className={`fi fi-${country.code}`}
                  style={{
                    width: "28px",
                    height: "20px",
                    display: "inline-block",
                  }}
                />
              </div>
              <div className="relative z-10 flex flex-col items-start">
                <span className="font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white uppercase">
                  {country.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-[#D92B20]">
                  EXPORT MARKET
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 12: TESTIMONIALS */}
      {/* =============================== */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="flex flex-col justify-center items-center gap-5 max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              MARKET TRUST
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#173F52] uppercase">
            INDUSTRIAL <span className="text-[#D92B20]">IMPACT</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#173F52] to-[#D92B20] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 rounded-2xl shadow-sm p-8 pt-16 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-[#D92B20]/30"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:left-6 group-hover:translate-x-0">
                <div className="w-14 h-14 bg-[#D92B20] rounded-xl flex items-center justify-center shadow-lg shadow-[#D92B20]/20">
                  <FaQuoteRight className="w-6 h-6 text-white" />
                </div>
              </div>

              <p className="text-slate-600 italic leading-8 text-base transition-colors duration-500 group-hover:text-[#173F52] uppercase">
                "
                {item.text ||
                  "GOGA STAINLESS CONSISTENTLY DELIVERS CERTIFIED PIPING COMPONENTS WITH COMPLETE DOCUMENTATION AND TRACEABILITY. THEIR RESPONSIVENESS AND COMMITMENT TO QUALITY HAVE MADE THEM A DEPENDABLE SOURCING PARTNER."}
                "
              </p>

              <div className="w-full h-px bg-slate-200 my-8 transition-colors duration-500 group-hover:bg-[#D92B20]/30"></div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-[#D92B20] group-hover:border-[#D92B20]">
                  <span className="text-[#D92B20] text-xl font-bold transition-colors duration-500 group-hover:text-white uppercase">
                    {item.initials || "JM"}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#173F52] uppercase transition-colors duration-500 group-hover:text-[#D92B20]">
                    {item.name}
                  </h3>
                  <p className="text-[#D92B20] uppercase tracking-[0.15em] text-xs font-semibold mt-1">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CSS keyframe configuration */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default Hero4;
