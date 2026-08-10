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

// Sample image imports (replace with your actual image paths)
import productImage from "../../assets/images/productImage/pipes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";
import efwImage from "../../assets/images/stock/efw.jpg";
import electropolishImage from "../../assets/images/stock/electropolish.jpg";
import hollowImage from "../../assets/images/stock/hollow.jpg";

const HastelloyPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Hastelloy Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B622 / ASME SB622 Hastelloy Alloy Pipes – High-Performance Nickel-Based Alloys for Extreme Corrosion Resistance & High-Temperature Environments",

    technicalOverview: {
      title: "Hastelloy Pipes: Technical Overview",
      description:
        "Hastelloy pipes are high-performance nickel-based alloys engineered for extreme resistance to corrosion and high-temperature environments. These pipes are manufactured in various configurations, including a wide range of lengths, sizes, and thicknesses to meet diverse industrial requirements. Produced in accordance with both National and International quality standards, these pipes are available in two primary high-performance grades: Hastelloy C276 and Hastelloy C22.",
    },

    keyFeatures: [
      "High-performance nickel-based alloys",
      "Extreme resistance to corrosion and high-temperature environments",
      "Available in Hastelloy C276 and C22 grades",
      "Non-reactive nature for pharmaceutical applications",
      "Robust chemical stability across diverse environments",
      "Available in seamless, welded, ERW, and EFW forms",
      "Precision manufacturing as per international standards",
      "Excellent resistance to aggressive chemical environments",
    ],

    applications: [
      "Pharmaceutical machinery (non-reactive surfaces)",
      "Petrochemical plants and oil refineries",
      "Fertilizer plants",
      "Power stations",
      "Sugar mills",
      "Textile machinery",
      "Cement plants",
      "Chemical processing industries",
    ],

    stockAvailability: {
      seamless: {
        title: "Hastelloy Seamless Pipes",
        image: seamlessImage,
        items: [
          "Hastelloy® Alloy Seamless Piping",
          "Hastelloy Thin Wall Seamless Pipes",
          "ASME SB622 Hastelloy Seamless",
          "ASTM B622 Hastelloy Seamless Pipe",
        ],
      },
      welded: {
        title: "Hastelloy Welded Pipes",
        image: weldedImage,
        items: [
          "Hastelloy Alloy Thin Wall Welded",
          "ASME SB619 Hastelloy Welded Pipes",
          "Hastelloy® Alloy Welded Pipe",
          "ASTM B619 Hastelloy Welded Pipe",
        ],
      },
      erw: {
        title: "Hastelloy ERW Pipes",
        image: erwImage,
        items: [
          "Alloy Electric Resistance Welded Pipe",
          "Hastelloy ERW Pipe",
          "ASTM B619 Hastelloy ERW Pipe",
        ],
      },
      efw: {
        title: "Hastelloy EFW Pipes",
        image: efwImage,
        items: [
          "Hastelloy Alloy EFW Pipes",
          "Alloy Electric Fusion Welding Pipe",
          "ASME SB622 Hastelloy EFW Pipes",
          "ASTM B622 Hastelloy EFW Pipe",
        ],
      },
      electropolish: {
        title: "Electropolish Pipes",
        image: electropolishImage,
        items: [
          "ASTM B622 Hastelloy Electropolish",
          "Hastelloy Alloy Electropolish Pipes",
          "Hastelloy Electropolish Pipe",
          "Alloy Thin Wall Electropolish Pipes",
        ],
      },
      hollow: {
        title: "Hastelloy Hollow Pipes",
        image: hollowImage,
        items: [
          "Hastelloy Round Hollow Pipe",
          "Hastelloy Hollow Pipe",
          "ASME SB622 Hastelloy Hollow Pipes",
          "Hastelloy® Alloy Hollow Section",
        ],
      },
    },

    specifications: {
      standard: "ASTM B622, B619 / ASME SB622, SB619",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, Sizes up to 24" NB available',
      manufacturingShapes: "Hydraulic, Round, Rectangle, Square, Hex, Honed",
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      outsideFinish:
        "2B, No.4, No.1, No.8 Mirror Finish, Finish as per Requirements",
      valueAddedServices:
        "Cutting, Beveling, Threading, NDT, Ultrasonic Testing",
    },

    specializedProducts: [
      "Hastelloy Alloy Pipes Dealer",
      "Hastelloy Pipes Stockist",
      "Hastelloy Pipe Exporter",
      "Welded Hastelloy Pipe",
      "ASME SB622 Hastelloy Cold Drawn Pipes",
      "ASTM B622 Hastelloy Pipes at Best Price",
      "Hastelloy Alloy Welded Pipe",
      "Hastelloy Mirror Polish Seamless Pipes",
      "Hastelloy Welded Pipes Exporter",
      "Hastelloy ERW Pipe Stockholder",
      "Hastelloy® Alloy Pipes Supplier",
      "Suppliers of Hastelloy ERW Pipes",
      "Hastelloy Pipes Supplier",
      "Type Stainless Hollow Pipes",
      "Hastelloy Custom Pipe",
      "Hastelloy Alloy Thin Wall Pipe Stockists",
      "Hastelloy Alloy Pipes Supplier in Mumbai",
      "Hastelloy Alloy Pipes Manufacturer India",
      "Hastelloy Pipe Cut To Size",
      "Hastelloy Customized Pipes",
      "Hastelloy Polished Pipe",
      "Hastelloy® Alloy Industrial Pipes",
      "ASTM B622 Hastelloy Pipes",
      "Hastelloy Pipe Supplier",
    ],

    relatedSearches: [
      "Hastelloy Threaded Pipe",
      "Hastelloy Pipe Price 20 Feet",
      "Top 100 Hastelloy Pipe Dealers In Pune",
      "Hastelloy Mirror Polish Pipe Exporter",
      "Hastelloy Pipe Roughness",
      "Hastelloy Pipe Specifications Pdf",
      "Astm B622 Hastelloy Pipe",
      "Hastelloy® Alloy Pipe Suppliers In Gujarat",
      "Hastelloy Pipe In Pune",
      "Hastelloy Alloy Pipe Weight Chart",
      "Hastelloy Efw Pipe Supplier",
      "Hastelloy Pipe Dimensions",
      "Hastelloy Alloy Seamless Pipe Exporter In India",
      "Hastelloy Pipes Manufacturer In Mumbai",
      "Hastelloy Pipe Price List Pdf",
      "Hastelloy Alloy Seamless Pipe Stockist",
      "Hastelloy Alloy Pipe Price List",
      "Hastelloy Pipe Price Per Kg In India",
      "Authenticate Hastelloy Seamless Pipes Exporter",
      "Hastelloy Welded Pipe Exporter",
      "Buy Hastelloy Pipe Welded",
      "Hastelloy Erw Pipe Supplier",
      "Asme SB622 Hastelloy Pipe",
      "Astm B622 Hastelloy Alloy Seamless Pipe",
      "Hastelloy® Alloy Pipe Specifications",
      "Hastelloy Pipe Price List",
      "3 Inch Hastelloy Pipe Manufacturers",
      "Hastelloy Seamless Pipe Supplier",
      "Hastelloy Seamless Pipes Supplier In India",
      "Hastelloy Alloy Pipe Supplier In Mumbai",
      "Hastelloy Pipe Price List In India",
      "Hastelloy Welded Pipe Supplier",
      "Price Of Hastelloy Pipe",
      "Hastelloy Pipe Weight Per Meter",
      "Hastelloy Pipe Pressure Rating",
      "Hastelloy Pipe Per Kg",
      "Hastelloy Pipe Manufacturers In India",
      "16 Gauge Hastelloy Pipe",
      "Hastelloy Pipe Sizes",
      "Hastelloy Pipe Price",
      "Hastelloy Pipe Weight Chart",
      "Cost Of Hastelloy Pipe",
      "Hastelloy Alloy Erw Pipe Supplier",
      "Hastelloy Alloy Pipe Chemical Composition",
      "Hastelloy® Alloy Hastelloy Pipe Price Per Kg",
      "Hastelloy Pipe Supplier In India",
      "Price List Of Hastelloy Alloy Pipe",
      "Hastelloy Pipe Weight Calculator",
      "Hastelloy Pipe Catalogue",
      "Hastelloy Pipe Price In India",
    ],

    // ===============================
    // OUR PRODUCTS - With proper routes
    // ===============================
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

    // ===============================
    // SHOP BY MATERIAL - With proper routes
    // ===============================
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

            {/* Specialized Applications */}
            <section className="mb-8">
              <SectionTitle>
                Specialized Applications in the Pharmaceutical and Chemical
                Industries
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most significant features of Hastelloy C276 pipes is
                their non-reactive nature. Unlike many other metal alloys,
                Hastelloy does not cause toxic reactions when in contact with
                complex medicinal formulas. This makes it an indispensable
                material for pharmaceutical machinery. Pharmaceutical
                manufacturers value Hastelloy because volatile compounds used in
                drug production have no effect on the pipe. This prevents
                cross-contamination and ensures that no toxic metallic reactions
                occur that could prove fatal to the end-user or compromise the
                purity of subsequent medicinal batches.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond pharmaceuticals, Hastelloy pipes are widely utilized in
                petrochemical plants, oil refineries, fertilizer plants, and
                power stations. They are also common in sugar mills, textile
                machinery, and cement plants. Their ability to withstand
                aggressive chemical environments makes them the preferred choice
                for government agencies and industrial machinery manufacturers
                who require long-term reliability in corrosive settings.
              </p>
            </section>

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>Diverse Industrial Applications</SectionTitle>
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

            {/* Material Specifications */}
            <section className="mb-8">
              <SectionTitle>
                Material Specifications and Quality Assurance
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each Hastelloy pipe is manufactured to meet strict
                specifications, such as ASTM B622 for seamless pipes and ASTM
                B619 or B675 for welded and EFW (Electric Fusion Welded)
                varieties. The production process focuses on creating accurate,
                high-strength components that can handle the stress of
                industrial fluid transport. Advanced testing and inspection
                ensure that the pipes meet the precise internal and external
                dimensions required by the client's specific engineering
                blueprints.
              </p>
            </section>

            {/* Specifications */}
            <section className="mb-8">
              <SectionTitle>Specification of Hastelloy Pipes</SectionTitle>
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

            {/* Stock Availability with Images */}
            <section className="mb-8">
              <SectionTitle>Stock Availability of Hastelloy Pipes</SectionTitle>
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

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Hastelloy Pipes
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
              <SectionTitle>Searches Related to Hastelloy Pipes</SectionTitle>
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

export default HastelloyPipes;
