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

// Unified Stock Availability Images (using same bar images)
import roundBarsImage from "../../assets/images/stock/round-bars.jpg";
import hexBarsImage from "../../assets/images/stock/hex-bars.jpg";
import squareBarsImage from "../../assets/images/stock/square-bars.jpg";
import flatBarsImage from "../../assets/images/stock/flat-bars.jpg";
import brightBarsImage from "../../assets/images/stock/bright-bars.jpg";
import rectangleBarsImage from "../../assets/images/stock/rectangle-bars.jpg";

const HastelloyRoundBars = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Hastelloy Round Bars Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    subtitle:
      "Premium Quality ASTM B574 / ASME SB574 Hastelloy Superalloy Round Bars – Nickel-Based Alloys Engineered for Maximum Resistance to Aggressive Chemicals, Chlorides & Reducing Acids in Critical Industrial Environments",

    technicalOverview: {
      title: "Hastelloy Round Bars: Technical Overview",
      description:
        "Hastelloy round bars are high-performance nickel-based superalloys engineered for the most aggressive chemical environments. These alloys are specifically designed to resist a wide range of corrosive media, including highly reducing and oxidizing acids, chlorides, and mixed chemical streams. The key to their durability is a complex metallurgical matrix of nickel, molybdenum, and chromium, which provides exceptional resistance to pitting, crevice corrosion, and stress corrosion cracking (SCC). These bars maintain high mechanical strength and structural integrity at both ambient and elevated temperatures, ensuring long-term reliability in high-pressure reactors, heat exchangers, and volatile chemical transport systems.",
    },

    gradeBreakdown: [
      {
        title: "Hastelloy C-Series: Universal Corrosion Resistance",
        description:
          "The C-series is the most versatile group of Hastelloy alloys, designed to handle a broad spectrum of volatile chemical process streams.",
        items: [
          "Hastelloy C276 (UNS N10276): The industry standard for aggressive environments. Exceptionally resistant to wet chlorine gas, hypochlorites, and chlorine dioxide. A primary choice for pollution control equipment and chemical processing internals.",
          "Hastelloy C22 (UNS N06022): Offers better overall corrosion resistance than C276 in oxidizing environments. Provides superior protection against localized corrosion and is frequently used in pharmaceutical and biotech valve fabrication.",
          "Hastelloy C2000 (UNS N06200): A unique alloy with deliberate copper additions, providing maximum versatility in both oxidizing and reducing environments. Excels specifically in sulfuric acid service.",
          "Hastelloy C59, C4, and C-4: Specialized grades optimized for thermal stability and resistance to grain-boundary precipitation, ensuring corrosion resistance is maintained in the heat-affected zones of welded or forged bar structures.",
        ],
      },
      {
        title: "Hastelloy B-Series: Reducing Acid Specialists",
        description:
          "The B-series alloys are specifically engineered for resistance against reducing environments, particularly hydrochloric acid ($HCl$).",
        items: [
          "Hastelloy B2 (UNS N10665): A nickel-molybdenum alloy with significant resistance to hydrochloric acid at all concentrations and temperatures. Also performs well in pure sulfuric and phosphoric acids.",
          "Hastelloy B3 (UNS N10675): An improved version of B2 with significantly enhanced thermal stability. Makes fabrication and machining of heavy bars easier while maintaining the same high level of resistance to reducing acids.",
        ],
      },
    ],

    keyFeatures: [
      "Exceptional resistance to aggressive chemicals, chlorides, and acids",
      "Outstanding pitting, crevice corrosion, and stress corrosion cracking resistance",
      "High mechanical strength at ambient and elevated temperatures",
      "Available in C-Series (C276, C22, C2000, C59, C4) and B-Series (B2, B3)",
      "C276: Industry standard for aggressive environments",
      "B2/B3: Specialized for reducing acids, particularly hydrochloric acid",
      "Available in Round, Hex, Square, Flat, Bright & Polished, Rectangle Bars & Billets",
      "Round sizes: 3.17mm – 500mm | Hex: 18mm – 57mm | Square: 18mm – 47mm",
      "Finishes: Bright Polished, Black, Rough Turned, Centerless Ground",
      "Lengths: 1 to 6 Meters",
      "Complies with ASTM B574, B335, B572, B622 / ASME SB574, SB335",
    ],

    applications: [
      "Chemical processing and pollution control equipment",
      "Pharmaceutical and biotech valve fabrication",
      "Sulfuric acid and hydrochloric acid handling",
      "Heat exchangers and high-pressure reactors",
      "Flue gas desulfurization (FGD) systems",
      "Sour gas service in oil & gas industry",
      "Wet chlorine gas and hypochlorite environments",
      "Specialized chemical transport systems",
    ],

    stockAvailability: {
      roundBars: {
        title: "Hastelloy Round Bars",
        image: roundBarsImage,
        items: [
          "Hastelloy C276 Round Bars",
          "Hastelloy C22 Steel Rods",
          "ASTM B574 Hastelloy Rods",
          "Hastelloy B2/B3 Round Bar",
          "ASME SB574 Hastelloy C2000 Rods",
        ],
      },
      hexBars: {
        title: "Hastelloy Hex Bars",
        image: hexBarsImage,
        items: [
          "Hastelloy C276 Hex Bars",
          "ASME SB335 Hastelloy Hex Rod",
          "ASTM B574 Hastelloy Hex Bars",
          "Hastelloy C4/C59 Hexagon Bar",
          "Hastelloy Alloy B3 Hexagon Rod",
        ],
      },
      squareBars: {
        title: "Hastelloy Square Bars",
        image: squareBarsImage,
        items: [
          "Hastelloy C276 Square Bars",
          "ASTM B574 Hastelloy Square Bars",
          "Hastelloy C22 Square Rods",
          "Alloy B2 Square Bar Stock",
          "ASME SB574 Hastelloy Square Rods",
        ],
      },
      flatBars: {
        title: "Hastelloy Flat Bars",
        image: flatBarsImage,
        items: [
          "Hastelloy C276 Flat Bars",
          "Hastelloy C22 Flat Bar Stock",
          "ASTM B574 Hastelloy Flats",
          "Alloy C2000 Flat Bars",
          "ASME SB574 Hastelloy B2 Flats",
        ],
      },
      brightBars: {
        title: "Hastelloy Bright Bars",
        image: brightBarsImage,
        items: [
          "Hastelloy C276 Bright Bars",
          "Hastelloy C22 Bright Bar Rods",
          "Alloy B3 Bright Rods",
          "ASME SB574 Hastelloy Bright Rods",
          "ASTM B574 Hastelloy Bright Bars",
        ],
      },
      rectangleBars: {
        title: "Hastelloy Rectangle Bars",
        image: rectangleBarsImage,
        items: [
          "Hastelloy C276 Rectangle Bars",
          "Alloy B2 Rectangular Bar",
          "ASTM B574 Hastelloy Rectangle Bars",
          "Hastelloy C59 Rectangular Rods",
          "ASME SB574 Hastelloy Rectangle Bar",
        ],
      },
    },

    specifications: {
      standards: "ASTM B574, B335, B572, B622 / ASME SB574, SB335",
      sizeRange: "Round: 3.17mm-500mm | Hex: 18mm-57mm | Square: 18mm-47mm",
      finishLength:
        "Bright Polished, Black, Rough Turned, Centerless Ground | 1 to 6 Meters",
      availableForms:
        "Round, Square, Hex (A/F), Rectangle, Billet, Ingot, Forging",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Hastelloy C276", "N10276", "2.4819", "Alloy C276"],
        ["Hastelloy C22", "N06022", "2.4602", "Alloy C22"],
        [
          "Hastelloy B2 / B3",
          "N10665 / N10675",
          "2.4617 / 2.4600",
          "Alloy B2 / B3",
        ],
        ["Hastelloy C2000", "N06200", "2.4675", "Alloy C2000"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Mo", "Cr", "Fe", "W"],
      rows: [
        ["C276", "57.0", "16.0", "15.5", "5.5", "4.0"],
        ["C22", "56.0", "13.0", "22.0", "3.0", "3.0"],
        ["B2", "68.0", "28.0", "1.0 max", "2.0 max", "-"],
        ["C2000", "59.0", "16.0", "23.0", "3.0 max", "-"],
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
        ["Hastelloy C276", "790", "355", "40%", "8.89"],
        ["Hastelloy C22", "800", "360", "45%", "8.69"],
        ["Hastelloy B2", "760", "350", "40%", "9.22"],
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
      "Hastelloy C276 / C22 High Corrosion Resistant Bar Dealer",
      "Hastelloy B2 / B3 Acid Resistant Bars Exporter",
      "ASME SB574 Hastelloy C2000 Round Bars at Best Price",
      "Hastelloy Alloy C4 / C59 / H – N Supplier in India",
      "Hastelloy Precision Ground & Bright Bars",
      "Hastelloy Nickel Alloy Rods Stockist in Mumbai",
      "ASTM B574 Hastelloy Hex & Square Rods Stockist in India",
      "Hastelloy Cold Drawn & Rough Turned Bars Supplier",
      "Hastelloy Black & Polished Round Bars Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Hastelloy C276 Bars at Best Price",
      "Hastelloy Round Bars In Pune",
      "ASTM B574 Hastelloy Bars",
      "Alloy C22 Bar Stock Range",
      "Cost Of Hastelloy HR Bars Exporter",
      "Hastelloy C276 Round Bars Latest Price",
      "Hastelloy Bars Price List In India",
      "Hastelloy B2 Round Bars Chemical Composition",
      "Hastelloy C2000 Round Bars Stockyards In India",
      "Hastelloy C59 Round Bars Pdf",
      "Hastelloy Round Bars In Mumbai",
      "Cost Of Hastelloy Round Bars",
      "Hastelloy Equivalent Grades",
      "Hastelloy B3 Round Bars Price In India",
      "Hastelloy Forged Bars",
      "Price Of Hastelloy Round Bars",
      "Hastelloy Round Bars Specifications",
      "Hastelloy Hot Rolled bars Supplier",
      "ASME SB574 Hastelloy Bars",
      "Hastelloy Bars Supplier In Mumbai",
      "Hastelloy Round Bars Suppliers In Gujarat",
      "Hastelloy Cold Drawn Bars Price List",
      "Hastelloy Alloy Round Bar",
      "Hastelloy Bars Catalogue",
      "Hastelloy Manufacturers",
      "Hastelloy Threaded Bars",
      "Hastelloy Round Bars Supplier In India",
      "Hastelloy Round Bars Price List in India",
      "Hastelloy Round Bars Dimensions",
      "Hastelloy Rods Stockist In Mumbai",
      "Hastelloy Round Bars Stocks",
      "Hastelloy Round Bars Weight Calculator",
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
                Stock Availability of Hastelloy Round Bars & Rods
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
                Technical Specifications: Hastelloy Round Bars
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
                Size and Dimensions of Hastelloy Round Bars
              </SectionTitle>
              <Table
                headers={productData.sizeChart.headers}
                rows={productData.sizeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Hastelloy Round Bars Weight Chart</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Hastelloy Round Bars & Rods
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
                Searches Related to Hastelloy Round Bars
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

export default HastelloyRoundBars;
