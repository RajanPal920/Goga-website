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

const HighPerformanceAlloyCoils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "High-Performance Alloy Coils Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    subtitle:
      "Premium Quality Specialized Alloy Coils – Engineered for Mission-Critical Applications Including Ultra-High Temperature Resistance, Controlled Thermal Expansion & Superior Strength in Corrosive Environments",

    technicalOverview: {
      title: "High-Performance Specialized Alloy Coils: Technical Overview",
      description:
        "This selection of specialized alloy coils is engineered for mission-critical applications where standard stainless steels fail due to thermal fatigue, mechanical stress, or aggressive chemical attack. These coils provide unique solutions ranging from ultra-high temperature resistance and controlled thermal expansion to superior strength in corrosive marine environments.",
    },

    gradeBreakdown: [
      {
        title: "Nimonic 75 / 80A Coils (High-Temperature Superalloys)",
        description:
          "Nimonic alloys are nickel-chromium based superalloys designed for high-temperature service where creep resistance is the primary concern.",
        items: [
          "Nimonic 75 (UNS N06075): Offers excellent oxidation resistance and mechanical properties at high temperatures, making it a staple for furnace hardware.",
          "Nimonic 80A (UNS N07080): A precipitation-hardenable alloy strengthened by aluminum and titanium, providing significantly higher creep-rupture properties up to 1500°F (815°C).",
        ],
        keyApplications:
          "Gas turbine components, internal combustion engine valves, and specialized heat-treatment furnace muffles.",
      },
      {
        title: "Nichrome 80 / 20 Coils (Electrical Resistance)",
        description:
          "Nichrome 80/20 (80% Nickel, 20% Chromium) is the gold standard for electrical resistance and heating elements. When heated, it forms a stable, tenacious layer of chromium oxide that protects the coil from further degradation during intermittent heating cycles.",
        keyApplications:
          "Industrial heating elements, laboratory equipment, and heat-treatment furnace components.",
      },
      {
        title: "Nitronic 50 (XM–19) Coils (High Strength & Corrosion)",
        description:
          "Nitronic 50 (UNS S20910) is a nitrogen-strengthened austenitic stainless steel that offers a combination of corrosion resistance and strength superior to Types 316 and 317. It remains non-magnetic even after severe cold working.",
        keyApplications:
          "Marine pump shafts, subsea hardware, and chemical processing valves requiring high yield strength.",
      },
      {
        title: "Nilo 42 & Nilo 48 Coils (Controlled Expansion)",
        description:
          "The Nilo series (Invar family) is engineered for applications requiring dimensional stability across varying temperatures.",
        items: [
          "Nilo 42 (UNS K94100): Features a low coefficient of thermal expansion up to 570°F (300°C), ideal for glass-to-metal seals.",
          "Nilo 48 (UNS K94800): Designed to match the thermal expansion of specific ceramics and soft glasses.",
        ],
        keyApplications: "Thermostats, electronic tubes, and laser components.",
      },
      {
        title: "Alloy 286 (660) & Alloy 926 (6% Moly) Coils",
        description:
          "Alloy 286 (UNS S66000): An iron-base, age-hardenable superalloy designed for high strength and corrosion resistance up to 1290°F (700°C). It is frequently used in jet engine components and high-strength fasteners. Alloy 926 (UNS N08926): A super-austenitic 6% Molybdenum stainless steel with increased nitrogen. It provides exceptional resistance to pitting and crevice corrosion in high-chloride media like seawater and pulp bleach plants.",
        keyApplications:
          "Jet engine components, high-strength fasteners, and seawater equipment.",
      },
    ],

    keyFeatures: [
      "Specialized alloys for mission-critical applications",
      "Ultra-high temperature resistance up to 1500°F (815°C)",
      "Controlled thermal expansion for dimensional stability",
      "Superior strength in corrosive marine environments",
      "Available in Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 & 926",
      "Hot Rolled (HR), Cold Rolled (CR), and Slit Coils available",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM/ASME B463, SA240, SF30, B168, SB709",
    ],

    applications: [
      "Gas turbine components and engine valves",
      "Industrial heating elements and laboratory equipment",
      "Marine pump shafts and subsea hardware",
      "Chemical processing valves and equipment",
      "Thermostats, electronic tubes, and laser components",
      "Jet engine components and high-strength fasteners",
      "Heat-treatment furnace hardware",
      "Seawater and pulp bleach plant equipment",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Nimonic 75 / 80A Hot Rolled Coils",
          "Nitronic 50 (XM-19) HR Coils",
          "Nilo 42 / 48 Hot Rolled Coils",
          "Nichrome 80/20 & Alloy 286 HR",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Nimonic N07080 CR Coils",
          "Nitronic 50 Stainless Steel CR",
          "Nichrome N06003 CR Coils",
          "Alloy 926 / Alloy 286 CR Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Super Alloy Precision Slit Coils",
          "Nilo K94100 / K94800 Slit Coils",
          "XM-19 Slit Strips Stockist",
          "Nichrome 80/20 Industrial Strips",
        ],
      },
    },

    specifications: {
      standard: "ASTM/ASME B463, SA240, SF30, B168, SB709",
      thicknessRange: "0.2mm – 5.0mm",
      widthForm: "3.2mm – 1500mm | Coil, Strip, Slit Strips",
      hardnessTemper: "Soft, Half Hard, Hard, Spring Hard",
    },

    equivalentGrades: {
      headers: ["GRADE", "WNR.", "UNS", "COMMON TRADE NAME"],
      rows: [
        [
          "Nimonic 75 / 80A",
          "2.4951 / 2.4952",
          "N06075 / N07080",
          "Alloy 75 / 80A",
        ],
        ["Nichrome 80/20", "2.4869", "N06003", "NiCr 80/20"],
        ["Nitronic 50", "1.3964", "S20910", "XM-19 / Alloy 50"],
        ["Nilo 42 / 48", "1.3917 / -", "K94100 / K94800", "Alloy 42 / 48"],
        [
          "Alloy 286 / 926",
          "1.4980 / 1.4529",
          "S66286 / N08926",
          "Gr 660 / Incoloy 926",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Mo", "Mn", "Other Elements"],
      rows: [
        [
          "Nimonic 80A",
          "Bal",
          "18-21",
          "3.0 max",
          "-",
          "1.0 max",
          "Ti: 1.8-2.7",
        ],
        [
          "Nichrome 80/20",
          "Bal",
          "20-23",
          "1.0 max",
          "-",
          "0.6 max",
          "Si: 0.7-1.6",
        ],
        [
          "Nitronic 50",
          "11.5-13.5",
          "20.5-23.5",
          "Bal",
          "1.5-3.0",
          "4.0-6.0",
          "N: 0.2-0.4",
        ],
        ["Nilo 42", "41 min", "0.25 max", "Bal", "-", "0.8 max", "C: 0.05 max"],
        [
          "Alloy 286",
          "24-27",
          "13.5-16",
          "Bal",
          "1.0-1.5",
          "2.0 max",
          "Ti: 1.9-2.3",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation",
        "Density",
      ],
      rows: [
        ["Nimonic 75/80A", "750", "275", "42%", "8.19 g/cm³"],
        ["Nichrome 80/20", "750", "275", "42%", "8.40 g/cm³"],
        ["Nitronic 50", "655", "345", "35%", "7.88 g/cm³"],
        ["Nilo 42 / 48", "490 - 520", "250", "43%", "8.11 g/cm³"],
        ["Alloy 926 / 286", "648 - 965", "296 - 655", "12 - 35%", "8.03 g/cm³"],
      ],
    },

    gaugeChart: {
      headers: ["Gauge Number", "Inches", "MM (Thickness)"],
      rows: [
        ["8", ".17187", "4.365"],
        ["10", ".14062", "3.571"],
        ["12", ".10937", "2.778"],
        ["14", ".07812", "1.984"],
        ["16", ".0625", "1.587"],
        ["18", ".050", "1.270"],
        ["20", ".0375", ".9525"],
        ["22", ".03125", ".7937"],
        ["24", ".025", ".635"],
        ["26", ".01875", ".4762"],
        ["28", ".01562", ".3963"],
        ["30", ".0125", ".3175"],
      ],
    },

    weightChart: {
      headers: [
        "Thickness (mm)",
        "Weight Kg/M2",
        "2000 X 1000",
        "2500 X 1250",
        "3000 X 1500",
      ],
      rows: [
        ["0.40", "3.20", "6.40", "10.00", "14.40"],
        ["0.50", "4.00", "8.00", "12.50", "18.00"],
        ["0.60", "4.80", "9.60", "15.00", "21.60"],
        ["0.80", "6.40", "12.80", "20.00", "28.80"],
        ["1.00", "8.00", "16.00", "25.00", "36.00"],
        ["1.20", "9.60", "19.20", "30.00", "43.20"],
        ["1.50", "12.00", "24.00", "37.50", "54.00"],
        ["2.00", "16.00", "32.00", "50.00", "72.00"],
        ["2.50", "20.00", "40.00", "62.50", "90.00"],
        ["3.00", "24.00", "48.00", "75.00", "108.00"],
        ["4.00", "32.00", "64.00", "100.00", "144.00"],
        ["5.00", "40.00", "80.00", "125.00", "180.00"],
      ],
    },

    specializedProducts: [
      "Nimonic 75 / 80A Gas Turbine Grade Coils",
      "Nichrome 80/20 Electrical Resistance Coils",
      "Nitronic 50 (XM-19) High Strength SS Coils",
      "Alloy 286 (Grade 660) Precipitation Hardened Coils",
      "Nilo 42 / 48 Controlled Expansion Alloy Coils",
      "Alloy 926 (6Mo) High Corrosion Resistance Coils",
      "Super Alloy Coil Manufacturer in Mumbai, India",
      "Precision Slit Super Alloy Strips & Coils",
      "UNS N06075 / N07080 / N06003 Coil Exporter",
      "Annealed & Pickled Super Alloy Coils Dealer",
      "Special Alloy Cold Rolled (CR) Coils Stockist",
      "Custom Cut-to-Size Super Alloy Industrial Coils",
      "Hot Rolled (HR) Super Alloy Coils Exporter",
      "Super Alloy Coil Suppliers at Best Price in India",
    ],

    relatedSearches: [
      "Nimonic 80A Coil Price List",
      "Nichrome 80/20 Resistance Coil Supplier",
      "Nitronic 50 Coil Weight Calculator",
      "Alloy 286 Coil Dimensions",
      "Nilo 42 Coil Price Per Kg in India",
      "Alloy 926 Coil Manufacturer in Mumbai",
      "Nimonic 75 Coil Supplier in India",
      "ASTM B463 Nimonic Coil Thickness Tolerance",
      "ASME SA240 Nitronic 50 Coil Price List PDF",
      "Nichrome 80/20 Coil Mechanical Properties",
      "Alloy 286 Coil Chemical Composition",
      "Super Alloy Coil Stockist in Pune",
      "Nimonic 80A Coil Exporter",
      "Nitronic 50 Coil Price in Mumbai",
      "Nilo 48 Coil Gauge Chart",
      "Alloy 926 Slit Coil Price",
      "Alloy 286 Strip Coil Supplier",
      "Nimonic 75 Hot Rolled Coil Price",
      "Nichrome 80/20 Cold Rolled Coil Manufacturers",
      "Super Alloy Coil Catalog PDF",
      "Nitronic 50 Coil Equivalent Grades",
      "Alloy 286 Coil Price per Meter",
      "Nilo 42 updated price list",
      "Nimonic 80A Coil size chart",
      "Alloy 926 Coil Manufacturers in Gujarat",
      "Nitronic 50 Coil Stockyards in India",
      "Alloy 286 Coil thickness chart",
      "Nimonic 75 Coil Price in India",
      "Top 100 Super Alloy Coil Dealers in Mumbai",
      "Buy Nitronic 50 Coil Online",
      "Nichrome 80/20 leading manufacturers in India",
      "Nilo 42 Coil descaled finish",
      "Alloy 926 Coil 2B Finish price",
      "Nimonic 80A Coil BA Finish stockist",
      "UNS N07080 Coil Price India",
      "UNS S20910 Coil Price Mumbai",
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

            {/* Grade Breakdown */}
            <section className="mb-8">
              <SectionTitle>
                Specialized Alloy Grades & Applications
              </SectionTitle>
              {productData.gradeBreakdown.map((section, idx) => (
                <div
                  key={idx}
                  className="mb-6 p-4 bg-white border border-gray-200 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-[#173F52] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {section.description}
                  </p>
                  {section.items && (
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
                Stock Availability of High-Performance Super Alloy Coils
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
                Specification of High-Performance Alloy Coils
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

            {/* Gauge Chart */}
            <section className="mb-8">
              <SectionTitle>
                Super Alloy Coils Thickness Gauge Chart
              </SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Super Alloy Coils Weight / Size Chart (Approx. Kg)
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                *Weights are calculated based on a mean density of 8.0 g/cm³.
                Values may vary slightly between grades.
              </p>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in High-Performance Super Alloy Coils
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
              <SectionTitle>Searches Related to Super Alloy Coils</SectionTitle>
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

export default HighPerformanceAlloyCoils;
