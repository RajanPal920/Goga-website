// src/components/productDetails/Alloy28Coils.jsx
import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// ✅ Import contact helpers
import contactHelpers from "../../utils/contactHelpers";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Unified image imports (same for all product pages)
import productImage from "../../assets/images/productImage/coil.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Unified Stock Availability Images (same for all product pages)
import hrCoilsImage from "../../assets/images/stock/hr-coils.jpg";
import crCoilsImage from "../../assets/images/stock/cr-coils.jpg";
import slitCoilsImage from "../../assets/images/stock/slit-coils.jpg";

const Alloy28Coils = () => {
  // ✅ Get all contact info at once
  const { phone, whatsapp, email } = contactHelpers.getContactInfo();

  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Alloy 28 Coils Supplier",
    subtitle:
      "Premium Quality ASTM B709 / ASME SB709 Alloy 28 (UNS N08028 / Sanicro 28) Coils – High-Alloy Austenitic Stainless Steel for Exceptional Resistance to Phosphoric Acid, Sulfuric Acid, Pitting & Stress Corrosion Cracking",

    technicalOverview: {
      title: "Alloy 28 Coils: Technical Overview and Properties",
      description:
        "Alloy 28 (UNS N08028 / Sanicro 28) is a high-alloy multi-purpose austenitic stainless steel designed for service in highly corrosive conditions. Developed originally for the phosphoric acid industry, this nickel-iron-chromium alloy contains significant additions of molybdenum and copper. This unique chemical composition provides a superior alternative to standard 300-series stainless steels and even Alloy 904L when dealing with complex, mixed acid environments.",
    },

    corrosionResistance: {
      title: "Superior Corrosion Resistance Profile",
      items: [
        "Phosphoric and Sulfuric Acid: Alloy 28 offers exceptional resistance to phosphoric acid, even when contaminated with chlorides and fluorides. It also performs remarkably well in sulfuric acid across a wide range of concentrations and temperatures.",
        "Pitting and Crevice Corrosion: With a high Chromium (27%) and Molybdenum (3.5%) content, it provides a very high PREN (Pitting Resistance Equivalent Number), making it highly resistant to localized attack in brackish water and seawater.",
        "Stress Corrosion Cracking (SCC): The high nickel content ensures that Alloy 28 coils are virtually immune to chloride-induced stress corrosion cracking, a common failure point for standard austenitic grades.",
      ],
    },

    keyApplications: {
      title: "Key Industrial Applications",
      items: [
        "Chemical Processing: Production and handling of phosphoric acid, superphosphates, and compound fertilizers.",
        "Oil & Gas: Utilized in downhole tubing for 'sour' gas wells containing hydrogen sulfide ($H_{2}S$), carbon dioxide ($CO_{2}$), and chlorides.",
        "Marine & Desalination: High-pressure piping systems and heat exchanger coils exposed to concentrated brine and seawater.",
        "Pollution Control: Flue-gas desulfurization systems and other environmental control equipment.",
      ],
    },

    keyFeatures: [
      "Exceptional resistance to phosphoric and sulfuric acids",
      "Superior resistance to pitting and crevice corrosion",
      "High PREN (Pitting Resistance Equivalent Number)",
      "Virtually immune to chloride-induced stress corrosion cracking (SCC)",
      "High chromium (26-28%) and molybdenum (3-4%) content",
      "High nickel content (30-32%) for superior corrosion resistance",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM B709 / ASME SB709 standards",
    ],

    applications: [
      "Phosphoric acid production and handling",
      "Sulfuric acid processing equipment",
      "Chemical processing and fertilizer plants",
      "Oil & gas downhole tubing and sour gas wells",
      "Marine and desalination high-pressure systems",
      "Heat exchanger coils exposed to brine",
      "Flue-gas desulfurization systems",
      "Pollution control equipment",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Alloy 28 Hot Rolled Coils",
          "Alloy 28 HR Coils Stock",
          "ASME SB 709 Alloy 28 HR",
          "Alloy N08028 Hot Rolled",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Alloy 28 Cold Rolled Coils",
          "Alloy 28 CR Coils Stockist",
          "ASME SB 709 Alloy 28 CR",
          "Alloy N08028 Cold Rolled",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Alloy 28 Slit Coils",
          "Alloy N08028 Slit Coils",
          "ASME SB 709 Alloy 28 Slit",
          "Precision Slit Strip Coils",
        ],
      },
    },

    specifications: {
      standard: "ASTM B709 / ASME SB709",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      formLength: "Coil / Strip, As Per Customer Requirement",
      valueAddedServices:
        "Cladding, Annealing, Pickling, Polishing, Bending, Forging",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS", "WERKSTOFF NR.", "SIS / EN"],
      rows: [["Alloy 28", "N08028", "1.4563", "2368 / X9CrNiSiNCe21-11-2"]],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "C",
        "Si",
        "Mn",
        "P",
        "S",
        "Cr",
        "Mo",
        "Ni",
        "N",
        "Cu",
      ],
      rows: [
        [
          "Alloy 28",
          "?0.02",
          "0.70",
          "2.00",
          "0.03",
          "0.01",
          "26.0-28.0",
          "3.0-4.0",
          "30.0-32.0",
          "?0.11",
          "0.70-1.50",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Tensile strength (Rm)",
        "0.2% Yield strength (Rp)",
        "Elongation (A5)",
        "Hardness (HB)",
        "Modulus of elasticity",
      ],
      rows: [
        [
          "500 - 750 N/mm²",
          "? 220 N/mm²",
          "35 / 30 %",
          "? 230 HB",
          "195 kN/mm²",
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
        "Width Tolerance in. (mm) – Up to 36 (914.4)",
        "Width Tolerance in. (mm) – Up to 48 (1219)",
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
      "Alloy 28 (UNS N08028) High-Alloy Austenitic Coils",
      "ASTM B709 Alloy 28 Coils Cut To Size",
      "Alloy 28 Industrial Coils Supplier in India",
      "ASME SB 709 Alloy 28 Coils at Best Price",
      "Alloy 1.4563 Precision Slit Coils & Strips",
      "Alloy 28 Coil Manufacturer in Mumbai",
      "Nickel Alloy 28 Hot Rolled (HR) Coils",
      "Alloy 28 Coils Exporter & Global Stockholder",
      "Alloy 28 Slit Coils Stockholder & Dealer",
      "Type 28 Alloy Coils Standards Compliance",
      "Alloy 28 Cold Rolled (CR) Coils Stockists",
      "Gr 28 Alloy High Performance Industrial Coils",
      "Alloy 28 Bright Annealed (BA) Finish Coils",
      "Spring Hard & Soft Annealed Alloy 28 Coils",
    ],

    relatedSearches: [
      "Alloy 28 Coils Price List In India",
      "Alloy 28 Coils Catalogue",
      "Alloy 28 Coil Supplier In Mumbai",
      "Alloy 28 Coil Price In India",
      "Alloy Coil Grade 28 Price List",
      "Alloy 28 Coil Thickness Chart",
      "Buy Alloy 28 Coils Pdf",
      "Alloy 28 Coil Thickness Tolerance",
      "Alloy 28 Coils In Mumbai",
      "Alloy 28 Coil In Pune",
      "Alloy 28 Coil Price List In Mumbai",
      "Price Of Alloy 28 Coil",
      "Alloy 28 Coil Stockist In Mumbai",
      "28 Alloy Latest Price",
      "Alloy 28 Cold Rolled (CR) Coils",
      "Alloy 28 Coil Supplier",
      "Alloy 28 Coil Size",
      "Alloy 28 Coils Chemical Composition",
      "Alloy 28 Coils Supplier In India",
      "Alloy 28 Coil Price List",
      "Alloy 1.4563 Slit Coil Suppliers In Gujarat",
      "Alloy 28 Coil Stockyards In India",
      "Alloy 28 Coil Specifications",
      "Alloy 28 Hot Rolled Coils Price List",
      "Alloy 28 Coil Manufacturers",
      "Price List Of Alloy 28 Coils",
      "Alloy 28 Coil Dealer In India",
      "ASME SB 709 Alloy 28 Coil",
      "Alloy 28 Coil Exporter",
      "Alloy 28 Coils Stocks",
      "Alloy 28 Coils Best Price In Delhi",
      "28 Alloy Coil Price List",
      "Alloy 28 Coils Price In Mumbai",
      "Alloy 28 Bright Annealed Price In India",
      "Alloy 28 Half Hard Coils",
      "Alloy 28 Coils Price",
      "Alloy 28 Coil Manufacturers",
      "Alloy 28 Coils Length",
      "Alloy UNS N08028 Coil",
      "Alloy 28 Embossed Coil",
      "Alloy 28 Coil Weight",
      "Alloy 28 Coil Supplier In India",
      "Alloy 28 Coil Supplier In Mumbai",
      "28 Alloy (HR) Hot Rolled Coils Price List",
      "Alloy 28 Coil Price",
      "Alloy 28 Coils Manufacturer In Mumbai",
      "Alloy 28 Coils Exporter",
      "Top 100 Alloy 28 Coil Dealers In Pune",
      "Alloy 28 Coils In India",
      "Alloy 28 Alloy Coils Thickness",
      "Alloy 28 Coils Equivalent Grades",
      "28 Alloy Coil Dimensions",
      "Alloy 28 Coils Manufacturers In India",
      "Alloy 28 Coil Exporter In India",
      "Cost Of 28 Alloy Coil",
      "Alloy 28 CoilS Supplier",
      "Alloy 28 Coil Weight Calculator",
      "Alloy 28 Coil Stockist",
      "Cost Of Alloy 28 Coils Exporter",
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
        className="relative h-80 sm:h-64 md:h-80 bg-cover bg-center"
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
              <ul className="list-disc pl-5 space-y-2">
                {productData.corrosionResistance.items.map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
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
              <SectionTitle>Stock Availability of Alloy 28 Coils</SectionTitle>
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
                Specification of Alloy 28 (Sanicro 28) Coils
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
              <SectionTitle>Equivalent Grades & Composition</SectionTitle>
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
              <SectionTitle>
                Alloy 28 (Sanicro 28) Coils Thickness Gauge Chart
              </SectionTitle>
              <Table
                headers={productData.gaugeChart.headers}
                rows={productData.gaugeChart.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Alloy 28 Coils Weight / Size Chart</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Alloy 28 Coils Thickness Tolerance Chart
              </SectionTitle>
              <Table
                headers={productData.toleranceChart.headers}
                rows={productData.toleranceChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Alloy 28 (Sanicro 28) Coils
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
                Searches Related to Alloy 28 (Sanicro 28) Coils
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

            {/* Get A Quote - ✅ UPDATED with email variable */}
            <div className="bg-[#173F52] rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Get A Quote
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Email us for a quote or contact us for more information.
              </p>
              <a
                href={`mailto:${email}`}
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
      {/* FLOATING WHATSAPP & CALL BUTTONS - ✅ UPDATED */}
      {/* =============================== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7 text-white" />
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phone}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl"
          aria-label="Call us"
        >
          <CallIcon className="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Alloy28Coils;
