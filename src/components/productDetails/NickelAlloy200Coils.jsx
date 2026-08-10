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

const NickelAlloy200Coils = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Nickel Alloy 200 / 201 Coils Supplier",
    subtitle:
      "Premium Quality ASTM B162 / ASME SB162 Commercially Pure Nickel Coils – Exceptional Corrosion Resistance in Caustic Alkalis, High Thermal & Electrical Conductivity for Chemical Processing, Electronics & Aerospace Applications",

    technicalOverview: {
      title: "Nickel Alloy 200 & 201 Coils: Technical Overview",
      description:
        "Nickel Alloy 200 (UNS N02200) and its low-carbon variant, Nickel Alloy 201 (UNS N02201), are commercially pure wrought nickel alloys that offer a unique combination of corrosion resistance, high thermal conductivity, and excellent electrical properties. Nickel 200 is the standard grade with a minimum nickel content of 99%, while Nickel 201 is specifically engineered for service at temperatures exceeding 600°F (315°C). The reduced carbon in Alloy 201 prevents embrittlement by intergranular carbon, ensuring the material remains ductile and structurally sound in high-heat environments.",
    },

    corrosionResistance: {
      title: "Superior Corrosion Resistance",
      description:
        "These coils are renowned for their exceptional resistance to caustic alkalis, particularly sodium hydroxide (caustic soda). They are virtually immune to corrosion by caustic soda at all concentrations and temperatures up to the molten state. Additionally, Nickel 200/201 coils provide excellent service in neutral and alkaline salt solutions, as well as dry fluorine and hydrogen chloride at moderate temperatures. Their high purity ensures that the coils do not introduce metallic contaminants into sensitive process flows, making them ideal for high-purity chemical and food production.",
    },

    keyApplications: {
      title: "Key Industrial Applications",
      items: [
        "Chemical Processing: Production and handling of caustic soda, particularly at high concentrations, and the manufacture of vinyl chloride monomers.",
        "Electronics: Utilized for specialized battery components, lead wires, and electronic tube parts due to high electrical conductivity.",
        "Food Processing: Essential for handling fatty acids and fruit juices where preserving product color and flavor is critical.",
        "Aerospace & Defense: Used in rocket motor cases and specialized hardware requiring resistance to corrosive propellants.",
      ],
    },

    manufacturingStandards: {
      title: "Manufacturing and Quality Standards",
      description:
        "Our Nickel 200 and 201 coils are manufactured to meet stringent international specifications, including ASTM B162 and ASME SB162. To suit various fabrication needs, we provide these coils in several formats:",
      items: [
        "Cold Rolled (CR): Offers a smooth surface finish and tight dimensional tolerances for precision electronic and medical applications.",
        "Hot Rolled (HR): Ideal for heavy-duty industrial fabrication where scale-free surfaces are less critical than structural thickness.",
        "Slit Coils: Custom-slit to specific narrow widths for automated stamping and continuous manufacturing lines.",
      ],
      qualityControl:
        "Every coil undergoes rigorous quality control, including Positive Material Identification (PMI), ultrasonic testing, and tensile strength verification. We provide comprehensive documentation, including EN 10204 3.1 Material Test Certificates (MTC), to ensure complete traceability and compliance with global engineering standards.",
    },

    keyFeatures: [
      "Commercially pure nickel with 99% minimum nickel content",
      "Exceptional resistance to caustic alkalis and sodium hydroxide",
      "Nickel 201 low-carbon variant for service above 600°F (315°C)",
      "High thermal and electrical conductivity",
      "Virtually immune to corrosion by caustic soda at all concentrations",
      "Excellent service in neutral and alkaline salt solutions",
      "High purity ensures no metallic contaminants in sensitive processes",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM B162 / ASME SB162 standards",
    ],

    applications: [
      "Chemical processing and caustic soda handling",
      "Vinyl chloride monomer production",
      "Electronic battery components and lead wires",
      "Food processing (fatty acids and fruit juices)",
      "Aerospace rocket motor cases",
      "Defense and specialized hardware",
      "High-purity chemical production",
      "Medical and pharmaceutical applications",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Nickel Alloy 201 HR Coils",
          "Nickel N02201 HR Coils",
          "200 Nickel Hot Rolled Coils",
          "ASME SB 162 Nickel 201 HR",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Nickel Alloy 201 CR Coils",
          "Nickel Alloy N02200 CR Coils",
          "ASME SB 162 Nickel 200 CR",
          "200 Nickel Cold Rolled Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Nickel Alloy N02200 Slit Coils",
          "200 Nickel Slit Coils",
          "Ni Alloy 201 Slit Coils",
          "ASME SB 162 Nickel 201 Slit",
        ],
      },
    },

    specifications: {
      standard: "ASTM B162 / ASME SB162",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      formLength: "Coil / Strip, Length as per Customer Requirement",
      valueAddedServices:
        "Cladding, Annealing, Pickling, Polish, Bending, Minor Fabrication",
    },

    equivalentGrades: {
      headers: ["STANDARD", "WNR.", "UNS", "JIS / AFNOR / EN / GOST"],
      rows: [
        [
          "Nickel 200",
          "2.4066",
          "N02200",
          "NW 2200 / NA 11 / Ni 99.2 / N-100M / ??-2",
        ],
        ["Nickel 201", "2.4068", "N02201", "NW 2201 / NA 12 / LC-Ni 99 / ??-2"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ni", "Fe", "Cu", "Mn", "Si", "C", "S"],
      rows: [
        [
          "Nickel 200",
          "99.0 min",
          "0.40 max",
          "0.25 max",
          "0.35 max",
          "0.35 max",
          "0.15 max",
          "0.01 max",
        ],
        [
          "Nickel 201",
          "99.0 min",
          "0.40 max",
          "0.25 max",
          "0.35 max",
          "0.35 max",
          "0.02 max",
          "0.01 max",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength (0.2% Offset)",
        "Elongation",
      ],
      rows: [
        [
          "8.9 g/cm³",
          "1446 °C (2635 °F)",
          "462 MPa (67,000 Psi)",
          "148 MPa (21,500 Psi)",
          "45%",
        ],
      ],
    },

    gaugeChart: {
      headers: ["Gauge Number", "Inches", "MM"],
      rows: [
        ["8", ".17187", "4.365"],
        ["9", ".15625", "3.968"],
        ["10", ".14062", "3.571"],
        ["11", ".125", "3.175"],
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

    weightChart: {
      headers: [
        "Thickness (mm)",
        "Weight Kg/M2",
        "2000 X 1000",
        "2500 X 1250",
        "3000 X 1500",
      ],
      rows: [
        ["0.18", "1.44", "2.88", "—", "—"],
        ["0.20", "1.60", "3.20", "—", "—"],
        ["0.22", "1.76", "3.52", "—", "—"],
        ["0.24", "1.92", "3.84", "—", "—"],
        ["0.27", "2.16", "4.32", "—", "—"],
        ["0.28", "2.24", "4.48", "—", "—"],
        ["0.32", "2.56", "5.12", "—", "—"],
        ["0.38", "3.04", "6.08", "—", "—"],
        ["0.44", "3.52", "7.04", "11.00", "—"],
        ["0.50", "4.00", "8.00", "12.50", "—"],
        ["0.56", "4.48", "8.96", "14.00", "—"],
        ["0.63", "5.04", "10.08", "15.75", "—"],
        ["0.75", "6.00", "12.00", "18.75", "—"],
        ["0.88", "7.04", "14.08", "22.00", "—"],
        ["1.00", "8.00", "16.00", "25.00", "36.00"],
        ["1.13", "9.04", "18.08", "28.25", "40.00"],
        ["1.25", "10.00", "20.00", "31.25", "45.00"],
        ["1.38", "11.00", "22.03", "34.50", "50.00"],
        ["1.50", "12.00", "24.00", "37.50", "54.00"],
        ["1.75", "14.00", "28.00", "43.75", "63.00"],
        ["2.00", "16.00", "32.00", "50.00", "72.00"],
        ["2.25", "18.00", "36.00", "56.25", "81.00"],
        ["2.50", "20.00", "40.00", "62.50", "90.00"],
        ["2.75", "22.00", "44.00", "68.75", "99.00"],
        ["3.00", "24.00", "48.00", "75.00", "108.00"],
        ["3.25", "26.00", "52.00", "81.25", "117.00"],
        ["3.50", "28.00", "56.00", "87.50", "126.00"],
        ["3.75", "30.00", "60.00", "93.75", "135.00"],
        ["4.00", "32.00", "64.00", "100.00", "144.00"],
        ["4.25", "34.00", "68.00", "106.25", "153.00"],
        ["4.50", "36.00", "72.00", "112.50", "162.00"],
        ["5.00", "40.00", "80.00", "125.00", "180.00"],
        ["5.50", "44.00", "88.00", "137.50", "198.00"],
        ["6.00", "48.00", "96.00", "150.00", "216.00"],
        ["6.50", "52.00", "104.00", "162.50", "234.00"],
        ["7.00", "56.00", "112.00", "175.00", "252.00"],
        ["7.50", "60.00", "120.00", "187.50", "270.00"],
        ["8.00", "64.00", "128.00", "200.00", "288.00"],
      ],
    },

    toleranceChart: {
      headers: [
        "Thickness in. (mm)",
        "Coils Width Tolerance in. (mm) – 36 (914.4)",
        "Coils Width Tolerance in. (mm) – 48 (1219)",
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
      "Nickel Alloy 200 / 201 Industrial Coils",
      "Nickel 200 Coils Cut to Size & Slit Strips",
      "Ni Alloy 200 Coils Supplier in India",
      "ASME SB 162 Nickel 201 Coils at Best Price",
      "Nickel Alloy 2.4068 Coils Cut To Size",
      "Nickel Alloy 200 Coil Manufacturer in India",
      "200 Nickel Coils Supplier in Mumbai",
      "Nickel Alloy 201 Coils Exporter & Stockist",
      "Nickel Alloy 200 Slit Coils Stockholder",
      "Type Nickel Alloy 200 Coils Standards",
      "Nickel Alloy 200 Coils Exporter in India",
      "ASTM B162 201 Nickel Alloy Coils",
      "Nickel 200 Bright Annealed (BA) Coils",
      "Ni Alloy 200 Cold Rolled (CR) Coils Dealer",
    ],

    relatedSearches: [
      "Ni Alloy 200 Nickel Alloy Coils Thickness",
      "ASME SB 162 Ni Alloy 201 Coil",
      "Nickel Alloy 200 Coils Equivalent Grades",
      "Nickel 201 Coils Supplier",
      "Nickel Alloy Embossed Coil",
      "Ni Alloy 201 Coil Exporter",
      "Nickel Alloy UNS N02200 Coil",
      "Nickel 201 Coil Supplier IN Mumbai",
      "Nickel Alloy 201 Coil Thickness Chart",
      "Nickel Alloy 201 Coils Catalogue",
      "Nickel 201 Coil Stockist In Mumbai",
      "Nickel 200 Coil Stockist",
      "Cost Of 201 Nickel Alloy Coil",
      "Nickel Alloy 201 Coil Thickness Tolerance",
      "Nickel Alloy 201 Coil Supplier In Mumbai",
      "200 Nickel Coils Stocks",
      "Nickel Alloy 200 Coils In Mumbai",
      "Top 100 Nickel Alloy Coil Dealers In Pune",
      "Nickel Alloy 200 Coil Price In India",
      "Nickel Alloy 200 Coils Price",
      "Nickel Alloy 201 Coils",
      "Cost Of Nickel Alloy 200 Coils Exporter",
      "Price Of Nickel 201 Coil",
      "Nickel Alloy 200 Coil In Pune",
      "201 Nickel Alloy Latest Price",
      "Ni Alloy 200 Coils Price List In India",
      "Ni Alloy 200 Coils Price In Mumbai",
      "Nickel Alloy 201 Coil Stockyards In India",
      "Nickel 201 Coils Exporter",
      "201 Nickel Coil Supplier In Mumbai",
      "200 Nickel Alloy Coil Price List",
      "Nickel Alloy 201 Coil Price List",
      "Nickel Alloy 201 Coils In India",
      "Nickel Alloy 200 Half Hard Coils",
      "201 Nickel Alloy Coils Length",
      "200 Nickel Alloy Coil Dimensions",
      "Nickel Alloy 200 Bright Annealed Price In India",
      "Nickel Alloy 201 Coil Supplier",
      "Nickel Alloy 200 Coils Manufacturers In India",
      "Ni Alloy 200 Coils Chemical Composition",
      "Nickel Alloy 201 Hot Rolled Coils Price List",
      "Nickel 200 Coil Price",
      "Nickel Alloy 200 Coil Dealer In India",
      "Nickel 201 Coil Manufacturers",
      "Nickel Alloy 201 Coil Price List In Mumbai",
      "Nickel Alloy 201 Coils Best Price In Delhi",
      "201 Nickel Alloy Coil Manufacturers",
      "Nickel Alloy 200 Coils Supplier In India",
      "Price List Of Nickel Alloy 200 Coils",
      "200 Nickel Alloy (HR) Hot Rolled Coils Price List",
      "Ni 200 Coil Price List",
      "Ni 201 Coil Exporter In India",
      "Nickel Alloy 201 Coil Supplier In India",
      "Buy Ni Alloy 200 Coils Pdf",
      "Nickel Alloy 200 Coil Weight",
      "Nickel Alloy Coil Grade 201 Price List",
      "Nickel Alloy 200 Coil Weight Calculator",
      "Nickel Alloy 2.4068 Slit Coil Suppliers In Gujarat",
      "Nickel Alloy 200 Coil Specifications",
      "Ni Alloy 200 Cold Rolled (CR) Coils",
      "Nickel Alloy 200 Coil Size Manufacturer In Mumbai",
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
      { name: "Industrial Valves", slug: "industrial-valves" },
      { name: "Flats & Pairs", slug: "pairs" },
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

            {/* Corrosion Resistance */}
            <section className="mb-8">
              <SectionTitle>
                {productData.corrosionResistance.title}
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed">
                {productData.corrosionResistance.description}
              </p>
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

            {/* Manufacturing Standards */}
            <section className="mb-8">
              <SectionTitle>
                {productData.manufacturingStandards.title}
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-3">
                {productData.manufacturingStandards.description}
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                {productData.manufacturingStandards.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm">
                {productData.manufacturingStandards.qualityControl}
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
              <SectionTitle>
                Stock Availability of Nickel 200 / 201 Coils
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
                Specification of Nickel Alloy 200 / 201 Coils
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

            {/* Gauge Chart */}
            <section className="mb-8">
              <SectionTitle>
                Nickel Alloy 200 / 201 Coils Thickness Gauge Chart
              </SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Nickel Alloy 200 / 201 Coils Weight / Size Chart
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Nickel Alloy 200 / 201 Coils Thickness Tolerance
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Nickel Alloy 200 / 201 Coils
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
                Searches Related to Nickel Alloy 200 / 201 Coils
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

export default NickelAlloy200Coils;
