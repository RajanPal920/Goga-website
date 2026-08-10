import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Sample image imports (replace with your actual image paths)
import productImage from "../../assets/images/productImage/pipes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

import {
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Stock Availability Images
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";
import efwImage from "../../assets/images/stock/efw.jpg";
import electropolishImage from "../../assets/images/stock/electropolish.jpg";
import hollowImage from "../../assets/images/stock/hollow.jpg";

const NickelAlloyPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Nickel Alloy Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B161 / ASME SB161 Nickel Alloy Pipes – High-Performance Piping for Extreme Corrosion Resistance & High-Temperature Applications",

    technicalOverview: {
      title: "Nickel Alloy Pipes: Technical Overview",
      description:
        "Nickel alloy pipes are a broad category of high-performance piping products engineered to withstand the most demanding industrial environments. These alloys are characterized by their high nickel content, which serves as a base for adding elements like chromium, molybdenum, iron, copper, and tungsten. This metallurgical versatility allows for the creation of specific grades—such as the Inconel, Monel, Hastelloy, and Incoloy series—each tailored for distinct thermal and chemical challenges. The primary advantage of these pipes is their ability to maintain high mechanical strength, excellent ductility, and structural integrity across a temperature spectrum ranging from cryogenic levels to over 2000°F (1093°C).",
    },

    keyFeatures: [
      "High nickel content for superior corrosion resistance",
      "Excellent resistance to chloride-ion stress corrosion cracking",
      "Outstanding performance in oxidizing and reducing environments",
      "High mechanical strength and excellent ductility",
      "Maintains structural integrity from cryogenic to high temperatures",
      "Superior creep-rupture strength for high-pressure applications",
      "Excellent resistance to pitting and crevice corrosion",
      "Long service life with reduced maintenance costs",
    ],

    applications: [
      "Oil and gas (sour gas production, downhole tubing)",
      "Chemical and petrochemical processing",
      "Aerospace and defense (jet engines, thrust reversers)",
      "Power generation (nuclear reactors, steam generators)",
      "Marine engineering (seawater cooling systems)",
      "Heat exchangers and reaction vessels",
      "Offshore platforms and subsea equipment",
      "Desalination plants and piping systems",
    ],

    corrosionResistance: [
      "Exceptional resistance to sulfuric and hydrochloric acids",
      "Outstanding resistance to hydrofluoric acid",
      "Excellent resistance to caustic alkalis",
      "Superior resistance to chloride-ion stress corrosion cracking",
      "High resistance to pitting and crevice corrosion",
      "Stable passivating oxide layer for protection",
      "Resistant to scaling and surface erosion at high temperatures",
      "Excellent durability in highly corrosive media",
    ],

    stockAvailability: {
      seamless: {
        title: "Seamless Pipes",
        image: seamlessImage,
        items: [
          "Nickel Alloy Seamless Pipes",
          "Ni Alloy Seamless Piping",
          "Nickel Alloy Thin Wall Seamless",
          "ASME SB161 Nickel Alloy Seamless",
          "ASTM B161 Nickel Alloy Seamless",
        ],
      },
      welded: {
        title: "Welded Pipes",
        image: weldedImage,
        items: [
          "Nickel Alloy Welded Pipes",
          "ASME SB725 Nickel Welded Pipes",
          "Ni Alloy Welded Pipe Stock",
          "ASTM B725 Nickel Welded Pipe",
          "Nickel Thin Wall Welded Pipes",
        ],
      },
      erw: {
        title: "ERW Pipes",
        image: erwImage,
        items: [
          "Nickel Alloy ERW Pipes",
          "ASTM B725 Nickel Alloy ERW",
          "Nickel Alloy ERW Pipe Stock",
          "Nickel Resistance Welded Pipe",
        ],
      },
      efw: {
        title: "EFW Pipes",
        image: efwImage,
        items: [
          "Nickel Alloy EFW Pipes",
          "Nickel Electric Fusion Welding",
          "ASME SB161 Nickel Alloy EFW",
          "Nickel Alloy EFW Pipe Stock",
          "ASTM B161 Nickel Alloy EFW",
        ],
      },
      electropolish: {
        title: "Electropolish Pipes",
        image: electropolishImage,
        items: [
          "Nickel Alloy Electropolish Pipes",
          "ASTM B161 Ni Alloy Electropolish",
          "Nickel Thin Wall Electropolish",
          "Nickel Alloy Electropolish Pipe",
        ],
      },
      hollow: {
        title: "Hollow Pipes",
        image: hollowImage,
        items: [
          "Nickel Alloy Hollow Pipes",
          "ASME SB161 Nickel Hollow Pipes",
          "Ni Alloy Hollow Section Pipes",
          "Nickel Alloy Round Hollow Pipe",
        ],
      },
    },

    specifications: {
      standard: "ASTM B161, B725 / ASME SB161, SB725",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, Sizes up to 24" NB available',
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      outsideFinish:
        "2B, No.4, No.1, No.8 Mirror Finish, Customer Requirements",
      deliveryCondition:
        "Annealed & Pickled, Polished, Bright Annealed, Cold Drawn",
    },

    specializedProducts: [
      "Nickel Alloy Pipe Exporter",
      "Welded Nickel Alloy Pipe",
      "ASME SB161 Nickel Alloy Cold Drawn Pipes",
      "ASTM B161 Nickel Alloy Pipes at Best Price",
      "Nickel Welded Pipe",
      "Nickel Alloy Mirror Polish Seamless Pipes",
      "Nickel Square Pipes Dealer",
      "Nickel Alloy Pipes Stockist",
      "Nickel Alloy Welded Pipes Exporter",
      "Nickel Alloy ERW Pipe Stockholder",
      "Ni Alloy Pipes Supplier",
      "Suppliers of Nickel Alloy ERW Pipes",
      "Nickel Alloy Polished Pipe",
      "Ni Alloy Industrial Pipes",
      "Nickel Alloy Pipes Supplier",
      "Type Nickel Hollow Pipes",
      "Nickel Alloy Pipe Cut To Size",
      "Nickel Alloy Customized Pipes",
      "Nickel Alloy Custom Pipe",
      "Nickel Thin Wall Pipe Stockists",
      "Nickel Alloy Oval Pipes",
      "Nickel Alloy Pipes Dealer",
      "Nickel Pipes Supplier in Mumbai",
      "Nickel Pipes Manufacturer in India",
      "ASTM B161 Nickel Alloy Pipes",
      "Nickel Alloy Pipe Supplier",
    ],

    relatedSearches: [
      "Nickel Alloy Efw Pipe Supplier",
      "3 Inch Nickel Alloy Pipe Manufacturers",
      "Nickel Seamless Pipe Exporter In India",
      "Nickel Pipe Price List",
      "Astm B161 Nickel Alloy Pipe",
      "Nickel Alloy Mirror Polish Pipe Exporter",
      "Nickel Alloy Pipe Specifications Pdf",
      "Nickel Pipe Chemical Composition",
      "Cost Of Nickel Alloy Pipe",
      "Nickel Alloy Pipe Supplier In India",
      "Ni Alloy Nickel Alloy Pipe Price Per Kg",
      "Nickel Alloy Pipe In Pune",
      "Nickel Alloy Threaded Pipe",
      "Nickel Alloy Pipe Price In India",
      "Nickel Alloy Pipe Catalogue",
      "Nickel Alloy Pipe Price List In India",
      "Asme SB161 Nickel Alloy Pipe",
      "16 Gauge Nickel Alloy Pipe",
      "Nickel Alloy Pipe Per Kg",
      "Nickel Erw Pipe Supplier",
      "Nickel Alloy Pipe Dimensions",
      "Nickel Alloy Welded Pipe Exporter",
      "Nickel Alloy Pipe Price List",
      "Nickel Alloy Pipe Price List Pdf",
      "Astm B161 Nickel Seamless Pipe",
      "Nickel Pipe Weight Chart",
      "Nickel Alloy Seamless Pipe Supplier",
      "Nickel Alloy Pipe Price",
      "Nickel Pipe Supplier In Mumbai",
      "Buy Nickel Alloy Pipe Welded",
      "Nickel Alloy Pipe Pressure Rating",
      "Nickel Alloy Pipe Weight Chart",
      "Authenticate Nickel Alloy Seamless Pipes Exporter",
      "Nickel Alloy Pipes Manufacturer In Mumbai",
      "Ni Alloy Pipe Suppliers In Gujarat",
      "Price Of Nickel Alloy Pipe",
      "Nickel Alloy Seamless Pipes Supplier In India",
      "Nickel Alloy Pipe Price 20 Feet",
      "Nickel Alloy Welded Pipe Supplier",
      "Ni Alloy Pipe Specifications",
      "Nickel Alloy Pipe Weight Calculator",
      "Nickel Alloy Pipe Sizes",
      "Nickel Alloy Pipe Weight Per Meter",
      "Nickel Seamless Pipe Stockist",
      "Nickel Alloy Pipe Price Per Kg In India",
      "Nickel Alloy Pipe Manufacturers In India",
      "Top 100 Nickel Alloy Pipe Dealers In Pune",
      "Nickel Alloy Erw Pipe Supplier",
      "Nickel Alloy Pipe Roughness",
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

            {/* Corrosion Resistance */}
            <section className="mb-8">
              <SectionTitle>
                Corrosion Resistance and Material Durability
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The standout feature of nickel alloy pipes is their unmatched
                durability in highly corrosive media. They exhibit outstanding
                resistance to a wide array of aggressive chemicals, including
                sulfuric acid, hydrochloric acid, hydrofluoric acid, and caustic
                alkalis. The formation of a stable, passivating oxide layer on
                the pipe's surface protects the underlying metal from further
                attack, significantly reducing scaling and surface erosion in
                high-heat applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {productData.corrosionResistance.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
                  >
                    <span className="text-[#D92B20] text-lg">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>Diverse Industrial Applications</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                Due to their extreme versatility and robust performance
                characteristics, nickel alloy pipes are essential across several
                high-stakes industrial sectors. In the oil and gas industry,
                they are used for sour gas production, downhole tubing, and
                subsea manifold systems. The chemical and petrochemical
                processing sectors rely on these pipes for heat exchangers,
                reaction vessels, and piping handling volatile reagents.
              </p>
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

            {/* Specifications */}
            <section className="mb-8">
              <SectionTitle>Specification of Nickel Alloy Pipes</SectionTitle>
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
              <SectionTitle>
                Stock Availability of Nickel Alloy Pipes
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

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Nickel Alloy Pipes
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
                Searches Related to Nickel Alloy Pipes
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

export default NickelAlloyPipes;
