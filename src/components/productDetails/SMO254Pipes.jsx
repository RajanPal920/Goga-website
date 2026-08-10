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

const SMO254Pipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "SMO 254 Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A312 / ASME SA312 SMO 254 Pipes – 6% Molybdenum Super-Austenitic Stainless Steel for Maximum Corrosion Resistance",

    technicalOverview: {
      title: "SMO 254 Pipes: Technical Overview",
      description:
        "SMO 254, also known by the designation UNS S31254 and Werkstoff Number 1.4547, is a high-alloy austenitic stainless steel designed for maximum resistance to pitting and crevice corrosion. It is often referred to as a '6% Moly' grade due to its high molybdenum content. The chemical composition is a sophisticated balance of chromium (20%), nickel (18%), and molybdenum (6%), further enhanced with nitrogen and copper. The addition of nitrogen increases the yield strength and enhances the pitting resistance, while copper improves resistance to non-oxidizing acids like sulfuric and phosphoric acids.",
    },

    keyFeatures: [
      "6% Molybdenum content for superior corrosion resistance",
      "High Pitting Resistance Equivalent Number (PREN ≥ 42.5)",
      "Excellent resistance to seawater and chloride environments",
      "Virtually immune to chloride-induced stress corrosion cracking",
      "High yield strength and excellent ductility",
      "Stable austenitic structure at sub-zero temperatures",
      "Cost-effective alternative to high-nickel alloys",
      "Self-healing protective passive film",
    ],

    applications: [
      "Offshore oil and gas (seawater cooling systems)",
      "Desalination plants (brine handling)",
      "Pulp and paper (bleach plant equipment)",
      "Chemical processing (halides and organic acids)",
      "Flue Gas Desulfurization (FGD) systems",
      "Food and beverage processing",
      "Heat exchangers and piping systems",
      "Marine and coastal infrastructure",
    ],

    corrosionResistance: [
      "Exceptional resistance to pitting and crevice corrosion",
      "PREN ≥ 42.5 for superior localized corrosion resistance",
      "Virtually immune to chloride-induced stress corrosion cracking",
      "Excellent resistance to seawater and aggressive halide solutions",
      "Robust resistance to bleaching solutions and chemical media",
      "Stable passive film that reforms quickly if damaged",
      "Excellent resistance to non-oxidizing acids",
      "Superior performance in high-chloride environments",
    ],

    stockAvailability: {
      seamless: {
        title: "SMO 254 Seamless Pipes",
        image: seamlessImage,
        items: [
          "Alloy 254 Seamless Piping",
          "ASME SA312 SMO F44 Seamless",
          "Alloy F44 Thin Wall Seamless",
          "ASTM A312 254 Seamless Pipe",
          "UNS S31254 Seamless Pipe",
        ],
      },
      welded: {
        title: "SMO 254 Welded Pipes",
        image: weldedImage,
        items: [
          "SMO F44 Welded Pipe Stock",
          "6Mo Stainless Thin Wall Welded",
          "ASME SA312 SMO 254 Welded",
          "F44 SMO Welded Pipe",
          "6 Moly 254 Welded Pipe",
        ],
      },
      erw: {
        title: "SMO 254 ERW Pipes",
        image: erwImage,
        items: [
          "6 Moly Electric Resistance Welded",
          "SMO F44 SS ERW Pipe Stock",
          "ASTM A312 SMO 254 ERW Pipe",
          "SMO 1.4547 ERW Pipe",
          "ASME SA312 Alloy 254 ERW",
        ],
      },
      efw: {
        title: "SMO 254 EFW Pipes",
        image: efwImage,
        items: [
          "ASTM A312 SMO F44 EFW Pipe",
          "SMO 1.4547 EFW Pipe Stock",
          "Alloy 254 EFW Pipes",
          "SMO 254 Electric Fusion Welding",
          "UNS S31254 EFW Pipe",
        ],
      },
      electropolish: {
        title: "Electropolish Pipes",
        image: electropolishImage,
        items: [
          "UNS S31254 Electropolish Pipe",
          "SMO 1.4547 Electropolish Pipe",
          "6 Moly Polished Pipe Stock",
          "Alloy F44 Electropolish Pipes",
          "Alloy 254 Thin Wall Electropolish",
        ],
      },
      hollow: {
        title: "Hollow Pipes",
        image: hollowImage,
        items: [
          "ASME SA312 SMO 254 Hollow",
          "6Mo Stainless Steel Hollow Pipe",
          "6 Moly Hollow Pipe Stock",
          "SMO 254 Square Hollow Pipe",
          "UNS S31254 Hollow Pipe",
        ],
      },
    },

    equivalentGrades: [
      {
        standard: "254 SMO",
        werkstoff: "1.4547",
        uns: "S31254",
        sis: "2378",
        afnor: "Z1 CNDU 20.18.06Az",
        en: "X1CrNiMoCuN20-18-7",
      },
    ],

    chemicalComposition: [
      {
        grade: "SMO 254",
        ni: "17.5 – 18.5",
        cr: "19.5 – 20.5",
        mo: "6 – 6.5",
        cu: "0.5 – 1",
        n: "0.18 – 0.22",
        c: "0.02 max",
        mn: "1 max",
        si: "0.8 max",
        p: "0.03 max",
        s: "0.01 max",
      },
    ],

    mechanicalProperties: [
      {
        density: "8.0 g/cm³",
        meltingPoint: "1320-1390 °C",
        tensileStrength: "650 MPa",
        yieldStrength: "300 MPa",
        elongation: "35 %",
      },
    ],

    specifications: {
      standard: "ASTM A312, A358 / ASME SA312, SA358",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, Sizes up to 24" available',
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      outsideFinish:
        "2B, No.4, No.1, No.8 Mirror Finish, Customer Requirements",
      deliveryCondition:
        "Annealed, Pickled, Bright Annealed, Polished, Cold Drawn",
    },

    weightChart: [
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.25 (6.35)",
        sch: "-",
        weight: "84.85 (126.32)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.312 (7.92)",
        sch: "10",
        weight: "105.69 (157.25)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.375 (9.53)",
        sch: "STD",
        weight: "126.78 (188.83)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.50 (12.7)",
        sch: "XS / 20",
        weight: "168.37 (250.65)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.625 (15.88)",
        sch: "30",
        weight: "209.62 (312.17)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.688 (17.48)",
        sch: "40",
        weight: "230.29 (342.94)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.25 (6.35)",
        sch: "-",
        weight: "90.2 (134.31)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.312 (7.92)",
        sch: "10",
        weight: "112.36 (167.21)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.375 (9.53)",
        sch: "STD",
        weight: "134.79 (200.82)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.50 (12.7)",
        sch: "XS / 20",
        weight: "179.06 (266.63)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.625 (15.88)",
        sch: "30",
        weight: "222.99 (332.14)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.688 (17.48)",
        sch: "40",
        weight: "245.00 (364.92)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.25 (6.35)",
        sch: "-",
        weight: "95.54 (142.14)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.312 (7.92)",
        sch: "10",
        weight: "119.03 (176.97)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.375 (9.53)",
        sch: "STD",
        weight: "142.81 (212.57)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.50 (12.7)",
        sch: "XS / 20",
        weight: "189.75 (282.29)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.625 (15.88)",
        sch: "30",
        weight: "236.35 (351.73)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.688 (17.48)",
        sch: "40",
        weight: "259.71 (386.47)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.312 (7.92)",
        sch: "-",
        weight: "125.7 (186.94)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.375 (9.53)",
        sch: "STD",
        weight: "150.83 (224.56)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.50 (12.7)",
        sch: "XS",
        weight: "200.44 (298.26)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.625 (15.88)",
        sch: "-",
        weight: "249.71 (371.7)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.688 (17.48)",
        sch: "-",
        weight: "274.42 (408.46)",
      },
    ],

    astmSpecifications: [
      {
        standard: "ASTM A814",
        description:
          "Covers flanged and cold-bending quality cold-worked straight-seam single or double welded austenitic steel pipe for high-temperature and corrosive services.",
      },
      {
        standard: "ASTM A358",
        description:
          "Includes electric-fusion-welded (EFW) austenitic chromium-nickel SMO 254 pipes intended for high-temperature service and general applications.",
      },
      {
        standard: "ASTM A813",
        description:
          "Covers fit-up and alignment quality straight-seam single- or double-welded austenitic steel pipe intended for general corrosive and high-temperature service.",
      },
    ],

    supplyRange: [
      {
        product: "SMO 254 Seamless Round Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "SMO 254 Seamless Square Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "12.7 * 12.7 to 300 * 300",
      },
      {
        product: "SMO 254 Seamless Rectangular Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "SMO 254 Seamless Colour Coated Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "SMO 254 Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product: "SMO 254 Seamless Electropolished Pipes/Tubes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "SMO 254 Seamless Slot Round Pipe/Tube",
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
        price: "10300 – 400",
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
        wall: "3.4",
        price: "3010 – 3500",
        pricekg: "240 – 350",
      },
      {
        diameterA: "8",
        diameterB: "200",
        od: "219.1",
        weight: "20.077",
        wall: "3.76",
        price: "5200.02 – 5500",
        pricekg: "220 – 300",
      },
      {
        diameterA: "10",
        diameterB: "250",
        od: "273.1",
        weight: "28.2",
        wall: "4.19",
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
      "Alloy 254 Pipes Supplier in Mumbai",
      "SMO F44 Pipes Manufacturer in India",
      "SMO 1.4547 Pipe Cut To Size",
      "6 Moly Customized Pipes",
      "SMO F44 Stainless Steel Oval Pipes",
      "SMO 254 Hydraulic Pipes Dealer",
      "ASME SA312 SMO 254 Cold Drawn Pipes",
      "ASTM A312 254 SMO Pipes at Best Price",
      "Alloy F44 Hexagonal Pipes Supplier",
      "Suppliers of 254 SMO ERW Pipes",
      "INOX 1.4547 SMO Pipe Exporter",
      "254 Welded SMO Pipe Supplier",
      "SMO UNS S31254 Pipes",
      "254 SMO SS Pipe",
      "ASTM A312 SMO 254 Square Pipes",
      "F44 SMO Pipe Supplier",
      "Alloy 254 Polished Pipe",
      "SMO Grade 254 Industrial Pipes",
      "Stainless Steel Grade 254 Pipe",
      "SMO 254 SS Mirror Polish Seamless Pipes",
      "SMO 1.4547 Pipes Supplier",
      "Type 254 SMO Hollow Pipes",
      "254 SMO Square Pipes Dealer",
      "SMO F44 Pipes Stockist",
      "Alloy 6Mo Custom Pipe",
      "Alloy 254 Thin Wall Pipe Stockists",
      "6 Moly Welded Pipes Exporter",
      "254 SMO ERW Pipe Stockholder",
      "AISI 254 SMO Welded Pipe",
      "Alloy F44 Schedule 80 Pipe",
      "Alloy 6 Mo Welded Pipe",
      "254 Large Diameter SS Seamless Pipe",
      "F44 SMO Decorative Pipes",
      "A312 Stainless Steel Grade 254 SMO Seamless Pipes",
    ],

    relatedSearches: [
      "SMO 254 SS Pipes",
      "Stainless Steel Grade 254 SMO Pipe Price List In India",
      "254 SMO Pipe Specifications Pdf",
      "ASTM A312 SMO 254 Seamless Pipe",
      "AISI F44 Seamless Pipe Stockist",
      "254 SMO Pipe Price List",
      "6 Moly Pipe Roughness",
      "SMO 254 Stainless Steel Pipe Weight Calculator",
      "Jindal SMO 254 Pipe Price List",
      "View Schedule Chart And Updated Price List Of Alloy 254 Rectangular Pipe",
      "Alloy F44 Pipe Weight Chart",
      "SMO 254 SS Seamless Pipes Exporter",
      "Alloy 6Mo Pipe Pressure Rating",
      "Alloy 254 Pipe Price List",
      "SMO 1.4547 Square Pipe Suppliers In Gujarat",
      "SMO 254 EFW Pipe Supplier",
      "Stainless Steel Grade 254 Pipes Manufacturer In Mumbai",
      "Alloy 254 EFW Pipe Supplier",
      "6 Moly Pipe Supplier In Mumbai",
      "Alloy 254 Pipe Chemical Composition",
      "F44 SMO Threaded Pipe",
      "Alloy 254 Seamless Pipe Exporter",
      "SMO 254 Pipe Per Kg",
      "16 Gauge 254 SMO Pipe",
      "Stainless Steel Pipe Grade F44 Price List",
      "ASTM A312 SMO 254 Pipe",
      "UNS S31254 Pipe",
      "254 SMO Pipe In Pune",
      "Jindal Alloy 254 Pipe Weight Chart",
      "3 Inch 254 SMO Pipe Manufacturers",
      "SMO 254 Pipe Price Per Meter",
      "Top 100 SMO 254 Pipe Dealers In Pune",
      "SMO 254 Pipe Price",
      "SMO 254 Pipe Manufacturers In India",
      "SMO F44 Pipe Weight Chart",
      "ASTM A312 Alloy 254 Welded Pipe",
      "SMO 254 Pipe Price Per Kg In India",
      "Jindal SMO 254 Pipe Price List Pdf",
      "254 SMO Pipe Sizes",
      "Jindal Alloy 254 Welded Pipe Exporter",
      "SMO 254 Pipe Price In India",
      "6Mo Stainless Steel Seamless Pipe Supplier",
      "Jindal Steel Pipe 254 Price",
      "SMO 254 Pipe Price 20 Feet",
      "ASTM A312 SMO254 Pipes",
      "SMO 254 Welded Pipe Supplier",
      "Alloy F44 Pipe Price List",
      "ASME SA312 254 SMO Pipe",
      "Alloy 254 Pipe Price Per Kg In India",
      "SMO 254 Seamless Pipes Supplier In India",
      "SMO 254 Pipe Dimensions",
      "SMO F44 Pipe Supplier In India",
      "254 SMO Pipe Dimensions",
      "SMO 254 Pipe Catalogue",
      "SMO 254 Pipe Schedule",
      "Alloy 254 ERW Pipe Supplier",
      "Alloy 6Mo ERW Pipe Supplier",
      "SMO F44 Pipe Weight Per Meter",
      "Cost Of 254 SMO Pipe",
      "Alloy 254 Pipe Price Per Kg",
      "254 SMO Pipe Price List",
      "Price Of Stainless Steel Pipe 254",
      "254 SMO Pipe Specifications",
      "Buy SMO F44 Pipe Welded Schedule 40",
      "SMO 254 Mirror Polish Pipe Exporter",
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
                  className="w-full h-60 object-covers rounded-lg shadow-lg"
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
                Corrosion Resistance and Marine Durability
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The standout feature of SMO 254 pipes is their exceptional
                resistance to localized corrosion in high-chloride environments.
                With a Pitting Resistance Equivalent Number (PREN) of ≥42.5,
                this grade is specifically engineered to resist pitting and
                crevice corrosion in seawater and other aggressive halide
                solutions. It is virtually immune to chloride-induced stress
                corrosion cracking, which often plagues standard austenitic
                stainless steels in marine or industrial settings.
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
                Due to its superior resistance to chlorides and acidic media,
                SMO 254 pipes are essential in several critical sectors. In the
                offshore oil and gas industry, they are used for seawater
                cooling systems, ballast water pipes, and firewater systems. The
                desalination industry relies on these pipes for handling
                high-concentration brine and intake systems where standard
                stainless steels would suffer from rapid pitting.
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
              <SectionTitle>Specification of SMO 254 Pipes</SectionTitle>
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
              <SectionTitle>Stock Availability of Alloy 254 Pipes</SectionTitle>
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
              <SectionTitle>Equivalent Grades SMO 254 Pipes</SectionTitle>
              <Table
                headers={[
                  "Standard",
                  "Werkstoff Nr.",
                  "UNS",
                  "SIS",
                  "AFNOR",
                  "EN",
                ]}
                rows={productData.equivalentGrades.map((item) => [
                  item.standard,
                  item.werkstoff,
                  item.uns,
                  item.sis,
                  item.afnor,
                  item.en,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>Chemical Composition of SMO 254 Pipes</SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Ni",
                  "Cr",
                  "Mo",
                  "Cu",
                  "N",
                  "C",
                  "Mn",
                  "Si",
                  "P",
                  "S",
                ]}
                rows={productData.chemicalComposition.map((item) => [
                  item.grade,
                  item.ni,
                  item.cr,
                  item.mo,
                  item.cu,
                  item.n,
                  item.c,
                  item.mn,
                  item.si,
                  item.p,
                  item.s,
                ])}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>
                Mechanical Properties of SMO 254 Piping
              </SectionTitle>
              <Table
                headers={[
                  "Density",
                  "Melting Point",
                  "Tensile Strength (MPa)",
                  "Yield Strength (MPa)",
                  "Elongation",
                ]}
                rows={[
                  [
                    productData.mechanicalProperties[0].density,
                    productData.mechanicalProperties[0].meltingPoint,
                    productData.mechanicalProperties[0].tensileStrength,
                    productData.mechanicalProperties[0].yieldStrength,
                    productData.mechanicalProperties[0].elongation,
                  ],
                ]}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>SMO 254 Seamless Pipe Weight Chart</SectionTitle>
              <Table
                headers={[
                  "NPS (DN)",
                  "OD (mm)",
                  "WT (mm)",
                  "SCH",
                  "Weight LB/FT (KG/M)",
                ]}
                rows={productData.weightChart.map((item) => [
                  item.nps,
                  item.od,
                  item.wt,
                  item.sch,
                  item.weight,
                ])}
              />
            </section>

            {/* ASTM Specifications */}
            <section className="mb-8">
              <SectionTitle>1.4547 ASTM Pipes Specification</SectionTitle>
              <div className="space-y-3">
                {productData.astmSpecifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <h4 className="font-semibold text-[#173F52]">
                      {spec.standard}
                    </h4>
                    <p className="text-gray-700 text-sm mt-1">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Supply Range */}
            <section className="mb-8">
              <SectionTitle>SMO 254 Pipe Supply Range</SectionTitle>
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
              <SectionTitle>SMO 254 Pipe Price Range</SectionTitle>
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
                Specialized in Following SMO 254 Pipes
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
              <SectionTitle>Searches Related to SMO 254 Pipes</SectionTitle>
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

export default SMO254Pipes;
