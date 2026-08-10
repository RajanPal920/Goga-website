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
// Additional stock images for coils (can use existing or coil-specific)
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";
import efwImage from "../../assets/images/stock/efw.jpg";

const StainlessSteelCoils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Stainless Steel Coils Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    subtitle:
      "Premium Quality ASTM A240 / ASME SA240 Stainless Steel Coils – Comprehensive Range of Austenitic, Heat-Resistant & Specialized Grades for Industrial, Marine, Chemical & High-Temperature Applications",

    technicalOverview: {
      title:
        "Stainless Steel Coils: Technical Overview and Grade Characteristics",
      description:
        "Stainless steel coils are the foundational material for modern industrial infrastructure, offering a versatile range of corrosion resistance, mechanical strength, and thermal stability. From standard architectural applications to extreme chemical processing, these austenitic and martensitic grades are engineered to perform under diverse environmental stresses. Our coils are manufactured to meet global specifications, including ASTM A240 and ASME SA240, available in Cold Rolled (CR), Hot Rolled (HR), and Slit Coils formats.",
    },

    gradeBreakdown: [
      {
        title: "Standard Austenitic Grades: 304/304L & 316/316L",
        items: [
          "SS 304/304L (UNS S30400/S30403): The most widely used '18/8' stainless steel. Grade 304L features lower carbon to prevent sensitization during welding. Industry standard for food processing, kitchen equipment, and architectural paneling.",
          "SS 316/316L (UNS S31600/S31603): Enhanced with Molybdenum, these coils offer superior resistance to chlorides and marine environments. Primary choice for pharmaceutical equipment, chemical tankers, and coastal infrastructure.",
        ],
      },
      {
        title: "High-Temperature & Heat-Resistant Grades",
        items: [
          "SS 309 & 310S: High-nickel and high-chromium alloys designed for oxidation resistance. 310S (UNS S31008) is specifically used for continuous service up to 1100°C (2012°F) in furnace parts and heat treatment equipment.",
          "253 MA (UNS S30815): A lean austenitic heat-resistant grade with rare earth metals and nitrogen additions. Provides excellent creep strength and oxidation resistance, often outperforming 310S in cyclic temperature environments.",
          "SS 321 (UNS S32100): Titanium-stabilized to prevent intergranular corrosion. Ideal for high-temperature applications in the range of 427°C to 815°C, such as aircraft exhaust stacks and manifold systems.",
        ],
      },
      {
        title: "Specialized Corrosion & High-Strength Grades",
        items: [
          "SS 317L (UNS S31703): A low-carbon, high-molybdenum version of 316L, providing enhanced resistance to chemical attack by sulfuric and phosphoric acids.",
          "SS 904L (UNS N08904): A non-stabilized high-alloy austenitic steel with copper additions. Offers exceptional resistance to strong reducing acids, widely used in pulp and paper industries and sulfuric acid plants.",
          "SS 17-4 PH (UNS S17400): A chromium-copper precipitation-hardening martensitic stainless steel. Provides outstanding combination of high strength, hardness, and moderate corrosion resistance, essential for aerospace components and pump shafts.",
          "SS 308: Primarily used as a filler metal or for specialized surfacing applications requiring a slightly higher alloy content than standard 304.",
        ],
      },
    ],

    keyFeatures: [
      "Comprehensive range of grades: 304, 304L, 316, 316L, 310S, 904L, 321, 317L, 17-4 PH, 253 MA & more",
      "Cold Rolled (CR): 2B, BA, No.4, and Mirror finishes for high surface aesthetics",
      "Hot Rolled (HR): No.1 finish for heavy-duty structural fabrication",
      "Slit Coils: Precision-slit to narrow widths for automated stamping and roll-forming lines",
      "Thickness range: 0.2mm – 5.0mm and above",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM A240 / ASME SA240 standards",
      "MTC EN 10204 3.1 / 3.2 Test Certificates available",
    ],

    applications: [
      "Food processing and kitchen equipment",
      "Pharmaceutical equipment and chemical tankers",
      "Marine and coastal infrastructure",
      "Aerospace components and pump shafts",
      "Furnace parts and heat treatment equipment",
      "Pulp and paper industries",
      "Sulfuric acid plants",
      "Automated stamping and roll-forming lines",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage || seamlessImage,
        items: [
          "SS 304/304L / 316/316L HR Coils",
          "SS 310S / 321 / 347 HR Coils",
          "ASME SA 240 Stainless Steel HR",
          "SS 904L / 253 MA Hot Rolled",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage || weldedImage,
        items: [
          "SS 304 / 316 / 317L CR Coils",
          "SS 17-4 PH / 904L CR Coils",
          "High Mirror Finish NO.8 Coils",
          "BA / 2B Finish Cold Rolled Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage || erwImage,
        items: [
          "Precision Slit SS Coils / Strips",
          "ASME SA 240 Steel Slit Coils",
          "SS 308 / 309 Slit Strips",
          "Custom Width SS Slitting Services",
        ],
      },
    },

    specifications: {
      standard: "ASTM A240 / ASME SA240",
      thicknessRange: "0.2mm – 5.0mm (and above)",
      widthLength: "3.2mm – 1500mm | As Per Requirement",
      surfaceFinish: "2B, BA, No.4, NO.8, Hairline, Scotch Brite, Satin",
      formHardness: "Coil / Strip | Soft to Spring Hard",
      testCertificate: "MTC EN 10204 3.1 / 3.2 Available",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "EN / JIS / AFNOR"],
      rows: [
        [
          "SS 304 / 304L",
          "S30400 / S30403",
          "1.4301 / 1.4307",
          "X5CrNi18-10 / SUS 304L",
        ],
        [
          "SS 316 / 316L",
          "S31600 / S31603",
          "1.4401 / 1.4404",
          "X5CrNiMo17-12-2 / SUS 316L",
        ],
        ["SS 310S", "S31008", "1.4845", "X8CrNi25-21 / SUS 310S"],
        ["SS 321", "S32100", "1.4541", "X6CrNiTi18-10 / SUS 321"],
        ["SS 904L", "N08904", "1.4539", "X1NiCrMoCu25-20-5"],
        ["17-4 PH", "S17400", "1.4542", "X5CrNiCuNb16-4"],
        ["253 MA", "S30815", "1.4835", "X9CrNiSiNCe21-11-2"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "C", "Mn", "Si", "Cr", "Ni", "Mo", "Other"],
      rows: [
        ["304", "0.08 max", "2.0 max", "0.75 max", "18-20", "8-11", "—", "—"],
        [
          "316L",
          "0.035 max",
          "2.0 max",
          "1.0 max",
          "16-18",
          "10-14",
          "2.0-3.0",
          "—",
        ],
        [
          "310S",
          "0.08 max",
          "2.0 max",
          "1.5 max",
          "24-26",
          "19-22",
          "0.75 max",
          "—",
        ],
        [
          "321",
          "0.08 max",
          "2.0 max",
          "1.0 max",
          "17-19",
          "9-12",
          "—",
          "Ti: 5(C+N)-0.70",
        ],
        [
          "904L",
          "0.02 max",
          "2.0 max",
          "1.0 max",
          "19-23",
          "23-28",
          "4.0-5.0",
          "Cu: 1.0-2.0",
        ],
        [
          "17-4 PH",
          "0.07 max",
          "1.0 max",
          "1.0 max",
          "15-17.5",
          "3-5",
          "—",
          "Cu: 3-5, Nb: 0.15-0.45",
        ],
        [
          "253 MA",
          "0.05-0.1",
          "0.8 max",
          "1.4-2.0",
          "20-22",
          "10-12",
          "—",
          "N: 0.14-0.2, Ce: 0.03-0.08",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile Strength",
        "Yield Strength (0.2%)",
        "Elongation",
        "Density",
      ],
      rows: [
        ["304 / 316L", "515 MPa", "205 MPa", "35% - 40%", "8.0 g/cm³"],
        ["310S", "515 MPa", "205 MPa", "40%", "7.9 g/cm³"],
        ["904L", "485 MPa", "275 MPa", "20%", "7.95 g/cm³"],
        ["17-4 PH", "930 MPa (min)", "725 MPa (min)", "16%", "7.8 g/cm³"],
        ["253 MA", "600 MPa", "310 MPa", "40%", "7.8 g/cm³"],
      ],
    },

    thicknessChart: {
      headers: [
        "Thickness (mm)",
        "Availability",
        "Thickness (mm)",
        "Availability",
      ],
      rows: [
        ["0.4 mm", "✅", "4.0 mm", "✅"],
        ["0.5 mm", "✅", "5.0 mm", "✅"],
        ["0.8 mm", "✅", "6.0 mm", "✅"],
        ["1.0 mm", "✅", "8.0 mm", "✅"],
        ["1.2 mm", "✅", "10.0 mm", "✅"],
        ["1.6 mm", "✅", "12.0 mm", "✅"],
        ["2.0 mm", "✅", "16.0 mm", "✅"],
        ["3.0 mm", "✅", "20.0 mm / 25.0 mm", "✅"],
      ],
    },

    weightChart: {
      headers: [
        "Size (mm) [L x W x T]",
        "Approx Weight (Kg)",
        "Size (mm) [L x W x T]",
        "Approx Weight (Kg)",
      ],
      rows: [
        ["4000 x 2000 x 2.0", "136.0", "3000 x 1500 x 5.0", "191.0"],
        ["4000 x 2000 x 3.0", "204.0", "4000 x 2000 x 5.0", "340.0"],
        ["2500 x 1250 x 4.0", "106.0", "2500 x 1250 x 6.0", "159.0"],
        ["3000 x 1500 x 4.0", "153.0", "3000 x 1500 x 6.0", "230.0"],
        ["4000 x 2000 x 4.0", "272.0", "4000 x 2000 x 6.0", "408.0"],
        ["2500 x 1250 x 5.0", "133.0", "—", "—"],
      ],
    },

    gaugeChart: {
      headers: ["Gauge Number", "Inches", "MM (Thickness)"],
      rows: [
        ["8", ".17187", "4.365"],
        ["10", ".14062", "3.571"],
        ["12", ".10937", "2.778"],
        ["14", ".07812", "1.984"],
        ["16", ".0625", "1.587"],
        ["18", ".050", "1.270"],
        ["20", ".0375", ".9525"],
        ["22", ".03125", ".7937"],
        ["24", ".025", ".635"],
        ["26", ".01875", ".4762"],
        ["28", ".01562", ".3963"],
        ["30", ".0125", ".3175"],
      ],
    },

    specializedProducts: [
      "SS 304 / 304L General Purpose Industrial Coils",
      "SS 316 / 316L Marine & Chemical Grade Coils",
      "SS 310S High-Temperature Heat Resistant Coils",
      "SS 17-4 PH Precipitation Hardened Coils",
      "SS 904L / 317L Severe Corrosion Resistant Coils",
      "253 MA (S30815) High-Performance Alloy Coils",
      "SS Coil Manufacturer & Stockist in Mumbai, India",
      "Precision Slit Stainless Steel Strips & Coils",
      "NO.8 Mirror / BA / Scotch Brite Finish SS Coils",
      "Hot Rolled (HR) & Cold Rolled (CR) SS Coils",
      "Full Hard / Half Hard / Soft Annealed Coils",
      "ASTM A240 / ASME SA240 Compliant SS Coils",
      "Specialty Grades SS 308, 309, 321 Coils",
      "Stainless Steel Coil Suppliers at Best Price",
    ],

    relatedSearches: [
      "SS 304 Coil Price List",
      "SS 316L Coil Weight Calculator",
      "SS 310S Coil Dimensions",
      "SS 904L Coil Price Per Kg in India",
      "SS 304 Coil Manufacturer in Mumbai",
      "SS 316 Coil Supplier in India",
      "ASTM A240 SS 304 Coil Thickness Tolerance",
      "ASME SA240 SS 316 Coil Price List PDF",
      "SS 304 Coil Mechanical Properties",
      "SS 316 Coil Chemical Composition",
      "SS Coil Stockist in Pune",
      "SS 304 Coil Exporter",
      "SS 316 Coil Price in Mumbai",
      "SS Coil Gauge Chart",
      "SS 304 Slit Coil Price",
      "SS 316 Strip Coil Supplier",
      "SS 304 Hot Rolled Coil Price",
      "SS 316 Cold Rolled Coil Manufacturers",
      "SS Coil Catalog PDF",
      "SS 304 Coil Equivalent Grades",
      "SS 316 Coil Price per Meter",
      "SS 304 updated price list",
      "SS 316 Coil size chart",
      "SS Coil Manufacturers in Gujarat",
      "SS 304 Coil Stockyards in India",
      "SS 316 Coil thickness chart",
      "SS 304 Coil Price in India",
      "Top 100 SS Coil Dealers in Mumbai",
      "Buy SS 304 Coil Online",
      "SS 316 leading manufacturers in India",
      "SS 304 Coil descaled finish",
      "SS 316 Coil 2B Finish price",
      "SS 304 Coil BA Finish stockist",
      "UNS S30400 Coil Price India",
      "UNS S31603 Coil Price Mumbai",
      "17-4 PH Coil Price India",
      "253 MA Coil Stockist Mumbai",
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
              <SectionTitle>Grade Characteristics & Applications</SectionTitle>
              {productData.gradeBreakdown.map((section, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-xl font-semibold text-[#173F52] mb-2">
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
                Stock Availability of Stainless Steel Coils
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
                Specification of Stainless Steel Coils
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
              <SectionTitle>Mechanical & Physical Properties</SectionTitle>
              <Table
                headers={productData.mechanicalProperties.headers}
                rows={productData.mechanicalProperties.rows}
              />
            </section>

            {/* Thickness Chart */}
            <section className="mb-8">
              <SectionTitle>
                Thickness Availability (ASTM A240 / ASME SA240)
              </SectionTitle>
              <p className="text-sm text-gray-600 mb-2">
                Available for Grades: 304, 304L, 308, 309, 310S, 316, 316L,
                317L, 321, 904L
              </p>
              <Table
                headers={productData.thicknessChart.headers}
                rows={productData.thicknessChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Cold Rolled Descaled Coil Weight & Size Chart
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Gauge Chart */}
            <section className="mb-8">
              <SectionTitle>
                17-4 PH & 253 MA Coils Thickness Gauge Chart
              </SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Stainless Steel Coils (All Grades)
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
                Searches Related to Stainless Steel Coils
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

export default StainlessSteelCoils;
