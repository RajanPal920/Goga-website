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
import productImage from "../../assets/images/productImage/coil.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Unified Stock Availability Images (same for all product pages)
import hrCoilsImage from "../../assets/images/stock/hr-coils.jpg";
import crCoilsImage from "../../assets/images/stock/cr-coils.jpg";
import slitCoilsImage from "../../assets/images/stock/slit-coils.jpg";

const Monel400Coils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Monel 400 Coils Supplier",
    subtitle:
      "Premium Quality ASTM B127 / ASME SB127 Monel 400 (UNS N04400) Coils – High-Performance Nickel-Copper Alloy for Exceptional Resistance to Seawater, Hydrofluoric Acid & High-Temperature Steam",

    technicalOverview: {
      title: "Monel 400 Coils: Technical Overview",
      description:
        "Monel 400 coils (UNS N04400) are high-performance nickel-copper alloys known for their exceptional resistance to seawater and steam at high temperatures. Containing approximately 63% nickel and 30% copper, this solid-solution alloy can only be hardened by cold working. It exhibits high strength and toughness over a wide temperature range and is virtually immune to chloride-ion stress corrosion cracking in most fresh and industrial waters.",
    },

    corrosionResistance: {
      title: "Key Corrosion Resistance Features",
      items: [
        "Marine Environments: Monel 400 is the standard material for marine engineering. It resists rapidly flowing seawater and provides excellent service in splash zones.",
        "Chemical Processing: It offers outstanding resistance to hydrofluoric acid in all concentrations up to the boiling point. It is also highly resistant to many forms of sulfuric and hydrochloric acids under reducing conditions.",
        "Oxidation Stability: The alloy maintains its structural integrity in both oxidizing and reducing conditions, making it a versatile choice for volatile chemical reactors.",
      ],
    },

    keyApplications: {
      title: "Industrial Applications",
      items: [
        "Marine Engineering: Used for salt-water piping, propeller shafts, and seawater cooling systems on naval vessels.",
        "Chemical Processing: Critical for equipment handling hydrofluoric acid and in the production of salt and chlorinated hydrocarbons.",
        "Oil & Gas: Utilized in crude oil distillation towers and splash-zone sheathing for offshore platforms.",
        "Power Generation: Ideal for boiler feedwater heaters and other heat exchanger coils operating under high pressure.",
      ],
    },

    manufacturingStandards: {
      title: "Manufacturing and Quality Standards",
      description:
        "Our Monel 400 coils are manufactured to meet strict international specifications, including ASTM B127 and ASME SB127. They are available in various formats:",
      items: [
        "Cold Rolled (CR): For precision applications requiring tight tolerances and a smooth surface finish.",
        "Hot Rolled (HR): For heavy-duty fabrication where thickness and durability are the primary requirements.",
        "Slit Coils: Custom-slit to specific widths for automated stamping and manufacturing.",
      ],
      qualityControl:
        "Every coil undergoes rigorous testing, including Positive Material Identification (PMI), ultrasonic inspection, and tensile testing. We provide full EN 10204 3.1 certification to ensure compliance with global engineering blueprints.",
    },

    keyFeatures: [
      "Exceptional resistance to seawater and high-temperature steam",
      "Approximately 63% nickel and 30% copper composition",
      "Virtually immune to chloride-ion stress corrosion cracking",
      "Outstanding resistance to hydrofluoric acid up to boiling point",
      "High strength and toughness over a wide temperature range",
      "Maintains structural integrity in oxidizing and reducing conditions",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM B127 / ASME SB127 standards",
    ],

    applications: [
      "Marine engineering and salt-water piping systems",
      "Naval vessel propeller shafts and seawater cooling",
      "Hydrofluoric acid handling equipment",
      "Salt and chlorinated hydrocarbon production",
      "Crude oil distillation towers",
      "Offshore platform splash-zone sheathing",
      "Boiler feedwater heaters",
      "Heat exchanger coils under high pressure",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Monel 400 Hot Rolled Coils",
          "Alloy 400 Hot Rolled Coils",
          "Monel® Alloy N04400 HR Coils",
          "ASME SB 127 400 Monel HR Coils",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Monel 400 Cold Rolled Coils",
          "Alloy 400 Cold Rolled Coils",
          "Nickel Alloy 400 CR Coils",
          "ASME SB 127 400 Monel CR Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Monel 400 Slit Coils",
          "Alloy 400 Slit Coils",
          "Nickel Alloy 400 Slit Coils",
          "ASME SB 127 400 Monel Slit Coils",
        ],
      },
    },

    specifications: {
      standard: "ASTM B127 / ASME SB127",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      formLength: "Coil / Strip, Length as per Customer Requirement",
      valueAddedServices:
        "Cutting, Polishing, Threading, NDT, Ultrasonic Testing",
    },

    equivalentGrades: {
      headers: ["STANDARD", "WNR.", "UNS", "JIS / AFNOR / EN / GOST"],
      rows: [
        [
          "Monel 400",
          "2.4360",
          "N04400",
          "NW 4400 / NA 13 / NiCu30Fe / NU-30M / ????? 28-2,5-1,5",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cu", "Fe", "Mn", "Si", "C", "S"],
      rows: [
        [
          "Monel 400",
          "63.00 min",
          "28.0 – 34.0",
          "2.50 max",
          "2.00 max",
          "0.50 max",
          "0.30 max",
          "0.024 max",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength (0.2% Offset)",
        "Elongation",
      ],
      rows: [
        [
          "8.8 g/cm³",
          "1350 °C (2460 °F)",
          "550 MPa (80,000 Psi)",
          "240 MPa (35,000 Psi)",
          "40%",
        ],
      ],
    },

    availabilityChart: {
      headers: [
        "Coil Type / Specification",
        "Sizes (Thickness)",
        "Availability",
      ],
      rows: [
        ["ASTM B127 / ASME SB 127", "0.4mm", "Y"],
        ["Monel 400 Coils", "0.5mm", "Y"],
        ["Alloy 400 Cold Rolled Coils", "0.8mm", "Y"],
        ["Nickel Alloy 400 Coils", "1mm", "Y"],
        ["UNS N04400 Coil Stock", "1.2mm", "Y"],
        ["ASTM B127 / ASME SB 127", "1.6mm", "Y"],
        ["Monel 400 Coils", "2mm", "Y"],
        ["Alloy 400 Cold Rolled Coils", "3mm", "Y"],
        ["Nickel Alloy 400 Coils", "4mm", "Y"],
        ["UNS N04400 Coil Stock", "5mm", "Y"],
        ["ASTM B127 / ASME SB 127", "6mm", "Y"],
        ["Monel 400 Coils", "8mm", "Y"],
        ["Alloy 400 Cold Rolled Coils", "10mm", "Y"],
        ["Nickel Alloy 400 Coils", "12mm", "Y"],
        ["UNS N04400 Coil Stock", "16mm", "Y"],
        ["ASTM B127 / ASME SB 127", "20mm", "Y"],
        ["Monel 400 Coils", "25mm", "Y"],
      ],
    },

    weightChart: {
      headers: [
        "Size (mm)",
        "Weight per Coil (Kg)",
        "Size (mm)",
        "Weight per Coil (Kg)",
      ],
      rows: [
        ["4000 x 2000 x 2.0", "136.0", "3000 x 1500 x 5.0", "191.0"],
        ["4000 x 2000 x 3.0", "204.0", "4000 x 2000 x 5.0", "340.0"],
        ["2500 x 1250 x 4.0", "106.0", "2500 x 1250 x 6.0", "159.0"],
        ["3000 x 1500 x 4.0", "153.0", "3000 x 1500 x 6.0", "230.0"],
        ["4000 x 2000 x 4.0", "272.0", "4000 x 2000 x 6.0", "408.0"],
        [
          "2500 x 1250 x 5.0",
          "133.0",
          "Custom sizes available on request",
          "—",
        ],
      ],
    },

    specializedProducts: [
      "Monel 400 (UNS N04400) Seamless Coils",
      "ASTM B127 Monel Alloy 400 Industrial Coils",
      "Monel 2.4360 Coils Cut To Size & Slit Strips",
      "Alloy 400 Hot Rolled (HR) & Cold Rolled (CR) Coils",
      "Monel 400 Coils Supplier in Mumbai, India",
      "Nickel Alloy 400 Coil Manufacturer in India",
      "ASME SB127 Monel Coils at Best Price",
      "Monel® Alloy 400 Coils Exporter & Stockist",
      "Type 400 Monel Coils Standards Stockholder",
      "Monel Grade 400 Industrial Coils Dealer",
      "Specialized Monel Alloy 400 Slit Coils",
      "Monel 400 Spring Hard & Soft Annealed Coils",
      "400 Monel Alloy Coils for Marine Applications",
      "Monel Alloy 400 High Precision Strip Coils",
    ],

    relatedSearches: [
      "400 Monel Coils In Mumbai",
      "400 Monel (HR) Hot Rolled Coils Price List",
      "Monel 400 Coils Supplier In India",
      "Monel 400 Price In India",
      "Top 100 Monel Coil Dealers In Pune",
      "Monel 400 Coil Manufacturers",
      "Monel Coil Grade 400 Price List",
      "400 Monel Latest Price",
      "400 Monel Coils Length",
      "Monel Alloy 400 Coils Price In Mumbai",
      "Monel Alloy 400 Monel Coils Thickness",
      "Monel 400 Coils In India",
      "Monel 400 Coil Thickness Tolerance",
      "Monel 400 Coils Supplier",
      "Price List Of Monel 400 Coils",
      "Monel 400 Coils Equivalent Grades",
      "Cost Of Monel 400 Coils Exporter",
      "Monel 400 Coil Dealer In India",
      "Cost Of 400 Monel Coil",
      "Monel 400 Coil Stockist In Mumbai",
      "Monel 400 Coil Price List",
      "Monel 400 Coils Catalogue",
      "Alloy 400 Coils Chemical Composition",
      "Monel 400 Coil Price In India",
      "Monel 2.4360 Slit Coils Suppliers In Gujarat",
      "Monel 400 Coil Thickness Chart",
      "Monel 400 Coil Supplier",
      "Monel UNS N04400 Coil",
      "Buy Monel Alloy 400 Coils Pdf",
      "ASME SB127 Monel Alloy 400 Coil",
      "Nickel Alloy 400 Coil Stockist",
      "Alloy 400 Coil Supplier",
      "ASME SB 127 400 Monel Coil",
      "400 Monel Coils Stocks",
      "Monel Coil 400 Price",
      "400 Monel Coil Supplier In Mumbai",
      "Monel 400 Coils Manufacturer In Mumbai",
      "Alloy 400 Cold Rolled (CR) Coils",
      "Monel 400 Hot Rolled Coils Price List",
      "Monel 400 Coils",
      "Monel 400 Coil Exporter",
      "400 Monel Coil In Pune",
      "Price Of Monel Alloy Coil 400",
      "400 Monel Coil Specifications",
      "ASTM B127 400 Monel Alloy Coils",
      "Monel 400 Coils Manufacturers In India",
      "Monel 400 Coils Price List In India",
      "Monel 400 Coil Weight Calculator",
      "400 Monel Coil Dimensions",
      "Nickel Alloy 400 Coils Exporter",
      "Monel 400 Coil Stockyards In India",
      "Monel Alloy 400 Coil Supplier In Mumbai",
      "Monel® Alloy 400 Coils Pdf",
      "Monel 400 Coil Size",
      "Monel 400 Coil Price List In Mumbai",
      "Monel 400 Coils Best Price In Delhi",
      "Monel Alloy 400 Coil Supplier",
      "Monel Alloy 400 Coil Price List",
      "Monel® Alloy 400 Coil Exporter In India",
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

            {/* Corrosion Resistance */}
            <section className="mb-8">
              <SectionTitle>
                {productData.corrosionResistance.title}
              </SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.corrosionResistance.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Applications */}
            <section className="mb-8">
              <SectionTitle>{productData.keyApplications.title}</SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.keyApplications.items.map((item, index) => (
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
              <SectionTitle>Stock Availability of Monel 400 Coils</SectionTitle>
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
              <SectionTitle>Specification of Monel 400 Coils</SectionTitle>
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

            {/* Availability Chart */}
            <section className="mb-8">
              <SectionTitle>Monel 400 Coil Stock Availability</SectionTitle>
              <Table
                headers={productData.availabilityChart.headers}
                rows={productData.availabilityChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Monel 400 Cold Rolled Coils (Descaled) Weight Chart
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM B127 / ASME SB 127 Type 400 Alloy
              </p>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Monel 400 Coils
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
              <SectionTitle>Searches Related to Monel 400 Coils</SectionTitle>
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

export default Monel400Coils;
