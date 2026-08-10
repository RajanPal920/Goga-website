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
import customPlatesImage from "../../assets/images/stock/custom-plates.jpg";

const Monel400Plates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Monel 400 Plates Supplier",
    subtitle:
      "Premium Quality ASTM B127 / ASME SB127 Monel 400 (UNS N04400) Plates – High-Performance Nickel-Copper Alloy for Exceptional Resistance to Seawater, Hydrofluoric Acid & High-Temperature Steam",

    technicalOverview: {
      title: "Monel 400 Plates: Technical Overview",
      description:
        "Monel 400 (UNS N04400) is a solid-solution nickel-copper alloy that can only be hardened by cold working. It offers high strength and toughness over a wide temperature range and excellent resistance to many corrosive media. Composed of approximately 63% Nickel and 30% Copper, this unique chemistry provides a versatile material that bridges the gap between basic stainless steels and expensive highly-alloyed superalloys.",
    },

    keyCharacteristics: [
      {
        title: "Sea Water Resistance",
        description:
          "It is the industry standard for marine engineering. It exhibits excellent resistance to rapidly flowing seawater and is virtually immune to chloride-ion stress corrosion cracking.",
      },
      {
        title: "Acid & Alkali Resistance",
        description:
          "It offers outstanding resistance to hydrofluoric acid in all concentrations up to the boiling point. It is also highly resistant to sulfuric and hydrochloric acids under reducing conditions and is famously resistant to alkalis (caustic soda).",
      },
      {
        title: "Temperature Versatility",
        description:
          "Maintains excellent mechanical properties from sub-zero temperatures up to 1000°F (538°C).",
      },
    ],

    keyApplications: {
      title: "Key Applications",
      items: [
        "Marine Engineering: Ship hulls, heat exchangers, seawater scrubbers, and offshore splash-zone cladding.",
        "Chemical Processing: Equipment for the production of chlorinated hydrocarbons and reactors handling hydrofluoric acid.",
        "Oil & Gas: Crude oil distillation tower internals and sour gas handling equipment.",
        "Power Generation: Feedwater heaters and heat exchanger tubing in nuclear and fossil fuel plants.",
      ],
    },

    availableFormats: {
      title: "Available Formats & Dimensions",
      description:
        "We supply Monel 400 plates in various thicknesses and finishes to match your specific engineering blueprints:",
      items: [
        "Hot Rolled (HR): Typically supplied in a No.1 finish, ideal for heavy-duty industrial tanks, pressure vessels, and marine structural components.",
        "Cold Rolled (CR): For applications requiring a superior surface finish and tighter dimensional tolerances.",
        "Custom Profiles: We provide precision-cut plates using Waterjet, Laser, or Plasma cutting to ensure exact dimensions for your project, reducing material waste and fabrication time.",
      ],
    },

    qualityAssurance: {
      title: "Quality Assurance & Standards",
      description:
        "Our Monel 400 plates are manufactured and tested to meet international standards, including ASTM B127 and ASME SB127.",
      items: [
        "Traceability: Every plate is supplied with a comprehensive EN 10204 3.1 Material Test Certificate (MTC).",
        "Testing: Standard quality protocols include Positive Material Identification (PMI), Ultrasonic Testing (UT) for internal soundness, and mechanical property verification (Tensile, Yield, and Elongation).",
      ],
    },

    keyFeatures: [
      "Exceptional resistance to seawater and hydrofluoric acid",
      "Approximately 63% nickel and 30% copper composition",
      "Virtually immune to chloride-ion stress corrosion cracking",
      "High strength and toughness over a wide temperature range",
      "Maintains properties from sub-zero to 1000°F (538°C)",
      'Thickness: 0.3 mm to 120 mm | Heavy Plates up to 5.00"',
      "Width: 1000mm to 3500mm | Length: 2000mm to 6000mm+",
      "Finish & Processing: Hot Rolled (HR), Cold Rolled (CR), Annealed, Rolling",
      "Hardness & Temper: Soft, 1/4, 1/2, Hard, Spring Hard",
      "Value Added Services: Plasma/Laser Cutting, Cladding, Pickling, Bending",
      "Complies with ASTM B127 / ASME SB127, API Dimensions",
    ],

    applications: [
      "Marine engineering and ship hulls",
      "Heat exchangers and seawater scrubbers",
      "Offshore splash-zone cladding",
      "Chemical processing and hydrofluoric acid handling",
      "Crude oil distillation tower internals",
      "Sour gas handling equipment",
      "Feedwater heaters and heat exchanger tubing",
      "Power generation equipment",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR) Plates",
        image: hotRolledPlatesImage,
        items: [
          "Monel 400 UNS N04400 HR Plates",
          "ASME SB 127 Monel Alloy HR Stock",
          "Nickel Alloy 400 Hot Rolled Plate",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR) Plates",
        image: coldRolledPlatesImage,
        items: [
          "Nickel Alloy 400 Cold Rolled Plate",
          "ASME SB 127 Monel 400 CR Sheets",
          "UNS N04400 Precision CR Stock",
        ],
      },
      customPlates: {
        title: "Custom & Specialty",
        image: customPlatesImage,
        items: [
          "Monel 400 Custom Sized Plates",
          "Waterjet & Laser Cut Monel Profiles",
          "Monel® Alloy 400 Fabricated Plates",
        ],
      },
    },

    specifications: {
      standardsSpecs: "ASTM B127 / ASME SB127, API Dimensions",
      thicknessRange: '0.3 mm to 120 mm | Heavy Plates up to 5.00"',
      widthLength: "W: 1000mm to 3500mm | L: 2000mm to 6000mm+",
      valueAddedServices: "Plasma/Laser Cutting, Cladding, Pickling, Bending",
      finishProcessing: "Hot Rolled (HR), Cold Rolled (CR), Annealed, Rolling",
      hardnessTemper: "Soft, 1/4, 1/2, Hard, Spring Hard",
    },

    equivalentGrades: {
      headers: [
        "GRADE",
        "UNS NO.",
        "WERKSTOFF NR.",
        "JIS / BS / GOST / AFNOR / EN Standards",
      ],
      rows: [
        [
          "Monel 400",
          "N04400",
          "2.4360",
          "NW 4400 | NA 13 | ????? 28-2,5-1,5 | NU-30M | NiCu30Fe",
        ],
      ],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "Ni (Min)",
        "Cu",
        "Fe (Max)",
        "Mn (Max)",
        "C (Max)",
        "Si (Max)",
        "S (Max)",
      ],
      rows: [
        [
          "Monel 400",
          "63.00",
          "28.00 – 34.00",
          "2.50",
          "2.00",
          "0.30",
          "0.50",
          "0.024",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Tensile Strength (MPa)",
        "Yield Strength (MPa)",
        "Elongation (%)",
        "Density (g/cm³)",
        "Melting Point",
      ],
      rows: [["550 MPa", "240 MPa", "40%", "8.80", "1350 °C"]],
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
      "Monel 400 (UNS N04400) Corrosion Resistant Plates",
      "ASME SB 127 400 Monel Alloy Industrial Plates",
      "Monel 2.4360 Precision Cut-to-Size Plates",
      "Monel 400 Customised & Fabricated Plate Profiles",
      "Nickel Alloy 400 High-Pressure Vessel Plates",
      "ASTM B127 Monel 400 Hot Rolled (HR) & Cold Rolled (CR)",
      "Monel 400 Plain & Chequered Anti-Skid Floor Plates",
      "Half Hard, Spring Hard & Precision Annealed Monel Stock",
      "Leading Monel 400 Plate Manufacturer & Exporter in India",
      "NACE MR 0175 Compliant Monel Plates for Marine Service",
    ],

    relatedSearches: [
      "Monel 400 Plate Price List 2026",
      "Monel 400 Plate Supplier in India",
      "Alloy 400 Plate Weight Calculator",
      "Monel 400 Plates Best Price in Delhi",
      "Nickel Alloy 400 Cold Rolled (CR) Plates",
      "400 Monel Plate Price per Kg Mumbai",
      "Monel Alloy UNS N04400 Plate Stock",
      "ASTM B127 400 Monel Alloy Plates",
      "Monel 400 Plate Weight Chart",
      "Monel 400 Plate Stockyards in India",
      "Monel 400 Plates Manufacturer in Mumbai",
      "400 Monel Plates Latest Price List",
      "Monel 400 Plates Equivalent Grades",
      "Monel Alloy 400 Monel Plates Thickness Tolerance",
      "Monel 400 Plates Stockist in India",
      "400 Monel Plate Specifications PDF",
      "Monel 400 Plates Price in Mumbai",
      "400 Monel Plate Manufacturers in Gujarat",
      "400 Monel (HR) Hot Rolled Plates Price",
      "Nickel Alloy 400 Plate Stockist Mumbai",
      "Monel Alloy 2.4360 Custom Plates Suppliers",
      "Monel 400 Price in India today",
      "Monel 400 Plates Manufacturers in India",
      "400 Monel Plate Dimensions and Size Chart",
      "Buy Monel 400 Plates Online",
      "Monel 400 Plate Thickness Chart mm",
      "Top 100 Monel Plate Dealers in Pune",
      "Alloy 400 Plate Price in Mumbai",
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

            {/* Key Characteristics */}
            <section className="mb-8">
              <SectionTitle>Key Material Characteristics</SectionTitle>
              {productData.keyCharacteristics.map((item, idx) => (
                <div
                  key={idx}
                  className="mb-3 p-3 bg-white border border-gray-200 rounded-lg"
                >
                  <h3 className="text-md font-semibold text-[#173F52]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </section>

            {/* Key Applications */}
            <section className="mb-8">
              <SectionTitle>{productData.keyApplications.title}</SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.keyApplications.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Available Formats */}
            <section className="mb-8">
              <SectionTitle>{productData.availableFormats.title}</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-3">
                {productData.availableFormats.description}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {productData.availableFormats.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Quality Assurance */}
            <section className="mb-8">
              <SectionTitle>{productData.qualityAssurance.title}</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-3">
                {productData.qualityAssurance.description}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {productData.qualityAssurance.items.map((item, index) => (
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
                Stock Availability of Monel 400 Plates
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
                Specification of Monel 400 Plates (UNS N04400)
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

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Weight Chart: Monel 400 (UNS N04400) Plates
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Stocked Sizes */}
            <section className="mb-8">
              <SectionTitle>
                Standard Stocked Sizes: Monel 400 Plates
              </SectionTitle>
              <Table
                headers={productData.stockedSizes.headers}
                rows={productData.stockedSizes.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Thickness Tolerance: Monel 400 (UNS N04400) Plates
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM B127 / ASME SB 127 | Tolerance over and under nominal
                thickness t (mm)
              </p>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Monel 400 & Nickel Alloy Plate Solutions
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
              <SectionTitle>Searches Related to Monel 400 Plates</SectionTitle>
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

export default Monel400Plates;
