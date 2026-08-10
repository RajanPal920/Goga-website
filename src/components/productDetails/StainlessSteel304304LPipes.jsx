import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Sample image imports (replace with your actual image paths)
import productImage from "../../assets/images/productImage/pipes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Stock Availability Images
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";
import efwImage from "../../assets/images/stock/efw.jpg";
import electropolishImage from "../../assets/images/stock/electropolish.jpg";
import hollowImage from "../../assets/images/stock/hollow.jpg";

const StainlessSteel304304LPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Stainless Steel 304 / 304L Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A312 / ASME SA312 Stainless Steel 304 & 304L Pipes – Seamless, Welded, ERW & EFW Solutions for Critical Industrial Applications",

    technicalOverview: {
      title: "Stainless Steel 304 / 304L Pipes: Technical Overview",
      description:
        "Raymond Ispat India is a premier manufacturer, supplier, and stockist of high-precision Stainless Steel 304 and 304L Pipes in Mumbai, offering versatile solutions for diverse industrial landscapes. Our SS 304 pipes are engineered to withstand extreme weather conditions and reactive compounds, featuring a solid solution state that ensures maximum plasticity and toughness. For projects requiring extensive fabrication, our SS 304L variant contains less than 0.03 percent carbon, effectively preventing carbide buildup during welding and eliminating the need for post-weld annealing. These pipes maintain exceptional tensile properties and structural integrity even at cryogenic temperatures as low as -180 degrees Celsius, making them ideal for thermal and high-pressure environments. As a leading SS pipe supplier in India, we provide a comprehensive range of ASTM A312 and ASME SA312 compliant products, including seamless, welded, ERW, and EFW pipes in round, square, and rectangular profiles. We maintain a ready stock of Jindal Stainless Steel pipes and custom-manufactured hollow sections, ensuring competitive pricing and rapid dispatch from our Mumbai hub. Each pipe is produced using ultra-modern machinery and undergoes rigorous destructive and non-destructive testing by our expert teams to guarantee mechanical perfection and a rigid structure.",
    },

    keyFeatures: [
      "Excellent corrosion resistance in various environments",
      "High strength and durability at extreme temperatures",
      "Superior weldability and formability",
      "Low carbon content in 304L prevents sensitization",
      "Maintains structural integrity at cryogenic temperatures",
      "Compliant with ASTM A312 and ASME SA312 standards",
      "Available in seamless, welded, ERW, and EFW forms",
      "Rigorous testing ensures mechanical perfection",
    ],

    applications: [
      "Petroleum and petrochemical industry",
      "Sugar and pulp & paper processing",
      "Shipbuilding and marine applications",
      "Food and beverage processing",
      "Aerospace and defense",
      "Energy production",
      "Chemical processing plants",
      "Heat exchangers and pressure vessels",
    ],

    stockAvailability: {
      seamless: {
        title: "SS 304/304L Seamless Pipes",
        image: seamlessImage,
        items: [
          "SS 304 Seamless Piping",
          "Stainless Steel 304L Thin Wall Seamless Pipes",
          "ANSI B36.10M 304 Seamless Pipe",
          "ASME SA312 Stainless Steel 304L Seamless Pipes",
          "ASTM A312 Stainless Steel 304 Seamless Pipe",
        ],
      },
      welded: {
        title: "SS 304/304L Welded Pipes",
        image: weldedImage,
        items: [
          "ASTM A312 Stainless Steel 304L Welded Pipe",
          "ANSI B36.10M 304 Welded Pipe",
          "ASME SA312 Stainless Steel 304 Welded Pipes",
          "SS 304L Thin Wall Welded Pipes",
          "SS 304 Welded Pipe",
        ],
      },
      erw: {
        title: "SS 304/304L ERW Pipes",
        image: erwImage,
        items: [
          "ANSI B36.10M 304L ERW Pipe",
          "SS 304 Electric Resistance Welded Pipe",
          "Stainless Steel 304L ERW Pipe",
          "ASTM A312 Stainless Steel 304 ERW Pipe",
        ],
      },
      efw: {
        title: "SS 304/304L EFW Pipes",
        image: efwImage,
        items: [
          "SS 304 EFW Pipes",
          "Stainless Steel 304L EFW Pipe",
          "ASTM A312 Stainless Steel 304 EFW Pipe",
          "SS 304L Electric Fusion Welding Pipe",
          "ANSI B36.10M 304 EFW Pipe",
          "ASME SA312 Stainless Steel 304L EFW Pipes",
        ],
      },
      electropolish: {
        title: "SS 304/304L Electropolish Pipes",
        image: electropolishImage,
        items: [
          "Stainless Steel 304 Electropolish Pipe",
          "SS 304L Electropolish Pipes",
          "SS 304 Thin Wall Electropolish Pipes",
          "ASTM A312 Stainless Steel 304L Electropolish Pipe",
        ],
      },
      hollow: {
        title: "SS 304/304L Hollow Pipes",
        image: hollowImage,
        items: [
          "Stainless Steel 304 Square Hollow Pipe",
          "Stainless Steel 304L Round Hollow Pipe",
          "Stainless Steel 304 Hollow Pipe",
          "ANSI B36.10M 304L Hollow Pipe",
          "SS 304 Hollow Section Pipes",
          "ASME SA312 Stainless Steel 304L Hollow Pipes",
        ],
      },
    },

    equivalentGrades: [
      {
        standard: "SS 304",
        werkstoff: "1.4301",
        uns: "S30400",
        jis: "SUS 304",
        bs: "304S31",
        gost: "08X18H10",
        afnor: "Z7CN18-09",
        en: "X5CrNi18-10",
      },
      {
        standard: "SS 304L",
        werkstoff: "1.4306 / 1.4307",
        uns: "S30403",
        jis: "SUS 304L",
        bs: "3304S11",
        gost: "03X18H11",
        afnor: "Z3CN18-10",
        en: "X2CrNi18-9 / X2CrNi19-11",
      },
    ],

    chemicalComposition: [
      {
        grade: "SS 304",
        c: "0.08 max",
        mn: "2 max",
        si: "0.75 max",
        p: "0.045 max",
        s: "0.030 max",
        cr: "18 – 20",
        ni: "8 – 11",
      },
      {
        grade: "SS 304L",
        c: "0.035 max",
        mn: "2.0 max",
        si: "1.0 max",
        p: "0.045 max",
        s: "0.03 max",
        cr: "18 – 20",
        ni: "8 – 13",
      },
    ],

    mechanicalProperties: [
      {
        grade: "304 / 304L",
        density: "8.0 g/cm3",
        meltingPoint: "1400 °C (2550 °F)",
        tensileStrength: "Psi – 75000, MPa – 515",
        yieldStrength: "Psi – 30000, MPa – 205",
        elongation: "35 %",
      },
    ],

    weightChart: [
      {
        nps: "32 (800)",
        weight: "84.085 (126.032)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.025 (6.035)",
      },
      {
        nps: "32 (800)",
        weight: "95.028 (141.09)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0281 (7.014)",
      },
      {
        nps: "32 (800)",
        weight: "105.069 (157.025)",
        sch: "10",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "32 (800)",
        weight: "116.041 (173.035)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0344 (8.074)",
      },
      {
        nps: "32 (800)",
        weight: "126.078 (188.083)",
        sch: "STD",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "32 (800)",
        weight: "137.012 (204.009)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0406 (10.031)",
      },
      {
        nps: "32 (800)",
        weight: "147.078 (220.01)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0438 (11.013)",
      },
      {
        nps: "32 (800)",
        weight: "158.008 (235.029)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0469 (11.091)",
      },
      {
        nps: "32 (800)",
        weight: "168.037 (250.065)",
        sch: "20",
        od: "32.00 (813)",
        id: "XS",
        wt: "0.05 (12.07)",
      },
      {
        nps: "34 (850)",
        weight: "90.02 (134.031)",
        sch: "-",
        od: "34.00 (864)",
        id: "-",
        wt: "0.025 (6.035)",
      },
      {
        nps: "34 (850)",
        weight: "101.029 (150.088)",
        sch: "-",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0281 (7.014)",
      },
      {
        nps: "34 (850)",
        weight: "112.036 (167.021)",
        sch: "10",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "34 (850)",
        weight: "123.077 (184.034)",
        sch: "-",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0344 (8.074)",
      },
      {
        nps: "34 (850)",
        weight: "134.079 (200.082)",
        sch: "STD",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "36 (900)",
        weight: "95.054 (142.014)",
        sch: "-",
        od: "36.00 (914)",
        id: "-",
        wt: "0.025 (6.035)",
      },
      {
        nps: "36 (900)",
        weight: "107.03 (159.068)",
        sch: "-",
        od: "36.00 (914)",
        id: "-",
        wt: "0.0281 (7.014)",
      },
      {
        nps: "36 (900)",
        weight: "119.003 (176.097)",
        sch: "10",
        od: "36.00 (914)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "36 (900)",
        weight: "131.012 (195.012)",
        sch: "-",
        od: "36.00 (914)",
        id: "-",
        wt: "0.0344 (8.074)",
      },
      {
        nps: "36 (900)",
        weight: "142.081 (212.057)",
        sch: "STD",
        od: "36.00 (914)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "38 (950)",
        weight: "125.07 (186.094)",
        sch: "-",
        od: "38.00 (965)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "38 (950)",
        weight: "138.047 (206.011)",
        sch: "-",
        od: "38.00 (965)",
        id: "-",
        wt: "0.0344 (8.074)",
      },
      {
        nps: "38 (950)",
        weight: "150.083 (224.056)",
        sch: "STD",
        od: "38.00 (965)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
    ],

    specifications: [
      {
        standard: "ASTM A814",
        description:
          "This specification covers two classes of flanged and cold-bending quality cold-worked straight-seam single or double welded austenitic steel pipe intended for high-temperature and general corrosive services.",
      },
      {
        standard: "ASTM A358",
        description:
          "This specification includes electric-fusion-welded austenitic chromium-nickel Stainless Steel 304 Seamless pipe.",
      },
      {
        standard: "ASTM A813",
        description:
          "This specification covers two classes of fit-up and alignment quality straight-seam single- or double-welded austenitic steel pipe intended for high-temperature and general corrosive service.",
      },
    ],

    supplyRange: [
      {
        product: "Stainless Steel 304 Seamless Round Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Stainless Steel 304L Seamless Square Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "12.7 * 12.7 to 300 * 300",
      },
      {
        product: "Stainless Steel 304 Seamless Rectangular Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "Stainless Steel 304 Seamless Colour Coated Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Stainless Steel 304 Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product: "Stainless Steel 304L Seamless Electropolished Pipes/Tubes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Stainless Steel 304 Seamless Slot Round Pipe/Tube",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
    ],

    priceRange: [
      {
        diameterA: "1/8",
        diameterB: "6",
        od: "10.03",
        weight: "0.027",
        wall: "1.2",
        price: "80.5 – 110",
        pricekg: "300 – 400",
      },
      {
        diameterA: "1/4",
        diameterB: "8",
        od: "13.7",
        weight: "0.049",
        wall: "1.65",
        price: "110 – 200",
        pricekg: "200 – 300",
      },
      {
        diameterA: "3/8",
        diameterB: "10",
        od: "17.2",
        weight: "0.063",
        wall: "1.65",
        price: "169 – 250",
        pricekg: "250 – 320",
      },
      {
        diameterA: "1/2",
        diameterB: "15",
        od: "21.3",
        weight: "1.02",
        wall: "2.11",
        price: "234.8 – 289",
        pricekg: "220 – 320.5",
      },
      {
        diameterA: "3/4",
        diameterB: "20",
        od: "26.7",
        weight: "1.3",
        wall: "2.11",
        price: "300 – 350",
        pricekg: "220 – 300",
      },
      {
        diameterA: "1",
        diameterB: "25",
        od: "33.4",
        weight: "2.13",
        wall: "2.77",
        price: "459.9 – 600",
        pricekg: "200 – 400",
      },
    ],

    specializedProducts: [
      "304 Welded Stainless Steel Pipe",
      "TP304L Large Diameter Seamless Pipe",
      "INOX 1.4301 Pipe Exporter",
      "304 Austenitic Stainless Steel Pipe",
      "SS 304L Mirror Polish Seamless Pipes",
      "304L SS Square Pipes Dealer",
      "SS 304 Schedule 80 Pipe",
      "ASME SA312 SS 304 Cold Drawn Pipes",
      "ASTM A312 304 Pipes at Best Price",
      "SS 304 Hexagonal Pipes Supplier",
      "Suppliers of 304L Stainless ERW Pipes",
      "SS 304 Pipes Supplier in Mumbai",
      "SS 304L Pipes Manufacturer in India",
      "SS 1.4306 Pipe Cut To Size",
      "SS 304 Customized Pipes",
      "304L Stainless Steel Pipe",
      "304 Welded Stainless Steel Pipe",
      "SS 304L Welded Pipes Exporter",
      "304L SS ERW Pipe Stockholder",
      "SS 304L Pipes Supplier",
      "Type 304 Stainless Hollow Pipes",
      "ASTM A312 SS 304 Square Pipes",
      "304L Stainless Steel Pipe Supplier",
      "Stainless Steel 304L Oval Pipes",
      "SS 304 Hydraulic Pipes Dealer",
      "SS 304 Polished Pipe",
      "SS Grade 304L Industrial Pipes",
      "304 SS Custom Pipe",
      "SS 304L Thin Wall Pipe Stockists",
      "304L SS Decorative Pipes",
      "A312 SS Grade 304 Seamless Pipes",
      "304 Welded Stainless Steel Pipe",
      "AISI 304 Stainless Steel Welded Pipe",
      "Stainless Steel 304 Pipes Stockist",
    ],

    relatedSearches: [
      "Astm A312 Tp304l Pipe",
      "Asme Sa312 Tp 304l Stainless Steel Pipe",
      "Stainless Steel 304l Pipe Price Per Kg In India",
      "Ss 304 Erw Pipe Supplier",
      "Astm A312 Tp304l Seamless Pipe",
      "Stainless Steel 304 Seamless Pipe Supplier",
      "304 Stainless Steel Threaded Pipe",
      "Ss 304l Pipe Supplier In Mumbai",
      "Jindal Ss 304 Pipe Price List",
      "Astm A312 Tp304 Uns S30400 Pipe",
      "Astm A312 Tp304l Seamless Pipe",
      "Ss 304 Pipe Price Per Meter",
      "Aisi 304 Seamless Pipe Stockist",
      "16 Gauge 304 Stainless Steel Pipe",
      "Jindal SS 304 Pipe Price List",
      "304l Stainless Steel Pipe Price List",
      "Stainless Steel 304 Pipe Price Per Kg In India",
      "Stainless Steel 304 Pipe Price List In India",
      "Ss 304l Pipe Chemical Composition",
      "Ss 1.4307 Square Pipe Suppliers In Gujarat",
      "SS 304 Rectangular Pipe View Schedule Chart",
      "Stainless Steel 304l Pipe Supplier In India",
      "Stainless Steel 304 Pipe Catalogue",
      "Stainless Steel 304 Pipe Weight Per Meter",
      "Stainless Steel Pipe Price 20 Feet",
      "Stainless Steel 304 Pipe Per Kg",
      "Stainless Steel 304l Seamless Pipes Supplier In India",
      "3 Inch 304 Stainless Steel Pipe Manufacturers",
      "Austenitic Stainless Steel 304 Pipes",
      "Stainless Steel 304 Efw Pipe Supplier",
      "304 Stainless Steel Pipe In Pune",
      "304l Stainless Steel Pipe Dimensions",
      "Cost Of 304 Stainless Steel Pipe",
      "Stainless Steel 304 Pipe Roughness",
      "Jindal Ss 304 Welded Pipe Exporter",
      "Ss 304 Seamless Pipe Exporter",
      "Stainless Steel Pipe Grade 304l Price List",
    ],

    // ===============================
    // OUR PRODUCTS - With proper routes
    // ===============================
    ourProducts: [
      { name: "Coils", slug: "coils" },
      { name: "Pipes", slug: "pipes" },
      { name: "Plates", slug: "plates" },
      { name: "Round Bars", slug: "round-bars" },
      { name: "Sheets", slug: "sheets" },
      { name: "Tubes", slug: "tubes" },
      { name: "Wires", slug: "wires" },
      { name: "Industrial Flanges", slug: "flanges" },
      { name: "Buttweld Fittings", slug: "buttweld-fittings" },
      { name: "Angle & Channels", slug: "angle-channels" },
      { name: "Forged Fittings", slug: "forged-fittings" },
      { name: "Industrial Fasteners", slug: "fasteners" },
      { name: "Industrial Valves", slug: "valves" },
      { name: "Patta & Patti", slug: "patta-patti" },
      { name: "Industrial Rings", slug: "rings" },
      { name: "Industrial Circles", slug: "circles" },
      { name: "Industrial Strips", slug: "strips" },
    ],

    // ===============================
    // SHOP BY MATERIAL - With proper routes
    // ===============================
    shopByMaterial: [
      { name: "Copper Nickel", slug: "copper-nickel" },
      { name: "Duplex Steel", slug: "duplex-steel" },
      { name: "Hastelloy", slug: "hastelloy" },
      { name: "Incoloy", slug: "incoloy" },
      { name: "Inconel", slug: "inconel" },
      { name: "Monel", slug: "monel" },
      { name: "Nickel Alloy", slug: "nickel-alloy" },
      { name: "Other Materials", slug: "other-materials" },
      { name: "Sanicro", slug: "sanicro" },
      { name: "Special Materials", slug: "special-materials" },
      { name: "Stainless Steel", slug: "stainless-steel" },
      { name: "Titanium", slug: "titanium" },
    ],
    countries: countries,
    cities: state,
  };

  // ===============================
  // HELPER COMPONENTS
  // ===============================

  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold text-[#173F52] mb-6">{children}</h2>
  );

  const Table = ({ headers, rows }) => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const ChipList = ({ items }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-200"
        >
          {item}
        </span>
      ))}
    </div>
  );

  // ===============================
  // MAIN COMPONENT
  // ===============================

  return (
    <div className="bg-gray-50 min-h-screen mt-[10%]">
      {/* =============================== */}
      {/* HERO BANNER */}
      {/* =============================== */}
      <div
        className="relative h-90 sm:h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#173F52]/80"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {productData.title}
            </h1>
            <p className="text-lg text-gray-200 mt-2 max-w-4xl">
              {productData.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* =============================== */}
      {/* MAIN CONTENT - LAYOUT WITH SIDEBAR */}
      {/* =============================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* =============================== */}
          {/* LEFT COLUMN - PRODUCT DETAILS */}
          {/* =============================== */}
          <div className="lg:col-span-8">
            {/* Product Image */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-1/3">
                <img
                  src={productImage}
                  alt={productData.title}
                  className="w-full h-60 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-[#173F52] mb-4">
                  {productData.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {productData.technicalOverview.description}
                </p>
              </div>
            </div>

            {/* Technical Overview */}
            <section className="mb-8">
              <SectionTitle>{productData.technicalOverview.title}</SectionTitle>
              <p className="text-gray-700 leading-relaxed">
                {productData.technicalOverview.description}
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-8">
              <SectionTitle>Key Features & Benefits</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {productData.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
                  >
                    <span className="text-[#D92B20] text-lg">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>Applications</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {productData.applications.map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
                  >
                    <span className="text-[#D92B20] text-lg">▸</span>
                    <span className="text-gray-700 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Stock Availability with Images */}
            <section className="mb-8">
              <SectionTitle>
                Stock Availability of Stainless Steel 304 / 304L Pipes
              </SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(productData.stockAvailability).map(
                  ([key, stock]) => (
                    <div
                      key={key}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
                    >
                      <img
                        src={stock.image}
                        alt={stock.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h3 className="text-sm font-semibold text-[#173F52] mb-2">
                          {stock.title}
                        </h3>
                        <ul className="space-y-1">
                          {stock.items.map((item, index) => (
                            <li
                              key={index}
                              className="text-xs text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-[#D92B20] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Equivalent Grades */}
            <section className="mb-8">
              <SectionTitle>
                Equivalent Grades Stainless Steel 304 / 304L Pipes
              </SectionTitle>
              <Table
                headers={[
                  "Standard",
                  "Werkstoff Nr.",
                  "UNS",
                  "JIS",
                  "BS",
                  "GOST",
                  "AFNOR",
                  "EN",
                ]}
                rows={productData.equivalentGrades.map((item) => [
                  item.standard,
                  item.werkstoff,
                  item.uns,
                  item.jis,
                  item.bs,
                  item.gost,
                  item.afnor,
                  item.en,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>
                Chemical Composition of Stainless Steel 304 / 304L Pipes
              </SectionTitle>
              <Table
                headers={["Grade", "C", "Mn", "Si", "P", "S", "Cr", "Ni"]}
                rows={productData.chemicalComposition.map((item) => [
                  item.grade,
                  item.c,
                  item.mn,
                  item.si,
                  item.p,
                  item.s,
                  item.cr,
                  item.ni,
                ])}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>
                Mechanical Properties of Stainless Steel TP 304 / 304L Piping
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Density",
                  "Melting Point",
                  "Tensile Strength",
                  "Yield Strength (0.2% Offset)",
                  "Elongation",
                ]}
                rows={productData.mechanicalProperties.map((item) => [
                  item.grade,
                  item.density,
                  item.meltingPoint,
                  item.tensileStrength,
                  item.yieldStrength,
                  item.elongation,
                ])}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Stainless Steel 304 / 304L Seamless Pipe Weight Chart
              </SectionTitle>
              <Table
                headers={[
                  "NPS (DN)",
                  "Weight LB/FT (KG/M)",
                  "SCH",
                  "OD (mm)",
                  "ID",
                  "WT (mm)",
                ]}
                rows={productData.weightChart.map((item) => [
                  item.nps,
                  item.weight,
                  item.sch,
                  item.od,
                  item.id,
                  item.wt,
                ])}
              />
            </section>

            {/* Specifications */}
            <section className="mb-8">
              <SectionTitle>
                1.4301 / 1.4307 ASTM Pipes Specification
              </SectionTitle>
              <div className="space-y-3">
                {productData.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <h4 className="font-semibold text-[#173F52]">
                      {spec.standard}
                    </h4>
                    <p className="text-gray-700 text-sm mt-1">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Supply Range */}
            <section className="mb-8">
              <SectionTitle>
                Stainless Steel TP 304 / 304L Pipe Supply Range
              </SectionTitle>
              <Table
                headers={[
                  "Product Description",
                  "Wall Thickness, WT (mm)",
                  "Outside Diameter, OD (mm)",
                ]}
                rows={productData.supplyRange.map((item) => [
                  item.product,
                  item.wallThk,
                  item.od,
                ])}
              />
            </section>

            {/* Price Range */}
            <section className="mb-8">
              <SectionTitle>
                Stainless Steel 304 - 304L Pipe Price Range
              </SectionTitle>
              <Table
                headers={[
                  "Designation (B) INCH",
                  "Designation (A) MM",
                  "OD (mm)",
                  "Weight Kg/Mtr",
                  "Wall Thk (mm)",
                  "Price (INR/MTR)",
                  "Price (INR/KG)",
                ]}
                rows={productData.priceRange.map((item) => [
                  item.diameterA,
                  item.diameterB,
                  item.od,
                  item.weight,
                  item.wall,
                  item.price,
                  item.pricekg,
                ])}
              />
              <p className="text-xs text-gray-500 mt-2">
                *Note: Prices vary depending on specific grade and quantity.
                Contact sales for precise project-based quotes.
              </p>
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Stainless Steel 304 / 304L Pipes
              </SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {productData.specializedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2 hover:shadow-md transition"
                  >
                    <span className="text-[#D92B20] text-sm">▸</span>
                    <span className="text-gray-700 text-xs">{product}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Searches */}
            <section className="mb-8">
              <SectionTitle>
                Searches Related to Stainless Steel 304 / 304L Pipes
              </SectionTitle>
              <ChipList items={productData.relatedSearches} />
            </section>
          </div>

          {/* =============================== */}
          {/* RIGHT COLUMN - SIDEBAR */}
          {/* =============================== */}
          <div className="lg:col-span-4 space-y-6">
            {/* Our Products */}
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
              <div className="border-b border-[#D92B20] bg-[#173F52] px-4 py-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  OUR PRODUCTS
                </h2>
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {productData.ourProducts.map((product, index) => (
                  <Link
                    key={index}
                    to={`/products/${product.slug}`}
                    className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#173F52] hover:text-white"
                  >
                    <span className="text-[#D92B20] text-xs">◉</span>
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Shop By Material */}
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
              <div className="border-b border-[#D92B20] bg-[#173F52] px-4 py-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  SHOP BY MATERIAL
                </h2>
              </div>

              <div className="max-h-[300px] overflow-y-auto">
                {productData.shopByMaterial.map((material, index) => (
                  <Link
                    key={index}
                    to={`/materials/${material.slug}`}
                    className="flex items-center gap-3 border-b border-gray-100 px-4 py-2.5 text-sm text-gray-700 transition hover:bg-[#173F52] hover:text-white"
                  >
                    <span className="text-[#D92B20] text-xs">◉</span>
                    {material.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Get A Quote */}
            <div className="bg-[#173F52] rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Get A Quote
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Email us for a quote or contact us for more information.
              </p>
              <a
                href={`mailto:${contact.email || "info@alloypipe.com"}`}
                className="inline-block bg-[#D92B20] hover:bg-[#c08a1a] text-white font-semibold px-6 py-2.5 rounded-lg transition text-sm"
              >
                Email Us Now
              </a>
            </div>
          </div>
        </div>

        {/* =============================== */}
        {/* COUNTRIES - Full Width Below */}
        {/* =============================== */}
        <section className="mt-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h2 className="text-2xl font-black uppercase leading-tight">
                <span className="text-[#173F52]">Countries We </span>
                <span className="text-[#D92B20]">Export Our Products To</span>
              </h2>
              <div className="mt-1 h-[2px] w-32 bg-[#D92B20]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {productData.countries.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D92B20] hover:bg-[#173F52] hover:shadow-md cursor-pointer"
                >
                  <span
                    className={`fi fi-${(country.code || country).toLowerCase()} rounded-sm shadow`}
                  ></span>
                  <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-white">
                    {country.name || country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =============================== */}
        {/* CITIES - Full Width Below */}
        {/* =============================== */}
        <section className="mt-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h2 className="text-2xl font-black uppercase leading-tight">
                <span className="text-[#173F52]">
                  We Supply Our Products In
                </span>{" "}
                <span className="text-[#D92B20]">The Following Cities</span>
              </h2>
              <div className="mt-1 h-[2px] w-32 bg-[#D92B20]" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {productData.cities.map((city, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D92B20] hover:bg-[#173F52] hover:shadow-md cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-white">
                    {city.name || city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* =============================== */}
      {/* FLOATING WHATSAPP & CALL BUTTONS */}
      {/* =============================== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl(contact)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7 text-white" />
        </a>

        {/* Call Button */}
        <a
          href={getTelUrl(contact)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl"
          aria-label="Call us"
        >
          <CallIcon className="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default StainlessSteel304304LPipes;
