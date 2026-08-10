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
import chequeredPlatesImage from "../../assets/images/stock/chequered-plates.jpg";

const SpecialAlloyPlates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Special Alloy Plates Supplier – SMO 254 (F44) & Alloy 20",
    subtitle:
      "Premium Quality Super-Austenitic & High-Nickel Alloy Plates – SMO 254 (6% Moly) for Maximum Pitting Resistance & Alloy 20 (Carpenter 20) for Exceptional Sulfuric Acid Resistance",

    technicalOverview: {
      title: "Special Alloy Plates: Technical Overview",
      description:
        "SMO 254 and Alloy 20 plates are engineered to fill the performance gap where standard stainless steels fail. These super-austenitic and high-nickel alloys provide localized corrosion resistance in environments involving high chlorides or aggressive sulfuric acid, ensuring structural integrity in mission-critical chemical and marine infrastructure.",
    },

    gradeBreakdown: [
      {
        title: "SMO 254 Plates (UNS S31254 / F44)",
        description:
          "SMO 254 is a 6% Molybdenum super-austenitic stainless steel. It was specifically developed for use in halide-containing environments, such as brackish water, seawater, and pulp mill bleach plants.",
        items: [
          "Pitting Resistance: With a PREN (Pitting Resistance Equivalent Number) of > 42.5, it offers extraordinary resistance to localized attack.",
          "Mechanical Strength: It provides significantly higher yield strength than standard austenitic steels, allowing for thinner plate designs in high-pressure systems.",
        ],
        keyApplications:
          "Desalination equipment, offshore oil and gas seawater systems, and flue-gas desulfurization (FGD) scrubbers.",
      },
      {
        title: "Alloy 20 Plates (UNS N08020)",
        description:
          "Alloy 20, often referred to as 'Carpenter 20,' is a 'super' stainless steel designed specifically for maximum resistance to acid attack. It effectively bridges the performance gap between stainless steel and expensive nickel-based alloys.",
        items: [
          "Sulfuric Acid Specialist: It is renowned for its exceptional performance in hot sulfuric acid, particularly in concentrations of 20% to 40%.",
          "Stabilized Structure: The addition of Niobium prevents intergranular corrosion by stabilizing the material against carbide precipitation during welding or thermal processing.",
        ],
        keyApplications:
          "Chemical production of synthetic fibers, explosives, plastics, and pharmaceutical mixing tanks.",
      },
    ],

    keyFeatures: [
      "SMO 254: Maximum resistance to pitting and crevice corrosion (PREN > 42.5)",
      "SMO 254: Superior resistance to high-chloride environments",
      "SMO 254: Higher yield strength than conventional austenitic steels",
      "Alloy 20: Extraordinary resistance to hot sulfuric acid (20-40% concentrations)",
      "Alloy 20: Stabilized with Niobium for excellent weldability",
      "Alloy 20: Bridges the gap between stainless steel and nickel alloys",
      "Thickness: 0.3 mm to 120 mm | Width up to 3500mm | Length up to 6000mm",
      "Surface Finishes: 2B, BA, No.1, 8K Mirror, Satin, Hairline, No.4, PVC Coated",
      "Hardness & Temper: Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      "Fabrication Services: Waterjet/Plasma/Laser Cutting, Bending, Edge Prep, Welding",
      "Complies with SMO 254: ASTM A240 / ASME SA240 | Alloy 20: ASTM B463 / ASME SB463",
    ],

    applications: [
      "Desalination equipment and offshore oil & gas seawater systems",
      "Flue-gas desulfurization (FGD) scrubbers",
      "Chemical production of synthetic fibers, explosives, and plastics",
      "Pharmaceutical mixing tanks",
      "High-chloride and brackish water environments",
      "Pulp mill bleach plants",
      "Heat exchangers and condensers",
      "Marine and offshore platforms",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR) Plates",
        image: hotRolledPlatesImage,
        items: [
          "SMO 254 S31254 HR Plates",
          "Alloy 20 N08020 HR Plates",
          "Incoloy 20 HR Stock Mumbai",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR) Plates",
        image: coldRolledPlatesImage,
        items: [
          "SMO 254 Cold Rolled Sheets",
          "Alloy 20cb3® Cold Rolled",
          "F44 SMO CR Precision Stock",
        ],
      },
      chequeredPlates: {
        title: "Chequered & Custom",
        image: chequeredPlatesImage,
        items: [
          "SMO 254 Chequered Plates",
          "Alloy 20 Custom Sized Plate",
          "6 Moly Anti-Skid Floor Plates",
        ],
      },
    },

    specificationsSMO: {
      title: "Specification of SMO 254 (6% Moly) Plates",
      standard: "ASTM A240 / ASME SA240 | UNS S31254 | F44",
      surfaceFinish:
        "2B, BA, No.1, 8K Mirror, Satin, Hairline, No.4, PVC Coated",
      thicknessSize:
        "0.3 mm to 120 mm | Width up to 3500mm | Length up to 6000mm",
      fabricationServices:
        "Waterjet/Plasma/Laser Cutting, Bending, Edge Prep, Welding",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
    },

    specificationsAlloy20: {
      title: "Specification of Alloy 20 (Carpenter 20) Plates",
      standard: "ASTM B463 / ASME SB463 | UNS N08020 | Incoloy 20",
      processingTypes:
        "Hot Rolled (HR) Plate, Cold Rolled (CR) Plate, Custom Cut",
      valueAdded: "Cladding, Annealing, Pickling, Forging, Minor Fabrication",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS NO.",
        "WERKSTOFF NR.",
        "JIS / SS / AFNOR / EN Standards",
      ],
      rows: [
        [
          "SMO 254",
          "S31254",
          "1.4547",
          "SS 2378 | Z1 CNDU 20.18.06Az | X1CrNiMoCuN20-18-7",
        ],
        [
          "Alloy 20",
          "N08020",
          "2.4660",
          "NiCr20CuMo | Z2NCUD31-20AZ | Carpenter 20",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Mo", "Cu", "Fe", "C (max)", "Others"],
      rows: [
        [
          "SMO 254",
          "17.5 – 18.5",
          "19.5 – 20.5",
          "6.0 – 6.5",
          "0.5 – 1.0",
          "Balance",
          "0.02",
          "N: 0.18 – 0.22",
        ],
        [
          "Alloy 20",
          "32.0 – 38.0",
          "19.0 – 21.0",
          "2.0 – 3.0",
          "3.0 – 4.0",
          "29.85 min",
          "0.07",
          "Cb+Ta: 8xC – 1.0",
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
        "Melting Point",
      ],
      rows: [
        ["SMO 254", "650 MPa", "300 MPa", "35%", "8.0 g/cm³", "1320-1390 °C"],
        ["Alloy 20", "551 MPa", "241 MPa", "30%", "8.1 g/cm³", "1443 °C"],
      ],
    },

    gaugeChart: {
      headers: ["Gauge No.", "Inches", "MM", "Gauge No.", "Inches", "MM"],
      rows: [
        ["8", "0.1718", "4.36", "18", "0.0500", "1.27"],
        ["9", "0.1562", "3.96", "20", "0.0375", "0.95"],
        ["10", "0.1406", "3.57", "22", "0.0312", "0.79"],
        ["11", "0.1250", "3.17", "24", "0.0250", "0.63"],
        ["12", "0.1093", "2.77", "26", "0.0187", "0.47"],
        ["14", "0.0781", "1.98", "28", "0.0156", "0.39"],
        ["16", "0.0625", "1.58", "30", "0.0125", "0.31"],
      ],
    },

    weightChartSMO: {
      headers: [
        "Thickness",
        "KG/M²",
        "2000 x 1000",
        "2500 x 1250",
        "3000 x 1500",
      ],
      rows: [
        ["1.00 mm", "8.00", "16.00 kg", "25.00 kg", "36.00 kg"],
        ["2.00 mm", "16.00", "32.00 kg", "50.00 kg", "72.00 kg"],
        ["3.00 mm", "24.00", "48.00 kg", "75.00 kg", "108.00 kg"],
        ["4.00 mm", "32.00", "64.00 kg", "100.00 kg", "144.00 kg"],
        ["5.00 mm", "40.00", "80.00 kg", "125.00 kg", "180.00 kg"],
        ["6.00 mm", "48.00", "96.00 kg", "150.00 kg", "216.00 kg"],
        ["8.00 mm", "64.00", "128.00 kg", "200.00 kg", "288.00 kg"],
      ],
    },

    weightChartAlloy20: {
      headers: ["Thickness (Inches)", "Weight (lbs/in²)", "Weight (kg/m²)"],
      rows: [
        ['3/16"', "0.0600", "42.184"],
        ['1/4"', "0.0800", "56.245"],
        ['1/2"', "0.1610", "113.194"],
        ['1"', "0.3130", "220.060"],
        ['2"', "0.6270", "440.824"],
        ['3"', "0.9410", "661.588"],
      ],
    },

    toleranceChartSMO: {
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
        ["0.085 – 0.099 (2.2 – 2.5)", "0.004 (0.10)", "0.006 (0.15)"],
        ["0.132 – 0.146 (3.4 – 3.7)", "0.006 (0.15)", "0.009 (0.23)"],
      ],
    },

    toleranceChartHeavy: {
      headers: [
        "Width w (mm)",
        "2.5-4.5",
        "6.0",
        "10.0",
        "12.5",
        "16.0",
        "20.0",
        "25.0",
        "> 30",
      ],
      rows: [
        [
          "w < 1200",
          "0.20",
          "0.30",
          "0.35",
          "0.80",
          "0.80",
          "0.80",
          "1.0",
          "1.4",
        ],
        [
          "1200 - 1500",
          "0.20",
          "0.30",
          "0.38",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.4",
        ],
        [
          "1500 - 1800",
          "0.20",
          "0.32",
          "0.40",
          "0.80",
          "0.80",
          "0.90",
          "1.1",
          "1.5",
        ],
        [
          "2100 - 2400",
          "-",
          "0.80",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.1",
          "1.5",
        ],
        ["2700 - 3000", "-", "0.90", "1.0", "1.0", "1.1", "1.3", "1.4", "1.8"],
      ],
    },

    specializedProducts: [
      "SMO 254 (UNS S31254) 6% Moly High-Pitting Resistance Plates",
      "254 SMO F44 Mirror Polished & No.4 Finish Decorative Sheets",
      "Custom Waterjet & Plasma Cut 6-Moly Plate Profiles",
      "SMO 254 Chequered & Anti-Skid Floor Plates for Offshore Platforms",
      "ASTM A240 Certified SMO 254 Plates for Desalination Plants",
      "Alloy 20 (UNS N08020) Sulfuric Acid Resistant Industrial Plates",
      "Carpenter 20cb3® Annealed & Pickled Finish Plates",
      "Alloy 20 Hot Rolled (HR) & Cold Rolled (CR) Precision Stock",
      "Specialized Cladding & Fabricated Alloy 20 Heavy Plates",
      "Leading SMO 254 & Alloy 20 Plate Exporter in India",
    ],

    relatedSearches: [
      "SMO 254 Plate Price List 2026",
      "SMO 254 Plate Supplier in India",
      "Alloy 20 Plate Price per Kg Mumbai",
      "SMO 254 S31254 Plate Weight Calculator",
      "Alloy 20 N08020 Plate Stockist in Mumbai",
      "ASTM A240 SMO 254 Plate Thickness Tolerance Chart",
      "ASME SB 463 Alloy 20 Plate Weight Chart",
      "SMO 254 6% Moly Plate Manufacturers in India",
      "Carpenter 20 Plate Price in Mumbai",
      "SMO 254 S31254 Cold Rolled Sheet Price",
      "Alloy 20 HR Hot Rolled Plate Price List",
      "SMO 254 vs Alloy 20 Corrosion Comparison",
      "F44 SMO 254 Plate Specification PDF",
      "Alloy 20cb3® Custom Plates Suppliers In Gujarat",
      "SMO 254 Plate Size Chart mm",
      "Super Austenitic Plate Manufacturers in Mumbai",
      "Alloy 20 Plate Chemical Composition",
      "SMO 254 Plate Mechanical Properties",
      "Top 100 SMO 254 Plate Dealers in Pune",
      "Buy Alloy 20 Plates Online India",
      "SMO 254 Mirror Finish Plate Price Mumbai",
      "UNS S31254 Plate Stockyards in India",
      "Alloy 20 Plate Dimensions and Length Chart",
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
              <SectionTitle>Special Alloy Grades & Applications</SectionTitle>
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
                Stock Availability of SMO 254 & Alloy 20 Plates
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

            {/* Specifications - SMO 254 */}
            <section className="mb-8">
              <SectionTitle>{productData.specificationsSMO.title}</SectionTitle>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <ul className="space-y-2">
                  {Object.entries(productData.specificationsSMO).map(
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

            {/* Specifications - Alloy 20 */}
            <section className="mb-8">
              <SectionTitle>
                {productData.specificationsAlloy20.title}
              </SectionTitle>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <ul className="space-y-2">
                  {Object.entries(productData.specificationsAlloy20).map(
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
                SMO 254 Stainless Steel Plate Gauge & Thickness Chart
              </SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Weight Chart - SMO 254 */}
            <section className="mb-8">
              <SectionTitle>
                SMO 254 Sheet Weight (KG) per Dimension
              </SectionTitle>
              <Table
                headers={productData.weightChartSMO.headers}
                rows={productData.weightChartSMO.rows}
              />
            </section>

            {/* Weight Chart - Alloy 20 */}
            <section className="mb-8">
              <SectionTitle>
                Alloy 20 Plate Weight & Unit Conversion
              </SectionTitle>
              <Table
                headers={productData.weightChartAlloy20.headers}
                rows={productData.weightChartAlloy20.rows}
              />
            </section>

            {/* Tolerance Chart - SMO 254 */}
            <section className="mb-8">
              <SectionTitle>
                SMO 254 Cold Rolled Sheet Thickness Tolerance
              </SectionTitle>
              <Table
                headers={productData.toleranceChartSMO.headers}
                rows={productData.toleranceChartSMO.rows}
              />
            </section>

            {/* Tolerance Chart - Heavy Plate */}
            <section className="mb-8">
              <SectionTitle>
                Heavy Plate Thickness Tolerance Chart (mm)
              </SectionTitle>
              <Table
                headers={productData.toleranceChartHeavy.headers}
                rows={productData.toleranceChartHeavy.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in SMO 254 & Alloy 20 Plate Processing
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
                Searches Related to SMO 254 & Alloy 20 Plates
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

export default SpecialAlloyPlates;
