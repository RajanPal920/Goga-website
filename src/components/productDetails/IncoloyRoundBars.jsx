// src/components/productDetails/IncoloyRoundBars.jsx
import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

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

const IncoloyRoundBars = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Incoloy Round Bars Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    subtitle:
      "Premium Quality ASTM B408 / ASME SB408 Incoloy Superalloy Round Bars – Nickel-Iron-Chromium Alloys Engineered for High-Temperature Strength, Oxidation Resistance & Corrosion Protection in Extreme Industrial Environments",

    technicalOverview: {
      title: "Incoloy Round Bars: Technical Overview",
      description:
        "Incoloy round bars are nickel-iron-chromium superalloys engineered to provide a high-performance solution for environments requiring both high-temperature strength and resistance to various forms of corrosion. These alloys act as a bridge between standard stainless steels and high-nickel superalloys, offering excellent oxidation resistance and structural stability. By balancing nickel and iron content, Incoloy bars maintain their mechanical properties under prolonged thermal stress and aggressive chemical exposure.",
    },

    // ✅ Make sure gradeBreakdown is properly defined as an array
    gradeBreakdown: [
      {
        title: "Incoloy 800, 800H, and 800HT Round Bars",
        description:
          "The 800 Series is the industry standard for high-temperature structural applications requiring creep and rupture strength.",
        items: [
          "Incoloy 800 (UNS N08800): The base grade used for general heat-resistant applications. It offers excellent resistance to oxidation and carburization at temperatures up to 593°C (1100°F).",
          "Incoloy 800H / 800HT (UNS N08810 / N08811): These versions have strictly controlled carbon, aluminum, and titanium contents. Combined with a high-temperature solution anneal, these bars offer significantly higher creep-rupture properties for service above 593°C.",
        ],
        keyApplications:
          "Heat treat furnace components, steam generator tubing support, and petrochemical process piping internals.",
      },
      {
        title: "Incoloy DS and Alloy 330 Round Bars",
        description:
          "Incoloy DS (and its close relative Alloy 330) are specialized for the heat-treating industry. With an increased silicon content, these bars offer superior resistance to 'green rot' and internal oxidation in carburizing and nitriding atmospheres.",
        items: [
          "Thermal Stability: They maintain excellent ductility even after long-term service at high temperatures, making them ideal for furnace components subject to repeated thermal cycling.",
        ],
        keyApplications:
          "Radiant tubes, furnace conveyor pins, and heat-treating jigs.",
      },
      {
        title: "Incoloy 825 and 925 Round Bars (Corrosion Resistant)",
        description:
          "Incoloy 825 (UNS N08825): A titanium-stabilized alloy with added molybdenum and copper. It provides exceptional resistance to many corrosive environments, particularly sulfuric and phosphoric acids. It is virtually immune to chloride-ion stress corrosion cracking. Incoloy 925 (UNS N09925): An age-hardenable version of Alloy 825. It provides the same superior corrosion resistance but with much higher mechanical strength and hardness through precipitation hardening.",
        items: [],
        keyApplications:
          "Oil and gas downhole equipment, acid production valves, and high-strength marine pump shafts.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Incoloy round bars are manufactured to meet stringent international specifications, including ASTM B408, B166, and ASME SB408. We provide these bars in several formats to suit your specific technical blueprints:",
      items: [
        "Cold Drawn / Centerless Ground: For applications requiring tight dimensional tolerances (h9, h11), a superior surface finish, and increased mechanical hardness.",
        "Hot Rolled / Forged: Typically supplied in a black or peeled finish, ideal for heavy-duty industrial components and larger diameters where internal structural integrity is paramount.",
      ],
    },

    // ✅ Make sure keyFeatures is properly defined as an array
    keyFeatures: [
      "Nickel-iron-chromium superalloys bridging cost and performance",
      "Excellent high-temperature strength and oxidation resistance",
      "Superior resistance to carburization and nitriding atmospheres",
      "Exceptional resistance to chloride-ion stress corrosion cracking",
      "Available in 6 grades: 800, 800H, 800HT, 825, 925 & DS 330",
      "Age-hardenable grades (825, 925) for high-strength applications",
      "Available in Round, Hex, Square, Flat, Bright & Polished, Rectangle Bars & Billets",
      "Round sizes: 4mm – 500mm | Hex: 18mm – 57mm | Square: 18mm – 47mm",
      "Finishes: Bright Polished, Black, Rough Turned, Matt Finish",
      "Lengths: 1 to 6 Meters",
      "Complies with ASTM B408, B425, B564 / ASME SB408, SB425, SB564",
    ],

    // ✅ Make sure applications is properly defined as an array
    applications: [
      "Heat treat furnace components and steam generator tubing support",
      "Petrochemical process piping internals",
      "Radiant tubes, furnace conveyor pins, and heat-treating jigs",
      "Oil and gas downhole equipment",
      "Acid production valves and high-strength marine pump shafts",
      "High-temperature oxidation and carburization environments",
      "Power generation and nuclear applications",
      "Chemical processing and acid handling",
    ],

    stockAvailability: {
      roundBars: {
        title: "Incoloy Round Bars",
        image: roundBarsImage,
        items: [
          "Incoloy 800/800H/800HT Round Bars",
          "Incoloy 825 / 925 Steel Rods",
          "ASTM B408 Incoloy Round Bars",
          "Incoloy DS 330 Stainless Steel Bar",
          "ASME SB425 Incoloy 825 Rods",
        ],
      },
      hexBars: {
        title: "Incoloy Hex Bars",
        image: hexBarsImage,
        items: [
          "Incoloy 800 Hexagon Rod",
          "Incoloy 825 Hex Bar",
          "ASTM B425 Incoloy Hex Bars",
          "ASME SB408 Incoloy 800H Hex Rod",
          "Incoloy Alloy 925 Hex Rods",
        ],
      },
      squareBars: {
        title: "Incoloy Square Bars",
        image: squareBarsImage,
        items: [
          "Incoloy 800HT Square Bars",
          "ASTM B408 Incoloy Steel Square Bars",
          "Incoloy 825 Square Rods",
          "Incoloy 925 Stainless Steel Square Bar",
          "ASME SB408 Incoloy Square Rods",
        ],
      },
      flatBars: {
        title: "Incoloy Flat Bars",
        image: flatBarsImage,
        items: [
          "Incoloy 800 / 825 Flat Bars",
          "Incoloy Stainless Steel Flat Bar",
          "ASTM B408 Incoloy Flat Bars",
          "Incoloy 925 Industrial Flat Bars",
          "ASME SB425 Incoloy Flat Rods",
        ],
      },
      brightBars: {
        title: "Incoloy Bright Bars",
        image: brightBarsImage,
        items: [
          "Incoloy 800 / 800H Bright Bars",
          "Incoloy 825 Bright Bar Rods",
          "Incoloy 925 Bright Rods",
          "ASME SB564 Incoloy Bright Rods",
          "ASTM B408 Incoloy Steel Bright Bars",
        ],
      },
      rectangleBars: {
        title: "Incoloy Rectangle Bars",
        image: rectangleBarsImage,
        items: [
          "Incoloy 800 Rectangle Bars",
          "Incoloy Steel Rectangular Bar",
          "ASTM B408 Incoloy Rectangle Bars",
          "Incoloy 825 Rectangular Rods",
          "ASME SB408 Incoloy Rectangle Bar",
        ],
      },
    },

    specifications: {
      standards: "ASTM B408, B425, B564 / ASME SB408, SB425, SB564",
      sizeRange: "Round: 4mm-500mm | Hex: 18mm-57mm | Square: 18mm-47mm",
      finishLength:
        "Bright Polished, Black, Rough Turned, Matt Finish | 1 to 6 Meters",
      availableForms:
        "Round, Square, Hex (A/F), Rectangle, Flat, Billet, Ingot, Forging",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Incoloy 800", "N08800", "1.4876", "Alloy 800 / DS 330"],
        [
          "Incoloy 800H/HT",
          "N08810 / N08811",
          "1.4958 / 1.4959",
          "Alloy 800H / 800HT",
        ],
        ["Incoloy 825", "N08825", "2.4858", "Alloy 825"],
        ["Incoloy 925", "N09925", "-", "Alloy 925"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Fe", "Cr", "Mo", "Cu"],
      rows: [
        ["800", "30.0-35.0", "39.5 min", "19.0-23.0", "-", "0.75 max"],
        ["800H/HT", "30.0-35.0", "39.5 min", "19.0-23.0", "-", "0.75 max"],
        ["825", "38.0-46.0", "22.0 min", "19.5-23.5", "2.5-3.5", "1.5-3.0"],
        ["925", "42.0-46.0", "22.0 min", "19.5-22.5", "2.5-3.5", "1.5-3.0"],
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
        ["Incoloy 800", "520 min", "205 min", "30% min", "7.94"],
        ["Incoloy 825", "590 min", "240 min", "30% min", "8.14"],
        ["Incoloy 925", "650 min", "310 min", "25% min", "8.08"],
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
      "Incoloy 800 / 800H / 800HT Round Bar Dealer",
      "Incoloy 825 / 925 High Corrosion Resistant Bar Dealer",
      "ASME SB408 Incoloy 800 Round Bars at Best Price",
      "Incoloy DS 330 Nickel Alloy Supplier in India",
      "Incoloy Precision Ground & Bright Bars",
      "Incoloy Nickel Alloy Rods Stockist in Mumbai",
      "ASTM B425 Incoloy Hex & Square Rods Stockist in India",
      "Incoloy Cold Drawn & Rough Turned Bars Supplier",
      "Incoloy Black & Polished Round Bars Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Incoloy 800 Bars at Best Price",
      "Incoloy Round Bars In Pune",
      "ASTM B408 Incoloy Bars",
      "Alloy 825 Bar Stock Range",
      "Cost Of Incoloy HR Bars Exporter",
      "Incoloy 800H Round Bars Latest Price",
      "Incoloy Bars Price List In India",
      "Incoloy 825 Round Bars Chemical Composition",
      "Incoloy 925 Round Bars Stockyards In India",
      "Incoloy Round Bars Pdf",
      "Incoloy Round Bars In Mumbai",
      "Cost Of Incoloy Round Bars",
      "Incoloy Equivalent Grades",
      "Incoloy 800HT Round Bars Price In India",
      "Incoloy Forged Bars",
      "Price Of Incoloy Round Bars",
      "Incoloy Round Bars Specifications",
      "Incoloy Hot Rolled bars Supplier",
      "ASME SB425 Incoloy Bars",
      "Incoloy Bars Supplier In Mumbai",
      "Incoloy Round Bars Suppliers In Gujarat",
      "Incoloy Cold Drawn Bars Price List",
      "Incoloy Alloy Round Bar",
      "Incoloy Bars Catalogue",
      "Incoloy Manufacturers",
      "Incoloy Threaded Bars",
      "Incoloy Round Bars Supplier In India",
      "Incoloy Round Bars Price List in India",
      "Incoloy Round Bars Dimensions",
      "Incoloy Rods Stockist In Mumbai",
      "Incoloy Round Bars Stocks",
      "Incoloy Round Bars Weight Calculator",
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

  const Table = ({ headers, rows }) => {
    // ✅ Add safety check for rows
    if (!rows || rows.length === 0) {
      return <p className="text-gray-500 text-sm">No data available</p>;
    }
    return (
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
                  <td
                    key={cellIndex}
                    className="px-4 py-3 text-sm text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const ChipList = ({ items }) => {
    // ✅ Add safety check for items
    if (!items || items.length === 0) {
      return <p className="text-gray-500 text-sm">No items available</p>;
    }
    return (
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
  };

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
              <SectionTitle>Incoloy Alloy Grades & Applications</SectionTitle>
              {productData.gradeBreakdown &&
              productData.gradeBreakdown.length > 0 ? (
                productData.gradeBreakdown.map((section, idx) => (
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
                    {section.items && section.items.length > 0 && (
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
                ))
              ) : (
                <p className="text-gray-500">No grade information available</p>
              )}
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
              <SectionTitle>
                Stock Availability of Incoloy Round Bars & Rods
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
                Technical Specifications: Incoloy Round Bars
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
                Size and Dimensions of Incoloy Round Bars
              </SectionTitle>
              <Table
                headers={productData.sizeChart.headers}
                rows={productData.sizeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Incoloy Round Bars Weight Chart</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Incoloy Round Bars & Rods
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
                Searches Related to Incoloy Round Bars
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

export default IncoloyRoundBars;
