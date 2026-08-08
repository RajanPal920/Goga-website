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
import coilSpoolWireImage from "../../assets/images/stock/spool-wire.jpg";
import industrialWiresImage from "../../assets/images/stock/coil-wire.jpg";

const HastelloyWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Hastelloy Wires Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    subtitle:
      "Premium Quality Hastelloy Superalloy Wires – Nickel-Based Alloys Engineered for Maximum Resistance to Aggressive Chemicals, Chlorides & Reducing Acids in Critical Industrial Environments",

    technicalOverview: {
      title: "Hastelloy Alloy Wires: Technical Overview and Properties",
      description:
        "Hastelloy wires are high-performance nickel-molybdenum-chromium superalloys engineered for the most demanding chemical environments. These wires maintain exceptional mechanical integrity and corrosion resistance where standard stainless steels fail. They are particularly valued for their resistance to pitting, stress-corrosion cracking, and a wide range of aggressive chemical media, including both oxidizing and reducing acids.",
    },

    gradeBreakdown: [
      {
        title: "Hastelloy C-Series: Universal Corrosion Resistance",
        description:
          "The C-series is the most versatile group of Hastelloy alloys, designed to handle a broad spectrum of volatile chemical process streams.",
        items: [
          "Hastelloy C276 (UNS N10276): The industry standard for aggressive environments. Exceptionally resistant to wet chlorine gas, hypochlorites, and chlorine dioxide. A primary choice for pollution control equipment and chemical processing.",
          "Hastelloy C22 (UNS N06022): Offers better overall corrosion resistance than C276 in oxidizing environments. Provides superior protection against localized corrosion and is frequently used in pharmaceutical and biotech manufacturing.",
          "Hastelloy C2000 (UNS N06200): A unique alloy with deliberate copper additions, providing maximum versatility in both oxidizing and reducing environments, specifically excelled in sulfuric acid service.",
          "Hastelloy C59, C4, and C-4: Specialized grades optimized for thermal stability and resistance to grain-boundary precipitation during welding and processing.",
        ],
      },
      {
        title: "Hastelloy B-Series: Reducing Acid Specialists",
        description:
          "The B-series alloys are specifically engineered for resistance against reducing environments, particularly hydrochloric acid.",
        items: [
          "Hastelloy B2 (UNS N10665): A nickel-molybdenum alloy with significant resistance to hydrochloric acid at all concentrations and temperatures. Also performs well in pure sulfuric and phosphoric acids.",
          "Hastelloy B3 (UNS N10675): An improved version of B2 with significantly enhanced thermal stability. Makes fabrication and welding easier while maintaining the same high level of resistance to reducing acids.",
        ],
      },
      {
        title: "Specialized Grades: Hastelloy N",
        description:
          "Hastelloy N (UNS N10003): Also known as Alloy N, this grade was developed specifically for service in molten fluoride salts. It maintains excellent oxidation resistance and mechanical properties at temperatures up to 704°C (1300°F).",
        items: [],
      },
    ],

    industrialApplications: {
      title: "Industrial Applications and Quality Standards",
      description:
        "Hastelloy wires are critical components in the manufacturing of industrial mesh, springs, filters, and high-strength fasteners. They are essential in the aerospace, oil and gas, and chemical sectors where material failure is not an option.",
    },

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our wires are manufactured to meet stringent international standards, including ASTM B581, B574, and ASME SB574. We provide these wires in several conditions to suit specific industrial blueprints:",
      items: [
        "Cold Drawn: For high-tensile applications requiring precision and strength.",
        "Annealed: For maximum ductility and ease of further processing or weaving.",
        "Spring Temper: Optimized for mechanical components requiring high fatigue resistance in corrosive fluids.",
      ],
    },

    keyFeatures: [
      "Exceptional resistance to aggressive chemicals, chlorides, and acids",
      "Outstanding pitting, crevice corrosion, and stress corrosion cracking resistance",
      "Available in C-Series (C276, C22, C2000, C59, C4) and B-Series (B2, B3)",
      "Specialized grades: Hastelloy N for molten fluoride salts",
      "Universal resistance to both oxidizing and reducing environments",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished Bright, Smooth, Enamel, PTFE, Ceramic",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Coil & Spool Wire, Industrial Wires",
    ],

    applications: [
      "Industrial mesh, springs, and filters",
      "High-strength fasteners for corrosive environments",
      "Pollution control equipment and chemical processing",
      "Pharmaceutical and biotech manufacturing",
      "Hydrochloric, sulfuric, and phosphoric acid handling",
      "Aerospace and oil & gas components",
      "Molten fluoride salt environments",
      "High-temperature and high-pressure chemical systems",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "Hastelloy® Alloy Welding Wires",
          "Hastelloy Alloy Welding Wires",
          "Grade C276 / C22 Welding Wire",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "Hastelloy Alloy Filler Wires",
          "Hastelloy Filler Wire Stock",
          "Corrosion Resistant Filler Rods",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "Hastelloy Alloy Wire Bobbin",
          "Hastelloy® Alloy Wire Bobbin",
          "Fine Diameter Bobbin Wires",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "Hastelloy Alloy Wire Rope",
          "Stranded Hastelloy Wire Ropes",
          "High-Tension Alloy Ropes",
        ],
      },
      coilSpoolWire: {
        title: "Coil & Spool Wire",
        image: coilSpoolWireImage,
        items: [
          "Hastelloy® Alloy Coil Wire",
          "Hastelloy Alloy Spool Wire",
          "Precision Wound Spool Wires",
        ],
      },
      industrialWires: {
        title: "Industrial Wires",
        image: industrialWiresImage,
        items: [
          "Hastelloy Cold Heading Wires",
          "Hastelloy B2 / B3 Specialty Wires",
          "C2000 / C59 / C4 Alloy Wires",
        ],
      },
    },

    specifications: {
      dimensionsStandards: "ANSI/AWCI – 01-1992, ASTM E 2016-11, RRW 360",
      diameterRange: '0.0004" to 0.040" (10 microns to 1.0 mm)',
      intlSpecifications: "QQ-N-281, BS3076 NA13, DIN 17753, VdTUV 263",
      lengthDensity: 'Cut: 0.125" to 72" | Density: 8.89 g/cm³',
      surfaceFinish: "Polished Bright, Smooth, Enamel, PTFE, Ceramic",
      testCertificate: "Yes (MTC EN 10204 3.1 / 3.2)",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "Common Name / Standard"],
      rows: [
        ["Hastelloy C276", "N10276", "2.4819", "NiMo16Cr15W / NW 0276"],
        ["Hastelloy C22", "N06022", "2.4602", "NiCr21Mo14W / NW 6022"],
        [
          "Hastelloy B2 / B3",
          "N10665 / N10675",
          "2.4617 / 2.4600",
          "High Nickel-Molybdenum Alloy",
        ],
        ["Hastelloy C2000", "N06200", "2.4675", "Ni-Cr-Mo-Cu Alloy"],
        ["Hastelloy C59", "N06059", "2.4605", "Alloy 59 / NiCr23Mo16Al"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Mo", "Cr", "Fe", "W", "Other"],
      rows: [
        [
          "C276",
          "51.0 min",
          "15-17",
          "14.5-16.5",
          "4.0-7.0",
          "3.0-4.5",
          "Co: 2.5 max",
        ],
        [
          "C22",
          "50.0 min",
          "12.5-14.5",
          "20-22.5",
          "2.0-6.0",
          "2.5-3.5",
          "Co: 2.5 max",
        ],
        ["B3", "65.0 min", "28.5", "1.5", "1.5", "3.0 max", "Mn: 3.0 max"],
        ["C2000", "Rem", "15-17", "14.5-16.5", "4.0-7.0", "—", "Cu: 1.3-1.9"],
        ["C59", "Rem", "15-16.5", "22-24", "1.5 max", "—", "Al: 0.1-0.4"],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Density (g/cm³)",
        "Tensile Strength",
        "Yield Strength (0.2%)",
        "Elongation",
      ],
      rows: [
        ["Hastelloy C276", "8.89", "790 MPa", "355 MPa", "40%"],
        ["Hastelloy C22", "8.69", "690 MPa", "310 MPa", "45%"],
        ["Hastelloy B2 / B3", "9.20", "760 MPa", "350 MPa", "40%"],
        ["Hastelloy C2000", "8.50", "690 MPa", "310 MPa", "45%"],
        ["Hastelloy C59", "8.60", "690 MPa", "340 MPa", "40%"],
      ],
    },

    toleranceChart: {
      headers: [
        "Specified Diameter in. (mm)",
        "Diameter Tolerance in. (mm) – Over (+)",
        "Diameter Tolerance in. (mm) – Under (-)",
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
          "Under 0.0330 (0.84) to 0.0240 (0.61)",
          "0.0005 (0.013)",
          "0.0005 (0.013)",
        ],
        [
          "Under 0.0240 (0.61) to 0.0120 (0.30)",
          "0.0004 (0.010)",
          "0.0004 (0.010)",
        ],
        [
          "Under 0.0120 (0.30) to 0.0080 (0.20)",
          "0.0003 (0.008)",
          "0.0003 (0.008)",
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
      "Hastelloy C276 (UNS N10276) High-Performance Wires",
      "Hastelloy C22 (UNS N06022) Corrosion Resistant Wires",
      "Hastelloy B2 / B3 (Nickel-Molybdenum) Alloy Wires",
      "Hastelloy C2000 / C59 / C4 Specialty Grade Wires",
      "Precision TIG, MIG & Electrode Welding Wires",
      "Hastelloy Alloy Filler Wires & Welding Filler Rods",
      "Hastelloy Wire Bobbin & Spool Manufacturer in India",
      "High Strength Hastelloy Alloy Wire Ropes & Strands",
      "Custom Diameter Hastelloy Fine Wires (10 Microns+)",
      "Annealed, Polished & Smooth Finish Industrial Wires",
      "Hastelloy Cold Heading & Bright Finish Wire Stockist",
      "Hastelloy Wire Suppliers at Best Prices in Mumbai",
    ],

    relatedSearches: [
      "Hastelloy C276 Wire Price List",
      "Hastelloy C22 Wire Weight Calculator",
      "Hastelloy B2 Wire Dimensions",
      "Hastelloy B3 Wire Price Per Kg in India",
      "Hastelloy C276 Wire Manufacturer in Mumbai",
      "Hastelloy Wire Supplier in India",
      "ASTM Hastelloy Wire Tolerance Chart",
      "ASME Hastelloy Wire Price List PDF",
      "Hastelloy C276 Wire Mechanical Properties",
      "Hastelloy C22 Wire Chemical Composition",
      "Hastelloy Wire Stockist in Pune",
      "Hastelloy Wire Exporter Mumbai",
      "Hastelloy Bright Wire Price in India",
      "Hastelloy Wire Gauge Chart",
      "Hastelloy B2 Filler Wire Supplier",
      "Hastelloy TIG Wire Price",
      "Hastelloy MIG Wire Manufacturers",
      "Hastelloy Wire Rope Catalog PDF",
      "Hastelloy Wire Equivalent Grades",
      "Hastelloy C2000 Wire Price per Meter",
      "Hastelloy updated price list 2026",
      "Hastelloy C59 Wire size chart",
      "Hastelloy Wire Manufacturers in Gujarat",
      "Hastelloy Wire Stockyards in India",
      "Hastelloy C276 Wire thickness chart",
      "Hastelloy B2 Wire Price in India",
      "Top 100 Hastelloy Wire Dealers in Mumbai",
      "Buy Hastelloy Wire Online India",
      "Hastelloy Alloy leading wire manufacturers",
      "Hastelloy Wire descaled finish price",
      "UNS N10276 Wire Price India",
      "UNS N06022 Wire Price Mumbai",
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
      { name: "Buttweld Fittings", slug: "fittings" },
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
              <SectionTitle>Hastelloy Alloy Grades & Applications</SectionTitle>
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
                  {section.items.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>

            {/* Industrial Applications */}
            <section className="mb-8">
              <SectionTitle>
                {productData.industrialApplications.title}
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed">
                {productData.industrialApplications.description}
              </p>
            </section>

            {/* Manufacturing Standards */}
            <section className="mb-8">
              <SectionTitle>
                {productData.manufacturingStandards.title}
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-3">
                {productData.manufacturingStandards.description}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {productData.manufacturingStandards.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
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
              <SectionTitle>Stock Availability of Hastelloy Wire</SectionTitle>
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
                Specification of Hastelloy Wire (C22, C276, B2, B3, C2000, C59,
                C4 & HN)
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
                Diameter Tolerance: Hastelloy Alloy Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Hastelloy Alloy Wires & Filler Metals
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
                Searches Related to Hastelloy Alloy Wire
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

export default HastelloyWires;
