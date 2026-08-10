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
import productImage from "../../assets/images/productImage/coil.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Unified Stock Availability Images (same for all product pages)
import hrCoilsImage from "../../assets/images/stock/hr-coils.jpg";
import crCoilsImage from "../../assets/images/stock/cr-coils.jpg";
import slitCoilsImage from "../../assets/images/stock/slit-coils.jpg";

const InconelCoils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Inconel Coils Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    subtitle:
      "Premium Quality ASTM B168 / ASME SB168 Inconel Superalloy Coils – Engineered for Extreme Heat & Corrosive Environments with High Mechanical Strength, Self-Healing Oxide Layer & Oxidation Resistance up to 2000°F (1093°C)",

    technicalOverview: {
      title: "Inconel Coils: Technical Overview",
      description:
        "Inconel coils are nickel-chromium superalloys engineered for extreme heat and corrosive environments. They maintain high mechanical strength at temperatures where standard steel fails, forming a protective, self-healing oxide layer when heated. These properties make them indispensable for aerospace, nuclear reactors, and high-pressure chemical processing.",
    },

    gradeBreakdown: [
      {
        title: "Heat-Resistant Grades: Inconel 600, 601, and 690",
        items: [
          "Inconel 600 (UNS N06600): A versatile grade resistant to chloride-ion stress corrosion cracking, performing from cryogenic levels up to 2000°F (1093°C).",
          "Inconel 601 (UNS N06601): Enhanced with aluminum for superior resistance to high-temperature oxidation and spalling.",
          "Inconel 690 (UNS N06690): Features high chromium content, specifically designed for steam generator tubing in the nuclear power industry to resist oxidizing acids.",
        ],
      },
      {
        title: "Corrosion-Resistant Grades: Inconel 625 and 725",
        items: [
          "Inconel 625 (UNS N06625): Utilizes molybdenum and niobium for high strength and excellent resistance to pitting and crevice corrosion in seawater and chloride-heavy process streams.",
          "Inconel 725 (UNS N07725): An age-hardenable version of Alloy 625, providing nearly double the strength for demanding subsea hardware and offshore firewater systems.",
        ],
      },
      {
        title: "High-Strength Grades: Inconel 718 and X-750",
        items: [
          "Inconel 718 (UNS N07718): A precipitation-hardenable alloy known for its excellent weldability and creep-rupture strength up to 1300°F (704°C).",
          "Inconel X-750 (UNS N07750): Optimized for high-temperature springs and fasteners that require minimal relaxation under heavy loads in gas turbines.",
        ],
      },
    ],

    manufacturingStandards: {
      title: "Standards and Quality Assurance",
      description:
        "Manufactured to ASTM B168, B443, and ASME SB443 standards, our Inconel coils are available in hot-rolled (HR), cold-rolled (CR), and precision-slit formats. Every coil undergoes rigorous testing, including Positive Material Identification (PMI) and ultrasonic inspection, supported by full EN 10204 3.1 certification to ensure structural integrity in mission-critical infrastructure.",
    },

    keyFeatures: [
      "High mechanical strength at extreme temperatures up to 2000°F (1093°C)",
      "Self-healing protective oxide layer for superior oxidation resistance",
      "Available in 7 grades: 600, 601, 625, 690, 718, 725 & X-750",
      "Excellent resistance to chloride-ion stress corrosion cracking",
      "Superior pitting and crevice corrosion resistance in seawater",
      "Precipitation-hardenable grades for high-strength applications",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM B168 / ASME SB168 standards",
    ],

    applications: [
      "Aerospace and aircraft engine components",
      "Nuclear reactors and steam generator tubing",
      "High-pressure chemical processing equipment",
      "Subsea hardware and offshore firewater systems",
      "Gas turbine fasteners and high-temperature springs",
      "Seawater and chloride-heavy process streams",
      "Heat exchangers and furnace components",
      "Cryogenic applications and high-temperature oxidation environments",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Inconel Hot Rolled Coils",
          "Inconel Alloy HR Coils",
          "ASME SB168 Inconel HR Coils",
          "Inconel® Alloy Hot Rolled Coils",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Inconel Cold Rolled Coils",
          "Inconel® Alloy CR Coils",
          "Inconel Alloy Cold Rolled Coils",
          "ASME SB168 Inconel CR Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Inconel Slit Coils",
          "Inconel Alloy Slit Coils",
          "Inconel® Alloy Slit Coils",
          "ASME SB168 Inconel Slit Coils",
        ],
      },
    },

    specifications: {
      standard: "ASTM B168 / ASME SB168",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      formLength: "Coil / Strip, Length as per Customer Requirement",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, NDT, Ultrasonic Testing",
    },

    equivalentGrades: {
      headers: ["GRADE", "WNR.", "UNS", "JIS / AFNOR / EN / GOST"],
      rows: [
        [
          "Inconel 600",
          "2.4816",
          "N06600",
          "NCF 600 / NA 13 / NC15FE11M / ????? 28",
        ],
        [
          "Inconel 601",
          "2.4851",
          "N06601",
          "NCF 601 / NA 49 / NC23FeA / XH60BT",
        ],
        [
          "Inconel 625",
          "2.4856",
          "N06625",
          "NCF 625 / NA 21 / NC22DNB4M / ??75????",
        ],
        ["Inconel 690", "2.4642", "N06690", "–"],
        ["Inconel 718", "2.4668", "N07718", "–"],
        ["Inconel 725", "–", "N07725", "–"],
        ["Inconel X-750", "2.4669", "N07750", "–"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Mo", "Mn", "Si", "Cu", "Other"],
      rows: [
        [
          "600",
          "72.0 min",
          "14.0-17.0",
          "6.0-10.0",
          "–",
          "1.0 max",
          "0.5 max",
          "0.5 max",
          "C: 0.15 max",
        ],
        [
          "601",
          "58.0-63.0",
          "21.0-25.0",
          "Bal",
          "–",
          "1.0 max",
          "0.5 max",
          "1.0 max",
          "Al: 1.0-1.7",
        ],
        [
          "625",
          "58.0 min",
          "20.0-23.0",
          "5.0 max",
          "8.0-10.0",
          "0.5 max",
          "0.5 max",
          "–",
          "Nb: 3.15-4.15",
        ],
        [
          "690",
          "58 min",
          "27-31",
          "7-11",
          "–",
          "0.5 max",
          "0.5 max",
          "0.5 max",
          "C: 0.05 max",
        ],
        [
          "718",
          "50-55",
          "17-21",
          "Bal",
          "2.8-3.3",
          "0.35 max",
          "0.35 max",
          "0.3 max",
          "Nb: 4.75-5.50",
        ],
        [
          "725 / X-750",
          "70.0 min",
          "14.0-17.0",
          "5.0-9.0",
          "–",
          "1.0 max",
          "0.5 max",
          "0.5 max",
          "Ti: 2.25-2.75",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength (0.2%)",
        "Elongation",
      ],
      rows: [
        ["Inconel 600", "8.47 g/cm³", "1413 °C", "655 MPa", "310 MPa", "40%"],
        ["Inconel 601", "8.1 g/cm³", "1411 °C", "550 MPa", "205 MPa", "30%"],
        ["Inconel 625", "8.4 g/cm³", "1350 °C", "930 MPa", "517 MPa", "42.5%"],
        ["Inconel 690", "8.3 g/cm³", "1363 °C", "485 MPa", "275 MPa", "25%"],
        ["Inconel 718", "8.19 g/cm³", "1336 °C", "930 MPa", "482 MPa", "45%"],
        ["725 / X-750", "8.28 g/cm³", "1430 °C", "1267 MPa", "868 MPa", "25%"],
      ],
    },

    availabilityChart: {
      headers: [
        "Coil Type / Grade Reference",
        "Sizes (Thickness)",
        "Availability",
      ],
      rows: [
        ["ASTM B168 / ASME SB168 / SB443", "0.4mm", "Y"],
        ["Inconel 600 / 601 Coils", "0.5mm", "Y"],
        ["Inconel 625 Coils", "0.8mm", "Y"],
        ["Inconel 690 Coils", "1mm", "Y"],
        ["Inconel 718 / 725 Coils", "1.2mm", "Y"],
        ["Inconel X-750 Coils", "1.6mm", "Y"],
        ["ASTM B168 / ASME SB168 / SB443", "2mm", "Y"],
        ["Inconel 600 / 601 Coils", "3mm", "Y"],
        ["Inconel 625 Coils", "4mm", "Y"],
        ["Inconel 690 Coils", "5mm", "Y"],
        ["Inconel 718 / 725 Coils", "6mm", "Y"],
        ["Inconel X-750 Coils", "8mm", "Y"],
        ["ASTM B168 / ASME SB168 / SB443", "10mm", "Y"],
        ["Inconel 600 / 601 Coils", "12mm", "Y"],
        ["Inconel 625 Coils", "16mm", "Y"],
        ["Inconel 690 Coils", "20mm", "Y"],
        ["Inconel 718 / 725 Coils", "25mm", "Y"],
      ],
    },

    weightChart: {
      headers: [
        "Size (mm)",
        "Weight per Coil (Kg)",
        "Size (mm)",
        "Weight per Coil (Kg)",
      ],
      rows: [
        ["4000 x 2000 x 2.0", "136.0", "3000 x 1500 x 5.0", "191.0"],
        ["4000 x 2000 x 3.0", "204.0", "4000 x 2000 x 5.0", "340.0"],
        ["2500 x 1250 x 4.0", "106.0", "2500 x 1250 x 6.0", "159.0"],
        ["3000 x 1500 x 4.0", "153.0", "3000 x 1500 x 6.0", "230.0"],
        ["4000 x 2000 x 4.0", "272.0", "4000 x 2000 x 6.0", "408.0"],
        [
          "2500 x 1250 x 5.0",
          "133.0",
          "Applicable across all Inconel Alloy Grades",
          "—",
        ],
      ],
    },

    specializedProducts: [
      "Inconel 600 / 601 Oxidation Resistant Coils",
      "Inconel 625 High Strength Marine Coils",
      "Inconel 718 Precipitation Hardened Coils",
      "Inconel 690 High Chromium Steam Coils",
      "ASTM B168 Inconel Hot Rolled (HR) Coils",
      "ASME SB168 Inconel Cold Rolled (CR) Coils",
      "Inconel Precision Slit Coils & Industrial Strips",
      "Inconel Alloy Coils Manufacturer in India",
      "Inconel Coils Supplier in Mumbai",
      "UNS N06600 / N06625 / N07718 Coil Exporter",
      "INOX 2.4816 / 2.4856 / 2.4668 Alloy Coils",
      "Inconel X-750 Spring Temper Alloy Coils",
      "Best Price Inconel Alloy Coil Dealer in India",
      "Inconel Custom Thickness & Cut-to-Size Coils",
      "Inconel 725 High Pressure Resistance Coils",
      "Nickel Alloy 625 Coil Stockist in India",
    ],

    relatedSearches: [
      "Inconel 600 Coil Price List",
      "Inconel 625 Coil Weight Calculator",
      "Inconel 718 Coil Dimensions",
      "Inconel 601 Coil Price Per Kg in India",
      "Inconel Coil Manufacturer in Mumbai",
      "Inconel 625 Coil Supplier in India",
      "ASTM B168 Inconel Coil Thickness Tolerance",
      "ASME SB168 Inconel 600 Coil Price List PDF",
      "Inconel 625 Coil Mechanical Properties",
      "Inconel 690 Coil Chemical Composition",
      "Inconel Coil Stockist in Pune",
      "Inconel 600 Coil Exporter",
      "Inconel Alloy Coil Price in Mumbai",
      "Inconel Coil Gauge Chart",
      "Inconel Slit Coil Price",
      "Inconel 625 Strip Coil Supplier",
      "Inconel Hot Rolled Coil Price",
      "Inconel Cold Rolled Coil Manufacturers",
      "Inconel Coil Catalog PDF",
      "Inconel 600 Coil Equivalent Grades",
      "Inconel 625 Coil Price per Meter",
      "Inconel 718 Coil updated price list",
      "Inconel 600 Coil size chart",
      "Inconel Alloy Coil updated Price List",
      "Inconel Coil Manufacturers in Gujarat",
      "Inconel Coil Stockyards in India",
      "Inconel 625 Coil thickness chart",
      "Inconel 601 Coil Price in India",
      "Top 100 Inconel Coil Dealers in Pune",
      "Buy Inconel 600 Coil Online",
      "Inconel Alloy Coil leading manufacturers in Mumbai",
      "Inconel 625 Coil descaled finish",
      "Inconel 725 Coil 2B Finish price",
      "Inconel X-750 Coil BA Finish stockist",
      "UNS N06600 Coil Price India",
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
              <p className="text-gray-700 leading-relaxed">
                {productData.manufacturingStandards.description}
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
              <SectionTitle>Stock Availability of Inconel Coils</SectionTitle>
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
              <SectionTitle>Specification of Inconel Coils</SectionTitle>
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

            {/* Availability Chart */}
            <section className="mb-8">
              <SectionTitle>Inconel Coil Stock Availability</SectionTitle>
              <Table
                headers={productData.availabilityChart.headers}
                rows={productData.availabilityChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Inconel Cold Rolled Coils (Descaled) Weight Chart
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM B168 / ASME SB168 Type Coils
              </p>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>Specialized in Inconel Alloy Coils</SectionTitle>
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
                Searches Related to Inconel Alloy Coils
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

export default InconelCoils;
