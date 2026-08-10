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
import coilWireImage from "../../assets/images/stock/coil-wire.jpg";
import spoolWireImage from "../../assets/images/stock/spool-wire.jpg";

const MonelWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Monel Wires Supplier – 400, K500 & R405",
    subtitle:
      "Premium Quality ASTM B164 / ASME SB164 Monel Wires – High-Performance Nickel-Copper Alloys for Exceptional Resistance to Seawater, Hydrofluoric Acid & High-Strength Applications",

    technicalOverview: {
      title: "Monel Alloy Wires: Technical Overview and Properties",
      description:
        "Monel wires are high-performance nickel-copper alloys renowned for their exceptional strength and resistance to corrosive environments, particularly flowing seawater and various acids. Composed primarily of roughly 63% nickel and 30% copper, these wires serve as a critical material in marine engineering, chemical processing, and oil and gas extraction where standard stainless steels are prone to pitting or stress corrosion cracking.",
    },

    gradeBreakdown: [
      {
        title: "Monel 400 Wires (UNS N04400)",
        description:
          "Monel 400 is the foundational grade of the series, known for its high strength and excellent corrosion resistance across a wide range of temperatures.",
        items: [
          "Corrosion Resistance: It is virtually immune to chloride-ion stress corrosion cracking. It offers outstanding resistance to hydrofluoric acid, sulfuric acid, and alkalies.",
          "Marine Performance: This grade is the industry standard for marine environments, resisting biofouling and maintaining integrity in high-velocity seawater.",
        ],
        keyApplications:
          "Marine cable wrapping, spring manufacturing for salt-water valves, and heating elements for chemical reactors.",
      },
      {
        title: "Monel K500 Wires (UNS N05500)",
        description:
          "Monel K500 combines the excellent corrosion resistance of Alloy 400 with the added advantages of greater strength and hardness. This is achieved by adding aluminum and titanium to the nickel-copper base, followed by a controlled heat treatment known as age hardening (precipitation hardening).",
        items: [
          "High-Strength Performance: It provides approximately three times the yield strength of Alloy 400 while remaining non-magnetic down to very low temperatures.",
          "Spark Resistance: The alloy is spark-resistant, making it safe for use in volatile environments.",
        ],
        keyApplications:
          "High-strength marine fasteners, subsea cable shielding, and oil-well drilling tools.",
      },
      {
        title: "Monel R405 Wires (UNS N04405)",
        description:
          "Monel R405 is the free-machining version of Monel 400. It has a controlled amount of sulfur added to the composition, which improves the machinability of the material without significantly altering its corrosion resistance or mechanical properties.",
        items: [
          "Fabrication Advantage: The sulfur creates nickel-copper sulfides that act as chip breakers during the drawing and machining processes, making it ideal for high-speed automated production.",
        ],
        keyApplications:
          "Precision-turned components, specialized fasteners, and screw machine products for corrosive service.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Monel wires are manufactured to meet stringent international specifications, including ASTM B164 and ASME SB164. We provide these wires in several conditions to suit your technical blueprints:",
      items: [
        "Cold Drawn: For applications requiring high-tensile strength and precision dimensional control.",
        "Annealed (Soft): For maximum ductility, ease of weaving into industrial filters, or further cold-forming.",
        "Spring Temper: Specifically processed for high fatigue life in corrosive fluids.",
      ],
    },

    keyFeatures: [
      "Exceptional resistance to seawater, hydrofluoric acid, and sulfuric acid",
      "Available in Monel 400, K500, and R405 grades",
      "Monel K500 offers approximately three times the yield strength of Monel 400",
      "Monel R405 provides improved machinability for high-speed production",
      "Virtually immune to chloride-ion stress corrosion cracking",
      "Spark-resistant for use in volatile environments",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished Bright, Smooth, Bare, Enamel, PTFE, Ceramic",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Coil Wire, Spool Wire",
    ],

    applications: [
      "Marine cable wrapping and salt-water valve springs",
      "Chemical reactor heating elements",
      "High-strength marine fasteners and subsea cable shielding",
      "Oil-well drilling tools",
      "Precision-turned components and screw machine products",
      "Industrial filters and wire mesh",
      "Offshore oil and gas equipment",
      "Hydrofluoric and sulfuric acid handling",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "Monel Alloy Welding Wires",
          "Monel® Alloy Welding Wires",
          "High-Quality Welding Electrode Wire",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "Monel Alloy Filler Wires",
          "Monel® Alloy Filler Wires",
          "Corrosion Resistant Filler Rods",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "Monel Wire Bobbin",
          "Monel® Alloy Wire Bobbin",
          "Monel Alloy Wire Bobbin Stock",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "Monel Wire Rope",
          "Monel Alloy Wire Rope",
          "Multi-strand Monel Alloy Rope",
        ],
      },
      coilWire: {
        title: "Coil Wire",
        image: coilWireImage,
        items: [
          "Monel Coil Wire",
          "Monel® Alloy Coil Wire",
          "High Strength Coil Wire Stock",
        ],
      },
      spoolWire: {
        title: "Spool Wire",
        image: spoolWireImage,
        items: [
          "Monel Spool Wire",
          "Monel Alloy Spool Wire",
          "Monel® Precision Spool Wire",
        ],
      },
    },

    specifications: {
      dimensionsStandards: "ANSI/AWCI – 01-1992, ASTM E 2016-11, RRW 360",
      diameterRange: '0.0004" to 0.040" (10 microns to 1.0 mm)',
      intlSpecifications: "QQ-N-281, BS3076 NA13, DIN 17753, VdTUV 263",
      lengthDensity: 'Cut Lengths: 0.125" to 72" | Density: 8.89 g/cm³',
      surfaceFinish: "Polished Bright, Smooth, Bare, Enamel, PTFE, Ceramic",
      testCertificate: "Yes (MTC EN 10204 3.1 / 3.2 Available)",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS",
        "WERKSTOFF NR.",
        "Common Trade Name / Standard",
      ],
      rows: [
        ["Monel 400", "N04400", "2.4360", "Alloy 400 / NA 13 / NW 4400"],
        ["Monel K500", "N05500", "2.4375", "Alloy K500 (Age-Hardenable)"],
        ["Monel R405", "N04405", "—", "Alloy R405 (Free-Machining)"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cu", "Fe", "Mn", "Al", "Ti", "S"],
      rows: [
        [
          "400",
          "63.0 min",
          "28.0 - 34.0",
          "2.5 max",
          "2.0 max",
          "—",
          "—",
          "0.024 max",
        ],
        [
          "K500",
          "63.0 min",
          "27.0 - 33.0",
          "0.5 - 2.0",
          "1.5 max",
          "2.3 - 3.15",
          "0.35 - 0.85",
          "0.010 max",
        ],
        [
          "R405",
          "63.0 min",
          "28.0 - 34.0",
          "2.5 max",
          "2.0 max",
          "—",
          "—",
          "0.025 - 0.060",
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
        ["Monel 400 / R405", "8.80 g/cm³", "550 MPa", "240 MPa", "40%"],
        ["Monel K500", "8.44 g/cm³", "1100 MPa", "790 MPa", "20%"],
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
      "Monel 400 (UNS N04400) Marine Grade Wires",
      "Monel K500 (UNS N05500) High-Strength Age-Hardened Wires",
      "Monel R405 (UNS N04405) Free-Machining Alloy Wires",
      "Monel TIG & MIG Welding Wires for Saltwater Environments",
      "Monel Alloy Filler Wires & Precision Electrode Wires",
      "Monel Wire for Chemical & Hydrocarbon Processing",
      "Monel Wire Bobbin & Spool Manufacturer in India",
      "Corrosion Resistant Monel Wire Ropes & Multi-Strand Cables",
      "Bright Annealed & Polished Smooth Surface Monel Wires",
      "Monel Cold Forging & Spring Temper Specialty Wires",
      "Specialty Monel Grade Industrial Wire Stockist Mumbai",
      "Monel Wire Suppliers at Competitive Prices in India",
    ],

    relatedSearches: [
      "Monel 400 Wire Price List",
      "Monel K500 Wire Weight Calculator",
      "Monel R405 Wire Dimensions",
      "Monel 400 Wire Price Per Kg in India",
      "Monel 400 Wire Manufacturer in Mumbai",
      "Monel Wire Supplier in India",
      "ASTM Monel Wire Tolerance Chart",
      "ASME Monel Wire Price List PDF",
      "Monel 400 Wire Mechanical Properties",
      "Monel K500 Wire Chemical Composition",
      "Monel Wire Stockist in Pune",
      "Monel Wire Exporter Mumbai",
      "Monel Bright Wire Price in India",
      "Monel Wire Gauge Chart",
      "Monel 400 Filler Wire Supplier",
      "Monel TIG Wire Price",
      "Monel MIG Wire Manufacturers",
      "Monel Wire Rope Catalog PDF",
      "Monel Wire Equivalent Grades",
      "Monel 400 Wire Price per Meter",
      "Monel updated price list 2026",
      "Monel K500 Wire size chart",
      "Monel Wire Manufacturers in Gujarat",
      "Monel Wire Stockyards in India",
      "Monel 400 Wire thickness chart",
      "Monel 400 Wire Price in India",
      "Top 100 Monel Wire Dealers in Mumbai",
      "Buy Monel Wire Online India",
      "Monel Alloy leading wire manufacturers",
      "Monel Wire polished finish price",
      "UNS N04400 Wire Price India",
      "UNS N05500 Wire Price Mumbai",
      "Monel Alloy Spring Wire Stockist",
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
              <SectionTitle>Monel Grades & Applications</SectionTitle>
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
              <SectionTitle>Stock Availability of Monel Wire</SectionTitle>
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
                Specification of Monel Wire (400, K500, R405)
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
                Universal Diameter Tolerance: Monel Alloy Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Monel Alloy Wires & Filler Metals
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
              <SectionTitle>Searches Related to Monel Alloy Wire</SectionTitle>
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

export default MonelWires;
