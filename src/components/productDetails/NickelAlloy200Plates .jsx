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

const NickelAlloy200Plates = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Nickel Alloy 200 / 201 Plates Supplier",
    subtitle:
      "Premium Quality ASTM B162 / ASME SB162 Commercially Pure Nickel Plates – Exceptional Corrosion Resistance in Caustic Alkalis, High Thermal & Electrical Conductivity for Chemical Processing, Electronics & Aerospace Applications",

    technicalOverview: {
      title: "Nickel Alloy 200 & 201 Plates: Technical Overview",
      description:
        "Nickel Alloy 200 (UNS N02200) and its low-carbon variant, Nickel Alloy 201 (UNS N02201), are commercially pure wrought nickel plates. These alloys are highly valued in technical industries for their unique combination of high electrical and thermal conductivity, excellent mechanical properties, and extraordinary resistance to many corrosive environments. While Nickel 200 is the standard grade, Nickel 201 is specifically engineered for service at temperatures exceeding 315°C (600°F). The lower carbon content in 201 prevents embrittlement caused by intergranular carbon precipitation, ensuring structural integrity in high-heat applications.",
    },

    keyCharacteristics: {
      title: "Key Material Characteristics",
      items: [
        "Superior Caustic Resistance: These plates offer the best resistance of any metallic material to caustic alkalis, particularly sodium hydroxide (caustic soda), at all concentrations and temperatures up to the molten state.",
        "Thermal & Electrical Conductivity: They possess significantly higher thermal and electrical conductivity than stainless steels and most nickel-base superalloys, making them ideal for heat transfer and electronic applications.",
        "Purity Maintenance: As commercially pure materials, they do not introduce metallic contamination into sensitive process flows, which is critical for food, fiber, and pharmaceutical production.",
        "Magnetic Properties: Nickel 200/201 plates are ferromagnetic at room temperature, with high Curie temperatures and strong magnetostrictive properties.",
      ],
    },

    industrialApplications: {
      title: "Industrial Applications",
      items: [
        "Chemical Processing: Fabrication of large-scale reactors, storage tanks, and heat exchangers for handling caustic soda, fluorine, and hydrogen chloride.",
        "Food & Synthetic Fibers: Used in the production of fatty acids, fruit juices, and viscose rayon where maintaining product purity and color is essential.",
        "Electronics: Critical for battery components, fuel cell plates, and specialized hardware requiring high conductivity and low gas pressure.",
        "Aerospace & Defense: Utilized in rocket motor cases and hardware that must resist corrosive propellants and high-temperature environments.",
      ],
    },

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Nickel 200 and 201 plates are manufactured to meet stringent international specifications, including ASTM B162 and ASME SB162. To ensure they integrate perfectly into your engineering blueprints, we offer them in several formats:",
      items: [
        "Hot Rolled (HR): Supplied in a No.1 finish, ideal for heavy-duty chemical plant fabrication and industrial tank liners.",
        "Cold Rolled (CR): For applications requiring tighter dimensional tolerances, a superior surface finish, and precision thickness.",
        "Precision Cut: Available in custom dimensions using Waterjet, Laser, or Plasma cutting to ensure exact fitment and minimal material waste.",
      ],
      qualityControl:
        "Every plate undergoes rigorous quality control, including Positive Material Identification (PMI), tensile testing, and ultrasonic testing (UT) for internal soundness. We provide comprehensive EN 10204 3.1 Material Test Certificates (MTC) to ensure complete traceability and compliance with global industrial standards.",
    },

    keyFeatures: [
      "Commercially pure nickel with 99% minimum nickel content",
      "Exceptional resistance to caustic alkalis and sodium hydroxide",
      "Nickel 201 low-carbon variant for service above 600°F (315°C)",
      "High thermal and electrical conductivity",
      "Non-contaminating high purity for sensitive applications",
      "Ferromagnetic with high Curie temperatures",
      "Thickness: 0.3 mm to 120 mm | Cold Rolled & Hot Rolled",
      "Width up to 3500mm | Length up to 6000mm+",
      "Value Added Services: Waterjet/Laser Cutting, Bending, Forging, Annealing",
      "Complies with ASTM B162 / ASME SB162, AMS 5553 (201)",
    ],

    applications: [
      "Chemical processing and caustic soda handling",
      "Large-scale reactors and storage tanks",
      "Food processing and synthetic fiber production",
      "Battery components and fuel cell plates",
      "Aerospace rocket motor cases",
      "Defense and specialized hardware",
      "Pharmaceutical and food production equipment",
      "High-temperature environments above 600°F",
    ],

    stockAvailability: {
      hotRolledPlates: {
        title: "Hot Rolled (HR) Plates",
        image: hotRolledPlatesImage,
        items: [
          "Nickel 200/201 UNS N02200 HR",
          "ASME SB 162 Nickel Alloy HR",
          "Nickel N02201 Hot Rolled Plate",
        ],
      },
      coldRolledPlates: {
        title: "Cold Rolled (CR) Plates",
        image: coldRolledPlatesImage,
        items: [
          "Nickel Alloy 200/201 Cold Rolled",
          "UNS N02200 Precision CR Stock",
          "Nickel N02201 Cold Rolled Plate",
        ],
      },
      customPlates: {
        title: "Custom & Specialty",
        image: customPlatesImage,
        items: [
          "Nickel Alloy 200/201 Custom Size",
          "Waterjet & Laser Cut Profiles",
          "Nickel N02201 Customised Plates",
        ],
      },
    },

    specifications: {
      standardsSpecs: "ASTM B162 / ASME SB162, AMS 5553 (201)",
      thicknessRange: "0.3 mm to 120 mm | Cold Rolled & Hot Rolled",
      widthLength: "Width up to 3500mm | Length up to 6000mm+",
      valueAddedServices: "Waterjet/Laser Cutting, Bending, Forging, Annealing",
    },

    equivalentComposition: {
      headers: [
        "Grade",
        "UNS / WNR.",
        "Ni (Min)",
        "C (Max)",
        "Fe (Max)",
        "Equivalent Standards",
      ],
      rows: [
        [
          "Nickel 200",
          "N02200 / 2.4066",
          "99.0%",
          "0.15%",
          "0.40%",
          "NW 2200 | NA 11 | ??-2 | Ni 99.2",
        ],
        [
          "Nickel 201",
          "N02201 / 2.4068",
          "99.0%",
          "0.02%",
          "0.40%",
          "NW 2201 | NA 12 | LC-Ni 99",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength",
        "Elongation",
      ],
      rows: [["8.9 g/cm³", "1446 °C", "462 MPa", "148 MPa", "45%"]],
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
          "Nickel 200",
          "N02200",
          "2.4066",
          "NW 2200 | NA 11 | ??-2 | N-100M | Ni 99.2",
        ],
        ["Nickel 201", "N02201", "2.4068", "NW 2201 | NA 12 | ??-2 | LC-Ni 99"],
      ],
    },

    chemicalComposition: {
      headers: [
        "Grade",
        "Ni (Min)",
        "C (Max)",
        "Mn (Max)",
        "Si (Max)",
        "S (Max)",
        "Cu (Max)",
        "Fe (Max)",
      ],
      rows: [
        ["Nickel 200", "99.00", "0.15", "0.35", "0.35", "0.01", "0.25", "0.40"],
        ["Nickel 201", "99.00", "0.02", "0.35", "0.35", "0.01", "0.25", "0.40"],
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
      "Commercially Pure Nickel 200 (UNS N02200) Plates",
      "Low Carbon Nickel 201 (UNS N02201) High-Temp Plates",
      "Nickel Alloy 2.4066 & 2.4068 Precision Cut-to-Size Plates",
      "Custom Fabricated Nickel Plates for Caustic Evaporators",
      "ASME SB 162 Certified Heavy Nickel Alloy Industrial Plates",
      "ASTM B162 Nickel Hot Rolled (HR) & Cold Rolled (CR) Finishes",
      "Nickel 200 Plain & 201 High-Conductivity Electronic Sheets",
      "Half Hard, Quarter Hard & Soft Annealed Nickel Stock",
      "Leading Nickel Alloy Plate Manufacturer & Stockist in Mumbai",
      "High-Purity (99%) Nickel Plates for Magnetostrictive Devices",
    ],

    relatedSearches: [
      "Nickel Alloy 200 Plate Price List 2026",
      "Nickel Alloy 201 Plate Supplier in India",
      "Nickel 200 Plate Price per Kg Mumbai",
      "Nickel Alloy 201 Plates In India Latest Stock",
      "Nickel Alloy 200 Cold Rolled (CR) Plates Weight",
      "Nickel 201 Plate Specification PDF",
      "200 Nickel Alloy Plate Stockist in Mumbai",
      "Nickel 201 Plate Chemical Composition",
      "ASTM B162 Nickel 200 Plate Thickness Tolerance",
      "201 Nickel Alloy Plates Length and Width Chart",
      "Nickel Alloy 201 Plates Price in Mumbai",
      "200 Nickel Alloy Plate Manufacturers in India",
      "Nickel Alloy 201 Plate Stockyards in Mumbai",
      "200 Nickel Alloy Plate Dimensions Chart",
      "Nickel Alloy 200 Plates Equivalent Grades",
      "Nickel Alloy 201 Plates Price List in India",
      "Nickel Alloy 200 Plate Stockist in Mumbai",
      "Nickel Alloy 201 Hot Rolled (HR) Plates Price",
      "Nickel Alloy 200 Price in India",
      "Nickel 200 Plate Exporter in India",
      "Alloy 201 Plate Weight Calculator",
      "Nickel 200 Nickel Alloy Plates Thickness mm",
      "Top 100 Nickel Alloy Plate Dealers in Pune",
      "ASME SB162 Nickel 200 Plate Price",
      "Nickel Alloy 201 Plate Size Chart",
      "Nickel 200 Half Hard Plates Supplier Mumbai",
      "Buy Nickel Alloy 200 Plates Online India",
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
      { name: "Flats & Pairs", slug: "patta-patti" },
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
                Stock Availability of Nickel 200 / 201 Plates
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
                Specification of Nickel Alloy 200 / 201 Plates
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

            {/* Equivalent & Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>Equivalent & Chemical Composition</SectionTitle>
              <Table
                headers={productData.equivalentComposition.headers}
                rows={productData.equivalentComposition.rows}
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

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Weight Chart: Nickel Alloy 200 / 201 Plates
              </SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
            </section>

            {/* Stocked Sizes */}
            <section className="mb-8">
              <SectionTitle>Standard Stocked Sizes</SectionTitle>
              <Table
                headers={productData.stockedSizes.headers}
                rows={productData.stockedSizes.rows}
              />
            </section>

            {/* Tolerance Chart */}
            <section className="mb-8">
              <SectionTitle>
                Thickness Tolerance: Nickel Alloy 200 & 201 Plates
              </SectionTitle>
              <p className="text-xs text-gray-500 mb-2">
                ASTM B162 / ASME SB 162 | Tolerance over and under nominal
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
                Specialized in Nickel Alloy 200 & 201 Plate Solutions
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
                Searches Related to Nickel Alloy 200 & 201 Plates
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

export default NickelAlloy200Plates;
