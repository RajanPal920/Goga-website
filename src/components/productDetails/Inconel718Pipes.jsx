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
("");

// Stock Availability Images
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";
import efwImage from "../../assets/images/stock/efw.jpg";
import roundImage from "../../assets/images/stock/round.jpg";
import hollowImage from "../../assets/images/stock/hollow.jpg";

const Inconel718Pipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Inconel 718 Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B167 / ASME SB167 Inconel 718 Pipes – Precipitation-Hardenable Nickel-Chromium Alloy for Extreme High-Temperature & High-Stress Applications",

    technicalOverview: {
      title: "Inconel 718 Pipes: Technical Overview",
      description:
        "Inconel 718, designated as UNS N07718 and Werkstoff Number 2.4668, is a high-strength, corrosion-resistant nickel-chromium alloy used for service at temperatures from cryogenic levels up to 1300°F (704°C). Unlike many other nickel alloys, Inconel 718 is a precipitation-hardenable alloy that contains significant amounts of niobium, molybdenum, aluminum, and titanium. These elements allow the alloy to be age-hardened, resulting in exceptionally high yield, tensile, and creep-rupture properties.",
    },

    keyFeatures: [
      "Precipitation-hardenable nickel-chromium alloy",
      "High strength from cryogenic to 1300°F (704°C)",
      "Contains niobium, molybdenum, aluminum, and titanium",
      "Exceptionally high yield and tensile strength",
      "Excellent creep-rupture properties",
      "Superior weldability and resistance to post-weld cracking",
      "Outstanding corrosion resistance in various media",
      "Virtually immune to chloride-ion stress corrosion cracking",
    ],

    applications: [
      "Aerospace (liquid-fueled rockets, gas turbine engines)",
      "Oil and gas (high-strength bolting, downhole hardware)",
      "Nuclear power (spacers, fasteners, reactor core components)",
      "Cryogenic engineering (liquefied gas handling)",
      "Chemical processing (high-strength tooling, corrosive reagents)",
      "Marine engineering (fasteners, seawater components)",
      "Aircraft rings and casings",
      "Deep-water oil extraction equipment",
    ],

    corrosionResistance: [
      "Outstanding resistance to high-purity water and salts",
      "Resistant to organic and inorganic acids",
      "Chromium provides defense against oxidizing environments",
      "Nickel and molybdenum ensure stability in reducing conditions",
      "Resistant to pitting and crevice corrosion",
      "Superior stability in high-temperature oxidation environments",
      "Resistant to carburization",
      "Virtually immune to chloride-ion stress corrosion cracking",
    ],

    stockAvailability: {
      seamless: {
        title: "718 Seamless Pipes",
        image: seamlessImage,
        items: [
          "ASME SB167 Inconel 718 Seamless",
          "Inconel Alloy 718 Seamless Pipe",
          "UNS N07718 Seamless Pipe",
          "Inconel 718 Seamless Piping",
          "ASTM B167 Inconel 718 Seamless",
          "Inconel 718 Thin Wall Seamless",
        ],
      },
      welded: {
        title: "718 Welded Pipes",
        image: weldedImage,
        items: [
          "718 Inconel Alloy Welded Pipe",
          "Inconel Alloy 718 Welded Pipe",
          "ASME SB517 Alloy 718 Welded",
          "Inconel 718 Welded Pipe Stock",
          "ASTM B517 Inconel 718 Welded",
          "Nickel Alloy 718 Thin Wall Welded",
        ],
      },
      erw: {
        title: "718 ERW Pipes",
        image: erwImage,
        items: [
          "ASTM B517 718 ERW Pipe",
          "UNS N07718 ERW Pipe",
          "Inconel Alloy 718 ERW Pipe",
          "Inconel 2.4668 ERW Pipe",
          "Alloy 2.4668 ERW Pipe",
          "Inconel 718 Electric Resistance",
        ],
      },
      efw: {
        title: "718 EFW Pipes",
        image: efwImage,
        items: [
          "Inconel UNS N07718 EFW Pipe",
          "Inconel® Alloy 718 EFW Pipes",
          "Alloy 718 Thin Wall EFW Pipes",
          "Inconel Alloy 718 EFW Pipe",
          "Inconel 718 Electric Fusion Welding",
          "Inconel 2.4668 EFW Pipe",
        ],
      },
      round: {
        title: "718 Round Pipes",
        image: roundImage,
        items: [
          "ASTM B167 Inconel 718 Round",
          "ASME SB167 Inconel 718 Round",
          "Inconel Alloy 718 Round Pipe",
          "Inconel 2.4668 Round Pipe Stock",
          "Inconel 718 Round Pipe",
        ],
      },
      hollow: {
        title: "718 Hollow Pipes",
        image: hollowImage,
        items: [
          "Inconel UNS N07718 Hollow Pipe",
          "Inconel 718 Custom Hollow Pipe",
          "Inconel Alloy 718 Hollow Pipe",
          "Alloy 718 Hollow Section Pipes",
          "ASME SB167 718 Hollow Pipes",
          "Inconel 2.4668 Hollow Pipe",
        ],
      },
    },

    specifications: {
      standard: "ASTM B167, B517 / ASME SB167, SB517",
      seamlessSize: '1/2" NB - 16" NB',
      roundSize: '6" NB - 24" NB',
      weldedSize: '1/2" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, sizes up to 24" available',
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      deliveryCondition:
        "Annealed, Pickled, Polished, Bright Annealed, Cold Drawn",
      valueAddedServices:
        "Cutting, Beveling, Threading, Polishing, NDT, UT Testing",
    },

    specializedProducts: [
      "718 Welded Inconel Pipe",
      "718 Inconel Large Diameter Seamless Pipe",
      "INOX 2.4668 Inconel Pipe Exporter",
      "718 Welded Nicel Alloy Pipe",
      "718 Alloy Pipe",
      "Inconel 718 Seamless Pipes",
      "718 Inconel Custom Pipes Dealer",
      "Inconel® Alloy 718 Pipes Stockist",
      "718 Inconel Welded Pipe",
      "Inconel 718 Schedule 80 Pipe",
      "ASME SB167 Inconel 718 Cold Drawn Pipes",
      "ASTM B167 718 Inconel Pipes at Best Price",
      "Inconel 718 Pipes Supplier",
      "Suppliers of 718 Inconel ERW Pipes",
      "Inconel 718 Pipes Supplier in Mumbai",
      "Inconel 718 Pipes Manufacturer in India",
      "Inconel 2.4668 Pipe Cut To Size",
      "Inconel 718 Customized Pipes",
      "718 Inconel Pipes",
      "Inconel® Alloy 718 Pipe",
      "Inconel 718 Welded Pipes Exporter",
      "Inconel 718 ERW Pipe Stockholder",
      "Inconel Alloy 718 Pipes Supplier",
      "Type 718 Inconel Hollow Pipes",
      "ASTM B167 Inconel 718 Custom Pipes",
      "718 Nickel Alloy Pipe Supplier",
      "718 Alloy Thik Wall Pipes",
      "Inconel 718 Cold Drawn Pipes Dealer",
      "Alloy 718 Hollow Pipe",
      "Inconel Grade 718 Industrial Pipes",
      "718 Inconel Custom Pipe",
      "Inconel 718 Thin Wall Pipe Stockists",
      "Nickel Alloy 718 Pipes",
      "B167 Inconel Grade 718 Seamless Pipes",
    ],

    relatedSearches: [
      "Inconel 718 Pipe Pressure Rating",
      "718 Inconel Pipe Specifications Pdf",
      "Inconel 718 Pipe Chemical Composition",
      "Inconel 718 Pipe Supplier In India",
      "Inconel 718 Pipe Price Per Kg",
      "Inconel 718 Seamless Pipe Supplier",
      "Inconel 718 Pipe Price List Pdf",
      "Inconel 718 Pipe Weight Chart",
      "718 Alloy Pipe Price Per Kg In India",
      "Inconel 718 Pipe Price",
      "Inconel 718 Pipe Manufacturers In India",
      "ASTM B167 Inconel 718 Seamless Pipe",
      "Inconel 718 Pipe Dimensions",
      "718 Nickel Alloy Pipe Price List",
      "Inconel 718 EFW Pipe Supplier",
      "Inconel 718 Welded Pipe Supplier",
      "Inconel 718 Round Pipe Supplier",
      "Inconel 718 Pipe Price In India",
      "Inconel 718 Pipes Manufacturer In Mumbai",
      "ASME SB167 718 Alloy Pipe",
      "UNS N07718 Pipe",
      "Inconel 718 Exhaust Pipes Supplier In India",
      "Cost Of 718 Inconel Pipe",
      "Inconel 718 Pipe Per Kg",
      "Inconel 718 Pipe Catalogue",
      "Inconel 718 Pipe Weight Per Meter",
      "Inconel Pipe Price 20 Feet",
      "718 Seamless Pipe Stockist",
      "Inconel 718 EFW large diameter pipes",
      "Buy Inconel Pipe 718 Welded Schedule 40",
      "Inconel 718 Pipe Price List",
      "718 Inconel Pipe Dimensions",
      "Inconel 718 Pipe Weight Calculator",
      "Nickel Alloy 718 Round Pipe Supplier",
      "ASTM B167 Alloy 718 Pipes",
      "Inconel 718 Pipe Supplier In Mumbai",
      "Top 100 Inconel Pipe Dealers In Pune",
      "Alloy 718 Seamless Pipe Exporter",
      "Inconel 718 Welded Pipe Exporter",
      "Inconel Pipe Grade 718 Price List",
      "Inconel 718 Pipe Per Kg",
      "718 Alloy Threaded Pipe",
      "Inconel 718 Exhaust Pipes Supplier In India",
      "Inconel 718 Pipe Schedule",
      "Alloy 718 Pipe Price List In India",
      "Inconel 2.4668 Custom Pipe Suppliers In Gujarat",
      "718 Inconel Pipe Specifications",
      "Price Of Inconel Pipe 718",
      "718 Inconel Pipe Price Per Kg",
      "Inconel 718 Pipe Roughness",
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

            {/* Corrosion Resistance */}
            <section className="mb-8">
              <SectionTitle>
                Corrosion Resistance and High-Temperature Stability
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The robust corrosion resistance of Inconel 718 pipes makes them
                a critical addition to complex industrial piping systems. They
                exhibit outstanding resistance to a wide variety of corrosive
                media, including high-purity water, salts, and various organic
                and inorganic acids. The alloy's chromium content provides a
                strong defense against oxidizing environments, while the nickel
                and molybdenum content ensures stability in reducing conditions
                and resistance to pitting and crevice corrosion.
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
                Due to their extreme strength and heat-resistant capabilities,
                Inconel 718 pipes are essential across several high-stakes
                industrial sectors. In the aerospace industry, they are a
                primary material for liquid-fueled rockets, rings, casings, and
                various formed sheet metal parts for aircraft and land-based gas
                turbine engines. The oil and gas sector relies on these pipes
                for high-strength bolting and downhole hardware in sour gas
                environments.
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
              <SectionTitle>Specification of Inconel 718 Pipes</SectionTitle>
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
                Stock Availability of Inconel 718 Pipes
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
                Specialized In Following Inconel 718 Pipes
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
              <SectionTitle>Searches Related to Inconel 718 Pipes</SectionTitle>
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

export default Inconel718Pipes;
