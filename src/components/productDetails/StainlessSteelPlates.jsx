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

const StainlessSteelPlates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Stainless Steel Plates Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    subtitle:
      "Premium Quality ASTM A240 / ASME SA240 Stainless Steel Plates – Comprehensive Range of Austenitic, Heat-Resistant & Specialized Grades for Industrial, Marine, Chemical & High-Temperature Applications",

    technicalOverview: {
      title:
        "Stainless Steel Plates: Technical Overview and Grade Characteristics",
      description:
        "Stainless steel plates are the foundational material for modern industrial infrastructure, offering a diverse spectrum of corrosion resistance, mechanical strength, and thermal stability. From high-pressure chemical reactors to heat-treatment furnace liners, these austenitic and martensitic grades are engineered to perform under varied environmental and mechanical stresses.",
    },

    gradeBreakdown: [
      {
        title: "Standard Austenitic Grades: 304/304L & 316/316L",
        items: [
          "SS 304/304L (UNS S30400/S30403): The most versatile and widely used stainless steel. Grade 304L features lower carbon to prevent sensitization during welding. These plates are ideal for food processing equipment, architectural cladding, and storage tanks.",
          "SS 316/316L (UNS S31600/S31603): Enhanced with Molybdenum for superior resistance to chlorides and marine environments. These plates are the primary choice for pharmaceutical vessels, chemical plant equipment, and marine-grade fabrication.",
        ],
      },
      {
        title: "High-Temperature & Heat-Resistant Grades",
        items: [
          "SS 309 & 310S: High-nickel and high-chromium alloys designed for exceptional oxidation resistance. 310S (UNS S31008) is specifically used for continuous service up to 1100°C (2012°F) in furnace parts and heat exchangers.",
          "SS 321 (UNS S32100): Titanium-stabilized to prevent intergranular corrosion. Ideal for high-temperature applications in the range of 427°C to 815°C, such as aircraft exhaust manifolds and expansion joints.",
          "253 MA (UNS S30815): A lean austenitic heat-resistant alloy with rare earth metals and nitrogen. Offers high creep strength and excellent oxidation resistance up to 1150°C, outperforming 310S in certain cyclic conditions.",
        ],
      },
      {
        title: "Specialized Corrosion & High-Strength Grades",
        items: [
          "SS 317L (UNS S31703): A high-molybdenum version of 316L, providing enhanced resistance to chemical attack by sulfuric and phosphoric acids, particularly in the pulp and paper industry.",
          "SS 904L (UNS N08904): A high-alloy austenitic steel with copper additions. Offers exceptional resistance to strong reducing acids and is frequently used in sulfuric acid plants, scrubbers, and seawater cooling equipment.",
          "SS 17-4 PH (UNS S17400): A precipitation-hardening martensitic grade providing an outstanding combination of high strength and hardness. Essential for pump shafts, turbine blades, and mechanical components requiring high load-bearing capacity.",
          "SS 308: While primarily a welding filler grade, SS 308 plates are utilized in specialized environments where a slightly higher alloy content than 304 is required to ensure long-term structural integrity.",
        ],
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing and Quality Standards",
      description:
        "Our stainless steel plates are manufactured to meet global specifications, including ASTM A240 and ASME SA240. We offer these in several processing formats:",
      items: [
        "Hot Rolled (HR): Typically supplied in No.1 finish, ideal for heavy-duty industrial fabrication and structural tanks.",
        "Cold Rolled (CR): For applications requiring tighter dimensional tolerances and a superior surface finish.",
      ],
    },

    keyFeatures: [
      "Comprehensive range of grades: 304, 304L, 308, 309, 310S, 316, 316L, 317L, 321, 904L, 17-4 PH, 253 MA & more",
      "Surface finishes: 2B, BA, No.1, Mirror, Satin",
      "Thickness: 0.3 mm to 120 mm | Width up to 3500mm | Length up to 6000mm",
      "Hardness: Soft, Half Hard, Spring Hard",
      "Value Added Services: Waterjet/Plasma Cutting, Bending, Annealing, Pickling, Polish",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Chequered Plates",
      "Excellent corrosion resistance, high-temperature stability & mechanical strength",
      "Complies with ASTM A240 / ASME SA240, EN 10088-2",
    ],

    applications: [
      "Food processing equipment and storage tanks",
      "Pharmaceutical vessels and chemical plant equipment",
      "Architectural cladding and marine-grade fabrication",
      "Furnace parts and heat exchangers",
      "Aircraft exhaust manifolds and expansion joints",
      "Sulfuric acid plants, scrubbers, and seawater cooling equipment",
      "Pump shafts, turbine blades, and high-strength components",
      "High-temperature and corrosive environments",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR)",
        image: hotRolledPlatesImage,
        items: [
          "SS 304/L & 316/L HR Plates",
          "SS 310S & 321 HR Heavy Plates",
          "Austenitic SS HR ASME SA 240",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR)",
        image: coldRolledPlatesImage,
        items: [
          "SS 304/316 Precision CR Sheets",
          "SS 904L & 17-4 PH CR Stock",
          "253 MA Heat Resistant CR Sheets",
        ],
      },
      chequeredPlates: {
        title: "Chequered & Custom",
        image: chequeredPlatesImage,
        items: [
          "SS 304/316 Chequered Plates",
          "Anti-Skid Austenitic Floor Plates",
          "Custom Cut-to-Size SS Blanks",
        ],
      },
    },

    specifications: {
      standards: "ASTM A240 / ASME SA240, EN 10088-2",
      thicknessSize:
        "0.3 mm to 120 mm | Width up to 3500mm | Length up to 6000mm",
      surfaceHardness:
        "2B, BA, No.1, Mirror, Satin | Soft, Half Hard, Spring Hard",
      valueAddedServices:
        "Waterjet/Plasma Cutting, Bending, Annealing, Pickling, Polish",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS NO.",
        "WERKSTOFF NR.",
        "International Standards (JIS / EN / AFNOR)",
      ],
      rows: [
        [
          "SS 304 / 304L",
          "S30400 / S30403",
          "1.4301 / 1.4307",
          "SUS 304/L | X5CrNi18-10 | Z7CN18-09",
        ],
        [
          "SS 316 / 316L",
          "S31600 / S31603",
          "1.4401 / 1.4404",
          "SUS 316/L | X5CrNiMo17-12-2 | Z7CND17-11-02",
        ],
        ["SS 310S", "S31008", "1.4845", "SUS 310S | X15CrNi25-21 | Z12CN25-20"],
        [
          "SS 904L",
          "N08904",
          "1.4539",
          "SUS 904L | X1NiCrMoCu25-20-5 | Z2 NCDU 25-20",
        ],
        ["SS 321", "S32100", "1.4541", "SUS 321 | X6CrNiTi18-10 | Z6CNT18-10"],
        [
          "SS 17-4 PH",
          "S17400",
          "1.4542",
          "SUS 630 | X5CrNiCuNb16-4 | Type 630",
        ],
        [
          "253 MA",
          "S30815",
          "1.4835",
          "UNS S30815 | X9CrNiSiNCe21-11-2 | SS 2368",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Cr", "Ni", "Mo", "C (Max)", "Others"],
      rows: [
        [
          "SS 304",
          "18.0 - 20.0",
          "8.0 - 11.0",
          "-",
          "0.08",
          "Mn: 2.0, Si: 0.75",
        ],
        [
          "SS 316L",
          "16.0 - 18.0",
          "10.0 - 14.0",
          "2.0 - 3.0",
          "0.035",
          "Mn: 2.0, P: 0.045",
        ],
        [
          "SS 310S",
          "24.0 - 26.0",
          "19.0 - 21.0",
          "0.75 Max",
          "0.08",
          "Si: 1.0 Max",
        ],
        [
          "SS 904L",
          "19.0 - 23.0",
          "23.0 - 28.0",
          "4.0 - 5.0",
          "0.02",
          "Cu: 1.0 - 2.0, Mn: 2.0",
        ],
        [
          "SS 321",
          "17.0 - 19.0",
          "9.0 - 12.0",
          "-",
          "0.08",
          "Ti: 5(C+N) - 0.70",
        ],
        [
          "17-4 PH",
          "15.0 - 17.5",
          "3.0 - 5.0",
          "-",
          "0.07",
          "Cu: 3.0 - 5.0, Nb: 0.15-0.45",
        ],
        [
          "253 MA",
          "20.0 - 22.0",
          "10.0 - 12.0",
          "-",
          "0.10",
          "Si: 1.4 - 2.0, Ce: 0.03-0.08",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade Group",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Density (g/cm³)",
      ],
      rows: [
        ["304 / 316 / 321", "515 MPa", "205 MPa", "35% Min", "8.00"],
        ["SS 310S / 317L", "515 MPa", "205 MPa", "40% Min", "7.90"],
        ["SS 904L", "490 MPa", "220 MPa", "35% Min", "7.95"],
        ["17-4 PH (H900)", "1310 MPa", "1170 MPa", "10% Min", "7.75"],
        ["253 MA", "600 MPa", "310 MPa", "40% Min", "7.80"],
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
        "Thickness",
        "KG/M²",
        "2000 x 1000",
        "2500 x 1250",
        "3000 x 1500",
      ],
      rows: [
        ["1.00 mm", "8.00", "16.00 kg", "25.00 kg", "36.00 kg"],
        ["1.50 mm", "12.00", "24.00 kg", "37.50 kg", "54.00 kg"],
        ["2.00 mm", "16.00", "32.00 kg", "50.00 kg", "72.00 kg"],
        ["3.00 mm", "24.00", "48.00 kg", "75.00 kg", "108.00 kg"],
        ["4.00 mm", "32.00", "64.00 kg", "100.00 kg", "144.00 kg"],
        ["5.00 mm", "40.00", "80.00 kg", "125.00 kg", "180.00 kg"],
        ["6.00 mm", "48.00", "96.00 kg", "150.00 kg", "216.00 kg"],
        ["8.00 mm", "64.00", "128.00 kg", "200.00 kg", "288.00 kg"],
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
        ["0.147 – 0.187 (3.7 – 4.7)", "0.007 (0.18)", "0.0105 (0.2)"],
      ],
    },

    specializedProducts: [
      "SS 304/304L & 316/316L Food Grade & Chemical Plates",
      "SS 310S & 253 MA (S30815) High-Temperature Heat Resistant Plates",
      "SS 904L & 317L Super-Austenitic Corrosion Resistant Plates",
      "SS 17-4 PH (630) Precipitation Hardened High-Strength Plates",
      "SS 321 Titanium Stabilized Plates for High-Heat Fabrications",
      "Mirror (8K), BA, No.4 Hairline & Satin Finish Decorative Plates",
      "Precision Waterjet, Plasma & Laser Cut-to-Size Plate Blanks",
      "Leading ASTM A240 Stainless Steel Plate Manufacturer in Mumbai",
    ],

    relatedSearches: [
      "Stainless Steel 304 Plate Price List 2026",
      "SS 316L Plate Supplier Mumbai",
      "SS 310S Plate Weight Chart PDF",
      "904L Stainless Steel Plate Price per Kg in India",
      "ASTM A240 SS 321 Plate Thickness Tolerance",
      "17-4 PH Plate Stockist in Maharashtra",
      "253 MA Heat Resistant Plate Specification",
      "SS 317L Plate Price in India",
      "SS 309 Plates Manufacturer in Ahmedabad",
      "Stainless Steel Mirror Finish Plate Price",
      "SS 304L Cold Rolled Plate Suppliers",
      "SS 316 HR Plate Thickness Chart",
      "17-4 PH UNS S17400 Plate Dealers Mumbai",
      "Stainless Steel Plate Weight Calculator",
      "Buy SS 904L Plates Online India",
      "Top 100 SS Plate Dealers in Pune",
      "Custom SS Plate Cutting Service Mumbai",
      "Stainless Steel 310S Plate for Kiln Applications",
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
                Stock Availability: Stainless Steel Plates
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
                Technical Specifications: Stainless Steel Plates
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
                Specialized in Premium Stainless Steel Plate Solutions
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
                Searches Related to Stainless Steel Plates
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

export default StainlessSteelPlates;
