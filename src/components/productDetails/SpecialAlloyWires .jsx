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

// Stock Availability Images (using wire-specific images)
import weldingWireImage from "../../assets/images/stock/welding-wire.jpg";
import fillerWireImage from "../../assets/images/stock/filler-wire.jpg";
import wireBobbinImage from "../../assets/images/stock/wire-bobbin.jpg";
import wireRopeImage from "../../assets/images/stock/wire-rope.jpg";
import brightCoilWireImage from "../../assets/images/stock/bright-wire.jpg";
import spoolHeadingWireImage from "../../assets/images/stock/spool-wire.jpg";

const SpecialAlloyWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Special Alloy Wires Supplier – SMO 254 (F44) & Alloy 20",
    subtitle:
      "Premium Quality Super-Austenitic & High-Nickel Alloy Wires – SMO 254 (6% Moly) for Maximum Pitting Resistance & Alloy 20 (Carpenter 20) for Exceptional Sulfuric Acid Resistance",

    technicalOverview: {
      title: "SMO 254 & Alloy 20 Wires: Technical Overview and Properties",
      description:
        "Special alloy wires like SMO 254 and Alloy 20 are high-performance materials engineered to solve specific corrosion challenges. While standard stainless steels often succumb to localized pitting or acid attack, these alloys provide the metallurgical stability required for aggressive chemical processing and marine engineering.",
    },

    gradeBreakdown: [
      {
        title: "SMO 254 Wires (UNS S31254 / F44)",
        description:
          "SMO 254 is a super-austenitic stainless steel characterized by its high molybdenum and nitrogen content. It was specifically developed for use in halide-containing environments, such as brackish water and seawater, where even Grade 316L fails.",
        items: [
          "Pitting Resistance: With a PREN (Pitting Resistance Equivalent Number) of ?42.5, it offers extraordinary resistance to pitting and crevice corrosion.",
          "Mechanical Strength: The addition of nitrogen gives SMO 254 nearly twice the yield strength of 300-series austenitic steels, allowing for high-tension wire applications.",
        ],
        keyApplications:
          "Marine desalination systems, offshore oil and gas filters, and pulp/paper bleach plant equipment.",
      },
      {
        title: "Alloy 20 Wires (UNS N08020)",
        description:
          "Alloy 20, often called 'Carpenter 20,' is a 'super' stainless steel designed primarily for maximum resistance to acid attack. It effectively bridges the gap between stainless steel and more expensive nickel alloys.",
        items: [
          "Sulfuric Acid Specialist: It is renowned for its exceptional performance in hot sulfuric acid, particularly in concentrations of 20% to 40%.",
          "Stabilized Structure: The inclusion of Niobium prevents intergranular corrosion by stabilizing the material against carbide precipitation during welding or thermal processing.",
        ],
        keyApplications:
          "Chemical production of synthetic fibers and plastics, pharmaceutical manufacturing, and pickling tank mesh.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our specialized wires are manufactured to meet stringent international specifications, including ASTM A313, B463, and ASME SB463. They are available in various conditions to suit your engineering blueprints:",
      items: [
        "Cold Drawn: For high-tensile applications such as industrial springs and high-strength mesh.",
        "Annealed (Soft): Provides maximum ductility for ease of weaving, braiding, or further cold-forming.",
        "Spring Temper: Optimized for mechanical components requiring high fatigue resistance in highly corrosive environments.",
      ],
      qualityControl:
        "Every shipment undergoes rigorous quality control, including Positive Material Identification (PMI), tensile testing, and intergranular corrosion verification. We provide comprehensive EN 10204 3.1 Material Test Certificates (MTC) to ensure complete traceability for mission-critical infrastructure.",
    },

    keyFeatures: [
      "SMO 254: Maximum resistance to pitting and crevice corrosion (PREN ?42.5)",
      "SMO 254: Superior resistance to high-chloride environments",
      "SMO 254: Nearly twice the yield strength of 300-series austenitic steels",
      "Alloy 20: Exceptional resistance to hot sulfuric acid (20-40% concentrations)",
      "Alloy 20: Stabilized with Niobium for excellent weldability",
      "Alloy 20: Bridges the gap between stainless steel and nickel alloys",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished Bright, Bare, PTFE, Ceramic",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Bright & Coil Wire, Spool & Heading Wire",
    ],

    applications: [
      "Marine desalination systems and offshore oil & gas filters",
      "Pulp and paper bleach plant equipment",
      "Chemical production of synthetic fibers and plastics",
      "Pharmaceutical manufacturing",
      "Pickling tank mesh and chemical reactors",
      "Industrial springs and high-strength mesh",
      "Heat exchangers and condensers",
      "High-chloride and sulfuric acid environments",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "SMO 254 (UNS S31254) Welding Wire",
          "Alloy 20 (UNS N08020) Welding Wires",
          "Alloy 20cb3® / Inconel® Alloy 20",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "SMO 254 (F44) Filler Wires",
          "Alloy N08020 / 20cb3® Filler Wires",
          "Specialty Alloy TIG/MIG Filler Rods",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "SMO S31254 / 254 SMO Wire Bobbin",
          "Alloy 20cb-3® / Alloy 20 Wire Bobbin",
          "Precision Wound Alloy Bobbins",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "SMO F44 S31254 Wire Rope",
          "Alloy 20 / 20cb3® Wire Rope Stock",
          "High Corrosion Resistance Ropes",
        ],
      },
      brightCoilWire: {
        title: "Bright & Coil Wire",
        image: brightCoilWireImage,
        items: [
          "SMO 254 (F44) Bright & Coil Wires",
          "Alloy 20 / UNS N08020 Coil Wire",
          "Polished Smooth Surface Finish",
        ],
      },
      spoolHeadingWire: {
        title: "Spool & Heading Wire",
        image: spoolHeadingWireImage,
        items: [
          "SMO 254 Cold Heading Wires",
          "Incoloy Alloy 20 Spool Wires",
          "UNS N08020 / Alloy 20 Heading Wire",
        ],
      },
    },

    specifications: {
      standardsDimensions:
        "ASTM/ASME, DIN, BS, ANSI/AWCI-01-1992, ASTM E 2016-11, RRW 360",
      diameterRange:
        '0.0004" to 0.040" (10 microns to 1.0 mm) | Custom sizes on request',
      mechanicalStrength:
        "Ultimate Strength: ? 580-750 MPa | Density: 8.89 g/cm³",
      lengthTemper:
        'Cut: 0.125" to 72" | No Limit on Spool | Soft Annealed to Ultra Spring',
      surfaceTechnique:
        "Polished Bright, Bare, PTFE, Ceramic | Cold / Hot Rolled Technique",
      meshSpecifications:
        'Plain, Twill, Dutch Weave | Roll Width up to 84" | 100-150ft Length',
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS",
        "WERKSTOFF NR.",
        "Common Trade Name / Standard",
      ],
      rows: [
        [
          "SMO 254",
          "S31254",
          "1.4547",
          "F44 / 6Mo / 2378 / Z1 CNDU 20.18.06Az",
        ],
        ["Alloy 20", "N08020", "2.4660", "Carpenter 20 / 20cb3® / NiCr20CuMo"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Mo", "Cu", "C (max)", "N / Ti", "Fe"],
      rows: [
        [
          "SMO 254",
          "17.5–18.5",
          "19.5–20.5",
          "6.0–6.5",
          "0.5–1.0",
          "0.02",
          "N: 0.18-0.22",
          "Rem",
        ],
        [
          "Alloy 20",
          "32.0–38.0",
          "19.0–21.0",
          "2.0–3.0",
          "3.0–4.0",
          "0.07",
          "Nb+Ta: 8xC–1.0",
          "29.85 min",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength",
        "Elongation",
      ],
      rows: [
        ["SMO 254", "8.0 g/cm³", "1320-1390°C", "650 MPa", "300 MPa", "35%"],
        ["Alloy 20", "8.1 g/cm³", "1443 °C", "551 MPa", "241 MPa", "30%"],
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
          "Under 0.0330 (0.84) to 0.0240 (0.61)",
          "0.0005 (0.013)",
          "0.0005 (0.013)",
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
      "SMO 254 (UNS S31254) F44 6% Moly Wires",
      "Alloy 20 (UNS N08020) Acid Resistant Wires",
      "SMO 254 TIG, MIG & Electrode Welding Wires",
      "Alloy 20cb3® / Incoloy® Alloy 20 Filler Metals",
      "Precision 254 SMO Wire Bobbin & Spool Stockist",
      "Special Alloy Knitted & Filter Wire Mesh",
      "High Strength SMO 254 Wire Rope & Stranded Cables",
      "Alloy 20 Cold Heading & Bright Finished Wires",
      "Super Austenitic & Specialty Alloy Wire Manufacturer",
      "Ultra Spring Temper Alloy 20 & SMO 254 Wires",
      "SMO 254 F44 Bare & Polished Smooth Wires",
      "Special Alloy Wires at Best Prices in Mumbai, India",
    ],

    relatedSearches: [
      "SMO 254 Wire Price List",
      "Alloy 20 Wire Weight Calculator",
      "SMO 254 Wire Dimensions",
      "Alloy 20 Wire Price Per Kg in India",
      "254 SMO Wire Manufacturer in Mumbai",
      "Alloy 20 Wire Supplier in India",
      "ASTM A580 SMO 254 Wire Tolerance Chart",
      "ASME SA313 Alloy 20 Wire Price List PDF",
      "SMO 254 Wire Mechanical Properties",
      "Alloy 20 Wire Chemical Composition",
      "SMO 254 Wire Stockist in Pune",
      "Special Alloy Wire Exporter Mumbai",
      "SMO 254 Bright Wire Price in India",
      "Alloy 20 Wire Gauge Chart",
      "S31254 Filler Wire Supplier",
      "Alloy 20 TIG Wire Price",
      "SMO 254 MIG Wire Manufacturers",
      "Alloy 20 Wire Rope Catalog PDF",
      "SMO 254 Wire Equivalent Grades",
      "Alloy 20 Wire Price per Meter",
      "Special Alloy updated price list 2026",
      "SMO 254 Wire size chart",
      "Alloy 20 Wire Manufacturers in Gujarat",
      "Special Alloy Wire Stockyards in India",
      "SMO 254 Wire thickness chart",
      "Alloy 20 Wire Price in India",
      "Top 100 Special Alloy Wire Dealers in Mumbai",
      "Buy SMO 254 Wire Online India",
      "Alloy 20 leading wire manufacturers",
      "SMO 254 Wire descaled finish price",
      "UNS S31254 Wire Price India",
      "UNS N08020 Wire Price Mumbai",
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
              <SectionTitle>Special Alloy Grades & Applications</SectionTitle>
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
                Stock Availability of SMO 254 & Alloy 20 Wire
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
                Specification of Special Alloy Wires (SMO 254 & Alloy 20)
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
                Diameter Tolerance: Special Alloy Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in SMO 254 & Alloy 20 Wires
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
                Searches Related to Special Alloy Wire
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
          href={getWhatsAppUrl}
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

export default SpecialAlloyWires;
