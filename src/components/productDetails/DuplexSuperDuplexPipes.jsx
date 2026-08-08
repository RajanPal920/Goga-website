import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

// Import contact helpers (same as other components)
import {
  getWhatsAppUrl,
  getTelUrl,
} from "../../utils/contactHelpers";

// Sample image imports (replace with your actual image paths)
import productImage from "../../assets/images/productImage/pipes.webp";
import bannerImage from "../../assets/images/productImage/banner-industrial.webp";

// Stock Availability Images
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";

const DuplexSuperDuplexPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Duplex / Super Duplex Steel Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A790 / ASME SA790 Duplex & Super Duplex Steel Pipes – High-Performance Solutions for Oil & Gas, Chemical & Desalination Industries",

    technicalOverview: {
      title: "Duplex / Super Duplex Steel Pipes: Technical Overview",
      description:
        "Raymond Ispat India is a notable manufacturer, supplier, and stockist of high-performance Duplex and Super Duplex Steel Pipes in Mumbai. Our product range includes ASME SA790 custom pipes, available in seamless, welded, ERW, square, and rectangular profiles. Due to their robust chemical balance, these pipes are highly consistent in forming and welding applications, with Tungsten Inert Gas (TIG) welding being the most effective method for maintaining structural integrity. The material's resistance to acetic and formic acids makes it a vital component in chemical processing workflows.",
    },

    keyFeatures: [
      "High-performance duplex and super duplex grades",
      "Excellent resistance to acetic and formic acids",
      "Consistent forming and welding properties",
      "TIG welding for optimal structural integrity",
      "Available in seamless, welded, ERW, square, and rectangular profiles",
      "Superior corrosion resistance in aggressive environments",
      "High strength-to-weight ratio",
      "Suitable for high-pressure and high-temperature systems",
    ],

    applications: [
      "Oil and gas industry (volatile substance transport)",
      "High-pressure Reverse Osmosis (RO) plants",
      "Desalination facilities",
      "Chemical processing workflows",
      "Offshore and marine applications",
      "Heat exchangers and pressure vessels",
      "Pulp and paper industry",
      "Power generation plants",
    ],

    stockAvailability: {
      seamless: {
        title: "DSS / SDSS Seamless Pipes",
        image: seamlessImage,
        items: [
          "Super Duplex Stainless Seamless Pipe",
          "DSS Seamless Piping",
          "Duplex Steel Thin Wall Seamless",
          "ASME SA790 Duplex Seamless Pipes",
          "ASTM A790 Duplex Steel Seamless",
        ],
      },
      welded: {
        title: "DSS / SDSS Welded Pipes",
        image: weldedImage,
        items: [
          "Super Duplex Stainless Welded Pipe",
          "SDSS Thin Wall Welded Pipes",
          "Duplex Steel Welded Pipe",
          "ASME SA790 Super Duplex Welded",
          "DSS Welded Pipe",
        ],
      },
      erw: {
        title: "DSS / SDSS ERW Pipes",
        image: erwImage,
        items: [
          "ASTM A790 Duplex Steel ERW Pipe",
          "SDSS Electric Resistance Welded",
          "Duplex Stainless Steel ERW Pipe",
          "Super Duplex Steel ERW Pipe",
        ],
      },
    },

    specifications: {
      standard: "ASTM A790, A928 / ASME SA790, SA928",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange:
        '6.00 mm OD to 914.4 mm OD, Sizes up to 24" NB available Ex-stock',
      manufacturingShapes: "Hydraulic, Round, Rectangle, Square, Hex, Honed",
      scheduleRange: "SCH 5 to SCH XS",
    },

    weightChart: [
      {
        nps: "32 (800)",
        weight: "84.085 (126.032)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.025 (6.035)",
      },
      {
        nps: "32 (800)",
        weight: "95.028 (141.09)",
        sch: "-",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0281 (7.014)",
      },
      {
        nps: "32 (800)",
        weight: "105.069 (157.025)",
        sch: "10",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "32 (800)",
        weight: "126.078 (188.083)",
        sch: "STD",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "32 (800)",
        weight: "168.037 (250.065)",
        sch: "20",
        od: "32.00 (813)",
        id: "XS",
        wt: "0.05 (12.07)",
      },
      {
        nps: "32 (800)",
        weight: "209.062 (312.017)",
        sch: "30",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0625 (15.088)",
      },
      {
        nps: "32 (800)",
        weight: "230.029 (342.094)",
        sch: "40",
        od: "32.00 (813)",
        id: "-",
        wt: "0.0688 (17.048)",
      },
      {
        nps: "34 (850)",
        weight: "90.02 (134.031)",
        sch: "-",
        od: "34.00 (864)",
        id: "-",
        wt: "0.025 (6.035)",
      },
      {
        nps: "34 (850)",
        weight: "112.036 (167.021)",
        sch: "10",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "34 (850)",
        weight: "134.079 (200.082)",
        sch: "STD",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "34 (850)",
        weight: "179.006 (266.063)",
        sch: "20",
        od: "34.00 (864)",
        id: "XS",
        wt: "0.05 (12.07)",
      },
      {
        nps: "34 (850)",
        weight: "222.099 (332.014)",
        sch: "30",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0625 (15.088)",
      },
      {
        nps: "34 (850)",
        weight: "245.00 (364.092)",
        sch: "40",
        od: "34.00 (864)",
        id: "-",
        wt: "0.0688 (17.048)",
      },
      {
        nps: "36 (900)",
        weight: "95.054 (142.014)",
        sch: "-",
        od: "36.00 (914)",
        id: "-",
        wt: "0.025 (6.035)",
      },
      {
        nps: "36 (900)",
        weight: "119.003 (176.097)",
        sch: "10",
        od: "36.00 (914)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "36 (900)",
        weight: "142.081 (212.057)",
        sch: "STD",
        od: "36.00 (914)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "36 (900)",
        weight: "189.075 (282.029)",
        sch: "20",
        od: "36.00 (914)",
        id: "XS",
        wt: "0.05 (12.07)",
      },
      {
        nps: "36 (900)",
        weight: "236.035 (351.073)",
        sch: "30",
        od: "36.00 (914)",
        id: "-",
        wt: "0.0625 (15.088)",
      },
      {
        nps: "36 (900)",
        weight: "282.062 (420.045)",
        sch: "40",
        od: "36.00 (914)",
        id: "-",
        wt: "0.075 (19.005)",
      },
      {
        nps: "38 (950)",
        weight: "125.07 (186.094)",
        sch: "-",
        od: "38.00 (965)",
        id: "-",
        wt: "0.0312 (7.092)",
      },
      {
        nps: "38 (950)",
        weight: "150.083 (224.056)",
        sch: "STD",
        od: "38.00 (965)",
        id: "-",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "38 (950)",
        weight: "200.044 (298.026)",
        sch: "XS",
        od: "38.00 (965)",
        id: "-",
        wt: "0.05 (12.07)",
      },
    ],

    priceRange: [
      {
        diameterA: "1/8",
        diameterB: "6",
        od: "10.03",
        weight: "0.027",
        wall: "1.28",
        price: "0.5 – 110",
        pricekg: "300 – 400",
      },
      {
        diameterA: "1/4",
        diameterB: "8",
        od: "13.7",
        weight: "0.049",
        wall: "1.65",
        price: "110 – 200",
        pricekg: "200 – 300",
      },
      {
        diameterA: "3/8",
        diameterB: "10",
        od: "17.2",
        weight: "0.063",
        wall: "1.65",
        price: "169 – 250",
        pricekg: "250 – 320",
      },
      {
        diameterA: "1/2",
        diameterB: "15",
        od: "21.3",
        weight: "1.02",
        wall: "2.11",
        price: "234.8 – 289",
        pricekg: "220 – 320.5",
      },
      {
        diameterA: "3/4",
        diameterB: "20",
        od: "26.7",
        weight: "1.3",
        wall: "2.11",
        price: "300 – 350",
        pricekg: "220 – 300",
      },
      {
        diameterA: "1",
        diameterB: "25",
        od: "33.4",
        weight: "2.13",
        wall: "2.77",
        price: "459.9 – 600",
        pricekg: "200 – 400",
      },
      {
        diameterA: "1 1/4",
        diameterB: "32",
        od: "24.2",
        weight: "2.73",
        wall: "2.77",
        price: "527.9 – 600",
        pricekg: "200 – 250",
      },
      {
        diameterA: "1 1/2",
        diameterB: "40",
        od: "48.3",
        weight: "3.16",
        wall: "2.77",
        price: "611 – 750",
        pricekg: "205 – 300",
      },
      {
        diameterA: "2",
        diameterB: "50",
        od: "60.03",
        weight: "3.99",
        wall: "2.77",
        price: "797.75 – 810",
        pricekg: "205 – 300",
      },
      {
        diameterA: "2 1/2",
        diameterB: "65",
        od: "73",
        weight: "5.34",
        wall: "3.05",
        price: "1200.5 – 1300",
        pricekg: "205 – 300",
      },
      {
        diameterA: "3",
        diameterB: "80",
        od: "88.9",
        weight: "6.56",
        wall: "3.05",
        price: "1376 – 1566",
        pricekg: "205 – 300",
      },
      {
        diameterA: "4",
        diameterB: "100",
        od: "114.3",
        weight: "8.5",
        wall: "3.05",
        price: "1855 – 2000",
        pricekg: "220 – 300",
      },
      {
        diameterA: "6",
        diameterB: "150",
        od: "168.3",
        weight: "14.04",
        wall: "3.43",
        price: "3010 – 3500",
        pricekg: "240 – 350",
      },
      {
        diameterA: "8",
        diameterB: "200",
        od: "219.1",
        weight: "20.077",
        wall: "3.765",
        price: "5200.02 – 5500",
        pricekg: "220 – 300",
      },
      {
        diameterA: "10",
        diameterB: "250",
        od: "273.1",
        weight: "28.2",
        wall: "4.198",
        price: "8160 – 9000",
        pricekg: "300 – 350",
      },
      {
        diameterA: "12",
        diameterB: "300",
        od: "323.9",
        weight: "36.54",
        wall: "4.57",
        price: "10692.8 – 11000",
        pricekg: "300 – 350",
      },
    ],

    specializedProducts: [
      "Super Duplex Stainless Steel Pipe",
      "Super Duplex Mirror Polish Seamless Pipes",
      "ASME SA790 Super Duplex Steel Cold Drawn",
      "ASTM A790 Duplex Steel Pipes at Best Price",
      "DSS Hexagonal Pipes Supplier",
      "Suppliers of Duplex ERW Pipes",
      "Duplex Stainless Steel Pipe Exporter",
      "Welded Duplex Steel Pipe",
      "Duplex Steel Welded Pipes Exporter",
      "Super Duplex Steel ERW Pipe Stockholder",
      "Stainless Steel Pipes Supplier",
      "Type Super Duplex Hollow Pipes",
      "DSS Pipes Supplier in Mumbai",
      "SDSS Pipes Manufacturer in India",
      "Duplex Steel Custom Pipe",
      "SDSS Thin Wall Pipe Stockists",
      "Super Duplex Steel Oval Pipes",
      "Duplex Stainless Hydraulic Pipes Dealer",
      "Stainless Steel Pipe Cut To Size",
      "Super Duplex Steel Customized Pipes",
      "ASTM A790 Duplex Steel Square Pipes",
      "Super Duplex Steel Pipe Supplier",
      "SDSS Square Pipes Dealer",
      "Duplex Steel Pipes Stockist",
      "Duplex Steel Decorative Pipes",
      "Duplex Schedule 80 Pipe",
      "Super Duplex Steel Polished Pipe",
      "Super Duplex Industrial Pipes",
    ],

    relatedSearches: [
      "SDSS Erw Pipe Supplier",
      "Duplex Steel Pipe Dimensions",
      "Super Duplex Steel Pipe Supplier In India",
      "SDSS Super Duplex Steel Pipe Price Per Kg",
      "Duplex Steel Threaded Pipe",
      "Super Duplex Steel Erw Pipe Supplier",
      "DSS Pipe Supplier In Mumbai",
      "Super Duplex Steel Pipe In Pune",
      "SDSS Seamless Pipe Exporter In India",
      "DSS Pipe Weight Chart",
      "Authenticate Duplex Steel Seamless Pipes Exporter",
      "Super Duplex Steel Pipe Manufacturers In India",
      "Super Duplex Steel Pipes Manufacturer In Mumbai",
      "SDSS Pipe Specifications",
      "DSS Seamless Pipe Stockist",
      "Asme SA790 Duplex Steel Pipe",
      "Duplex Steel Pipe Catalogue",
      "Astm A790 Super Duplex Steel Pipe",
      "Duplex Stainless Steel Seamless Pipe Supplier",
      "Duplex Steel Pipe Weight Calculator",
      "SDSS Pipe Weight Chart",
      "Duplex Steel Pipe Price",
      "Duplex Steel Pipe Price 20 Feet",
      "Super Duplex Stainless Steel Efw Pipe Supplier",
      "Price Of Super Duplex Steel Pipe",
      "Cost Of Super Duplex Steel Pipe",
      "DSS Pipe Chemical Composition",
      "Duplex Pipe Price",
      "Astm A790 SDSS Seamless Pipe",
      "Super Duplex Steel Pipe Specifications Pdf",
      "Duplex Steel Pipe Price List In India",
      "SDSS Square Pipe Suppliers In Gujarat",
      "Duplex Stainless Steel Pipe Weight Chart",
      "DSS Welded Pipe Exporter",
      "Duplex Steel Pipe Price Per Kg In India",
      "Super Duplex Steel Pipe Roughness",
      "Duplex Pipe Price List",
      "16 Gauge Super Duplex Steel Pipe",
      "Duplex Steel Pipe Price List",
      "Super Duplex Steel Pipe Price In India",
      "DSS Pipe Price List",
      "Top 100 Super Duplex Steel Pipe Dealers In Pune",
      "Duplex Steel Pipe Schedule",
      "Buy Super Duplex Steel Pipe Welded",
      "Super Duplex Steel Pipe Per Kg",
      "Duplex Steel Pipe Price List Pdf",
      "3 Inch Super Duplex Steel Pipe Manufacturers",
      "Duplex Steel Pipe Sizes",
      "Duplex Steel Mirror Polish Pipe Exporter",
      "Duplex Steel Pipe Pressure Rating",
      "Super Duplex Steel Pipe Weight Per Meter",
      "Super Duplex Steel Welded Pipe Supplier",
      "Duplex Steel Seamless Pipes Supplier In India",
      "View Schedule Chart And Updated Price List Of SDSS Rectangular Pipe",
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
              <SectionTitle>Industrial Applications</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The applications for Super Duplex stainless steel pipes are
                extensive, ranging from the oil and gas industry for
                transporting volatile substances to high-pressure Reverse
                Osmosis (RO) plants and desalination facilities.
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

            {/* Quality Assurance */}
            <section className="mb-8">
              <SectionTitle>Quality Assurance</SectionTitle>
              <p className="text-gray-700 leading-relaxed">
                At our Mumbai facility, all pipes undergo stringent testing
                under the supervision of trained staff at various production
                stages to ensure zero quality degradation. Raymond Ispat India
                is committed to providing excellence through high quality
                standards, proper industrial packaging, and expedited shipping
                for our valued customers.
              </p>
            </section>

            {/* Specifications */}
            <section className="mb-8">
              <SectionTitle>
                Specification of Duplex / Super Duplex Steel Pipes
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

            {/* Stock Availability with Images */}
            <section className="mb-8">
              <SectionTitle>
                Stock Availability of Duplex / Super Duplex Steel Pipes
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

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex / Super Duplex Steel Seamless Pipe Weight Chart
              </SectionTitle>
              <Table
                headers={[
                  "NPS (DN)",
                  "Weight LB/FT (KG/M)",
                  "SCH",
                  "OD (mm)",
                  "ID",
                  "WT (mm)",
                ]}
                rows={productData.weightChart.map((item) => [
                  item.nps,
                  item.weight,
                  item.sch,
                  item.od,
                  item.id,
                  item.wt,
                ])}
              />
            </section>

            {/* Price Range */}
            <section className="mb-8">
              <SectionTitle>
                Duplex / Super Duplex Steel Pipe Price Range
              </SectionTitle>
              <Table
                headers={[
                  "Diameter (in)",
                  "Designation (A)",
                  "OD (mm)",
                  "Weight Kg/Mtr",
                  "Wall Thk (mm)",
                  "Price (INR/MTR)",
                  "Price (INR/KG)",
                ]}
                rows={productData.priceRange.map((item) => [
                  item.diameterA,
                  item.diameterB,
                  item.od,
                  item.weight,
                  item.wall,
                  item.price,
                  item.pricekg,
                ])}
              />
              <p className="text-xs text-gray-500 mt-2">
                *Note: Prices vary depending on specific grade and quantity.
                Contact sales for precise project-based quotes.
              </p>
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized In Following Duplex / Super Duplex Steel Pipes
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
                Searches Related to Duplex / Super Duplex Steel Pipes
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

            {/* Get A Quote - UPDATED */}
            <div className="bg-[#173F52] rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Get A Quote
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Email us for a quote or contact us for more information.
              </p>
              <a
                href={getMailToUrl(contact)}
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
      {/* FLOATING WHATSAPP & CALL BUTTONS - UPDATED */}
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

export default DuplexSuperDuplexPipes;
