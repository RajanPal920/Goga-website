import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Import contact helpers
import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Unified image imports (same for all product pages)
import productImage from "../../assets/images/productImage/tubes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (using tube-specific or unified images)
import seamlessTubesImage from "../../assets/images/stock/seamless-tubes.jpg";
import weldedTubesImage from "../../assets/images/stock/welded-tubes.jpg";
import squareTubesImage from "../../assets/images/stock/square-tubes.jpg";
import heatExchangerTubesImage from "../../assets/images/stock/heat-exchanger-tubes.jpg";
import instrumentationTubesImage from "../../assets/images/stock/instrumentation-tubes.jpg";
import specializedTubesImage from "../../assets/images/stock/specialized-tubes.jpg";

const CopperNickelTubes = () => {
  // ===============================
  // DATA - From raymondispat.com/copper-nickel-tubes-stockist-supplier
  // ===============================

  const productData = {
    title: "Copper Nickel Tubes Supplier – 90/10 (C70600) & 70/30 (C71500)",
    subtitle:
      "Premium Quality ASTM B111 / ASME SB111 Copper Nickel Tubes – High-Performance Cupro-Nickel Piping Solutions for Marine, Desalination & Heat Exchanger Applications",

    technicalOverview: {
      title: "Copper Nickel Tubes: Technical Overview",
      description:
        "Copper Nickel (CuNi) tubes, frequently referred to as Cupro-Nickel, are high-performance piping solutions specifically engineered for superior resistance to seawater corrosion, erosion, and biofouling. By alloying copper with nickel—typically 10% (90/10) or 30% (70/30)—and incorporating controlled amounts of iron and manganese, these tubes provide a unique combination of thermal conductivity and extraordinary durability in marine and industrial process environments. A defining feature of Copper Nickel is its natural anti-fouling property. In marine applications, the alloy forms a thin, protective oxide film that inhibits the attachment of biological organisms like barnacles and algae, ensuring long-term flow efficiency and reduced maintenance for submerged or flow-through systems.",
    },

    keyCharacteristics: {
      title: "Key Material Characteristics",
      items: [
        "Exceptional Seawater Corrosion Resistance: Superior resistance to pitting, crevice corrosion, and stress corrosion cracking in marine environments.",
        "Natural Biofouling Resistance: Forms a protective oxide film that prevents marine growth, maintaining flow efficiency without chemical treatment.",
        "High Thermal Conductivity: Excellent heat transfer properties make it ideal for condensers, heat exchangers, and desalination systems.",
        "Erosion Resistance: 70/30 grade withstands higher turbulence and flow rates (up to 4.5 m/s) compared to 90/10 grade.",
        "Good Weldability & Fabrication: Excellent weldability using standard TIG, MIG, and manual metal arc welding; tubes can be easily expanded into tube sheets.",
        "Hydrogen Embrittlement Resistance: Not susceptible to hydrogen embrittlement, ensuring safety in specialized industrial processes.",
        "Available in Grades: 90/10 (C70600) and 70/30 (C71500)",
        'Size Range: Seamless: 1/2" - 16" NB | Welded: 1/2" - 24" NB | OD: 6.0mm - 914.4mm',
        "Schedule & Condition: SCH 5 to XXS | Annealed & Pickled, Bright Annealed, Cold Drawn",
        "Ends & Techniques: Plain, Beveled, Threaded Ends | Seamless, Welded, ERW / EFW",
        "Complies with ASTM B466, B552, B111 / ASME SB466, SB552, SB111",
      ],
    },

    industrialApplications: {
      title: "Industrial Applications",
      items: [
        "Shipboard seawater cooling systems and marine piping",
        "Desalination heat exchangers and plant piping",
        "Offshore platform firewater systems",
        "Coastal power plant condensers and heat exchangers",
        "Naval submarine piping and high-pressure condensers",
        "Steam generator tubing in marine environments",
        "Chemical processing in salt-rich environments",
        "Coastal and naval shipbuilding applications",
      ],
    },

    keyFeatures: [
      "Superior resistance to seawater corrosion, erosion, and biofouling",
      "Natural anti-fouling properties reduce maintenance and chemical treatment",
      "High thermal conductivity for efficient heat transfer",
      "Excellent weldability and formability",
      "Resistant to stress corrosion cracking and hydrogen embrittlement",
      "Available in 90/10 (C70600) and 70/30 (C71500) grades",
      'Size Range: Seamless: 1/2" - 16" NB | Welded: 1/2" - 24" NB',
      "Schedule & Condition: SCH 5 to XXS | Annealed & Pickled, Bright Annealed, Cold Drawn",
      "Ends & Techniques: Plain, Beveled, Threaded Ends | Seamless, Welded, ERW / EFW",
      "Complies with ASTM B466, B552, B111 / ASME SB466, SB552, SB111",
    ],

    applications: [
      "Shipboard seawater cooling systems",
      "Desalination heat exchangers",
      "Offshore platform firewater systems",
      "Coastal power plant condensers",
      "Naval submarine piping",
      "High-pressure condensers",
      "Steam generator tubing",
      "Chemical processing in salt-rich environments",
      "Marine piping systems",
      "Heat exchangers for brackish water",
    ],

    stockAvailability: {
      seamlessTubes: {
        title: "Cu-Ni Seamless Tubes",
        image: seamlessTubesImage,
        items: [
          "90/10 & 70/30 Seamless Tubes",
          "ASTM B466 High Pressure Tubing",
          "Marine Desalination Tubes",
          "ASME SB466 Seamless Stock",
          "Precision Cold Drawn Tubes",
        ],
      },
      weldedTubes: {
        title: "Cu-Ni Welded / ERW Tubes",
        image: weldedTubesImage,
        items: [
          "ASTM B552 Welded Cu-Ni Pipes",
          "90/10 & 70/30 Fabricated Tubes",
          "ERW / EFW Cupro Nickel Tubing",
          "Large Diameter Shipboard Tubes",
          "Annealed & Pickled Welded Stock",
        ],
      },
      squareTubes: {
        title: "Specialized Cu-Ni Tubes",
        image: squareTubesImage,
        items: [
          "ASTM B111 Condenser Tubing",
          "Heat Exchanger U-Bend Tubes",
          "Sea Water Corrosion Resistant",
          "Naval & Coastal Application Tubes",
          "C70600 & C71500 Specialty Tubes",
        ],
      },
      heatExchangerTubes: {
        title: "Heat Exchanger & Condenser Tubes",
        image: heatExchangerTubesImage,
        items: [
          "Cu-Ni 90/10 Heat Exchanger Tubes",
          "Cu-Ni 70/30 Condenser Tubing",
          "U-Bend Heat Exchanger Tubes",
          "ASME SB111 Exchanger Tubing",
          "High Thermal Conductivity Tubes",
        ],
      },
      instrumentationTubes: {
        title: "Instrumentation & Hydraulic Tubes",
        image: instrumentationTubesImage,
        items: [
          "Cupro Nickel Precision Tubes",
          "Bright Annealed (BA) Cu-Ni Tubing",
          "High Pressure Hydraulic Tubes",
          "Control Line Tubing",
          "Capillary Tubes",
        ],
      },
      specializedTubes: {
        title: "Marine & Offshore Tubes",
        image: specializedTubesImage,
        items: [
          "Shipbuilding Cu-Ni Tubes",
          "Offshore Platform Piping",
          "Naval Grade Tubing",
          "Desalination Plant Tubes",
          "Coastal Power Plant Tubing",
        ],
      },
    },

    specifications: {
      standards: "ASTM B466, B552, B111 / ASME SB466, SB552, SB111",
      sizeRange:
        'Seamless: 1/2" - 16" NB | Welded: 1/2" - 24" NB | OD: 6.0mm - 914.4mm',
      scheduleCondition:
        "SCH 5 to XXS | Annealed & Pickled, Bright Annealed, Cold Drawn",
      endsTechniques:
        "Plain, Beveled, Threaded Ends | Seamless, Welded, ERW / EFW",
    },

    equivalentGrades: {
      headers: ["STANDARD", "WERKSTOFF NR.", "UNS NO."],
      rows: [
        ["Copper Nickel 70/30", "2.0882", "C71500"],
        ["Copper Nickel 90/10", "2.0872", "C70600"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Cu", "Mn", "Pb", "Ni", "Fe", "Zn"],
      rows: [
        [
          "Cu-Ni 70/30",
          "65.0 min",
          "1.0 max",
          "0.05 max",
          "29.0 – 33.0",
          "0.4 – 1.0",
          "1.0 max",
        ],
        [
          "Cu-Ni 90/10",
          "88.6 min",
          "1.0 max",
          "0.05 max",
          "9.0 – 11.0",
          "1.0 – 1.8",
          "1.0 max",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength",
        "Elongation",
      ],
      rows: [
        [
          "Cu-Ni 70/30",
          "0.323 lb/in³",
          "2260 °F",
          "50,000 psi",
          "20,000 psi",
          "30 %",
        ],
        [
          "Cu-Ni 90/10",
          "0.323 lb/in³",
          "2260 °F",
          "50,000 psi",
          "20,000 psi",
          "30 %",
        ],
      ],
    },

    dimensionsChart: {
      headers: [
        "Tube O.D.",
        "Wall (Inch)",
        "Gauge 10",
        "Gauge 12",
        "Gauge 14",
        "Gauge 16",
        "Gauge 18",
        "Gauge 20",
        "Gauge 22",
      ],
      rows: [
        [
          '1/2"',
          "I.D. (In)",
          "0.204",
          "0.260",
          "0.310",
          "0.356",
          "0.384",
          "0.430",
          "0.444",
        ],
        [
          '3/4"',
          "I.D. (In)",
          "0.454",
          "0.510",
          "0.560",
          "0.606",
          "0.634",
          "0.680",
          "0.694",
        ],
        [
          '1"',
          "I.D. (In)",
          "0.704",
          "0.760",
          "0.810",
          "0.856",
          "0.884",
          "0.930",
          "0.944",
        ],
        [
          '1-1/2"',
          "I.D. (In)",
          "1.204",
          "1.260",
          "1.310",
          "1.356",
          "1.384",
          "1.430",
          "1.444",
        ],
        [
          '2"',
          "I.D. (In)",
          "1.704",
          "1.760",
          "1.810",
          "1.856",
          "1.884",
          "1.930",
          "1.944",
        ],
        [
          '3"',
          "I.D. (In)",
          "2.704",
          "2.760",
          "2.810",
          "2.856",
          "2.884",
          "2.930",
          "2.944",
        ],
        [
          '4"',
          "I.D. (In)",
          "3.704",
          "3.760",
          "3.810",
          "3.856",
          "3.884",
          "3.930",
          "3.944",
        ],
      ],
    },

    gaugeThicknessChart: {
      headers: ["GAUGE", "THICKNESS RANGE (INCHES)", "TYPICAL VALUE (INCHES)"],
      rows: [
        ["22", "0.025 through 0.029", "0.028"],
        ["20", "0.031 through 0.035", "0.035"],
        ["18", "0.044 through 0.049", "0.049"],
        ["16", "0.060 through 0.065", "0.065"],
        ["14", "0.075 through 0.085", "0.083"],
        ["12", "0.101 through 0.111", "0.109"],
        ["10", "0.126 through 0.136", "0.134"],
      ],
    },

    odChart: {
      headers: [
        "NOMINAL PIPE SIZE",
        "OD (Inch)",
        "SCH 5",
        "SCH 10",
        "SCH 40",
        "SCH 80",
      ],
      rows: [
        ['1/2"', "0.840", "0.065", "0.083", "0.109", "0.147"],
        ['3/4"', "1.050", "0.065", "0.083", "0.113", "0.154"],
        ['1"', "1.315", "0.065", "0.109", "0.133", "0.179"],
        ['1-1/2"', "1.900", "0.065", "0.109", "0.145", "0.200"],
        ['2"', "2.375", "0.083", "0.109", "0.154", "0.218"],
        ['3"', "3.500", "0.083", "1.120", "0.216", "0.300"],
        ['4"', "4.500", "0.083", "1.120", "0.237", "0.337"],
      ],
    },

    specializedProducts: [
      "Copper Nickel 90/10 & 70/30 High Performance Tube Dealer",
      "ASTM B111 Condenser & Heat Exchanger Tubes Exporter",
      "ASME SB466 Cu-Ni Welded & Seamless Tubes at Best Price",
      "Marine Grade Saltwater Corrosion Resistant Tubing Supplier",
      "Precision Drawn & Solution Annealed Cu-Ni Tubes",
      "Naval, Offshore & Shipbuilding Tubing Stockist in Mumbai",
      "ASTM B466 C70600 / C71500 Certified Cupro Nickel Stock",
      "Cold Drawn, Pickled & Polished Finish Tubes Supplier",
      "Copper Nickel ERW, EFW & Welded Tubing Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Copper Nickel 90/10 Tube Price per Kg India",
      "Cupro Nickel 70/30 Seamless Tube In Pune",
      "ASTM B111 Condenser Tube Supplier Mumbai",
      "Cu-Ni Tube Weight Chart PDF",
      "Cost Of Cupro Nickel Welded Tubes Exporter",
      "Cu-Ni 90/10 Heat Exchanger Tube Latest Price",
      "Copper Nickel Tubes Price List In India",
      "Cu-Ni 70/30 Chemical Composition",
      "Copper Nickel Tubing Stockist Maharashtra",
      "Cupro Nickel Seamless Tube Dimensions",
      "Cost Of Copper Nickel 90/10 Tubing",
      "Cu-Ni Tubes Equivalent Grades",
      "Copper Nickel Tube Price In India",
      "Cupro Nickel Forged Tubes",
      "Price Of Cu-Ni 70/30 Seamless Tubes",
      "Copper Nickel Tubes Specifications ASTM B466",
      "Cupro Nickel Hot Rolled Tubes Supplier",
      "ASME SB111 Copper Nickel Tubes",
      "Cu-Ni Tubes Supplier In Mumbai",
      "Copper Nickel Tubes Suppliers In Gujarat",
      "CuNi Cold Drawn Tubes Price List",
      "Copper Nickel Alloy Round Tube",
      "Copper Nickel Tubes Catalogue",
      "Cu-Ni Tubes Manufacturers India",
      "Cupro Nickel Threaded Tubes",
      "Cu-Ni Seamless Tubes Supplier In India",
      "Cu-Ni Welded Tubes Price List in India",
      "Copper Nickel Tubes Dimensions Chart",
      "90/10 & 70/30 Rods & Tubes Stockist In Mumbai",
      "Cu-Ni Tubes Stockyard",
      "Copper Nickel Tubes Weight Calculator",
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
              <SectionTitle>
                {productData.keyCharacteristics.title}
              </SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.keyCharacteristics.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
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
              <SectionTitle>
                Stock Availability of Copper Nickel 90/10 & 70/30 Tubes
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
                Technical Specifications: Copper Nickel 90/10 & 70/30 Tubes
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
              <SectionTitle>
                Unified Equivalent Grades: Copper Nickel 70/30 & 90/10 Tubes
              </SectionTitle>
              <Table
                headers={productData.equivalentGrades.headers}
                rows={productData.equivalentGrades.rows}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>Chemical Composition Analysis (%)</SectionTitle>
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

            {/* Dimensions Chart */}
            <section className="mb-8">
              <SectionTitle>
                Copper Nickel 90/10 & 70/30 Tubes Dimensions Chart
              </SectionTitle>
              <Table
                headers={productData.dimensionsChart.headers}
                rows={productData.dimensionsChart.rows}
              />
            </section>

            {/* Gauge Thickness Chart */}
            <section className="mb-8">
              <SectionTitle>
                Copper Nickel 90/10 & 70/30 Gauge Thickness Chart
              </SectionTitle>
              <Table
                headers={productData.gaugeThicknessChart.headers}
                rows={productData.gaugeThicknessChart.rows}
              />
            </section>

            {/* OD Chart */}
            <section className="mb-8">
              <SectionTitle>
                Copper Nickel 90/10 & 70/30 Tube Outside Diameter
              </SectionTitle>
              <Table
                headers={productData.odChart.headers}
                rows={productData.odChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Copper Nickel 90/10 & 70/30 Tubes
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
                Searches Related to Copper Nickel 90/10 & 70/30 Tubes
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
                href={getMailToUrl(contact)}
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

export default CopperNickelTubes;
