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

const IncoloySheets = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Incoloy Sheets Supplier – 800, 800H, 800HT, 825, 925 & 330 (DS 330)",
    subtitle:
      "Premium Quality Incoloy Superalloy Sheets – Nickel-Iron-Chromium Alloys Engineered for High-Temperature Strength, Oxidation Resistance & Corrosion Protection in Extreme Industrial Environments",

    technicalOverview: {
      title: "Incoloy Sheets: Technical Overview",
      description:
        "Incoloy sheets are nickel-iron-chromium superalloys engineered to provide a high-performance, cost-effective solution for environments requiring both high-temperature strength and resistance to various forms of corrosion. These alloys act as a bridge between standard stainless steels and high-nickel superalloys, offering excellent oxidation resistance and structural stability. By balancing nickel and iron content, Incoloy sheets maintain their mechanical properties under prolonged thermal stress and aggressive chemical exposure.",
    },

    gradeBreakdown: [
      {
        title: "Incoloy 800, 800H, and 800HT Sheets",
        description:
          "The 800 Series is the industry standard for high-temperature structural applications requiring creep and rupture strength.",
        items: [
          "Incoloy 800 (UNS N08800): The base grade used for general heat-resistant applications. It offers excellent resistance to oxidation and carburization at temperatures up to 593°C (1100°F).",
          "Incoloy 800H / 800HT (UNS N08810 / N08811): These versions have strictly controlled carbon, aluminum, and titanium contents. Combined with a high-temperature solution anneal, these sheets offer significantly higher creep-rupture properties for service above 593°C.",
        ],
        keyApplications:
          "Heat treat baskets, furnace muffles, steam generator components, and petrochemical process equipment.",
      },
      {
        title: "Incoloy DS and Alloy 330 Sheets",
        description:
          "Incoloy DS (and its close relative Alloy 330) are specialized for the heat-treating industry. With an increased silicon content, these sheets offer superior resistance to 'green rot' and internal oxidation in carburizing and nitriding atmospheres.",
        items: [
          "Thermal Stability: They maintain excellent ductility even after long-term service at high temperatures, making them ideal for sheet components subject to repeated thermal cycling.",
        ],
        keyApplications:
          "Radiant tubes, furnace liners, and heat-treating jigs.",
      },
      {
        title: "Incoloy 825 and 925 Sheets (Corrosion Resistant)",
        description:
          "Incoloy 825 (UNS N08825): A titanium-stabilized alloy with added molybdenum and copper. It provides exceptional resistance to many corrosive environments, particularly sulfuric and phosphoric acids. It is virtually immune to chloride-ion stress corrosion cracking. Incoloy 925 (UNS N09925): An age-hardenable version of Alloy 825. It provides the same superior corrosion resistance but with much higher mechanical strength and hardness through precipitation hardening.",
        keyApplications:
          "Oil and gas downhole equipment, acid production tanks, and high-strength marine structural components.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Incoloy sheets are manufactured to meet stringent international specifications, including ASTM B409, B168, and ASME SB409. We provide these sheets in several formats to suit your specific technical blueprints:",
      items: [
        "Cold Rolled (CR): For applications requiring tighter dimensional tolerances, a superior surface finish (2B or No.4), and precision thickness for intricate fabrication.",
        "Hot Rolled (HR): Typically supplied in No.1 finish, ideal for heavy-duty industrial fabrication and high-temperature furnace components.",
      ],
    },

    keyFeatures: [
      "Nickel-iron-chromium superalloys bridging cost and performance",
      "Excellent high-temperature strength and oxidation resistance",
      "Superior resistance to carburization and nitriding atmospheres",
      "Exceptional resistance to chloride-ion stress corrosion cracking",
      "Available in 6 grades: 800, 800H, 800HT, 825, 925 & DS 330",
      "Age-hardenable grades (825, 925) for high-strength applications",
      "Thickness: 0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      "Hardness & Temper: Soft, 1/4 Hard, 1/2 Hard, Full Hard, Spring Hard",
      "Value Added Services: Laser/Waterjet Cutting, Heat Treatment, Pickling, Minor Fabrication",
      "Complies with ASTM B409, B424, B625 / ASME SB409, SB424",
    ],

    applications: [
      "Heat treat baskets and furnace muffles",
      "Steam generator components and petrochemical equipment",
      "Radiant tubes, furnace liners, and heat-treating jigs",
      "Oil and gas downhole equipment",
      "Acid production tanks and marine structural components",
      "High-temperature oxidation and carburization environments",
      "Power generation and nuclear applications",
      "Chemical processing and acid handling",
    ],

    stockAvailability: {
      hotRolledSheets: {
        title: "Hot Rolled Sheets",
        image: hotRolledSheetsImage,
        items: [
          "Incoloy 800/800H HR Sheets",
          "Incoloy 825 HR Stock",
          "ASME SB 424 HR Alloy Sheets",
        ],
      },
      coldRolledSheets: {
        title: "Cold Rolled Sheets",
        image: coldRolledSheetsImage,
        items: [
          "Incoloy 825 Precision CR",
          "Incoloy 800HT CR Stock",
          "SB 424 CR Alloy Sheets",
        ],
      },
      perforatedSheets: {
        title: "Perforated Sheets",
        image: perforatedSheetsImage,
        items: [
          "Incoloy Perforated Sheets",
          "Custom Cut Incoloy Blanks",
          "SB 424 Perforated Alloy Sheets",
        ],
      },
    },

    specifications: {
      standards: "ASTM B409, B424, B625 / ASME SB409, SB424",
      thicknessSize: "0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      hardnessTemper: "Soft, 1/4 Hard, 1/2 Hard, Full Hard, Spring Hard",
      valueAddedServices:
        "Laser/Waterjet Cutting, Heat Treatment, Pickling, Minor Fabrication",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "WERKSTOFF NR.",
        "UNS NO.",
        "JIS / AFNOR / GOST STANDARDS",
      ],
      rows: [
        [
          "Incoloy 800",
          "1.4876",
          "N08800",
          "NCF 800 | NA 15 | ??670 | Z8NC32-21",
        ],
        [
          "Incoloy 800H/HT",
          "1.4958 / 1.4876",
          "N08810 / N08811",
          "NCF 800H | NA 15(H) | X5NiCrAlTi31-20",
        ],
        [
          "Incoloy 825",
          "2.4858",
          "N08825",
          "NCF 825 | NA 16 | ??703 | NiCr21Mo",
        ],
        [
          "Incoloy 925",
          "-",
          "N09925",
          "NCF 925 | High Strength Age-Hardenable",
        ],
        ["DS 330", "1.4862", "N08330", "Heat Resistant Ra330 Equivalent"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Cr", "Fe", "Cu", "Al + Ti", "Mo", "C (Max)"],
      rows: [
        [
          "800/800H",
          "30.0-35.0",
          "19.0-23.0",
          "39.5 min",
          "0.75 max",
          "0.30-1.20",
          "-",
          "0.10",
        ],
        [
          "825",
          "38.0-46.0",
          "19.5-23.5",
          "22.0 min",
          "1.5-3.0",
          "0.6-1.2 (Ti)",
          "2.5-3.5",
          "0.05",
        ],
        [
          "925",
          "42.0-46.0",
          "19.5-22.5",
          "22.0 min",
          "1.5-3.0",
          "1.9-2.4 (Ti)",
          "2.5-3.5",
          "0.03",
        ],
        [
          "DS 330",
          "34.5-41.0",
          "17.0-19.0",
          "Balance",
          "0.30 max",
          "-",
          "-",
          "0.10",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade Name",
        "Density (g/cm³)",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Melting Point",
        "Elongation (%)",
      ],
      rows: [
        ["Incoloy 800/825", "7.94", "520 MPa", "205 MPa", "1385 °C", "30%"],
        ["Incoloy 925", "8.05", "1210 MPa", "810 MPa", "1343 °C", "24%"],
        ["Incoloy DS 330", "7.94", "520 MPa", "205 MPa", "1385 °C", "30%"],
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
      "Incoloy 800 / 800H / 800HT High-Temperature Oxidation Resistant Sheets",
      "Incoloy 825 & 925 Acid-Resistant & High-Strength Alloy Sheets",
      "Incoloy DS 330 Specialized Heat Treatment & Furnace Sheets",
      "ASTM B409 / ASME SB409 & B424 Precision Industrial Material",
      "Custom Perforated, Embossed & Mirror Finish Incoloy Sheets",
      "Precision Waterjet, Plasma & Laser Cutting for Incoloy Blanks",
      "Leading Incoloy Sheet Manufacturer & Global Exporter in Mumbai",
      "Advanced Solutions for Petrochemical, Power Gen & Marine Industries",
    ],

    relatedSearches: [
      "Incoloy 800 Sheet Price List 2026",
      "Incoloy 825 Sheet Supplier Mumbai",
      "Incoloy 800HT Sheet Weight Calculator",
      "Incoloy 925 High Strength Sheet Price India",
      "ASTM B409 Incoloy 800H Specification",
      "ASME SB424 Incoloy 825 Sheet Tolerance Chart",
      "Incoloy DS 330 Sheet Manufacturer India",
      "Incoloy 800 Cold Rolled Sheet Stockist Maharashtra",
      "Buy Incoloy Sheets PDF Catalogue",
      "Incoloy Alloy Sheet Dimensions and Grade Chart",
      "Incoloy 825 Bright Annealed Sheet Price India",
      "Incoloy 800 HR Hot Rolled Sheets Mumbai",
      "Top 100 Incoloy Sheet Dealers Pune",
      "Incoloy 925 Age-Hardenable Sheet Stockyards",
      "Incoloy 800H Heat Resistant Sheet Price List",
      "Incoloy Sheet Equivalent Grades India",
      "Cost of Incoloy Sheet Exporter Mumbai",
      "Incoloy Sheet Thickness Tolerance Chart ASTM B424",
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
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
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
              <SectionTitle>
                Stock Availability: Incoloy High-Temperature Sheets
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
                Technical Specifications: Incoloy Sheets
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
                Specialized in High-Performance Incoloy Sheet Solutions
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
              <SectionTitle>Searches Related to Incoloy Sheets</SectionTitle>
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

export default IncoloySheets;
