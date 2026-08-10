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
import productImage from "../../assets/images/productImage/wires.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (using wire-specific images)
import weldingWireImage from "../../assets/images/stock/welding-wire.jpg";
import fillerWireImage from "../../assets/images/stock/filler-wire.jpg";
import wireBobbinImage from "../../assets/images/stock/wire-bobbin.jpg";
import wireRopeImage from "../../assets/images/stock/wire-rope.jpg";
import brightWireImage from "../../assets/images/stock/bright-wire.jpg";
import coldHeadingWireImage from "../../assets/images/stock/cold-heading-wire.jpg";

const DuplexSteelWires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Duplex & Super Duplex Steel Wires Supplier – S31803, S32205, S32750, S32760",
    subtitle:
      "Premium Quality Duplex & Super Duplex Steel Wires – Dual-Phase Microstructure for Superior Corrosion Resistance, High Strength & Stress Corrosion Cracking Resistance in Aggressive Environments",

    technicalOverview: {
      title:
        "Duplex and Super Duplex Steel Wires: Technical Overview and Properties",
      description:
        "Duplex and Super Duplex steel wires are high-performance stainless steel alloys characterized by a dual-phase microstructure consisting of approximately 50% austenite and 50% ferrite. This balanced metallurgical structure combines the best properties of both phases: the stress corrosion cracking resistance of ferritic steels and the ease of fabrication and general corrosion resistance of austenitic steels. These wires provide significantly higher yield strength—often double that of standard 300-series stainless steels—allowing for thinner, lighter, and more cost-effective engineering designs without compromising structural integrity.",
    },

    gradeBreakdown: [
      {
        title: "Duplex Steel S31803 and S32205 Wires",
        description:
          "Duplex S31803 and the nitrogen-enhanced S32205 (often referred to as Alloy 2205) are the most widely used duplex grades. They are engineered to provide superior resistance to localized corrosion, specifically pitting and crevice corrosion, in chloride-bearing environments.",
        items: [
          "Corrosion Profile: With a high Chromium (22%) and Molybdenum (3%) content, these wires offer exceptional resistance to stress corrosion cracking (SCC), a common failure mode for standard austenitic grades in hot halide environments.",
          "Mechanical Strength: They exhibit high fatigue strength and excellent thermal conductivity.",
        ],
        keyApplications:
          "Subsea equipment, chemical processing components, and high-strength fasteners for marine infrastructure.",
      },
      {
        title: "Super Duplex Steel S32750 and S32760 Wires",
        description:
          "Super Duplex wires, including S32750 (Alloy 2507) and S32760 (Zeron 100), are highly alloyed grades designed for the most aggressive corrosive service. These grades feature a Pitting Resistance Equivalent Number (PREN) of >40, placing them among the most durable stainless steels available.",
        items: [
          "S32750 (UNS S32750): Features 25% Chromium and 4% Molybdenum. Specifically designed for high-strength applications in extremely corrosive conditions, such as warm seawater.",
          "S32760 (UNS S32760): Similar to S32750 but includes deliberate additions of Copper and Tungsten. Enhances its resistance to mineral acids like sulfuric and hydrochloric acid, particularly in contaminated media.",
        ],
        keyApplications:
          "Desalination plants, offshore firewater systems, and flue-gas desulfurization (FGD) scrubbers.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Duplex and Super Duplex wires are manufactured to meet stringent international specifications, including ASTM A805 and ASME SA805. These wires are available in various conditions to suit specific fabrication needs:",
      items: [
        "Cold Drawn: For high-tensile applications such as springs and high-strength mesh.",
        "Annealed: For applications requiring maximum ductility and formability.",
        "Spring Temper: Optimized for mechanical components requiring high fatigue resistance.",
      ],
      qualityControl:
        "Every shipment undergoes rigorous quality control, including Positive Material Identification (PMI), tensile testing, and intergranular corrosion tests. We provide comprehensive EN 10204 3.1 Material Test Certificates (MTC) to ensure complete traceability and compliance with global engineering blueprints.",
    },

    keyFeatures: [
      "Unique dual-phase (Austenite + Ferrite) microstructure",
      "Superior resistance to pitting, crevice corrosion and chloride-induced SCC",
      "Yield strength roughly double that of conventional austenitic grades",
      "Allows significant weight savings through thinner designs",
      "Available in Duplex (S31803/S32205) and Super Duplex (S32750/S32760)",
      "PREN > 40 for Super Duplex grades for aggressive environments",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Bright Wire, Cold Heading Wire",
    ],

    applications: [
      "Subsea equipment and offshore platforms",
      "Chemical processing components",
      "High-strength fasteners for marine infrastructure",
      "Desalination plants",
      "Offshore firewater systems",
      "Flue-gas desulfurization (FGD) scrubbers",
      "Heat exchangers and pressure vessels",
      "High-chloride and aggressive environments",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "Super Duplex Steel Welding Wire",
          "Duplex Stainless Steel Welding Wires",
          "Super Duplex Welding Wires (S32750)",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "Super Duplex Stainless Filler Wire",
          "Duplex Steel Filler Wires (S31803)",
          "Duplex Stainless Steel Filler Wires",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "Super Duplex Steel Wire Bobbin",
          "Duplex Stainless Steel Wire Bobbin",
          "Duplex Steel Wire Bobbin (S32205)",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "Super Duplex Steel Wire Rope",
          "Duplex Steel Wire Rope Stock",
          "S32760 Super Duplex Wire Rope",
        ],
      },
      brightWire: {
        title: "Bright Wire",
        image: brightWireImage,
        items: [
          "Super Duplex Stainless Bright Wire",
          "Duplex Steel Bright Wire Stock",
          "Duplex Bright Wire (S31803)",
        ],
      },
      coldHeadingWire: {
        title: "Cold Heading Wire",
        image: coldHeadingWireImage,
        items: [
          "Duplex Stainless Cold Heading Wire",
          "Super Duplex Steel Heading Wire",
          "Duplex Steel Cold Heading Wire",
        ],
      },
    },

    specifications: {
      specifications: "ASTM A580, SA580 / ASTM A313, SA313, AMS 5514",
      wireDiameter: '0.0004" to 0.040" (10 microns to 1.0 mm)',
      standardsDimensions:
        "DIN, BS, ANSI/AWCI–01-1992, ASTM E 2016-11, RRW 360",
      lengthDensity:
        'Cut: 0.125" to 72" | No Limit on Spool | Density: 8.89 g/cm³',
      ultimateStrength: "? 580 - 750 MPa | Resistance as per Standard",
      techniqueTemper: "Cold / Hot Rolled | Dead Soft Annealed to Ultra Spring",
    },

    meshSpecifications: {
      title: "Available Forms & Mesh Specifications",
      items: [
        'Welded Wire Mesh | Width: 24", 36", 1M, 48", 72", 84" | Length: 100ft or 150ft',
        "Weaving Methods | Plain Weave, Twill Weave, Dutch Weave",
        "Available Forms | Filler, Flat, Coil, Electrode, Welding, Mesh, Knitted Wire Mesh, Filter Mesh, MIG, TIG, Spring, Stranded and Twisted.",
      ],
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "Common Trade Name"],
      rows: [
        ["Duplex S31803", "S31803", "1.4462", "Duplex F51 Wire"],
        ["Duplex S32205", "S32205", "1.4462", "Duplex F60 Wire / 2205"],
        ["Super Duplex S32750", "S32750", "1.4410", "Super Duplex F53 / 2507"],
        [
          "Super Duplex S32760",
          "S32760",
          "1.4410 / 1.4501",
          "Super Duplex F55 Wire",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "C (max)", "Cr", "Mo", "Ni", "N", "Fe (min)"],
      rows: [
        [
          "S31803",
          "0.030",
          "22.0 – 23.0",
          "3.0 – 3.5",
          "4.50 – 6.50",
          "0.14 – 0.20",
          "63.72",
        ],
        [
          "S32205",
          "0.030",
          "21.0 – 23.0",
          "2.50 – 3.50",
          "4.50 – 6.50",
          "0.08 – 0.20",
          "63.54",
        ],
        [
          "S32750",
          "0.030",
          "24.0 – 26.0",
          "3.00 – 5.00",
          "6.00 – 8.00",
          "0.24 – 0.32",
          "58.09",
        ],
        [
          "S32760",
          "0.050",
          "24.0 – 26.0",
          "3.00 – 4.00",
          "6.00 – 8.00",
          "0.20 – 0.30",
          "57.61",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
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

    toleranceChart: {
      headers: [
        "Specified Diameter in. (mm)",
        "Diameter Tolerance in. (mm) – Over (+)",
        "Diameter Tolerance in. (mm) – Under (-)",
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
      "Duplex Steel S31803 (F51) High Strength Wires",
      "Duplex Steel S32205 (F60) Corrosion Resistant Wires",
      "Super Duplex Steel S32750 (F53) Aerospace Wires",
      "Super Duplex Steel S32760 (F55) Marine Wires",
      "Precision Cold Heading & Bright Finish Wires",
      "Duplex & Super Duplex Wires for Mesh Weaving",
      "TIG, MIG & Electrode Welding Wires Stockist",
      "Duplex Steel Spring Wires & Stranded Wire Ropes",
      "High Strength Super Duplex Filler Wires",
      "ASTM A580 / SA580 Compliant Industrial Wires",
      "Duplex Wire Bobbin & Spool Manufacturer in India",
      "Specialty Alloy Wire Suppliers at Best Prices",
    ],

    relatedSearches: [
      "Duplex Steel S31803 Wire Price List",
      "Super Duplex S32750 Wire Weight Calculator",
      "Duplex S32205 Wire Dimensions",
      "Super Duplex S32760 Wire Price Per Kg in India",
      "Duplex Steel Wire Manufacturer in Mumbai",
      "Super Duplex Wire Supplier in India",
      "ASTM A580 Duplex Wire Tolerance Chart",
      "ASME SA313 Super Duplex Wire Price List PDF",
      "Duplex S31803 Wire Mechanical Properties",
      "Super Duplex S32750 Wire Chemical Composition",
      "Duplex Wire Stockist in Pune",
      "Super Duplex Wire Exporter Mumbai",
      "Duplex Steel Bright Wire Price in India",
      "Super Duplex Wire Gauge Chart",
      "S31803 Cold Heading Wire Price",
      "S32750 Filler Wire Supplier",
      "Duplex Steel TIG Wire Price",
      "Super Duplex MIG Wire Manufacturers",
      "Duplex Steel Wire Rope Catalog PDF",
      "Super Duplex Wire Equivalent Grades",
      "Duplex Steel Wire Price per Meter",
      "Super Duplex updated price list 2026",
      "S32205 Wire size chart",
      "Super Duplex Wire Manufacturers in Gujarat",
      "Duplex Steel Wire Stockyards in India",
      "S32760 Wire thickness chart",
      "Duplex S31803 Wire Price in India",
      "Top 100 Duplex Wire Dealers in Mumbai",
      "Buy Super Duplex Wire Online India",
      "Duplex Steel leading wire manufacturers",
      "Super Duplex Wire descaled finish price",
      "UNS S31803 Wire Price India",
      "UNS S32750 Wire Price Mumbai",
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
                  className="w-full h-90 object-cover rounded-lg shadow-lg"
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
                Stock Availability of Duplex / Super Duplex Steel Wire
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
                Specification of Duplex / Super Duplex Steel Wire
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

            {/* Mesh Specifications */}
            <section className="mb-8">
              <SectionTitle>
                {productData.meshSpecifications.title}
              </SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.meshSpecifications.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
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
                Diameter Tolerance: Duplex & Super Duplex Steel Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Duplex & Super Duplex Steel Wires
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
                Searches Related to Duplex & Super Duplex Steel Wire
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

export default DuplexSteelWires;
