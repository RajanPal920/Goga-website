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

const InconelPlates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Inconel Plates Supplier – 600, 601, 625, 690, 718, 725 & X-750",
    subtitle:
      "Premium Quality ASTM B168 / ASME SB168 Inconel Superalloy Plates – Engineered for Extreme Heat & Corrosive Environments with High Mechanical Strength, Self-Healing Oxide Layer & Oxidation Resistance up to 2000°F (1093°C)",

    technicalOverview: {
      title:
        "Inconel Alloy Plates: Technical Overview and Grade Characteristics",
      description:
        "Inconel plates are a family of high-performance nickel-chromium-based superalloys engineered for the most extreme thermal and corrosive environments. These plates are characterized by their ability to maintain exceptional tensile strength and structural integrity at temperatures where standard stainless steels would undergo significant creep or oxidation. When exposed to high heat, Inconel forms a stable, passivating oxide layer that protects the plate surface from further environmental attack, making them indispensable for aerospace, nuclear, and high-pressure chemical processing.",
    },

    gradeBreakdown: [
      {
        title: "Heat-Resistant Grades: Inconel 600, 601, and 690",
        items: [
          "Inconel 600 (UNS N06600): A versatile grade with high nickel content, offering superior resistance to chloride-ion stress corrosion cracking and alkaline solutions. It performs reliably from cryogenic temperatures up to 2000°F (1093°C).",
          "Inconel 601 (UNS N06601): Features additional aluminum content that provides enhanced resistance to high-temperature oxidation and spalling, even under severely cyclic heating conditions.",
          "Inconel 690 (UNS N06690): Engineered with high chromium content to provide excellent resistance to oxidizing acids and salts. It is the primary choice for nuclear steam generator components and high-temperature furnace liners.",
        ],
      },
      {
        title:
          "Corrosion-Resistant and High-Strength Grades: Inconel 625 and 725",
        items: [
          "Inconel 625 (UNS N06625): Derives its high strength and fatigue resistance from the addition of molybdenum and niobium. It is highly resistant to pitting and crevice corrosion in seawater and chloride-heavy process streams, making it ideal for offshore hardware and marine exhaust systems.",
          "Inconel 725 (UNS N07725): An age-hardenable version of Alloy 625. It provides nearly double the mechanical strength of the annealed 625 grade while maintaining similar levels of extraordinary corrosion resistance.",
        ],
      },
      {
        title: "Precipitation-Hardenable Grades: Inconel 718 and X-750",
        items: [
          "Inconel 718 (UNS N07718): A high-strength, corrosion-resistant nickel-chromium alloy used at temperatures from -423°F to 1300°F. It is renowned for its excellent weldability and resistance to post-weld cracking, essential for structural aerospace plates and cryogenic storage.",
          "Inconel X-750 (UNS N07750): Similar to Alloy 718 but optimized for high-temperature structural components that require minimal relaxation and high creep-rupture strength under heavy loads.",
        ],
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Inconel plates are manufactured to meet stringent international specifications, including ASTM B168, B443, B670, and ASME SB168. To ensure they integrate perfectly into your engineering blueprints, we offer these plates in several formats:",
      items: [
        "Hot Rolled (HR): Typically supplied in No.1 finish, ideal for heavy-duty chemical reactors, storage tanks, and industrial furnace components.",
        "Cold Rolled (CR): For applications requiring tighter dimensional tolerances and a superior surface finish.",
        "Precision Cut: Available in custom dimensions using waterjet, laser, or plasma cutting to meet specific project requirements.",
      ],
    },

    keyFeatures: [
      "High mechanical strength at extreme temperatures up to 2000°F (1093°C)",
      "Self-healing protective oxide layer for superior oxidation resistance",
      "Available in 7 grades: 600, 601, 625, 690, 718, 725 & X-750",
      "Excellent resistance to chloride-ion stress corrosion cracking",
      "Superior pitting and crevice corrosion resistance in seawater",
      "Precipitation-hardenable grades for high-strength applications",
      'Size: 15NB to 150NB | Thickness: 0.0125" to 5.00"',
      "Temper & Hardness: Annealed, 1/4, 1/2, 3/4, Full Hard, Spring Hard",
      "Finish Types: Hot Rolled (HR), Cold Rolled (CR), 2B, No.1, SATIN",
      "Value Added Services: Waterjet/Plasma/Laser Cutting, Bending, Edge Prep",
      "Certification: EN 10204 3.1 / 3.2, NACE MR 0175 compliance available",
      "Complies with ASTM B168 / ASME SB168, API Dimensions",
    ],

    applications: [
      "Aerospace and aircraft engine components",
      "Nuclear reactors and steam generator components",
      "Offshore hardware and marine exhaust systems",
      "High-strength fasteners and springs",
      "Chemical processing and high-pressure equipment",
      "Cryogenic storage and structural aerospace plates",
      "Gas turbine blades and rocket motors",
      "High-temperature furnace liners and components",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR) Plates",
        image: hotRolledPlatesImage,
        items: [
          "Inconel Hot Rolled Plates Stock",
          "ASME SB 168 Inconel® Alloy HR Plates",
          "Inconel 600 / 625 HR Heavy Plates",
          "Custom Size Hot Rolled Super Alloy Plates",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR) Plates",
        image: coldRolledPlatesImage,
        items: [
          "Inconel Cold Rolled Plates & Sheets",
          "ASME SB 168 Inconel® Alloy CR Plates",
          "Inconel 718 / X-750 Precision CR Plates",
          "High Precision Thin Gauge Inconel CR Stock",
        ],
      },
    },

    specifications: {
      standardsSpecs: "ASTM B168 / ASME SB168, API Dimensions",
      sizeThickness: '15NB to 150NB | Thickness: 0.0125" to 5.00"',
      temperHardness: "Annealed, 1/4, 1/2, 3/4, Full Hard, Spring Hard",
      valueAddedServices: "Waterjet/Plasma/Laser Cutting, Bending, Edge Prep",
      finishTypes: "Hot Rolled (HR), Cold Rolled (CR), 2B, No.1, SATIN",
      certification: "EN 10204 3.1 / 3.2, NACE MR 0175 compliance available",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS NO.",
        "WERKSTOFF NR.",
        "JIS / BS / GOST / AFNOR Standards",
      ],
      rows: [
        [
          "Inconel 600",
          "N06600",
          "2.4816",
          "NCF 600 | NA 13 | ????? 28-2.5-1.5 | NC15FE11M",
        ],
        [
          "Inconel 601",
          "N06601",
          "2.4851",
          "NCF 601 | NA 49 | XH60BT | NC23FeA",
        ],
        [
          "Inconel 625",
          "N06625",
          "2.4856",
          "NCF 625 | NA 21 | ??75???? | NC22DNB4M",
        ],
        ["Inconel 690", "N06690", "2.4642", "High Chromium Alloy | Alloy 690"],
        [
          "Inconel 718",
          "N07718",
          "2.4668",
          "Age-Hardenable Nickel-Chromium Alloy",
        ],
        [
          "Inconel X-750",
          "N07750",
          "2.4669",
          "Precipitation-Hardening Alloy | Alloy X750",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "C (max)", "Mn (max)", "Others"],
      rows: [
        [
          "600",
          "72.0 min",
          "14.0 – 17.0",
          "6.0 – 10.0",
          "0.15",
          "1.0",
          "Cu: 0.50, Si: 0.50",
        ],
        [
          "601",
          "58.0 – 63.0",
          "21.0 – 25.0",
          "Balance",
          "0.10",
          "1.0",
          "Al: 1.0 – 1.7, Cu: 1.0",
        ],
        [
          "625",
          "58.0 min",
          "20.0 – 23.0",
          "5.0 max",
          "0.10",
          "0.5",
          "Mo: 8.0 – 10.0, Nb+Ta: 3.15 – 4.15",
        ],
        [
          "690",
          "Remainder",
          "27.0 – 31.0",
          "7.0 – 11.0",
          "0.05",
          "0.5",
          "Si: 0.5, Cu: 0.5",
        ],
        [
          "718",
          "50.0 – 55.0",
          "17.0 – 21.0",
          "Balance",
          "0.08",
          "0.35",
          "Mo: 2.8 – 3.3, Nb+Ta: 4.75 – 5.50",
        ],
        [
          "X-750",
          "70.0 min",
          "14.0 – 17.0",
          "5.0 – 9.0",
          "0.08",
          "1.0",
          "Ti: 2.25 – 2.75, Al: 0.4 – 1.0",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation",
        "Density (g/cm³)",
        "Melting Point",
      ],
      rows: [
        ["Inconel 600", "655", "310", "40%", "8.47", "1413 °C"],
        ["Inconel 601", "550", "205", "30%", "8.10", "1411 °C"],
        ["Inconel 690", "724", "348", "41%", "8.19", "1377 °C"],
        ["Inconel 718", "930", "482", "45%", "8.20", "1350 °C"],
        ["Inconel X-750", "1267", "868", "25%", "8.28", "1430 °C"],
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
        "2.5 - 4",
        "4 - 6",
        "6 - 8",
        "8 - 10",
        "10 - 12",
        "12 - 15",
        "15 - 20",
        "20 - 25",
        "25 - 30",
        "> 30",
      ],
      rows: [
        [
          "w < 1200",
          "0.20",
          "0.23",
          "0.30",
          "0.32",
          "0.35",
          "0.80",
          "0.80",
          "0.80",
          "1.0",
          "1.4",
        ],
        [
          "1200 ≤ w < 1500",
          "0.20",
          "0.25",
          "0.30",
          "0.35",
          "0.38",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.4",
        ],
        [
          "1500 ≤ w < 1800",
          "0.20",
          "0.28",
          "0.32",
          "0.38",
          "0.40",
          "0.80",
          "0.80",
          "0.90",
          "1.1",
          "1.5",
        ],
        [
          "1800 ≤ w < 2100",
          "0.20",
          "0.30",
          "0.36",
          "0.40",
          "0.45",
          "0.80",
          "0.80",
          "0.90",
          "1.1",
          "1.5",
        ],
        [
          "2100 ≤ w < 2400",
          "-",
          "0.80",
          "0.80",
          "0.80",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.1",
          "1.5",
        ],
        [
          "2400 ≤ w < 2700",
          "-",
          "0.80",
          "0.80",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.1",
          "1.3",
          "1.7",
        ],
        [
          "2700 ≤ w < 3000",
          "-",
          "0.80",
          "0.90",
          "1.0",
          "1.0",
          "1.0",
          "1.1",
          "1.3",
          "1.4",
          "1.8",
        ],
      ],
    },

    specializedProducts: [
      "Inconel 600 & 601 Oxidation Resistant Plates",
      "Inconel 625 (N06625) High-Strength Marine Grade Plates",
      "Custom Plasma, Laser & Waterjet Cut Inconel Plate Profiles",
      "Heavy Duty Inconel 718 Plates for Aerospace Components",
      "Nuclear Grade Inconel 690 Plates for Steam Generators",
      "ASTM B168 / ASME SB168 Certified Industrial Plates",
      "BA, 2B, & No.1 Hot Rolled (HR) / Cold Rolled (CR) Finishes",
      "NACE MR 0175 Compliant Alloys for Sour Gas Service",
      "Specialized Age-Hardening & Heat Treatment for Inconel 718",
      "Mirror Polished & SATIN Finish Inconel Decorative Plates",
    ],

    relatedSearches: [
      "Inconel 625 Plate Price in India",
      "Inconel 718 Plate Weight Calculator",
      "Inconel 600 Plate Weight Chart PDF",
      "Inconel X-750 Plate Price per Kg Mumbai",
      "Inconel 601 Plate Manufacturer in India",
      "Inconel 625 Plate Supplier in Mumbai",
      "ASTM B168 Inconel Plate Thickness Tolerance Chart",
      "ASME SB168 Inconel 625 Plate Weight",
      "Inconel Plate Mechanical Properties",
      "UNS N06625 Plate Chemical Composition",
      "Inconel 600 Plate Stockist in Pune",
      "Alloy 625 HR Plate Price In India",
      "Inconel 718 CR Plate Stock",
      "Inconel leading plate manufacturers Mumbai",
      "Inconel Plate size chart mm",
      "Nickel-Chromium Plate Manufacturers in Gujarat",
      "Inconel 690 Plate thickness chart",
      "Inconel 600 Plate Price in India",
      "Top 100 Inconel Plate Dealers in Mumbai",
      "Buy Inconel 625 Plate Online India",
      "Inconel Plate descaled finish price",
      "UNS N06600 Plate Price Mumbai",
      "UNS N07718 Plate Price in India",
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
              <SectionTitle>Inconel Alloy Grades & Applications</SectionTitle>
              {productData.gradeBreakdown.map((section, idx) => (
                <div
                  key={idx}
                  className="mb-4 p-4 bg-white border border-gray-200 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-[#173F52] mb-2">
                    {section.title}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
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
              <SectionTitle>Stock Availability of Inconel Plates</SectionTitle>
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
              <SectionTitle>Specification of Inconel Plates</SectionTitle>
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

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Weight Chart</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Stocked Sizes */}
            <section className="mb-8">
              <SectionTitle>Standard Stocked Sizes</SectionTitle>
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
                Specialized in Inconel Plate Processing
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
              <SectionTitle>Searches Related to Inconel Plates</SectionTitle>
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
          href={getTelUrlO(contact)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl"
          aria-label="Call us"
        >
          <CallIcon className="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default InconelPlates;
