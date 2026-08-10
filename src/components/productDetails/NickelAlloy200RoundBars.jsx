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

const NickelAlloy200RoundBars = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Nickel Alloy 200 / 201 Round Bars Stockist",
    subtitle:
      "Premium Quality ASTM B160 / ASME SB160 Commercially Pure Nickel Round Bars – Exceptional Corrosion Resistance in Caustic Alkalis, High Thermal & Electrical Conductivity for Chemical Processing, Electronics & Aerospace Applications",

    technicalOverview: {
      title: "Nickel Alloy 200 & 201 Round Bars: Technical Overview",
      description:
        "Nickel Alloy 200 (UNS N02200) and its low-carbon variant, Nickel Alloy 201 (UNS N02201), are commercially pure wrought nickel round bars. These materials are highly valued in technical industries for their unique combination of high electrical and thermal conductivity, excellent mechanical properties, and extraordinary resistance to a wide range of corrosive environments. While Nickel 200 is the standard grade for most applications, Nickel 201 is specifically engineered for service at temperatures exceeding 315°C (600°F). The lower carbon content in the 201 grade prevents embrittlement caused by intergranular carbon precipitation at high temperatures, ensuring structural integrity in high-heat environments.",
    },

    keyCharacteristics: {
      title: "Key Material Characteristics",
      items: [
        "Superior Caustic Resistance: These bars offer the highest resistance of any metallic material to caustic alkalis, particularly sodium hydroxide (caustic soda), at all concentrations and temperatures up to and including the molten state.",
        "Thermal & Electrical Conductivity: They possess significantly higher thermal and electrical conductivity than stainless steels and most nickel-base superalloys, making them ideal for heat transfer and precision electronic components.",
        "Purity Maintenance: As commercially pure materials, they do not introduce metallic contamination into sensitive process flows, which is critical for food, fiber, and pharmaceutical production.",
        "Magnetic Properties: Nickel 200/201 bars are ferromagnetic at room temperature, with high Curie temperatures and strong magnetostrictive properties.",
      ],
    },

    industrialApplications: {
      title: "Industrial Applications",
      items: [
        "Chemical Processing: Fabrication of specialized valve stems, pump shafts, and internal hardware for handling caustic soda, fluorine, and hydrogen chloride.",
        "Food & Synthetic Fibers: Used in the production of fatty acids and viscose rayon where maintaining product purity and color is essential.",
        "Electronics & Battery Tech: Critical for high-conductivity connectors, fuel cell components, and specialized hardware requiring low gas pressure.",
        "Aerospace & Defense: Utilized in rocket motor cases and hardware that must resist corrosive propellants and high-temperature environments.",
      ],
    },

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Nickel 200 and 201 round bars are manufactured to meet stringent international specifications, including ASTM B160 and ASME SB160. To ensure they integrate perfectly into your engineering blueprints, we offer them in several formats:",
      items: [
        "Cold Drawn / Centerless Ground: For applications requiring tight dimensional tolerances (h9, h11), a superior surface finish, and increased mechanical hardness.",
        "Hot Rolled / Forged: Supplied in a black or peeled finish, ideal for heavy-duty chemical plant fabrication and industrial valve components.",
        "Precision Machined: Available in custom lengths and diameters with various surface finishes (bright or polished) to meet specific project requirements.",
      ],
      qualityControl:
        "Every bar undergoes rigorous quality control, including Positive Material Identification (PMI), tensile testing, and ultrasonic testing (UT) for internal soundness. We provide comprehensive EN 10204 3.1 Material Test Certificates (MTC) to ensure complete traceability and compliance with global industrial standards.",
    },

    keyFeatures: [
      "Commercially pure nickel with 99% minimum nickel content",
      "Exceptional resistance to caustic alkalis and sodium hydroxide",
      "Nickel 201 low-carbon variant for service above 600°F (315°C)",
      "High thermal and electrical conductivity",
      "Virtually immune to corrosion by caustic soda at all concentrations",
      "Non-contaminating high purity for sensitive applications",
      "Available in Round, Hex, Square, Flat, Bright & Polished, Rectangle Bars & Billets",
      "Round sizes: 4mm – 500mm | Hex: 18mm – 57mm | Square: 18mm – 47mm",
      "Finishes: Bright, Black, Polished, Cold Drawn, Ground",
      "Lengths: 1 to 6 Meters",
      "Complies with ASTM B160 / ASME SB160, DIN 17752, ISO 9723",
    ],

    applications: [
      "Chemical processing and caustic soda handling",
      "Specialized valve stems and pump shafts",
      "Food processing and synthetic fiber production",
      "High-conductivity connectors and fuel cell components",
      "Aerospace rocket motor cases",
      "Defense and specialized hardware",
      "Pharmaceutical and food production equipment",
      "High-temperature environments above 600°F",
    ],

    stockAvailability: {
      roundBars: {
        title: "Nickel Round Bars",
        image: roundBarsImage,
        items: [
          "Nickel Alloy 200 Round Bars",
          "Nickel 201 Commercial Rods",
          "ASTM B160 Nickel Round Bars",
          "Pure Nickel 200/201 Bars",
          "ASME SB160 Nickel Alloy Rods",
        ],
      },
      hexBars: {
        title: "Nickel Hex Bars",
        image: hexBarsImage,
        items: [
          "Nickel 200 Hexagon Rod",
          "Nickel 201 Hex Bar",
          "ASTM B160 Nickel Hex Bars",
          "ASME SB160 Nickel 200 Hex Rod",
          "Nickel Alloy A/F Hex Rods",
        ],
      },
      squareBars: {
        title: "Nickel Square Bars",
        image: squareBarsImage,
        items: [
          "Nickel 200 Square Bars",
          "ASTM B160 Nickel Steel Square Bars",
          "Nickel 201 Square Rods",
          "Alloy 200 Industrial Square Bar",
          "ASME SB160 Nickel Square Rods",
        ],
      },
      flatBars: {
        title: "Nickel Flat Bars",
        image: flatBarsImage,
        items: [
          "Nickel 200 / 201 Flat Bars",
          "Nickel Alloy Flat Bar Stock",
          "ASTM B160 Nickel Flat Bars",
          "Alloy 201 Industrial Flat Bars",
          "ASME SB160 Nickel Flat Rods",
        ],
      },
      brightBars: {
        title: "Nickel Bright Bars",
        image: brightBarsImage,
        items: [
          "Nickel 200 / 201 Bright Bars",
          "Nickel 200 Bright Bar Rods",
          "Nickel 201 Cold Drawn Rods",
          "ASME SB160 Nickel Bright Rods",
          "ASTM B160 Nickel Steel Bright Bars",
        ],
      },
      rectangleBars: {
        title: "Nickel Rectangle Bars",
        image: rectangleBarsImage,
        items: [
          "Nickel 200 Rectangle Bars",
          "Nickel Alloy Rectangular Bar",
          "ASTM B160 Nickel Rectangle Bars",
          "Nickel 201 Rectangular Rods",
          "ASME SB160 Nickel Rectangle Bar",
        ],
      },
    },

    specifications: {
      standards: "ASTM B160 / ASME SB160, DIN 17752, ISO 9723",
      sizeRange: "Round: 4mm-500mm | Hex: 18mm-57mm | Square: 18mm-47mm",
      finishLength:
        "Bright, Black, Polished, Cold Drawn, Ground | 1 to 6 Meters",
      availableForms:
        "Round, Square, Hex (A/F), Rectangle, Flat, Billet, Forging",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Nickel 200", "N02200", "2.4060 / 2.4066", "Alloy 200"],
        ["Nickel 201", "N02201", "2.4061 / 2.4068", "Alloy 201 (Low Carbon)"],
      ],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "Ni (min)",
        "C (max)",
        "Mn (max)",
        "Fe (max)",
        "S (max)",
      ],
      rows: [
        ["Nickel 200", "99.0", "0.15", "0.35", "0.40", "0.01"],
        ["Nickel 201", "99.0", "0.02", "0.35", "0.40", "0.01"],
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
        ["Nickel 200", "462 min", "148 min", "45% min", "8.89"],
        ["Nickel 201", "403 min", "103 min", "50% min", "8.89"],
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
      "Nickel 200 / 201 High Purity Bar Dealer",
      "Pure Nickel Alloy Corrosion Resistant Bars Exporter",
      "ASME SB160 Nickel 200 Round Bars at Best Price",
      "Nickel Alloy 201 Low Carbon Supplier in India",
      "Nickel Precision Ground & Bright Bars",
      "Nickel Commercial Grade Rods Stockist in Mumbai",
      "ASTM B160 Nickel Hex & Square Rods Stockist in India",
      "Nickel Cold Drawn & Polished Bars Supplier",
      "Nickel Black & Bright Round Bars Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Nickel 200 Bars at Best Price",
      "Nickel Round Bars In Pune",
      "ASTM B160 Nickel Bars",
      "Alloy 201 Bar Stock Range",
      "Cost Of Nickel HR Bars Exporter",
      "Nickel 200 Round Bars Latest Price",
      "Nickel Bars Price List In India",
      "Nickel 201 Round Bars Chemical Composition",
      "Nickel 200 Round Bars Stockyards In India",
      "Nickel Round Bars Pdf",
      "Nickel Round Bars In Mumbai",
      "Cost Of Nickel Round Bars",
      "Nickel Equivalent Grades",
      "Nickel 200 Round Bars Price In India",
      "Nickel Forged Bars",
      "Price Of Nickel Round Bars",
      "Nickel Round Bars Specifications",
      "Nickel Hot Rolled bars Supplier",
      "ASME SB160 Nickel Bars",
      "Nickel Bars Supplier In Mumbai",
      "Nickel Round Bars Suppliers In Gujarat",
      "Nickel Cold Drawn Bars Price List",
      "Nickel Alloy Round Bar",
      "Nickel Bars Catalogue",
      "Nickel Manufacturers",
      "Nickel Threaded Bars",
      "Nickel Round Bars Supplier In India",
      "Nickel Round Bars Price List in India",
      "Nickel Round Bars Dimensions",
      "Nickel Rods Stockist In Mumbai",
      "Nickel Round Bars Stocks",
      "Nickel Round Bars Weight Calculator",
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
                Stock Availability of Nickel Alloy 200 / 201 Round Bars
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
                Technical Specifications: Nickel Alloy 200 / 201 Round Bars
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
                Size and Dimensions of Nickel Alloy Round Bars
              </SectionTitle>
              <Table
                headers={productData.sizeChart.headers}
                rows={productData.sizeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Nickel Alloy Round Bars Weight Chart</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Nickel Alloy 200 / 201 Round Bars & Rods
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
                Searches Related to Nickel Alloy Round Bars
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

export default NickelAlloy200RoundBars;
