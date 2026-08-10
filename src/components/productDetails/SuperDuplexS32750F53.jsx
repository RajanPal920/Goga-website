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

const SuperDuplexS32750F53 = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Super Duplex Steel UNS S32750 F53 Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A790 / ASME SA790 Super Duplex UNS S32750 Pipes – High-Performance F53 Grade for Extreme Pitting & Stress Corrosion Resistance",

    technicalOverview: {
      title: "Super Duplex Steel UNS S32750 F53 Pipes: Technical Overview",
      description:
        "Super Duplex UNS S32750 pipes are engineered from a high-performance mixture of chromium and molybdenum, designed specifically for extreme resistance to pitting. Many heavy industries prioritize this grade because of its exceptional ability to oppose stress corrosion cracking and crevice corrosion, which are common failure points in standard piping. In addition to these protections, the alloy demonstrates high mechanical strength and superior resistance to corrosion from organic acids, inorganic acids, and high-chloride environments.",
    },

    keyFeatures: [
      "High-performance chromium and molybdenum alloy",
      "Extreme resistance to pitting and crevice corrosion",
      "Exceptional resistance to stress corrosion cracking",
      "Nearly double the strength of conventional austenitic steels",
      "Superior resistance to organic and inorganic acids",
      "Excellent performance in high-chloride environments",
      "High strength-to-weight ratio for efficient designs",
      "Mixed ferritic-austenitic microstructure for robust defense",
    ],

    applications: [
      "Offshore platforms and marine structures",
      "Seawater piping systems",
      "Desalination plants",
      "Heat exchangers",
      "Chemical processing industry",
      "High-pressure fluid handling",
      "Oil and gas equipment",
      "Coastal infrastructure",
    ],

    stockAvailability: {
      seamless: {
        title: "Seamless Pipes",
        image: seamlessImage,
        items: [
          "SDSS F53 S32750 Thin Wall Seamless",
          "S32750 F53 Super Duplex Seamless",
          "ASME SA792 S32750 Seamless Pipes",
          "Super Duplex 1.4410 Seamless Pipe",
          "ANSI B36.10M S32750 Seamless",
        ],
      },
      welded: {
        title: "Welded Pipes",
        image: weldedImage,
        items: [
          "ASME SA928 S32750 F53 Welded",
          "Super Duplex Steel F53 Thin Wall Welded",
          "S32750 F53 Super Duplex Welded Pipe",
          "SDSS UNS S32750 Welded Pipe",
          "ANSI B36.10M S32750 Welded",
        ],
      },
      erw: {
        title: "ERW Pipes",
        image: erwImage,
        items: [
          "Super Duplex Steel S32750 ERW Pipe",
          "SDSS Electric Resistance Welded",
          "S32750 F53 Super Duplex ERW Pipe",
          "Super Duplex 1.4410 ERW Pipe",
          "ANSI B36.10M S32750 ERW Pipe",
        ],
      },
      efw: {
        title: "EFW Pipes",
        image: efwImage,
        items: [
          "ASME SA928 SDSS S32750 EFW Pipes",
          "Super Duplex Stainless EFW Pipe",
          "Super Duplex 1.4410 EFW Pipe",
          "Super Duplex S32750 F53 EFW Pipe",
          "ANSI B36.10M S32750 EFW Pipe",
        ],
      },
      electropolish: {
        title: "Electropolish Pipes",
        image: electropolishImage,
        items: [
          "SDSS S32750 F53 Electropolish Pipe",
          "Super Duplex F53 S32750 Polished Pipe",
          "S32750 F53 SDSS Electropolish Pipe",
          "Super Duplex Steel 2507 Electropolish",
          "ASTM A928 S32750 Electropolish",
        ],
      },
      hollow: {
        title: "Hollow Pipes",
        image: hollowImage,
        items: [
          "SDSS S32750 Hollow Section Pipes",
          "S32750 SDSS Round Hollow Pipe",
          "SDSS 1.4435 Hollow Pipe",
          "Super Duplex 1.4410 Hollow Pipe",
          "Super Duplex S32750 F53 Hollow Pipe",
        ],
      },
    },

    equivalentGrades: [
      {
        standard: "Super Duplex S32750",
        werkstoff: "1.4410",
        uns: "S32750",
        saf: "2507",
      },
    ],

    chemicalComposition: [
      {
        grade: "S32750",
        c: "0.030 max",
        mn: "1.20 max",
        si: "0.80 max",
        p: "0.035 max",
        s: "0.020 max",
        cr: "24.0-26.0",
        mo: "3.0-5.0",
        ni: "6.0-8.0",
        n: "0.24-0.32",
        fe: "58.095 min",
      },
    ],

    mechanicalProperties: [
      {
        grade: "S32750",
        density: "7.8 g/cm3",
        densityLb: "0.281 lb/in3",
        meltingPoint: "1350 °C",
        meltingPointF: "2460 °F",
      },
    ],

    specifications: {
      standard: "ASTM A790, A928 / ASME SA790, SA928",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange:
        '6.00 mm OD up to 914.4 mm OD, sizes up to 24" NB available Ex-stock',
      manufacturingShapes: "Hydraulic, Round, Rectangle, Square, Hex, Honed",
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      deliveryCondition:
        "Annealed, Pickled, Polished, Bright Annealed, Cold Drawn",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, NDT, Ultrasonic Testing",
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
        sch: "20 / XS",
        od: "32.00 (813)",
        id: "-",
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
        sch: "20 / XS",
        od: "34.00 (864)",
        id: "-",
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
        sch: "20 / XS",
        od: "36.00 (914)",
        id: "-",
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

    supplyRange: [
      {
        product: "Super Duplex Steel S32750 Seamless Round Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Super Duplex Steel S32750 Seamless Square Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "12.7 * 12.7 to 300 * 300",
      },
      {
        product: "Super Duplex Steel S32750 Seamless Rectangular Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "Super Duplex Steel S32750 Seamless Colour Coated Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Super Duplex Steel S32750 Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product:
          "Super Duplex Steel S32750 Seamless Electropolished Pipes/Tubes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Super Duplex Steel S32750 Seamless Slot Round Pipe/Tube",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
    ],

    priceRange: [
      {
        diameterA: "1/8",
        diameterB: "6",
        od: "10.03",
        weight: "0.027",
        wall: "1.28",
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
        od: "60.0",
        weight: "3.99",
        wall: "2.77",
        price: "797.75 – 810",
        pricekg: "205 – 300",
      },
      {
        diameterA: "2 1/2",
        diameterB: "65",
        od: "73.0",
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
        wall: "3.4",
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
      "Super Duplex Steel 2507 Oval Pipes",
      "Super Duplex Stainless S32750 Hydraulic Pipes",
      "Super Duplex Steel S32750 F53 Welded Exporter",
      "S32750 F53 Super Duplex ERW Pipe Stockholder",
      "SDSS S32750 Welded Super Duplex Steel Pipe",
      "Super Duplex Steel F53 Large Diameter Seamless",
      "Super Duplex Steel S32750 Pipes",
      "SAF 2507 Pipe",
      "S32750 Super Duplex Stainless Steel Pipe",
      "Super Duplex Steel S32750 Mirror Polish",
      "SDSS S32750 Pipes Supplier in Mumbai",
      "SDSS S32750 Pipes Manufacturer in India",
      "Super Duplex Steel 1.4410 Pipe Cut To Size",
      "Super Duplex Steel S32750 Customized Pipes",
      "S32750 F53 Super Duplex Welded Pipe",
      "S32750 F53 Super Duplex Schedule 80 Pipe",
      "ASTM A790 Super Duplex S32750 Square Pipes",
      "SAF 2507 Pipe Supplier",
      "Super Duplex Steel UNS S32750 F53 Pipes",
      "Type F53 S32750 Super Duplex Hollow Pipes",
      "Super Duplex Steel S32750 F53 Square Pipes",
      "Super Duplex Steel S32750 Pipes Stockist",
      "ASME SA790 Super Duplex S32750 Cold Drawn",
      "ASTM SA928 S32750 Super Duplex Pipes",
      "SDSS 1.4410 Pipe Exporter",
      "S32750 Welded Super Duplex Steel Pipe",
      "SDSS F53 S32750 Hexagonal Pipes Supplier",
      "Suppliers of F53 S32750 Super Duplex ERW",
      "Super Duplex S32750 F53 Polished Pipe",
      "S32750 F53 Super Duplex Industrial Pipes",
      "S32750 F53 SDSS Custom Pipe",
      "SDSS S32750 F53 Thin Wall Pipe Stockists",
      "Super Duplex Steel UNS S32750 Decorative",
      "A790 SDSS S32750 F53 Seamless Pipes",
    ],

    relatedSearches: [
      "SDSS S32750 F53 Pipe Price List",
      "Super Duplex Steel S32750 Pipe Weight Chart",
      "Super Duplex Steel 32750 Pipe Weight Calculator",
      "Super Duplex 2507 Pipes Manufacturer In Mumbai",
      "Super Duplex Steel 32750 Pipe Manufacturers In India",
      "Super Duplex Stainless Steel F53 Pipe Pressure Rating",
      "S32750 Super Duplex Steel Threaded Pipe",
      "Super Duplex Steel S32750 F53 Pipe Roughness",
      "SDSS F53 S32750 Pipe Weight Per Meter",
      "S32750 Super Duplex Pipe Price List",
      "Super Duplex Steel F53 Pipe Price List",
      "SDSS S32750 Pipe Price List",
      "SAF 2507 Seamless Pipes Supplier In India",
      "Super Duplex Steel UNS S32750 F53 EFW Pipe Supplier",
      "SDSS S32750 F53 ERW Pipe Supplier",
      "SDSS 1.4410 Square Pipe Suppliers In Gujarat",
      "Super Duplex Steel S32750 F53 Seamless Pipe Supplier",
      "Cost Of F53 S32750 Super Duplex Steel Pipe",
      "ASTM A928 S32750 Pipe",
      "S32750 Super Duplex Steel Pipe Specifications Pdf",
      "SDSS S32750 F53 Seamless Pipe Exporter",
      "SDSS S32750 F53 Pipe Price Per Meter",
      "Super Duplex Steel F53 S32750 Pipe Price List In India",
      "Super Duplex F53 S32750 Welded Pipe Exporter",
      "SAF 2507 Pipe Price List Pdf",
      "View Schedule Chart And Updated Price List Of SDSS S32750 F53 Rectangular Pipe",
      "Super Duplex Steel S32750 Pipe Price In India",
      "Super Duplex Stainless Steel F53 S32750 Welded Pipe Supplier",
      "Super Duplex F53 S32750 Pipe Catalogue",
      "Super Duplex Stainless Steel 2507 Pipe Price Per Kg In India",
      "Super Duplex Steel F53 S32750 EFW Pipe Supplier",
      "Super Duplex Steel F53 S32750 Pipes",
      "3 Inch F53 S32750 Super Duplex Steel Pipe Manufacturers",
      "Super Duplex Steel S32750 Seamless Pipes Exporter",
      "Super Duplex Steel F53 S32750 ERW Pipe Supplier",
      "S32750 F53 Super Duplex Steel Pipe Sizes",
      "ASTM A790 S32750 Seamless Pipe",
      "Super Duplex F53 S32750 Pipe Weight Chart",
      "ASME Sa790 F53 S32750 Super Duplex Steel Pipe",
      "S32750 Super Duplex Steel Pipe Specifications",
      "Super Duplex Steel F53 S32750 Pipe Dimensions",
      "S32750 Super Duplex Steel Pipe Dimensions",
      "Super Duplex Pipe S32750 F53 Price",
      "Buy SDSS UNS S32750 F53 Pipe Welded Schedule 40",
      "Super Duplex Steel s32750 Pipe Price 20 Feet",
      "Super Duplex Steel UNS S32750 Pipe Per Kg",
      "SDSS F53 Pipe Chemical Composition",
      "Super Duplex Steel S32750 Mirror Polish Pipe Exporter",
      "SDSS S32750 Pipe Supplier In Mumbai",
      "16 Gauge S32750 Super Duplex Steel Pipe",
      "ASTM A790 UNS S32750 Pipe",
      "Top 100 Super Duplex Steel Pipe Dealers In Pune",
      "Super Duplex Steel F53 Seamless Pipe Stockist",
      "Super Duplex Steel 32750 Pipe Supplier In India",
      "SDSS Pipe S32750 Price List",
      "Super Duplex Steel S32750 F53 Pipe Price",
      "S32750 Super Duplex Steel Pipe In Pune",
      "Super Duplex Stainless Steel S32750 F53 Pipe Schedule",
      "ASTM A790 S32750 Seamless Pipe",
      "Price Of Super Duplex Steel Pipe S32750 F53",
      "SDSS S32750 F53 Super Duplex Steel Pipe Price Per Kg",
      "Super Duplex Steel F53 S32750 Pipe Price Per Kg In India",
      "F53 S32750 Super Duplex Steel Pipe Price List",
      "SDSS S32750 Pipe Weight Chart",
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
                  className="w-full  h-60 object-cover rounded-lg shadow-lg"
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

            {/* Key Properties */}
            <section className="mb-8">
              <SectionTitle>
                Key Properties and Technical Advantages
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                Super Duplex UNS S32750 pipes possess a unique set of qualities,
                most notably an excellent resistance to chloride-ion stress
                corrosion cracking. While conventional stainless steel alloys
                often struggle to maintain integrity when exposed to stress and
                chloride ions simultaneously, the mixed ferritic-austenitic
                microstructure of this alloy provides a robust defense. The high
                chromium content further enhances its ability to fight localized
                corrosion issues like pitting and crevice erosion. This makes
                the material highly reliable for long-term use in projects where
                general corrosion would otherwise lead to frequent maintenance
                and replacement.
              </p>
            </section>

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>Industrial Applications and Use Cases</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                Due to their rugged nature and resistance to harsh chemical
                reactions, Super Duplex UNS S32750 pipes are essential in a
                variety of specialized sectors. They are widely utilized in
                offshore platforms, where they serve as critical mechanical and
                structural components. Their durability makes them the preferred
                choice for seawater piping and desalination plants, where the
                salt concentration is naturally high. Additionally, these pipes
                are used extensively in heat exchangers and the chemical
                processing industry to handle aggressive fluids and
                high-pressure conditions.
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
              <SectionTitle>
                Specification of Super Duplex Steel UNS S32750 Pipes
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
                Stock Availability of Super Duplex Steel UNS S32750 Pipes
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

            {/* Equivalent Grades */}
            <section className="mb-8">
              <SectionTitle>
                Equivalent Grades ASTM A790/A928 Super Duplex UNS S32750 Pipes
              </SectionTitle>
              <Table
                headers={["Standard", "Werkstoff Nr.", "UNS", "SAF"]}
                rows={productData.equivalentGrades.map((item) => [
                  item.standard,
                  item.werkstoff,
                  item.uns,
                  item.saf,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>
                Chemical Composition of Super Duplex Steel UNS S32750 Pipes
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "C",
                  "Mn",
                  "Si",
                  "P",
                  "S",
                  "Cr",
                  "Mo",
                  "Ni",
                  "N",
                  "Fe",
                ]}
                rows={productData.chemicalComposition.map((item) => [
                  item.grade,
                  item.c,
                  item.mn,
                  item.si,
                  item.p,
                  item.s,
                  item.cr,
                  item.mo,
                  item.ni,
                  item.n,
                  item.fe,
                ])}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>
                Mechanical Properties of SDSS UNS S32750 F53 Piping
              </SectionTitle>
              <Table
                headers={[
                  "Grades",
                  "Density (g/cm³)",
                  "Density (lb/in³)",
                  "Melting Point (°C)",
                  "Melting Point (°F)",
                ]}
                rows={productData.mechanicalProperties.map((item) => [
                  item.grade,
                  item.density,
                  item.densityLb,
                  item.meltingPoint,
                  item.meltingPointF,
                ])}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Super Duplex Steel UNS S32750 Seamless Pipe Weight Chart
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

            {/* Supply Range */}
            <section className="mb-8">
              <SectionTitle>
                Super Duplex Steel UNS S32750 Pipe Supply Range
              </SectionTitle>
              <Table
                headers={[
                  "Product Description",
                  "Wall Thickness (mm)",
                  "Outside Diameter (mm)",
                ]}
                rows={productData.supplyRange.map((item) => [
                  item.product,
                  item.wallThk,
                  item.od,
                ])}
              />
            </section>

            {/* Price Range */}
            <section className="mb-8">
              <SectionTitle>
                Super Duplex Steel UNS S32750 Pipe Price Range
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
                Specialized In Following Super Duplex Steel UNS S32750 F53 Pipes
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
                Searches Related to Super Duplex Steel UNS S32750 Pipes
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

export default SuperDuplexS32750F53;
