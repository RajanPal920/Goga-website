import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Unified image imports (same for all product pages)
import productImage from "../../assets/images/productImage/rod.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images
import nimonicBarsImage from "../../assets/images/stock/round-bars.jpg";
import nitronicBarsImage from "../../assets/images/stock/hex-bars.jpg";
import nichromeBarsImage from "../../assets/images/stock/square-bars.jpg";
import flatBarsImage from "../../assets/images/stock/flat-bars.jpg";
import brightBarsImage from "../../assets/images/stock/bright-bars.jpg";
import rectangleBarsImage from "../../assets/images/stock/rectangle-bars.jpg";

const HighPerformanceAlloyRoundBars = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic & Alloy",
    subtitle:
      "Premium Quality Specialty Alloy Round Bars – Engineered for Mission-Critical Applications Including Ultra-High Temperature Creep Resistance, Controlled Thermal Expansion & Superior Strength in Aggressive Environments",

    technicalOverview: {
      title: "High-Performance Alloy Round Bars: Technical Overview",
      description:
        "This selection of specialized alloy round bars is engineered for mission-critical industrial applications where standard materials fail due to thermal fatigue, extreme mechanical stress, or aggressive chemical attack. These bars provide unique solutions ranging from ultra-high temperature creep resistance to controlled thermal expansion for precision engineering.",
    },

    gradeBreakdown: [
      {
        title: "Nimonic 75 / 80A Round Bars (High-Temperature Superalloys)",
        description:
          "Nimonic alloys are nickel-chromium-based superalloys designed for high-temperature service where creep resistance and oxidation stability are primary concerns.",
        items: [
          "Nimonic 75 (UNS N06075): Offers excellent oxidation resistance and mechanical properties at high temperatures. Widely used for structural components in high-heat zones and furnace internals.",
          "Nimonic 80A (UNS N07080): A precipitation-hardenable alloy strengthened by aluminum and titanium. Provides significantly higher creep-rupture properties for service up to 815°C (1500°F).",
        ],
        keyApplications:
          "Gas turbine components, specialized high-temperature bolts, and industrial furnace shafts.",
      },
      {
        title: "Nichrome 80 / 20 Round Bars (Electrical Resistance & Heat)",
        description:
          "Nichrome 80/20 (80% Nickel, 20% Chromium) is primarily known for electrical resistance, but in round bar form, it serves as a robust heat-resistant material. It forms a stable, tenacious layer of chromium oxide that protects the metal from further degradation during repeated thermal cycling.",
        keyApplications:
          "Heavy-duty industrial heating element supports, furnace muffles, and laboratory heat-treatment jigs.",
      },
      {
        title: "Nitronic 50 (XM–19) Round Bars (High Strength & Corrosion)",
        description:
          "Nitronic 50 (UNS S20910) is a nitrogen-strengthened austenitic stainless steel. It provides a combination of corrosion resistance and yield strength superior to Types 316 and 317. It remains non-magnetic even after severe cold working.",
        keyApplications:
          "Marine pump shafts, subsea hardware, and chemical processing valves requiring high structural load capacity.",
      },
      {
        title: "Nilo 42 & Nilo 48 Round Bars (Controlled Expansion)",
        description:
          "The Nilo series (Invar family) is engineered for applications requiring dimensional stability across varying temperatures.",
        items: [
          "Nilo 42 (UNS K94100): Features a low coefficient of thermal expansion up to 300°C (570°F), specifically designed for glass-to-metal and ceramic-to-metal seals.",
          "Nilo 48 (UNS K94800): Matches the thermal expansion of specific soft glasses and ceramics.",
        ],
        keyApplications:
          "Thermostats, electronic lead frames, and laser components.",
      },
      {
        title: "Alloy 286 (660) & Alloy 926 (6% Moly) Round Bars",
        description:
          "Alloy 286 (UNS S66000): An iron-base, age-hardenable superalloy designed for high strength and corrosion resistance up to 700°C (1290°F). It is essential for high-temperature fasteners and structural engine components. Alloy 926 (UNS N08926): A super-austenitic 6% Molybdenum stainless steel with increased nitrogen. It provides exceptional resistance to pitting and crevice corrosion in high-chloride media like seawater and acidic bleach.",
        keyApplications:
          "High-temperature fasteners, structural engine components, and seawater equipment.",
      },
    ],

    keyFeatures: [
      "Specialized alloys for mission-critical applications",
      "Ultra-high temperature creep resistance and oxidation stability",
      "Controlled thermal expansion for precision engineering",
      "Superior strength in aggressive chemical environments",
      "Available in Nimonic, Nichrome, Nitronic, Nilo & Alloy grades",
      "Round sizes: 4mm – 500mm | Hex: 18mm – 57mm | Square: 18mm – 47mm",
      "Finishes: Bright, Black, Polished, Cold Drawn, Precision Ground",
      "Lengths: 1 to 6 Meters",
      "Complies with ASTM B637, B446, A276, B160 / AMS 5662, 5581, 5666",
    ],

    applications: [
      "Gas turbine components and high-temperature bolts",
      "Industrial furnace shafts and heating element supports",
      "Marine pump shafts and subsea hardware",
      "Chemical processing valves and equipment",
      "Thermostats, electronic lead frames, and laser components",
      "High-temperature fasteners and structural engine components",
      "Seawater and acidic bleach equipment",
      "Laboratory heat-treatment jigs",
    ],

    stockAvailability: {
      nimonicNiloBars: {
        title: "Nimonic & Nilo Round Bars",
        image: nimonicBarsImage,
        items: [
          "Nimonic 75 / 80A / 90 Round Bars",
          "Nilo 36 / 42 Low Expansion Rods",
          "High Temperature Nimonic Alloys",
          "Invar 36 (Nilo 36) Precision Bars",
          "Aerospace Grade Nimonic Rods",
        ],
      },
      nitronicBars: {
        title: "Nitronic Hex & Square Bars",
        image: nitronicBarsImage,
        items: [
          "Nitronic 50 (XM-19) Hex Bars",
          "Nitronic 60 (S21800) Square Rods",
          "High Strength Stainless Nitronic Bars",
          "Nitronic Gall-Resistant Square Stock",
          "Precision Machined Alloy Hex Rods",
        ],
      },
      nichromeBars: {
        title: "Nichrome & Special Alloys",
        image: nichromeBarsImage,
        items: [
          "Nichrome 80/20 Resistance Bars",
          "High Electrical Resistance Rods",
          "Nimonic 263 Forged Square Bars",
          "Nichrome Heating Element Stock",
          "Special Industrial Alloy Squares",
        ],
      },
      flatBars: {
        title: "High Alloy Flat Bars",
        image: flatBarsImage,
        items: [
          "Nitronic 50 / 60 Flat Bars",
          "Nimonic 75 Industrial Flat Stock",
          "Nilo 36 Low Expansion Flats",
          "Nichrome 80 Flat Ribbon Bars",
          "Custom Cut High Performance Flats",
        ],
      },
      brightBars: {
        title: "Bright & Polished Rods",
        image: brightBarsImage,
        items: [
          "Nitronic 50 Bright Polished Bars",
          "Nimonic 80A Cold Drawn Rods",
          "Nilo 42 Centerless Ground Bars",
          "Export Grade High Performance Bars",
          "Nichrome Bright Resistance Rods",
        ],
      },
      rectangleBars: {
        title: "Rectangle Bars & Billets",
        image: rectangleBarsImage,
        items: [
          "Nimonic 90 Rectangular Bars",
          "Nitronic 50 Forged Billets",
          "Nilo 36 Rectangular Sections",
          "Forged High Performance Billets",
          "Special Alloy Rectangle Rod Stock",
        ],
      },
    },

    specifications: {
      standards: "ASTM B637, B446, A276, B160 / AMS 5662, 5581, 5666",
      sizeRange: "Round: 4mm-500mm | Hex: 18mm-57mm | Square: 18mm-47mm",
      finishLength:
        "Bright, Black, Polished, Cold Drawn, Precision Ground | 1 to 6 Meters",
      availableForms:
        "Round, Square, Hex (A/F), Rectangle, Flat, Billet, Forging",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Nimonic 75", "N06075", "2.4951 / 2.4630", "Alloy 75"],
        ["Nitronic 50", "S20910", "1.3964", "XM-19"],
        ["Nilo 36", "K93600 / K93603", "1.3912", "Invar 36"],
        ["Nichrome 80", "N06003", "2.4869", "NiCr 80/20"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Mn", "Other"],
      rows: [
        ["Nimonic 75", "Bal.", "18.0-21.0", "5.0 max", "1.0 max", "Ti 0.2-0.6"],
        [
          "Nitronic 50",
          "11.5-13.5",
          "20.5-23.5",
          "Bal.",
          "4.0-6.0",
          "Mo 1.5-3.0",
        ],
        ["Nilo 36", "35.0-37.0", "-", "Bal.", "0.6 max", "-"],
        [
          "Nichrome 80",
          "Bal.",
          "19.0-21.0",
          "1.0 max",
          "2.5 max",
          "Si 0.7-1.5",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Density (g/cm³)",
      ],
      rows: [
        ["Nimonic 75", "650 min", "250 min", "35% min", "8.37"],
        ["Nitronic 50", "690 min", "380 min", "35% min", "7.88"],
        ["Nilo 36", "490 min", "240 min", "30% min", "8.11"],
      ],
    },

    sizeChart: {
      headers: [
        "Metric Size (mm)",
        "Diameter (mm)",
        "US Rods (ASTM/Canadian)",
        "Diameter (Inch)",
        "Japanese Rods (mm²)",
        "Diameter (mm)",
      ],
      rows: [
        ["5", "5", "#2", "0.250", "10M", "10"],
        ["6", "6", "#3", "0.375", "15M", "13"],
        ["7", "7", "#4", "0.500", "20M", "16"],
        ["8", "8", "#5", "0.625", "25M", "19"],
        ["9", "9", "#6", "0.750", "30M", "22"],
        ["10", "10", "#7", "0.875", "35M", "25"],
        ["11", "11", "#8", "1.000", "45M", "29"],
        ["12", "12", "#9", "1.125", "55M", "32"],
        ["14", "14", "#10", "1.250", "-", "35"],
        ["16", "16", "#11", "1.375", "-", "38"],
        ["18", "18", "#12", "1.500", "-", "41"],
        ["20", "20", "#14", "1.750", "-", "44"],
        ["22", "22", "#15", "1.875", "-", "48"],
        ["25", "25", "#16", "2.000", "-", "51"],
        ["28", "28", "#18", "2.250", "-", "57"],
      ],
    },

    weightChart: {
      headers: ["Size", "Kgs / Mtr", "Size", "Kgs / Mtr", "Size", "Kgs / Mtr"],
      rows: [
        ["3mm", "0.055", "20mm", "2.470", '3"', "35.762"],
        ['1/8"', "0.062", "22mm", "2.979", '3-1/4"', "41.996"],
        ["4mm", "0.098", "25mm", "3.871", '3-1/2"', "48.772"],
        ['3/16"', "0.141", '1"', "3.970", '4"', "63.340"],
        ['1/4"', "0.249", '1-1/8"', "5.033", '4-1/2"', "80.340"],
        ["8mm", "0.398", '1-1/4"', "6.349", '5"', "99.940"],
        ['3/8"', "0.557", '1-1/2"', "8.951", '6"', "143.900"],
        ["10mm", "0.620", "40mm", "9.872", '8"', "254.551"],
        ['1/2"', "0.994", '1-3/4"', "12.179", '10"', "397.140"],
        ["15mm", "1.391", "50mm", "15.414", '12"', "571.800"],
        ['5/8"', "1.551", '2"', "15.906", "-", "-"],
        ['3/4"', "2.237", '2-1/2"', "24.856", "-", "-"],
      ],
    },

    specializedProducts: [
      "Nimonic 75 / 80A / 90 High-Temp Alloy Bar Dealer",
      "Nitronic 50 / 60 High Strength & Gall Resistant Bars",
      "Nilo 36 / 42 (Invar) Low Expansion Alloy Rods Exporter",
      "Nichrome 80/20 Resistance Heating Alloy Supplier",
      "Nimonic Precision Ground & Polished Rods",
      "Aerospace Grade Special Alloy Rods Stockist in Mumbai",
      "AMS & ASTM Standard High-Performance Alloys",
      "Cold Drawn & Solution Annealed Alloy Bars Supplier",
      "High Alloy Black & Bright Round Bars Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Nimonic 80A Bars at Best Price",
      "Nitronic 50 Round Bars In Pune",
      "Nilo 36 Bar Stock Range",
      "Nitronic 60 Bar Exporter Mumbai",
      "Nimonic 75 Round Bars Latest Price",
      "Nichrome 80 Bars Price List India",
      "Nitronic 50 Round Bars Chemical Composition",
      "Nimonic 90 Rods Stockyards In India",
      "Nitronic 60 Round Bars Pdf",
      "Nitronic 50 Round Bars In Mumbai",
      "Cost Of Nimonic Round Bars",
      "Nitronic 50 Equivalent Grades",
      "Nimonic 75 Round Bars Price In India",
      "Nitronic 60 Forged Bars",
      "Price Of Nimonic Round Bars",
      "High Performance Alloy Specifications",
      "Nimonic Hot Rolled bars Supplier",
      "Nitronic 50 Bars Supplier In Mumbai",
      "Nitronic 50 Round Bars Suppliers In Gujarat",
      "Special Alloy Cold Drawn Bars Price List",
      "Nitronic 60 Alloy Round Bar",
      "Nimonic Bars Catalogue",
      "Nilo 36 Manufacturers India",
      "Nitronic 50 Threaded Bars",
      "Nimonic Round Bars Supplier In India",
      "Nitronic 50 Round Bars Price List in India",
      "Nimonic Round Bars Dimensions",
      "Nimonic Rods Stockist In Mumbai",
      "High Performance Round Bars Stocks",
      "Nitronic 50 Round Bars Weight Calculator",
    ],

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
    <div className="bg-gray-50 min-h-screen">
      {/* =============================== */}
      {/* HERO BANNER */}
      {/* =============================== */}
      <div
        className="relative h-56 sm:h-64 md:h-80 bg-cover bg-center"
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

            {/* Grade Breakdown */}
            <section className="mb-8">
              <SectionTitle>
                Specialized Alloy Grades & Applications
              </SectionTitle>
              {productData.gradeBreakdown.map((section, idx) => (
                <div
                  key={idx}
                  className="mb-4 p-4 bg-white border border-gray-200 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-[#173F52] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    {section.description}
                  </p>
                  {section.items && (
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.keyApplications && (
                    <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                      <span className="font-semibold text-sm text-[#173F52]">
                        Key Applications:{" "}
                      </span>
                      <span className="text-gray-700 text-sm">
                        {section.keyApplications}
                      </span>
                    </div>
                  )}
                </div>
              ))}
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
              <SectionTitle>Applications Across Industries</SectionTitle>
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

            {/* Stock Availability */}
            <section className="mb-8">
              <SectionTitle>
                Stock Availability of High-Performance Alloy Round Bars
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

            {/* Specifications */}
            <section className="mb-8">
              <SectionTitle>
                Technical Specifications: High-Performance Alloy Round Bars
              </SectionTitle>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <ul className="space-y-2">
                  {Object.entries(productData.specifications).map(
                    ([key, value]) => (
                      <li
                        key={key}
                        className="text-gray-700 flex items-start gap-2 text-sm"
                      >
                        <span className="text-[#D92B20] mt-1">▸</span>
                        <span>
                          <span className="font-semibold capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>{" "}
                          {value}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>

            {/* Equivalent Grades */}
            <section className="mb-8">
              <SectionTitle>Equivalent Grades</SectionTitle>
              <Table
                headers={productData.equivalentGrades.headers}
                rows={productData.equivalentGrades.rows}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>Chemical Composition (%)</SectionTitle>
              <Table
                headers={productData.chemicalComposition.headers}
                rows={productData.chemicalComposition.rows}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>Mechanical & Physical Properties</SectionTitle>
              <Table
                headers={productData.mechanicalProperties.headers}
                rows={productData.mechanicalProperties.rows}
              />
            </section>

            {/* Size Chart */}
            <section className="mb-8">
              <SectionTitle>
                Size and Dimensions of High-Performance Alloy Round Bars
              </SectionTitle>
              <Table
                headers={productData.sizeChart.headers}
                rows={productData.sizeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                High-Performance Alloy Round Bars Weight Chart
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Nimonic, Nitronic, Nilo & Alloy Round Bars
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
                Searches Related to High-Performance Alloy Round Bars
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

export default HighPerformanceAlloyRoundBars;
