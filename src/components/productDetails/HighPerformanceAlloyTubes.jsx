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
import productImage from "../../assets/images/productImage/tubes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (using tube-specific or unified images)
import seamlessTubesImage from "../../assets/images/stock/seamless-tubes.jpg";
import weldedTubesImage from "../../assets/images/stock/welded-tubes.jpg";
import squareTubesImage from "../../assets/images/stock/square-tubes.jpg";
import heatExchangerTubesImage from "../../assets/images/stock/heat-exchanger-tubes.jpg";
import instrumentationTubesImage from "../../assets/images/stock/instrumentation-tubes.jpg";
import specializedTubesImage from "../../assets/images/stock/specialized-tubes.jpg";

const HighPerformanceAlloyTubes = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "High-Performance Alloy Tubes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    subtitle:
      "Premium Quality Specialty Alloy Tubes – Engineered for Mission-Critical Applications Including Ultra-High Temperature Creep Resistance, Controlled Thermal Expansion & Superior Strength in Aggressive Environments",

    technicalOverview: {
      title: "High-Performance Alloy Tubes: Technical Overview",
      description:
        "This selection of specialized alloy tubes is engineered for mission-critical industrial applications where standard materials fail due to thermal fatigue, extreme mechanical stress, or aggressive chemical attack. These tubes provide unique solutions ranging from ultra-high temperature creep resistance to controlled thermal expansion for precision engineering.",
    },

    gradeBreakdown: [
      {
        title: "Nimonic 75 / 80A Tubes (High-Temperature Superalloys)",
        description:
          "Nimonic alloys are nickel-chromium-based superalloys designed for high-temperature service where creep resistance and oxidation stability are primary concerns.",
        items: [
          "Nimonic 75 (UNS N06075): Offers excellent oxidation resistance and mechanical properties at high temperatures. Widely used for structural components in high-heat zones and furnace internals.",
          "Nimonic 80A (UNS N07080): A precipitation-hardenable alloy strengthened by aluminum and titanium. Provides significantly higher creep-rupture properties for service up to 815°C (1500°F).",
        ],
        keyApplications:
          "Gas turbine components, specialized high-temperature bolts, and industrial furnace shafts.",
      },
      {
        title: "Nichrome 80 / 20 Tubes (Electrical Resistance & Heat)",
        description:
          "Nichrome 80/20 (80% Nickel, 20% Chromium) is primarily known for electrical resistance, but in tube form, it serves as a robust heat-resistant material. It forms a stable, tenacious layer of chromium oxide that protects the metal from further degradation during repeated thermal cycling.",
        keyApplications:
          "Heavy-duty industrial heating elements, furnace muffles, and laboratory heat-treatment jigs.",
      },
      {
        title: "Nitronic 50 (XM–19) Tubes (High Strength & Corrosion)",
        description:
          "Nitronic 50 (UNS S20910) is a nitrogen-strengthened austenitic stainless steel. It provides a combination of corrosion resistance and yield strength superior to Types 316 and 317. It remains non-magnetic even after severe cold working.",
        keyApplications:
          "Marine pump shafts, subsea hardware, and chemical processing valves requiring high structural load capacity.",
      },
      {
        title: "Nilo 42 & Nilo 48 Tubes (Controlled Expansion)",
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
        title: "Alloy 286 (660) & Alloy 926 (6% Moly) Tubes",
        description:
          "Alloy 286 (UNS S66000): An iron-base, age-hardenable superalloy designed for high strength and corrosion resistance up to 700°C (1290°F). It is essential for high-temperature fluid handling and structural engine components. Alloy 926 (UNS N08926): A super-austenitic 6% Molybdenum stainless steel with increased nitrogen. It provides exceptional resistance to pitting and crevice corrosion in high-chloride media like seawater and acidic bleach.",
        keyApplications:
          "High-temperature fluid handling, structural engine components, and seawater equipment.",
      },
    ],

    keyFeatures: [
      "Specialized alloys for mission-critical applications",
      "Ultra-high temperature creep resistance and oxidation stability",
      "Controlled thermal expansion for precision engineering",
      "Superior strength in aggressive chemical environments",
      "Available in Nimonic, Nichrome, Nitronic, Nilo, Alloy 286 & 926",
      "OD: 6.0mm to 219mm | Wall thickness: 0.5mm to 15mm",
      "Condition & Finish: Solution Annealed, Age Hardened, Bright Annealed, Mirror Polished",
      "Types & Forms: Seamless, Welded, Capillary, Instrumentation | Round, Square",
      "Complies with ASTM B163, B444, A213, A269 / AMS 5580, 5581, 5589",
    ],

    applications: [
      "Gas turbine components and industrial furnace internals",
      "Heavy-duty industrial heating elements and furnace muffles",
      "Marine pump shafts and subsea hardware",
      "Chemical processing valves and equipment",
      "Thermostats, electronic lead frames, and laser components",
      "High-temperature fluid handling and structural engine components",
      "Laboratory heat-treatment jigs",
      "Seawater and acidic bleach equipment",
    ],

    stockAvailability: {
      seamlessTubes: {
        title: "Seamless Tubes",
        image: seamlessTubesImage,
        items: [
          "Nimonic 75 / 80A Seamless Tube",
          "Nitronic 50 (XM-19) Seamless",
          "Alloy 286 (660) Seamless Tubing",
          "Nilo 42 / 48 Low Expansion Tubes",
          "Precision Capillary Alloy Tubes",
        ],
      },
      weldedTubes: {
        title: "Welded & ERW Tubes",
        image: weldedTubesImage,
        items: [
          "Nichrome 80/20 Welded Tubes",
          "Nitronic 60 (S21800) ERW Tubing",
          "Alloy 926 Welded Stainless Tubes",
          "AMS Aerospace Grade Welded",
          "Bright Annealed Welded Sections",
        ],
      },
      squareTubes: {
        title: "Square & Rectangle Tubes",
        image: squareTubesImage,
        items: [
          "Nitronic 50 Square Tubing",
          "Alloy 286 Rectangular Tubes",
          "Custom Nickel Alloy Hollows",
          "Structural High Alloy Squares",
          "Nilo 42 Precision Square Stock",
        ],
      },
      heatExchangerTubes: {
        title: "Heat Exchanger Tubes",
        image: heatExchangerTubesImage,
        items: [
          "Alloy 926 Heat Exchanger Tubes",
          "Nimonic 75 Condenser Tubing",
          "U-Bend High Strength Alloy Tubes",
          "Thermal Shock Resistant Tubing",
          "ASME SA213 High Performance",
        ],
      },
      instrumentationTubes: {
        title: "Instrumentation Tubes",
        image: instrumentationTubesImage,
        items: [
          "Nitronic 50 Precision Tubes",
          "Nilo 42 / 48 Control Line Tubing",
          "Bright Annealed (BA) Alloy Tubes",
          "High Pressure Hydraulic Lines",
          "Nimonic 80A Capillary Tubing",
        ],
      },
      specializedTubes: {
        title: "Specialized Alloy Tubes",
        image: specializedTubesImage,
        items: [
          "Nichrome 80 Heating Tubes",
          "Alloy 286 Aerospace Tubing",
          "Nilo Glass-to-Metal Sealing Tubes",
          "Custom Fabricated Superalloys",
          "Pitting Resistant Alloy 926 Tubes",
        ],
      },
    },

    specifications: {
      standards: "ASTM B163, B444, A213, A269 / AMS 5580, 5581, 5589",
      sizeRange: "6.0mm OD to 219mm OD | Wall thickness: 0.5mm to 15mm",
      conditionFinish:
        "Solution Annealed, Age Hardened, Bright Annealed, Mirror Polished",
      typesForms:
        "Seamless, Welded, Capillary, Instrumentation | Round, Square",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Nimonic 80A", "N07080", "2.4952 / 2.4631", "Alloy 80A"],
        ["Nitronic 50", "S20910", "1.3964", "XM-19"],
        [
          "Nilo 42 / 48",
          "K94100 / K94800",
          "1.3917 / 1.3922",
          "Invar / Glass Sealing",
        ],
        ["Alloy 286", "S66286", "1.4980", "A-286 / Grade 660"],
        ["Alloy 926", "N08926", "1.4529", "6% Moly Stainless"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Mo", "Other"],
      rows: [
        [
          "Nitronic 50",
          "11.5-13.5",
          "20.5-23.5",
          "Bal.",
          "1.5-3.0",
          "Mn 4.0-6.0",
        ],
        [
          "Alloy 286",
          "24.0-27.0",
          "13.5-16.0",
          "Bal.",
          "1.0-1.5",
          "Ti 1.9-2.3",
        ],
        [
          "Alloy 926",
          "24.0-26.0",
          "19.0-21.0",
          "Bal.",
          "6.0-7.0",
          "N 0.15-0.25",
        ],
        ["Nilo 42", "41.0-43.0", "-", "Bal.", "-", "-"],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Hardness (Max)",
      ],
      rows: [
        ["Nimonic 80A", "1000 min", "620 min", "20% min", "300 HB"],
        ["Nitronic 50", "690 min", "380 min", "35% min", "95 HRB"],
        ["Alloy 286", "900 min", "585 min", "15% min", "248 HB"],
      ],
    },

    dimensionsChart: {
      headers: [
        "Tube O.D.",
        "Wall (Inch)",
        "Gauge 10 (0.134)",
        "Gauge 12 (0.109)",
        "Gauge 14 (0.083)",
        "Gauge 16 (0.065)",
        "Gauge 18 (0.049)",
        "Gauge 20 (0.035)",
        "Gauge 22 (0.028)",
      ],
      rows: [
        [
          '1/2"',
          "I.D. (In)",
          "0.232",
          "0.282",
          "0.334",
          "0.370",
          "0.402",
          "0.430",
          "0.444",
        ],
        [
          '3/4"',
          "I.D. (In)",
          "0.482",
          "0.532",
          "0.584",
          "0.620",
          "0.652",
          "0.680",
          "0.694",
        ],
        [
          '1"',
          "I.D. (In)",
          "0.732",
          "0.782",
          "0.834",
          "0.870",
          "0.902",
          "0.930",
          "0.944",
        ],
        [
          '1-1/2"',
          "I.D. (In)",
          "1.232",
          "1.282",
          "1.334",
          "1.370",
          "1.402",
          "1.430",
          "1.444",
        ],
        [
          '2"',
          "I.D. (In)",
          "1.732",
          "1.782",
          "1.834",
          "1.870",
          "1.902",
          "1.930",
          "1.944",
        ],
        [
          '3"',
          "I.D. (In)",
          "2.732",
          "2.782",
          "2.834",
          "2.870",
          "2.902",
          "2.930",
          "2.944",
        ],
        [
          '4"',
          "I.D. (In)",
          "3.732",
          "3.782",
          "3.834",
          "3.870",
          "3.902",
          "3.930",
          "3.944",
        ],
      ],
    },

    wallThicknessChart: {
      headers: ["Wall Thickness (Inch)", "Tube Sizes (O.D. in Inches)"],
      rows: [
        [".028", "1/8, 3/16, 1/4, 5/16, 3/8, 1/2, 3/4, 1, 1 1/2, 2"],
        [".035", "1/8, 1/4, 5/16, 3/8, 1/2, 5/8, 3/4, 7/8, 1, 1 1/4, 1 1/2, 2"],
        [
          ".049",
          "3/16, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8, 1, 1 1/8, 1 1/4, 1 1/2, 2",
        ],
        [".065", "1/4, 3/8, 1/2, 5/8, 3/4, 7/8, 1, 1 1/4, 1 1/2, 2, 2 1/2, 3"],
        [".083", "1/4, 3/8, 1/2, 5/8, 3/4, 1, 1 1/4, 1 1/2, 2, 2 1/2, 3"],
        [".109", "1/2, 3/4, 1, 1 1/4, 1 1/2, 2"],
        [".120", "1/2, 5/8, 3/4, 1, 1 1/4, 1 1/2, 2, 2 1/2, 3"],
      ],
    },

    pressureRatingChart: {
      headers: [
        "Tube O.D. (in.)",
        ".028",
        ".035",
        ".049",
        ".065",
        ".083",
        ".095",
        ".109",
      ],
      rows: [
        ["1/8", "7900", "10100", "-", "-", "-", "-", "-"],
        ["1/4", "3700", "4800", "7000", "9500", "-", "-", "-"],
        ["5/16", "-", "3700", "5400", "7300", "-", "-", "-"],
        ["3/8", "-", "3100", "4400", "6100", "-", "-", "-"],
        ["1/2", "-", "2300", "3200", "4400", "5900", "-", "-"],
        ["3/4", "-", "-", "2200", "3000", "4000", "4600", "-"],
        ["1", "-", "-", "2200", "2900", "3400", "3900", "4300"],
      ],
    },

    specializedProducts: [
      "Nimonic 75 / 80A High Temperature Tube Dealer",
      "Nitronic 50 (XM-19) Corrosion Resistant Tubing",
      "Alloy 286 (Grade 660) Aerospace Tubing Exporter",
      "Nilo 42 / 48 Low Expansion Alloy Tubing Supplier",
      "Precision Bright Annealed Superalloy Capillary Tubes",
      "Heat Exchanger & Instrumentation Tubing Stockist",
      "AMS & ASTM Standards Certified High Alloy Tubing",
      "Cold Drawn, Mirror Polished Finish Alloy Tubes",
      "Alloy 926 / Nichrome 80 Specialty Tubing Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Nimonic 80A Tube Price India",
      "Nitronic 50 Seamless Tube In Pune",
      "ASTM B444 Condenser Tube Supplier Mumbai",
      "Nilo 42 Tube Weight Chart PDF",
      "Cost Of Alloy 286 Welded Tubes Exporter",
      "Nitronic 50 Heat Exchanger Tube Latest Price",
      "Alloy 926 Tubes Price List In India",
      "UNS S20910 Chemical Composition",
      "Superalloy Tubing Stockist Maharashtra",
      "Special Alloy Seamless Tube Dimensions",
      "Cost Of Nimonic 75 Bright Annealed Tubing",
      "Nilo 48 Tubes Equivalent Grades",
      "Alloy 286 Tube Price In India",
      "Nitronic 50 Forged Tubes",
      "Price Of Nichrome 80 Seamless Tubes",
      "Special Alloy Tubes Specifications ASTM B163",
      "Nimonic 80A Hot Rolled Tubes Supplier",
      "AMS 5581 High Alloy Tubes",
      "Superalloy Tubes Supplier In Mumbai",
      "Nitronic 50 Tubes Suppliers In Gujarat",
      "Alloy 286 Cold Drawn Tubes Price List",
      "Nickel Alloy Round Tube",
      "Nilo 42 Tubes Catalogue",
      "High Performance Tubes Manufacturers India",
      "Nitronic 50 Threaded Tubes",
      "Alloy 286 Seamless Tubes Supplier In India",
      "Nitronic 50 Welded Tubes Price List in India",
      "Special Alloy Tubes Dimensions Chart",
      "Nimonic & Nitronic Rods & Tubes Stockist In Mumbai",
      "Alloy 926 Tubes Stockyard",
      "High Performance Alloy Tubes Weight Calculator",
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
                Stock Availability of High-Performance Alloy Tubes
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
                Technical Specifications: High-Performance Alloy Tubes
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

            {/* Dimensions Chart */}
            <section className="mb-8">
              <SectionTitle>
                Alloy Tubes Dimensions Chart (I.D. in Inches)
              </SectionTitle>
              <Table
                headers={productData.dimensionsChart.headers}
                rows={productData.dimensionsChart.rows}
              />
            </section>

            {/* Wall Thickness Chart */}
            <section className="mb-8">
              <SectionTitle>
                Alloy Tubing Size Wall Thickness Range
              </SectionTitle>
              <Table
                headers={productData.wallThicknessChart.headers}
                rows={productData.wallThicknessChart.rows}
              />
            </section>

            {/* Pressure Rating Chart */}
            <section className="mb-8">
              <SectionTitle>
                High-Performance Alloy Tubes Pressure Rating (psig)
              </SectionTitle>
              <Table
                headers={productData.pressureRatingChart.headers}
                rows={productData.pressureRatingChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in High-Performance Alloy Tubes
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
                Searches Related to High-Performance Alloy Tubes
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

export default HighPerformanceAlloyTubes;
