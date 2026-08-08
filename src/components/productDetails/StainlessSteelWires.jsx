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
import productImage from "../../assets/images/productImage/wires.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Stock Availability Images (using wire-specific or unified images)
import weldingWireImage from "../../assets/images/stock/welding-wire.jpg";
import fillerWireImage from "../../assets/images/stock/filler-wire.jpg";
import wireBobbinImage from "../../assets/images/stock/wire-bobbin.jpg";
import wireRopeImage from "../../assets/images/stock/wire-rope.jpg";
import brightWireImage from "../../assets/images/stock/bright-wire.jpg";
import coldHeadingWireImage from "../../assets/images/stock/cold-heading-wire.jpg";

const StainlessSteelWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Stainless Steel Wires Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    subtitle:
      "Premium Quality ASTM A580 / ASME SA580 Stainless Steel Wires – Comprehensive Range of Austenitic, Heat-Resistant & Specialized Grades for Industrial, Medical, Marine & High-Temperature Applications",

    technicalOverview: {
      title:
        "Stainless Steel Wires: Technical Overview and Grade Characteristics",
      description:
        "Stainless steel wires are essential components in modern engineering, providing a diverse range of corrosion resistance, mechanical strength, and thermal stability. From high-precision medical springs to heavy-duty industrial mesh, these austenitic and martensitic grades are designed to perform under varied environmental and mechanical stresses.",
    },

    gradeBreakdown: [
      {
        title: "Standard Austenitic Grades: 304/304L & 316/316L",
        items: [
          "SS 304/304L (UNS S30400/S30403): The industry standard '18/8' stainless steel. Grade 304L features lower carbon to prevent sensitization during welding. These wires are widely used for kitchenware, springs, and general-purpose weaving.",
          "SS 316/316L (UNS S31600/S31603): Enhanced with Molybdenum for superior resistance to chlorides and marine environments. These wires are the primary choice for pharmaceutical filters, chemical plant fasteners, and marine-grade mesh.",
        ],
      },
      {
        title: "High-Temperature & Heat-Resistant Grades",
        items: [
          "SS 309 & 310S: High-nickel and high-chromium alloys designed for oxidation resistance. 310S (UNS S31008) is specifically used for continuous service up to 1100°C (2012°F) in furnace conveyors and heating element supports.",
          "SS 321 (UNS S32100): Titanium-stabilized to prevent intergranular corrosion. Ideal for high-temperature applications in the range of 427°C to 815°C, such as aircraft exhaust components and manifold wire.",
        ],
      },
      {
        title: "Specialized Corrosion & High-Strength Grades",
        items: [
          "SS 317L (UNS S31703): A high-molybdenum version of 316L, providing enhanced resistance to chemical attack by sulfuric and phosphoric acids in the pulp and paper industry.",
          "SS 904L (UNS N08904): A high-alloy austenitic steel with copper additions. Offers exceptional resistance to strong reducing acids and is frequently used in sulfuric acid plants and scrubbers.",
          "SS 17-4 PH (UNS S17400): A precipitation-hardening martensitic grade providing an outstanding combination of high strength and hardness. Essential for aerospace components, pump shafts, and high-tension springs.",
          "SS 308: Predominantly used for specialized welding wires and filler material where a slightly higher alloy content than 304 is required to ensure weld integrity.",
        ],
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing and Quality Standards",
      description:
        "Our stainless steel wires are manufactured to meet global specifications, including ASTM A313, A580, and ASME SA580. We offer these in several processing formats:",
      items: [
        "Cold Drawn: Provides high-tensile strength and precision dimensional control for industrial springs and wirelines.",
        "Annealed (Soft): Maximum ductility for ease of weaving into high-performance filters or for further cold-forming processes.",
        "Spring Temper: Optimized for mechanical components requiring high fatigue resistance and elastic memory.",
      ],
      qualityControl:
        "Every shipment is verified through Positive Material Identification (PMI), tensile testing, and surface quality checks. We provide full EN 10204 3.1 Material Test Certificates (MTC) to ensure complete traceability for your technical projects.",
    },

    keyFeatures: [
      "Comprehensive range of grades: 304, 304L, 308, 309, 310S, 316, 316L, 317L, 321, 904L, 17-4 PH & more",
      "Cold Drawn, Annealed (Soft), and Spring Temper formats",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished Bright, PTFE, Ceramic, Filler, Flat, Coil, Spring, Stranded",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "100% Radiography Tested available",
      "Complies with ASTM A580/A313, ASME SA580/SA313, AMS 5514, RRW 360",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Bright Wire, Cold Heading Wire",
    ],

    applications: [
      "Kitchenware and general-purpose weaving",
      "Pharmaceutical filters and chemical plant fasteners",
      "Marine-grade mesh and offshore equipment",
      "Furnace conveyors and heating element supports",
      "Aircraft exhaust components and manifold wire",
      "Pulp and paper industry equipment",
      "Sulfuric acid plants and scrubbers",
      "Aerospace components and high-tension springs",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "SS 308L / 309L / 316L Welding Wire",
          "Stainless Steel Welding Wire",
          "SS 904L & 17-4 PH Welding Wires",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "SS Filler Wires (304, 316, 321)",
          "Steel Filler Wire Stock",
          "High-Grade SS 904L Filler Wire",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "SS Wire Bobbin Stock",
          "Steel Wire Bobbin",
          "Precision Wound SS 304 Bobbins",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "SS Wire Rope (7x7, 7x19, 1x19)",
          "Steel Wire Rope Industrial",
          "SS 316 Marine Grade Wire Rope",
        ],
      },
      brightWire: {
        title: "Bright Wire",
        image: brightWireImage,
        items: [
          "SS Bright Wire (Polished Finish)",
          "Steel Bright Wire Stock",
          "SS 304/316 Bright Annealed Wire",
        ],
      },
      coldHeadingWire: {
        title: "Cold Heading Wire",
        image: coldHeadingWireImage,
        items: [
          "SS Cold Heading Wire for Fasteners",
          "Steel Cold Heading Wire",
          "SS 304HC / 316HC Heading Wires",
        ],
      },
    },

    specifications: {
      standardsSpecs: "ASTM A580/A313, ASME SA580/SA313, AMS 5514, RRW 360",
      diameterRange:
        '0.0004" to 0.040" (10 microns to 1.0 mm) | Custom Gauges Available',
      strengthTemper:
        "Ultimate Strength: 580-750 MPa | Dead Soft to Ultra Spring Temper",
      meshWeaving:
        'Plain, Twill, Dutch Weave | Welded Mesh Rolls up to 84" Wide',
      surfaceForm:
        "Polished Bright, PTFE, Ceramic | Filler, Flat, Coil, Spring, Stranded",
      testCertificate:
        "MTC EN 10204 3.1 / 3.2 | 100% Radiography Tested available",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "JIS / EN / AFNOR Standards"],
      rows: [
        [
          "SS 304/304L",
          "S30400/S30403",
          "1.4301/1.4307",
          "SUS 304/L | X5CrNi18-10 | Z7CN18-09",
        ],
        ["SS 308", "S30800", "1.4303", "ER308 | High Chromium Weld Wire"],
        [
          "SS 309",
          "S30900",
          "1.4828",
          "SUS 309 | X12CrNi23-13 | Heat Resistant",
        ],
        ["SS 310S", "S31008", "1.4845", "SUS 310S | X8CrNi25-21 | Z12CN25-20"],
        [
          "SS 316/316L",
          "S31600/S31603",
          "1.4401/1.4404",
          "SUS 316/L | X2CrNiMo17-12-2 | Z3CND17-11-02",
        ],
        [
          "SS 317L",
          "S31703",
          "1.4438",
          "SUS 317L | X2CrNiMo18-15-4 | Z3CND19-15-04",
        ],
        ["SS 321", "S32100", "1.4541", "SUS 321 | X6CrNiTi18-10 | Z6CNT18-10"],
        [
          "SS 17-4 PH",
          "S17400",
          "1.4542",
          "AISI 630 | X5CrNiCuNb16-4 | Precipitation Hardening",
        ],
        [
          "SS 904L",
          "N08904",
          "1.4539",
          "SUS 904L | X1NiCrMoCu25-20-5 | Z2 NCDU 25-20",
        ],
      ],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "C",
        "Cr",
        "Ni",
        "Mo",
        "Mn",
        "Si",
        "Other Key Elements",
      ],
      rows: [
        [
          "304L",
          "0.035",
          "18-20",
          "8-13",
          "—",
          "2.0",
          "1.0",
          "P: 0.045, S: 0.030",
        ],
        ["308", "0.08", "19-21", "10-12", "—", "2.0", "1.0", "P: 0.045 max"],
        [
          "309",
          "0.20",
          "22-24",
          "12-15",
          "—",
          "2.0",
          "1.0",
          "Heat Resisting Grade",
        ],
        [
          "310S",
          "0.08",
          "24-26",
          "19-22",
          "0.75",
          "2.0",
          "1.5",
          "High Temp Resistance",
        ],
        [
          "316L",
          "0.035",
          "16-18",
          "10-14",
          "2.0-3.0",
          "2.0",
          "1.0",
          "P: 0.045, S: 0.030",
        ],
        [
          "317L",
          "0.035",
          "18-20",
          "11-15",
          "3.0-4.0",
          "2.0",
          "1.0",
          "Fe: 57.89 min",
        ],
        [
          "321",
          "0.08",
          "17-19",
          "9-12",
          "—",
          "2.0",
          "1.0",
          "Ti: 5(C+N) to 0.70",
        ],
        [
          "17-4 PH",
          "0.07",
          "15-17.5",
          "3-5",
          "—",
          "1.0",
          "1.0",
          "Cu: 3.0-5.0 | Nb+Ta: 0.15-0.45",
        ],
        ["904L", "0.02", "19-23", "23-28", "4-5", "2.0", "1.0", "Cu: 1.0-2.0"],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation",
        "Density (g/cm³)",
      ],
      rows: [
        ["SS 304L/308", "515 - 585", "205", "35-40 %", "8.00"],
        ["SS 309/310S", "515 - 620", "205 - 310", "40 - 45 %", "7.90"],
        ["SS 316L/317L", "515", "205", "35 %", "8.00"],
        ["SS 321", "515", "205", "35 %", "8.00"],
        ["SS 904L", "490", "220", "35 %", "7.95"],
        ["SS 17-4 PH", "930 - 1100", "724 - 1000", "12 - 16 %", "7.75"],
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
          "Under 0.0120 (0.30) to 0.0080 (0.20)",
          "0.0003 (0.008)",
          "0.0003 (0.008)",
        ],
        [
          "Under 0.0048 (0.12) to 0.0030 (0.08)",
          "0.0001 (0.003)",
          "0.0001 (0.003)",
        ],
      ],
    },

    specializedProducts: [
      "SS 304 / 304L General Purpose & Food Grade Wires",
      "SS 316 / 316L Marine Grade & Chemical Resistant Wires",
      "SS 310S / 309 High-Temperature Oxidation Resistant Wires",
      "SS 321 Titanium Stabilized Heat Exchanger Wires",
      "SS 17-4 PH High-Strength Precipitation Hardening Wires",
      "SS 904L (UNS N08904) Super Austenitic Corrosion Wires",
      "SS 308 / 308L / 309L / 316L Welding & Filler Wires",
      "Precision SS Wire Bobbins & Spools for Industrial Use",
      "SS 304 / 316 Spring Temper & Cold Heading Wires",
      "Stainless Steel Stranded Wire Ropes & Aircraft Cables",
      "SS Welded, Knitted & Filter Wire Mesh Manufacturer",
      "Stainless Steel Wire Suppliers at Best Prices in India",
    ],

    relatedSearches: [
      "SS 304 Wire Price List",
      "SS 316L Wire Weight Calculator",
      "SS 310S Wire Dimensions",
      "SS 304 Wire Price Per Kg in India",
      "SS 316 Wire Manufacturer in Mumbai",
      "Stainless Steel Wire Supplier in India",
      "ASTM A580 SS Wire Tolerance Chart",
      "ASME SA313 SS Wire Price List PDF",
      "SS 304 Wire Mechanical Properties",
      "SS 316L Wire Chemical Composition",
      "SS 304 Wire Stockist in Pune",
      "Stainless Steel Wire Exporter Mumbai",
      "SS 304 Bright Wire Price in India",
      "SS Wire Gauge Chart",
      "SS 308L Filler Wire Supplier",
      "SS 316 TIG Wire Price",
      "SS 309L MIG Wire Manufacturers",
      "SS Wire Rope Catalog PDF",
      "SS Wire Equivalent Grades",
      "SS 317L Wire Price per Meter",
      "Stainless Steel updated price list 2026",
      "SS 321 Wire size chart",
      "SS Wire Manufacturers in Gujarat",
      "SS Wire Stockyards in India",
      "SS 304 Wire thickness chart",
      "SS 316 Wire Price in India",
      "Top 100 SS Wire Dealers in Mumbai",
      "Buy Stainless Steel Wire Online India",
      "SS leading wire manufacturers",
      "SS Wire descaled finish price",
      "SS 17-4 PH Wire Price India",
      "SS 904L Wire Price Mumbai",
      "SS 316 Spring Wire Stockist",
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
      { name: "Flats & Pairs", slug: "patta-patti" },
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
              <SectionTitle>Stainless Steel Grades & Applications</SectionTitle>
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
              <SectionTitle>
                Stock Availability of Stainless Steel Wire
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
              <SectionTitle>Specification of Stainless Steel Wire</SectionTitle>
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
              <SectionTitle>Universal Diameter Tolerance Chart</SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Stainless Steel Wires & Filler Metals
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
                Searches Related to Stainless Steel Wire
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

export default StainlessSteelWires;
