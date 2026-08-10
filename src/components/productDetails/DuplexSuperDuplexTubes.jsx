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
import productImage from "../../assets/images/productImage/tubes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Stock Availability Images (using tube-specific or unified images)
import seamlessTubesImage from "../../assets/images/stock/seamless-tubes.jpg";
import weldedTubesImage from "../../assets/images/stock/welded-tubes.jpg";
import squareTubesImage from "../../assets/images/stock/square-tubes.jpg";
import heatExchangerTubesImage from "../../assets/images/stock/heat-exchanger-tubes.jpg";
import instrumentationTubesImage from "../../assets/images/stock/instrumentation-tubes.jpg";
import specializedTubesImage from "../../assets/images/stock/specialized-tubes.jpg";

const DuplexSuperDuplexTubes = () => {
  // ===============================
  // DATA - From raymondispat.com/duplex-super-duplex-steel-tubes
  // ===============================

  const productData = {
    title:
      "Duplex & Super Duplex Steel Tubes Supplier – S31803, S32750, S32760",
    subtitle:
      "Premium Quality ASTM A789 / ASME SA789 Duplex & Super Duplex Steel Tubes – High-Strength, Corrosion-Resistant Piping Solutions for Oil & Gas, Marine, and Chemical Processing",

    technicalOverview: {
      title: "Duplex & Super Duplex Steel Tubes: Technical Overview",
      description:
        "Duplex and Super Duplex steel tubes are high-performance piping solutions characterized by a dual-phase microstructure consisting of approximately 50% austenite and 50% ferrite. This metallurgical balance provides a unique combination of high mechanical strength—typically double that of standard austenitic stainless steels—and exceptional resistance to corrosion. These tubes are essential for fluid handling in environments where weight reduction, high pressure, and resistance to chloride-induced stress corrosion cracking are critical.",
    },

    keyCharacteristics: {
      title: "Key Material Characteristics",
      items: [
        "High Mechanical Strength: Yield strength approximately double that of 316L stainless steel, allowing for thinner wall thicknesses and significant weight savings.",
        "Exceptional Corrosion Resistance: Superior resistance to pitting, crevice corrosion, and stress corrosion cracking (SCC) in chloride-bearing environments.",
        "Dual-Phase Microstructure: Balanced 50/50 austenite/ferrite structure provides a combination of high strength and good ductility.",
        "High PREN Values: Super Duplex grades (S32750, S32760) feature a Pitting Resistance Equivalent Number (PREN) of >40, ideal for aggressive service like warm seawater.",
        "Good Weldability: Can be welded using standard TIG and MIG processes with controlled heat input to maintain phase balance in the heat-affected zone.",
        "Available in multiple grades: S31803, S32205 (2205), S32750 (2507), S32760 (Zeron 100)",
        'Size Range: 1/2" NB to 24" NB | Custom Sizes available on request',
        "Condition & Finish: Annealed & Pickled, Bright Annealed, Polished (No.1, 4, 8 Mirror)",
        "Types & Forms: Seamless, Welded, ERW, Fabricated | Round, Square, Rectangle, Hex",
        "Complies with ASTM A789 / ASME SA789, ASTM A790, API",
      ],
    },

    industrialApplications: {
      title: "Industrial Applications",
      items: [
        "Oil and gas gathering lines and subsea umbilicals",
        "Chemical process piping and heat exchangers for brackish water",
        "Municipal desalination systems and high-pressure RO (Reverse Osmosis) piping",
        "Offshore firewater systems and flue-gas desulfurization (FGD) equipment",
        "Marine engineering and seawater handling systems",
        "High-pressure acid production and sour service applications",
        "Instrumentation and control tubing in corrosive environments",
        "Structural components in weight-sensitive applications",
      ],
    },

    keyFeatures: [
      "High mechanical strength – double that of standard austenitic stainless steels",
      "Superior resistance to pitting, crevice corrosion, and stress corrosion cracking (SCC)",
      "Outstanding resistance to chloride-induced SCC up to 150°C",
      "High PREN values (>40 for Super Duplex) for aggressive service",
      "Lower coefficient of thermal expansion than austenitic steels",
      "Weight and cost savings due to thinner wall thickness capability",
      "Excellent weldability with controlled heat input",
      "Available in seamless, welded, ERW, and fabricated forms",
      'Size Range: 1/2" NB to 24" NB | Custom Sizes available',
      "Condition & Finish: Annealed & Pickled, Bright Annealed, Polished (No.1, 4, 8 Mirror)",
      "Complies with ASTM A789 / ASME SA789, ASTM A790, API",
    ],

    applications: [
      "Oil and gas gathering lines",
      "Subsea umbilicals",
      "Chemical process piping",
      "Heat exchangers for brackish water",
      "Municipal desalination systems",
      "High-pressure RO (Reverse Osmosis) piping",
      "Offshore firewater systems",
      "Flue-gas desulfurization (FGD) equipment",
      "Marine engineering",
      "Instrumentation and control tubing",
    ],

    stockAvailability: {
      seamlessTubes: {
        title: "Seamless Tubes",
        image: seamlessTubesImage,
        items: [
          "ASTM A789 Duplex Seamless Tube",
          "ASME SA 789 Duplex Seamless Tube",
          "Super Duplex Steel Seamless Tubing",
          "Cold Drawn Seamless Tubes",
          "Super Duplex Seamless Tubes",
        ],
      },
      weldedTubes: {
        title: "Welded & ERW Tubes",
        image: weldedTubesImage,
        items: [
          "ASTM A789 Duplex Welded Tube",
          "SDSS Welded Tubes & Tubing",
          "DSS ERW / EFW Tubes",
          "Electrical Resistance Welded Tubes",
          "Fabricated Large Diameter Tubes",
        ],
      },
      squareTubes: {
        title: "Square & Rectangle Tubes",
        image: squareTubesImage,
        items: [
          "Super Duplex Square Tubing",
          "Duplex Stainless Square Tubes",
          "SDSS Rectangular Welded Tubes",
          "Duplex Steel Rectangle Tubing",
          "Rectangle Tubes & Sections",
        ],
      },
      heatExchangerTubes: {
        title: "Heat Exchanger Tubes",
        image: heatExchangerTubesImage,
        items: [
          "Super Duplex Heat Exchanger Tube",
          "DSS Heat Exchanger Welded Tubes",
          "High Thermal Conductive Tubing",
          "U-Bend Heat Exchanger Tubes",
          "Specialized Instrumentation Tubes",
        ],
      },
      instrumentationTubes: {
        title: "Instrumentation Tubes",
        image: instrumentationTubesImage,
        items: [
          "Duplex Precision Control Tubes",
          "Bright Annealed (BA) Tubing",
          "Super Duplex Capillary Tubes",
          "High Pressure Hydraulic Tubes",
          "Mirror Finish Exterior Tubing",
        ],
      },
      specializedTubes: {
        title: "Hollow Sections & Billets",
        image: specializedTubesImage,
        items: [
          "Super Duplex Structural Tubes",
          "SDSS Custom Hollow Sections",
          "ASME SA789 Forged Tubes",
          "Heavy Wall Duplex Tubing",
          "Custom Fabricated Sections",
        ],
      },
    },

    specifications: {
      standards: "ASTM A789 / ASME SA789, ASTM A790, API",
      sizeRange: '1/2" NB to 24" NB | Custom Sizes available on request',
      conditionFinish:
        "Annealed & Pickled, Bright Annealed, Polished (No.1, 4, 8 Mirror)",
      typesForms:
        "Seamless, Welded, ERW, Fabricated | Round, Square, Rectangle, Hex",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Duplex Steel", "S31803 / S32205", "1.4462", "2205 | F51 / F60"],
        ["Super Duplex", "S32750", "1.4410", "2507 | F53"],
        ["Super Duplex", "S32760", "1.4501", "Zeron 100 | F55"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Cr", "Ni", "Mo", "N", "PREN (min)"],
      rows: [
        [
          "S31803 (2205)",
          "21.0 – 23.0",
          "4.5 – 6.5",
          "2.5 – 3.5",
          "0.08 – 0.20",
          "31",
        ],
        [
          "S32750 (2507)",
          "24.0 – 26.0",
          "6.0 – 8.0",
          "3.0 – 5.0",
          "0.24 – 0.32",
          "40",
        ],
        [
          "S32760 (F55)",
          "24.0 – 26.0",
          "6.0 – 8.0",
          "3.0 – 4.0",
          "0.20 – 0.30",
          "40",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Hardness (Brinell)",
      ],
      rows: [
        ["S31803 / S32205", "620 min", "450 min", "25% min", "290 max"],
        ["S32750 (2507)", "800 – 1000", "550 min", "15% min", "310 max"],
        ["S32760 (F55)", "750 min", "550 min", "25% min", "270 max"],
      ],
    },

    dimensionsChart: {
      headers: [
        "Tube O.D.",
        "Wall (Inch)",
        "Gauge 10 (0.134)",
        "Gauge 12 (0.109)",
        "Gauge 14 (0.083)",
        "Gauge 16 (0.065)",
        "Gauge 18 (0.049)",
        "Gauge 20 (0.035)",
        "Gauge 22 (0.028)",
      ],
      rows: [
        [
          '1/2"',
          "I.D. (In)",
          "0.232",
          "0.282",
          "0.334",
          "0.370",
          "0.402",
          "0.430",
          "0.444",
        ],
        [
          '3/4"',
          "I.D. (In)",
          "0.482",
          "0.532",
          "0.584",
          "0.620",
          "0.652",
          "0.680",
          "0.694",
        ],
        [
          '1"',
          "I.D. (In)",
          "0.732",
          "0.782",
          "0.834",
          "0.870",
          "0.902",
          "0.930",
          "0.944",
        ],
        [
          '1-1/2"',
          "I.D. (In)",
          "1.232",
          "1.282",
          "1.334",
          "1.370",
          "1.402",
          "1.430",
          "1.444",
        ],
        [
          '2"',
          "I.D. (In)",
          "1.732",
          "1.782",
          "1.834",
          "1.870",
          "1.902",
          "1.930",
          "1.944",
        ],
        [
          '3"',
          "I.D. (In)",
          "2.732",
          "2.782",
          "2.834",
          "2.870",
          "2.902",
          "2.930",
          "2.944",
        ],
        [
          '4"',
          "I.D. (In)",
          "3.732",
          "3.782",
          "3.834",
          "3.870",
          "3.902",
          "3.930",
          "3.944",
        ],
      ],
    },

    wallThicknessChart: {
      headers: ["Wall Thickness (Inch)", "Tube Sizes (O.D. in Inches)"],
      rows: [
        [".028", "1/8, 3/16, 1/4, 5/16, 3/8, 1/2, 3/4, 1, 1 1/2, 2"],
        [".035", "1/8, 1/4, 5/16, 3/8, 1/2, 5/8, 3/4, 7/8, 1, 1 1/4, 1 1/2, 2"],
        [
          ".049",
          "3/16, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8, 1, 1 1/8, 1 1/4, 1 1/2, 2",
        ],
        [".065", "1/4, 3/8, 1/2, 5/8, 3/4, 7/8, 1, 1 1/4, 1 1/2, 2, 2 1/2, 3"],
        [".083", "1/4, 3/8, 1/2, 5/8, 3/4, 1, 1 1/4, 1 1/2, 2, 2 1/2, 3"],
        [".109", "1/2, 3/4, 1, 1 1/4, 1 1/2, 2"],
        [".120", "1/2, 5/8, 3/4, 1, 1 1/4, 1 1/2, 2, 2 1/2, 3"],
      ],
    },

    pressureRatingChart: {
      headers: [
        "Tube O.D. (in.)",
        ".028",
        ".035",
        ".049",
        ".065",
        ".083",
        ".095",
        ".109",
      ],
      rows: [
        ["1/8", "7900", "10100", "-", "-", "-", "-", "-"],
        ["1/4", "3700", "4800", "7000", "9500", "-", "-", "-"],
        ["5/16", "-", "3700", "5400", "7300", "-", "-", "-"],
        ["3/8", "-", "3100", "4400", "6100", "-", "-", "-"],
        ["1/2", "-", "2300", "3200", "4400", "5900", "-", "-"],
        ["3/4", "-", "-", "2200", "3000", "4000", "4600", "-"],
        ["1", "-", "-", "2200", "2900", "3400", "3900", "4300"],
      ],
    },

    specializedProducts: [
      "Duplex S31803 / S32205 High Strength Tube Dealer",
      "ASTM A789 Super Duplex S32750 / S32760 Exporter",
      "ASME SA789 Seamless & Welded Tubes at Best Price",
      "Offshore & Marine Desalination Tubing Supplier in India",
      "Precision Bright Annealed Super Duplex Tubes",
      "Heat Exchanger & Condenser Tubing Stockist in Mumbai",
      "ASTM A789 Standards Certified Duplex Tubing Stock",
      "Cold Drawn, Mirror Polished Finish Tubes Supplier",
      "DSS & SDSS ERW, EFW & Welded Tubing Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Super Duplex Steel Tube Price per Kg India",
      "Duplex 2205 Seamless Tube In Pune",
      "ASTM A789 Condenser Tube Supplier Mumbai",
      "Super Duplex Tube Weight Chart PDF",
      "Cost Of Super Duplex Welded Tubes Exporter",
      "SDSS S32750 Heat Exchanger Tube Latest Price",
      "Duplex Steel Tubes Price List In India",
      "S32760 Chemical Composition",
      "Super Duplex Tubing Stockist Maharashtra",
      "Duplex Steel Seamless Tube Dimensions",
      "Cost Of Super Duplex S32750 Tubing",
      "Duplex Tubes Equivalent Grades",
      "Super Duplex Steel Tube Price In India",
      "Duplex Forged Tubes",
      "Price Of SDSS 2507 Seamless Tubes",
      "Duplex Steel Tubes Specifications ASTM A789",
      "Super Duplex Hot Rolled Tubes Supplier",
      "ASME SA789 Duplex Steel Tubes",
      "Super Duplex Tubes Supplier In Mumbai",
      "Duplex Steel Tubes Suppliers In Gujarat",
      "SDSS Cold Drawn Tubes Price List",
      "Duplex Alloy Round Tube",
      "Super Duplex Steel Tubes Catalogue",
      "SDSS Tubes Manufacturers India",
      "Duplex Threaded Tubes",
      "Super Duplex Seamless Tubes Supplier In India",
      "Duplex Welded Tubes Price List in India",
      "Duplex Steel Tubes Dimensions Chart",
      "2205 & 2507 Rods & Tubes Stockist In Mumbai",
      "SDSS Tubes Stockyard",
      "Duplex Steel Tubes Weight Calculator",
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
                Stock Availability of Duplex / Super Duplex Steel Tubes
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
                Technical Specifications: Duplex & Super Duplex Steel Tubes
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
                Unified Equivalent Grades: Duplex & Super Duplex Tubes
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
                Duplex & Super Duplex Steel Tubes Dimensions Chart (I.D. in
                Inches)
              </SectionTitle>
              <Table
                headers={productData.dimensionsChart.headers}
                rows={productData.dimensionsChart.rows}
              />
            </section>

            {/* Wall Thickness Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex & Super Duplex Steel Tubing Size Wall Thickness Range
              </SectionTitle>
              <Table
                headers={productData.wallThicknessChart.headers}
                rows={productData.wallThicknessChart.rows}
              />
            </section>

            {/* Pressure Rating Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex & Super Duplex Steel Tubes Pressure Rating (psig)
              </SectionTitle>
              <Table
                headers={productData.pressureRatingChart.headers}
                rows={productData.pressureRatingChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Duplex & Super Duplex Tubes
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
                Searches Related to Duplex & Super Duplex Steel Tubes
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

export default DuplexSuperDuplexTubes;
