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

const Incoloy800DS330Pipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Incoloy 800 (DS 330) Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B407 / ASME SB407 Incoloy 800 Pipes – Nickel-Iron-Chromium Alloy for High-Strength & Oxidation Resistance at Elevated Temperatures",

    technicalOverview: {
      title: "Incoloy 800 (DS 330) Pipes: Technical Overview",
      description:
        "Incoloy 800, also recognized by the designation DS 330 or UNS N08800, is a nickel-iron-chromium alloy designed for structural applications requiring high strength and resistance to oxidation and carburization at elevated temperatures. The chemical composition is carefully balanced with a high nickel content to provide resistance to chloride-ion stress corrosion cracking, while the chromium content offers superior resistance to both oxidizing and reducing environments. Unlike the 800H or 800HT variants, the standard Incoloy 800 grade is often preferred for its excellent mechanical properties and stability during long-term exposure to high temperatures.",
    },

    keyFeatures: [
      "Nickel-iron-chromium alloy (UNS N08800 / DS 330)",
      "High strength and resistance to oxidation at elevated temperatures",
      "Superior resistance to carburization",
      "High nickel content prevents chloride-ion stress corrosion cracking",
      "Chromium provides resistance to oxidizing and reducing environments",
      "Stable austenitic structure at high temperatures",
      "Excellent mechanical properties for long-term service",
      "Resistant to sulfidation and nitriding",
    ],

    applications: [
      "Petrochemical and chemical processing (heat exchangers)",
      "Power generation (super-heater and re-heater tubing)",
      "Industrial furnaces (radiant tubes, muffles, retorts)",
      "Food processing (high-heat cooking and sterilization)",
      "Nuclear power (steam generator tubing, cooling systems)",
      "Heat treating equipment (baskets, trays, fixtures)",
      "Furnace components and chemical heaters",
      "High-temperature structural piping",
    ],

    corrosionResistance: [
      "Exceptional resistance to oxidizing and reducing environments",
      "Excellent resistance to chloride-ion stress corrosion cracking",
      "Superior resistance to sulfidation",
      "Excellent resistance to nitriding",
      "Maintains high creep and rupture strength at 1100°F (593°C)",
      "Resistant to steam-to-air and steam-to-hydrogen mixtures",
      "Excellent resistance to scaling at elevated temperatures",
      "Resistant to carburization",
    ],

    stockAvailability: {
      seamless: {
        title: "800 Seamless Pipes",
        image: seamlessImage,
        items: [
          "Inconel Alloy 330 Seamless",
          "Incoloy 800 Thin Wall Seamless",
          "UNS N08800 Seamless Pipe",
          "ASME SB407 Inconel 800 Seamless",
          "ASTM B407 800 Inconel Seamless",
        ],
      },
      welded: {
        title: "800 Welded Pipes",
        image: weldedImage,
        items: [
          "ASTM B514 Inconel 800 Welded",
          "Incoloy 330 Welded Pipe",
          "800 Incoloy Alloy Welded Pipe",
          "ASME SB514 Alloy 800 Welded",
          "UNS N08800 Welded Pipe",
        ],
      },
      erw: {
        title: "800 ERW Pipes",
        image: erwImage,
        items: [
          "ASTM B515 800 ERW Pipe",
          "Incoloy Alloy 800 ERW Pipe",
          "Inconel 800 Electric Resistance",
          "Alloy 1.4876 ERW Pipe",
          "Incoloy 1.4876 ERW Pipe",
        ],
      },
      efw: {
        title: "800 EFW Pipes",
        image: efwImage,
        items: [
          "800 Incoloy EFW Pipe Stock",
          "Alloy 800 Thin Wall EFW Pipes",
          "Inconel® Alloy 800 EFW Pipes",
          "Incoloy UNS N08800 EFW Pipe",
          "Incoloy 800 Electric Fusion Pipe",
        ],
      },
      round: {
        title: "800 Round Pipes",
        image: roundImage,
        items: [
          "ASME SB407 Incoloy 800 Round",
          "Inconel 1.4876 Round Pipe",
          "Inconel 800 Round Pipe Stock",
          "ASTM B407 Incoloy 800 Round",
          "Incoloy Alloy 800 Round Pipe",
        ],
      },
      hollow: {
        title: "800 Hollow Pipes",
        image: hollowImage,
        items: [
          "UNS N08800 Hollow Pipe",
          "ASME SB515 800 Hollow Pipes",
          "Incoloy Alloy 800 Hollow Pipe",
          "Incoloy 800 Custom Hollow Pipe",
          "Incoloy 1.4959 Hollow Pipe",
        ],
      },
    },

    equivalentGrades: [
      {
        standard: "Incoloy 800",
        werkstoff: "1.4876",
        uns: "N08800",
        jis: "NCF 800",
        bs: "NA 15",
        gost: "??670",
        afnor: "Z8NC32-21",
        en: "X10NiCrAlTi32-20",
        or: "XH32T",
      },
    ],

    chemicalComposition: [
      {
        grade: "800",
        c: "0.10 max",
        mn: "1.50 max",
        si: "1.00 max",
        s: "0.015 max",
        cu: "0.75 max",
        fe: "39.50 min",
        ni: "30.00–35.00",
        cr: "19.00–23.00",
        al: "0.15–0.60",
        ti: "0.15–0.60",
      },
    ],

    mechanicalProperties: [
      {
        grade: "800",
        density: "7.94 g/cm³",
        meltingPoint: "1385 °C (2525 °F)",
        tensileStrength: "Psi – 75,000, MPa – 520",
        yieldStrength: "Psi – 30,000, MPa – 205",
        elongation: "30 %",
      },
    ],

    specifications: {
      standard: "ASTM B407, B514, B515 / ASME SB407, SB514, SB515",
      seamlessSize: '1/2" NB - 16" NB',
      roundSize: '6" NB - 24" NB',
      weldedSize: '1/2" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, sizes up to 24" available',
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      deliveryCondition:
        "Annealed, Pickled, Polished, Bright Annealed, Cold Drawn",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, NDT, UT Testing",
    },

    weightChart: [
      {
        nps: "1/2″",
        od: "0.840",
        odmm: "21",
        wall: "0.109",
        wallmm: "2.769",
        sched: "40 STD",
        weight: "1.268",
        lbft: "0.851",
      },
      {
        nps: "1/2″",
        od: "0.840",
        odmm: "21",
        wall: "0.147",
        wallmm: "3.734",
        sched: "80 STD",
        weight: "1.621",
        lbft: "1.088",
      },
      {
        nps: "3/4″",
        od: "1.050",
        odmm: "27",
        wall: "0.113",
        wallmm: "2.870",
        sched: "40 STD",
        weight: "1.684",
        lbft: "1.131",
      },
      {
        nps: "3/4″",
        od: "1.050",
        odmm: "27",
        wall: "0.154",
        wallmm: "3.912",
        sched: "80 STD",
        weight: "2.195",
        lbft: "1.474",
      },
      {
        nps: "1″",
        od: "1.315",
        odmm: "33",
        wall: "0.133",
        wallmm: "3.378",
        sched: "40 STD",
        weight: "2.501",
        lbft: "1.679",
      },
      {
        nps: "1″",
        od: "1.315",
        odmm: "33",
        wall: "0.179",
        wallmm: "4.547",
        sched: "80 STD",
        weight: "3.325",
        lbft: "2.172",
      },
      {
        nps: "1 1/4″",
        od: "1.660",
        odmm: "42",
        wall: "0.140",
        wallmm: "3.556",
        sched: "40 STD",
        weight: "3.385",
        lbft: "2.273",
      },
      {
        nps: "1 1/4″",
        od: "1.660",
        odmm: "42",
        wall: "0.191",
        wallmm: "4.851",
        sched: "80 STD",
        weight: "4.464",
        lbft: "2.997",
      },
      {
        nps: "1 1/2″",
        od: "1.900",
        odmm: "48",
        wall: "0.145",
        wallmm: "3.683",
        sched: "40 STD",
        weight: "4.048",
        lbft: "2.718",
      },
      {
        nps: "1 1/2″",
        od: "1.900",
        odmm: "48",
        wall: "0.200",
        wallmm: "5.080",
        sched: "80 STD",
        weight: "5.409",
        lbft: "3.361",
      },
      {
        nps: "2″",
        od: "2.375",
        odmm: "60",
        wall: "0.154",
        wallmm: "3.912",
        sched: "40 STD",
        weight: "5.441",
        lbft: "3.653",
      },
      {
        nps: "2″",
        od: "2.375",
        odmm: "60",
        wall: "0.218",
        wallmm: "5.537",
        sched: "80 STD",
        weight: "7.480",
        lbft: "5.022",
      },
      {
        nps: "2 1/2″",
        od: "2.875",
        odmm: "73",
        wall: "0.203",
        wallmm: "5.516",
        sched: "40 STD",
        weight: "8.629",
        lbft: "5.793",
      },
      {
        nps: "2 1/2″",
        od: "2.875",
        odmm: "73",
        wall: "0.276",
        wallmm: "7.010",
        sched: "80 STD",
        weight: "11.411",
        lbft: "7.661",
      },
      {
        nps: "3″",
        od: "3.500",
        odmm: "89",
        wall: "0.216",
        wallmm: "5.486",
        sched: "40 STD",
        weight: "11.284",
        lbft: "7.576",
      },
      {
        nps: "3″",
        od: "3.500",
        odmm: "89",
        wall: "0.300",
        wallmm: "7.620",
        sched: "80 STD",
        weight: "15.272",
        lbft: "10.253",
      },
      {
        nps: "4″",
        od: "4.500",
        odmm: "114",
        wall: "0.237",
        wallmm: "6.020",
        sched: "40 STD",
        weight: "16.073",
        lbft: "10.790",
      },
      {
        nps: "4″",
        od: "4.500",
        odmm: "114",
        wall: "0.337",
        wallmm: "8.560",
        sched: "80 XHY",
        weight: "22.318",
        lbft: "14.983",
      },
      {
        nps: "6″",
        od: "6.625",
        odmm: "168",
        wall: "0.280",
        wallmm: "7.112",
        sched: "40 STD",
        weight: "58.263",
        lbft: "18.974",
      },
      {
        nps: "8″",
        od: "8.625",
        odmm: "219",
        wall: "0.322",
        wallmm: "8.179",
        sched: "40",
        weight: "42.352",
        lbft: "28.554",
      },
      {
        nps: "10″",
        od: "10.750",
        odmm: "273",
        wall: "0.365",
        wallmm: "9.271",
        sched: "40 STD",
        weight: "63.301",
        lbft: "40.483",
      },
      {
        nps: "12″",
        od: "12.750",
        odmm: "324",
        wall: "0.375",
        wallmm: "9.525",
        sched: "40",
        weight: "73.824",
        lbft: "49.562",
      },
      {
        nps: "14″",
        od: "14.000",
        odmm: "356",
        wall: "0.375",
        wallmm: "9.525",
        sched: "STD",
        weight: "81.281",
        lbft: "54.568",
      },
      {
        nps: "16″",
        od: "16.000",
        odmm: "406",
        wall: "0.375",
        wallmm: "9.525",
        sched: "30 STD",
        weight: "93.213",
        lbft: "62.578",
      },
    ],

    supplyRange: [
      {
        product: "Incoloy 800 Seamless Round Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Incoloy 800 Seamless Custom Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "12.7 * 12.7 to 300 * 300",
      },
      {
        product: "Incoloy 800 Seamless Custom Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "Incoloy 800 Seamless Colour Coated Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Incoloy 800 Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product: "Incoloy 800 Seamless Electropolished Pipes/Tubes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Incoloy 800 Seamless Slot Round Pipe/Tube",
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
      "800 Inconel Welded Pipe",
      "800 Incoloy Large Diameter Seamless Pipe",
      "INOX 1.4876 Inconel Pipe Exporter",
      "800 Welded Nicel Alloy Pipe",
      "Incoloy 330 Pipes Supplier in Mumbai",
      "Inconel 800 Pipes Manufacturer in India",
      "Inconel 1.4876 Pipe Cut To Size",
      "Incoloy 800 Customized Pipes",
      "Inconel Alloy 800 Pipes Supplier",
      "Type 800 Inconel Hollow Pipes",
      "ASTM B407 Incoloy 800 Custom Pipes",
      "800 Nickel Alloy Pipe Supplier",
      "Inconel 800 Pipes Supplier",
      "Suppliers of 800 Inconel ERW Pipes",
      "Incoloy 800 Pipe Importer",
      "Inconel® Alloy 800 Pipe",
      "Alloy 800 Hollow Pipe",
      "Inconel Grade 800 Industrial Pipes",
      "330 Incoloy Custom Pipe",
      "Inconel 800 Thin Wall Pipe",
      "800 Incoloy Alloy Pipe",
      "Inconel 800 Seamless Pipes Stockists",
      "800 Incoloy Custom Pipes Dealer",
      "Inconel® Alloy 800 Pipes Stockist",
      "800 Incoloy Welded Pipe",
      "Incoloy 330 Schedule 80 Pipe",
      "ASME SB407 Incoloy 800 Cold Drawn Pipes",
      "ASTM B407 800 Inconel Pipes at Best Price",
      "Inconel 800 Welded Pipes Exporter",
      "Incoloy 800 ERW Pipe Stockholder",
      "800 Alloy Thik Wall Pipes",
      "Incoloy 800 Cold Drawn Pipes Dealer",
      "Nickel Alloy 800 Pipes",
      "B407 Incoloy Grade 800 Seamless Pipes",
    ],

    relatedSearches: [
      "Inconel 800 Pipe Supplier In India",
      "800 Alloy Threaded Pipe",
      "800 Incoloy Pipe Price List",
      "ASTM B407 Inconel 800 Seamless Pipe",
      "Incoloy 800 Pipe Price Per Kg In India",
      "Inconel 800 Pipe Price",
      "Inconel Pipe 800 Price",
      "800 Alloy Pipe Sizes",
      "Inconel® Alloy 800 Pipe Weight Chart",
      "Alloy 800 Pipe Price Per Kg In India",
      "Incoloy 800 Pipe Weight Calculator",
      "800 Incoloy Pipe Specifications Pdf",
      "ASTM B407 800 Seamless Pipe",
      "Cost Of 800 Incoloy Pipe",
      "Incoloy 800 Exhaust Pipes Supplier In India",
      "Inconel 800 Seamless Pipes Exporter",
      "Incoloy 800 EFW Pipe Supplier",
      "Alloy 800 Seamless Pipe Exporter",
      "Inconel 800 Pipe Catalogue",
      "Inconel 800 Pipe Weight Chart",
      "Inconel 800 Pipe Exporter",
      "16 Gauge 800 Alloy Pipe",
      "Incoloy 800 Pipe Schedule",
      "Buy Incoloy Pipe 800 Welded Schedule 40",
      "View Schedule Chart And Updated Price List Of Incoloy 800 Custom Pipe",
      "Inconel 800 Welded Pipe Supplier",
      "Price Of Incoloy Pipe 800",
      "Inconel 800 EFW Pipe Supplier",
      "Incoloy 800 EFW large diameter pipes",
      "Nickel Alloy 800 Round Pipe Supplier",
      "ASTM B407 Alloy 800 Pipes",
      "Inconel 800 Seamless Pipe Supplier",
      "800 Incoloy Pipe Price Per Kg",
      "800 Nickel Alloy Pipe Price List",
      "800 Inconel Pipe In Pune",
      "Inconel 800 Pipe Supplier In Mumbai",
      "Inconel 800 Pipe Price List Pdf",
      "Inconel Pipe Price 20 Feet",
      "Incoloy 800 Pipe Per Kg",
      "3 Inch 800 Incoloy Pipe Manufacturers",
      "Incoloy 800 Pipe Price List",
      "Inconel 800 Pipe Weight Per Meter",
      "Incoloy 800 Pipe Price In India",
      "Incoloy 800 Round Pipe Supplier",
      "UNS N08800 Pipe",
      "Inconel Pipe Grade 800 Price List",
      "Alloy 800 Pipe Price List In India",
      "800 Incoloy Pipe Specifications",
      "Incoloy 330 Pipe Roughness",
      "Incoloy 800 Pipe Manufacturers In India",
      "330 Incoloy Seamless Pipe Stockist",
      "Inconel 800 Pipe Chemical Composition",
      "ASTM B407 Incoloy 800 Pipe",
      "ASME SB407 Incoloy 800 Alloy Pipe",
      "Incoloy 800 Pipe Dimensions",
      "Nickel Alloy 800 Pipe Price List",
      "Incoloy 800 Welded Pipe Exporter",
      "Incoloy 800 Pipe Weight Chart",
      "Inconel 800 Pipe Price List",
      "Incoloy 800 Pipes Manufacturer In Mumbai",
      "Incoloy 1.4876 Custom Pipe Suppliers In Gujarat",
      "Inconel 800 Pipe Pressure Rating",
      "800 Inconel Pipe Dimensions",
      "Inconel 330 Pipe Price Per Meter",
      "Top 100 Inconel Pipe Dealers In Pune",
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

            {/* Corrosion Resistance */}
            <section className="mb-8">
              <SectionTitle>
                Corrosion Resistance and High-Temperature Durability
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The robust corrosion resistance of Incoloy 800 pipes makes them
                a highly durable addition to complex piping systems. They
                exhibit exceptional resistance to many acidic environments and
                are particularly effective in resisting steam-to-air and
                steam-to-hydrogen mixtures. This grade is widely utilized in
                applications where the metal will be subjected to temperatures
                as high as 1100°F (593°C), as it maintains high creep and
                rupture strength.
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
                Due to their versatility and heat-resistant capabilities,
                Incoloy 800 (DS 330) pipes are essential across several critical
                sectors. In the petrochemical and chemical processing
                industries, they are used for heat exchangers and piping systems
                that handle corrosive reagents at high temperatures. The power
                generation sector relies on these pipes for super-heater and
                re-heater tubing in steam boilers.
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
                Specification of Incoloy 800 (DS 330) Pipes
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
                Stock Availability of Incoloy 800 Pipes
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
              <SectionTitle>Equivalent Grades Incoloy 800 Pipes</SectionTitle>
              <Table
                headers={[
                  "Standard",
                  "Werkstoff Nr.",
                  "UNS",
                  "JIS",
                  "BS",
                  "GOST",
                  "AFNOR",
                  "EN",
                  "OR",
                ]}
                rows={productData.equivalentGrades.map((item) => [
                  item.standard,
                  item.werkstoff,
                  item.uns,
                  item.jis,
                  item.bs,
                  item.gost,
                  item.afnor,
                  item.en,
                  item.or,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>
                Chemical Composition of Incoloy 800 Pipes
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "C",
                  "Mn",
                  "Si",
                  "S",
                  "Cu",
                  "Fe",
                  "Ni",
                  "Cr",
                  "Al",
                  "Ti",
                ]}
                rows={productData.chemicalComposition.map((item) => [
                  item.grade,
                  item.c,
                  item.mn,
                  item.si,
                  item.s,
                  item.cu,
                  item.fe,
                  item.ni,
                  item.cr,
                  item.al,
                  item.ti,
                ])}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>
                Mechanical Properties of Incoloy 800 (DS 330) Piping
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Density",
                  "Melting Point",
                  "Tensile Strength",
                  "Yield Strength (0.2% Offset)",
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
                Incoloy 800 (DS 330) Seamless Pipe Weight Chart
              </SectionTitle>
              <Table
                headers={[
                  "NPS",
                  "OD (in)",
                  "OD (mm)",
                  "Wall (in)",
                  "Wall (mm)",
                  "Sched",
                  "Weight (kg/Mtr)",
                  "Weight (Lb/ft)",
                ]}
                rows={productData.weightChart.map((item) => [
                  item.nps,
                  item.od,
                  item.odmm,
                  item.wall,
                  item.wallmm,
                  item.sched,
                  item.weight,
                  item.lbft,
                ])}
              />
            </section>

            {/* Supply Range */}
            <section className="mb-8">
              <SectionTitle>Incoloy 800 Pipe Supply Range</SectionTitle>
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
              <SectionTitle>Incoloy 800 Pipe Price Range</SectionTitle>
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
                Specialized In Following Incoloy 800 (DS 330) Pipes
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
              <SectionTitle>Searches Related to Incoloy 800 Pipes</SectionTitle>
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

export default Incoloy800DS330Pipes;
