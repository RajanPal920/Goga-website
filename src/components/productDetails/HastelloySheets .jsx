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
import productImage from "../../assets/images/productImage/sheets.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (using sheet-specific or unified images)
import hotRolledSheetsImage from "../../assets/images/stock/hot-rolled-sheets.jpg";
import coldRolledSheetsImage from "../../assets/images/stock/cold-rolled-sheets.jpg";
import perforatedSheetsImage from "../../assets/images/stock/perforated-sheets.jpg";

const HastelloySheets = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Hastelloy Sheets Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    subtitle:
      "Premium Quality Hastelloy Superalloy Sheets – Nickel-Based Alloys Engineered for Maximum Resistance to Aggressive Chemicals, Chlorides & Reducing Acids in Critical Industrial Environments",

    technicalOverview: {
      title: "Hastelloy Sheets: Technical Overview",
      description:
        "Hastelloy sheets are high-performance nickel-molybdenum-chromium superalloys engineered to withstand the most aggressive chemical environments. These sheets maintain exceptional mechanical integrity and corrosion resistance where standard stainless steels fail. Available in C-Series (C276, C22, C2000, C59, C4) and B-Series (B2, B3) with specialized grades like Hastelloy N for molten fluoride salt service.",
    },

    gradeBreakdown: [
      {
        title: "Hastelloy C-Series: Universal Corrosion Resistance",
        description:
          "The C-series is the most versatile group of Hastelloy alloys, designed to handle a broad spectrum of volatile chemical process streams.",
        items: [
          "Hastelloy C276 (UNS N10276): The industry standard for aggressive environments. Exceptionally resistant to wet chlorine gas, hypochlorites, and chlorine dioxide.",
          "Hastelloy C22 (UNS N06022): Offers better overall corrosion resistance than C276 in oxidizing environments. Provides superior protection against localized corrosion and is frequently used in pharmaceutical and biotech vessel fabrication.",
          "Hastelloy C2000 (UNS N06200): A unique alloy with deliberate copper additions, providing maximum versatility in both oxidizing and reducing environments. Excels specifically in sulfuric acid service.",
          "Hastelloy C59, C4, and C-4: Specialized grades optimized for thermal stability and resistance to grain-boundary precipitation, ensuring corrosion resistance is maintained in the heat-affected zones of welded sheet structures.",
        ],
      },
      {
        title: "Hastelloy B-Series: Reducing Acid Specialists",
        description:
          "The B-series alloys are specifically engineered for resistance against reducing environments, particularly hydrochloric acid.",
        items: [
          "Hastelloy B2 (UNS N10665): A nickel-molybdenum alloy with significant resistance to hydrochloric acid at all concentrations and temperatures. Also performs well in pure sulfuric and phosphoric acids.",
          "Hastelloy B3 (UNS N10675): An improved version of B2 with significantly enhanced thermal stability. Makes fabrication and welding of heavy sheets easier while maintaining the same high level of resistance to reducing acids.",
        ],
      },
      {
        title: "Specialized Grades: Hastelloy N",
        description:
          "Hastelloy N (UNS N10003): Also known as Alloy N, this grade was developed specifically for service in molten fluoride salts. It maintains excellent oxidation resistance and mechanical properties at temperatures up to 704°C (1300°F).",
        items: [],
      },
    ],

    keyFeatures: [
      "Exceptional resistance to aggressive chemicals, chlorides, and acids",
      "Outstanding pitting, crevice corrosion, and stress corrosion cracking resistance",
      "Available in C-Series (C276, C22, C2000, C59, C4) and B-Series (B2, B3)",
      "Specialized grades: Hastelloy N for molten fluoride salts",
      "Universal resistance to both oxidizing and reducing environments",
      "Thickness: 0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      "Hardness & Temper: Soft, 1/4 Hard, 1/2 Hard, Full Hard, Spring Hard",
      "Value Added Services: Waterjet/Laser Cutting, Bending, Annealing, Pickling, Forging",
      "Complies with ASTM B333 / ASME SB333, B575 / SB575",
    ],

    applications: [
      "Chemical processing and pollution control equipment",
      "Pharmaceutical and biotech vessel fabrication",
      "Hydrochloric acid and sulfuric acid handling",
      "Heat exchangers and high-pressure reactors",
      "Flue gas desulfurization (FGD) systems",
      "Sour gas service in oil & gas industry",
      "Wet chlorine gas and hypochlorite environments",
      "Molten fluoride salt service",
    ],

    stockAvailability: {
      hotRolledSheets: {
        title: "Hot Rolled Sheets",
        image: hotRolledSheetsImage,
        items: [
          "Hastelloy C276 HR Sheets",
          "Hastelloy B2 / B3 HR Stock",
          "ASME SB 333 HR Alloy Sheets",
        ],
      },
      coldRolledSheets: {
        title: "Cold Rolled Sheets",
        image: coldRolledSheetsImage,
        items: [
          "Hastelloy C22 Precision CR",
          "Hastelloy C2000 CR Stock",
          "SB 333 CR Alloy Sheets",
        ],
      },
      perforatedSheets: {
        title: "Perforated Sheets",
        image: perforatedSheetsImage,
        items: [
          "Hastelloy Perforated Sheets",
          "Custom Cut Hastelloy Blanks",
          "SB 333 Perforated Alloy Sheets",
        ],
      },
    },

    specifications: {
      standards: "ASTM B333 / ASME SB333, B575 / SB575",
      thicknessSize: "0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      hardnessTemper: "Soft, 1/4 Hard, 1/2 Hard, Full Hard, Spring Hard",
      valueAddedServices:
        "Waterjet/Laser Cutting, Bending, Annealing, Pickling, Forging",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "WERKSTOFF NR.",
        "UNS NO.",
        "JIS / AFNOR / GOST STANDARDS",
      ],
      rows: [
        [
          "Hastelloy C276",
          "2.4819",
          "N10276",
          "NW 0276 | NiMo16Cr15W | ??65???",
        ],
        [
          "Hastelloy C22",
          "2.4602",
          "N06022",
          "NW 6022 | NiCr21Mo14W | Z3CND17-11-02",
        ],
        ["Hastelloy B2", "2.4617", "N10665", "NW 0665 | NiMo28 | 2.4617 Alloy"],
        [
          "Hastelloy B3",
          "2.4600",
          "N10675",
          "UNS N10675 | High Nickel-Moly Alloy",
        ],
        [
          "Hastelloy C2000",
          "2.4675",
          "N06200",
          "NiCr23Mo16Cu | Specialty Corrosion Alloy",
        ],
        ["Hastelloy C59", "2.4605", "N06059", "NiCr23Mo16Al | Alloy 59"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Mo", "Fe", "W", "Co (Max)", "C (Max)"],
      rows: [
        [
          "C276",
          "50.99 min",
          "14.5-16.5",
          "15.0-17.0",
          "4.0-7.0",
          "3.0-4.5",
          "2.50",
          "0.01",
        ],
        [
          "C22",
          "50.01 min",
          "20.0-22.5",
          "12.5-14.5",
          "2.0-6.0",
          "2.5-3.5",
          "2.50",
          "0.01",
        ],
        [
          "B2",
          "Balance",
          "1.0 max",
          "26.0-30.0",
          "2.0 max",
          "-",
          "1.00",
          "0.02",
        ],
        [
          "B3",
          "65.0 min",
          "1.5 max",
          "28.5 min",
          "1.5 max",
          "3.0 max",
          "3.00",
          "0.01",
        ],
        [
          "C2000",
          "Remainder",
          "22.0-24.0",
          "15.0-17.0",
          "3.0 max",
          "-",
          "2.00",
          "0.01",
        ],
        [
          "C59",
          "Balance",
          "22.0-24.0",
          "15.0-16.5",
          "1.5 max",
          "-",
          "0.30",
          "0.01",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade Name",
        "Density (g/cm³)",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Melting Point",
      ],
      rows: [
        ["Hastelloy C276", "8.89", "790 MPa", "355 MPa", "1370 °C"],
        ["Hastelloy C22", "8.69", "690 MPa", "310 MPa", "1399 °C"],
        ["Hastelloy B2", "9.20", "760 MPa", "350 MPa", "1370 °C"],
        ["Hastelloy B3", "9.22", "800 min", "310 min", "1418 °C"],
        ["Hastelloy C2000", "8.50", "690 MPa", "310 MPa", "1390 °C"],
      ],
    },

    gaugeChart: {
      headers: ["Gauge No.", "Inches", "MM", "Gauge No.", "Inches", "MM"],
      rows: [
        ["8", "0.17187", "4.365", "18", "0.0500", "1.270"],
        ["9", "0.15625", "3.968", "20", "0.0375", "0.9525"],
        ["10", "0.14062", "3.571", "22", "0.03125", "0.7937"],
        ["11", "0.1250", "3.175", "24", "0.0250", "0.635"],
        ["12", "0.10937", "2.778", "26", "0.01875", "0.476"],
        ["14", "0.07812", "1.984", "28", "0.01562", "0.396"],
        ["16", "0.0625", "1.587", "30", "0.0125", "0.3175"],
      ],
    },

    weightChart: {
      headers: [
        "Thickness (mm)",
        "Weight (KG/M²)",
        "2000 x 1000 (kg)",
        "2500 x 1250 (kg)",
        "3000 x 1500 (kg)",
      ],
      rows: [
        ["0.50 mm", "4.45", "8.90", "13.91", "20.03"],
        ["0.80 mm", "7.12", "14.24", "22.25", "32.04"],
        ["1.00 mm", "8.90", "17.80", "27.81", "40.05"],
        ["1.20 mm", "10.68", "21.36", "33.38", "48.06"],
        ["1.50 mm", "13.35", "26.70", "41.72", "60.08"],
        ["2.00 mm", "17.80", "35.60", "55.63", "80.10"],
        ["2.50 mm", "22.25", "44.50", "69.53", "100.13"],
        ["3.00 mm", "26.70", "53.40", "83.44", "120.15"],
        ["4.00 mm", "35.60", "71.20", "111.25", "160.20"],
        ["5.00 mm", "44.50", "89.00", "139.06", "200.25"],
        ["6.00 mm", "53.40", "106.80", "166.88", "240.30"],
        ["8.00 mm", "71.20", "142.40", "222.50", "320.40"],
        ["10.00 mm", "89.00", "178.00", "278.13", "400.50"],
      ],
      note: "Hastelloy is approximately 11% heavier than standard Stainless Steel. Always verify the specific gravity of the exact grade (e.g., B2 at 9.20) for high-precision engineering requirements.",
    },

    toleranceChart: {
      headers: [
        "Nominal Thickness in. (mm)",
        'Tolerance Over/Under – 36" (914.4 mm)',
        'Tolerance Over/Under – 48" (1219 mm)',
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
        ["0.147 – 0.187 (3.7 – 4.7)", "0.007 (0.18)", "0.0105 (0.26)"],
      ],
    },

    specializedProducts: [
      "Hastelloy C276 & C22 Ultra-Corrosion Resistant Sheets",
      "Hastelloy B2 & B3 Acid Resistant High-Nickel Sheets",
      "Hastelloy C2000 / C59 / C4 Specialty Performance Alloys",
      "Hastelloy X / N High-Temperature Heat Resistant Stock",
      "Precision Waterjet & Laser Cut Hastelloy Sheet Blanks",
      "ASTM B575 / ASME SB575 Standard Compliant Material",
      "Leading Hastelloy Sheet Manufacturer & Exporter in Mumbai",
      "Custom Perforated & Fabricated Nickel Alloy Solutions",
    ],

    relatedSearches: [
      "Hastelloy C276 Sheet Price List 2026",
      "Hastelloy C22 Sheet Supplier Mumbai",
      "Hastelloy B2 Sheet Price per Kg India",
      "Hastelloy B3 Sheet Weight Calculator",
      "ASTM B575 Hastelloy C276 Specification",
      "ASME SB575 Alloy C22 Sheet Tolerance Chart",
      "Hastelloy C2000 Sheet Manufacturer India",
      "Hastelloy C59 Cold Rolled Sheet Stockist",
      "Buy Hastelloy Sheets PDF Catalogue",
      "Hastelloy Sheet Dimensions and Weight Chart",
      "Hastelloy Bright Annealed Sheet Price India",
      "Hastelloy C276 HR Hot Rolled Sheets Mumbai",
      "Top 100 Hastelloy Sheet Dealers Pune",
      "Hastelloy C4 Corrosion Resistant Sheet Stockyards",
      "Hastelloy N Heat Resistant Sheet Price List",
      "Hastelloy Sheet Equivalent Grades India",
      "Cost of Hastelloy Sheet Exporter",
      "Hastelloy Sheet Thickness Tolerance Chart",
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
              <SectionTitle>Stock Availability: Hastelloy Sheets</SectionTitle>
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
                Technical Specifications: Hastelloy Sheets
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
              <SectionTitle>Gauge & Thickness Chart</SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Hastelloy Alloy Sheets: Weight (KG) per Dimension
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                {productData.weightChart.note}
              </p>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Thickness Tolerance: Hastelloy C276 Sheets
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM B575 / ASME SB575 | Cold Rolled Sheet Tolerance
                (Plus/Minus)
              </p>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Premium Hastelloy Sheet Solutions
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
              <SectionTitle>Searches Related to Hastelloy Sheets</SectionTitle>
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

export default HastelloySheets;
