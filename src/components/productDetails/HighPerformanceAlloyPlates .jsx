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
import productImage from "../../assets/images/productImage/plates.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (using plate-specific or unified images)
import hotRolledPlatesImage from "../../assets/images/stock/hot-rolled-plates.jpg";
import coldRolledPlatesImage from "../../assets/images/stock/cold-rolled-plates.jpg";
import customPlatesImage from "../../assets/images/stock/custom-plates.jpg";

const HighPerformanceAlloyPlates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "High-Performance Alloy Plates – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    subtitle:
      "Premium Quality Specialty Alloy Plates – Engineered for Mission-Critical Applications Including Ultra-High Temperature Creep Resistance, Controlled Thermal Expansion & Superior Strength in Aggressive Environments",

    technicalOverview: {
      title: "Specialized High-Performance Alloy Plates: Technical Overview",
      description:
        "This selection of specialized alloy plates is engineered for mission-critical industrial applications where standard materials fail due to thermal fatigue, extreme mechanical stress, or aggressive chemical attack. These plates provide unique solutions ranging from ultra-high temperature creep resistance to controlled thermal expansion for precision engineering.",
    },

    gradeBreakdown: [
      {
        title: "Nimonic 75 / 80A Plates (High-Temperature Superalloys)",
        description:
          "Nimonic alloys are nickel-chromium-based superalloys designed for high-temperature service where creep resistance and oxidation stability are primary concerns.",
        items: [
          "Nimonic 75 (UNS N06075): Offers excellent oxidation resistance and mechanical properties at high temperatures. Widely used for high-temperature structural components and furnace liners.",
          "Nimonic 80A (UNS N07080): A precipitation-hardenable alloy strengthened by aluminum and titanium. Provides significantly higher creep-rupture properties for service up to 815°C (1500°F).",
        ],
        keyApplications:
          "Gas turbine components, specialized industrial furnace internals, and high-heat structural plates.",
      },
      {
        title: "Nichrome 80 / 20 Plates (Electrical Resistance & Heat)",
        description:
          "Nichrome 80/20 (80% Nickel, 20% Chromium) is primarily known for electrical resistance, but in plate form, it serves as a robust heat-resistant material. It forms a stable, tenacious layer of chromium oxide that protects the metal from further degradation during repeated thermal cycling.",
        keyApplications:
          "Heavy-duty industrial heating elements, furnace muffles, and laboratory heat-treatment equipment.",
      },
      {
        title: "Nitronic 50 (XM–19) Plates (High Strength & Corrosion)",
        description:
          "Nitronic 50 (UNS S20910) is a nitrogen-strengthened austenitic stainless steel. It provides a combination of corrosion resistance and yield strength superior to Types 316 and 317. It remains non-magnetic even after severe cold working.",
        keyApplications:
          "Marine pump components, subsea hardware, and chemical processing equipment requiring high structural load capacity.",
      },
      {
        title: "Nilo 42 & Nilo 48 Plates (Controlled Expansion)",
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
        title: "Alloy 286 (660) & Alloy 926 (6% Moly) Plates",
        description:
          "Alloy 286 (UNS S66000): An iron-base, age-hardenable superalloy designed for high strength and corrosion resistance up to 700°C (1290°F). It is essential for high-temperature fasteners and structural engine plates. Alloy 926 (UNS N08926): A super-austenitic 6% Molybdenum stainless steel with increased nitrogen. It provides exceptional resistance to pitting and crevice corrosion in high-chloride media like seawater and acidic bleach.",
        keyApplications:
          "High-temperature fasteners, structural engine plates, and seawater equipment.",
      },
    ],

    keyFeatures: [
      "Specialized alloys for mission-critical applications",
      "Ultra-high temperature creep resistance and oxidation stability",
      "Controlled thermal expansion for precision engineering",
      "Superior strength in aggressive chemical environments",
      "Available in Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 & 926",
      "Thickness: 0.3 mm to 120 mm (Standard & Custom)",
      "Hardness: Soft, 1/4 Hard, 1/2 Hard, Full Hard, Spring Hard",
      "Value Added Services: Waterjet/Laser Cutting, Bending, Heat Treatment, Pickling",
      "Complies with ASTM B463, ASME SB463, ASTM A240, ASTM B709",
    ],

    applications: [
      "Gas turbine components and industrial furnace internals",
      "High-heat structural plates and heating elements",
      "Marine pump components and subsea hardware",
      "Chemical processing equipment",
      "Thermostats, electronic lead frames, and laser components",
      "High-temperature fasteners and structural engine plates",
      "Laboratory heat-treatment equipment",
      "Seawater and acidic bleach environments",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR)",
        image: hotRolledPlatesImage,
        items: [
          "Nimonic 75/80A HR Plates",
          "Nitronic 50 (XM-19) HR Stock",
          "Alloy 286 (660) HR Heavy Plates",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR)",
        image: coldRolledPlatesImage,
        items: [
          "Nichrome 80/20 Resistance Sheets",
          "Nilo 42 / 48 Precision CR Stock",
          "Alloy 926 (6Mo) CR Precision",
        ],
      },
      customPlates: {
        title: "Custom & Specialty",
        image: customPlatesImage,
        items: [
          "UNS N06075 Custom Cut Blanks",
          "Fabricated Nilo 42 Components",
          "Nitronic 50 Custom Cut Profiles",
        ],
      },
    },

    specifications: {
      standards: "ASTM B463, ASME SB463, ASTM A240, ASTM B709",
      thickness: "0.3 mm to 120 mm (Standard & Custom)",
      valueAddedServices:
        "Waterjet/Laser Cutting, Bending, Heat Treatment, Pickling",
      hardness: "Soft, 1/4 Hard, 1/2 Hard, Full Hard, Spring Hard",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS NO.",
        "WERKSTOFF NR.",
        "Common Equivalents / Standards",
      ],
      rows: [
        [
          "Nimonic 75 / 80A",
          "N06075 / N07080",
          "2.4951 / 2.4952",
          "Alloy 75 / 80A | HR 1 / 201",
        ],
        [
          "Nitronic 50",
          "S20910",
          "1.3964",
          "XM-19 | ASTM S20910 | High-Strength Marine",
        ],
        [
          "Nichrome 80/20",
          "N06003",
          "2.4869",
          "Alloy 80/20 | NiCr 80/20 | Heating Element",
        ],
        [
          "A286 (Grade 660)",
          "S66286",
          "1.4980",
          "ASTM A453 Gr. 660 | S66286 | Superalloy",
        ],
        [
          "Nilo 42 / 48",
          "K94100 / K94800",
          "1.3917 / -",
          "Alloy 42 / Alloy 48 | Controlled Expansion",
        ],
        [
          "Alloy 926",
          "N08926",
          "1.4529",
          "6Mo | Super Austenitic | Incoloy 926",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Mo", "Others"],
      rows: [
        [
          "Nimonic 80A",
          "Bal.",
          "18 – 21",
          "3.0 Max",
          "-",
          "Ti: 1.8-2.7, Al: 1.0-1.8",
        ],
        [
          "Nitronic 50",
          "11.5–13.5",
          "20.5–23.5",
          "Bal.",
          "1.5–3.0",
          "Mn: 4.0-6.0, N: 0.2-0.4",
        ],
        [
          "Nichrome 80/20",
          "75.0 Min",
          "19 – 21",
          "1.0 Max",
          "-",
          "Si: 0.7-2.0, C: 0.15 Max",
        ],
        [
          "A286 (660)",
          "24 – 27",
          "13.5–16",
          "Bal.",
          "1.0–1.5",
          "Ti: 1.9-2.3, V: 0.1-0.5",
        ],
        [
          "Alloy 926",
          "24 – 26",
          "19 – 21",
          "Bal.",
          "6.0–7.0",
          "Cu: 0.5-1.5, N: 0.15-0.25",
        ],
        ["Nilo 42", "41.0 Min", "0.25 Max", "Rem.", "-", "Mn: 0.80, Si: 0.30"],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade Name",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Density (g/cm³)",
      ],
      rows: [
        ["Nimonic 75", "750 MPa", "275 MPa", "42%", "8.37"],
        ["Nitronic 50", "655 MPa", "345 MPa", "35%", "7.88"],
        ["Nichrome 80/20", "650 MPa", "280 MPa", "20%", "8.40"],
        ["A286 (660)", "965 MPa", "655 MPa", "12%", "7.94"],
        ["Alloy 926", "648 MPa", "296 MPa", "35%", "8.03"],
        ["Nilo 42", "490 MPa", "250 MPa", "43%", "8.11"],
      ],
    },

    weightChart: {
      headers: ["Thickness (Inches)", "Weight (lbs/in²)", "Weight (kg/m²)"],
      rows: [
        ['3/16"', "0.06000", "42.184176"],
        ['1/4"', "0.08000", "56.245568"],
        ['3/8"', "0.12100", "85.071421"],
        ['1/2"', "0.16100", "113.194205"],
        ['5/8"', "0.19600", "137.801641"],
        ['3/4"', "0.23500", "165.221356"],
        ['7/8"', "0.27400", "192.641070"],
        ['1"', "0.31300", "220.060784"],
        ['1 1/4"', "0.39100", "274.900213"],
        ['1 1/2"', "0.47000", "330.442712"],
        ['1 3/4"', "0.54900", "385.985210"],
        ['2"', "0.62700", "440.824639"],
        ['2 1/4"', "0.70500", "495.664068"],
        ['2 1/2"', "0.78400", "551.206566"],
        ['2 3/4"', "0.86200", "606.045995"],
        ['3"', "0.94100", "661.588493"],
      ],
    },

    stockedSizes: {
      headers: ["Size (Inches)", "Size (mm)", "Size (Inches)", "Size (mm)"],
      rows: [
        ['.125"', "3.18mm", '.750"', "19.1mm"],
        ['.134"', "3.40mm", '.875"', "22.2mm"],
        ['.156"', "3.96mm", '1"', "25.4mm"],
        ['.187"', "4.75mm", '1.125"', "28.6mm"],
        ['.250"', "6.35mm", '1.250"', "31.8mm"],
        ['.312"', "7.92mm", '1.500"', "38.1mm"],
        ['.375"', "9.53mm", '1.750"', "44.5mm"],
        ['.500"', "12.7mm", '2"', "50.8mm"],
        ['.600"', "15.9mm", '3"', "76.2mm"],
      ],
    },

    toleranceChart: {
      headers: [
        "Width w (mm)",
        "Nominal Thickness t (mm) – 2.5-4.5",
        "6.0",
        "8.0",
        "10.0",
        "12.5",
        "16.0",
        "20.0",
        "25.0",
        "30.0",
        "> 30",
      ],
      rows: [
        [
          "w < 1200",
          "0.20",
          "0.30",
          "0.32",
          "0.35",
          "0.80",
          "0.80",
          "0.80",
          "1.0",
          "1.4",
          "1.5",
        ],
        [
          "1200 - 1500",
          "0.20",
          "0.30",
          "0.35",
          "0.38",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.4",
          "1.6",
        ],
        [
          "1500 - 1800",
          "0.20",
          "0.32",
          "0.38",
          "0.40",
          "0.80",
          "0.80",
          "0.90",
          "1.1",
          "1.5",
          "1.7",
        ],
        [
          "1800 - 2100",
          "0.20",
          "0.36",
          "0.40",
          "0.45",
          "0.80",
          "0.80",
          "0.90",
          "1.1",
          "1.5",
          "1.8",
        ],
        [
          "2400 - 2700",
          "0.80",
          "0.80",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.1",
          "1.3",
          "1.7",
          "2.0",
        ],
      ],
    },

    specializedProducts: [
      "Nimonic 75 & 80A High-Temperature Creep Resistant Plates",
      "Nitronic 50 (XM-19) High-Strength Marine & Nuclear Plates",
      "Nichrome 80/20 Resistance Heating Plates & Sheets",
      "Nilo 42 & 48 (Invar/Kovar) Controlled Expansion Alloys",
      "Alloy 926 (6Mo) Super-Austenitic Corrosion Resistant Plates",
      "A286 (Grade 660) Precipitation Hardened Alloy Plates",
      "Precision Waterjet, Laser & Plasma Cutting Services",
      "Leading Superalloy Plate Manufacturer & Stockist in Mumbai",
    ],

    relatedSearches: [
      "Nimonic 80A Plate Price List 2026",
      "Nitronic 50 Plate Supplier in India",
      "A286 Grade 660 Plate Weight Calculator",
      "Alloy 926 6Mo Plate Price per Kg Mumbai",
      "Nichrome 80/20 Sheet Price India",
      "Nilo 42 Plate Stockist Mumbai",
      "Nimonic 75 Plate Specification PDF",
      "Nitronic 50 XM-19 Plate Mechanical Properties",
      "ASTM A453 Grade 660 Plate Price Mumbai",
      "Alloy 926 Corrosion Resistance Chart",
      "Nimonic Alloy Plate Manufacturers in India",
      "Nichrome 80/20 Heating Plate Price",
      "Nilo 48 Alloy Plate Stockyards Mumbai",
      "UNS S66286 Plate Dealers in Mumbai",
      "XM-19 Plate Manufacturers in Gujarat",
      "Nimonic 80A vs 75 Comparison",
      "Nitronic 50 High Strength Plate Stockist",
      "Alloy 926 UNS N08926 Plate Price List",
      "Specialty Superalloy Plate Manufacturers Pune",
      "Buy Superalloy Plates Online India",
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
                Stock Availability: All High-Performance Grades
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
                Unified Specifications: Specialty Superalloy Plates
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

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Weight Chart: Specialty Superalloys & Expansion Alloys
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Stocked Sizes */}
            <section className="mb-8">
              <SectionTitle>Available Stocked Sizes</SectionTitle>
              <Table
                headers={productData.stockedSizes.headers}
                rows={productData.stockedSizes.rows}
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
                Specialized in Superalloy & Precision Expansion Plates
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
                Searches Related to High-Performance Alloy Plates
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

export default HighPerformanceAlloyPlates;
