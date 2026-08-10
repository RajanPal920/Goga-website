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
import productImage from "../../assets/images/productImage/rod.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Unified Stock Availability Images (using same bar images)
import roundBarsImage from "../../assets/images/stock/round-bars.jpg";
import hexBarsImage from "../../assets/images/stock/hex-bars.jpg";
import squareBarsImage from "../../assets/images/stock/square-bars.jpg";
import flatBarsImage from "../../assets/images/stock/flat-bars.jpg";
import brightBarsImage from "../../assets/images/stock/bright-bars.jpg";
import rectangleBarsImage from "../../assets/images/stock/rectangle-bars.jpg";

const DuplexSteelRoundBars = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Duplex & Super Duplex Steel Round Bars Supplier – S31803, S32205, S32750, S32760, S32550",
    subtitle:
      "Premium Quality ASTM A276 / ASME SA276 Duplex & Super Duplex Steel Round Bars – Dual-Phase Microstructure for Superior Corrosion Resistance, High Strength & Stress Corrosion Cracking Resistance in Aggressive Environments",

    technicalOverview: {
      title: "Duplex & Super Duplex Steel Round Bars: Technical Overview",
      description:
        "Duplex and Super Duplex steel round bars are high-performance stainless steel products characterized by a dual-phase microstructure consisting of approximately 50% austenite and 50% ferrite. This metallurgical balance provides a unique combination of high mechanical strength—typically double that of standard austenitic stainless steels—and exceptional resistance to corrosion. These bars are essential for load-bearing components in environments where weight reduction and durability against chloride-induced stress corrosion cracking are critical.",
    },

    gradeBreakdown: [
      {
        title: "Duplex Steel S31803 and S32205 Round Bars (Alloy 2205)",
        description:
          "Duplex S31803 (F51) and the nitrogen-enhanced S32205 (F60) are the most widely utilized duplex grades. They are engineered to provide superior resistance to localized corrosion compared to 316L.",
        items: [
          "Corrosion Profile: Exceptional resistance to pitting and crevice corrosion in chloride-bearing environments. Highly resistant to stress corrosion cracking (SCC) in temperatures up to 150°C.",
          "Mechanical Strength: High yield strength and excellent fatigue resistance, making them ideal for shafting and structural fasteners.",
        ],
        keyApplications:
          "Pump shafts, valve components, boat shafts, and high-strength structural bolts for marine infrastructure.",
      },
      {
        title: "Super Duplex Steel S32750, S32760, and S32550 Round Bars",
        description:
          "Super Duplex round bars are highly alloyed grades designed for the most aggressive corrosive service, such as warm seawater and acidic chemical streams. These grades feature a Pitting Resistance Equivalent Number (PREN) of >40.",
        items: [
          "S32750 (UNS S32750 / F53): Features 25% Chromium and 4% Molybdenum. Specifically designed for high-strength applications in extremely corrosive conditions where weight-to-strength ratios are critical.",
          "S32760 (UNS S32760 / F55): Includes deliberate additions of Copper and Tungsten. Enhances its resistance to mineral acids like sulfuric and hydrochloric acid, particularly in contaminated media.",
          "S32550 (UNS S32550 / F61 / Ferralium 255): A high-copper super duplex grade offering superior erosion-corrosion resistance and high hardness, making it ideal for rotating parts in abrasive slurries.",
        ],
        keyApplications:
          "Subsea hardware, desalination equipment, chemical process valves, and high-pressure oil and gas components.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Duplex and Super Duplex round bars are manufactured to meet stringent international specifications, including ASTM A276, A479, and ASME SA479. We offer these in various processing formats to suit your specific engineering blueprints:",
      items: [
        "Cold Drawn / Centerless Ground: For applications requiring tight dimensional tolerances (h9, h11), a superior surface finish, and increased mechanical hardness.",
        "Hot Rolled / Forged: For heavy-duty industrial components and larger diameters where internal structural integrity is paramount.",
        "Precision Machined: Available in custom lengths with various surface finishes (black, bright, or polished) to meet specific project requirements.",
      ],
      qualityControl:
        "Every bar undergoes rigorous quality control, including Positive Material Identification (PMI), ultrasonic testing (UT) for internal soundness, and mechanical property verification.",
    },

    keyFeatures: [
      "Unique dual-phase (Austenite + Ferrite) microstructure",
      "Superior resistance to pitting, crevice corrosion and chloride-induced SCC",
      "Yield strength roughly double that of conventional austenitic grades",
      "Allows significant weight savings through thinner designs",
      "Available in Duplex (S31803/S32205) and Super Duplex (S32750/S32760/S32550)",
      "PREN > 40 for Super Duplex grades for aggressive environments",
      "Available in Round, Hex, Square, Flat, Bright & Polished, Rectangle Bars & Billets",
      "Round sizes: 4mm – 500mm | Hex: 18mm – 57mm | Square: 18mm – 47mm",
      "Finishes: Bright Polished, Black, Rough Turned, NO.4, Matt",
      "Lengths: 1 to 6 Meters",
      "Complies with ASTM A276 / ASME SA276, A479, EN 10088-3",
    ],

    applications: [
      "Pump shafts and valve components",
      "Boat shafts and marine infrastructure",
      "High-strength structural bolts",
      "Subsea hardware and offshore platforms",
      "Desalination equipment",
      "Chemical process valves",
      "High-pressure oil and gas components",
      "Rotating parts in abrasive slurries",
    ],

    stockAvailability: {
      roundBars: {
        title: "Duplex / Super Duplex Round Bars",
        image: roundBarsImage,
        items: [
          "Duplex / Super Duplex Steel Round Bars",
          "Super Duplex Steel Rods",
          "ASTM A276 Duplex Round Bars",
          "Super Duplex Stainless Steel Bar",
          "ASME SA 276 Super Duplex Rods",
        ],
      },
      hexBars: {
        title: "Duplex / Super Duplex Hex Bars",
        image: hexBarsImage,
        items: [
          "Duplex / Super Duplex Steel Hex Bars",
          "ASME SA 276 Duplex Steel Hex Rod",
          "ASTM A276 Duplex Hex Bars",
          "Super Duplex Stainless Steel Hex Bar",
          "Duplex Steel Hexagon Rod",
        ],
      },
      squareBars: {
        title: "Duplex / Super Duplex Square Bars",
        image: squareBarsImage,
        items: [
          "Duplex / Super Duplex Steel Square Bars",
          "ASTM A276 Duplex Steel Square Bars",
          "Super Duplex Steel Square Bar",
          "Duplex Stainless Steel Square Bar",
          "ASME SA 276 Duplex Square Rods",
        ],
      },
      flatBars: {
        title: "Duplex / Super Duplex Flat Bars",
        image: flatBarsImage,
        items: [
          "Duplex / Super Duplex Steel Flat Bars",
          "Duplex Stainless Steel Flat Bar",
          "ASTM A276 DSS Flat Bars",
          "Super Duplex Stainless Steel Flat Bars",
          "ASME SA 276 DSS Flat Bars",
        ],
      },
      brightBars: {
        title: "Duplex / Super Duplex Bright Bars",
        image: brightBarsImage,
        items: [
          "Duplex / Super Duplex Steel Bright Bars",
          "Super Duplex Stainless Steel Bright Bar",
          "Super Duplex Steel Bright Rods",
          "ASME SA 276 Duplex Steel Bright Rods",
          "ASTM A276 Duplex Steel Bright Bars",
        ],
      },
      rectangleBars: {
        title: "Duplex / Super Duplex Rectangle Bars",
        image: rectangleBarsImage,
        items: [
          "Duplex / Super Duplex Steel Rectangle Bars",
          "Duplex Steel Rectangular Bar",
          "ASTM A276 Duplex Rectangle Bars",
          "Super Duplex Stainless Steel Rectangle Bar",
          "ASME SA 276 Duplex Rectangle Bar",
        ],
      },
    },

    specifications: {
      standards: "ASTM A276 / ASME SA276, A479, EN 10088-3",
      sizeRange: "Round: 4mm-500mm | Hex: 18mm-57mm | Square: 18mm-47mm",
      finishLength:
        "Bright Polished, Black, Rough Turned, NO.4, Matt | 1 to 6 Meters",
      availableForms:
        "Round, Square, Hex (A/F), Rectangle, Flat, Billet, Ingot, Forged",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Duplex Steel", "S31803 / S32205", "1.4462", "F51 / F60 | 2205"],
        ["Super Duplex", "S32750", "1.4410", "F53 | 2507"],
        ["Super Duplex", "S32760", "1.4501", "F55 | Zeron 100"],
        ["Super Duplex", "S32550", "1.4507", "F61 | Ferralium 255"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Cr", "Ni", "Mo", "N", "PREN (min)"],
      rows: [
        [
          "S31803 (F51)",
          "21.0 – 23.0",
          "4.5 – 6.5",
          "2.5 – 3.5",
          "0.08 – 0.20",
          "31",
        ],
        [
          "S32205 (F60)",
          "22.0 – 23.0",
          "4.5 – 6.5",
          "3.0 – 3.5",
          "0.14 – 0.20",
          "34",
        ],
        [
          "S32750 (F53)",
          "24.0 – 26.0",
          "6.0 – 8.0",
          "3.0 – 5.0",
          "0.24 – 0.32",
          "40",
        ],
        [
          "S32760 (F55)",
          "24.0 – 26.0",
          "6.0 – 8.0",
          "3.0 – 4.0",
          "0.20 – 0.30",
          "40",
        ],
        [
          "S32550 (F61)",
          "24.0 – 27.0",
          "4.5 – 6.5",
          "2.9 – 3.9",
          "0.10 – 0.25",
          "40",
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
        ["S31803 / S32205", "620 min", "450 min", "25%", "7.80"],
        ["S32750 / S32760", "750 – 800", "550 min", "15 – 25%", "7.81"],
        ["S32550", "760 min", "550 min", "15% min", "7.81"],
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
        ["22", "22", "#16", "2.000", "-", "51"],
        ["25", "25", "#18", "2.250", "-", "57"],
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
        ["10mm", "0.620", "40mm", "9.872", '8"', "254.550"],
        ['1/2"', "0.994", '1-3/4"', "12.179", '10"', "397.140"],
        ["15mm", "1.391", "50mm", "15.414", '12"', "571.800"],
        ['5/8"', "1.551", '2"', "15.906", "-", "-"],
        ['3/4"', "2.237", '2-1/2"', "24.856", "-", "-"],
      ],
    },

    specializedProducts: [
      "Duplex S31803 / S32205 (F51/F60) Round Bar Dealer",
      "Super Duplex S32750 / S32760 (F53/F55) Bars Exporter",
      "ASME SA276 Super Duplex Round Bars at Best Price",
      "Super Duplex Steel UNS S32550 (F61) Supplier in India",
      "Duplex & Super Duplex Precision Ground Bars",
      "Super Duplex Stainless Steel Rods Stockist in Mumbai",
      "ASTM A276 Duplex Hex & Square Rods Stockist in India",
      "Duplex Steel Cold Drawn & Hot Rolled Bars Supplier",
      "Super Duplex Steel Black & Bright Round Bars",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Super Duplex Steel Bars at Best Price",
      "Duplex Round Bars In Pune",
      "ASTM A276 Duplex Steel Bars",
      "Super Duplex Alloy Bar Stock Range",
      "Cost Of Duplex HR Bars Exporter",
      "Super Duplex Round Bars Latest Price",
      "Duplex Steel Bars Price List In India",
      "Super Duplex Round Bars Chemical Composition",
      "Duplex Round Bars Stockyards In India",
      "Super Duplex Round Bars Pdf",
      "Duplex Steel Round Bars In Mumbai",
      "Cost Of Super Duplex Round Bars",
      "Duplex Round Bars Equivalent Grades",
      "Super Duplex Round Bars Price In India",
      "Duplex Forged Bars",
      "Price Of Super Duplex Round Bars",
      "Duplex Round Bars Specifications",
      "Super Duplex Hot Rolled bars Supplier",
      "ASME SA276 Duplex Steel Bars",
      "Super Duplex Bars Supplier In Mumbai",
      "Duplex Round Bars Suppliers In Gujarat",
      "Super Duplex Cold Drawn Bars Price List",
      "Duplex Alloy Round Bar",
      "Super Duplex Bars Catalogue",
      "Duplex Steel Bars Manufacturers",
      "Super Duplex Threaded Bars",
      "Duplex Round Bars Supplier In India",
      "Super Duplex Round Bars Price List in India",
      "Duplex Round Bars Dimensions",
      "Super Duplex Rods Stockist In Mumbai",
      "Duplex Round Bars Stocks",
      "Super Duplex Round Bars Price List",
      "Duplex Steel Bars Stockist In India",
      "Super Duplex Bars Length",
      "Duplex Round Bars Exporter",
      "Super Duplex Cold Rolled Bars Price",
      "Duplex Steel Bars Supplier In Mumbai",
      "Super Duplex Bars Manufacturers In India",
      "Duplex Round Bars Stockist",
      "Super Duplex Bars Price List In Mumbai",
      "Price List Of Duplex Steel Bars",
      "Duplex Round Bars Price List",
      "ASTM A276 Duplex Half Round Bars",
      "Super Duplex Bars Stockist",
      "Duplex Round Bars Exporter In India",
      "Buy Super Duplex Bars / Rods Pdf",
      "Duplex Steel Bars In India",
      "Super Duplex Round Bars Best Price In Delhi",
      "Duplex Round Bars Manufacturer In Mumbai",
      "Super Duplex Bars Price In Mumbai",
      "Duplex Round Bars Dealer In India",
      "Top 100 Super Duplex Bars Dealers In Pune",
      "Duplex Round Bars Weight Calculator",
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
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                    <span className="font-semibold text-sm text-[#173F52]">
                      Key Applications:{" "}
                    </span>
                    <span className="text-gray-700 text-sm">
                      {section.keyApplications}
                    </span>
                  </div>
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
              <SectionTitle>
                Stock Availability of Duplex / Super Duplex Steel Round Bars
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
                Technical Specifications: Duplex / Super Duplex Steel Round Bars
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
                Size and Dimensions of Duplex / Super Duplex Steel Round Bars
              </SectionTitle>
              <Table
                headers={productData.sizeChart.headers}
                rows={productData.sizeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex / Super Duplex Steel Round Bars Weight Chart
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Duplex & Super Duplex Steel Round Bars
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
                Searches Related to Duplex / Super Duplex Round Bars
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

export default DuplexSteelRoundBars;
