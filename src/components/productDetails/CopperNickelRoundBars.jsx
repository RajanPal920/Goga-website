// src/components/productDetails/CopperNickelRoundBars.jsx
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
import productImage from "../../assets/images/productImage/rod.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Unified Stock Availability Images (using same bar images)
import roundBarsImage from "../../assets/images/stock/round-bars.jpg";
import hexBarsImage from "../../assets/images/stock/hex-bars.jpg";
import squareBarsImage from "../../assets/images/stock/square-bars.jpg";
import flatBarsImage from "../../assets/images/stock/flat-bars.jpg";
import blackBarsImage from "../../assets/images/stock/black-bars.jpg";
import rectangleBarsImage from "../../assets/images/stock/rectangle-bars.jpg";

const CopperNickelRoundBars = () => {
  // ✅ Get all contact info at once
  const { phone, whatsapp, email } = contactHelpers.getContactInfo();

  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Copper Nickel Round Bars Supplier",
    subtitle:
      "Premium Quality ASTM B151 / ASME SB151 Copper Nickel (CuNi) Round Bars – High-Performance Cupro-Nickel Alloys with 10% to 30% Nickel Content for Superior Seawater Corrosion Resistance & Biofouling Protection",

    technicalOverview: {
      title:
        "Copper Nickel Round Bars: Technical Overview and Grade Characteristics",
      description:
        "Copper Nickel (CuNi) round bars, also known as Cupro-Nickel, are high-performance alloy products engineered for superior resistance to seawater corrosion and biofouling. By alloying copper with nickel—typically 10% (90/10) or 30% (70/30)—and adding controlled amounts of iron and manganese, these bars achieve a unique combination of mechanical strength, thermal conductivity, and extraordinary durability in marine and industrial environments. The defining feature of Copper Nickel is its natural anti-fouling property. In marine applications, it forms a thin, protective oxide film that inhibits the attachment of biological organisms like barnacles and algae, maintaining the efficiency of submerged components and heat exchanger interfaces over a long service life.",
    },

    gradeBreakdown: [
      {
        title: "Copper Nickel 90/10 Round Bars (C70600)",
        description:
          "CuNi 90/10 is the most widely utilized grade for general marine engineering and heat exchanger construction. It contains approximately 10% nickel and 1.5% iron.",
        items: [
          "Corrosion Profile: Exceptional resistance to stress corrosion cracking and pitting in clean seawater. Highly ductile and offers excellent weldability.",
          "Thermal Performance: Features high thermal conductivity, making it the primary choice for condenser components and heat exchanger internals.",
        ],
        keyApplications:
          "Marine hardware, flanges, valves, and offshore platform splash-zone protection.",
      },
      {
        title: "Copper Nickel 70/30 Round Bars (C71500)",
        description:
          "CuNi 70/30 contains approximately 30% nickel and is designed for more demanding service conditions involving higher fluid velocities, pressures, and temperatures.",
        items: [
          "Erosion Resistance: The higher nickel content allows these bars to withstand significantly higher turbulence and flow rates compared to the 90/10 grade.",
          "Mechanical Strength: It provides superior tensile strength and hardness, maintaining structural integrity in high-pressure naval and power generation systems.",
        ],
        keyApplications:
          "Naval shipboard components, high-pressure heat exchanger parts, and seawater intake structures.",
      },
    ],

    keyEngineeringProperties: {
      title: "Key Engineering Properties",
      items: [
        "Biofouling Resistance: Naturally prevents the buildup of marine microorganisms, reducing maintenance costs and improving thermal efficiency.",
        "Low Corrosion Rate: Exhibits a very low uniform corrosion rate in seawater, often eliminating the need for additional corrosion allowances in design.",
        "Fabrication: Excellent cold and hot-working properties. Can be easily machined and joined using standard TIG, MIG, and shielded metal arc welding (SMAW) methods.",
      ],
    },

    manufacturingStandards: {
      title: "Manufacturing Standards and Quality Assurance",
      description:
        "Our Copper Nickel round bars are manufactured to meet stringent international specifications, including ASTM B122, B151, and ASME SB151. To ensure they fit seamlessly into your engineering blueprints, we offer them in several formats:",
      items: [
        "Cold Drawn: For applications requiring tighter dimensional tolerances, a superior surface finish, and increased mechanical strength.",
        "Hot Rolled / Forged: For heavy-duty structural applications and large-diameter components where internal soundness is paramount.",
      ],
    },

    keyFeatures: [
      "Superior resistance to seawater corrosion and biofouling",
      "Natural anti-fouling property prevents marine organism attachment",
      "High thermal conductivity for heat exchanger applications",
      "Excellent cold and hot-working properties",
      "Available in 90/10 (C70600) and 70/30 (C71500) grades",
      "Low uniform corrosion rate in seawater",
      "Excellent weldability using standard methods",
      "Available in Round, Hex, Square, Flat, Black, Rectangle Bars & Billets",
      "Round sizes: 4mm – 500mm | Hex: 18mm – 57mm | Square: 18mm – 47mm",
      "Finishes: Bright Polished, Black, Rough Turned, Matt",
      "Lengths: 1 to 6 Meters",
      "Complies with ASTM B151 / ASME SB151, DIN, JIS, EN, BS, AISI",
    ],

    applications: [
      "Marine hardware and offshore platform components",
      "Flanges and valves for seawater systems",
      "Condenser components and heat exchanger internals",
      "Naval shipboard components",
      "High-pressure heat exchanger parts",
      "Seawater intake structures",
      "Splash-zone protection systems",
      "High-pressure naval and power generation systems",
    ],

    stockAvailability: {
      roundBars: {
        title: "Copper Nickel Round Bars",
        image: roundBarsImage,
        items: [
          "Copper Nickel Round Bars",
          "ASTM B151 Copper Nickel Round Bars",
          "ASME SB151 Copper Nickel Rods",
          "Cupro Nickel Bright Bars",
          "Copper Nickel Cold Drawn Rods",
        ],
      },
      hexBars: {
        title: "Copper Nickel Hex Bars",
        image: hexBarsImage,
        items: [
          "Copper Nickel Hexagon Rod",
          "Cupro Nickel Hex Bar",
          "ASTM B151 Copper Nickel Hex Bars",
          "ASME SB151 Copper Nickel Hex Rod",
          "Cu Ni A/F Size Hex Bars",
        ],
      },
      squareBars: {
        title: "Copper Nickel Square Bars",
        image: squareBarsImage,
        items: [
          "Copper Nickel Square Bars",
          "ASME SB151 Copper Nickel Square Rods",
          "ASTM B151 Copper Nickel Square Bars",
          "Cupro Nickel Square Rods",
          "Cu Ni Industrial Square Bars",
        ],
      },
      flatBars: {
        title: "Copper Nickel Flat Bars",
        image: flatBarsImage,
        items: [
          "Copper Nickel Flat Bars",
          "ASTM B151 Cupro Nickel Flat Bars",
          "ASME SB151 Copper Nickel Flat Bars",
          "Cu-Ni Industrial Flat Sections",
        ],
      },
      blackBars: {
        title: "Copper Nickel Black Bars",
        image: blackBarsImage,
        items: [
          "Copper Nickel Black Bars",
          "Cu Ni Black Bars",
          "Cupro Nickel Black Rods",
          "ASTM B151 Cupro Nickel Black Bars",
          "ASME SB151 Copper Nickel Black Rods",
        ],
      },
      rectangleBars: {
        title: "Copper Nickel Rectangle Bars",
        image: rectangleBarsImage,
        items: [
          "Copper Nickel Rectangle Bars",
          "ASTM B151 Copper Nickel Rectangle Bars",
          "ASME SB151 Cupro Nickel Rectangle Bar",
          "Cupro Nickel Rectangular Sections",
        ],
      },
    },

    specifications: {
      standards: "ASTM B151 / ASME SB151, DIN, JIS, EN, BS, AISI",
      sizeRange:
        "Round: 4mm to 500mm | Hex: 18mm to 57mm | Square: 18mm to 47mm",
      finishLength:
        "Bright Polished, Black, Rough Turned, Matt | 1 to 6 Meters",
      availableForms:
        "Round, Square, Hex (A/F), Rectangle, Flat, Billet, Ingot, Forging",
    },

    specializedProducts: [
      "Copper Nickel Cold Drawn Round Bar Dealer",
      "Cupro Nickel Round Bars Supplier in India",
      "ASME SB151 Copper Nickel Round Bars at Best Price",
      "Copper Nickel Industrial & Black Round Bars",
      "CuNi Precision Ground & Half Round Bars",
      "Copper Nickel Rods Stockist in Mumbai",
      "ASTM B151 Cupro Nickel Bars & Hex Rods",
      "Cu-Ni Round Bars Manufacturer & Exporter",
      "Cupro Nickel Cold Drawn & Hot Rolled Rods",
      "Specialized in Shailesh Pipe Fitting India Quality Exports",
    ],

    relatedSearches: [
      "Copper Nickel Bars at Best Price",
      "Copper Nickel Round Bars In Pune",
      "ASTM B151 Copper Nickel Bars",
      "Copper Nickel Alloy Bar Stock Range",
      "Cost Of Copper Nickel HR Bars Exporter",
      "Copper Nickel Round Bars Latest Price",
      "Copper Nickel Bars Price List In India",
      "Copper Nickel Round Bars Chemical Composition",
      "Copper Nickel Round Bars Stockyards In India",
      "Cupro Nickel Round Bars Pdf",
      "Copper Nickel Round Bars In Mumbai",
      "Cost Of Copper Nickel Round Bars",
      "Copper Nickel Round Bars Equivalent Grades",
      "Copper Nickel Round Bars Price In India",
      "Copper Nickel Forged Bars",
      "Price Of Copper Nickel Round Bars",
      "Copper Nickel Round Bars Specifications",
      "Cupro Nickel Hot Rolled bars Supplier",
      "ASME SB151 Copper Nickel Bars",
      "Copper Nickel Bars Supplier In Mumbai",
      "Copper Nickel Round Bars Suppliers In Gujarat",
      "CuNi Cold Drawn Bars Price List",
      "Copper Nickel Alloy Round Bar",
      "Copper Nickel Bars Catalogue",
      "Cu-Ni Bars Manufacturers",
      "Cupro Nickel Threaded Bars",
      "Cu-Ni Round Bars Supplier In India",
      "Cu-Ni Round Bars Price List in India",
      "Copper Nickel Round Bars Dimensions",
      "Cu-Ni Rods Stockist In Mumbai",
      "Cu-Ni Round Bars Stocks",
      "Copper Nickel Round Bars Price List",
      "Copper Nickel Bars Stockist In India",
      "Copper Nickel Bars Length",
      "Cupro Nickel Round Bars Exporter",
      "Cupro Nickel Cold Rolled Bars Price",
      "Cu Ni Bars Supplier In Mumbai",
      "Copper Nickel Bars Manufacturers In India",
      "Cupro Nickel Round Bars Stockist",
      "Copper Nickel Bars Price List In Mumbai",
      "Price List Of Copper Nickel Bars",
      "Cupro Nickel Round Bars Price List",
      "ASTM B151 Copper Nickel Half Round Bars",
      "Cupro Nickel Bars Stockist",
      "Cupro Nickel Round Bars Exporter In India",
      "Buy Cupro Nickel Bars / Rods Pdf",
      "Copper Nickel Bars In India",
      "Copper Nickel Round Bars Best Price In Delhi",
      "Copper Nickel Round Bars Manufacturer In Mumbai",
      "Cu-Ni Bars Price In Mumbai",
      "Cu-Ni Round Bars Dealer In India",
      "Top 100 Copper Nickel Bars Dealers In Pune",
      "Copper Nickel Round Bars Weight Calculator",
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
              <SectionTitle>Copper Nickel Grades & Applications</SectionTitle>
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

            {/* Key Engineering Properties */}
            <section className="mb-8">
              <SectionTitle>
                {productData.keyEngineeringProperties.title}
              </SectionTitle>
              <ul className="list-disc pl-5 space-y-2">
                {productData.keyEngineeringProperties.items.map(
                  (item, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                      {item}
                    </li>
                  ),
                )}
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
                Stock Availability of Copper Nickel Round Bars & Rods
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
                Technical Specifications: Copper Nickel Round Bars & Rods
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

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Copper Nickel Round Bars & Rods
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
                Searches Related to Copper Nickel Round Bars
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

export default CopperNickelRoundBars;
