// src/components/productDetails/CopperNickelPipes.jsx
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
import seamlessImage from "../../assets/images/stock/seamless-cuni.jpg";
import weldedImage from "../../assets/images/stock/welded-cuni.jpg";
import erwImage from "../../assets/images/stock/erw-cuni.jpg";
import efwImage from "../../assets/images/stock/efw-cuni.jpg";
import roundImage from "../../assets/images/stock/round-cuni.jpg";
import hollowImage from "../../assets/images/stock/hollow-cuni.jpg";

const CopperNickelPipes = () => {
  // ✅ Get all contact info at once
  const { phone, whatsapp, email } = contactHelpers.getContactInfo();

  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Copper Nickel Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B466 / ASME SB466 Copper Nickel Pipes – High-Performance Cu-Ni Alloy Pipes with 10% to 30% Nickel Content for Superior Corrosion Resistance in Marine & Saltwater Environments",

    technicalOverview: {
      title: "Copper Nickel Pipes: Technical Overview",
      description:
        "Copper Nickel Pipes (Cu-Ni), also known as Cupro-Nickel, are high-performance engineering materials typically containing 10% to 30% nickel. These pipes are specifically engineered for superior corrosion resistance in marine and saltwater environments. Manufactured in seamless, welded, ERW, and EFW configurations, our Cu-Ni industrial pipes comply with international standards such as ASTM B466, B467, and ASME SB466, ensuring they meet rigorous specifications for tensile strength and oxidation resistance in moist conditions.",
    },

    keyFeatures: [
      "Superior corrosion resistance in marine and saltwater environments",
      "Contains 10% to 30% nickel for enhanced performance",
      "Available in seamless, welded, ERW, and EFW forms",
      "Excellent resistance to oxidation in moist conditions",
      "High tensile strength for demanding applications",
      "Reliable performance against mechanical stresses",
      "Suitable for extreme temperature conditions",
      "Complies with ASTM B466, B467 / ASME SB466, SB467 standards",
    ],

    applications: [
      "Shipbuilding and maritime sectors",
      "Seawater system components",
      "Aerospace engineering applications",
      "Condensers and heat exchangers",
      "Offshore oil and gas platforms",
      "Desalination plants",
      "Power generation facilities",
      "Chemical processing industries",
    ],

    stockAvailability: {
      seamless: {
        title: "Copper Nickel Seamless Pipes",
        image: seamlessImage,
        items: [
          "Cupro Nickel Seamless Piping",
          "Copper Nickel Thin Wall Seamless Pipes",
          "ASME SB466 Copper Nickel Seamless Pipes",
          "ASTM B466 Copper Nickel Seamless Pipe",
        ],
      },
      welded: {
        title: "Copper Nickel Welded Pipes",
        image: weldedImage,
        items: [
          "ASTM B467 Copper Nickel Welded Pipe",
          "ASME SB467 Copper Nickel Welded Pipes",
          "Cu Ni Thin Wall Welded Pipes",
          "Cupro Nickel Welded Pipe",
        ],
      },
      erw: {
        title: "Copper Nickel ERW Pipes",
        image: erwImage,
        items: [
          "Cu-Ni Electric Resistance Welded Pipe",
          "ASTM B467 Copper Nickel ERW Pipe",
          "Copper Nickel ERW Pipes",
        ],
      },
      efw: {
        title: "Copper Nickel EFW Pipes",
        image: efwImage,
        items: [
          "Cu Ni EFW Pipes",
          "ASTM B466 Copper Nickel EFW Pipe",
          "Cu-Ni Electric Fusion Welding Pipe",
          "ASME SB466 Copper Nickel EFW Pipes",
        ],
      },
      round: {
        title: "Copper Nickel Round Pipes",
        image: roundImage,
        items: [
          "Cu Ni Round Pipes",
          "Cu-Ni Thin Wall Round Pipes",
          "ASTM B466 Copper Nickel Round Pipe",
        ],
      },
      hollow: {
        title: "Copper Nickel Hollow Pipes",
        image: hollowImage,
        items: [
          "Copper Nickel Square Hollow Pipe",
          "Copper Nickel Round Hollow Pipe",
          "Cupro Nickel Hollow Section Pipes",
          "ASME SB466 Copper Nickel Hollow Pipes",
        ],
      },
    },

    specifications: {
      standard: "ASTM B466, B467 / ASME SB466, SB467",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: "6.00 mm OD up to 914.4 mm OD, Available Ex-stock",
      manufacturingTechniques:
        "Seamless / Welded / ERW / Fabricated / CDW / 100% X Ray Welded",
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      pipeEnds:
        "Plain End, Beveled End, Threaded One End, TBE (Threaded Both Ends)",
      deliveryCondition: "Annealed and Pickled, Bright Annealed, Cold Drawn",
      length: "Single Random, Double Random & Required Length",
      valueAddedServices:
        "Cutting, Beveling, Threading, Non Destructive, Ultrasonic Testing",
    },

    specializedProducts: [
      "Cu Ni Welded Pipe",
      "Copper Nickel Seamless Pipes",
      "Copper Nickel Welded Pipes Exporter",
      "Copper Nickel ERW Pipe Stockholder",
      "Cu-Ni Pipes Dealer",
      "Copper Nickel Pipes Stockist",
      "ASME SB466 Cu Ni Cold Drawn Pipes",
      "ASTM B466 Cu Ni Pipes at Best Price",
      "Cupro Nickel Pipes Supplier",
      "Suppliers of Copper Nickel ERW Pipes",
      "Cu Ni Pipes Supplier in Mumbai",
      "Cu-Ni Pipes Manufacturer in India",
      "Cupro Nickel Industrial Pipes",
      "Welded Copper Nickel Pipe",
      "Copper Nickel Pipe Cut To Size",
      "Copper Nickel Customized Pipes",
      "Copper Nickel Pipes Supplier",
      "Type Copper Nickel Hollow Pipes",
      "ASTM B466 Copper Nickel Pipes",
      "Copper Nickel Pipe Stockist",
      "Copper Nickel Custom Pipe",
      "Cu Ni Thin Wall Pipe Stockists",
    ],

    relatedSearches: [
      "Cu Ni Pipe Price List",
      "Asme SB466 Copper Nickel Pipe",
      "Copper Nickel Pipe Pressure Rating",
      "Copper Nickel Welded Pipe Supplier",
      "Copper Nickel Pipe Exporter",
      "Copper Nickel Pipe Weight Chart",
      "Copper Nickel Pipe Manufacturers In India",
      "Copper Nickel Pipe Sizes",
      "Copper Nickel Pipe Specifications Pdf",
      "Copper Nickel Pipe Price List In India",
      "Copper Nickel Pipe Price In India",
      "Copper Nickel Seamless Pipes Supplier In India",
      "CuNi Copper Nickel Pipe Price Per Kg",
      "Copper Nickel Pipe Price",
      "Cost Of Copper Nickel Pipe",
      "Authenticate Copper Nickel Seamless Pipes Exporter",
      "Copper Nickel Pipe Roughness",
      "Copper Nickel Efw Pipe Supplier",
      "Astm B466 Copper Nickel Pipe",
      "Copper Nickel Pipe Dimensions",
      "Cu Ni Erw Pipe Supplier",
      "16 Gauge Copper Nickel Pipe",
      "Copper Nickel Threaded Pipe",
      "Copper Nickel Welded Pipe Exporter",
      "Buy Copper Nickel Pipe Welded",
      "Copper Nickel Pipe Price List Pdf",
      "Cu-Ni Seamless Pipe Exporter In India",
      "Cu Ni Pipe Supplier In Mumbai",
      "Copper Nickel Erw Pipe Supplier",
      "Astm B466 Cu Ni Seamless Pipe",
      "Copper Nickel Pipe Price Per Kg In India",
      "Top 100 Copper Nickel Pipe Dealers In Pune",
      "Copper Nickel Pipe Supplier In India",
      "Copper Nickel Pipe Per Kg",
      "Copper Nickel Pipe Price 20 Feet",
      "Cu-Ni Seamless Pipe Stockist",
      "Copper Nickel Pipe Weight Per Meter",
      "Copper Nickel Pipe Weight Calculator",
      "Copper Nickel Pipe In Pune",
      "Copper Nickel Pipe Catalogue",
      "Cu Ni Pipe Weight Chart",
      "Cu Ni Pipe Chemical Composition",
      "Copper Nickel Pipes Manufacturer In Mumbai",
      "Cupro Nickel Pipe Suppliers In Gujarat",
      "Copper Nickel Seamless Pipe Supplier",
      "Price Of Copper Nickel Pipe",
      "Copper Nickel Pipe Price List",
      "CuNi Pipe Specifications",
      "3 Inch Copper Nickel Pipe Manufacturers",
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
      { name: "Patta & Patti", slug: "Patta-patti" },
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
    <div className="bg-gray-50 min-h-screen">
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
                As a leading Cu-Ni pipe trader and exporter in India, RCM Metal
                & Alloy maintains a ready stock of diverse sizes, measurements,
                and wall thicknesses to suit the pressure requirements of the
                shipbuilding and maritime sectors. From seawater system
                components to aerospace engineering, our pipes provide reliable
                performance against mechanical stresses and extreme
                temperatures.
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
                Stock Availability of Copper Nickel Pipes
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
              <SectionTitle>Specification of Copper Nickel Pipes</SectionTitle>
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
                Specialized in Following Copper Nickel Pipes
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
                Searches Related to Copper Nickel Pipes
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

export default CopperNickelPipes;
