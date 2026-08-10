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
import coilWireImage from "../../assets/images/stock/coil-wire.jpg";
import spoolWireImage from "../../assets/images/stock/spool-wire.jpg";

const NickelAlloy200Wires = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Nickel Alloy 200 / 201 Wires Supplier",
    subtitle:
      "Premium Quality ASTM B160 / ASME SB160 Commercially Pure Nickel Wires – Exceptional Corrosion Resistance in Caustic Alkalis, High Thermal & Electrical Conductivity for Electronics, Chemical Processing & Aerospace Applications",

    technicalOverview: {
      title: "Nickel Alloy 200 & 201 Wires: Technical Overview",
      description:
        "Nickel Alloy 200 (UNS N02200) and its low-carbon variant, Nickel Alloy 201 (UNS N02201), are commercially pure wrought nickel wires. They are highly valued in technical industries for their unique combination of high electrical and thermal conductivity, excellent mechanical properties, and extraordinary resistance to many corrosive environments. While Nickel 200 is the standard grade, Nickel 201 is specifically engineered for service at temperatures exceeding 600°F (315°C) to prevent embrittlement from intergranular carbon.",
    },

    keyCharacteristics: {
      title: "Key Material Characteristics",
      items: [
        "Exceptional Corrosion Resistance: These wires are virtually immune to corrosion by distilled and natural waters. Their most notable feature is their resistance to caustic alkalis, particularly sodium hydroxide (caustic soda), at all concentrations and temperatures up to the molten state.",
        "Electrical & Magnetic Properties: Nickel 200/201 wires exhibit high electrical conductivity and a high Curie temperature. They possess strong magnetostrictive properties, making them useful in specialized electronic and sonic applications.",
        "Purity Maintenance: Because they are commercially pure, these wires do not introduce metallic contamination into sensitive process flows, which is critical for food, fiber, and chemical production.",
      ],
    },

    industrialApplications: {
      title: "Industrial Applications",
      items: [
        "Electronics & Electrical Engineering: Used extensively for battery components, lead wires for heating elements, and internal components for vacuum tubes due to low gas pressure and high conductivity.",
        "Chemical Processing: Vital for equipment handling caustic soda, fluorine, and hydrogen chloride. They are used in the production of vinyl chloride monomers and synthetic fibers.",
        "Food & Healthcare: Ideal for handling fatty acids, fruit juices, and high-purity water where maintaining product color and flavor is essential.",
        "Aerospace: Utilized in rocket motor cases and specialized hardware that must resist corrosive propellants.",
      ],
    },

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Nickel 200 and 201 wires are manufactured to meet stringent international specifications, including ASTM B160 and ASME SB160. To ensure they integrate perfectly into your engineering blueprints, we offer them in several formats:",
      items: [
        "Cold Drawn: Provides high-tensile strength and precision dimensional control for electronic leads and springs.",
        "Annealed (Soft): Maximum ductility for ease of weaving into industrial filters, mesh, or for use in complex wiring configurations.",
        "Fine Wire: Available in ultra-fine gauges for precision sensors and delicate electronic instrumentation.",
      ],
    },

    keyFeatures: [
      "Commercially pure nickel with 99% minimum nickel content",
      "Exceptional resistance to caustic alkalis and sodium hydroxide",
      "Nickel 201 low-carbon variant for service above 600°F (315°C)",
      "High thermal and electrical conductivity",
      "Strong magnetostrictive properties for specialized applications",
      "Non-contaminating high purity for sensitive applications",
      'Diameter range: 0.0004" to 0.040" (10 microns to 1.0 mm)',
      "Surface finishes: Polished Bright, Smooth, Bare, Enamel, PTFE, Ceramic",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
      "Available in Welding Wire, Filler Wire, Wire Bobbin, Wire Rope, Coil Wire, Spool Wire",
    ],

    applications: [
      "Battery components and lead wires for heating elements",
      "Vacuum tube internal components",
      "Chemical processing and caustic soda handling",
      "Synthetic fiber production and vinyl chloride monomers",
      "Food processing and high-purity water systems",
      "Aerospace rocket motor cases",
      "Industrial filters and complex wiring configurations",
      "Precision sensors and delicate electronic instrumentation",
    ],

    stockAvailability: {
      weldingWire: {
        title: "Welding Wire",
        image: weldingWireImage,
        items: [
          "Nickel Alloy 200 / 201 Welding Wire",
          "Ni Alloy N02200 / N02201 Welding Wires",
          "High Purity Nickel Electrode Wires",
        ],
      },
      fillerWire: {
        title: "Filler Wire",
        image: fillerWireImage,
        items: [
          "Nickel Alloy 200 / 201 Filler Wire",
          "201 Nickel Alloy Filler Wires",
          "UNS N02200 / N02201 Filler Rods",
        ],
      },
      wireBobbin: {
        title: "Wire Bobbin",
        image: wireBobbinImage,
        items: [
          "Nickel Alloy 200 / 201 Wire Bobbin",
          "UNS N02200 / N02201 Wire Bobbin",
          "Ni Alloy 201 Precision Bobbin Stock",
        ],
      },
      wireRope: {
        title: "Wire Rope",
        image: wireRopeImage,
        items: [
          "Nickel Alloy 200 / 201 Wire Rope",
          "UNS N02201 Nickel Wire Rope",
          "Multi-strand Pure Nickel Rope",
        ],
      },
      coilWire: {
        title: "Coil Wire",
        image: coilWireImage,
        items: [
          "Nickel Alloy 200 / 201 Coil Wire",
          "200 Ni Alloy Coil Wire Stock",
          "Nickel Alloy N02200 Coil Wire",
        ],
      },
      spoolWire: {
        title: "Spool Wire",
        image: spoolWireImage,
        items: [
          "Nickel Alloy 200 / 201 Spool Wire",
          "Nickel Alloy 201 Spool Wire Stock",
          "UNS N02200 Precision Spool Wire",
        ],
      },
    },

    specifications: {
      dimensionsStandards: "ANSI/AWCI – 01-1992, ASTM E 2016-11, RRW 360",
      diameterRange: '0.0004" to 0.040" (10 microns to 1.0 mm)',
      intlSpecifications: "QQ-N-281, BS3076 NA13, DIN 17753, VdTUV 263",
      lengthDensity: 'Cut Lengths: 0.125" to 72" | Density: 8.89 g/cm³',
      surfaceFinish: "Polished Bright, Smooth, Bare, Enamel, PTFE, Ceramic",
      testCertificate: "MTC EN 10204 3.1 / 3.2 Available",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "JIS / BS / EN Standards"],
      rows: [
        ["Nickel 200", "N02200", "2.4066", "NW 2200 / NA 11 / MNi 99.2"],
        ["Nickel 201", "N02201", "2.4068", "NW 2201 / NA 12 / LC-Ni 99"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni (Min)", "C (Max)", "Mn", "Si", "S", "Cu", "Fe"],
      rows: [
        [
          "Alloy 200",
          "99.0",
          "0.15",
          "0.35 max",
          "0.35 max",
          "0.01 max",
          "0.25 max",
          "0.40 max",
        ],
        [
          "Alloy 201",
          "99.0",
          "0.02",
          "0.35 max",
          "0.35 max",
          "0.01 max",
          "0.25 max",
          "0.40 max",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength (0.2%)",
        "Elongation",
      ],
      rows: [
        [
          "8.9 g/cm³",
          "1446 °C (2635 °F)",
          "462 MPa (67,000 Psi)",
          "148 MPa (21,500 Psi)",
          "45%",
        ],
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
      "Nickel Alloy 200 (UNS N02200) High Purity Wires",
      "Nickel Alloy 201 (UNS N02201) Low Carbon Wires",
      "Nickel Alloy 2.4066 / 2.4068 Industrial Wires",
      "High-Quality Nickel 201 Spring Steel & Spring Wires",
      "Nickel Alloy 200/201 TIG & MIG Welding Wires",
      "Alloy 201 Electrode & Weld Filler Wire Supplier",
      "Nickel 200/201 Coil & Spool Wire Exporter Mumbai",
      "Corrosion Resistant Nickel 200 Lashing Wires",
      "Precision Cold Forging Nickel Alloy Wires",
      "Pure Nickel Alloy Wires for Chemical Processing",
      "Leading Nickel Alloy Wire Manufacturer in India",
      "Nickel Alloy 200/201 Wires at Best Price Per Kg",
    ],

    relatedSearches: [
      "Nickel Alloy 201 Wires Stockist In India",
      "Nickel Alloy 2.4066 Wire Price",
      "Price Of Nickel Alloy 201 Wires",
      "Nickel Alloy 200 Wires Price In Mumbai",
      "Cost Of 201 Nickel Alloy Thin Wire Exporter",
      "Nickel Alloy 200 Wires Equivalent Grades",
      "Nickel Alloy 200 Profiled Wires Supplier",
      "Nickel Alloy 201 Wires Stockist Mumbai",
      "Nickel Alloy 200 Escomatic Wires Price",
      "Nickel Alloy 201 Wires Price In India",
      "Nickel 200 Wires Supplier Mumbai",
      "Nickel 201 Wires Specifications PDF",
      "Grade 201 Nickel Alloy Wire Applications",
      "Nickel Alloy 200 Woven Wire Exporter",
      "Top 100 Nickel Alloy 201 Wires Dealers In Pune",
      "Nickel Alloy 200 Wires Exporter In Mumbai",
      "Nickel Alloy 201 tig wire Supplier",
      "200 Ni Alloy Wires Best Price",
      "201 Nickel Alloy Wires In Pune",
      "Nickel Alloy 200 Wires Best Price In Delhi",
      "Price List Of Nickel Alloy 201 wire rope",
      "Alloy 200 Wires Weight Calculator",
      "Nickel Alloy 201 Lashing Wire Exporter",
      "Nickel Alloy 200 Wires Price List In India",
      "Nickel Alloy 201 Wires Stock Range",
      "200 Nickel Alloy Wires Latest Price",
      "201 Nickel Alloy Wires Specifications",
      "200 Nickel Wire Mesh Standard Sizes",
      "Nickel Alloy 201 Wires Stockyards In India",
      "Nickel Alloy 200 Wires Manufacturers",
      "Alloy 201 Wires Chemical Composition",
      "Nickel Alloy 200 Wires Supplier",
      "Ni Alloy 201 Wires Price List",
      "Nickel Alloy UNS N02201 Wires",
      "Nickel Alloy 200 Wire Mesh Manufacturers",
      "201 Nickel Alloy Wires Dimensions",
      "Nickel Alloy 200 Wiremesh Manufacturers In India",
      "Nickel 201 Wire Supplier In Mumbai",
      "Nickel Alloy 200 Wires Catalogue",
      "Nickel N02200 Wire Price India",
      "Cost Of 201 Nickel Alloy Wires Mumbai",
      "Ni Alloy 200 Wires Stockist Gujarat",
      "Nickel 201 Wire Diameter Chart",
      "Nickel Alloy 200 Wires Stocks",
      "Alloy 201 Wires Dealer In India",
      "Nickel Alloy 200 Wire Supplier In Mumbai",
      "Nickel Alloy 201 Welding Electrode Supplier In India",
      "Alloy 201 Spring Wire Price",
      "Nickel Alloy 200 Wires Manufacturer In Mumbai",
      "Nickel Alloy 201 Wire In India",
      "200 Nickel Alloy Wire at Best Price",
      "Buy Nickel Alloy 201 Wires Pdf",
      "Nickel Alloy 200 Wires Price List In Mumbai",
      "Nickel Alloy 2.4068 Wires Suppliers In Gujarat",
      "Nickel Alloy 200 / 201 Wires Exporter In India",
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
                  className="w-full h-60 object-covers rounded-lg shadow-lg"
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

            {/* Key Characteristics */}
            <section className="mb-8">
              <SectionTitle>
                {productData.keyCharacteristics.title}
              </SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.keyCharacteristics.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Industrial Applications */}
            <section className="mb-8">
              <SectionTitle>
                {productData.industrialApplications.title}
              </SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.industrialApplications.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
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
                Stock Availability of Nickel Alloy 200 / 201 Wire
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
                Specification of Nickel Alloy 200 / 201 Wire
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
                Diameter Tolerance: Nickel Alloy 200 / 201 Wires
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Nickel Alloy 200 / 201 Wires & Filler Metals
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
                Searches Related to Nickel Alloy 200 / 201 Wire
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

export default NickelAlloy200Wires;
