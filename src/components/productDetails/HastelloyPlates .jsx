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
import productImage from "../../assets/images/productImage/plates.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Stock Availability Images (using plate-specific or unified images)
import hotRolledPlatesImage from "../../assets/images/stock/hot-rolled-plates.jpg";
import coldRolledPlatesImage from "../../assets/images/stock/cold-rolled-plates.jpg";
import customPlatesImage from "../../assets/images/stock/custom-plates.jpg";

const HastelloyPlates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Hastelloy Plates Supplier – C22, C276, B2, B3, C2000, C59, C4 & HN",
    subtitle:
      "Premium Quality Hastelloy Superalloy Plates – Nickel-Based Alloys Engineered for Maximum Resistance to Aggressive Chemicals, Chlorides & Reducing Acids in Critical Industrial Environments",

    technicalOverview: {
      title: "Hastelloy Plates: Technical Overview",
      description:
        "Hastelloy plates are high-performance nickel-molybdenum-chromium superalloys engineered to withstand the most aggressive chemical environments. These plates maintain exceptional mechanical integrity and corrosion resistance where standard stainless steels fail. They are particularly valued for their resistance to pitting, stress-corrosion cracking, and a wide range of volatile chemical media, including both oxidizing and reducing acids.",
    },

    gradeBreakdown: [
      {
        title: "Hastelloy C-Series: Universal Corrosion Resistance",
        description:
          "The C-series is the most versatile group of Hastelloy alloys, designed to handle a broad spectrum of volatile chemical process streams.",
        items: [
          "Hastelloy C276 (UNS N10276): The industry standard for aggressive environments. Exceptionally resistant to wet chlorine gas, hypochlorites, and chlorine dioxide. A primary choice for pollution control equipment and chemical processing liners.",
          "Hastelloy C22 (UNS N06022): Offers better overall corrosion resistance than C276 in oxidizing environments. Provides superior protection against localized corrosion and is frequently used in pharmaceutical and biotech vessel fabrication.",
          "Hastelloy C2000 (UNS N06200): A unique alloy with deliberate copper additions, providing maximum versatility in both oxidizing and reducing environments. Excels specifically in sulfuric acid service.",
          "Hastelloy C59, C4, and C-4: Specialized grades optimized for thermal stability and resistance to grain-boundary precipitation, ensuring corrosion resistance is maintained in the heat-affected zones of welded plate structures.",
        ],
      },
      {
        title: "Hastelloy B-Series: Reducing Acid Specialists",
        description:
          "The B-series alloys are specifically engineered for resistance against reducing environments, particularly hydrochloric acid.",
        items: [
          "Hastelloy B2 (UNS N10665): A nickel-molybdenum alloy with significant resistance to hydrochloric acid at all concentrations and temperatures. Also performs well in pure sulfuric and phosphoric acids.",
          "Hastelloy B3 (UNS N10675): An improved version of B2 with significantly enhanced thermal stability. Makes fabrication and welding of heavy plates easier while maintaining the same high level of resistance to reducing acids.",
        ],
      },
      {
        title: "Specialized Grades: Hastelloy N",
        description:
          "Hastelloy N (UNS N10003): Also known as Alloy N, this grade was developed specifically for service in molten fluoride salts. It maintains excellent oxidation resistance and mechanical properties at temperatures up to 704°C (1300°F).",
        items: [],
      },
    ],

    keyFeatures: [
      "Exceptional resistance to aggressive chemicals, chlorides, and acids",
      "Outstanding pitting, crevice corrosion, and stress corrosion cracking resistance",
      "Available in C-Series (C276, C22, C2000, C59, C4) and B-Series (B2, B3)",
      "Specialized grades: Hastelloy N for molten fluoride salts",
      "Universal resistance to both oxidizing and reducing environments",
      "Thickness: 0.3 mm to 120 mm | Custom Thickness Available",
      "Width: 1000mm to 3500mm | Length: 2000mm to 6000mm+",
      "Processing & Finish: Hot Rolled, Cold Rolled, Pickled, Polished",
      "Hardness & Temper: Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      "Value Added Services: Laser/Plasma Cutting, Forging, Annealing, Bending",
      "Complies with ASTM B575 / B333, ASME SB575 / SB333",
    ],

    applications: [
      "Chemical processing and pollution control equipment",
      "Pharmaceutical and biotech vessel fabrication",
      "Hydrochloric acid and sulfuric acid handling",
      "Heat exchangers and high-pressure reactors",
      "Flue gas desulfurization (FGD) systems",
      "Sour gas service in oil & gas industry",
      "Wet chlorine gas and hypochlorite environments",
      "Molten fluoride salt service",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR) Plates",
        image: hotRolledPlatesImage,
        items: [
          "Hastelloy C276 / C22 HR Plates",
          "Hastelloy Alloy B2 / B3 HR Plates",
          "ASME SB 575 / SB 333 HR Stock",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR) Plates",
        image: coldRolledPlatesImage,
        items: [
          "Hastelloy C2000 / C59 CR Plates",
          "UNS N10276 / N06022 CR Sheets",
          "Nickel Alloy B2 / B3 Cold Rolled",
        ],
      },
      customPlates: {
        title: "Custom & Specialty",
        image: customPlatesImage,
        items: [
          "Hastelloy C4 / Alloy N Custom Plates",
          "Laser & Plasma Cut Hastelloy Profiles",
          "Nickel Alloy Custom Sized Plates",
        ],
      },
    },

    specifications: {
      standardsSpecs: "ASTM B575 / B333, ASME SB575 / SB333",
      thicknessRange: "0.3 mm to 120 mm | Custom Thickness Available",
      widthLength: "W: 1000mm to 3500mm | L: 2000mm to 6000mm+",
      processingFinish: "Hot Rolled, Cold Rolled, Pickled, Polished",
      valueAddedServices: "Laser/Plasma Cutting, Forging, Annealing, Bending",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS NO.",
        "WERKSTOFF NR.",
        "JIS / AFNOR / GOST Standards",
      ],
      rows: [
        [
          "Hastelloy C276",
          "N10276",
          "2.4819",
          "NW 0276 | NiMo16Cr15W | ??65???",
        ],
        [
          "Hastelloy C22",
          "N06022",
          "2.4602",
          "NW 6022 | NiCr21Mo14W | NiCr21Mo14W",
        ],
        ["Hastelloy B2", "N10665", "2.4617", "NW 0665 | NiMo28 | Alloy B-2"],
        [
          "Hastelloy B3",
          "N10675",
          "2.4600",
          "NiMo29 | Alloy B-3 | High Moly Alloy",
        ],
        ["Hastelloy C2000", "N06200", "2.4675", "NiCr23Mo16Cu | Alloy C-2000"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Mo", "Cr", "Fe", "W", "Other Key Elements"],
      rows: [
        [
          "C276",
          "Bal",
          "15.0 – 17.0",
          "14.5 – 16.5",
          "4.0 – 7.0",
          "3.0 – 4.5",
          "Co: 2.50, Mn: 1.0",
        ],
        [
          "C22",
          "Bal",
          "12.5 – 14.5",
          "20.0 – 22.5",
          "2.0 – 6.0",
          "2.5 – 3.5",
          "Co: 2.50, V: 0.35",
        ],
        [
          "B2",
          "Bal",
          "26.0 – 30.0",
          "1.0 max",
          "2.0 max",
          "—",
          "Mn: 1.0, Co: 1.0",
        ],
        ["B3", "65.0 min", "28.5", "1.5", "1.5", "3.0 max", "Mn: 3.0, Co: 3.0"],
        [
          "C2000",
          "Rem",
          "15.0 – 17.0",
          "14.5 – 16.5",
          "4.0 – 7.0",
          "—",
          "Cu: 1.3 – 1.9",
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
      ],
      rows: [
        ["Hastelloy C276", "790 MPa", "355 MPa", "40%", "8.89"],
        ["Hastelloy C22", "690 MPa", "310 MPa", "45%", "8.69"],
        ["Hastelloy B2", "760 MPa", "350 MPa", "40%", "9.20"],
        ["Hastelloy B3", "1000 MPa+", "—", "—", "9.22"],
        ["Hastelloy C2000", "690 MPa", "310 MPa", "45%", "8.50"],
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

    metricWeightChart: {
      headers: [
        "Thick (mm)",
        "Weight (kg/m²)",
        "2000 x 1000",
        "2500 x 1250",
        "3000 x 1500",
      ],
      rows: [
        ["0.18", "1.66", "3.32", "—", "—"],
        ["0.20", "1.84", "3.68", "—", "—"],
        ["0.24", "2.21", "4.42", "—", "—"],
        ["0.32", "2.94", "5.88", "—", "—"],
        ["0.50", "4.60", "9.20", "14.38", "—"],
        ["1.00", "9.20", "18.40", "28.75", "41.40"],
        ["1.50", "13.80", "27.60", "43.12", "62.10"],
        ["2.00", "18.40", "36.80", "57.50", "82.80"],
        ["3.00", "27.60", "55.20", "86.25", "124.20"],
        ["4.00", "36.80", "73.60", "115.00", "165.60"],
        ["5.00", "46.00", "92.00", "143.75", "207.00"],
        ["10.00", "92.00", "184.00", "287.50", "414.00"],
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
      "Hastelloy C276 (N10276) & C22 (N06022) Acid-Resistant Plates",
      "Nickel Alloy B2 (N10665) & B3 (N10675) High-Moly Plates",
      "Custom Waterjet, Plasma & Laser Cut Hastelloy Plate Profiles",
      "Heavy Duty Hastelloy Plates for Chemical Reaction Vessels",
      "NACE MR 0175 / ISO 15156 Compliant Plates for Sour Service",
      "Hastelloy C2000, C59 & C4 High-Chromium Alloy Sheets",
      "BA, 2B, & No.1 Hot Rolled (HR) / Cold Rolled (CR) Finishes",
      "ASTM B575 / ASME SB575 Certified Global Stockholder",
      "Specialized Heat Treatment & Annealing for Nickel Alloys",
      "Mirror Polished & SATIN Finish Hastelloy Decorative Plates",
    ],

    relatedSearches: [
      "Hastelloy C276 Plate Price in India",
      "Hastelloy C22 Plate Weight Calculator",
      "Hastelloy B2 Plate Weight Chart PDF",
      "Hastelloy B3 Plate Price per Kg Mumbai",
      "Hastelloy C2000 Plate Manufacturer",
      "Nickel Alloy C59 Plate Supplier in India",
      "ASTM B575 Hastelloy Plate Thickness Tolerance Chart",
      "ASME SB575 Hastelloy C276 Plate Weight",
      "Hastelloy Plate Mechanical Properties",
      "UNS N10276 Plate Chemical Composition",
      "C22 Plate Stockist in Pune",
      "Hastelloy Alloy B2 HR Plate Price",
      "Hastelloy B3 CR Plate Stock Mumbai",
      "Hastelloy updated price list 2026",
      "Hastelloy Plate size chart mm",
      "Super Alloy Plate Manufacturers in Gujarat",
      "Hastelloy C4 Plate thickness chart",
      "Hastelloy Alloy N Plate Price India",
      "Top 100 Hastelloy Plate Dealers in Mumbai",
      "Buy Hastelloy C276 Plate Online",
      "Hastelloy Plate descaled finish price",
      "UNS N06022 Plate Price Mumbai",
      "Hastelloy Plate Exporter to Dubai and Singapore",
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

            {/* Grade Breakdown */}
            <section className="mb-8">
              <SectionTitle>Hastelloy Alloy Grades & Applications</SectionTitle>
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
                  {section.items.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
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
                Stock Availability of Hastelloy Plates
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
              <SectionTitle>Specification of Hastelloy Plates</SectionTitle>
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
              <SectionTitle>
                Detailed Weight Conversion: Hastelloy Plates (All Grades)
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Metric Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Full Metric Weight Chart per Sheet: Hastelloy C276 / C22 / B2 /
                B3
              </SectionTitle>
              <Table
                headers={productData.metricWeightChart.headers}
                rows={productData.metricWeightChart.rows}
              />
            </section>

            {/* Stocked Sizes */}
            <section className="mb-8">
              <SectionTitle>
                Standard Stocked Sizes: Hastelloy Plates
              </SectionTitle>
              <Table
                headers={productData.stockedSizes.headers}
                rows={productData.stockedSizes.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Unified Thickness Tolerance: Hastelloy & Nickel Alloy Plates
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                Applicable to: C276, C22, B2, B3, C2000, C59, C4, Alloy N |
                Tolerance over and under nominal thickness t (mm)
              </p>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Hastelloy & Super Alloy Plate Processing
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
                Searches Related to Hastelloy & Nickel Alloy Plates
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

export default HastelloyPlates;
