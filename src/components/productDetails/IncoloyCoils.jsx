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

const IncoloyCoils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Incoloy Coils Supplier – 800, 800H, 800HT, 825, 925 & DS 330",
    subtitle:
      "Premium Quality ASTM B409 / ASME SB409 Incoloy Superalloy Coils – Nickel-Iron-Chromium Alloys Engineered for High-Temperature Strength, Oxidation Resistance & Corrosion Protection in Extreme Industrial Environments",

    technicalOverview: {
      title: "Incoloy Coils: Technical Overview",
      description:
        "Incoloy coils represent a specialized family of nickel-iron-chromium superalloys engineered to bridge the performance gap between conventional stainless steels and high-cost nickel alloys. These high-performance materials are designed for applications requiring a combination of excellent high-temperature strength and resistance to oxidation, carburization, and various forms of aqueous corrosion. By balancing a high nickel content with significant portions of iron and chromium, Incoloy coils provide a cost-effective solution for extreme industrial environments, maintaining structural efficiency and mechanical integrity under prolonged thermal stress.",
    },

    gradeBreakdown: [
      {
        title: "Incoloy 800, 800H, and 800HT: High-Temperature Stability",
        description:
          "The Incoloy 800 series is the industry standard for heat-resistant applications.",
        items: [
          "Incoloy 800 (UNS N08800): Used primarily for service up to 1100°F (593°C), offering general resistance to oxidation and nitriding.",
          "Incoloy 800H (UNS N08810) and Incoloy 800HT (UNS N08811): Feature controlled carbon, aluminum, and titanium contents with high-temperature solution annealing. This results in significantly higher creep and rupture strength, making them essential for petrochemical furnace crackers, steam generator tubing, and industrial heating elements.",
        ],
      },
      {
        title: "Incoloy DS and Alloy 330: Resistance to Carburization",
        description:
          "Specifically engineered for the heat-treating industry, these alloys contain higher silicon content for superior resistance to internal oxidation and 'green rot' in carburizing and nitriding atmospheres.",
        items: [
          "Maintain excellent ductility and resistance to thermal-mechanical fatigue.",
          "Ideal for industrial furnace muffles, heat-treating baskets, and radiant tubes.",
        ],
      },
      {
        title: "Incoloy 825 and 925: Advanced Corrosion Resistance",
        description:
          "These titanium-stabilized alloys with added molybdenum and copper provide exceptional resistance to many corrosive environments.",
        items: [
          "Incoloy 825 (UNS N08825): Virtually immune to chloride-ion stress corrosion cracking with outstanding resistance to sulfuric and phosphoric acids.",
          "Incoloy 925 (UNS N09925): An age-hardenable version of Alloy 825, delivering the same superior corrosion resistance with significantly higher mechanical strength and hardness.",
          "Widely utilized in the oil and gas sector for downhole components, acid production, and chemical processing equipment.",
        ],
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Incoloy coils are manufactured in strict accordance with international standards, including ASTM B409, ASTM B424, and ASME SB409. Available in various processing finishes such as hot-rolled (HR), cold-rolled (CR), and precision-slit coils, these products are tailored to meet diverse industrial fabrication needs. Quality assurance is a fundamental aspect of our supply chain, with each coil undergoing rigorous testing, including Positive Material Identification (PMI), ultrasonic examinations, and tensile strength verification. We provide comprehensive documentation, including manufacturer test certificates and third-party inspection reports, to ensure that our Incoloy coils meet the precise technical specifications and safety standards required for modern industrial blueprints.",
    },

    keyFeatures: [
      "Nickel-iron-chromium superalloys bridging cost and performance",
      "Excellent high-temperature strength and oxidation resistance",
      "Superior resistance to carburization and nitriding atmospheres",
      "Exceptional resistance to chloride-ion stress corrosion cracking",
      "Available in 6 grades: 800, 800H, 800HT, 825, 925 & DS 330",
      "Age-hardenable grades (825, 925) for high-strength applications",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM B409 / ASME SB409 standards",
    ],

    applications: [
      "Petrochemical furnace crackers and steam generator tubing",
      "Industrial heating elements and heat-treating equipment",
      "Furnace muffles, heat-treating baskets, and radiant tubes",
      "Oil and gas downhole components",
      "Acid production and chemical processing equipment",
      "High-temperature oxidation and carburization environments",
      "Power generation and nuclear applications",
      "Aerospace and automotive exhaust systems",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Incoloy Hot Rolled Coils",
          "Incoloy Alloy HR Coils",
          "ASME SB409 Incoloy HR Coils",
          "Incoloy® Alloy Hot Rolled Coils",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Incoloy Cold Rolled Coils",
          "Incoloy® Alloy CR Coils",
          "Incoloy Alloy Cold Rolled Coils",
          "ASME SB409 Incoloy CR Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Incoloy Slit Coils",
          "Incoloy Alloy Slit Coils",
          "Incoloy® Alloy Slit Coils",
          "ASME SB409 Incoloy Slit Coils",
        ],
      },
    },

    specifications: {
      standard: "ASTM B409 / ASME SB409",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      formLength: "Coil / Strip, Length as per Customer Requirement",
      valueAddedServices:
        "Cutting, Polishing, Threading, NDT, Destructive & Ultrasonic Testing",
    },

    equivalentGrades: {
      headers: ["GRADE", "WNR.", "UNS", "JIS / AFNOR / EN / GOST"],
      rows: [
        [
          "Incoloy 800",
          "1.4876",
          "N08800",
          "NCF 800 / Z8NC32-21 / XXH32T / NA 15",
        ],
        [
          "Incoloy 800H",
          "1.4958",
          "N08810",
          "NCF 800H / Z8NC33-21 / X5NiCrAlTi31-20 / NA 15(H)",
        ],
        [
          "Incoloy 800HT",
          "1.4859",
          "N08811",
          "NCF 800HT / X8NiCrAlTi32-21 / NA 15(HT)",
        ],
        [
          "Incoloy 825",
          "2.4858",
          "N08825",
          "NCF 825 / NiCr21Mo / NA 16 / XH38BT",
        ],
        ["Incoloy 925", "–", "N09925", "NCF 925"],
        ["Incoloy DS 330", "1.4862", "N08330", "–"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Cu", "Al", "Ti", "Mn", "Si", "C"],
      rows: [
        [
          "800 / 800H",
          "30 – 35",
          "19 – 23",
          "39.5 min",
          "0.75 max",
          "0.15–0.6",
          "0.15–0.6",
          "1.5 max",
          "1.0 max",
          "0.1 max",
        ],
        [
          "800HT",
          "30 – 35",
          "19 – 23",
          "39.5 min",
          "0.75 max",
          "0.15–0.6",
          "0.15–0.6",
          "1.5 max",
          "1.0 max",
          "0.06–0.1",
        ],
        [
          "825",
          "38 – 46",
          "19.5–23.5",
          "22.0 min",
          "1.5 – 3.0",
          "0.02 max",
          "0.6 – 1.2",
          "1.0 max",
          "0.5 max",
          "0.05 max",
        ],
        [
          "925",
          "42 – 46",
          "19 – 22",
          "22 min",
          "1.5 – 3.0",
          "0.1 – 0.5",
          "1.9 – 2.4",
          "1.0 max",
          "0.5 max",
          "0.03 max",
        ],
        [
          "DS 330",
          "34.5–41.0",
          "17.0–19.0",
          "Bal",
          "0.30 max",
          "–",
          "–",
          "0.8 – 1.5",
          "1.9 – 2.5",
          "0.1 max",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength (0.2%)",
        "Elongation",
      ],
      rows: [
        [
          "800 / 800H / DS 330",
          "7.94 g/cm³",
          "1385 °C",
          "520 MPa (75 ksi)",
          "205 MPa (30 ksi)",
          "30%",
        ],
        [
          "Incoloy 825",
          "8.14 g/cm³",
          "1400 °C",
          "550 MPa (80 ksi)",
          "220 MPa (32 ksi)",
          "30%",
        ],
        [
          "Incoloy 925",
          "8.05 g/cm³",
          "1343 °C",
          "1210 MPa (175 ksi)",
          "810 MPa (117 ksi)",
          "24%",
        ],
      ],
    },

    availabilityChart: {
      headers: [
        "Coil Type / Grade Reference",
        "Sizes (Thickness)",
        "Availability",
      ],
      rows: [
        ["ASTM SB409 / SB424 / SB163", "0.4mm", "Y"],
        ["Incoloy 800 / DS 330 Coils", "0.5mm", "Y"],
        ["Incoloy 800H / 800HT Coils", "0.8mm", "Y"],
        ["Incoloy 825 Coils", "1mm", "Y"],
        ["Incoloy 925 Coils", "1.2mm", "Y"],
        ["ASTM SB409 / SB424 / SB163", "1.6mm", "Y"],
        ["Incoloy 800 / DS 330 Coils", "2mm", "Y"],
        ["Incoloy 800H / 800HT Coils", "3mm", "Y"],
        ["Incoloy 825 Coils", "4mm", "Y"],
        ["Incoloy 925 Coils", "5mm", "Y"],
        ["ASTM SB409 / SB424 / SB163", "6mm", "Y"],
        ["Incoloy 800 / DS 330 Coils", "8mm", "Y"],
        ["Incoloy 800H / 800HT Coils", "10mm", "Y"],
        ["Incoloy 825 Coils", "12mm", "Y"],
        ["Incoloy 925 Coils", "16mm", "Y"],
        ["ASTM SB409 / SB424 / SB163", "20mm", "Y"],
        ["Incoloy 800 / DS 330 Coils", "25mm", "Y"],
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
        ["2500 x 1250 x 5.0", "133.0", "Applicable to all Incoloy Grades", "—"],
      ],
    },

    specializedProducts: [
      "Incoloy 800 / 800H / 800HT High-Temp Coils",
      "Incoloy 825 Corrosion Resistant Alloy Coils",
      "Incoloy 925 Age-Hardened Nickel Alloy Coils",
      "Incoloy DS 330 Heat Treatable Alloy Coils",
      "ASTM B409 Incoloy Hot Rolled (HR) Coils",
      "ASME SB409 Incoloy Cold Rolled (CR) Coils",
      "Incoloy Precision Slit Coils & Industrial Strips",
      "Incoloy Coils Manufacturer in India",
      "Incoloy Coils Supplier in Mumbai",
      "UNS N08800 / N08811 / N08825 Coil Exporter",
      "INOX 1.4876 / 2.4858 / 1.4862 Alloy Coils",
      "Incoloy Alloy 800HT High Performance Coils",
      "Best Price Incoloy Coil Dealer in India",
      "Incoloy Custom Thickness & Cut-to-Size Coils",
      "Spring Hard & Soft Annealed Incoloy Coils",
      "Nickel Alloy 825 Coil Stockist in India",
    ],

    relatedSearches: [
      "Incoloy 800 Coil Price List",
      "Incoloy 825 Coil Weight Calculator",
      "Incoloy 925 Coil Dimensions",
      "Incoloy 800H Coil Price Per Kg in India",
      "Incoloy Coil Manufacturer in Mumbai",
      "Incoloy 800HT Coil Supplier in India",
      "ASTM B409 Incoloy Coil Thickness Tolerance",
      "ASME SB409 Incoloy 800 Coil Price List PDF",
      "Incoloy 825 Coil Mechanical Properties",
      "Incoloy DS 330 Coil Chemical Composition",
      "Incoloy Coil Stockist in Pune",
      "Incoloy 800 Coil Exporter",
      "Incoloy Alloy Coil Price in Mumbai",
      "Incoloy Coil Gauge Chart",
      "Incoloy Slit Coil Price",
      "Incoloy 825 Strip Coil Supplier",
      "Incoloy Hot Rolled Coil Price",
      "Incoloy Cold Rolled Coil Manufacturers",
      "Incoloy Coil Catalog PDF",
      "Incoloy 800 Coil Equivalent Grades",
      "Incoloy 800HT Coil Price per Meter",
      "Incoloy 925 Coil updated price list",
      "Incoloy 800 Coil size chart",
      "Incoloy Alloy Coil updated Price List",
      "Incoloy Coil Manufacturers in Gujarat",
      "Incoloy Coil Stockyards in India",
      "Incoloy 825 Coil thickness chart",
      "Incoloy 800H Coil Price in India",
      "Top 100 Incoloy Coil Dealers in Pune",
      "Buy Incoloy 800 Coil Online",
      "Incoloy Alloy Coil leading manufacturers in Mumbai",
      "Incoloy 825 Coil descaled finish",
      "Incoloy DS 330 Coil 2B Finish price",
      "Incoloy 925 Coil BA Finish stockist",
      "UNS N08800 Coil Price India",
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
    <div className="bg-gray-50 min-h-screen">
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
              <SectionTitle>Incoloy Alloy Grades & Applications</SectionTitle>
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
              <p className="text-gray-700 leading-relaxed">
                {productData.manufacturingStandards.description}
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
              <SectionTitle>Stock Availability of Incoloy Coils</SectionTitle>
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
              <SectionTitle>Specification of Incoloy Coils</SectionTitle>
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
              <SectionTitle>Incoloy Coil Stock Availability</SectionTitle>
              <Table
                headers={productData.availabilityChart.headers}
                rows={productData.availabilityChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Incoloy Cold Rolled Coils (Descaled) Weight Chart
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM SB409 / SB424 Type Coils
              </p>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>Specialized in Incoloy Alloy Coils</SectionTitle>
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
                Searches Related to Incoloy Alloy Coils
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

export default IncoloyCoils;
