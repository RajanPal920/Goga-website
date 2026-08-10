// src/components/productDetails/CopperNickel7030Pipes.jsx
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

// Sample image imports (replace with your actual image paths)
import productImage from "../../assets/images/productImage/pipes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images (replace with actual images)
import seamlessImage from "../../assets/images/stock/seamless-cuni7030.jpg";
import weldedImage from "../../assets/images/stock/welded-cuni7030.jpg";
import erwImage from "../../assets/images/stock/erw-cuni7030.jpg";
import efwImage from "../../assets/images/stock/efw-cuni7030.jpg";
import roundImage from "../../assets/images/stock/round-cuni7030.jpg";
import hollowImage from "../../assets/images/stock/hollow-cuni7030.jpg";

const CopperNickel7030Pipes = () => {
  // ✅ Get all contact info at once
  const { phone, whatsapp, email } = contactHelpers.getContactInfo();

  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Copper Nickel 70/30 Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B466 / ASME SB466 Copper Nickel Alloy 70/30 Pipes – High-Performance Cu-Ni 70/30 (UNS C71500) Alloy for Superior Corrosion Resistance, High-Temperature Strength & Marine Applications",

    technicalOverview: {
      title: "Copper Nickel 70/30 Pipes: Technical Overview",
      description:
        "Copper Nickel Alloy 70/30 (UNS C71500 / Werkstoff Nr. 2.0882) pipes are high-performance engineering materials consisting of 70% copper and 30% nickel, with controlled additions of manganese, iron, zinc, and lead to ensure structural integrity. These pipes are manufactured in seamless, welded, ERW, and EFW configurations, available in a wide variety of lengths, diameters, and sizes. The increased nickel content dramatically improves corrosion resistance at high temperatures, making these pipes essential for situations where structural stability is mandatory. The alloy offers exceptional resistance to pitting and biofouling, critical for equipment submerged in saltwater.",
    },

    keyFeatures: [
      "Superior corrosion resistance at high temperatures",
      "Exceptional resistance to pitting and biofouling",
      "Available in seamless, welded, ERW, and EFW forms",
      "High tensile and yield strength for demanding applications",
      "Excellent toughness and fine surface finish",
      "Good formability and great weldability",
      "Cost-effective solution for harsh saline environments",
      "Complies with ASTM B466, B467 / ASME SB466, SB467 standards",
    ],

    applications: [
      "Offshore firewater systems and seawater piping",
      "Gas processing and power generation plants",
      "Condensers and heat exchangers",
      "Chemical equipment and pharmaceutical machinery",
      "Pulp heat exchangers in paper industry",
      "Hydraulic lines and high-pressure systems",
      "Desalination plants",
      "Shipbuilding and naval applications",
    ],

    stockAvailability: {
      seamless: {
        title: "Cu-Ni 70/30 Seamless Pipes",
        image: seamlessImage,
        items: [
          "ASME SB466 Cu-Ni 70/30 Seamless Pipes",
          "ASTM B466 Cu-Ni 70/30 Seamless Pipe",
          "Cu-Ni 70/30 Thin Wall Seamless Pipes",
          "UNS C71500 Seamless Pipe",
        ],
      },
      welded: {
        title: "Cu-Ni 70/30 Welded Pipes",
        image: weldedImage,
        items: [
          "70/30 Cu-Ni Alloy Welded Pipe",
          "UNS C71500 Welded Pipe",
          "ASME SB467 Cupro Nickel 70/30 Welded Pipes",
          "ASTM B467 Cu-Ni 70/30 Welded Pipe",
        ],
      },
      erw: {
        title: "Cu-Ni 70/30 ERW Pipes",
        image: erwImage,
        items: [
          "ASTM B467 70/30 ERW Pipe",
          "Cu-Ni 70/30 Electric Resistance Welded Pipe",
          "Copper Nickel 2.0882 ERW Pipe",
          "Cu-Ni UNS C71500 ERW Pipe",
        ],
      },
      efw: {
        title: "Cu-Ni 70/30 EFW Pipes",
        image: efwImage,
        items: [
          "Copper Nickel 2.0882 EFW Pipe",
          "Cu-Ni 70/30 EFW Pipe",
          "Cupro Nickel 70/30 Thin Wall EFW Pipes",
          "70/30 Electric Fusion Welding Pipe",
        ],
      },
      round: {
        title: "Cu-Ni 70/30 Round Pipes",
        image: roundImage,
        items: [
          "ASME SB467 Cu-Ni 70/30 Round Pipes",
          "ASTM B467 Cu-Ni 70/30 Round Pipe",
          "Copper Nickel 2.0882 Round Pipe",
        ],
      },
      hollow: {
        title: "Cu-Ni 70/30 Hollow Pipes",
        image: hollowImage,
        items: [
          "Cu-Ni UNS C71500 Hollow Pipe",
          "Cu-Ni Alloy 70/30 Hollow Pipe",
          "Cu-Ni 70/30 Custom Hollow Pipe",
          "Cupro Nickel Alloy 70/30 Round Hollow Pipe",
        ],
      },
    },

    specifications: {
      standard: "ASTM B466, B467 / ASME SB466, SB467",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: '6.00 mm OD up to 914.4 mm OD, Sizes up to 24" NB available',
      scheduleRange:
        "SCH 5, SCH 10, SCH 40, SCH 80, SCH 80S, SCH 160, SCH XXS, SCH XS",
      pipeEnds:
        "Plain End, Beveled End, Threaded One End, TBE (Threaded Both Ends)",
      deliveryCondition:
        "Annealed and Pickled, Polished, Bright Annealed, Cold Drawn",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, Destructive, Non Destructive, Ultrasonic Testing",
      supplyRange: "OD: 6mm to 630mm, WT: 0.05mm to 30mm",
    },

    // Equivalent Grades
    equivalentGrades: {
      headers: ["STANDARD", "WERKSTOFF NR.", "UNS"],
      rows: [["Copper Nickel 70/30", "2.0882", "C71500"]],
    },

    // Chemical Composition
    chemicalComposition: {
      headers: ["Grade", "Cu", "Mn", "Pb", "Ni", "Fe", "Zn"],
      rows: [
        [
          "Cu-Ni 70-30",
          "65.0 min",
          "1 max",
          ".05 max",
          "29-33",
          "0.4-1.0",
          "1 max",
        ],
      ],
    },

    // Mechanical Properties
    mechanicalProperties: {
      headers: [
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength",
        "Elongation",
      ],
      rows: [
        ["0.323 lb/in³ at 68°F", "2260°F", "50000 psi", "20000 psi", "30%"],
      ],
    },

    // Weight Chart (first 10 rows as sample)
    weightChart: {
      headers: [
        "NPS",
        "Outside Diameter (in)",
        "Wall Thickness (in)",
        "Schedule",
        "Weight (kg/m)",
        "Weight (lb/ft)",
      ],
      rows: [
        ['1/2"', "0.840", "0.109", "40 STD", "1.268", "0.851"],
        ['1/2"', "0.840", "0.147", "80 STD", "1.621", "1.088"],
        ['3/4"', "1.050", "0.113", "40 STD", "1.684", "1.131"],
        ['3/4"', "1.050", "0.154", "80 STD", "2.195", "1.474"],
        ['1"', "1.315", "0.133", "40 STD", "2.501", "1.679"],
        ['1"', "1.315", "0.179", "80 STD", "3.325", "2.172"],
        ['1 1/4"', "1.660", "0.140", "40 STD", "3.385", "2.273"],
        ['1 1/4"', "1.660", "0.191", "80 STD", "4.464", "2.997"],
        ['1 1/2"', "1.900", "0.145", "40 STD", "4.048", "2.718"],
        ['1 1/2"', "1.900", "0.200", "80 STD", "5.409", "3.361"],
      ],
    },

    // Price Range
    priceRange: {
      headers: [
        "Diameter (B)",
        "Diameter (A)",
        "OD (mm)",
        "SCH 10S",
        "Weight (kg/m)",
        "Wall Thk (mm)",
        "Price (INR/m)",
        "Price (INR/kg)",
      ],
      rows: [
        [
          '1/8"',
          "6",
          "10.03",
          "SCH 10S",
          "0.027",
          "1.2",
          "80.5 – 110",
          "300 – 400",
        ],
        [
          '1/4"',
          "8",
          "13.7",
          "SCH 10S",
          "0.049",
          "1.65",
          "110 – 200",
          "200 – 300",
        ],
        [
          '3/8"',
          "10",
          "17.2",
          "SCH 10S",
          "0.063",
          "1.65",
          "169 – 250",
          "250 – 320",
        ],
        [
          '1/2"',
          "15",
          "21.3",
          "SCH 10S",
          "1.02",
          "2.11",
          "234.8 – 289",
          "220 – 320.5",
        ],
        [
          '3/4"',
          "20",
          "26.7",
          "SCH 10S",
          "1.3",
          "2.11",
          "300 – 350",
          "220 – 300",
        ],
        [
          '1"',
          "25",
          "33.4",
          "SCH 10S",
          "2.13",
          "2.77",
          "459.9 – 600",
          "200 – 400",
        ],
      ],
    },

    specializedProducts: [
      "Cu-Ni 70/30 Welded Pipes Exporter",
      "Cu-Ni 70/30 ERW Pipe Stockholder",
      "Copper Nickel Alloy 70/30 Pipes Supplier",
      "Type 70/30 Cupro Nickel Hollow Pipes",
      "Cu-Ni 70/30 Pipes Supplier",
      "Suppliers of 70/30 Cupro Nickel ERW Pipes",
      "Cupro Nickel Alloy 70/30 Hollow Pipe",
      "Copper Nickel Alloy 70/30 Industrial Pipes",
      "70/30 Welded Copper Nickel Pipe",
      "70/30 Cupro Nickel Seamless Pipe",
      "INOX 2.0882 Copper Nickel Pipe Exporter",
      "Cu-Ni 70/30 Welded Pipe",
      "Cupro Nickel 70/30 Custom Pipe",
      "Cu-Ni 70/30 Thin Wall Pipe Stockists",
      "Cupro Nickel 70/30 Pipes",
      "ASTM B467 Cu-Ni 70/30 Seamless Pipes",
      "Cu-Ni 70/30 Pipes Supplier in Mumbai",
      "Cu-Ni Alloy 70/30 Pipes Manufacturer India",
      "70-30 Copper Nickel Thik Wall Pipes",
      "Cu-Ni 70/30 Cold Drawn Pipes Dealer",
      "Cupro Nickel 70/30 Pipe",
      "Copper Nickel 70/30 Seamless Pipes",
      "70/30 Cupro Nickel Custom Pipes Dealer",
      "Cupro Nickel 70/30 Pipes Stockist",
      "70/30 Cupro Nickel Welded Pipe",
      "Cu-Ni 70/30 Schedule 80 Pipe",
      "ASME SB466 Cu-Ni 70/30 Cold Drawn Pipes",
      "ASTM B466 70/30 Cu-Ni Pipes Best Price",
      "Copper Nickel 2.0882 Pipe Cut To Size",
      "Copper Nickel 70/30 Customized Pipes",
      "70/30 Cupro Nickel Alloy Pipes",
      "Copper Nickel 70/30 Pipe",
      "ASTM B466 Cu-Ni 70/30 Custom Pipes",
      "70/30 Cupro Nickel Alloy Pipe Supplier",
    ],

    relatedSearches: [
      "Copper Nickel 70/30 Pipe Exporter",
      "Price Of Copper Nickel 70/30",
      "Cupro Nickel 70/30 Pipe Weight Chart",
      "Copper Nickel 70/30 Pipe Price",
      "Copper Nickel 70/30 Pipe Price List Pdf",
      "Copper Nickel 70/30 Pipe Pressure Rating",
      "Copper Nickel 70/30 Pipe Dimensions",
      "ASTM B466 Copper Nickel 70/30 Seamless Pipe",
      "Copper Nickel 70/30 Pipe Weight Chart",
      "Cupro Nickel 70/30 Pipe Price",
      "70/30 Cupro Nickel Pipe Price List",
      "ASME SB467 70-30 Copper Nickel Pipe",
      "Copper Nickel 70/30 Pipe Weight Calculator",
      "Copper Nickel 70/30 Pipe Weight Chart",
      "Copper Nickel 70/30 Pipe Price Per Meter",
      "Copper Nickel 2.0882 Custom Pipe Suppliers In Gujarat",
      "Top 100 Copper Nickel Pipe Dealers In Pune",
      "Copper Nickel 70/30 Pipe Price In India",
      "Copper Nickel 70/30 Pipe Price List",
      "Copper Nickel 70/30 Pipe Weight Per Meter",
      "70/30 Copper Nickel Pipe Specifications",
      "Copper Nickel 70/30 EFW Pipe Supplier",
      "Copper Nickel 70/30 Pipe Schedule",
      "3 Inch 70/30 Cupro Nickel Pipe Manufacturers",
      "70/30 Cu-Ni Seamless Pipe Stockist",
      "Cupro Nickel 70/30 Seamless Pipes Exporter",
      "70/30 Copper Nickel Pipe Specifications Pdf",
      "Cu-Ni 70/30 Pipe Price List",
      "Copper Nickel 70/30 Pipe Per Kg",
      "UNS C71500 Pipe",
      "Copper Nickel 70/30 Pipe Price List In India",
      "70/30 Copper Nickel Alloy Pipe Sizes",
      "Copper Nickel 70/30 Round Pipe Supplier",
      "Copper Nickel 70/30 Welded Pipe Exporter",
      "Buy Copper Nickel Pipe 70/30 Welded Schedule 40",
      "ASTM B466 Copper Nickel 70/30 Seamless Pipe",
      "Cu-Ni 70/30 Pipe Supplier In Mumbai",
      "70-30 Copper Nickel Threaded Pipe",
      "70/30 Cupro Nickel Pipe In Pune",
      "Copper Nickel Alloy 70/30 Round Pipe Supplier",
      "Copper Nickel 70/30 Pipe Chemical Composition",
      "Cu-Ni 70/30 Pipe Price Per Kg In India",
      "Copper Nickel Pipe Price 20 Feet",
      "Copper Nickel 70/30 Pipe Supplier In India",
      "Copper Nickel Alloy 70/30 Pipes Manufacturer In Mumbai",
      "Copper Nickel 70/30 EFW Pipe Supplier",
      "Copper Nickel Alloy 70/30 Pipe Price List",
      "Copper Nickel Alloy 70/30 Seamless Pipe Supplier",
      "70/30 Cupro Nickel Pipe Dimensions",
      "Copper Nickel 70/30 Pipe Price List",
      "ASTM B466 Cupro Nickel 70/30 Pipes",
      "70/30 Cu-Ni Alloy Pipe Price List",
      "Copper Nickel 70/30 EFW large diameter pipes",
      "Copper Nickel 70/30 Pipe Roughness",
      "70/30 Cupro Nickel Pipe Price Per Kg",
      "Copper Nickel 70/30 Pipe Catalogue",
      "Cost Of 70/30 Cupro Nickel Pipe",
      "Copper Nickel 70/30 Seamless Pipe Exporter",
      "16 Gauge Grade 70/30 Copper Nickel Alloy Pipe",
      "Copper Nickel 70/30 Pipe Manufacturers In India",
      "Cu-Ni 70/30 Pipe Price Per Kg In India",
      "Copper Nickel 70/30 Welded Pipe Supplier",
      "ASTM B466 Cu-Ni 70/30 Pipe",
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
              <SectionTitle>
                Applications in Marine & Industrial Sectors
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most significant benefits of UNS C71500 pipes is
                their exceptional resistance to pitting and biofouling, which is
                critical for equipment submerged in saltwater. These pipes are
                easily formable and exhibit great weldability, allowing for
                seamless integration into complex industrial systems. The
                increased nickel content dramatically improves corrosion
                resistance at heat, making these pipes essential for
                high-temperature situations where structural stability is
                mandatory.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
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

            {/* Stock Availability with Images */}
            <section className="mb-8">
              <SectionTitle>
                Stock Availability of Copper Nickel 70/30 Pipes
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
                Specification of Copper Nickel 70/30 Pipes
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

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Weight Chart (Sample)</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
              <p className="text-xs text-gray-500 mt-2">
                * Full weight chart available upon request for all sizes up to
                48" NB.
              </p>
            </section>

            {/* Price Range */}
            <section className="mb-8">
              <SectionTitle>Price Range (Indicative)</SectionTitle>
              <Table
                headers={productData.priceRange.headers}
                rows={productData.priceRange.rows}
              />
              <p className="text-xs text-gray-500 mt-2">
                * Prices are indicative and subject to change based on market
                conditions and order quantity.
              </p>
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Copper Nickel 70/30 Pipes
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
                Searches Related to Copper Nickel 70/30 Pipes
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

export default CopperNickel7030Pipes;
