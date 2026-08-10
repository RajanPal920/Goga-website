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

const TitaniumTubes = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Titanium Tubes Supplier - Grade 2 & Grade 5",
    subtitle:
      "Premium Quality ASTM B338 / ASME SB338 Titanium Tubes – Exceptional Strength-to-Weight Ratio, Extraordinary Corrosion Resistance & High-Temperature Stability for Aerospace, Marine & Industrial Applications",

    technicalOverview: {
      title: "Titanium Tubes: Technical Overview",
      description:
        "Titanium tubes are the premier choice for engineering projects requiring an exceptional strength-to-weight ratio combined with extraordinary corrosion resistance. Titanium is approximately 45% lighter than steel while maintaining comparable tensile strength, making it indispensable in aerospace, medical, and high-performance industrial sectors. These tubes are non-magnetic and possess a low thermal expansion coefficient, ensuring dimensional stability under fluctuating temperatures.",
    },

    gradeBreakdown: [
      {
        title: "Titanium Grade 2 Tubes (Commercially Pure)",
        description:
          "Titanium Grade 2 (UNS R50400) is the most widely used 'Commercially Pure' (CP) grade. It offers an optimal balance of moderate strength and excellent cold-formability. It is often referred to as the 'workhorse' of the industrial piping and heat exchanger industry.",
        items: [
          "Corrosion Profile: Exceptional resistance to seawater and salt solutions. Virtually immune to corrosion in most oxidizing environments and handles nitric and organic acids with ease.",
          "Mechanical Properties: Offers high ductility and superior weldability. Easier to fabricate and machine compared to higher-strength alloys.",
        ],
        keyApplications:
          "Marine heat exchangers, power plant condensers, chemical processing piping, and desalination plant evaporators.",
      },
      {
        title: "Titanium Grade 5 Tubes (Ti-6Al-4V)",
        description:
          "Titanium Grade 5 (UNS R56400) is an alpha-beta alloy containing 6% Aluminum and 4% Vanadium. This is the most common titanium alloy globally, offering roughly double the tensile strength of Grade 2 while maintaining excellent fatigue resistance and toughness.",
        items: [
          "High-Strength Performance: Utilized where mechanical load and weight savings are top priorities. Can be heat-treated to further enhance properties, making it critical for structural aerospace components.",
          "Thermal Stability: Maintains high strength at temperatures up to 400°C (752°F), far exceeding the limits of commercially pure grades.",
        ],
        keyApplications:
          "Aerospace hydraulic lines, high-performance exhaust systems, subsea oil and gas instrumentation, and structural engine components.",
      },
    ],

    keyFeatures: [
      "Exceptional strength-to-weight ratio – 45% lighter than steel",
      "Extraordinary corrosion resistance in seawater and oxidizing environments",
      "Non-magnetic with low thermal expansion coefficient",
      "Available in Grade 2 (Commercially Pure) and Grade 5 (Ti-6Al-4V)",
      "Grade 2: High ductility, superior weldability, excellent cold-formability",
      "Grade 5: Double the tensile strength of Grade 2 with excellent fatigue resistance",
      'OD: 6.0mm - 152.4mm | Wall: 0.5mm - 20mm | NB: 1/2" - 24" NB',
      "Condition & Finish: Annealed, Polished, Pickled, Bright Annealed, Mirror Finish",
      "Types & Forms: Seamless, Welded, ERW, Fabricated | Round, Square, Rectangle",
      "Complies with ASTM B337, B338, B861, B862 / ASME SB338, SB861",
    ],

    applications: [
      "Marine heat exchangers and power plant condensers",
      "Chemical processing piping and desalination evaporators",
      "Aerospace hydraulic lines and exhaust systems",
      "Subsea oil and gas instrumentation",
      "Structural engine components",
      "Medical and surgical instruments",
      "High-performance automotive and motorsports",
      "Heat exchangers and condenser systems",
    ],

    stockAvailability: {
      seamlessTubes: {
        title: "Seamless Tubes",
        image: seamlessTubesImage,
        items: [
          "ASTM B861 Titanium Seamless Tube",
          "Grade 2 Pure Titanium Seamless",
          "Grade 5 High Strength Seamless",
          "ASME SB861 Cold Drawn Tubes",
          "Precision Seamless Titanium Stock",
        ],
      },
      weldedTubes: {
        title: "Welded & ERW Tubes",
        image: weldedTubesImage,
        items: [
          "ASTM B862 Titanium Welded Tube",
          "Grade 2 ERW Chemical Tubing",
          "Large Diameter Fabricated Tubes",
          "EFW High Corrosion Welded Stock",
          "Bright Annealed Welded Tubes",
        ],
      },
      squareTubes: {
        title: "Square & Rectangle Tubes",
        image: squareTubesImage,
        items: [
          "Titanium Grade 5 Square Tubing",
          "Grade 2 Rectangular Alloy Tubes",
          "Custom Hollow Titanium Sections",
          "Aviation Grade Square Stock",
          "Specialized Rectangle Tubing",
        ],
      },
      heatExchangerTubes: {
        title: "Heat Exchanger Tubes",
        image: heatExchangerTubesImage,
        items: [
          "ASTM B338 Condenser Tubing",
          "Grade 2 Heat Exchanger Tube",
          "U-Bend Precision Titanium Tubes",
          "Marine Application Heat Tubing",
          "ASME SB338 Exchanger Stock",
        ],
      },
      instrumentationTubes: {
        title: "Instrumentation Tubes",
        image: instrumentationTubesImage,
        items: [
          "Titanium Grade 2 Precision Tubes",
          "High Pressure Control Tubing",
          "Bright Annealed (BA) Titanium",
          "Hydraulic Grade Titanium Tubing",
          "Grade 5 Capillary Process Tubes",
        ],
      },
      specializedTubes: {
        title: "Specialized Alloy Tubes",
        image: specializedTubesImage,
        items: [
          "Medical Grade Titanium Tubing",
          "Exhaust Application Titanium Tubes",
          "Custom Fabricated Alloy Sections",
          "Aerospace Structural Tubing",
          "Pitting Resistant Titanium Grade 5",
        ],
      },
    },

    specifications: {
      standards: "ASTM B337, B338, B861, B862 / ASME SB338, SB861",
      sizeRange: 'OD: 6.0mm - 152.4mm | Wall: 0.5mm - 20mm | NB: 1/2" - 24" NB',
      conditionFinish:
        "Annealed, Polished, Pickled, Bright Annealed, Mirror Finish",
      typesForms:
        "Seamless, Welded, ERW, Fabricated | Round, Square, Rectangle",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["Titanium Grade 2", "R50400", "3.7035", "CP Titanium (Pure)"],
        ["Titanium Grade 5", "R56400", "3.7165", "Ti-6Al-4V (Alloy)"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ti", "Al", "V", "Fe (max)", "O (max)"],
      rows: [
        ["Grade 2", "Bal.", "-", "-", "0.30", "0.25"],
        ["Grade 5", "Bal.", "5.5 - 6.75", "3.5 - 4.5", "0.40", "0.20"],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Density (g/cm³)",
      ],
      rows: [
        ["Titanium Grade 2", "345 min", "275 min", "20% min", "4.51"],
        ["Titanium Grade 5", "895 min", "828 min", "10% min", "4.43"],
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
      "Titanium Grade 2 (CP) Pure Corrosion Resistant Tube Dealer",
      "ASTM B338 / SB338 Titanium Tubing Exporter",
      "ASME SB861 Welded & Seamless Titanium Tubes at Best Price",
      "Medical, Dental & Surgical Grade Tubing Supplier",
      "Precision Bright Annealed Titanium Grade 5 Tubes",
      "Heat Exchanger & Condenser Titanium Tubing Mumbai",
      "Aviation & Defense Standards Certified Titanium Stock",
      "Cold Drawn, Pickled & Polished Finish Titanium Tubes",
      "High Vacuum & Desalination Tubing Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "Titanium Grade 2 Tube Price per Kg India",
      "Titanium Gr 5 Seamless Tube In Pune",
      "ASTM B338 Condenser Tube Supplier Mumbai",
      "Titanium Tube Weight Chart PDF",
      "Cost Of Titanium Welded Tubes Exporter",
      "Titanium Grade 5 Heat Exchanger Tube Latest Price",
      "Titanium Tubes Price List In India",
      "UNS R56400 Chemical Composition",
      "Titanium Tubing Stockist Maharashtra",
      "Titanium Seamless Tube Dimensions",
      "Cost Of Titanium Gr 2 Bright Annealed Tubing",
      "Titanium Tubes Equivalent Grades",
      "Titanium Grade 5 Tube Price In India",
      "Titanium Forged Tubes",
      "Price Of Titanium Gr 2 Seamless Tubes",
      "Titanium Tubes Specifications ASTM B861",
      "Titanium Hot Rolled Tubes Supplier",
      "ASME SB338 Titanium Tubes",
      "Titanium Tubes Supplier In Mumbai",
      "Titanium Grade 2 Tubes Suppliers In Gujarat",
      "Titanium Cold Drawn Tubes Price List",
      "Titanium Alloy Round Tube",
      "Titanium Tubes Catalogue",
      "Titanium Tubes Manufacturers India",
      "Titanium Threaded Tubes",
      "Titanium Grade 5 Seamless Tubes Supplier In India",
      "Titanium Welded Tubes Price List in India",
      "Titanium Tubes Dimensions Chart",
      "Grade 2 & Grade 5 Rods & Tubes Stockist In Mumbai",
      "Titanium Tubes Stockyard",
      "Titanium Tubes Weight Calculator",
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
              <SectionTitle>Titanium Grade Characteristics</SectionTitle>
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
                Stock Availability of Titanium Grade 2 & Grade 5 Tubes
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
                Technical Specifications: Titanium Tubes
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

            {/* Dimensions Chart */}
            <section className="mb-8">
              <SectionTitle>
                Titanium Tubes Dimensions Chart (I.D. in Inches)
              </SectionTitle>
              <Table
                headers={productData.dimensionsChart.headers}
                rows={productData.dimensionsChart.rows}
              />
            </section>

            {/* Wall Thickness Chart */}
            <section className="mb-8">
              <SectionTitle>
                Titanium Tubing Size Wall Thickness Range
              </SectionTitle>
              <Table
                headers={productData.wallThicknessChart.headers}
                rows={productData.wallThicknessChart.rows}
              />
            </section>

            {/* Pressure Rating Chart */}
            <section className="mb-8">
              <SectionTitle>Titanium Tubes Pressure Rating (psig)</SectionTitle>
              <Table
                headers={productData.pressureRatingChart.headers}
                rows={productData.pressureRatingChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Titanium Tubes & Tubing
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
              <SectionTitle>Searches Related to Titanium Tubes</SectionTitle>
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

export default TitaniumTubes;
