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
import productImage from "../../assets/images/productImage/coil.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Unified Stock Availability Images (same for all product pages)
import hrCoilsImage from "../../assets/images/stock/hr-coils.jpg";
import crCoilsImage from "../../assets/images/stock/cr-coils.jpg";
import slitCoilsImage from "../../assets/images/stock/slit-coils.jpg";

const HastelloyCoils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Hastelloy Coils Supplier – C276, C22, B2, B3, C2000, C59, C4 & HN",
    subtitle:
      "Premium Quality ASTM B575 / ASME SB575 Hastelloy Superalloy Coils – Nickel-Based Alloys Engineered for Maximum Resistance to Aggressive Chemicals, Chlorides & Reducing Acids in Critical Industrial Environments",

    technicalOverview: {
      title:
        "Hastelloy Alloy Coils: Technical Overview and Material Properties",
      description:
        "Hastelloy coils are a family of high-performance nickel-based superalloys engineered for the most aggressive chemical environments. These alloys are specifically designed to resist a wide range of corrosive media, including highly reducing and oxidizing acids, chlorides, and mixed chemical streams. The key to their durability is a complex metallurgical matrix of nickel, molybdenum, and chromium, which provides exceptional resistance to pitting, crevice corrosion, and stress corrosion cracking (SCC). These coils are indispensable in industries where standard stainless steels or even other nickel alloys fail. They maintain high mechanical strength and structural integrity at both ambient and elevated temperatures, ensuring long-term reliability in high-pressure reactors, heat exchangers, and volatile chemical transport systems.",
    },

    gradeBreakdown: [
      {
        title: "Hastelloy C-Series (C276, C22, C2000, C4, C59)",
        description:
          "The C-Series is the most versatile of the Hastelloy family, known for its 'universal' resistance to both oxidizing and reducing environments.",
        items: [
          "Hastelloy C276 (UNS N10276): The industry standard for aggressive chemicals. Exceptionally resistant to wet chlorine gas, hypochlorites, and chlorine dioxide. Widely used in flue gas desulfurization (FGD) systems.",
          "Hastelloy C22 (UNS N06022): Offers better overall corrosion resistance than C276 in oxidizing environments. Provides superior protection against weld-zone attack and pitting.",
          "Hastelloy C2000 (UNS N06200): Specifically designed for maximum flexibility. With added copper, it excels in sulfuric acid and provides broader resistance to a variety of mixed process streams.",
          "Hastelloy C4 & C59: C4 (UNS N06455) offers high-temperature stability and resistance to grain-boundary precipitation. C59 (UNS N06059) is a high-purity alloy with excellent thermal stability and resistance to pitting in halide media.",
        ],
      },
      {
        title: "Hastelloy B-Series (B2, B3)",
        description:
          "The B-Series is specialized for handling reducing acids, particularly hydrochloric acid at all concentrations and temperatures.",
        items: [
          "Hastelloy B2 (UNS N10665): A nickel-molybdenum alloy with significant resistance to reducing environments. A primary choice for handling pure hydrochloric, phosphoric, and sulfuric acids.",
          "Hastelloy B3 (UNS N10675): An improved version of B2, offering the same high resistance to hydrochloric acid but with significantly better thermal stability. Makes fabrication and welding much easier while reducing the risk of embrittlement during processing.",
        ],
      },
      {
        title: "Specialized Hastelloy Grades (H-N / Alloy N)",
        description:
          "Hastelloy N (UNS N10003): Also known as Alloy N, this grade was developed specifically for molten fluoride salts. It has excellent oxidation resistance to hot fluoride salts at temperatures up to 704°C (1300°F) and maintains good mechanical properties.",
        items: [],
      },
    ],

    industrialApplications: {
      title: "Industrial Applications & Quality",
      items: [
        "Chemical Processing: Production of pesticides, fertilizers, and volatile organic compounds.",
        "Pollution Control: Scrubber liners, dampers, and fans in waste-to-energy plants.",
        "Oil & Gas: Sour gas service and high-pressure chemical injection lines.",
      ],
    },

    keyFeatures: [
      "Exceptional resistance to aggressive chemicals, chlorides, and acids",
      "Outstanding pitting, crevice corrosion, and stress corrosion cracking resistance",
      "High mechanical strength and structural integrity at ambient and elevated temperatures",
      "Available in C-Series (C276, C22, C2000, C4, C59) and B-Series (B2, B3)",
      "Specialized grades: Hastelloy N for molten fluoride salts",
      "Universal resistance to both oxidizing and reducing environments",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM B575 / ASME SB575 standards",
    ],

    applications: [
      "Chemical processing and pesticide production",
      "Fertilizer manufacturing and volatile organic compounds",
      "Flue gas desulfurization (FGD) systems",
      "Pollution control and waste-to-energy plants",
      "Sour gas service in oil & gas industry",
      "High-pressure chemical injection lines",
      "Heat exchangers and high-pressure reactors",
      "Molten fluoride salt environments",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Hastelloy Hot Rolled Coils",
          "Hastelloy Alloy Hot Rolled Coils",
          "Hastelloy Alloy HR Coils",
          "ASME SB575 Hastelloy HR Coils",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Hastelloy Cold Rolled Coils",
          "Hastelloy® Alloy CR Coils",
          "Hastelloy CR Coils",
          "ASME SB575 Hastelloy CR Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Hastelloy Slit Coils",
          "Hastelloy® Alloy Slit Coils",
          "ASME SB575 Hastelloy Slit Coils",
          "Hastelloy Custom Slit Strip",
        ],
      },
    },

    specifications: {
      standard: "ASTM B575 / ASME SB575",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      formLength: "Coil / Strip, Length as per Customer Requirement",
      valueAddedServices:
        "Cutting, Polishing, Threading, Destructive & NDT Testing",
    },

    equivalentGrades: {
      headers: ["GRADE", "STANDARD / WNR.", "UNS", "JIS / AFNOR / GOST"],
      rows: [
        [
          "Hastelloy C276",
          "2.4819",
          "N10276",
          "NW 0276 / NiMo16Cr15W / ??65???",
        ],
        ["Hastelloy C22", "2.4602", "N06022", "NW 6022 / NiCr21Mo14W / EP760"],
        ["Hastelloy B2", "2.4617", "N10665", "NW 0665"],
        ["Hastelloy B3", "2.4600", "N10675", "–"],
        ["Hastelloy C2000 / C59 / C4", "2.4600", "N10675", "–"],
      ],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "Ni",
        "Cr",
        "Mo",
        "Fe",
        "Co",
        "Mn",
        "Si",
        "C",
        "Other",
      ],
      rows: [
        [
          "C276",
          "50.99 min",
          "14.5-16.5",
          "15.0-17.0",
          "4.0-7.0",
          "2.50 max",
          "1.00 max",
          "0.08 max",
          "0.01 max",
          "W: 3.0-4.5, V: 0.35",
        ],
        [
          "C22",
          "50.01 min",
          "20.0-22.5",
          "12.5-14.5",
          "2.0-6.0",
          "2.50 max",
          "0.50 max",
          "0.08 max",
          "0.01 max",
          "W: 2.5-3.5, V: 0.35",
        ],
        [
          "B2",
          "Bal",
          "1.0 max",
          "26.0-30.0",
          "2.0 max",
          "1.0 max",
          "1.0 max",
          "0.1 max",
          "0.02 max",
          "P: 0.04, S: 0.03",
        ],
        [
          "B3 / C2000",
          "65.0 min",
          "1.5",
          "28.5",
          "1.5",
          "3.0 max",
          "3.0 max",
          "0.10 max",
          "0.01 max",
          "W: 3.0, Al: 0.5, Ti: 0.2",
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
          "Hastelloy C276",
          "8.89 g/cm³",
          "1370 °C",
          "790 MPa",
          "355 MPa",
          "40%",
        ],
        [
          "Hastelloy C22",
          "8.89 g/cm³",
          "1370 °C (2500 °F)",
          "MPa – 790 (115 ksi)",
          "MPa – 355 (52 ksi)",
          "40%",
        ],
        [
          "Hastelloy B2",
          "9.2 g/cm³",
          "1370 °C",
          "MPa – 760 (110 ksi)",
          "MPa – 350 (51 ksi)",
          "40%",
        ],
        [
          "Hastelloy B3",
          "9.22 g/cm³",
          "1418 °C",
          "1000 - 2000 MPa",
          "–",
          "216 (Modulus)",
        ],
        [
          "C2000 / C59 / C4",
          "9.22 g/cm³",
          "1418 °C",
          "1000 - 2000 MPa",
          "–",
          "216 (Modulus)",
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
        ["ASTM SB575 / SB622", "0.4mm", "Y"],
        ["Hastelloy C276 Coils", "0.5mm", "Y"],
        ["Hastelloy C22 Coils", "0.8mm", "Y"],
        ["Hastelloy B2 / B3 Coils", "1mm", "Y"],
        ["Hastelloy C2000 Coils", "1.2mm", "Y"],
        ["ASTM SB575 / SB622", "1.6mm", "Y"],
        ["Hastelloy C276 Coils", "2mm", "Y"],
        ["Hastelloy C22 Coils", "3mm", "Y"],
        ["Hastelloy B2 / B3 Coils", "4mm", "Y"],
        ["Hastelloy C2000 Coils", "5mm", "Y"],
        ["ASTM SB575 / SB622", "6mm", "Y"],
        ["Hastelloy C276 Coils", "8mm", "Y"],
        ["Hastelloy C22 Coils", "10mm", "Y"],
        ["Hastelloy B2 / B3 Coils", "12mm", "Y"],
        ["Hastelloy C2000 Coils", "16mm", "Y"],
        ["ASTM SB575 / SB622", "20mm", "Y"],
        ["Hastelloy C276 Coils", "25mm", "Y"],
      ],
      note: "* Custom widths and slitting services available for all listed Hastelloy grades. Large diameter coils available on request.",
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
          "Available in all Hastelloy Grades",
          "—",
        ],
      ],
    },

    specializedProducts: [
      "Hastelloy C276 / C22 Corrosion Resistant Coils",
      "Hastelloy B2 / B3 Acid Resistant Alloy Coils",
      "ASTM B575 Hastelloy Hot Rolled (HR) Coils",
      "ASME SB575 Hastelloy Cold Rolled (CR) Coils",
      "Hastelloy C2000 / C59 Versatile Alloy Coils",
      "Hastelloy Slit Coils & Industrial Strips Dealer",
      "Hastelloy Alloy Coils Cut-to-Size Supplier",
      "Hastelloy C4 & H-N Special Grade Coils",
      "Hastelloy Coils Manufacturer in India",
      "Hastelloy Coils Supplier in Mumbai",
      "INOX 2.4819 / 2.4602 Alloy Coils Exporter",
      "UNS N10276 / N06022 High Performance Coils",
      "Hastelloy Grade B2 (2.4617) Coil Stockist",
      "Hastelloy Alloy Best Price Supplier in India",
      "Descaled Hastelloy C276 Coil Stockholder",
      "Hastelloy Custom Thickness Precision Coils",
      "Spring Hard & Soft Annealed Hastelloy Coils",
      "Nickel Alloy C276 Coil Exporter in India",
    ],

    relatedSearches: [
      "Hastelloy C276 Coil Price List",
      "Hastelloy C22 Coil Weight Calculator",
      "Hastelloy B2 Coil Dimensions",
      "Hastelloy B3 Coil Price Per Kg in India",
      "Hastelloy Coil Manufacturer in Mumbai",
      "Hastelloy C2000 Coil Supplier in India",
      "ASTM B575 Hastelloy Coil Thickness Tolerance",
      "ASME SB575 Hastelloy C276 Coil Price List PDF",
      "Hastelloy C22 Coil Mechanical Properties",
      "Hastelloy B2 Coil Chemical Composition",
      "Hastelloy Coil Stockist in Pune",
      "Hastelloy C276 Coil Exporter",
      "Hastelloy Alloy Coil Price in Mumbai",
      "Hastelloy Coil Gauge Chart",
      "Hastelloy Slit Coil Price",
      "Hastelloy C276 Strip Coil Supplier",
      "Hastelloy Hot Rolled Coil Price",
      "Hastelloy Cold Rolled Coil Manufacturers",
      "Hastelloy Coil Catalog PDF",
      "Hastelloy C276 Coil Equivalent Grades",
      "Hastelloy C22 Coil Price per Meter",
      "Hastelloy B3 Coil updated price list",
      "Hastelloy C276 Coil size chart",
      "Hastelloy Alloy Coil updated Price List",
      "Hastelloy Coil Manufacturers in Gujarat",
      "Hastelloy Coil Stockyards in India",
      "Hastelloy C276 Coil thickness chart",
      "Hastelloy B2 Coil Price in India",
      "Top 100 Hastelloy Coil Dealers in Pune",
      "Buy Hastelloy C276 Coil Online",
      "Hastelloy Alloy Coil leading manufacturers in Mumbai",
      "Hastelloy C22 Coil descaled finish",
      "Hastelloy B3 Coil 2B Finish price",
      "Hastelloy C2000 Coil BA Finish stockist",
      "UNS N10276 Coil Price India",
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
              <SectionTitle>Stock Availability of Hastelloy Coils</SectionTitle>
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
              <SectionTitle>Specification of Hastelloy Coils</SectionTitle>
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
              <SectionTitle>
                Hastelloy Alloy Coil Stock Availability
              </SectionTitle>
              <Table
                headers={productData.availabilityChart.headers}
                rows={productData.availabilityChart.rows}
              />
              <p className="text-xs text-gray-500 mt-2">
                {productData.availabilityChart.note}
              </p>
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Hastelloy Cold Rolled Coils Weight Chart
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM B575, ASME SB 575 / SB 622 Type Descaled Coils
              </p>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Hastelloy Alloy Coils
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
                Searches Related to Hastelloy Alloy Coils
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

export default HastelloyCoils;
