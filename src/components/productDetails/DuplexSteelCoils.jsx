import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Import contact helpers (same as other components)
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

const DuplexSteelCoils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Duplex & Super Duplex Steel Coils Supplier – S31803, S32205, S32750, S32760",
    subtitle:
      "Premium Quality ASTM A240 / ASME SA240 Duplex & Super Duplex Steel Coils – Dual-Phase Microstructure for Superior Corrosion Resistance, High Strength & Stress Corrosion Cracking Resistance in Aggressive Environments",

    technicalOverview: {
      title: "Duplex & Super Duplex Steel Coils: Technical Overview",
      description:
        "Duplex and Super Duplex stainless steels feature a unique 'dual-phase' microstructure, consisting of approximately equal proportions of Austenite and Ferrite. This metallurgical balance combines the superior corrosion resistance of austenitic steels with the high strength and stress corrosion cracking (SCC) resistance of ferritic grades. Engineered for high-stress environments, these coils outperform standard 300-series stainless steels in resisting pitting, crevice corrosion, and chloride-induced SCC. With yield strengths roughly double those of conventional austenitic grades, Duplex coils allow for significant weight savings through thinner wall designs without sacrificing pressure ratings.",
    },

    gradeBreakdown: [
      {
        title: "Duplex Steel S31803 / S32205 (22% Chrome)",
        description:
          "S31803 was the original designation for the 22% Chromium duplex grade. Modern manufacturing now primarily produces S32205, which utilizes tighter nitrogen and molybdenum specifications to ensure superior corrosion resistance and a more consistent microstructure.",
        items: [],
      },
      {
        title: "Super Duplex Steel S32750 / S32760 (25% Chrome)",
        description:
          "Super Duplex grades are designed for the most aggressive environments, featuring a PREN (Pitting Resistance Equivalent Number) > 40.",
        items: [
          "S32750: A highly alloyed 25% Chrome grade optimized for high-strength, high-chloride service.",
          "S32760: Includes Tungsten and Copper additions, enhancing resistance to mineral acids and sour gas ($H_{2}S$) environments.",
        ],
      },
    ],

    keyFeatures: [
      "Unique dual-phase (Austenite + Ferrite) microstructure",
      "Superior resistance to pitting, crevice corrosion and chloride-induced SCC",
      "Yield strength roughly double that of conventional austenitic grades",
      "Allows significant weight savings through thinner wall designs",
      "Available in Duplex (S31803/S32205) and Super Duplex (S32750/S32760)",
      "PREN > 40 for Super Duplex grades for aggressive environments",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM A240 / ASME SA240 standards",
    ],

    applications: [
      "Chemical processing and petrochemical plants",
      "Oil and gas offshore platforms and subsea equipment",
      "Desalination and seawater handling systems",
      "Heat exchangers and pressure vessels",
      "Pulp and paper industry",
      "High-chloride and sour gas environments",
      "Mining and mineral processing",
      "Structural and architectural applications",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Duplex Steel HR Coils",
          "ASME SA 240 Super Duplex HR",
          "DSS Hot Rolled Coils",
          "Duplex / Super Steel HR Coils",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Duplex Steel Cold Rolled Coils",
          "ASME SA 240 Duplex Steel CR",
          "Duplex Steel CR Coils",
          "Super Duplex Steel CR Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Duplex Steel Slit Coils",
          "Super Duplex Slit Coils",
          "ASME SA 240 Duplex Slit Coils",
          "Duplex/Super Duplex Slit Coils",
        ],
      },
    },

    specifications: {
      standard: "ASTM A240 / ASME SA240",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      finishes: "HR, CR, NO.1, 2B, 2D, BA, NO.8, SATIN, SCOTCH BRITE",
      formLength: "Coil / Strip, Length as per Customer Requirement",
    },

    equivalentGrades: {
      headers: ["STANDARD", "WERKSTOFF NR.", "UNS"],
      rows: [
        ["Duplex S31803", "1.4462", "S31803"],
        ["Duplex 2205", "1.4462", "S32205"],
        ["Super Duplex 2507", "1.4410", "S32750"],
        ["Super Duplex S32760", "1.4410 / 1.4501", "S32760"],
      ],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "C",
        "Mn",
        "Si",
        "P",
        "S",
        "Cr",
        "Mo",
        "Ni",
        "N",
        "Fe",
      ],
      rows: [
        [
          "S31803",
          "0.030 max",
          "2.00 max",
          "1.00 max",
          "0.030 max",
          "0.020 max",
          "22.0 – 23.0",
          "3.0 – 3.5",
          "4.50 – 6.50",
          "0.14 – 0.20",
          "63.72 min",
        ],
        [
          "S32205",
          "0.030 max",
          "2.00 max",
          "1.00 max",
          "0.030 max",
          "0.020 max",
          "21.0 – 23.0",
          "2.50 – 3.50",
          "4.50 – 6.50",
          "0.08 – 0.20",
          "63.54 min",
        ],
        [
          "S32750",
          "0.030 max",
          "1.20 max",
          "0.80 max",
          "0.035 max",
          "0.020 max",
          "24.0 – 26.0",
          "3.00 – 5.00",
          "6.00 – 8.00",
          "0.24 – 0.32",
          "58.095 min",
        ],
        [
          "S32760",
          "0.05 max",
          "1.00 max",
          "1.00 max",
          "0.030 max",
          "0.010 max",
          "24.0 – 26.0",
          "3.00 – 4.00",
          "6.00 – 8.00",
          "0.20 – 0.30",
          "57.61 min",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grades",
        "Density (g/cm³)",
        "Density (lb/in³)",
        "Melting Point (°C)",
        "Melting Point (°F)",
      ],
      rows: [
        ["S31803 / S32205", "7.805", "0.285", "1420 – 1465", "2588 – 2669"],
        ["S32750 / S32760", "7.8", "0.281", "1350", "2460"],
      ],
    },

    gaugeChart: {
      headers: ["Gauge Number", "Inches", "MM"],
      rows: [
        ["8", ".17187", "4.365"],
        ["9", ".15625", "3.968"],
        ["10", ".14062", "3.571"],
        ["11", ".125", "3.175"],
        ["12", ".10937", "2.778"],
        ["14", ".07812", "1.984"],
        ["16", ".0625", "1.587"],
        ["18", ".050", "1.270"],
        ["20", ".0375", ".9525"],
        ["22", ".03125", ".7937"],
        ["24", ".025", ".635"],
        ["26", ".01875", ".4762"],
        ["28", ".01562", ".3963"],
        ["30", ".0125", ".3175"],
      ],
    },

    weightChart: {
      headers: [
        "Thickness (mm)",
        "Weight Kg/M2",
        "2000 X 1000",
        "2500 X 1250",
        "3000 X 1500",
      ],
      rows: [
        ["0.18", "1.44", "2.88", "—", "—"],
        ["0.20", "1.60", "3.20", "—", "—"],
        ["0.22", "1.76", "3.52", "—", "—"],
        ["0.24", "1.92", "3.84", "—", "—"],
        ["0.27", "2.16", "4.32", "—", "—"],
        ["0.28", "2.24", "4.48", "—", "—"],
        ["0.32", "2.56", "5.12", "—", "—"],
        ["0.38", "3.04", "6.08", "—", "—"],
        ["0.44", "3.52", "7.04", "11.00", "—"],
        ["0.50", "4.00", "8.00", "12.50", "—"],
        ["0.56", "4.48", "8.96", "14.00", "—"],
        ["0.63", "5.04", "10.08", "15.75", "—"],
        ["0.75", "6.00", "12.00", "18.75", "—"],
        ["0.88", "7.04", "14.08", "22.00", "—"],
        ["1.00", "8.00", "16.00", "25.00", "36.00"],
        ["1.13", "9.04", "18.08", "28.25", "40.00"],
        ["1.25", "10.00", "20.00", "31.25", "45.00"],
        ["1.38", "11.00", "22.03", "34.50", "50.00"],
        ["1.50", "12.00", "24.00", "37.50", "54.00"],
        ["1.75", "14.00", "28.00", "43.75", "63.00"],
        ["2.00", "16.00", "32.00", "50.00", "72.00"],
        ["2.25", "18.00", "36.00", "56.25", "81.00"],
        ["2.50", "20.00", "40.00", "62.50", "90.00"],
        ["2.75", "22.00", "44.00", "68.75", "99.00"],
        ["3.00", "24.00", "48.00", "75.00", "108.00"],
        ["3.25", "26.00", "52.00", "81.25", "117.00"],
        ["3.50", "28.00", "56.00", "87.50", "126.00"],
        ["3.75", "30.00", "60.00", "93.75", "135.00"],
        ["4.00", "32.00", "64.00", "100.00", "144.00"],
        ["4.25", "34.00", "68.00", "106.25", "153.00"],
        ["4.50", "36.00", "72.00", "112.50", "162.00"],
        ["5.00", "40.00", "80.00", "125.00", "180.00"],
        ["5.50", "44.00", "88.00", "137.50", "198.00"],
        ["6.00", "48.00", "96.00", "150.00", "216.00"],
        ["6.50", "52.00", "104.00", "162.50", "234.00"],
        ["7.00", "56.00", "112.00", "175.00", "252.00"],
        ["7.50", "60.00", "120.00", "187.50", "270.00"],
        ["8.00", "64.00", "128.00", "200.00", "288.00"],
      ],
    },

    toleranceChart: {
      headers: [
        "Thickness in. (mm)",
        "Sheet Width Tolerance in. (mm) – Up to 36 (914.4)",
        "Sheet Width Tolerance in. (mm) – Up to 48 (1219.2)",
      ],
      rows: [
        ["0.017 – 0.030 (0.43 – 0.76)", "0.0015 (0.038)", "0.002 (0.051)"],
        ["0.031 – 0.041 (0.79 – 1.04)", "0.002 (0.051)", "0.003 (0.076)"],
        ["0.042 – 0.059 (1.1 – 1.5)", "0.003 (0.076)", "0.004 (0.10)"],
        ["0.060 – 0.073 (1.5 – 1.9)", "0.003 (0.076)", "0.0045 (0.11)"],
        ["0.074 – 0.084 (1.9 – 2.1)", "0.004 (0.10)", "0.0055 (0.14)"],
        ["0.085 – 0.099 (2.2 – 2.5)", "0.004 (0.10)", "0.006 (0.15)"],
        ["0.100 – 0.115 (2.5 – 2.9)", "0.005 (0.13)", "0.007 (0.18)"],
        ["0.116 – 0.131 (2.9 – 3.3)", "0.005 (0.13)", "0.0075 (0.19)"],
        ["0.132 – 0.146 (3.4 – 3.7)", "0.006 (0.15)", "0.009 (0.23)"],
        ["0.147 – 0.187 (3.7 – 4.7)", "0.007 (0.18)", "0.0105 (0.2)"],
      ],
    },

    specializedProducts: [
      "Duplex Steel UNS S31803 / S32205 Coils",
      "Super Duplex Steel UNS S32750 / S32760 Coils",
      "ASTM A240 Duplex Steel Slit Coils & Strips",
      "Super Duplex 2507 (S32750) Hot Rolled Coils",
      "Duplex 2205 (S32205) Cold Rolled Coils Dealer",
      "Super Duplex S32760 Precision Slit Coils",
      "Duplex Steel Coils Manufacturer in India",
      "INOX 1.4462 / 1.4410 Steel Coils Exporter",
      "Duplex Steel Polished Coils (No.4 / BA / No.8)",
      "Super Duplex Steel Coils Supplier in Mumbai",
      "ASME SA240 Duplex Steel HR & CR Coils",
      "Super Duplex S32750 Industrial Strip Coils",
      "Duplex Steel S31803 Ornamental Coils",
      "Super Duplex S32760 Zeron 100 Equivalent Coils",
      "Duplex Steel Coils at Best Price in India",
      "Super Duplex Steel Coils Stockist in India",
      "Customized Duplex Steel Slitting Services",
      "High Strength Super Duplex Spring Hard Coils",
    ],

    relatedSearches: [
      "Duplex Steel S31803 Coil Price List",
      "Duplex 2205 Coil Weight Calculator",
      "Super Duplex S32750 Coil Dimensions",
      "Super Duplex S32760 Coil Price Per Kg in India",
      "Duplex Steel Coil Manufacturer in Mumbai",
      "Super Duplex Steel Coil Supplier in India",
      "ASTM A240 Duplex Coil Thickness Tolerance",
      "ASME SA240 Super Duplex Coil Price List PDF",
      "Duplex Steel S32205 Coil Mechanical Properties",
      "Super Duplex 2507 Coil Chemical Composition",
      "Duplex Steel Coil Stockist in Pune",
      "Super Duplex Steel Coil Exporter",
      "Duplex Steel Coil Price in Mumbai",
      "Super Duplex Coil Gauge Chart",
      "Duplex Steel Slit Coil Price",
      "Super Duplex S32760 Strip Coil Supplier",
      "Duplex Steel S31803 Hot Rolled Coil Price",
      "Super Duplex S32750 Cold Rolled Coil Manufacturers",
      "Duplex Steel Coil Catalog PDF",
      "Super Duplex Steel Coil Equivalent Grades",
      "Duplex 2205 Coil Price per Meter",
      "Super Duplex S32760 Coil updated price list",
      "Duplex Steel S31803 Coil size chart",
      "Super Duplex Steel Coil updated Price List",
      "Duplex Steel Coil Manufacturers in Gujarat",
      "Super Duplex Steel Coil Stockyards in India",
      "Duplex Steel Coil thickness chart",
      "Super Duplex Steel Coil Price in India",
      "Top 100 Duplex Steel Coil Dealers in Pune",
      "Buy Super Duplex Steel Coil Online",
      "Duplex Steel Coil leading manufacturers in Mumbai",
      "Super Duplex Steel Coil Zeron 100 Equivalent",
      "Duplex Steel Coil 2B Finish price",
      "Super Duplex Steel Coil BA Finish stockist",
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
                Duplex & Super Duplex Grades & Applications
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
                Stock Availability of Duplex & Super Duplex Coils
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
                Specification of Duplex / Super Duplex Steel Coils
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

            {/* Gauge Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex & Super Duplex Coils Thickness Chart
              </SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex & Super Duplex Coils Weight / Size Chart
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex & Super Duplex Coils Thickness Tolerance
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Duplex & Super Duplex Steel Coils
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
                Searches Related to Duplex & Super Duplex Coils
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

            {/* Get A Quote - UPDATED */}
            <div className="bg-[#173F52] rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Get A Quote
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Email us for a quote or contact us for more information.
              </p>
              <a
                href={getMailToUrl(contact)}
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
      {/* FLOATING WHATSAPP & CALL BUTTONS - UPDATED */}
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

export default DuplexSteelCoils;
