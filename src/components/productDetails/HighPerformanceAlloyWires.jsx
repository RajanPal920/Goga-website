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
import productImage from "../../assets/images/productImage/wires.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (using wire-specific images)
import weldingWireImage from "../../assets/images/stock/welding-wire.jpg";
import fillerWireImage from "../../assets/images/stock/filler-wire.jpg";
import wireBobbinImage from "../../assets/images/stock/wire-bobbin.jpg";
import wireRopeImage from "../../assets/images/stock/wire-rope.jpg";
import brightCoilWireImage from "../../assets/images/stock/bright-wire.jpg";
import spoolWireImage from "../../assets/images/stock/spool-wire.jpg";

const HighPerformanceAlloyWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "High-Performance Alloy Wires Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    subtitle:
      "Premium Quality Specialty Alloy Wires – Engineered for Mission-Critical Applications Including Ultra-High Temperature Creep Resistance, Controlled Thermal Expansion & Superior Strength in Aggressive Environments",

    technicalOverview: {
      title: "High-Performance Alloy Wires: Technical Overview",
      description:
        "This selection of specialized alloy wires is engineered for mission-critical applications where standard materials fail due to thermal fatigue, extreme mechanical stress, or aggressive chemical attack. These wires provide unique solutions ranging from ultra-high temperature creep resistance to controlled thermal expansion.",
    },

    gradeBreakdown: [
      {
        title: "Nimonic 75 / 80A Wires (High-Temperature Superalloys)",
        description:
          "Nimonic alloys are nickel-chromium-based superalloys designed for high-temperature service where creep resistance is the primary concern.",
        items: [
          "Nimonic 75 (UNS N06075): Offers excellent oxidation resistance and mechanical properties at high temperatures, making it a staple for high-temperature fasteners and springs.",
          "Nimonic 80A (UNS N07080): A precipitation-hardenable alloy strengthened by aluminum and titanium, providing significantly higher creep-rupture properties up to 1500°F (815°C).",
        ],
        keyApplications:
          "Gas turbine components, high-temperature bolts, and specialized industrial furnace springs.",
      },
      {
        title: "Nichrome 80 / 20 Wires (Electrical Resistance)",
        description:
          "Nichrome 80/20 (80% Nickel, 20% Chromium) is the gold standard for electrical resistance heating. When heated, it forms a stable, tenacious layer of chromium oxide that protects the wire from further degradation during repeated heating cycles.",
        keyApplications:
          "Industrial heating elements, laboratory equipment, and wire-cut electrical discharge machining (EDM) components.",
      },
      {
        title: "Nitronic 50 (XM–19) Wires (High Strength & Corrosion)",
        description:
          "Nitronic 50 (UNS S20910) is a nitrogen-strengthened austenitic stainless steel that offers a combination of corrosion resistance and strength superior to Types 316 and 317. It remains non-magnetic even after severe cold working.",
        keyApplications:
          "Marine pump shafts, subsea hardware, and chemical processing mesh requiring high yield strength.",
      },
      {
        title: "Nilo 42 & Nilo 48 Wires (Controlled Expansion)",
        description:
          "The Nilo series (Invar family) is engineered for applications requiring dimensional stability across varying temperatures.",
        items: [
          "Nilo 42 (UNS K94100): Features a low coefficient of thermal expansion up to 570°F (300°C), ideal for glass-to-metal seals.",
          "Nilo 48 (UNS K94800): Designed to match the thermal expansion of specific ceramics and soft glasses.",
        ],
        keyApplications:
          "Thermostats, electronic lead wires, and laser components.",
      },
      {
        title: "Alloy 286 (660) & Alloy 926 (6% Moly) Wires",
        description:
          "Alloy 286 (UNS S66000): An iron-base, age-hardenable superalloy designed for high strength and corrosion resistance up to 1290°F (700°C). It is frequently used for jet engine fasteners and high-temperature springs. Alloy 926 (UNS N08926): A super-austenitic 6% Molybdenum stainless steel with increased nitrogen. It provides exceptional resistance to pitting and crevice corrosion in high-chloride media like seawater.",
        keyApplications:
          "Jet engine fasteners, high-temperature springs, and seawater equipment.",
      },
    ],

    keyFeatures: [
      "Specialized alloys for mission-critical applications",
      "Ultra-high temperature creep resistance and oxidation stability",
      "Controlled thermal expansion for precision engineering",
      "Superior strength in aggressive chemical environments",
      "Available in Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 & 926",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished bright, Smooth, Bare, Enamel, PTFE, Ceramic, Plated",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Complies with ANSI/AWCI, ASTM E 2016, RRW 360, QQ-N-281, BS3076 NA13, DIN 17753",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Bright & Coil Wire, Spool Wire",
    ],

    applications: [
      "Gas turbine components and high-temperature fasteners",
      "Industrial furnace springs and heating elements",
      "Marine pump shafts and subsea hardware",
      "Chemical processing mesh and equipment",
      "Thermostats, electronic lead wires, and laser components",
      "Jet engine fasteners and high-temperature springs",
      "Wire-cut electrical discharge machining (EDM)",
      "Seawater and high-chloride environments",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "Nimonic 75 / 80A Welding Wire",
          "Nitronic 50 (XM-19) Welding Wires",
          "Alloy 286 (660) Electrode Wire",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "Nichrome 80/20 Filler Wires",
          "Nimonic N06075 / N07080 Filler Wires",
          "Alloy 926 (1.4529) Filler Rods",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "Nilo 42 / 48 Precision Wire Bobbin",
          "Nichrome 80/20 Resistance Bobbin",
          "UNS N06075 / N07080 Wire Bobbin",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "Nitronic 50 (XM-19) Wire Rope",
          "Nimonic 75 / 80A Alloy Wire Rope",
          "Alloy 926 High Strength Wire Rope",
        ],
      },
      brightCoilWire: {
        title: "Bright & Coil Wire",
        image: brightCoilWireImage,
        items: [
          "Alloy 286 (660) Bright Wire Coil",
          "Nimonic® 75 / 80A Coil Wire",
          "Nitronic 50 Annealed Coil Wire",
        ],
      },
      spoolWire: {
        title: "Spool Wire",
        image: spoolWireImage,
        items: [
          "Nilo 42 / 48 Precision Spool Wire",
          "Nimonic 75 / 80A Alloy Spool Wire",
          "Alloy 926 / 286 Spool Wire Stock",
        ],
      },
    },

    specifications: {
      dimensionsStandards: "ANSI/AWCI – 01-1992, ASTM E 2016-11, RRW 360",
      diameterRange:
        '0.0004" to 0.040" (10 microns to 1.0 mm) | Custom Gauges Available',
      intlSpecifications: "QQ-N-281, BS3076 NA13, DIN 17753, VdTUV 263",
      lengthDensity: 'Cut Lengths: 0.125" to 72" | Density: 8.89 g/cm³',
      surfaceFinish:
        "Polished bright, Smooth, Bare, Enamel, PTFE, Ceramic, Plated",
      testCertificate: "MTC EN 10204 3.1 / 3.2 Available for all Alloy Grades",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "Common Standard"],
      rows: [
        [
          "Nimonic 75 / 80A",
          "N06075 / N07080",
          "2.4951 / 2.4952",
          "HR 5 / HR 1 / HR 601",
        ],
        ["Nichrome 80/20", "N06003", "2.4869", "Alloy 80/20 / Cronix 80"],
        ["Nitronic 50", "S20910", "1.3964", "XM-19 / AWS ER209"],
        [
          "Nilo 42 / 48",
          "K94100 / K94800",
          "1.3917 / —",
          "Alloy 42 / Alloy 48",
        ],
        ["Alloy 286 (660)", "S66286", "1.4980", "A 286 / ASTM A638"],
        ["Alloy 926", "N08926", "1.4529", "1.4529 / 6Mo / Incoloy 926"],
      ],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "Ni",
        "Cr",
        "Fe",
        "Mo",
        "Ti / Al",
        "Other Key Elements",
      ],
      rows: [
        [
          "Nimonic 80A",
          "Bal",
          "18-21",
          "3.0 max",
          "—",
          "Ti: 1.8-2.7",
          "Al: 1.0-1.8 | Co: 2.0 max",
        ],
        [
          "Nichrome 80/20",
          "75.0",
          "19-21",
          "1.0 max",
          "—",
          "Al: 0.30",
          "Si: 0.5-2.0",
        ],
        [
          "Nitronic 50",
          "11.5-13.5",
          "20.5-23.5",
          "Bal",
          "1.5-3.0",
          "—",
          "Mn: 4.0-6.0 | N: 0.2-0.4",
        ],
        [
          "Nilo 42",
          "41.0 min",
          "0.25 max",
          "Rem",
          "—",
          "Al: 0.10 max",
          "Low Expansion Control",
        ],
        [
          "Alloy 286",
          "24-27",
          "13.5-16",
          "Bal",
          "1.0-1.5",
          "Ti: 1.9-2.3",
          "Al: 0.35 max | V: 0.1-0.5 | B: 0.003-0.01",
        ],
        [
          "Alloy 926",
          "24-26",
          "19-21",
          "41.6-50.3",
          "6.0-7.0",
          "—",
          "Cu: 0.5-1.5 | N: 0.15-0.25",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile Strength (MPa)",
        "Yield Strength (0.2% MPa)",
        "Elongation",
        "Density (g/cm³)",
      ],
      rows: [
        ["Nimonic 75 / 80A", "750", "275", "42%", "8.19"],
        ["Nichrome 80/20", "650", "280", "20%", "8.40"],
        ["Nitronic 50", "655", "345", "35%", "7.88"],
        ["Nilo 42 / 48", "490-520", "250", "43%", "8.11 / 8.20"],
        ["Alloy 286 (660)", "965", "655", "12%", "7.94"],
        ["Alloy 926", "648", "296", "35%", "8.03"],
      ],
    },

    toleranceChart: {
      headers: [
        "Specified Diameter in. (mm)",
        "Tolerance Over (+)",
        "Tolerance Under (-)",
      ],
      rows: [
        ["0.5000 (12.70)", "0.002 (0.05)", "0.002 (0.05)"],
        [
          "Under 0.5000 (12.70) to 0.3125 (7.94)",
          "0.0015 (0.04)",
          "0.0015 (0.04)",
        ],
        [
          "Under 0.3125 (7.94) to 0.0440 (1.12)",
          "0.001 (0.03)",
          "0.001 (0.03)",
        ],
        [
          "Under 0.0440 (1.12) to 0.0330 (0.84)",
          "0.0008 (0.02)",
          "0.0008 (0.02)",
        ],
        [
          "Under 0.0240 (0.61) to 0.0120 (0.30)",
          "0.0004 (0.010)",
          "0.0004 (0.010)",
        ],
        [
          "Under 0.0080 (0.20) to 0.0048 (0.12)",
          "0.0002 (0.005)",
          "0.0002 (0.005)",
        ],
        [
          "Under 0.0048 (0.12) to 0.0030 (0.08)",
          "0.0001 (0.003)",
          "0.0001 (0.003)",
        ],
      ],
    },

    specializedProducts: [
      "Nimonic 75 / 80A High-Temperature Aerospace Wires",
      "Nichrome 80 / 20 Electrical Resistance Heating Wires",
      "Nitronic 50 (XM-19) High-Strength Marine Wires",
      "Nilo 42 / 48 Controlled Expansion Alloy Wires",
      "Alloy 286 (660) Precipitation Hardening Wires",
      "Alloy 926 (1.4529) Super-Austenitic 6Mo Wires",
      "Precision TIG, MIG & Electrode Specialty Welding Wires",
      "Fine & Ultra-Fine Diameter Specialty Wire Bobbins",
      "Cold Heading & Spring Temper Industrial Wires",
      "High-Nickel Specialty Alloy Wire Rope & Cables",
      "Bright Annealed & Polished Smooth Surface Wires",
      "Specialty Grade Wire Suppliers at Best Prices in Mumbai",
    ],

    relatedSearches: [
      "Nimonic 80A Wire Price List",
      "Nichrome 80/20 Wire Resistance Chart",
      "Nitronic 50 Wire Weight Calculator",
      "Nilo 42 Wire Expansion Properties",
      "Alloy 286 Wire Dimensions",
      "Alloy 926 Wire Price Per Kg in India",
      "Nimonic 75 Wire Manufacturer Mumbai",
      "Nitronic 50 Wire Supplier in India",
      "Nichrome 80/20 Wire Gauge Chart",
      "ASTM A453 Grade 660 Wire Price",
      "Alloy 286 Wire Mechanical Properties",
      "UNS S20910 Wire Chemical Composition",
      "Specialty Wire Stockist in Pune",
      "Nimonic Wire Exporter Mumbai",
      "Nichrome Heating Wire Price India",
      "Nitronic 50 TIG Wire Price",
      "Alloy 926 MIG Wire Manufacturers",
      "Nilo 48 Wire Catalog PDF",
      "Specialty Wire Equivalent Grades",
      "Nimonic 80A updated price list 2026",
      "Nitronic 50 Wire size chart",
      "Specialty Alloy Wire Manufacturers in Gujarat",
      "High-Performance Wire Stockyards in India",
      "Alloy 286 Wire thickness chart",
      "Nichrome 80/20 Wire Price in India",
      "Top 100 Specialty Wire Dealers in Mumbai",
      "Buy Nimonic Wire Online India",
      "Nitronic leading wire manufacturers",
      "Alloy 660 Wire descaled finish price",
      "UNS N06075 Wire Price India",
      "UNS N08926 Wire Price Mumbai",
      "Nichrome 80/20 Spool Wire Stockist",
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
                Stock Availability: Specialty Alloy Wires
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
                Unified Specification: Specialty Alloy Wires
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
              <SectionTitle>Chemical Composition</SectionTitle>
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

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Dimensional Tolerance: Specialty Alloy Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in High-Performance Alloy Wires
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
                Searches Related to Specialty Alloy Wires
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

export default HighPerformanceAlloyWires;
