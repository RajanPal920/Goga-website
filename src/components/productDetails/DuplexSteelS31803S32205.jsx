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

const DuplexSteelS31803S32205 = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Duplex Steel UNS S31803 F51 / S32205 F60 Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A790 / ASME SA790 Duplex Steel Pipes – High-Strength Dual-Phase Alloys for Superior Corrosion Resistance in Chloride Environments",

    technicalOverview: {
      title:
        "Duplex Steel UNS S31803 F51 / S32205 F60 Pipes: Technical Overview",
      description:
        "UNS S31803 and UNS S32205 are specialized duplex stainless steel grades characterized by a dual-phase ferritic-austenitic microstructure. In their annealed state, both alloys consist of more than 50% ferrite. This unique duplex structure is engineered to provide the high mechanical strength associated with ferritic steel grades while maintaining the superior corrosion resistance typically found in austenitic grades. These pipes are specifically designed for deployment in highly corrosive environments where standard stainless steels are prone to failure.",
    },

    keyFeatures: [
      "Dual-phase ferritic-austenitic microstructure",
      "High levels of chromium, molybdenum, and nitrogen",
      "Approximately three times the yield strength of standard stainless steel",
      "Nearly double the tensile strength of standard grades",
      "Excellent resistance to pitting and crevice corrosion",
      "Superior resistance to chloride stress corrosion cracking",
      "High strength-to-weight ratio for efficient designs",
      "Excellent oxidation resistance at elevated temperatures",
    ],

    applications: [
      "Chemical processing plants",
      "Oil and gas exploration",
      "Transport and storage of hazardous materials",
      "Marine engineering and offshore platforms",
      "Pulp and paper industry (digesters, liquor tanks)",
      "High-chloride environments",
      "Desalination plants",
      "Heat exchangers and pressure vessels",
    ],

    stockAvailability: {
      seamless: {
        title: "Seamless Pipes",
        image: seamlessImage,
        items: [
          "Duplex Steel S31803 F51 Seamless Pipe",
          "UNS S32205 Seamless Pipe",
          "S32205 F60 Duplex Steel Seamless",
          "Duplex Stainless Steel S32205 Seamless",
          "DSS F51 S31803 Thin Wall Seamless",
        ],
      },
      welded: {
        title: "Welded Pipes",
        image: weldedImage,
        items: [
          "ASME SA928 S31803 F51 Welded Pipes",
          "UNS S32205 Welded Pipe",
          "S32205 F60 Duplex Steel Welded Pipe",
          "ANSI B36.10M S32205 Welded Pipe",
          "Duplex Steel F60 S32205 Thin Wall Welded",
        ],
      },
      erw: {
        title: "ERW Pipes",
        image: erwImage,
        items: [
          "UNS S32205 ERW Pipe",
          "S32205 F60 Duplex Steel ERW Pipe",
          "Duplex Steel S31803 Thin Wall ERW",
          "Duplex Stainless Steel S32205 ERW",
          "ANSI B36.10M S32205 ERW Pipe",
        ],
      },
      efw: {
        title: "EFW Pipes",
        image: efwImage,
        items: [
          "ASME SA928 S31803 F51 EFW Pipe",
          "Duplex Stainless S32205 Electric Fusion Welding",
          "Duplex 1.4462 EFW Pipe",
          "ASME SA928 DSS S31803 EFW Pipes",
          "Duplex S32205 F60 EFW Pipe",
        ],
      },
      electropolish: {
        title: "Electropolish Pipes",
        image: electropolishImage,
        items: [
          "DSS F51 S31803 Thin Wall Electropolish",
          "ASTM A928 S32205 Electropolish Pipe",
          "DSS 1.4462 Electropolish Pipe",
          "Duplex Stainless Steel S32205 Polished",
          "Duplex Steel 2205 Electropolish Pipe",
        ],
      },
      hollow: {
        title: "Hollow Pipes",
        image: hollowImage,
        items: [
          "Duplex 1.4462 Hollow Pipe",
          "Duplex Stainless Steel S32205 Square Hollow",
          "UNS S32205 Hollow Pipe",
          "Duplex Steel S31803 Hollow Pipe",
          "DSS S32205 Hollow Section Pipes",
        ],
      },
    },

    equivalentGrades: [
      {
        standard: "Duplex 2205",
        uns: "S31803",
        werkstoff: "1.4462",
      },
    ],

    chemicalComposition: [
      {
        grade: "S31803",
        c: "0.030 max",
        mn: "2.00 max",
        si: "1.00 max",
        p: "0.030 max",
        s: "0.020 max",
        cr: "22.0 – 23.0",
        mo: "3.0 – 3.5",
        ni: "4.50 – 6.50",
        n: "0.14 – 0.20",
        fe: "63.72 min",
      },
    ],

    mechanicalProperties: [
      {
        grade: "S31803",
        density: "7.8 g/cm3",
        meltingPoint: "1350 °C (2460 °F)",
        tensileStrength: "Psi – 116000 , MPa – 800",
        yieldStrength: "Psi – 80000 , MPa – 550",
        elongation: "15 %",
      },
    ],

    specifications: {
      standard: "ASTM A790, A928 / ASME SA790, SA928",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      odRange: '6.00 mm to 914.4 mm OD, Sizes up to 24" NB available Ex-stock',
      scheduleRange: "SCH 5, SCH10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      outsideFinish:
        "2B, No.4, No.1, No.8 Mirror Finish, Finish as per Requirements",
      valueAddedServices:
        "Cutting, Beveling, Threading, Destructive & Non Destructive Testing",
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
        product: "Duplex Steel S31803 Seamless Round Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Duplex Steel S32205 Seamless Square Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "12.7 * 12.7 to 300 * 300",
      },
      {
        product: "Duplex Steel S31803 Seamless Rectangular Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "Duplex Steel S32205 Seamless Colour Coated Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Duplex Steel S31803 Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product: "Duplex Steel S32205 Seamless Electropolished Pipes/Tubes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Duplex Steel S31803 Seamless Slot Round Pipe/Tube",
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
      "S31803 F51 DSS Custom Pipe",
      "DSS S32205 F60 Thin Wall Pipe Stockists",
      "Duplex Steel 2205 Oval Pipes",
      "Duplex stainless Steel S32205 Hydraulic Pipes",
      "Duplex Steel S31803 F51 Welded Pipes Exporter",
      "S32205 F60 Duplex Steel ERW Pipe Stockholder",
      "DSS F51 S31803 Hexagonal Pipes Supplier",
      "Suppliers of F60 S32205 Duplex Steel ERW Pipes",
      "Duplex Steel S32205 Pipes",
      "Duplex Steel S31803 Pipe",
      "Duplex Steel 1.4462 Pipe Cut To Size",
      "Duplex Steel S32205 Customized Pipes",
      "Duplex Steel S31803 F51 Square Pipes Dealer",
      "Duplex Steel S32205 F60 Pipes Stockist",
      "S31803 F51 Duplex Steel Welded Pipe",
      "S32205 F60 Duplex Steel Schedule 80 Pipe",
      "ASTM A790 Duplex Steel S31803 Square Pipes",
      "SAF 2205 Pipe Supplier",
      "Duplex Stainless S31803 Pipes Supplier Mumbai",
      "DSS S32205 Pipes Manufacturer in India",
      "Duplex Steel UNS S31803 F51 Pipes Supplier",
      "Type F60 S32205 Duplex Steel Hollow Pipes",
      "ASME SA790 Duplex Steel S31803 Cold Drawn",
      "ASTM SA928 S32205 Pipes at Best Price",
      "Duplex Steel S32205 Mirror Polish Seamless",
      "DSS 1.4462 Pipe Exporter",
      "S32205 Welded Duplex Steel Pipe",
      "Duplex S31803 F51 Polished Pipe",
      "S32205 F60 Duplex Industrial Pipes",
      "Duplex Steel F51 Welded Duplex Pipe",
      "Duplex Steel F60 Large Diameter Seamless",
      "Duplex Steel UNS S31803 F51 Decorative",
      "A790 DSS S32205 F60 Seamless Pipes",
      "Cupro Nickel 90/10 Custom Pipe",
    ],

    relatedSearches: [
      "Duplex Steel F51 Pipe Price List",
      "ASTM A928 S31803 Pipe",
      "ASTM A790 S32205 Seamless Pipe",
      "Duplex Steel F60 Seamless Pipe Stockist",
      "Duplex Steel S32205 Pipe Price In India",
      "Duplex Steel UNS S31803 Pipe Per Kg",
      "Duplex Steel F60 S32205 Pipe Price List In India",
      "DSS F51 S31803 Pipe Weight Per Meter",
      "Duplex Stainless Steel S32205 F60 Pipe Schedule",
      "Duplex Steel 32205 Pipe Supplier In India",
      "16 Gauge S31803 Duplex Steel Pipe",
      "S32205 Duplex Steel Pipe Dimensions",
      "Duplex F51 S31803 Pipe Weight Chart",
      "Duplex Steel Pipe Grade S32205 Price List",
      "S31803 Duplex Steel Pipe Price List",
      "32205 Duplex Steel Pipe Specifications",
      "Duplex Steel 31803 Pipe Manufacturers In India",
      "Duplex Stainless Steel 2205 Pipe Price Per Kg In India",
      "3 Inch F60 S32205 Duplex Steel Pipe Manufacturers",
      "DSS S31803 F51 Pipe Price List",
      "Duplex Steel 31803 Pipe Weight Calculator",
      "Duplex Steel S32205 Mirror Polish Pipe Exporter",
      "Duplex Steel S32205 F60 Pipe Price",
      "S31803 Duplex Steel Pipe In Pune",
      "DSS S31803 F51 Duplex Steel Pipe Price Per Kg",
      "Duplex 2205 Pipes Manufacturer In Mumbai",
      "DSS 1.4462 Square Pipe Suppliers In Gujarat",
      "Duplex F51 S31803 Welded Pipe Exporter",
      "Duplex Steel F60 S32205 Pipe Dimensions",
      "Top 100 Duplex Steel Pipe Dealers In Pune",
      "Buy DSS UNS S32205 F60 Pipe Welded Schedule 40",
      "Duplex F60 S32205 Pipe Catalogue",
      "SAF 2205 Pipe Price List Pdf",
      "F60 S32205 Duplex Steel Pipe Price List",
      "Price Of Duplex Steel Pipe S31803 F51",
      "DSS F60 Pipe Chemical Composition",
      "Duplex Steel S32205 Pipe Weight Chart",
      "DSS S32205 F60 ERW Pipe Supplier",
      "Duplex Steel F60 S32205 Pipe Price Per Kg In India",
      "ASTM A790 UNS S32205 Pipe",
      "DSS S31803 F51 Pipe Price Per Meter",
      "Duplex Stainless Steel F51 S31803 Welded Pipe Supplier",
      "ASME Sa790 F51 S31803 Duplex Steel Pipe",
      "Duplex Steel S31803 Seamless Pipes Exporter",
      "Duplex Steel Pipe Price 20 Feet",
      "Cost Of F60 S32205 Duplex Steel Pipe",
      "Steel Pipe S32205 F60 Price",
      "Duplex Steel S32205 F60 Pipe Roughness",
      "DSS S32205 F60 Seamless Pipe Exporter",
      "DSS S32205 Pipe Supplier In Mumbai",
      "Duplex Steel F60 S32205 EFW Pipe Supplier",
      "Duplex Steel F60 S32205 Pipes",
      "DSS S32205 Pipe Price List",
      "DSS S31803 Pipe Weight Chart",
      "Duplex Steel F60 S32205 ERW Pipe Supplier",
      "S31803 Duplex Steel Threaded Pipe",
      "SAF 2205 Seamless Pipes Supplier In India",
      "Duplex Stainless Steel F51 Pipe Pressure Rating",
      "Duplex Steel UNS S31803 F51 EFW Pipe Supplier",
      "S32205 F60 Duplex Steel Pipe Sizes",
      "Duplex Steel S32205 F60 Seamless Pipe Supplier",
      "View Schedule Chart And Updated Price List Of DSS S32205 F60 Rectangular Pipe",
      "S32205 Duplex Steel Pipe Specifications Pdf",
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

            {/* Physical and Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>Physical and Mechanical Properties</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                UNS S31803 and UNS S32205 pipes exhibit notable elasticity and
                thermal conductivity. While their high hardness can make
                machinability somewhat challenging during processing, this same
                robustness provides significant advantages in the field. These
                pipes are incredibly strong, offering approximately three times
                the yield strength and nearly double the tensile strength of
                standard stainless steels. This high strength-to-weight ratio
                makes them more flexible for complex engineering projects.
                Furthermore, they maintain reliable thermal and electrical
                conductivity across a range of operating temperatures.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                  <span className="text-[#D92B20] text-lg">✓</span>
                  <span className="text-gray-700 text-sm">
                    Approximately 3x the yield strength of standard stainless
                    steel
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                  <span className="text-[#D92B20] text-lg">✓</span>
                  <span className="text-gray-700 text-sm">
                    Nearly double the tensile strength of standard grades
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                  <span className="text-[#D92B20] text-lg">✓</span>
                  <span className="text-gray-700 text-sm">
                    Excellent elasticity and thermal conductivity
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
                  <span className="text-[#D92B20] text-lg">✓</span>
                  <span className="text-gray-700 text-sm">
                    Reliable performance across operating temperatures
                  </span>
                </div>
              </div>
            </section>

            {/* Key Advantages */}
            <section className="mb-8">
              <SectionTitle>
                Key Advantages and Corrosion Resistance
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The primary advantage of using UNS S31803 and UNS S32205 pipes
                lies in their superior corrosion resistance in diverse
                environments. The high chromium, molybdenum, and nitrogen
                content ensures stability even when exposed to oxidizing and
                acidic solutions. These alloys are specifically resistant to
                chloride stress corrosion cracking at temperatures reaching up
                to approximately 302°F (150°C). The presence of the ferrite
                phase ensures optimal performance in acidic environments, while
                the overall composition provides excellent oxidation resistance
                even at elevated temperatures.
              </p>
            </section>

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>Industrial Applications and Use Cases</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                Due to their rugged nature and resistance to harsh chemicals,
                UNS S31803 and UNS S32205 pipes are widely used across several
                critical industries. They are essential in chemical processing
                plants, oil and gas exploration, and the transport and storage
                of hazardous materials. Their ability to withstand high-chloride
                environments makes them a preferred choice for marine
                engineering and offshore platforms. Additionally, they are
                extensively utilized in the pulp and paper industry for
                digesters, liquor tanks, and processing equipment where
                durability is non-negotiable.
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
                Specification of Duplex Steel UNS S31803 F51 / S32205 F60 Pipes
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
                Stock Availability of Duplex Steel S31803 / S32205 Pipes
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
                Equivalent Grades ASTM A790/A928 Duplex Steel UNS S31803 /
                S32205 Pipes
              </SectionTitle>
              <Table
                headers={["Standard", "UNS", "Werkstoff Nr."]}
                rows={productData.equivalentGrades.map((item) => [
                  item.standard,
                  item.uns,
                  item.werkstoff,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>
                Chemical Composition of Duplex Steel UNS S31803 / S32205 Pipes
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
                Mechanical Properties of Duplex Steel UNS S31803 F51 / S32205
                F60 Piping
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Density",
                  "Melting Point",
                  "Tensile Strength",
                  "Yield Strength",
                  "Elongation",
                ]}
                rows={productData.mechanicalProperties.map((item) => [
                  item.grade,
                  item.density,
                  item.meltingPoint,
                  item.tensileStrength,
                  item.yieldStrength,
                  item.elongation,
                ])}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Duplex Steel UNS S31803 / S32205 Seamless Pipe Weight Chart
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
                Duplex Steel UNS S31803 / S32205 Pipe Supply Range
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
                Duplex Steel UNS S31803 / S32205 Pipe Price Range
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
                Specialized In Following Duplex Steel UNS S31803 F51 / S32205
                F60 Pipes
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
                Searches Related to Duplex Steel UNS S31803 / S32205 Pipes
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

export default DuplexSteelS31803S32205;
