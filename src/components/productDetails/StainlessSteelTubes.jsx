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

const StainlessSteelTubes = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title:
      "Stainless Steel Tubes Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    subtitle:
      "Premium Quality ASTM A213 / ASME SA213 Stainless Steel Tubes – Comprehensive Range of Austenitic, Heat-Resistant & Specialized Grades for Industrial, Marine, Chemical & High-Temperature Applications",

    technicalOverview: {
      title: "Stainless Steel Tubes: Technical Overview",
      description:
        "Stainless steel tubes are essential structural and mechanical components used across a vast range of industrial applications. These tubes are categorized by their alloying elements, which dictate their corrosion resistance, high-temperature stability, and mechanical strength. From standard architectural supports to high-pressure heat exchangers, these grades are engineered to perform under specific environmental stresses.",
    },

    gradeBreakdown: [
      {
        title: "Standard Austenitic Grades: 304/304L & 316/316L",
        items: [
          "SS 304/304L (UNS S30400/S30403): The most widely used '18/8' stainless steel. Grade 304L features lower carbon to prevent sensitization during welding. These tubes are the standard for food and beverage processing, dairy equipment, and general industrial piping.",
          "SS 316/316L (UNS S31600/S31603): Enhanced with Molybdenum to provide superior resistance to pitting and crevice corrosion in chloride-rich environments. They are the primary choice for pharmaceutical cleanroom piping, marine hardware, and chemical process lines.",
        ],
      },
      {
        title: "High-Temperature & Stabilized Grades",
        items: [
          "SS 310S (UNS S31008): A high-chromium, high-nickel alloy designed for continuous service at temperatures up to 1100°C. It maintains high strength and excellent oxidation resistance, making it essential for radiant tubes, combustion chambers, and kiln liners.",
          "SS 321 (UNS S32100): Titanium-stabilized to prevent intergranular corrosion when exposed to temperatures in the chromium carbide precipitation range ($427°C$ to $815°C$). It is widely used in aircraft exhaust manifolds, expansion joints, and high-temperature refinery equipment.",
        ],
      },
      {
        title: "Specialized Corrosion Resistant Grades: 317L & 904L",
        items: [
          "SS 317L (UNS S31703): A low-carbon version of 317 with increased molybdenum content compared to 316L. It offers better resistance to chemical attack from sulfuric, nitric, and phosphoric acids. It is commonly used in pulp and paper bleaching plants and air pollution control systems.",
          "SS 904L (UNS N08904): A high-alloy austenitic tube with added copper. It is specifically designed for environments involving strong reducing acids, such as dilute sulfuric acid. It offers excellent resistance to stress corrosion cracking and localized pitting in halide environments.",
        ],
      },
    ],

    keyFeatures: [
      "Comprehensive range of grades: 304, 304L, 316, 316L, 310S, 321, 317L, 904L & more",
      "Available in Seamless, Welded, ERW, EFW, Square, Rectangle, U-Bend",
      "Size: 6mm OD to 610mm OD | Wall thickness: 0.5mm to 30mm",
      "Condition & Finish: Annealed & Pickled, Bright Annealed, Polished (No.4, 8 Mirror Finish)",
      "Excellent corrosion resistance, high-temperature stability & mechanical strength",
      "Complies with ASTM A213, A249, A269, A312, A511 / ASME SA213, SA312",
    ],

    applications: [
      "Food and beverage processing, dairy equipment",
      "Pharmaceutical cleanroom piping and marine hardware",
      "Radiant tubes, combustion chambers, and kiln liners",
      "Aircraft exhaust manifolds and expansion joints",
      "Pulp and paper bleaching plants",
      "Air pollution control systems",
      "Chemical process lines and high-temperature refinery equipment",
      "Heat exchangers and condenser systems",
    ],

    stockAvailability: {
      seamlessTubes: {
        title: "Seamless Tubes",
        image: seamlessTubesImage,
        items: [
          "SS 304/304L Seamless Tube",
          "SS 316/316L Seamless Tubing",
          "SS 904L High Acid Tubing",
          "ASTM A213 Instrumentation Tubes",
          "Cold Drawn Precision SS Tubes",
        ],
      },
      weldedTubes: {
        title: "Welded & ERW Tubes",
        image: weldedTubesImage,
        items: [
          "ASTM A249 SS Welded Tube",
          "SS 310S ERW Boiler Tubing",
          "Large Diameter Fabricated SS Tubes",
          "EFW Stainless Structural Tubes",
          "Bright Annealed Welded Stock",
        ],
      },
      squareTubes: {
        title: "Square & Rectangle Tubes",
        image: squareTubesImage,
        items: [
          "SS 304 Square Tubing",
          "SS 316L Rectangular Tubes",
          "Stainless Custom Hollow Sections",
          "Polished SS Square Tube Stock",
          "Industrial SS Rectangle Tubes",
        ],
      },
      heatExchangerTubes: {
        title: "Heat Exchanger Tubes",
        image: heatExchangerTubesImage,
        items: [
          "SS 310S Heat Exchanger Tubes",
          "ASTM A213 Condenser Tubing",
          "SS 317L Corrosion Resistant Tubes",
          "High Pressure U-Bend SS Tubing",
          "Sanitary Heat Exchange Tubes",
        ],
      },
      instrumentationTubes: {
        title: "Instrumentation Tubes",
        image: instrumentationTubesImage,
        items: [
          "SS 316 Precision Tubes",
          "SS 304 Control Line Tubing",
          "Bright Annealed (BA) Tubing",
          "ASTM A269 High Pressure Lines",
          "Mirror Polished Exterior Tubes",
        ],
      },
      specializedTubes: {
        title: "Specialized SS Tubes",
        image: specializedTubesImage,
        items: [
          "SS 321 Titanium Stabilized Tubes",
          "SS 904L Phosphoric Acid Tubes",
          "Food & Dairy Grade Tubing",
          "ASTM A511 Mechanical Tubes",
          "Custom Fabricated SS Tubing",
        ],
      },
    },

    specifications: {
      standards: "ASTM A213, A249, A269, A312, A511 / ASME SA213, SA312",
      sizeRange: "6mm OD to 610mm OD | Wall thickness: 0.5mm to 30mm",
      conditionFinish:
        "Annealed & Pickled, Bright Annealed, Polished (No.4, 8 Mirror Finish)",
      typesForms:
        "Seamless, Welded, ERW, EFW | Round, Square, Rectangular, U-Bend",
    },

    equivalentGrades: {
      headers: [
        "Grade Series",
        "UNS Number",
        "Werkstoff Nr.",
        "Common Designation",
      ],
      rows: [
        ["SS 304/304L", "S30400/S30403", "1.4301/1.4306", "18/8 Stainless"],
        ["SS 316/316L", "S31600/S31603", "1.4401/1.4404", "Marine Grade"],
        ["SS 310S", "S31008", "1.4845", "Heat Resistant"],
        ["SS 321", "S32100", "1.4541", "Titanium Stabilized"],
        ["SS 904L", "N08904", "1.4539", "Super Austenitic"],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Cr", "Ni", "Mo", "C (max)", "Other"],
      rows: [
        ["304L", "18.0-20.0", "8.0-12.0", "-", "0.030", "-"],
        ["316L", "16.0-18.0", "10.0-14.0", "2.0-3.0", "0.030", "-"],
        ["310S", "24.0-26.0", "19.0-22.0", "-", "0.08", "Si 1.50"],
        ["317L", "18.0-20.0", "11.0-15.0", "3.0-4.0", "0.030", "-"],
        ["904L", "19.0-23.0", "23.0-28.0", "4.0-5.0", "0.020", "Cu 1.0-2.0"],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Hardness (Rockwell)",
      ],
      rows: [
        ["SS 304/316", "515 min", "205 min", "40% min", "92 HRB max"],
        ["SS 310S", "515 min", "205 min", "40% min", "95 HRB max"],
        ["SS 904L", "490 min", "220 min", "35% min", "90 HRB max"],
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
      "SS 304 / 304L / 316 / 316L Food & Marine Tube Dealer",
      "ASTM A213 / A312 SS Seamless Tubing Exporter",
      "ASME SA213 Welded & ERW Stainless Tubes at Best Price",
      "SS 310S / 321 / 317L Heat & Corrosion Resistant Tubing",
      "Precision Bright Annealed SS 904L Tubes",
      "Heat Exchanger & Instrumentation SS Tubing Mumbai",
      "ASTM & EN Standards Certified Stainless Tubing",
      "Cold Drawn, Mirror Polished Finish Stainless Tubes",
      "Pharmaceutical & Sanitary Tubing Manufacturer",
      "Specialized in Shailesh Pipe Fitting India Quality Standard",
    ],

    relatedSearches: [
      "SS 304 Tube Price per Kg India",
      "SS 316 Seamless Tube In Pune",
      "ASTM A213 Condenser Tube Supplier Mumbai",
      "SS Tube Weight Chart PDF",
      "Cost Of SS 304L Welded Tubes Exporter",
      "SS 316L Heat Exchanger Tube Latest Price",
      "SS Tubes Price List In India",
      "UNS S31603 Chemical Composition",
      "Stainless Tubing Stockist Maharashtra",
      "SS Seamless Tube Dimensions",
      "Cost Of SS 310S Bright Annealed Tubing",
      "SS Tubes Equivalent Grades",
      "SS 904L Tube Price In India",
      "SS 321 Forged Tubes",
      "Price Of SS 317L Seamless Tubes",
      "SS Tubes Specifications ASTM A249",
      "SS Hot Rolled Tubes Supplier",
      "ASME SA213 Stainless Tubes",
      "SS Tubes Supplier In Mumbai",
      "SS 304 Tubes Suppliers In Gujarat",
      "SS Cold Drawn Tubes Price List",
      "Stainless Steel Round Tube",
      "SS Tubes Catalogue",
      "Stainless Steel Tubes Manufacturers India",
      "SS Threaded Tubes",
      "SS 316 Seamless Tubes Supplier In India",
      "SS Welded Tubes Price List in India",
      "Stainless Steel Tubes Dimensions Chart",
      "304 & 316 Rods & Tubes Stockist In Mumbai",
      "SS Tubes Stockyard",
      "Stainless Steel Tubes Weight Calculator",
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
                Stock Availability of Stainless Steel Tubes & Tubing
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
                Technical Specifications: Stainless Steel Tubes
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
                Stainless Steel Tubes Dimensions Chart (I.D. in Inches)
              </SectionTitle>
              <Table
                headers={productData.dimensionsChart.headers}
                rows={productData.dimensionsChart.rows}
              />
            </section>

            {/* Wall Thickness Chart */}
            <section className="mb-8">
              <SectionTitle>
                Stainless Steel Tubing Size Wall Thickness Range
              </SectionTitle>
              <Table
                headers={productData.wallThicknessChart.headers}
                rows={productData.wallThicknessChart.rows}
              />
            </section>

            {/* Pressure Rating Chart */}
            <section className="mb-8">
              <SectionTitle>
                Stainless Steel Tubes Pressure Rating (psig)
              </SectionTitle>
              <Table
                headers={productData.pressureRatingChart.headers}
                rows={productData.pressureRatingChart.rows}
              />
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Stainless Steel Tubes & Tubing
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
                Searches Related to Stainless Steel Tubes
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

export default StainlessSteelTubes;
