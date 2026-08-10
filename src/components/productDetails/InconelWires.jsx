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
import weldingWiresImage from "../../assets/images/stock/welding-wire.jpg";
import fillerWiresImage from "../../assets/images/stock/filler-wire.jpg";
import wireBobbinsImage from "../../assets/images/stock/wire-bobbin.jpg";
import wireRopesImage from "../../assets/images/stock/wire-rope.jpg";
import coilWiresImage from "../../assets/images/stock/coil-wire.jpg";
import spoolWiresImage from "../../assets/images/stock/spool-wire.jpg";

const InconelWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Inconel Wires Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    subtitle:
      "Premium Quality ASTM B166 / ASME SB166 Inconel Superalloy Wires – Engineered for Extreme Heat & Corrosive Environments with High Mechanical Strength, Self-Healing Oxide Layer & Oxidation Resistance up to 2000°F (1093°C)",

    technicalOverview: {
      title:
        "Inconel Alloy Wires: Technical Overview and Grade Characteristics",
      description:
        "Inconel wires are a family of high-performance nickel-chromium-based superalloys engineered for the most extreme thermal and corrosive environments. These wires are characterized by their ability to maintain exceptional tensile strength and structural integrity at temperatures where standard stainless steels would undergo significant creep or oxidation. When exposed to high heat, Inconel forms a stable, passivating oxide layer that protects the wire surface from further environmental attack, making them indispensable for aerospace, nuclear, and high-pressure vacuum systems.",
    },

    gradeBreakdown: [
      {
        title: "Heat-Resistant Grades: Inconel 600, 601, and 690",
        items: [
          "Inconel 600 (UNS N06600): A versatile grade with high nickel content, offering superior resistance to chloride-ion stress corrosion cracking and alkaline solutions. It performs reliably from cryogenic temperatures up to 2000°F (1093°C).",
          "Inconel 601 (UNS N06601): Features an additional aluminum content that provides enhanced resistance to high-temperature oxidation and spalling, even under severely cyclic heating conditions.",
          "Inconel 690 (UNS N06690): Engineered with high chromium content to provide excellent resistance to oxidizing acids and salts. It is the primary choice for steam generator tubing and specialized wire mesh in the nuclear power industry.",
        ],
      },
      {
        title:
          "Corrosion-Resistant and High-Strength Grades: Inconel 625 and 725",
        items: [
          "Inconel 625 (UNS N06625): Derives its high strength and fatigue resistance from the addition of molybdenum and niobium. It is highly resistant to pitting and crevice corrosion in seawater and chloride-heavy process streams, making it ideal for subsea cabling and offshore hardware.",
          "Inconel 725 (UNS N07725): An age-hardenable version of Alloy 625. It provides nearly double the mechanical strength of the annealed 625 grade while maintaining similar levels of extraordinary corrosion resistance.",
        ],
      },
      {
        title: "Precipitation-Hardenable Grades: Inconel 718 and X-750",
        items: [
          "Inconel 718 (UNS N07718): A high-strength, corrosion-resistant nickel-chromium alloy used at temperatures from -423°F to 1300°F. It is renowned for its excellent weldability and resistance to post-weld cracking, essential for high-strength fasteners and springs in jet engines.",
          "Inconel X-750 (UNS N07750): Similar to Alloy 718 but optimized for high-temperature springs and bolts that require minimal relaxation and high creep-rupture strength under heavy loads.",
        ],
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Inconel wires are manufactured to meet stringent international specifications, including ASTM B166, B446, and ASME SB446. These wires are available in various conditions to suit specific industrial blueprints:",
      items: [
        "Cold Drawn: For high-tensile applications requiring precision and structural rigidity.",
        "Annealed: For maximum ductility and ease of weaving into industrial filters or mesh.",
        "Spring Temper: Optimized for mechanical components requiring high fatigue resistance in high-heat environments.",
      ],
      qualityControl:
        "Every shipment undergoes rigorous quality control, including Positive Material Identification (PMI), tensile testing, and grain-size analysis. We provide comprehensive EN 10204 3.1 Material Test Certificates (MTC) to ensure complete traceability for mission-critical infrastructure.",
    },

    keyFeatures: [
      "High mechanical strength at extreme temperatures up to 2000°F (1093°C)",
      "Self-healing protective oxide layer for superior oxidation resistance",
      "Available in 7 grades: 600, 601, 625, 690, 718, 725 & X-750",
      "Excellent resistance to chloride-ion stress corrosion cracking",
      "Superior pitting and crevice corrosion resistance in seawater",
      "Precipitation-hardenable grades for high-strength applications",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished Bright, Smooth, Enamel, PTFE, Ceramic",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Available in Welding Wires, Filler Wires, Wire Bobbins, Wire Ropes, Coil Wires, Spool Wires",
    ],

    applications: [
      "Aerospace and aircraft engine components",
      "Nuclear reactors and steam generator tubing",
      "Subsea cabling and offshore hardware",
      "High-strength fasteners and springs",
      "Industrial filters and wire mesh",
      "High-pressure vacuum systems",
      "Chemical processing and high-temperature environments",
      "Gas turbines and jet engine components",
    ],

    stockAvailability: {
      weldingWires: {
        title: "Welding Wires",
        image: weldingWiresImage,
        items: [
          "Inconel® Alloy Welding Wires",
          "Inconel Alloy Welding Wires",
          "Grade 625 / 718 Welding Wire",
        ],
      },
      fillerWires: {
        title: "Filler Wires",
        image: fillerWiresImage,
        items: [
          "Inconel® Alloy Filler Wires",
          "Inconel Alloy Filler Wires",
          "High-Temp Filler Wire Rods",
        ],
      },
      wireBobbins: {
        title: "Wire Bobbins",
        image: wireBobbinsImage,
        items: [
          "Inconel® Alloy Wire Bobbin",
          "Inconel Alloy Wire Bobbin",
          "Precision Grade 600 Wires",
        ],
      },
      wireRopes: {
        title: "Wire Ropes",
        image: wireRopesImage,
        items: [
          "Inconel® Alloy Wire Rope",
          "Inconel Alloy Wire Rope Stock",
          "Stranded High-Strength Ropes",
        ],
      },
      coilWires: {
        title: "Coil Wires",
        image: coilWiresImage,
        items: [
          "Inconel® Alloy Coil Wire",
          "Inconel Coil Wire Stock",
          "Inconel X-750 Spring Coils",
        ],
      },
      spoolWires: {
        title: "Spool Wires",
        image: spoolWiresImage,
        items: [
          "Inconel® Alloy Spool Wire",
          "Inconel Alloy Spool Wire",
          "Precision wound Spool Wire",
        ],
      },
    },

    specifications: {
      dimensionsStandards: "ANSI/AWCI – 01-1992, ASTM E 2016-11, RRW 360",
      diameterRange: '0.0004" to 0.040" (10 microns to 1.0 mm)',
      intlSpecifications: "QQ-N-281, BS3076 NA13, DIN 17753, VdTUV 263",
      lengthDensity: 'Cut: 0.125" to 72" | Density: 8.89 g/cm³',
      surfaceFinish: "Polished Bright, Smooth, Enamel, PTFE, Ceramic",
      testCertificate: "MTC EN 10204 3.1 / 3.2 Available",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "AFNOR / EN / GOST"],
      rows: [
        ["Inconel 600", "N06600", "2.4816", "NiCr15Fe / NC15FE"],
        ["Inconel 601", "N06601", "2.4851", "NiCr23Fe / NC23FeA"],
        ["Inconel 625", "N06625", "2.4856", "NiCr22Mo9Nb / NC22DNB4M"],
        ["Inconel 690", "N06690", "2.4642", "High Chromium Nickel Alloy"],
        ["Inconel 718", "N07718", "2.4668", "NiCr19NbMo / Age-Hardenable"],
        ["Inconel 725", "N07725", "—", "NCF 725"],
        ["Inconel X-750", "N07750", "2.4669", "NiCr15Fe7TiAl / Alloy X750"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Mo", "Nb+Ta", "Ti", "Other"],
      rows: [
        [
          "600",
          "72.0 min",
          "14.0-17.0",
          "6.0-10.0",
          "—",
          "—",
          "—",
          "Cu: 0.5 max",
        ],
        ["601", "58.0-63.0", "21.0-25.0", "Bal", "—", "—", "—", "Al: 1.0-1.7"],
        [
          "625",
          "58.0 min",
          "20.0-23.0",
          "5.0 max",
          "8.0-10.0",
          "3.15-4.15",
          "0.4 max",
          "Al: 0.4 max",
        ],
        ["690", "Rem", "27.0-31.0", "7.0-11.0", "—", "—", "—", "C: 0.05 max"],
        [
          "718",
          "50.0-55.0",
          "17.0-21.0",
          "Bal",
          "2.8-3.3",
          "4.75-5.5",
          "0.65-1.15",
          "Al: 0.2-0.8",
        ],
        [
          "725",
          "55.0-59.0",
          "19.0-22.5",
          "Rem",
          "7.0-9.5",
          "2.75-4.0",
          "1.0-1.7",
          "Al: 0.35 max",
        ],
        [
          "X-750",
          "70.0 min",
          "14.0-17.0",
          "5.0-9.0",
          "—",
          "0.7-1.2",
          "2.25-2.75",
          "Al: 0.4-1.0",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Density",
        "Tensile Strength",
        "Yield Strength",
        "Elongation",
      ],
      rows: [
        ["Inconel 600", "8.47 g/cm³", "655 MPa", "310 MPa", "40%"],
        ["Inconel 601", "8.11 g/cm³", "550 MPa", "205 MPa", "30%"],
        ["Inconel 625", "8.44 g/cm³", "827 MPa", "414 MPa", "30%"],
        ["Inconel 690", "8.19 g/cm³", "724 MPa", "348 MPa", "41%"],
        ["Inconel 718", "8.19 g/cm³", "930 MPa", "482 MPa", "45%"],
        ["Inconel 725", "8.31 g/cm³", "855 MPa", "427 MPa", "75%"],
        ["Inconel X-750", "8.28 g/cm³", "1267 MPa", "868 MPa", "25%"],
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
      "Inconel 600 / 601 Oxidation Resistant Wires",
      "Inconel 625 (UNS N06625) High-Strength Marine Wires",
      "Inconel 718 / 725 Age-Hardenable Aerospace Wires",
      "Inconel X-750 Spring Temper & High-Tension Wires",
      "Inconel 690 High-Chromium Corrosion Resistant Wires",
      "Precision TIG, MIG & Electrode Inconel Welding Wires",
      "Inconel Wire Bobbin & Spool Manufacturer in India",
      "High-Nickel Alloy Wire Ropes & Multi-Strand Cables",
      "Bright Annealed, Polished & Smooth Surface Finish",
      "Inconel Cold Heading & Ultra-Fine Diameter Wires",
      "Specialty Inconel Grade Industrial Wire Stockist",
      "Inconel Wire Suppliers at Best Prices in Mumbai",
    ],

    relatedSearches: [
      "Inconel 600 Wire Price List",
      "Inconel 625 Wire Weight Calculator",
      "Inconel 718 Wire Dimensions",
      "Inconel X-750 Wire Price Per Kg in India",
      "Inconel 625 Wire Manufacturer in Mumbai",
      "Inconel Wire Supplier in India",
      "ASTM Inconel Wire Tolerance Chart",
      "ASME Inconel Wire Price List PDF",
      "Inconel 600 Wire Mechanical Properties",
      "Inconel 625 Wire Chemical Composition",
      "Inconel Wire Stockist in Pune",
      "Inconel Wire Exporter Mumbai",
      "Inconel Bright Wire Price in India",
      "Inconel Wire Gauge Chart",
      "Inconel 625 Filler Wire Supplier",
      "Inconel TIG Wire Price",
      "Inconel MIG Wire Manufacturers",
      "Inconel Wire Rope Catalog PDF",
      "Inconel Wire Equivalent Grades",
      "Inconel 718 Wire Price per Meter",
      "Inconel updated price list 2026",
      "Inconel 601 Wire size chart",
      "Inconel Wire Manufacturers in Gujarat",
      "Inconel Wire Stockyards in India",
      "Inconel 625 Wire thickness chart",
      "Inconel 600 Wire Price in India",
      "Top 100 Inconel Wire Dealers in Mumbai",
      "Buy Inconel Wire Online India",
      "Inconel Alloy leading wire manufacturers",
      "Inconel Wire descaled finish price",
      "UNS N06600 Wire Price India",
      "UNS N06625 Wire Price Mumbai",
      "UNS N07718 Alloy Wire Stockist",
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
              <SectionTitle>Inconel Alloy Grades & Applications</SectionTitle>
              {productData.gradeBreakdown.map((section, idx) => (
                <div
                  key={idx}
                  className="mb-4 p-4 bg-white border border-gray-200 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-[#173F52] mb-2">
                    {section.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Manufacturing Standards */}
            <section className="mb-8">
              <SectionTitle>
                {productData.manufacturingStandards.title}
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-3">
                {productData.manufacturingStandards.description}
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                {productData.manufacturingStandards.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm">
                {productData.manufacturingStandards.qualityControl}
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
              <SectionTitle>Stock Availability of Inconel Wire</SectionTitle>
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
                Specification of Inconel Wire (600, 601, 625, 718, X-750)
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
                Universal Diameter Tolerance: Inconel Alloy Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Inconel Alloy Wires & Filler Metals
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
                Searches Related to Inconel Alloy Wire
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

export default InconelWires;
