import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Unified image imports (same for all product pages)
import productImage from "../../assets/images/productImage/rod.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Stock Availability Images (can use existing or bar-specific)
import roundBarsImage from "../../assets/images/stock/round-bars.jpg";
import hexBarsImage from "../../assets/images/stock/hex-bars.jpg";
import squareBarsImage from "../../assets/images/stock/square-bars.jpg";
import flatBarsImage from "../../assets/images/stock/flat-bars.jpg";
import brightBarsImage from "../../assets/images/stock/bright-bars.jpg";
import rectangleBarsImage from "../../assets/images/stock/rectangle-bars.jpg";

const TitaniumRoundBars = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Titanium Round Bars Supplier - Grade 2 & Grade 5",
    subtitle:
      "Premium Quality ASTM B348 / ASME SB348 Titanium Round Bars – Exceptional Strength-to-Weight Ratio, Extraordinary Corrosion Resistance & High-Temperature Stability for Aerospace, Medical & Industrial Applications",

    technicalOverview: {
      title:
        "Titanium Round Bars: Technical Overview and Grade Characteristics",
      description:
        "Titanium round bars are the premier choice for engineering projects requiring an exceptional strength-to-weight ratio combined with extraordinary corrosion resistance. Titanium is approximately 45% lighter than steel while maintaining comparable tensile strength, making it indispensable in aerospace, medical, and high-performance industrial sectors. These bars are non-magnetic and possess a low thermal expansion coefficient, ensuring dimensional stability under fluctuating temperatures.",
    },

    gradeBreakdown: [
      {
        title: "Titanium Grade 2 Round Bars (Commercially Pure)",
        description:
          "Titanium Grade 2 (UNS R50400) is the most widely used 'Commercially Pure' (CP) grade. It offers an optimal balance of moderate strength and excellent cold-formability. It is often referred to as the 'workhorse' of the industrial piping and heat exchanger industry.",
        items: [
          "Corrosion Profile: Exceptional resistance to seawater and salt solutions. Virtually immune to corrosion in most oxidizing environments and handles nitric and organic acids with ease.",
          "Mechanical Properties: Offers high ductility and superior weldability. Easier to fabricate and machine compared to higher-strength alloys.",
        ],
      },
      {
        title: "Titanium Grade 5 Round Bars (Ti-6Al-4V)",
        description:
          "Titanium Grade 5 (UNS R56400) is an alpha-beta alloy containing 6% Aluminum and 4% Vanadium. This is the most common titanium alloy globally, offering roughly double the tensile strength of Grade 2 while maintaining excellent fatigue resistance and toughness.",
        items: [
          "High-Strength Performance: Utilized where mechanical load and weight savings are top priorities. Can be heat-treated to further enhance properties, making it critical for structural aerospace components.",
          "Thermal Stability: Maintains high strength at temperatures up to 400°C (752°F), far exceeding the limits of commercially pure grades.",
        ],
      },
    ],

    keyFeatures: [
      "Exceptional strength-to-weight ratio – 45% lighter than steel",
      "Extraordinary corrosion resistance in seawater and oxidizing environments",
      "Non-magnetic with low thermal expansion coefficient",
      "Available in Grade 2 (Commercially Pure) and Grade 5 (Ti-6Al-4V)",
      "Grade 2: High ductility, superior weldability, excellent cold-formability",
      "Grade 5: Double the tensile strength of Grade 2 with excellent fatigue resistance",
      "Round sizes: 4mm – 500mm | Hex: 18mm – 57mm | Square: 18mm – 47mm",
      "Finishes: Bright, Black, Polished, Pickled, Centerless Ground",
      "Lengths: 1 to 6 Meters",
      "Complies with ASTM B348 / ASME SB348, AMS 4928, AMS 4911",
    ],

    applications: [
      "Aerospace components and structural parts",
      "Medical implants and surgical instruments",
      "Marine and offshore equipment",
      "Chemical processing and heat exchangers",
      "Automotive and high-performance motorsports",
      "Architectural and structural applications",
      "Oil and gas industry components",
      "Power generation and nuclear applications",
    ],

    stockAvailability: {
      roundBars: {
        title: "Titanium Round Bars",
        image: roundBarsImage,
        items: [
          "Titanium Grade 2 Round Bars",
          "Titanium Grade 5 (6Al-4V) Rods",
          "ASTM B348 Titanium Round Bars",
          "Commercial Pure Titanium Bars",
          "ASME SB348 Titanium Alloy Rods",
        ],
      },
      hexBars: {
        title: "Titanium Hex Bars",
        image: hexBarsImage,
        items: [
          "Titanium Grade 2 Hexagon Rod",
          "Titanium Grade 5 Hex Bar",
          "ASTM B348 Titanium Hex Bars",
          "ASME SB348 Gr 2 Hex Rod",
          "Aerospace Grade A/F Hex Rods",
        ],
      },
      squareBars: {
        title: "Titanium Square Bars",
        image: squareBarsImage,
        items: [
          "Titanium Grade 5 Square Bars",
          "ASTM B348 Titanium Square Rods",
          "Grade 2 Industrial Square Bar",
          "High Strength Titanium Squares",
          "ASME SB348 Titanium Square Rods",
        ],
      },
      flatBars: {
        title: "Titanium Flat Bars",
        image: flatBarsImage,
        items: [
          "Titanium Gr 2 / Gr 5 Flat Bars",
          "Medical Grade Flat Bar Stock",
          "ASTM B348 Titanium Flat Bars",
          "Custom Cut Titanium Flats",
          "ASME SB348 Industrial Flat Rods",
        ],
      },
      brightBars: {
        title: "Bright & Polished Bars",
        image: brightBarsImage,
        items: [
          "Titanium Grade 2 Bright Bars",
          "Titanium Grade 5 Polished Rods",
          "Centerless Ground Titanium Rods",
          "ASME SB348 Bright Finish Rods",
          "Cold Drawn Titanium Alloy Bars",
        ],
      },
      rectangleBars: {
        title: "Rectangle Bars & Billets",
        image: rectangleBarsImage,
        items: [
          "Titanium Grade 5 Rectangle Bars",
          "Titanium Forged Rectangular Billets",
          "ASTM B348 Titanium Rectangle Bars",
          "Aerospace Grade Rectangle Rods",
          "ASME SB348 Rectangle Bar Stock",
        ],
      },
    },

    specifications: {
      standards: "ASTM B348 / ASME SB348, AMS 4928, AMS 4911",
      sizeRange: "Round: 4mm-500mm | Hex: 18mm-57mm | Square: 18mm-47mm",
      finishLength:
        "Bright, Black, Polished, Pickled, Centerless Ground | 1 to 6 Meters",
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
        ["Titanium Grade 2", "R50400", "3.7035", "CP Titanium (Pure)"],
        ["Titanium Grade 5", "R56400", "3.7165", "Ti-6Al-4V (Alloy)"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ti", "Al", "V", "Fe (max)", "O (max)"],
      rows: [
        ["Grade 2", "Bal.", "-", "-", "0.30", "0.25"],
        ["Grade 5", "Bal.", "5.5-6.75", "3.5-4.5", "0.40", "0.20"],
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
        ["Titanium Grade 2", "345 min", "275 min", "20% min", "4.51"],
        ["Titanium Grade 5", "895 min", "828 min", "10% min", "4.43"],
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
        ["3mm", "0.032", "20mm", "1.417", '3"', "20.520"],
        ['1/8"', "0.035", "22mm", "1.714", '3-1/4"', "24.090"],
        ["4mm", "0.056", "25mm", "2.213", '3-1/2"', "27.940"],
        ['3/16"', "0.081", '1"', "2.260", '4"', "36.410"],
        ['1/4"', "0.143", '1-1/8"', "2.870", '4-1/2"', "46.010"],
        ["8mm", "0.228", '1-1/4"', "3.540", '5"', "56.800"],
        ['3/8"', "0.320", '1-1/2"', "5.100", '6"', "81.800"],
        ["10mm", "0.354", "40mm", "5.670", '8"', "145.450"],
        ['1/2"', "0.571", '1-3/4"', "6.950", '10"', "227.300"],
        ["15mm", "0.797", "50mm", "8.852", '12"', "327.280"],
        ['5/8"', "0.891", '2"', "9.050", "-", "-"],
        ['3/4"', "1.284", '2-1/2"', "14.150", "-", "-"],
      ],
    },

    specializedProducts: [
      "Titanium Grade 2 (CP) Pure Corrosion Resistant Bar Dealer",
      "Titanium Grade 5 (Ti-6Al-4V) Aerospace Rods Exporter",
      "ASME SB348 Titanium Round Bars at Best Price",
      "Medical & Chemical Grade Titanium Supplier in India",
      "Titanium Precision Ground & Polished Rods",
      "Aircraft Quality Titanium Rods Stockist in Mumbai",
      "ASTM B348 Gr 2 & Gr 5 Hex Rods Stockist in India",
      "Cold Drawn & Centreless Ground Titanium Supplier",
      "Titanium Black & Bright Round Bars Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Titanium Grade 2 Bars at Best Price",
      "Titanium Gr 5 Round Bars In Pune",
      "ASTM B348 Titanium Bars",
      "Titanium Grade 5 Bar Stock Range",
      "Cost Of Titanium HR Bars Exporter",
      "Titanium Grade 2 Round Bars Latest Price",
      "Titanium Bars Price List In India",
      "Titanium Gr 5 Round Bars Chemical Composition",
      "Titanium Grade 2 Round Bars Stockyards In India",
      "Titanium Round Bars Pdf",
      "Titanium Gr 5 Round Bars In Mumbai",
      "Cost Of Titanium Gr 2 Round Bars",
      "Titanium Equivalent Grades",
      "Titanium Grade 5 Round Bars Price In India",
      "Titanium Forged Bars",
      "Price Of Titanium Grade 5 Round Bars",
      "Titanium Round Bars Specifications",
      "Titanium Hot Rolled bars Supplier",
      "ASME SB348 Titanium Bars",
      "Titanium Bars Supplier In Mumbai",
      "Titanium Round Bars Suppliers In Gujarat",
      "Titanium Cold Drawn Bars Price List",
      "Titanium Alloy Round Bar",
      "Titanium Bars Catalogue",
      "Titanium Manufacturers India",
      "Titanium Grade 5 Threaded Bars",
      "Titanium Round Bars Supplier In India",
      "Titanium Round Bars Price List in India",
      "Titanium Round Bars Dimensions",
      "Titanium Rods Stockist In Mumbai",
      "Titanium Round Bars Stocks",
      "Titanium Round Bars Weight Calculator",
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
              <SectionTitle>Titanium Grade Characteristics</SectionTitle>
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
                Stock Availability of Titanium Round Bars & Rods
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
                Technical Specifications: Titanium Round Bars
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
                Size and Dimensions of Titanium Round Bars
              </SectionTitle>
              <Table
                headers={productData.sizeChart.headers}
                rows={productData.sizeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Titanium Round Bars Weight Chart</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Titanium Grade 2 & Grade 5 Round Bars
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
                Searches Related to Titanium Round Bars
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

export default TitaniumRoundBars;
