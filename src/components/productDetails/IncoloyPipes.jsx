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

const IncoloyPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Incoloy Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B167 / ASME SB167 Incoloy Alloy Pipes – Nickel-Iron-Chromium Alloys with Exceptional Corrosion Resistance & High-Temperature Capabilities",

    technicalOverview: {
      title: "Incoloy Pipes: Technical Overview",
      description:
        "Incoloy identified by the technical designation UNS N08825, is a nickel-iron-chromium alloy supplemented with molybdenum, copper, and titanium. This specific grade is engineered to provide exceptional resistance to many corrosive environments, particularly those involving both oxidizing and reducing acids. A key feature of the Incoloy 825 pipe is the addition of titanium, which serves to stabilize the alloy against intergranular corrosion. This stabilization is critical during welding procedures, especially when the material is heated to the critical sensitization temperature range of 650°C to 760°C.",
    },

    keyFeatures: [
      "Nickel-iron-chromium alloy with molybdenum, copper, and titanium",
      "Titanium stabilization prevents intergranular corrosion",
      "Virtually immune to chloride-ion stress corrosion cracking",
      "Excellent resistance to nitric, sulfuric, and phosphoric acids",
      "Superior performance in oxidizing and reducing environments",
      "High nickel content provides flexibility and impact resistance",
      "Excellent resistance to seawater and brackish water",
      "Maintains structural integrity under extreme thermal stress",
    ],

    applications: [
      "Oil and gas (downhole equipment, gathering systems)",
      "Chemical and petrochemical processing",
      "Food and medicine machinery (hygienic processing)",
      "Paper and pulp industry (bleaching and digesting)",
      "Pollution control (scrubbers, corrosive exhaust systems)",
      "Nuclear fuel reprocessing",
      "High-temperature steam lines",
      "Heat exchangers and pressure vessels",
    ],

    corrosionResistance: [
      "Exceptional resistance to nitric acid",
      "Excellent resistance to sulfuric and phosphoric acids",
      "Superior resistance to seawater and brackish water",
      "Virtually immune to chloride-ion stress corrosion cracking",
      "Titanium stabilization prevents intergranular corrosion",
      "Excellent performance in oxidizing and reducing acids",
      "High resistance to pitting and crevice corrosion",
      "Maintains integrity in aggressive chemical environments",
    ],

    stockAvailability: {
      seamless: {
        title: "Incoloy Seamless Pipes",
        image: seamlessImage,
        items: [
          "Incoloy® Alloy Seamless Piping",
          "Incoloy Thin Wall Seamless Pipes",
          "ASME SB167 Incoloy Seamless",
          "ASTM B167 Incoloy Seamless Pipe",
        ],
      },
      welded: {
        title: "Incoloy Welded Pipes",
        image: weldedImage,
        items: [
          "ASTM B705 Incoloy Welded Pipe",
          "Incoloy® Alloy Welded Pipe",
          "ASME SB705 Incoloy Welded Pipes",
          "Incoloy Alloy Thin Wall Welded",
        ],
      },
      erw: {
        title: "Incoloy ERW Pipes",
        image: erwImage,
        items: [
          "Incoloy Alloy ERW Pipe",
          "Incoloy ERW Pipe Stock",
          "ASTM B705 Incoloy ERW Pipe",
          "Incoloy Resistance Welded Pipe",
        ],
      },
      efw: {
        title: "Incoloy EFW Pipes",
        image: efwImage,
        items: [
          "Incoloy Alloy Fusion Welded Pipe",
          "ASTM B167 Incoloy EFW Pipe",
          "ASME SB167 Incoloy EFW Pipes",
          "Incoloy Alloy EFW Pipes",
        ],
      },
      electropolish: {
        title: "Electropolish Pipes",
        image: electropolishImage,
        items: [
          "Incoloy Thin Wall Electropolish",
          "ASTM B167 Incoloy Electropolish",
          "Incoloy Alloy Electropolish Pipes",
          "Incoloy Electropolish Pipe Stock",
        ],
      },
      hollow: {
        title: "Incoloy Hollow Pipes",
        image: hollowImage,
        items: [
          "Incoloy Round Hollow Pipe",
          "Incoloy® Alloy Hollow Sections",
          "ASME SB167 Incoloy Hollow Pipes",
          "Incoloy Hollow Pipe Stock",
        ],
      },
    },

    specifications: {
      standard: "ASTM B167, B705 / ASME SB167, SB705",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, sizes up to 24" available',
      scheduleRange: "SCH 5 to SCH 160, SCH XXS, SCH XS",
      outsideFinish: "2B, No.4, No.1, No.8 Mirror Finish, Customer Requirement",
      manufacturing:
        "Seamless, Welded, ERW, Fabricated, CDW, 100% X-Ray Welded",
    },

    specializedProducts: [
      "Incoloy Welded Pipes Exporter",
      "Incoloy ERW Pipe Stockholder",
      "Incoloy Alloy Welded Pipe",
      "Incoloy Mirror Polish Seamless Pipes",
      "Incoloy Alloy Pipes Dealer",
      "Incoloy Pipes Stockist",
      "Incoloy Pipe Cut To Size",
      "Incoloy Customized Pipes",
      "ASME SB167 Incoloy Cold Drawn Pipes",
      "ASTM B167 Incoloy Pipes at Best Price",
      "Incoloy® Alloy Pipes Supplier",
      "Suppliers of Incoloy ERW Pipes",
      "Incoloy Alloy Pipes Supplier Mumbai",
      "Incoloy Alloy Pipes Manufacturer India",
      "Incoloy Pipe Exporter",
      "Welded Incoloy Pipe",
      "Incoloy Pipes Supplier",
      "Type Incoloy Hollow Pipes",
      "ASTM B167 Incoloy Pipes",
      "Incoloy Pipe Supplier",
      "Incoloy Custom Pipe",
      "Incoloy Alloy Thin Wall Pipe Stockists",
      "Incoloy Polished Pipe",
      "Incoloy® Alloy Industrial Pipes",
    ],

    relatedSearches: [
      "Incoloy Pipe Price List In India",
      "Cost Of Incoloy Pipe",
      "Incoloy Welded Pipe Supplier",
      "Incoloy Pipe Supplier In India",
      "Incoloy Alloy Pipe Price List",
      "Incoloy Alloy Erw Pipe Supplier",
      "Incoloy Pipe Price Per Kg In India",
      "Incoloy Pipe Sizes",
      "Incoloy Pipe Per Kg",
      "Incoloy Pipe Catalogue",
      "Incoloy Welded Pipe Exporter",
      "Incoloy Seamless Pipe Supplier",
      "Incoloy Pipes Manufacturer In Mumbai",
      "Incoloy Pipe Weight Per Meter",
      "Incoloy Pipe Weight Calculator",
      "Asme SB167 Incoloy Pipe",
      "Incoloy Pipe Price In India",
      "Incoloy® Alloy Pipe Specifications",
      "Incoloy Pipe Pressure Rating",
      "3 Inch Incoloy Pipe Manufacturers",
      "Incoloy Pipe Price List Pdf",
      "Incoloy Pipe In Pune",
      "Buy Incoloy Pipe Welded",
      "Incoloy Pipe Roughness",
      "Incoloy Pipe Price List",
      "Incoloy Pipe Price 20 Feet",
      "Incoloy Alloy Pipe Chemical Composition",
      "Authenticate Incoloy Seamless Pipes Exporter",
      "Incoloy Pipe Specifications Pdf",
      "Incoloy Seamless Pipes Supplier In India",
      "Incoloy Alloy Pipe Supplier In Mumbai",
      "Incoloy® Alloy Incoloy Pipe Price Per Kg",
      "Incoloy Erw Pipe Supplier",
      "Incoloy Pipe Dimensions",
      "16 Gauge Incoloy Pipe",
      "Incoloy Efw Pipe Supplier",
      "Incoloy Alloy Seamless Pipe Exporter In India",
      "Astm B167 Incoloy Alloy Seamless Pipe",
      "Incoloy Pipe Manufacturers In India",
      "Incoloy® Alloy Pipe Suppliers In Gujarat",
      "Incoloy Alloy Seamless Pipe Stockist",
      "Incoloy Pipe Weight Chart",
      "Incoloy Mirror Polish Pipe Exporter",
      "Incoloy Pipe Price",
      "Price Of Incoloy Pipe",
      "Incoloy Threaded Pipe",
      "Top 100 Incoloy Pipe Dealers In Pune",
      "Incoloy Alloy Pipe Weight Chart",
      "Astm B167 Incoloy Pipe",
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
                Corrosion Resistance and Industrial Durability
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The robust corrosion resistance properties of Incoloy pipes make
                them a highly durable addition to complex piping systems. They
                are particularly valued in applications that handle nitric acid,
                where maintaining material integrity is paramount for safety.
                These pipes also exhibit excellent resistance to sulfuric and
                phosphoric acids, as well as seawater and brackish water, making
                them ideal for both onshore and offshore industrial sites.
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
                Due to their versatility and high-temperature capabilities,
                Incoloy 825 pipes are utilized in several critical sectors. In
                the oil and gas and natural gas industries, they are used for
                downhole equipment and gathering systems. The petrochemical and
                chemical processing sectors rely on them for handling aggressive
                reagents and mixed acid solutions. Their reliability under
                pressure ensures consistent performance in the most demanding
                fluid transport systems.
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
              <SectionTitle>Specification of Incoloy Pipes</SectionTitle>
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
              <SectionTitle>Stock Availability of Incoloy Pipes</SectionTitle>
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
                Specialized In Following Incoloy Pipes
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
              <SectionTitle>Searches Related to Incoloy Pipes</SectionTitle>
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

export default IncoloyPipes;
