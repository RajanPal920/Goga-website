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

const StainlessSteelPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Stainless Steel Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A312 / ASME SA312 Stainless Steel Pipes – Seamless, Welded, ERW & EFW Solutions for Critical Industrial Applications",

    technicalOverview: {
      title: "Stainless Steel Pipes Supplier in Mumbai – Raymond Ispat India",
      description:
        "Raymond Ispat India is a leading Stainless Steel Pipe Supplier in Mumbai, India, offering seamless, ERW, square, round, and hollow SS pipes at competitive prices. Stainless steel forms a protective chromium oxide layer, ensuring excellent corrosion resistance, durability, and long service life. We supply ASTM Stainless Steel Pipes in various grades, sizes, thicknesses, and specifications, suitable for industries like Oil & Gas, Petrochemical, Chemical, Power, Dairy, Aerospace, and Automobile.",
    },

    keyFeatures: [
      "High strength & corrosion resistance",
      "Resistance to pitting & chloride environments",
      "Low maintenance & superior finish",
      "Precision manufacturing as per international standards",
      "Strict quality testing and inspection",
      "Ready stock availability",
      "Timely delivery with safe packaging",
      "Available in seamless, welded, ERW, and EFW forms",
    ],

    applications: [
      "Oil and gas industry",
      "Petrochemical processing",
      "Chemical processing plants",
      "Power generation",
      "Dairy and food processing",
      "Aerospace",
      "Automobile industry",
      "Pharmaceutical equipment",
    ],

    stockAvailability: {
      seamless: {
        title: "Stainless Steel Seamless Pipes",
        image: seamlessImage,
        items: [
          "SS Seamless Piping",
          "Stainless Steel Thin Wall Seamless Pipes",
          "ANSI B36.10M Seamless Pipe",
          "ASME SA312 Stainless Steel Seamless Pipes",
          "ASTM A312 Stainless Steel Seamless Pipe",
        ],
      },
      welded: {
        title: "Stainless Steel Welded Pipes",
        image: weldedImage,
        items: [
          "ASTM A312 Stainless Steel Welded Pipe",
          "ANSI B36.10M Welded Pipe",
          "ASME SA312 Stainless Steel Welded Pipes",
          "SS Thin Wall Welded Pipes",
          "SS Welded Pipe",
        ],
      },
      erw: {
        title: "Stainless Steel ERW Pipes",
        image: erwImage,
        items: [
          "ANSI B36.10M ERW Pipe",
          "SS Electric Resistance Welded Pipe",
          "Stainless Steel ERW Pipe",
          "ASTM A312 Stainless Steel ERW Pipe",
        ],
      },
      efw: {
        title: "Stainless Steel EFW Pipes",
        image: efwImage,
        items: [
          "SS EFW Pipes",
          "Stainless Steel EFW Pipe",
          "ASTM A312 Stainless Steel EFW Pipe",
          "SS Electric Fusion Welding Pipe",
          "ANSI B36.10M EFW Pipe",
          "ASME SA312 Stainless Steel EFW Pipes",
        ],
      },
      electropolish: {
        title: "Stainless Steel Electropolish Pipes",
        image: electropolishImage,
        items: [
          "Stainless Steel Electropolish Pipe",
          "SS Electropolish Pipes",
          "SS Thin Wall Electropolish Pipes",
          "ASTM A312 Stainless Steel Electropolish Pipe",
        ],
      },
      hollow: {
        title: "Stainless Steel Hollow Pipes",
        image: hollowImage,
        items: [
          "Stainless Steel Square Hollow Pipe",
          "Stainless Steel Round Hollow Pipe",
          "Stainless Steel Hollow Pipe",
          "ANSI B36.10M Hollow Pipe",
          "SS Hollow Section Pipes",
          "ASME SA312 Stainless Steel Hollow Pipes",
        ],
      },
    },

    specifications: {
      standard: "ASTM A312, A358 / ASME SA312, SA358",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange:
        '6.00 mm OD up to 914.4 mm OD, Sizes up to 24" NB available Ex-stock',
      scheduleRange:
        "SCH 5, SCH10, SCH 40, SCH 80, SCH 80S, SCH 160, SCH XXS, SCH XS",
      manufacturingShapes: "Hydraulic, Round, Rectangle, Square, Hex, Honed",
      pipeEnds: "Plain, Beveled, Treaded One End, TBE",
      outsideFinish: "2B, No.4, No.1, No.8 Mirror Finish",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      deliveryCondition: "Annealed, Polished, Bright Annealed",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, Destructive, Non Destructive, Ultrasonic Testing",
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
        sch: "-",
        od: "32.00 (813)",
        id: "STD",
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
        sch: "-",
        od: "34.00 (864)",
        id: "STD",
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
        sch: "-",
        od: "36.00 (914)",
        id: "STD",
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
        sch: "-",
        od: "38.00 (965)",
        id: "STD",
        wt: "0.0375 (9.053)",
      },
      {
        nps: "38 (950)",
        weight: "200.044 (298.026)",
        sch: "-",
        od: "38.00 (965)",
        id: "XS",
        wt: "0.05 (12.07)",
      },
    ],

    priceRange: [
      {
        diameterA: "1/8",
        diameterB: "6",
        od: "10.03",
        weight: "0.027",
        wall: "1.2",
        price: "80.5 – 110",
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
    ],

    jindalPriceList: [
      {
        bore: "15",
        inches: "1/2",
        od: "21.3",
        sch5s: "1.65",
        sch5sPrice: "214.00",
        sch10s: "2.11",
        sch10sPrice: "214.00",
        sch40s: "2.77",
        sch40sPrice: "203.30",
      },
      {
        bore: "20",
        inches: "3/4",
        od: "26.7",
        sch5s: "1.65",
        sch5sPrice: "203.30",
        sch10s: "2.11",
        sch10sPrice: "203.30",
        sch40s: "2.87",
        sch40sPrice: "192.60",
      },
      {
        bore: "25",
        inches: "1",
        od: "33.4",
        sch5s: "1.65",
        sch5sPrice: "203.30",
        sch10s: "2.77",
        sch10sPrice: "197.95",
        sch40s: "3.38",
        sch40sPrice: "197.95",
      },
      {
        bore: "32",
        inches: "1 1/4",
        od: "42.2",
        sch5s: "1.65",
        sch5sPrice: "203.30",
        sch10s: "2.77",
        sch10sPrice: "197.95",
        sch40s: "3.56",
        sch40sPrice: "197.95",
      },
      {
        bore: "40",
        inches: "1 1/2",
        od: "48.3",
        sch5s: "1.65",
        sch5sPrice: "203.30",
        sch10s: "2.77",
        sch10sPrice: "197.95",
        sch40s: "3.68",
        sch40sPrice: "197.95",
      },
      {
        bore: "50",
        inches: "2",
        od: "60.3",
        sch5s: "1.65",
        sch5sPrice: "203.30",
        sch10s: "2.77",
        sch10sPrice: "197.95",
        sch40s: "3.91",
        sch40sPrice: "197.95",
      },
      {
        bore: "65",
        inches: "2 1/2",
        od: "73.0",
        sch5s: "2.11",
        sch5sPrice: "203.30",
        sch10s: "3.05",
        sch10sPrice: "197.95",
        sch40s: "5.16",
        sch40sPrice: "197.95",
      },
      {
        bore: "80",
        inches: "3",
        od: "88.9",
        sch5s: "2.11",
        sch5sPrice: "203.30",
        sch10s: "3.05",
        sch10sPrice: "197.95",
        sch40s: "5.49",
        sch40sPrice: "197.95",
      },
      {
        bore: "100",
        inches: "4",
        od: "114.3",
        sch5s: "2.11",
        sch5sPrice: "203.30",
        sch10s: "3.05",
        sch10sPrice: "197.95",
        sch40s: "6.02",
        sch40sPrice: "197.95",
      },
      {
        bore: "600",
        inches: "24",
        od: "609.6",
        sch5s: "5.54",
        sch5sPrice: "235.40",
        sch10s: "6.35",
        sch10sPrice: "235.40",
        sch40s: "17.48",
        sch40sPrice: "214.00",
      },
    ],

    specializedProducts: [
      "Austenitic Stainless Steel Pipe",
      "Stainless Steel Mirror Polish Seamless Pipes",
      "Stainless Steel Welded Pipes Exporter",
      "Stainless Steel ERW Pipe Stockholder",
      "SS Square Pipes Dealer",
      "Stainless Steel Pipes Stockist",
      "ASME SA312 Stainless Steel Cold Drawn Pipes",
      "ASTM A312 Stainless Steel Pipes at Best Price",
      "SS Hexagonal Pipes Supplier",
      "Suppliers of Stainless Steel ERW Pipes",
      "SS Pipes Supplier in Mumbai",
      "SS Pipes Manufacturer in India",
      "Stainless Steel Pipe Exporter",
      "Welded Stainless Steel Pipe",
      "Stainless Steel Oval Pipes",
      "Stainless Steel Hydraulic Pipes Dealer",
      "Stainless Steel Pipe Cut To Size",
      "Stainless Steel Customized Pipes",
      "Stainless Steel Pipes Supplier",
      "Type Stainless Hollow Pipes",
      "ASTM A312 Stainless Steel Square Pipes",
      "Stainless Steel Pipe Supplier",
      "Stainless Steel Decorative Pipes",
      "SS Schedule 80 Pipe",
      "Stainless Steel Polished Pipe",
      "SS Industrial Pipes",
      "Stainless Steel Custom Pipe",
      "SS Thin Wall Pipe Stockists",
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
              <SectionTitle>Applications</SectionTitle>
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
              <SectionTitle>
                Specification of Stainless Steel Pipes
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
                Stock Availability of Stainless Steel Pipes
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
                Stainless Steel Seamless Pipe Weight Chart
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
              <SectionTitle>Stainless Steel Pipe Price Range</SectionTitle>
              <Table
                headers={[
                  "Designation (B) INCH",
                  "Designation (A) MM",
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

            {/* Jindal Price List */}
            <section className="mb-8">
              <SectionTitle>
                Jindal Stainless Steel Pipe Price List
              </SectionTitle>
              <Table
                headers={[
                  "Nominal Bore",
                  "INCH",
                  "OD (mm)",
                  "Sch-5S (mm)",
                  "Rs/Kg",
                  "Sch-10S (mm)",
                  "Rs/Kg",
                  "Sch-40S (mm)",
                  "Rs/Kg",
                ]}
                rows={productData.jindalPriceList.map((item) => [
                  item.bore,
                  item.inches,
                  item.od,
                  item.sch5s,
                  item.sch5sPrice,
                  item.sch10s,
                  item.sch10sPrice,
                  item.sch40s,
                  item.sch40sPrice,
                ])}
              />
              <p className="text-xs text-gray-500 mt-2">
                *Note: Prices are indicative. For latest Jindal Stainless Steel
                Pipe Price List, contact our sales team.
              </p>
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Stainless Steel Pipes
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

export default StainlessSteelPipes;
