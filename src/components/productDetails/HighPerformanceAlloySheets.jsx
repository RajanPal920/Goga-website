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
import productImage from "../../assets/images/productImage/sheets.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (using sheet-specific or unified images)
import hotRolledSheetsImage from "../../assets/images/stock/hot-rolled-sheets.jpg";
import coldRolledSheetsImage from "../../assets/images/stock/cold-rolled-sheets.jpg";
import perforatedSheetsImage from "../../assets/images/stock/perforated-sheets.jpg";

const HighPerformanceAlloySheets = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "High-Performance Alloy Sheets – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    subtitle:
      "Premium Quality Specialty Alloy Sheets – Engineered for Mission-Critical Applications Including Ultra-High Temperature Creep Resistance, Controlled Thermal Expansion & Superior Strength in Aggressive Environments",

    technicalOverview: {
      title: "High-Performance Alloy Sheets: Technical Overview",
      description:
        "High-performance alloy sheets are engineered for mission-critical industrial applications where standard materials fail due to thermal fatigue, extreme mechanical stress, or aggressive chemical attack. These sheets provide unique solutions ranging from ultra-high temperature creep resistance to controlled thermal expansion for precision engineering. Available in Nimonic, Nichrome, Nitronic, Nilo & specialty high-nickel alloys.",
    },

    gradeBreakdown: [
      {
        title: "Nimonic 75 / 80A Sheets (High-Temperature Superalloys)",
        description:
          "Nimonic alloys are nickel-chromium-based superalloys designed for high-temperature service where creep resistance and oxidation stability are primary concerns.",
        items: [
          "Nimonic 75 (UNS N06075): Offers excellent oxidation resistance and mechanical properties at high temperatures. Widely used for high-temperature structural components and furnace liners.",
          "Nimonic 80A (UNS N07080): A precipitation-hardenable alloy strengthened by aluminum and titanium. Provides significantly higher creep-rupture properties for service up to 815°C (1500°F).",
        ],
        keyApplications:
          "Gas turbine components, specialized industrial furnace internals, and high-heat structural sheets.",
      },
      {
        title: "Nichrome 80 / 20 Sheets (Electrical Resistance & Heat)",
        description:
          "Nichrome 80/20 (80% Nickel, 20% Chromium) is primarily known for electrical resistance, but in sheet form, it serves as a robust heat-resistant material. It forms a stable, tenacious layer of chromium oxide that protects the metal from further degradation during repeated thermal cycling.",
        keyApplications:
          "Heavy-duty industrial heating elements, furnace muffles, and laboratory heat-treatment equipment.",
      },
      {
        title: "Nitronic 50 (XM–19) Sheets (High Strength & Corrosion)",
        description:
          "Nitronic 50 (UNS S20910) is a nitrogen-strengthened austenitic stainless steel. It provides a combination of corrosion resistance and yield strength superior to Types 316 and 317. It remains non-magnetic even after severe cold working.",
        keyApplications:
          "Marine pump components, subsea hardware, and chemical processing equipment requiring high structural load capacity.",
      },
      {
        title: "Nilo 42 & Nilo 48 Sheets (Controlled Expansion)",
        description:
          "The Nilo series (Invar family) is engineered for applications requiring dimensional stability across varying temperatures.",
        items: [
          "Nilo 42 (UNS K94100): Features a low coefficient of thermal expansion up to 300°C (570°F), specifically designed for glass-to-metal and ceramic-to-metal seals.",
          "Nilo 48 (UNS K94800): Matches the thermal expansion of specific soft glasses and ceramics.",
        ],
        keyApplications:
          "Thermostats, electronic lead frames, and laser components.",
      },
      {
        title: "Alloy 286 (660) & Alloy 926 (6% Moly) Sheets",
        description:
          "Alloy 286 (UNS S66000): An iron-base, age-hardenable superalloy designed for high strength and corrosion resistance up to 700°C (1290°F). It is essential for high-temperature fasteners and structural engine components. Alloy 926 (UNS N08926): A super-austenitic 6% Molybdenum stainless steel with increased nitrogen. It provides exceptional resistance to pitting and crevice corrosion in high-chloride media like seawater and acidic bleach.",
        keyApplications:
          "High-temperature fasteners, structural engine components, and seawater equipment.",
      },
    ],

    keyFeatures: [
      "Specialized alloys for mission-critical applications",
      "Ultra-high temperature creep resistance and oxidation stability",
      "Controlled thermal expansion for precision engineering",
      "Superior strength in aggressive chemical environments",
      "Available in Nimonic, Nichrome, Nitronic, Nilo & Alloy grades",
      "Thickness: 0.3 mm to 100 mm | Width to 2500mm | Length to 6000mm",
      "Surface finishes: 2B, BA, No.4, 8K Mirror, HR No.1, SATIN, PVC Coated",
      "Value Added Services: Waterjet/Laser Cutting, Heat Treatment, Bending, Minor Fabrication",
      "Complies with ASTM B168, B443, B670, AMS 5596, AMS 5542",
    ],

    applications: [
      "Gas turbine components and industrial furnace internals",
      "High-heat structural sheets and heating elements",
      "Marine pump components and subsea hardware",
      "Chemical processing equipment",
      "Thermostats, electronic lead frames, and laser components",
      "High-temperature fasteners and structural engine components",
      "Laboratory heat-treatment equipment",
      "Seawater and acidic bleach environments",
    ],

    stockAvailability: {
      hotRolledSheets: {
        title: "Hot Rolled Sheets",
        image: hotRolledSheetsImage,
        items: [
          "Nimonic 75 / 80A / 90 HR",
          "Nichrome 80/20 HR Sheets",
          "Nitronic 50 / 60 HR Stock",
          "Nilo 36 / 42 / K HR Sheets",
          "ASME SB 168 / SB 463 HR",
          "Hot Rolled Annealed & Pickled",
        ],
      },
      coldRolledSheets: {
        title: "Cold Rolled Sheets",
        image: coldRolledSheetsImage,
        items: [
          "Nimonic 75 / 80A Precision CR",
          "Nichrome V / 80-20 CR Stock",
          "Nitronic 50 / 60 Cold Rolled",
          "Nilo 36 / Invar 36 CR Sheets",
          "2B / BA / Mirror Finish CR",
          "High Precision Tolerance Stock",
        ],
      },
      perforatedSheets: {
        title: "Perforated Sheets",
        image: perforatedSheetsImage,
        items: [
          "Nimonic Perforated Sheets",
          "Nichrome Mesh & Perforated",
          "Nitronic 50 Perforated Stock",
          "Nilo 36 Low-Expansion Perf.",
          "Custom CNC Hole Patterns",
          "Edge Prepared Specialty Blanks",
        ],
      },
    },

    specifications: {
      standards: "ASTM B168, B443, B670, AMS 5596, AMS 5542",
      thicknessSize: "0.3 mm to 100 mm | Width to 2500mm | Length to 6000mm",
      surfaceFinishes: "2B, BA, No.4, 8K Mirror, HR No.1, SATIN, PVC Coated",
      valueAddedServices:
        "Waterjet/Laser Cutting, Heat Treatment, Bending, Minor Fabrication",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "WERKSTOFF NR.",
        "UNS NO.",
        "COMMON TRADE NAME / STANDARD",
      ],
      rows: [
        ["Nimonic 75", "2.4951", "N06075", "Alloy 75 | HR No. 1 | BS HR 203"],
        ["Nimonic 80A", "2.4952", "N07080", "Alloy 80A | HR 1 | BS HR 601"],
        [
          "Nichrome 80/20",
          "2.4869",
          "N06003",
          "Alloy A | Ni80Cr20 | Cronix 80",
        ],
        ["Nitronic 50", "1.3964", "S20910", "XM-19 | Aquamet 22"],
        [
          "Nilo 42 / 48",
          "1.3917 / 1.3922",
          "K94100 / K94800",
          "Invar 42 | Alloy 42 / 48",
        ],
        ["Alloy 286", "1.4980", "S66000", "A286 | Grade 660 Stainless"],
        ["Alloy 926", "1.4529", "N08926", "6% Moly | Cronifer 1925 hMo"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Mo", "Mn", "Other Key Elements"],
      rows: [
        [
          "Nimonic 80A",
          "Bal.",
          "18.0-21.0",
          "3.0 max",
          "-",
          "1.0 max",
          "Ti: 1.8-2.7 | Al: 1.0-1.8",
        ],
        [
          "Nichrome 80/20",
          "Bal.",
          "19.0-21.0",
          "1.0 max",
          "-",
          "2.5 max",
          "Si: 0.7-1.5",
        ],
        [
          "Nitronic 50",
          "11.5-13.5",
          "20.5-23.5",
          "Bal.",
          "1.5-3.0",
          "4.0-6.0",
          "N: 0.20-0.40 | V: 0.1-0.3",
        ],
        [
          "Nilo 42",
          "41.0-42.5",
          "-",
          "Bal.",
          "-",
          "0.8 max",
          "Low Expansion Control",
        ],
        [
          "Alloy 286",
          "24.0-27.0",
          "13.5-16.0",
          "Bal.",
          "1.0-1.5",
          "2.0 max",
          "Ti: 1.9-2.3 | V: 0.1-0.5",
        ],
        [
          "Alloy 926",
          "24.0-26.0",
          "19.0-21.0",
          "Bal.",
          "6.0-7.0",
          "2.0 max",
          "Cu: 0.5-1.5 | N: 0.15-0.25",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade Name",
        "Density (g/cm³)",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Modulus (GPa)",
      ],
      rows: [
        ["Nimonic 75", "8.37", "750", "275", "42%", "206"],
        ["Nichrome 80/20", "8.40", "650", "300", "30%", "215"],
        ["Nitronic 50", "7.88", "690", "380", "35%", "199"],
        ["Nilo 42", "8.11", "500", "250", "30%", "145"],
        ["Alloy 286", "7.94", "950", "650", "15%", "201"],
        ["Alloy 926", "8.10", "650", "300", "35%", "195"],
      ],
    },

    gaugeChart: {
      headers: ["Gauge No.", "Inches", "MM", "Gauge No.", "Inches", "MM"],
      rows: [
        ["8", "0.17187", "4.365", "18", "0.0500", "1.270"],
        ["9", "0.15625", "3.968", "20", "0.0375", "0.9525"],
        ["10", "0.14062", "3.571", "22", "0.03125", "0.7937"],
        ["11", "0.1250", "3.175", "24", "0.0250", "0.635"],
        ["12", "0.10937", "2.778", "26", "0.01875", "0.476"],
        ["14", "0.07812", "1.984", "28", "0.01562", "0.396"],
        ["16", "0.0625", "1.587", "30", "0.0125", "0.3175"],
      ],
    },

    weightChart: {
      headers: [
        "Thickness (mm)",
        "Weight (KG/M²)",
        "2000 x 1000 (kg)",
        "2500 x 1250 (kg)",
        "3000 x 1500 (kg)",
      ],
      rows: [
        ["0.50 mm", "4.45", "8.90", "13.91", "20.03"],
        ["0.80 mm", "7.12", "14.24", "22.25", "32.04"],
        ["1.00 mm", "8.90", "17.80", "27.81", "40.05"],
        ["1.20 mm", "10.68", "21.36", "33.38", "48.06"],
        ["1.50 mm", "13.35", "26.70", "41.72", "60.08"],
        ["2.00 mm", "17.80", "35.60", "55.63", "80.10"],
        ["2.50 mm", "22.25", "44.50", "69.53", "100.13"],
        ["3.00 mm", "26.70", "53.40", "83.44", "120.15"],
        ["4.00 mm", "35.60", "71.20", "111.25", "160.20"],
        ["5.00 mm", "44.50", "89.00", "139.06", "200.25"],
        ["6.00 mm", "53.40", "106.80", "166.88", "240.30"],
        ["8.00 mm", "71.20", "142.40", "222.50", "320.40"],
        ["10.00 mm", "89.00", "178.00", "278.13", "400.50"],
      ],
    },

    toleranceChart: {
      headers: [
        "Nominal Thickness in. (mm)",
        'Tolerance Over/Under – 36" (914.4 mm)',
        'Tolerance Over/Under – 48" (1219 mm)',
      ],
      rows: [
        ["0.017 – 0.030 (0.43 – 0.76)", "0.0015 (0.038)", "0.002 (0.051)"],
        ["0.031 – 0.041 (0.79 – 1.04)", "0.002 (0.051)", "0.003 (0.076)"],
        ["0.042 – 0.059 (1.1 – 1.5)", "0.003 (0.076)", "0.004 (0.10)"],
        ["0.060 – 0.073 (1.5 – 1.9)", "0.003 (0.076)", "0.0045 (0.11)"],
        ["0.074 – 0.084 (1.9 – 2.1)", "0.004 (0.10)", "0.0055 (0.14)"],
        ["0.085 – 0.099 (2.2 – 2.5)", "0.004 (0.10)", "0.006 (0.15)"],
        ["0.100 – 0.115 (2.5 – 2.9)", "0.005 (0.13)", "0.007 (0.18)"],
        ["0.116 – 0.131 (2.9 – 3.3)", "0.005 (0.13)", "0.0075 (0.19)"],
        ["0.132 – 0.146 (3.4 – 3.7)", "0.006 (0.15)", "0.009 (0.23)"],
        ["0.147 – 0.187 (3.7 – 4.7)", "0.007 (0.18)", "0.0105 (0.26)"],
      ],
    },

    specializedProducts: [
      "Nimonic 75 / 80A: Aerospace Grade Creep-Resistant Sheets",
      "Nitronic 50 (XM-19): High-Strength Marine & Nuclear Alloy Sheets",
      "Nichrome 80/20: Industrial Heating & Electrical Resistance Sheets",
      "Nilo 42 / 48: Controlled Low-Expansion Precision Alloy Sheets",
      "Alloy 286 (660) & Alloy 926: Super Austenitic High-Moly Sheets",
      "Custom Perforated & CNC Waterjet Cut Super Alloy Blanks",
      "Premium Manufacturer & Exporter of Specialized Alloys in India",
      "Specialized Heat Treatment & PMI Tested Industrial Materials",
    ],

    relatedSearches: [
      "Nimonic 80A Sheet Price List 2026",
      "Nitronic 50 Sheet Supplier Mumbai",
      "Nichrome 80/20 Sheet Price per Kg India",
      "Nilo 42 Sheet Weight Chart",
      "Alloy 286 Sheet Thickness Tolerance PDF",
      "Alloy 926 Sheet Dimensions",
      "Nimonic 75 Cold Rolled CR Sheets Stockist",
      "Nitronic 60 Anti-Galling Sheet Manufacturer India",
      "Buy Nichrome Sheets Online Maharashtra",
      "Nilo 48 Low Expansion Sheet Price",
      "Alloy 286 Mechanical Properties Chart",
      "Super Alloy Sheet Equivalent Grades India",
      "Nitronic 50 vs 60 Corrosion Resistance",
      "Nimonic 80A Aerospace Grade Sheet Stock",
      "Cost of Alloy 926 Sheets Exporter Mumbai",
      "Nichrome 80/20 Electrical Conductivity Chart",
      "Nilo 42 Invar Sheet Dealers India",
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
                  className="mb-4 p-4 bg-white border border-gray-200 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-[#173F52] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
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
                Unified Stock Availability: High-Performance Alloy Sheets
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
                Technical Specifications: High-Performance Alloy Sheets
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
              <SectionTitle>Mechanical Properties</SectionTitle>
              <Table
                headers={productData.mechanicalProperties.headers}
                rows={productData.mechanicalProperties.rows}
              />
            </section>

            {/* Gauge Chart */}
            <section className="mb-8">
              <SectionTitle>Gauge & Thickness Chart</SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Weight (KG) per Dimension</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>Thickness Tolerance</SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in High-Performance & Super Alloy Sheet Solutions
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
                Searches Related to High-Performance Alloy Sheets
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

export default HighPerformanceAlloySheets;
