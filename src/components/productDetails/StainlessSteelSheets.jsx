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
import productImage from "../../assets/images/productImage/sheets.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Stock Availability Images (using sheet-specific or unified images)
import hotRolledSheetsImage from "../../assets/images/stock/hot-rolled-sheets.jpg";
import coldRolledSheetsImage from "../../assets/images/stock/cold-rolled-sheets.jpg";
import perforatedSheetsImage from "../../assets/images/stock/perforated-sheets.jpg";

const StainlessSteelSheets = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Stainless Steel Sheets Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    subtitle:
      "Premium Quality ASTM A240 / ASME SA240 Stainless Steel Sheets – Comprehensive Range of Austenitic, Heat-Resistant & Specialized Grades for Industrial, Marine, Chemical & High-Temperature Applications",

    technicalOverview: {
      title: "Stainless Steel Sheets: Technical Overview",
      description:
        "Stainless steel sheets are a fundamental component in industrial fabrication, offering a versatile range of corrosion resistance, aesthetic finishes, and mechanical properties. These austenitic and martensitic grades are engineered to perform across a wide thermal spectrum, from cryogenic storage to high-heat furnace environments. Unlike thicker plates, sheets are prioritized for their surface quality, formability, and precision thickness.",
    },

    gradeBreakdown: [
      {
        title: "Standard Austenitic Grades: 304/304L & 316/316L",
        items: [
          "SS 304/304L (UNS S30400/S30403): The global standard for general-purpose applications. Grade 304L (low carbon) prevents carbide precipitation during welding. These sheets are ideal for food processing, kitchenware, and architectural panels.",
          "SS 316/316L (UNS S31600/S31603): Infused with Molybdenum to combat chloride-induced pitting. These are the primary choice for pharmaceutical equipment, chemical containers, and coastal architectural projects.",
        ],
      },
      {
        title: "High-Temperature & Heat-Resistant Grades",
        items: [
          "SS 309 & 310S: High-alloy grades designed for oxidation resistance. 310S (UNS S31008) is specifically utilized for continuous service up to 1100°C, making it essential for furnace parts and combustion chambers.",
          "SS 321 (UNS S32100): Titanium-stabilized to eliminate intergranular corrosion in the 'sensitization' temperature range ($427°C$ to $815°C$). It is widely used in jet engine parts and exhaust systems.",
          "253 MA (UNS S30815): A high-performance lean austenitic grade that uses rare earth metals and nitrogen to provide superior creep strength and oxidation resistance up to 1150°C, often outperforming 310S in cyclic heat conditions.",
        ],
      },
      {
        title: "Specialized Grades",
        items: [
          "SS 904L (UNS N08904): A high-alloy austenitic stainless steel with copper additions, providing exceptional resistance to strong reducing acids. Ideal for sulfuric acid plants and pulp/paper industries.",
          "SS 17-4 PH (UNS S17400): A chromium-copper precipitation-hardening martensitic stainless steel. Provides outstanding combination of high strength, hardness, and moderate corrosion resistance.",
        ],
      },
    ],

    keyFeatures: [
      "Comprehensive range of grades: 304, 304L, 308, 309, 310S, 316, 316L, 317L, 321, 904L, 17-4 PH, 253 MA & more",
      "Surface finishes: No.1, 2B, BA, No.4, No.8 Mirror, Hairline, Embossed, PVC Coated",
      "Thickness: 0.3 mm to 120 mm | Width to 3500mm | Length up to 6000mm+",
      "Value Added Services: Laser/Plasma/Waterjet Cutting, CNC Bending, Polishing, Annealing",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Perforated Sheets",
      "Excellent corrosion resistance, high-temperature stability & mechanical strength",
      "Complies with ASTM A240 / ASME SA240, ASTM A666, EN 10088-2",
    ],

    applications: [
      "Food processing and kitchenware",
      "Pharmaceutical equipment and chemical containers",
      "Architectural panels and coastal projects",
      "Furnace parts and combustion chambers",
      "Jet engine parts and exhaust systems",
      "Sulfuric acid plants and pulp/paper industries",
      "Aerospace and high-strength components",
      "High-heat and cyclic temperature environments",
    ],

    stockAvailability: {
      hotRolledSheets: {
        title: "Hot Rolled Sheets",
        image: hotRolledSheetsImage,
        items: [
          "SS 304/316 HR Sheets",
          "SS 310S/321 HR Plates",
          "ASME SA240 No.1 Finish",
        ],
      },
      coldRolledSheets: {
        title: "Cold Rolled Sheets",
        image: coldRolledSheetsImage,
        items: [
          "SS 304L/316L 2B Sheets",
          "SS 904L/317L CR Stock",
          "Bright Annealed (BA) Finish",
        ],
      },
      perforatedSheets: {
        title: "Perforated Sheets",
        image: perforatedSheetsImage,
        items: [
          "SS 304/316 Perforated",
          "Custom CNC Hole Patterns",
          "Decorative & Filter Sheets",
        ],
      },
    },

    specifications: {
      standards: "ASTM A240 / ASME SA240, ASTM A666, EN 10088-2",
      thicknessSize:
        "0.3 mm to 120 mm | Width to 3500mm | Length up to 6000mm+",
      surfaceFinishes:
        "No.1, 2B, BA, No.4, No.8 Mirror, Hairline, Embossed, PVC Coated",
      valueAddedServices:
        "Laser/Plasma/Waterjet Cutting, CNC Bending, Polishing, Annealing",
    },

    equivalentGrades: {
      headers: [
        "AISI/ASTM",
        "UNS",
        "WERKSTOFF NR.",
        "EN / AFNOR / JIS STANDARDS",
      ],
      rows: [
        [
          "304 / 304L",
          "S30400 / S30403",
          "1.4301 / 1.4307",
          "X5CrNi18-10 / SUS 304L",
        ],
        [
          "308 / 309",
          "S30800 / S30900",
          "1.4303 / 1.4828",
          "X15CrNiSi20-12 / SUS 309",
        ],
        ["310S", "S31008", "1.4845", "X8CrNi25-21 / Z12CN25-21"],
        [
          "316 / 316L",
          "S31600 / S31603",
          "1.4401 / 1.4404",
          "X2CrNiMo17-12-2 / SUS 316L",
        ],
        [
          "321 / 317L",
          "S32100 / S31703",
          "1.4541 / 1.4438",
          "X6CrNiTi18-10 / X2CrNiMoN19-14-4",
        ],
        ["17-4 PH", "S17400", "1.4542", "X5CrNiCuNb16-4 / Grade 630"],
        ["904L", "N08904", "1.4539", "X1NiCrMoCu25-20-5 / URANUS B6"],
        ["253 MA", "S30815", "1.4835", "X9CrNiSiNCe21-11-2 / Avesta 253MA"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "C (Max)", "Cr", "Ni", "Mo", "Mn", "Others"],
      rows: [
        ["304L", "0.03", "18.0-20.0", "8.0-12.0", "-", "2.0", "-"],
        ["310S", "0.08", "24.0-26.0", "19.0-22.0", "-", "2.0", "Si: 1.50"],
        ["316L", "0.03", "16.0-18.0", "10.0-14.0", "2.0-3.0", "2.0", "-"],
        ["321", "0.08", "17.0-19.0", "9.0-12.0", "-", "2.0", "Ti: 5x(C+N) min"],
        [
          "17-4 PH",
          "0.07",
          "15.0-17.5",
          "3.0-5.0",
          "-",
          "1.0",
          "Cu: 3.0-5.0 | Nb: 0.15-0.45",
        ],
        [
          "904L",
          "0.02",
          "19.0-23.0",
          "23.0-28.0",
          "4.0-5.0",
          "2.0",
          "Cu: 1.0-2.0",
        ],
        [
          "253 MA",
          "0.05-0.1",
          "20.0-22.0",
          "10.0-12.0",
          "-",
          "0.8",
          "Si: 1.4-2.0 | Ce: 0.03-0.08",
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
        "Hardness (Brinell)",
      ],
      rows: [
        ["SS 304/L", "8.00", "485 min", "170 min", "40%", "201 max"],
        ["SS 316/L", "8.00", "485 min", "170 min", "40%", "217 max"],
        ["SS 310S", "7.90", "515 min", "205 min", "40%", "192 max"],
        ["SS 17-4 PH", "7.80", "1100 (H900)", "1000 min", "15%", "360 max"],
        ["SS 904L", "8.00", "490 min", "220 min", "35%", "190 max"],
        ["SS 253 MA", "7.80", "600 min", "310 min", "40%", "210 max"],
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
      "SS 304/304L & 316/316L: Dairy, Food Grade & Marine Environment Sheets",
      "SS 310S & 253 MA: High-Temperature Oxidation & Heat Resistant Sheets",
      "SS 904L & 317L: Severe Corrosion & Acid Resistant Super Austenitic Sheets",
      "SS 17-4 PH: High-Strength Aerospace & Gear Component Sheets",
      "SS 308, 309 & 321: Specialized Welding & Stabilized Exhaust System Sheets",
      "Custom Perforated SS Sheets with Precision Mirror (No.8) & BA Finishes",
      "Large Format Hot Rolled (HR) Plates and Precision Cold Rolled (CR) Coils",
      "Specialized in Shailesh Pipe Fitting India Quality Standard Export Materials",
    ],

    relatedSearches: [
      "SS 304 Sheet Price per Kg Mumbai",
      "Stainless Steel 316L Sheet Supplier India",
      "SS 310S Heat Resistant Sheet Weight Chart",
      "SS 904L Sheet Thickness Tolerance ASTM A240",
      "SS 321 Stabilized Sheet Price List 2026",
      "17-4 PH Stainless Steel Sheet Stockist Maharashtra",
      "253 MA UNS S30815 Sheet High Temp Application",
      "SS 317L High Moly Sheet Price per Sq Meter",
      "SS 309 Decorative Mirror Finish Sheets",
      "Buy Stainless Steel Sheets Online India",
      "SS 308 Filler Compatible Sheets",
      "Top 100 Stainless Steel Sheet Dealers Mumbai",
      "SS 304L Cold Rolled CR Sheet Mirror Polish",
      "SS 316 HR Hot Rolled Plate Weight Calculator",
      "904L Acid Resistant Sheet Exporter",
      "SS 17-4 PH Hardness Chart",
      "253MA vs 310S Corrosion Comparison",
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
              <SectionTitle>Stainless Steel Grades & Applications</SectionTitle>
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
                Stock Availability: Stainless Steel Sheet Inventory
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
                Technical Specifications: Stainless Steel Sheets
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
                Specialized in Premium Stainless Steel Sheet Solutions
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
                Searches Related to Stainless Steel Sheets
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

export default StainlessSteelSheets;
