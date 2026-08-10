// src/components/productDetails/IncloneyWires.jsx
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

// ✅ FIXED: Component name matches the file name
const IncloneyWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Incoloy Wires Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    subtitle:
      "Premium Quality Incoloy Superalloy Wires – Nickel-Iron-Chromium Alloys Engineered for High-Temperature Strength, Oxidation Resistance & Corrosion Protection in Extreme Industrial Environments",

    technicalOverview: {
      title:
        "Incoloy Alloy Wires: Technical Overview and Grade Characteristics",
      description:
        "Incoloy wires are nickel-iron-chromium superalloys engineered to provide a high-performance, cost-effective solution for environments requiring both high-temperature strength and resistance to various forms of corrosion. These alloys act as a bridge between standard stainless steels and high-nickel superalloys, offering excellent oxidation resistance and structural stability. By balancing nickel and iron content, Incoloy wires maintain their mechanical properties under prolonged thermal stress and aggressive chemical exposure.",
    },

    // ✅ FIXED: Ensure gradeBreakdown is always an array
    gradeBreakdown: [
      {
        title: "Incoloy 800, 800H, and 800HT Wires",
        description:
          "The 800 Series is the industry standard for high-temperature applications requiring creep and rupture strength.",
        items: [
          "Incoloy 800 (UNS N08800): The base grade used for general heat-resistant applications. It offers excellent resistance to oxidation and carburization at temperatures up to 1100°F (593°C).",
          "Incoloy 800H / 800HT (UNS N08810 / N08811): These versions have strictly controlled carbon, aluminum, and titanium contents. Combined with a high-temperature solution anneal, these wires offer significantly higher creep-rupture properties for service above 1100°F.",
        ],
        keyApplications:
          "Industrial furnace heating elements, heat-treating baskets, and petrochemical process piping reinforcement.",
      },
      {
        title: "Incoloy DS and Alloy 330 Wires",
        description:
          "Incoloy DS (and its close relative Alloy 330) are specialized for the heat-treating industry. With an increased silicon content, these wires offer superior resistance to 'green rot' and internal oxidation in carburizing and nitriding atmospheres.",
        items: [
          "Thermal Stability: They maintain excellent ductility even after long-term service at high temperatures, making them ideal for components subject to repeated thermal cycling.",
        ],
        keyApplications:
          "Furnace muffles, radiant tubes, and specialized wire mesh for high-heat conveyer belts.",
      },
      {
        title: "Incoloy 825 and 925 Wires (Corrosion Resistant)",
        description:
          "Incoloy 825 (UNS N08825): A titanium-stabilized alloy with added molybdenum and copper. It provides exceptional resistance to many corrosive environments, particularly sulfuric and phosphoric acids. It is virtually immune to chloride-ion stress corrosion cracking. Incoloy 925 (UNS N09925): An age-hardenable version of Alloy 825. It provides the same superior corrosion resistance but with much higher mechanical strength and hardness through precipitation hardening.",
        items: [
          "Incoloy 825: Excellent resistance to sulfuric and phosphoric acids",
          "Incoloy 925: Age-hardenable with superior mechanical strength",
        ],
        keyApplications:
          "Oil and gas downhole components, acid production equipment, and high-strength marine fasteners.",
      },
    ],

    keyFeatures: [
      "Nickel-iron-chromium superalloys bridging cost and performance",
      "Excellent high-temperature strength and oxidation resistance",
      "Superior resistance to carburization and nitriding atmospheres",
      "Exceptional resistance to chloride-ion stress corrosion cracking",
      "Available in 6 grades: 800, 800H, 800HT, 825, 925 & DS 330",
      "Age-hardenable grades (825, 925) for high-strength applications",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished Bright, Smooth, Enamel, PTFE, Ceramic",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Coil Wire, Spool Wire",
    ],

    applications: [
      "Industrial furnace heating elements and heat-treating baskets",
      "Petrochemical process piping reinforcement",
      "Furnace muffles, radiant tubes, and high-heat conveyer belts",
      "Oil and gas downhole components",
      "Acid production equipment and high-strength marine fasteners",
      "High-temperature oxidation and carburization environments",
      "Specialized wire mesh for heat-treating industry",
      "Power generation and chemical processing",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "Incoloy® Alloy Welding Wires",
          "Inconel Welding Wire Stock",
          "Incoloy Alloy Welding Wires",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "Incoloy® Filler Wires",
          "Inconel Filler Wires",
          "Incoloy Alloy Filler Wires",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "Incoloy® Alloy Wire Bobbin",
          "Inconel Wire Bobbin Stock",
          "Incoloy Alloy Wire Bobbin",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "Incoloy Alloy Wire Rope",
          "Inconel® Alloy Wire Rope",
          "Inconel Wire Rope Industrial",
        ],
      },
      coilWire: {
        title: "Coil Wire",
        image: coilWireImage,
        items: [
          "Incoloy® Alloy Coil Wire",
          "Inconel Coil Wire Stock",
          "Incoloy Alloy Coil Wire",
        ],
      },
      spoolWire: {
        title: "Spool Wire",
        image: spoolWireImage,
        items: [
          "Incoloy Alloy Spool Wire",
          "Inconel Spool Wire Stock",
          "Inconel® Alloy Spool Wire",
        ],
      },
    },

    specifications: {
      dimensionsStandards: "ANSI/AWCI – 01-1992, ASTM E 2016-11, RRW 360",
      diameterRange: '0.0004" to 0.040" (10 microns to 1.0 mm)',
      intlSpecifications: "QQ-N-281, BS3076 NA13, DIN 17753, VdTUV 263",
      lengthDensity: 'Cut: 0.125" to 72" | Density: 8.89 g/cm³',
      surfaceFinish: "Polished Bright, Smooth, Enamel, PTFE, Ceramic",
      testCertificate: "Yes (MTC EN 10204 3.1 / 3.2 Available)",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "Common Trade Name"],
      rows: [
        ["Incoloy 800", "N08800", "1.4876", "DS 330 / NA 15"],
        [
          "Incoloy 800H/HT",
          "N08810 / N08811",
          "1.4958 / 1.4859",
          "Alloy 800H / 800HT",
        ],
        ["Incoloy 825", "N08825", "2.4858", "Alloy 825 / NA 16"],
        ["Incoloy 925", "N09925", "—", "Alloy 925 / NCF 925"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "C", "Al", "Ti", "Other"],
      rows: [
        [
          "800",
          "30-35",
          "19-23",
          "39.5 min",
          "0.10 max",
          "0.15-0.6",
          "0.15-0.6",
          "Cu: 0.75 max",
        ],
        [
          "800H/HT",
          "30-35",
          "19-23",
          "39.5 min",
          "0.05-0.10",
          "0.15-0.6",
          "0.15-0.6",
          "Cu: 0.75 max",
        ],
        [
          "825",
          "38-46",
          "19.5-23.5",
          "22 min",
          "0.05 max",
          "0.02 max",
          "0.6-1.2",
          "Cu: 1.5-3.0",
        ],
        [
          "925",
          "42-46",
          "19-22",
          "28.5",
          "0.01 max",
          "0.1-0.5",
          "1.9-2.4",
          "Mo: 2.5-3.5",
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
        ["800 / 800H / 825", "7.94 g/cm³", "520 MPa", "205 MPa", "30%"],
        ["925", "8.05 g/cm³", "1210 MPa", "810 MPa", "24%"],
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
      "Incoloy 800 / 800H / 800HT High-Temperature Wires",
      "Incoloy 825 (UNS N08825) Corrosion Resistant Wires",
      "Incoloy 925 Age-Hardenable High-Strength Wires",
      "Precision TIG & MIG Incoloy Welding Wires",
      "Incoloy Alloy Filler Wires & Welding Filler Rods",
      "Incoloy Fine Wires for Heating Elements & Sensors",
      "Incoloy Wire Bobbin & Spool Manufacturer in Mumbai",
      "High-Nickel Alloy Wire Ropes & Stranded Cables",
      "Bright Annealed & Polished Smooth Surface Wires",
      "Incoloy Cold Heading & Ultra Spring Temper Wires",
      "Specialty Incoloy Grade Industrial Wire Stockist",
      "Incoloy Wire Suppliers at Best Prices in India",
    ],

    relatedSearches: [
      "Incoloy 800 Wire Price List",
      "Incoloy 825 Wire Weight Calculator",
      "Incoloy 800H Wire Dimensions",
      "Incoloy 800HT Wire Price Per Kg in India",
      "Incoloy 825 Wire Manufacturer in Mumbai",
      "Incoloy Wire Supplier in India",
      "ASTM Incoloy Wire Tolerance Chart",
      "ASME Incoloy Wire Price List PDF",
      "Incoloy 800 Wire Mechanical Properties",
      "Incoloy 825 Wire Chemical Composition",
      "Incoloy Wire Stockist in Pune",
      "Incoloy Wire Exporter Mumbai",
      "Incoloy Bright Wire Price in India",
      "Incoloy Wire Gauge Chart",
      "Incoloy 825 Filler Wire Supplier",
      "Incoloy TIG Wire Price",
      "Incoloy MIG Wire Manufacturers",
      "Incoloy Wire Rope Catalog PDF",
      "Incoloy Wire Equivalent Grades",
      "Incoloy 925 Wire Price per Meter",
      "Incoloy updated price list 2026",
      "Incoloy 800 Wire size chart",
      "Incoloy Wire Manufacturers in Gujarat",
      "Incoloy Wire Stockyards in India",
      "Incoloy 825 Wire thickness chart",
      "Incoloy 800 Wire Price in India",
      "Top 100 Incoloy Wire Dealers in Mumbai",
      "Buy Incoloy Wire Online India",
      "Incoloy Alloy leading wire manufacturers",
      "Incoloy Wire descaled finish price",
      "UNS N08800 Wire Price India",
      "UNS N08825 Wire Price Mumbai",
      "UNS N09925 Alloy Wire Stockist",
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
    // ✅ FIXED: Add defensive checks for countries and cities
    countries: Array.isArray(countries) ? countries : [],
    cities: Array.isArray(state) ? state : [],
  };

  // ===============================
  // HELPER COMPONENTS
  // ===============================

  const SectionTitle = ({ children }) => (
    <h2 className="text-3xl font-bold text-[#173F52] mb-6">{children}</h2>
  );

  // ✅ FIXED: Add null checks for Table component
  const Table = ({ headers, rows }) => {
    if (!headers || !rows) return null;

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

  // ✅ FIXED: Add null checks for ChipList component
  const ChipList = ({ items }) => {
    if (!items) return null;

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

            {/* Grade Breakdown - ✅ FIXED: Added safe check */}
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
                    {section.description && (
                      <p className="text-gray-700 text-sm mb-2">
                        {section.description}
                      </p>
                    )}
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
                <p className="text-gray-500">No grade information available.</p>
              )}
            </section>

            {/* Key Features */}
            <section className="mb-8">
              <SectionTitle>Key Features & Benefits</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {productData.keyFeatures &&
                  productData.keyFeatures.map((feature, index) => (
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
                {productData.applications &&
                  productData.applications.map((app, index) => (
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
              <SectionTitle>Stock Availability of Incoloy Wire</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productData.stockAvailability &&
                  Object.entries(productData.stockAvailability).map(
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
                            {stock.items &&
                              stock.items.map((item, index) => (
                                <li
                                  key={index}
                                  className="text-xs text-gray-600 flex items-start gap-2"
                                >
                                  <span className="text-[#D92B20] mt-0.5">
                                    •
                                  </span>
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
                Specification of Incoloy Wire (800, 800H/HT, 825, 925)
              </SectionTitle>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <ul className="space-y-2">
                  {productData.specifications &&
                    Object.entries(productData.specifications).map(
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
                headers={productData.equivalentGrades?.headers}
                rows={productData.equivalentGrades?.rows}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>Chemical Composition</SectionTitle>
              <Table
                headers={productData.chemicalComposition?.headers}
                rows={productData.chemicalComposition?.rows}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>Mechanical & Physical Properties</SectionTitle>
              <Table
                headers={productData.mechanicalProperties?.headers}
                rows={productData.mechanicalProperties?.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Diameter Tolerance: Incoloy Alloy Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart?.headers}
                rows={productData.toleranceChart?.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Incoloy Alloy Wires & Filler Metals
              </SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {productData.specializedProducts &&
                  productData.specializedProducts.map((product, index) => (
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
                Searches Related to Incoloy Alloy Wire
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
                {productData.ourProducts &&
                  productData.ourProducts.map((product, index) => (
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
                {productData.shopByMaterial &&
                  productData.shopByMaterial.map((material, index) => (
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
                href={`mailto:${contact?.email || "info@alloypipe.com"}`}
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
        {productData.countries && productData.countries.length > 0 && (
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
        )}

        {/* =============================== */}
        {/* CITIES - Full Width Below */}
        {/* =============================== */}
        {productData.cities && productData.cities.length > 0 && (
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
        )}
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

// ✅ FIXED: Export with the same name as the component
export default IncloneyWires;
