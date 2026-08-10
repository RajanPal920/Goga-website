// src/components/productDetails/CopperNickelCoils.jsx
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

const CopperNickelCoils = () => {
  // ✅ Get all contact info at once
  const { phone, whatsapp, email } = contactHelpers.getContactInfo();

  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Copper Nickel Coils Supplier",
    subtitle:
      "Premium Quality ASTM B168 / ASME SB168 Copper Nickel (CuNi) Coils – High-Performance Cupro-Nickel Alloys with 10% to 30% Nickel Content for Superior Seawater Corrosion Resistance & Biofouling Protection",

    technicalOverview: {
      title: "Copper Nickel Coils: Technical Overview",
      description:
        "Copper Nickel (CuNi) coils, commonly referred to as Cupro-Nickel, are high-performance alloy products specifically engineered for marine and industrial environments where resistance to seawater corrosion and biofouling is critical. These coils are primarily composed of copper with nickel additions ranging from 10% to 30%, supplemented by iron and manganese to enhance erosion resistance and mechanical strength. The defining characteristic of Copper Nickel is its ability to form a thin, tenacious, and protective surface film in the presence of seawater. This layer is not only resistant to corrosion but also naturally inhibits the attachment of marine organisms (macro-fouling), such as barnacles and algae, which significantly improves the thermal efficiency of heat transfer systems over long-term service.",
    },

    gradeBreakdown: [
      {
        title: "Copper Nickel 90/10 Coils (C70600)",
        description:
          "CuNi 90/10 (UNS C70600) is the most widely utilized grade for general marine engineering. It contains approximately 10% nickel and offers a cost-effective solution with excellent ductility and weldability.",
        items: [
          "Corrosion Profile: It provides outstanding resistance to clean seawater and is widely recognized for its superior resistance to stress corrosion cracking and pitting.",
          "Mechanical Performance: While it has slightly lower strength than the 70/30 grade, its ease of fabrication, bending, and flaring makes it ideal for complex coil configurations and heat exchanger tubing.",
        ],
        keyApplications:
          "Marine condensers, offshore salt-water piping, desalination plant heat exchangers, and seawater intake systems.",
      },
      {
        title: "Copper Nickel 70/30 Coils (C71500)",
        description:
          "CuNi 70/30 (UNS C71500) contains approximately 30% nickel and is designed for more demanding service conditions involving higher fluid velocities, increased pressures, and more aggressive corrosive media.",
        items: [
          "Erosion Resistance: The higher nickel and iron content allows this grade to withstand significantly higher seawater flow rates compared to 90/10, making it suitable for high-speed naval vessels and high-pressure steam systems.",
          "Thermal Stability: It maintains its mechanical properties and oxidation resistance at higher temperatures, ensuring structural efficiency in heavy-duty power plant condensers.",
        ],
        keyApplications:
          "Naval shipboard piping, high-pressure heat exchangers, power plant condensers, and specialized chemical processing equipment handling alkaline solutions.",
      },
    ],

    keyFeatures: [
      "Superior resistance to seawater corrosion and biofouling",
      "Forms protective surface film in seawater environments",
      "Naturally inhibits marine organism attachment (macro-fouling)",
      "Available in 90/10 (C70600) and 70/30 (C71500) grades",
      "Excellent ductility, weldability, and formability",
      "High erosion resistance for demanding service conditions",
      "Maintains mechanical properties at elevated temperatures",
      "Available in Hot Rolled (HR), Cold Rolled (CR), and Slit Coils",
      "Thickness range: 0.2mm – 5.0mm",
      "Width range: 3.2mm – 1500mm",
      "Complies with ASTM B168 / ASME SB168 standards",
    ],

    applications: [
      "Marine condensers and seawater intake systems",
      "Offshore salt-water piping",
      "Desalination plant heat exchangers",
      "Naval shipboard piping systems",
      "High-pressure heat exchangers",
      "Power plant condensers",
      "Chemical processing equipment",
      "Heat transfer systems requiring biofouling protection",
    ],

    stockAvailability: {
      hotRolled: {
        title: "Hot Rolled (HR) Coils",
        image: hrCoilsImage,
        items: [
          "Copper Nickel Hot Rolled Coils",
          "ASME SB168 Cu Ni HR Coils",
          "Cu-Ni Hot Rolled Coils",
          "Copper Nickel HR Coils",
        ],
      },
      coldRolled: {
        title: "Cold Rolled (CR) Coils",
        image: crCoilsImage,
        items: [
          "Copper Nickel Cold Rolled Coils",
          "ASME SB168 Copper Nickel CR Coils",
          "Cupro Nickel CR Coils",
          "Cu-Ni CR Coils",
        ],
      },
      slitCoils: {
        title: "Slit & Strip Coils",
        image: slitCoilsImage,
        items: [
          "Copper Nickel Slit Coils",
          "ASME SB168 Slit Coils",
          "Cupro Nickel Slit Coils",
          "CuNi Slit Coils",
        ],
      },
    },

    specifications: {
      standard: "ASTM B168 / ASME SB168",
      thicknessRange: "0.2mm – 5.0mm",
      widthRange: "3.2mm – 1500mm",
      hardnessTemper: "Soft, Quarter Hard, Half Hard, Hard, Spring Hard",
      formLength: "Coil / Strip, Length as per Customer Requirement",
      valueAddedServices:
        "Cutting, Polishing, Threading, NDT, Ultrasonic Testing",
    },

    specializedProducts: [
      "ASTM B168 Cupro Nickel Coils",
      "CuNi Coils Cut To Size & Slit Coil",
      "Cupro Nickel Industrial Coils Supplier",
      "Copper Nickel Coils Supplier in Mumbai",
      "ASME SB168 CuNi Coils at Best Price",
      "Cupro Nickel Coil Manufacturer in India",
      "CuNi Coil Supplier & Dealer in India",
      "Copper Nickel Coils Stockholder In India",
      "Cupro Nickel Coils Exporter in India",
      "Copper Nickel Coils Standards Stockist",
      "CuNi Grade Industrial Coil Dealer",
      "Copper Nickel Coils Cut to Size",
      "Cupro Nickel Coils at Best Price",
      "Cu-Ni Grade Coil Stockists",
      "Cu-Ni Coil Supplier in Mumbai",
      "Suppliers of High Grade Cu-Ni Coils",
      "Copper Nickel Cold Rolled & Hot Rolled Coils",
      "Cu Ni Slit Coil Stockists & Suppliers",
      "Cupro Nickel Coil Manufacturing in India",
      "Specialized Copper Nickel Strip Coils",
    ],

    relatedSearches: [
      "CuNi Coil Exporter In India",
      "CuNi Coil Price List",
      "Copper Nickel Coils Supplier",
      "Cupro Nickel Coil Size",
      "CuNi Coil Price List In Mumbai",
      "CuNi Coils Manufacturers In India",
      "Price List Of Copper Nickel Coils",
      "Cupro Nickel Coil Weight Calculator",
      "Copper Nickel Coils In India",
      "CuNi Price In India",
      "CuNi Coil Stockist In Mumbai",
      "Cupro Nickel Coil Price",
      "Cupro Nickel Coils Manufacturer In Mumbai",
      "Cu-Ni Coil Dealer In India",
      "Cu Ni Coils In Mumbai",
      "Copper Nickel Coil Exporter",
      "Copper Nickel Coils Exporter",
      "Cupro Nickel Coils Best Price In Delhi",
      "Cu-Ni Latest Price",
      "Cupro Nickel Coil Manufacturers",
      "Cu-Ni Coil Stockist",
      "Copper Nickel Coil Price List",
      "Cupro Nickel (HR) Hot Rolled Coils Price List",
      "Cu Ni Coils Thickness",
      "Top CuNi Coil Dealers In Pune",
      "Cupro Nickel Coils Length",
      "Copper Nickel Coil Dimensions",
      "Cost Of Cupro Nickel Coil",
      "Copper Nickel Coils",
      "ASME SB168 Cupro Nickel Coil",
      "Copper Nickel Coil",
      "Buy Copper Nickel Coils Pdf",
      "Copper Nickel Coils Chemical Composition",
      "Cost Of Copper Nickel Coils Exporter",
      "Copper Nickel Coil Supplier In Mumbai",
      "Cupro Nickel Coils Pdf",
      "Cupro Nickel Coils Equivalent Grades",
      "Copper Nickel Coil Supplier",
      "Cu Ni Coils Catalogue",
      "CuNi Coil Specifications",
      "Cu-Ni Coil Thickness Tolerance",
      "Cupro Nickel Coil Supplier In Mumbai",
      "Cu Ni Coil Price List",
      "Cu Ni Hot Rolled Coils Price List",
      "Copper Nickel Coil Thickness Chart",
      "Price Of Cu-Ni Coil",
      "CuNi Coil Grade Price List",
      "Cu Ni Coil Price In India",
      "Copper Nickel Coils Stocks",
      "Cupro Nickel Cold Rolled (CR) Coils",
      "ASTM B168 Cupro Nickel Coils",
      "CuNi Coils Price List In India",
      "Copper Nickel Coils Supplier In India",
      "Cupro Nickel Slit Coils Suppliers In Gujarat",
      "ASME SB168 CuNi Coil",
      "Cu-Ni In Pune",
      "Copper Nickel Coil Stockyards In India",
      "Cupro Nickel Coils Price In Mumbai",
      "Copper Nickel Coil Supplier In India",
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
                Stock Availability of Copper Nickel Coils
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
              <SectionTitle>Specification of Copper Nickel Coils</SectionTitle>
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
                Specialized in Following Copper Nickel Coils
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
                Searches Related to Copper Nickel Coils
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

export default CopperNickelCoils;
