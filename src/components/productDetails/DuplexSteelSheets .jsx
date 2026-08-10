import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Import contact helpers (same as other components)
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

const DuplexSteelSheets = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Duplex & Super Duplex Steel Sheets Supplier – S31803, S32205, S32750, S32760",
    subtitle:
      "Premium Quality ASTM A240 / ASME SA240 Duplex & Super Duplex Steel Sheets – Dual-Phase Microstructure for Superior Corrosion Resistance, High Strength & Stress Corrosion Cracking Resistance in Aggressive Environments",

    technicalOverview: {
      title:
        "Duplex & Super Duplex Steel Sheets: Technical Overview and Properties",
      description:
        "Duplex and Super Duplex steel sheets are high-performance stainless steel alloys characterized by a dual-phase microstructure, consisting of approximately 50% austenite and 50% ferrite. This balanced metallurgical structure combines the best properties of both phases: the stress corrosion cracking resistance of ferritic steels and the ease of fabrication and general corrosion resistance of austenitic steels. These sheets provide significantly higher yield strength—often double that of standard 300-series stainless steels—allowing for thinner, lighter, and more cost-effective engineering designs without compromising structural integrity.",
    },

    gradeBreakdown: [
      {
        title: "Duplex Steel S31803 and S32205 Sheets (Alloy 2205)",
        description:
          "Duplex S31803 (F51) and the nitrogen-enhanced S32205 (F60) are the most widely used duplex grades. They are engineered to provide superior resistance to localized corrosion, specifically pitting and crevice corrosion, in chloride-bearing environments.",
        items: [
          "Corrosion Profile: With high Chromium (22%) and Molybdenum (3%) content, these sheets offer exceptional resistance to chloride-induced stress corrosion cracking (SCC), a common failure mode for standard austenitic grades in hot halide environments.",
          "Mechanical Strength: They exhibit high fatigue strength and excellent thermal conductivity.",
        ],
        keyApplications:
          "Chemical processing equipment, cargo tanks for ships, and high-strength structural components for marine infrastructure.",
      },
      {
        title: "Super Duplex Steel S32750 and S32760 Sheets",
        description:
          "Super Duplex sheets, including S32750 (F53) and S32760 (F55), are highly alloyed grades designed for the most aggressive corrosive service. These grades feature a Pitting Resistance Equivalent Number (PREN) of >40, placing them among the most durable stainless steels available.",
        items: [
          "S32750 (UNS S32750 / F53): Features 25% Chromium and 4% Molybdenum. Specifically designed for high-strength applications in extremely corrosive conditions, such as warm seawater.",
          "S32760 (UNS S32760 / F55): Similar to S32750 but includes deliberate additions of Copper and Tungsten. Enhances its resistance to mineral acids like sulfuric and hydrochloric acid, particularly in contaminated media.",
        ],
        keyApplications:
          "Desalination plants, offshore oil and gas platforms, and flue-gas desulfurization (FGD) scrubbers.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Duplex and Super Duplex sheets are manufactured to meet stringent international specifications, including ASTM A240 and ASME SA240. These sheets are available in various processing formats to suit specific industrial blueprints:",
      items: [
        "Cold Rolled (CR): Ideal for applications requiring tighter dimensional tolerances, a superior surface finish (2B or No.4), and precision thickness.",
        "Hot Rolled (HR): Typically supplied in No.1 finish, suitable for heavy-duty industrial fabrication and larger structural components.",
        "Precision Cut: Available in custom dimensions using Waterjet, Laser, or Plasma cutting to ensure exact fitment for your engineering designs.",
      ],
      qualityControl:
        "Every shipment undergoes rigorous quality control, including Positive Material Identification (PMI), tensile testing, and intergranular corrosion tests.",
    },

    keyFeatures: [
      "Unique dual-phase (Austenite + Ferrite) microstructure",
      "Superior resistance to pitting, crevice corrosion and chloride-induced SCC",
      "Yield strength roughly double that of conventional austenitic grades",
      "Allows significant weight savings through thinner designs",
      "Available in Duplex (S31803/S32205) and Super Duplex (S32750/S32760)",
      "PREN > 40 for Super Duplex grades for aggressive environments",
      "Thickness: 0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      "Surface & Hardness: 2B, BA, No.1, Mirror, Satin, PVC | Soft to Spring Hard",
      "Value Added Services: Waterjet/Laser Cutting, Heat Treatment, Pickling, Polishing",
      "Complies with ASTM A240 / ASME SA240, EN 10088-2",
    ],

    applications: [
      "Chemical processing equipment",
      "Cargo tanks for ships",
      "High-strength structural components for marine infrastructure",
      "Desalination plants",
      "Offshore oil and gas platforms",
      "Flue-gas desulfurization (FGD) scrubbers",
      "Heat exchangers and pressure vessels",
      "High-chloride and aggressive environments",
    ],

    stockAvailability: {
      hotRolledSheets: {
        title: "Hot Rolled (HR)",
        image: hotRolledSheetsImage,
        items: [
          "Duplex Steel HR Sheets",
          "ASME SA 240 Super Duplex HR",
          "DSS Hot Rolled Heavy Sheets",
        ],
      },
      coldRolledSheets: {
        title: "Cold Rolled (CR)",
        image: coldRolledSheetsImage,
        items: [
          "Duplex Steel CR Sheets",
          "ASME SA 240 Duplex CR Stock",
          "Super Duplex Precision CR Sheets",
        ],
      },
      perforatedSheets: {
        title: "Perforated & Custom",
        image: perforatedSheetsImage,
        items: [
          "Duplex Perforated Sheets",
          "Super Duplex Perforated Stock",
          "Custom Fabricated DSS Sheets",
        ],
      },
    },

    specifications: {
      standards: "ASTM A240 / ASME SA240, EN 10088-2",
      thicknessSize: "0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      surfaceHardness: "2B, BA, No.1, Mirror, Satin, PVC | Soft to Spring Hard",
      valueAddedServices:
        "Waterjet/Laser Cutting, Heat Treatment, Pickling, Polishing",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS NO.", "WERKSTOFF NR.", "DESIGNATION"],
      rows: [
        ["Duplex 2205", "S31803", "1.4462", "F51"],
        ["Duplex 2205 (Enhanced)", "S32205", "1.4462", "F60"],
        ["Super Duplex 2507", "S32750", "1.4410", "F53"],
        ["Super Duplex S32760", "S32760", "1.4501", "F55"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Cr", "Ni", "Mo", "N", "C (Max)", "Fe"],
      rows: [
        [
          "S31803",
          "22.0 – 23.0",
          "4.5 – 6.5",
          "3.0 – 3.5",
          "0.14 – 0.20",
          "0.030",
          "63.72 min",
        ],
        [
          "S32205",
          "21.0 – 23.0",
          "4.5 – 6.5",
          "2.5 – 3.5",
          "0.08 – 0.20",
          "0.030",
          "63.54 min",
        ],
        [
          "S32750",
          "24.0 – 26.0",
          "6.0 – 8.0",
          "3.0 – 5.0",
          "0.24 – 0.32",
          "0.030",
          "58.09 min",
        ],
        [
          "S32760",
          "24.0 – 26.0",
          "6.0 – 8.0",
          "3.0 – 4.0",
          "0.20 – 0.30",
          "0.050",
          "57.61 min",
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
      ],
      rows: [
        ["Duplex (F51/F60)", "7.805", "620 min", "450 min", "1420 – 1465 °C"],
        ["Super Duplex (F53)", "7.800", "800 min", "550 min", "1350 °C"],
        ["Super Duplex (F55)", "7.800", "750 min", "550 min", "1350 °C"],
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
        ["1.00 mm", "8.00", "16.00", "25.00", "36.00"],
        ["1.50 mm", "12.00", "24.00", "37.50", "54.00"],
        ["2.00 mm", "16.00", "32.00", "50.00", "72.00"],
        ["3.00 mm", "24.00", "48.00", "75.00", "108.00"],
        ["4.00 mm", "32.00", "64.00", "100.00", "144.00"],
        ["5.00 mm", "40.00", "80.00", "125.00", "180.00"],
        ["6.00 mm", "48.00", "96.00", "150.00", "216.00"],
        ["8.00 mm", "64.00", "128.00", "200.00", "288.00"],
      ],
    },

    specializedProducts: [
      "Duplex Steel UNS S31803 / S32205 (F51/F60) Corrosion Resistant Sheets",
      "Super Duplex UNS S32750 (F53) High-Strength Marine Sheets",
      "Super Duplex UNS S32760 (F55) Zeron 100 Equivalent Stock",
      "ASTM A240 / ASME SA240 Precision Perforated & Embossed Sheets",
      "Specialized in 2B, BA, No.4, and Mirror Finish Duplex Sheets",
      "Precision Waterjet, Plasma & Laser Cutting for DSS & SDSS Alloys",
      "Leading Duplex Steel Sheet Manufacturer & Exporter in Mumbai, India",
      "High-Performance Solutions for Oil & Gas, Desalination, and Chemical Processing",
    ],

    relatedSearches: [
      "Duplex Steel S31803 Sheet Price List 2026",
      "Super Duplex S32750 Sheet Supplier Mumbai",
      "Duplex 2205 Sheet Weight Calculator",
      "Super Duplex S32760 Sheet Thickness Chart",
      "ASTM A240 Super Duplex Sheet Specification",
      "Super Duplex S32750 F53 Sheet Price per Kg India",
      "Duplex Steel S32205 Sheet Stockist Maharashtra",
      "Super Duplex Steel Perforated Sheet Manufacturer India",
      "Buy Super Duplex Sheets PDF Catalogue",
      "Duplex Steel Sheet Dimensions and Tolerance",
      "Super Duplex Bright Annealed Sheet Price India",
      "Duplex 2205 HR Hot Rolled Sheets Price",
      "Top 100 Duplex Sheet Dealers Pune",
      "Super Duplex S32760 Cold Rolled Sheet Stockyards Mumbai",
      "DSS Sheet Price List Mumbai",
      "Super Duplex F55 Sheet Equivalent Grades",
      "Cost of Duplex Steel Sheet Exporter India",
      "Super Duplex Sheet Thickness Tolerance Chart",
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
              <SectionTitle>
                Duplex & Super Duplex Grades & Applications
              </SectionTitle>
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
                  <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200">
                    <span className="font-semibold text-sm text-[#173F52]">
                      Key Applications:{" "}
                    </span>
                    <span className="text-gray-700 text-sm">
                      {section.keyApplications}
                    </span>
                  </div>
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
                Stock Availability: Duplex & Super Duplex Sheets
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
                Specifications of Duplex & Super Duplex Steel Sheets
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

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Duplex & Super Duplex Steel Sheets
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
                Search Related to Duplex & Super Duplex Steel Sheets
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

            {/* Get A Quote - UPDATED */}
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
      {/* FLOATING WHATSAPP & CALL BUTTONS - UPDATED */}
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

export default DuplexSteelSheets;
