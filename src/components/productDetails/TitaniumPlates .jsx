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
import customPlatesImage from "../../assets/images/stock/custom-plates.jpg";

const TitaniumPlates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Titanium Plates Supplier - Grade 2 & Grade 5",
    subtitle:
      "Premium Quality ASTM B265 / ASME SB265 Titanium Plates – Exceptional Strength-to-Weight Ratio, Extraordinary Corrosion Resistance & High-Temperature Stability for Aerospace, Medical & Industrial Applications",

    technicalOverview: {
      title:
        "Titanium Alloy Plates: Technical Overview and Grade Characteristics",
      description:
        "Titanium plates are the premier choice for engineering projects requiring an exceptional strength-to-weight ratio combined with extraordinary corrosion resistance. Titanium is approximately 45% lighter than steel while maintaining comparable tensile strength, making it indispensable in aerospace, medical, and high-performance industrial sectors. These plates are non-magnetic and possess a low thermal expansion coefficient, ensuring dimensional stability under fluctuating temperatures. The durability of Titanium stems from the instantaneous formation of a stable, protective titanium oxide (TiO₂) film when exposed to oxygen. This passive layer is self-healing and provides a nearly impenetrable barrier against seawater, chlorine, and aggressive acids.",
    },

    gradeBreakdown: [
      {
        title: "Titanium Grade 2 Plates (Commercially Pure)",
        description:
          "Titanium Grade 2 (UNS R50400) is the most widely used 'Commercially Pure' (CP) grade. It offers an optimal balance of moderate strength and excellent cold-formability. It is often referred to as the 'workhorse' of the industrial piping and heat exchanger industry.",
        items: [
          "Corrosion Profile: Exceptional resistance to seawater and salt solutions. Virtually immune to corrosion in most oxidizing environments and handles nitric and organic acids with ease.",
          "Mechanical Properties: Offers high ductility and superior weldability. Easier to fabricate and weld using standard TIG or MIG techniques compared to higher-strength alloys.",
        ],
        keyApplications:
          "Heat exchanger tube sheets, seawater intake screens, medical implants, and chemical processing tank liners.",
      },
      {
        title: "Titanium Grade 5 Plates (Ti-6Al-4V)",
        description:
          "Titanium Grade 5 (UNS R56400) is an alpha-beta alloy containing 6% Aluminum and 4% Vanadium. This is the highest-strength titanium grade, offering roughly double the tensile strength of Grade 2 while maintaining excellent fatigue resistance and toughness.",
        items: [
          "High-Strength Performance: Utilized where mechanical load and weight savings are top priorities. Can be heat-treated to further enhance properties, making it critical for structural aerospace components.",
          "Thermal Stability: Maintains high strength at temperatures up to 400°C (752°F), far exceeding the limits of commercially pure grades.",
        ],
        keyApplications:
          "Aerospace structural components, turbine blades, high-performance racing parts, and subsea oil and gas instrumentation.",
      },
    ],

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Titanium plates are manufactured to meet strict international specifications, including ASTM B265 and ASME SB265. To ensure they integrate perfectly into your engineering blueprints, we offer them in several formats:",
      items: [
        "Hot Rolled (HR): Typically supplied in a No.1 finish, ideal for heavy-duty structural applications and industrial chemical tanks.",
        "Cold Rolled (CR): For applications requiring tighter dimensional tolerances, a superior surface finish, and precision thickness.",
        "Precision Cut: Available in custom dimensions using Waterjet or Laser cutting to ensure exact fitment for your assembly and minimal material waste.",
      ],
    },

    keyFeatures: [
      "Exceptional strength-to-weight ratio – 45% lighter than steel",
      "Self-healing protective titanium oxide (TiO₂) film",
      "Extraordinary corrosion resistance in seawater, chlorine & acids",
      "Available in Grade 2 (Commercially Pure) and Grade 5 (Ti-6Al-4V)",
      "Grade 2: High ductility, superior weldability, excellent cold-formability",
      "Grade 5: Double the tensile strength of Grade 2 with excellent fatigue resistance",
      "Thickness: 0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      "Hardness & Finish: Soft, 1/4 Hard, Spring Hard | Hot Rolled (HR), Cold Rolled (CR)",
      "Value Added Services: Waterjet/Laser Cutting, Bending, Annealing, Pickling, Forging",
      "Complies with ASTM B265 / ASME SB265, AMS 4911",
    ],

    applications: [
      "Heat exchanger tube sheets and seawater intake screens",
      "Medical implants and chemical processing tank liners",
      "Aerospace structural components and turbine blades",
      "High-performance racing parts",
      "Subsea oil and gas instrumentation",
      "Industrial chemical tanks and structural applications",
      "Marine and offshore equipment",
      "Power generation and nuclear applications",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR)",
        image: hotRolledPlatesImage,
        items: [
          "Titanium Gr 2 / R50400 HR",
          "Titanium Gr 5 / R56400 HR",
          "ASME SB 265 Gr 2/5 HR Stock",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR)",
        image: coldRolledPlatesImage,
        items: [
          "Titanium Gr 2 Precision CR",
          "Titanium Gr 5 Alloy CR Stock",
          "UNS R50400 / R56400 CR Plates",
        ],
      },
      customPlates: {
        title: "Custom & Specialty",
        image: customPlatesImage,
        items: [
          "Grade 2/5 Custom Cut Profiles",
          "Waterjet Cut Titanium Blanks",
          "Fabricated Ti Alloy Plate Parts",
        ],
      },
    },

    specifications: {
      standards: "ASTM B265 / ASME SB265, AMS 4911",
      thicknessSize: "0.3 mm to 120 mm | Width to 3500mm | Length to 6000mm",
      hardnessFinish:
        "Soft, 1/4 Hard, Spring Hard | Hot Rolled (HR), Cold Rolled (CR)",
      valueAddedServices:
        "Waterjet/Laser Cutting, Bending, Annealing, Pickling, Forging",
    },

    equivalentGrades: {
      headers: ["GRADE", "UNS NO.", "WERKSTOFF NR.", "Common Name"],
      rows: [
        [
          "Titanium Grade 2",
          "R50400",
          "3.7035",
          "Commercially Pure (CP) Titanium",
        ],
        [
          "Titanium Grade 5",
          "R56400",
          "3.7165",
          "Ti-6Al-4V (Alpha-Beta Alloy)",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "Ti", "Al", "V", "Fe (Max)", "Others (Max)"],
      rows: [
        ["Grade 2", "99.2 Min", "-", "-", "0.30", "O: 0.25, C: 0.1, N: 0.03"],
        [
          "Grade 5",
          "90.0 Min",
          "5.5 – 6.75",
          "3.5 – 4.5",
          "0.25",
          "O: 0.20, N: 0.05, H: 0.015",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade Name",
        "Tensile (MPa)",
        "Yield (MPa)",
        "Elongation (%)",
        "Density (g/cm³)",
      ],
      rows: [
        ["Titanium Grade 2", "344 MPa", "275 MPa", "20% Min", "4.50"],
        ["Titanium Grade 5", "950 MPa", "880 MPa", "14% Min", "4.43"],
      ],
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
        "Nominal Thickness t (mm) – 2.5-4.5",
        "6.0",
        "8.0",
        "10.0",
        "12.5",
        "16.0",
        "20.0",
        "25.0",
        "30.0",
        "> 30",
      ],
      rows: [
        [
          "w < 1200",
          "0.20",
          "0.30",
          "0.32",
          "0.35",
          "0.80",
          "0.80",
          "0.80",
          "1.0",
          "1.4",
          "1.5",
        ],
        [
          "1200 ≤ w < 1500",
          "0.20",
          "0.30",
          "0.35",
          "0.38",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.4",
          "1.6",
        ],
        [
          "1500 ≤ w < 1800",
          "0.20",
          "0.32",
          "0.38",
          "0.40",
          "0.80",
          "0.80",
          "0.90",
          "1.1",
          "1.5",
          "1.7",
        ],
        [
          "1800 ≤ w < 2100",
          "0.20",
          "0.36",
          "0.40",
          "0.45",
          "0.80",
          "0.80",
          "0.90",
          "1.1",
          "1.5",
          "1.8",
        ],
        [
          "2100 ≤ w < 2400",
          "0.80",
          "0.80",
          "0.80",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.1",
          "1.5",
          "1.9",
        ],
        [
          "2400 ≤ w < 2700",
          "0.80",
          "0.80",
          "0.80",
          "0.80",
          "0.90",
          "1.0",
          "1.1",
          "1.3",
          "1.7",
          "2.0",
        ],
        [
          "2700 ≤ w < 3000",
          "0.80",
          "0.90",
          "1.0",
          "1.0",
          "1.0",
          "1.1",
          "1.3",
          "1.4",
          "1.8",
          "2.1",
        ],
      ],
    },

    specializedProducts: [
      "Commercially Pure (CP) Titanium Grade 2 Corrosion Resistant Plates",
      "Titanium Grade 5 (Ti-6Al-4V) High-Strength Aerospace Alloy Plates",
      "ASTM B265 / ASME SB265 Precision Cut-to-Size Titanium Profiles",
      "Custom Fabricated Titanium Plates for Desalination & Chemical Plants",
      "Titanium Hot Rolled (HR) & Cold Rolled (CR) Plate Stock",
      "Specialized Waterjet & Laser Cutting for Titanium Grade 2 & 5",
      "Leading Titanium Plate Manufacturer & Exporter in Mumbai, India",
      "High-Purity UNS R50400 / R56400 Plates with MTC Certification",
    ],

    relatedSearches: [
      "Titanium Grade 2 Plate Price List 2026",
      "Titanium Grade 5 Plate Supplier Mumbai",
      "Titanium Grade 2 Plate Weight Chart",
      "Titanium Grade 5 Plate Price per Kg India",
      "ASTM B265 Titanium Plate Thickness Tolerance",
      "Titanium Grade 2 Plate Manufacturer in India",
      "Titanium Grade 5 Aerospace Plate Stockist",
      "Titanium UNS R50400 Plate Price Mumbai",
      "Titanium R56400 Plate Dimensions Chart",
      "Commercially Pure Titanium Plate Stockyards in India",
      "Titanium Grade 2 Cold Rolled Plates Best Price",
      "Titanium Grade 5 (HR) Hot Rolled Plates Price List",
      "Titanium Plate Weight Calculator",
      "Titanium Grade 2 Plate Chemical Composition",
      "Titanium Grade 5 Plate Specification PDF",
      "Top 100 Titanium Plate Dealers in Pune",
      "Custom Titanium Plate Cutting Service Mumbai",
      "Titanium Grade 2 Plates for Marine Applications",
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
                Stock Availability: Titanium Grade 2 & 5
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
                Technical Specifications: Titanium Grade 2 & Grade 5 Plates
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

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Titanium Grade 2 & 5 Plate Weight Chart
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Stocked Sizes */}
            <section className="mb-8">
              <SectionTitle>
                Stocked Sizes: Titanium Grade 2 & 5 Plates
              </SectionTitle>
              <Table
                headers={productData.stockedSizes.headers}
                rows={productData.stockedSizes.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Thickness Tolerance: Titanium Grade 2 & Grade 5 Plates
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM B265 / ASME SB265 | Tolerance over and under nominal
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
                Specialized in Titanium Grade 2 & Grade 5 Plate Solutions
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
              <SectionTitle>Searches Related to Titanium Plates</SectionTitle>
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

export default TitaniumPlates;
