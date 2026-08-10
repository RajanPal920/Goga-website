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
import roundImage from "../../assets/images/stock/round.jpg";
import hollowImage from "../../assets/images/stock/hollow.jpg";

const MonelPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Monel Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B165 / ASME SB165 Monel Alloy Pipes – High-Strength Nickel-Copper Alloy for Marine & Chemical Applications",

    technicalOverview: {
      title: "Monel Pipes: Technical Overview",
      description:
        "Monel alloy pipes, primarily available in grades Monel 400 and Monel K500, are nickel-copper-based solid-solution alloys renowned for their high strength and excellent resistance to a wide range of corrosive environments. Monel 400 (UNS N04400) is characterized by its high nickel content (minimum 63%), which provides superior resistance to hydrofluoric acid and deaerated hydrochloric acid. At room temperature, Monel seamless pipes exhibit slight magnetic properties, though they remain versatile across a broad thermal spectrum.",
    },

    keyFeatures: [
      "Nickel-copper alloy with minimum 63% nickel content",
      "High strength and excellent corrosion resistance",
      "Virtually immune to chloride-ion stress corrosion cracking",
      "Outstanding resistance to flowing seawater and caustic solutions",
      "Maintains structural integrity from cryogenic to 1000°F",
      "Available in grades Monel 400 and Monel K500",
      "Excellent resistance to hydrofluoric acid",
      "Superior performance in non-oxidizing chloride solutions",
    ],

    applications: [
      "Marine industry (propeller shafts, seawater piping)",
      "Chemical processing (heat exchangers, reaction vessels)",
      "Oil and gas (downhole equipment, sour-gas production)",
      "Nuclear and aerospace components",
      "Process industries (scrapers, blades for organic acids)",
      "Manufacturing of chlorinated plastics",
      "Offshore platform components",
      "Specialized industrial chemical equipment",
    ],

    corrosionResistance: [
      "Exceptional durability in marine and chemical environments",
      "Virtually immune to chloride-ion stress corrosion cracking",
      "Outstanding resistance to flowing seawater and salt solutions",
      "Excellent resistance to caustic solutions",
      "Primary choice for handling hydrofluoric acid",
      "Resistant to neutral and alkaline salts",
      "Superior performance in non-oxidizing chloride solutions",
      "Resistant to pitting and surface degradation",
    ],

    stockAvailability: {
      seamless: {
        title: "Seamless Pipes",
        image: seamlessImage,
        items: [
          "Monel® Alloy Seamless Piping",
          "ASME SB165 Monel Seamless",
          "Monel Thin Wall Seamless Pipes",
          "ASTM B165 Monel Seamless Pipe",
        ],
      },
      welded: {
        title: "Welded Pipes",
        image: weldedImage,
        items: [
          "ASME SB725 Monel Welded Pipes",
          "Monel Alloy Thin Wall Welded",
          "Monel® Alloy Welded Pipe",
          "ASTM B725 Monel Welded Pipe",
        ],
      },
      erw: {
        title: "ERW Pipes",
        image: erwImage,
        items: [
          "Monel Alloy ERW Pipe",
          "ASTM B725 Monel ERW Pipe",
          "Monel Resistance Welded Pipe",
        ],
      },
      efw: {
        title: "EFW Pipes",
        image: efwImage,
        items: [
          "Monel Alloy EFW Pipes",
          "ASME SB165 Monel EFW Pipes",
          "ASTM B165 Monel EFW Pipe",
          "Monel Alloy Fusion Welding",
        ],
      },
      round: {
        title: "Round Pipes",
        image: roundImage,
        items: [
          "Monel Alloy Thin Wall Round",
          "ASTM B165 Monel Round Pipe",
          "Monel Alloy Round Pipes Stock",
        ],
      },
      hollow: {
        title: "Hollow Pipes",
        image: hollowImage,
        items: [
          "ASME SB165 Monel Hollow Pipes",
          "Monel Round Hollow Pipe Stock",
          "Monel® Alloy Hollow Sections",
        ],
      },
    },

    specifications: {
      standard: "ASTM B165, B725 / ASME SB165, SB725",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, sizes up to 24" NB available',
      thicknessRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      deliveryCondition: "Annealed & Pickled, Bright Annealed, Cold Drawn",
      valueAddedServices:
        "Cutting, Beveling, Threading, NDT, Ultrasonic Testing",
    },

    specializedProducts: [
      "Monel Welded Pipes Exporter",
      "Monel ERW Pipe Stockholder",
      "Monel Alloy Square Pipes Dealer",
      "Monel Pipes Stockist",
      "Monel Pipe Exporter",
      "Welded Monel Pipe",
      "ASME SB165 Monel Cold Drawn Pipes",
      "ASTM B165 Monel Pipes at Best Price",
      "Monel Alloy Welded Pipe",
      "Monel Seamless Pipes",
      "Monel® Alloy Pipes Supplier",
      "Suppliers of Monel ERW Pipes",
      "Monel Alloy Pipes Supplier in Mumbai",
      "Monel Alloy Pipes Manufacturer in India",
      "Monel Custom Pipe",
      "Monel Alloy Thin Wall Pipe Stockists",
      "Monel Pipe Cut To Size",
      "Monel Customized Pipes",
      "Monel Pipes Supplier",
      "Type Monel Hollow Pipes",
      "ASTM B165 Monel Square Pipes",
      "Monel® Alloy Industrial Pipes",
    ],

    relatedSearches: [
      "Monel Pipe Specifications Pdf",
      "Monel® Alloy Pipe Suppliers In Gujarat",
      "Monel Alloy Pipe Chemical Composition",
      "Monel Pipe Price 20 Feet",
      "Monel Pipe Price",
      "Buy Monel Pipe Welded",
      "Monel Welded Pipe Exporter",
      "Monel Alloy Pipe Weight Chart",
      "Monel Pipe Weight Calculator",
      "Cost Of Monel Pipe",
      "Monel Pipe Price List Pdf",
      "Monel Alloy Pipe Supplier In Mumbai",
      "Monel Welded Pipe Supplier",
      "3 Inch Monel Pipe Manufacturers",
      "Monel Pipe Weight Per Meter",
      "Astm B165 Monel Alloy Seamless Pipe",
      "Monel Pipe Manufacturers In India",
      "Monel® Alloy Pipe Specifications",
      "Monel Pipe Roughness",
      "Monel Pipe Price Per Kg In India",
      "Monel Pipe Price In India",
      "Monel Pipes Manufacturer In Mumbai",
      "Monel Pipe Weight Chart",
      "Monel Pipe Per Kg",
      "Monel Pipe Sizes",
      "Monel Seamless Pipe Supplier",
      "Monel Efw Pipe Supplier",
      "Monel Alloy Pipe Price List",
      "Monel Pipe Catalogue",
      "Price Of Monel Pipe",
      "Monel Pipe In Pune",
      "Monel Pipe Pressure Rating",
      "Monel Alloy Seamless Pipe Stockist",
      "Monel Pipe Supplier In India",
      "Asme SB165 Monel Pipe",
      "Monel Alloy Seamless Pipe Exporter In India",
      "Monel Erw Pipe Supplier",
      "Monel® Alloy Monel Pipe Price Per Kg",
      "Monel Pipe Price List",
      "Authenticate Monel Seamless Pipes Exporter",
      "Monel Pipe Dimensions",
      "Monel Seamless Pipes Supplier In India",
      "Monel Threaded Pipe",
      "Monel Pipe Price List In India",
      "Monel Alloy Erw Pipe Supplier",
      "Top 100 Monel Pipe Dealers In Pune",
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
      { name: "Flats & Pairs", slug: "patta-patti" },
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
                The standout feature of Monel pipes is their exceptional
                durability in marine and chemical environments. These pipes are
                virtually immune to chloride-ion stress corrosion cracking and
                exhibit outstanding resistance to flowing seawater, salt, and
                caustic solutions. They maintain their structural integrity from
                cryogenic temperatures up to approximately 1000°F (538°C),
                making them reliable for fluid transport in extreme thermal
                conditions.
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
                Due to their robust resistance to both mechanical stress and
                chemical attack, Monel pipes are essential across several
                critical sectors. In the marine industry, they are used for
                propeller shafts, seawater piping systems, and offshore platform
                components. The chemical processing sector relies on these pipes
                for heat exchangers, reaction vessels, and piping handling
                volatile acidic reagents.
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
              <SectionTitle>Specification of Monel Pipes</SectionTitle>
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
              <SectionTitle>Stock Availability of Monel Pipes</SectionTitle>
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
              <SectionTitle>Specialized in Following Monel Pipes</SectionTitle>
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
              <SectionTitle>Searches Related to Monel Pipes</SectionTitle>
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

export default MonelPipes;
