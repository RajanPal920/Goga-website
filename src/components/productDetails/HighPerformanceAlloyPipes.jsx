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
import nimonicImage from "../../assets/images/stock/nimonic.jpg";
import nichromeImage from "../../assets/images/stock/nichrome.jpg";
import nitronicImage from "../../assets/images/stock/nitronic.jpg";
import niloImage from "../../assets/images/stock/nilo.jpg";
import alloy286Image from "../../assets/images/stock/alloy286.jpg";
import alloy926Image from "../../assets/images/stock/alloy926.jpg";

const HighPerformanceAlloyPipes = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "High-Performance Alloy Pipes Supplier",
    subtitle:
      "Nimonic, Nichrome, Nitronic, Nilo & Alloy 286/926 – Superior High-Temperature Strength, Corrosion Resistance & Controlled Expansion Properties for Mission-Critical Applications",

    technicalOverview: {
      title: "High-Performance Alloy Pipes: Technical Overview",
      description:
        "This selection of specialized alloys covers a broad spectrum of extreme engineering requirements, from ultra-high temperature resistance and controlled thermal expansion to superior strength in corrosive marine environments. These pipes are engineered for mission-critical applications where standard stainless steels fail due to thermal fatigue, mechanical stress, or aggressive chemical attack.",
    },

    alloys: [
      {
        name: "Nimonic 75 / 80A Pipes",
        description:
          "Nimonic alloys are superalloys primarily composed of nickel and chromium. They are designed specifically for high-temperature service where creep resistance is the primary concern. Nimonic 75 (UNS N06075): A solution-strengthened alloy with good mechanical properties and oxidation resistance at high temperatures. It is widely used for sheet metal components and fabrications. Nimonic 80A (UNS N07080): A precipitation-hardenable alloy, similar to Nimonic 75 but strengthened by additions of aluminum and titanium. It offers significantly higher tensile and creep-rupture properties up to 815°C (1500°F). Key Uses: Gas turbine components, internal combustion engine valves, and specialized furnace hardware.",
      },
      {
        name: "Nichrome 80 / 20 Pipes",
        description:
          "Nichrome 80/20 (80% Nickel, 20% Chromium) is the gold standard for electrical resistance and high-temperature heating elements. Oxidation Resistance: When heated, it forms a tenacious layer of chromium oxide that is thermodynamically stable, protecting the pipe from further degradation even in intermittent heating cycles. Performance: It maintains excellent mechanical strength at high temperatures and resists 'green rot' (intergranular oxidation) better than many other heating alloys. Key Uses: Industrial heating elements, heat treatment furnace muffles, and laboratory equipment.",
      },
      {
        name: "Nitronic 50 (XM–19) Pipes",
        description:
          "Nitronic 50 is a nitrogen-strengthened austenitic stainless steel (UNS S20910) that provides a combination of corrosion resistance and strength not found in any other commercial material in its price range. Superior Strength: It has nearly double the yield strength of 316/316L stainless steel. Corrosion Resistance: It offers better resistance to pitting and crevice corrosion than Type 317L. It remains non-magnetic even after severe cold working or exposure to sub-zero temperatures. Key Uses: Marine pump shafts, subsea hardware, downhole rigging, and chemical processing valves.",
      },
      {
        name: "Nilo 42 & Nilo 48 Pipes (Controlled Expansion Alloys)",
        description:
          "The Nilo series (Invar family) is engineered for applications where dimensional stability is required across varying temperatures. Nilo 42 (UNS K94100): A nickel-iron low expansion alloy containing 42% nickel with a low and nominally constant coefficient of thermal expansion from room temperature to about 300°C (570°F). Designed for glass‑to‑metal and ceramic‑to‑metal seals. Nilo 48 (UNS K94800): A controlled expansion alloy with 48% nickel, matching the thermal expansion of specific soft glasses. Key applications include thermostats, electronic lead frames, laser components, and semiconductor packaging.",
      },
      {
        name: "Alloy 286 (Grade 660) & Alloy 926 (6% Moly) Pipes",
        description:
          "Alloy 286 (UNS S66286 / Grade 660): An iron‑base, age‑hardenable superalloy designed for high strength and good corrosion resistance at elevated temperatures up to 704°C (1300°F). It is essential for high‑temperature fasteners, turbine components, and structural engine parts in aerospace and power generation applications. Alloy 926 (UNS N08926 / 1.4529): A super‑austenitic 6% Molybdenum stainless steel with increased nitrogen. It provides exceptional resistance to pitting and crevice corrosion in high‑chloride media like seawater and acidic bleach environments, making it the material of choice for offshore and chemical processing industries.",
      },
    ],

    unifiedStandards: {
      title:
        "Unified Specification: Nimonic, Nichrome, Nitronic, Nilo & Alloy 286/926",
      standards: [
        "ASTM B163, B167, B407, B517, A312 / ASME SB163, SB167, SB407, SB517",
        'PIPE SIZE RANGE: 1/2" NB - 16" NB (Seamless) | 1/2" NB - 24" NB (Welded / ERW)',
        "OUTSIDE DIAMETER: 6.00 mm OD up to 914.4 mm OD (All Grades available Ex-stock)",
        "SCHEDULE RANGE: SCH 5, SCH10, SCH 40, SCH 80, SCH 160, SCH XXS",
        "DELIVERY CONDITION: Annealed & Pickled, Bright Annealed, Polished, Cold Drawn",
        "VALUE ADDED SERVICES: Cutting, Beveling, Threading, Ultrasonic & Destructive Testing",
      ],
    },

    stockAvailability: {
      nimonic: {
        title: "Nimonic 75 / 80A Pipes",
        image: nimonicImage,
        items: [
          "Nimonic 75 Seamless Pipe",
          "Nimonic Alloy 80A Welded",
          "UNS N06075 / N07080 Stock",
          "Nimonic High Temp Hollow Pipe",
        ],
      },
      nichrome: {
        title: "Nichrome 80 / 20 Pipes",
        image: nichromeImage,
        items: [
          "Nichrome 80/20 Seamless Pipe",
          "Alloy 80/20 Resistance Pipe",
          "Nichrome Industrial Round Pipe",
          "Custom Size Nichrome Pipes",
        ],
      },
      nitronic: {
        title: "Nitronic 50 (XM-19) Pipes",
        image: nitronicImage,
        items: [
          "Nitronic 50 Seamless Piping",
          "XM-19 High Strength Welded",
          "UNS S20910 Nitronic Pipes",
          "Nitronic 50 Annealed Pipes",
        ],
      },
      nilo: {
        title: "Nilo 42 / 48 Pipes",
        image: niloImage,
        items: [
          "Nilo 42 Expansion Alloy Pipe",
          "Nilo 48 Low Expansion Pipe",
          "UNS K94100 / K94800 Stock",
          "Precision Nilo Hollow Pipes",
        ],
      },
      alloy286: {
        title: "Alloy 286 (660) Pipes",
        image: alloy286Image,
        items: [
          "A286 / Grade 660 Seamless",
          "ASTM A453 Alloy 660 Pipes",
          "High Strength A286 Welded",
          "UNS S66286 Alloy Stock",
        ],
      },
      alloy926: {
        title: "Alloy 926 Pipes",
        image: alloy926Image,
        items: [
          "Alloy 926 Super-Austenitic",
          "1.4529 / UNS N08926 Piping",
          "High Molybdenum Alloy 926",
          "926 Corrosion Resistant Pipes",
        ],
      },
    },

    equivalentGrades: [
      {
        material: "Nimonic 75",
        standard: "Nimonic 75",
        uns: "N06075",
        werkstoff: "2.4951 / 2.4630",
      },
      {
        material: "Nimonic 80A",
        standard: "Nimonic 80A",
        uns: "N07080",
        werkstoff: "2.4952",
      },
      {
        material: "Nichrome 80/20",
        standard: "Alloy 80/20",
        uns: "N06003",
        werkstoff: "2.4869",
      },
      {
        material: "Nitronic 50 / XM-19",
        standard: "Nitronic",
        uns: "S20910",
        werkstoff: "–",
      },
      {
        material: "Nilo 42",
        standard: "Nilo 42",
        uns: "K94100",
        werkstoff: "1.3917",
      },
      {
        material: "Nilo 48",
        standard: "Nilo 48",
        uns: "K94800",
        werkstoff: "1.7745",
      },
      {
        material: "Alloy A286 (660)",
        standard: "A 286",
        uns: "S66286",
        werkstoff: "1.4980",
      },
      {
        material: "Alloy 926",
        standard: "926",
        uns: "N08926",
        werkstoff: "1.4529",
      },
    ],

    chemicalComposition: [
      {
        grade: "Nimonic 75",
        ni: "Bal",
        cr: "18-21",
        fe: "5.0 max",
        mo: "–",
        mn: "1.0 max",
        si: "1.0 max",
        c: "0.08-0.15",
        other: "Ti: 0.2-0.6, Cu: 0.5",
      },
      {
        grade: "Nimonic 80A",
        ni: "Bal",
        cr: "18-21",
        fe: "3.0 max",
        mo: "–",
        mn: "1.0 max",
        si: "1.0 max",
        c: "0.1 max",
        other: "Cu: 0.2",
      },
      {
        grade: "Nichrome 80/20",
        ni: "75.0",
        cr: "19-21",
        fe: "1.00",
        mo: "–",
        mn: "1.00",
        si: "0.5-2.0",
        c: "0.15",
        other: "Co: 1.5, Al: 0.3, P: 0.02, S: 0.015",
      },
      {
        grade: "Nitronic 50",
        ni: "11.5-13.5",
        cr: "20.5-23.5",
        fe: "Bal",
        mo: "1.5-3.0",
        mn: "4.0-6.0",
        si: "1.00",
        c: "0.06 max",
        other: "N: 0.2-0.4, Nb: 0.1-0.3, V: 0.1-0.3",
      },
      {
        grade: "Nilo 42",
        ni: "42.0",
        cr: "–",
        fe: "55.0",
        mo: "–",
        mn: "–",
        si: "–",
        c: "–",
        other: "Rem: Others",
      },
      {
        grade: "Nilo 48",
        ni: "48.0",
        cr: "0.25 max",
        fe: "Bal",
        mo: "–",
        mn: "0.8 max",
        si: "0.3 max",
        c: "0.05 max",
        other: "Al: 0.10, P: 0.025, S: 0.025",
      },
      {
        grade: "Alloy A286",
        ni: "24-27",
        cr: "13.5-16",
        fe: "Bal",
        mo: "1-1.5",
        mn: "2.0 max",
        si: "1.0 max",
        c: "0.08 max",
        other: "Ti: 1.9-2.35, V: 0.1-0.5, B: 0.003",
      },
      {
        grade: "Alloy 926",
        ni: "24-27",
        cr: "13.5-16",
        fe: "Bal",
        mo: "1-1.5",
        mn: "2.0 max",
        si: "1.0 max",
        c: "0.08 max",
        other: "Cu: 0.5, Ti: 1.9-2.35",
      },
    ],

    mechanicalProperties: [
      {
        material: "Nimonic 75/80A",
        tensile: "104,000 Psi",
        yield: "40,000 Psi",
        elongation: "42 %",
        density: "8.37 g/cm³",
      },
      {
        material: "Nichrome 80/20",
        tensile: "650 MPa",
        yield: "280 MPa",
        elongation: "20 %",
        density: "–",
      },
      {
        material: "Nitronic 50",
        tensile: "100 ksi",
        yield: "55 ksi",
        elongation: "35 %",
        density: ">20 HRC",
      },
      {
        material: "Nilo 42",
        tensile: "490 MPa (71 ksi)",
        yield: "250 MPa (36.3 ksi)",
        elongation: "–",
        density: "150 GPa Modulus",
      },
      {
        material: "Nilo 48",
        tensile: "75,000 psi (520 MPa)",
        yield: "38,000 psi (260 MPa)",
        elongation: "43 %",
        density: "–",
      },
      {
        material: "Alloy A286 (660)",
        tensile: "140 ksi (655 MPa)",
        yield: "95 ksi (965 MPa)",
        elongation: "12 %",
        density: "Solution Treated & Aged",
      },
      {
        material: "Alloy 926",
        tensile: "140 ksi (655 MPa)",
        yield: "95 ksi (965 MPa)",
        elongation: "12 %",
        density: "Solution Treated & Aged",
      },
    ],

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
    ],

    supplyRange: [
      {
        product: "Seamless Round Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Seamless Custom Square Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "12.7*12.7 to 300*300",
      },
      {
        product: "Seamless Custom Rectangular Pipe",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "Alloy A286 Seamless Custom Pipe",
        wallThk: "0.05 to 30",
        od: "10*286 to 100*2860",
      },
      {
        product: "Alloy 926 Seamless Custom Pipe",
        wallThk: "0.05 to 30",
        od: "10*926 to 100*9260",
      },
      {
        product: "Electropolished Pipes/Tubes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Ornamental & Slot Round Pipe",
        wallThk: "0.05 to 2.0 / 5.0",
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
      "Nimonic 75 / 80A Seamless & Welded Pipes",
      "Nichrome 80/20 High Resistance Pipes",
      "Nitronic 50 (XM-19) High Strength Piping",
      "Nilo 42 / 48 Controlled Expansion Alloy Pipes",
      "Alloy A286 (660) Iron-Based Superalloy Pipes",
      "Alloy 926 Super-Austenitic Corrosion Pipes",
      "ASTM B167 / B517 Special Alloy Pipes",
      "Special Alloy Hollow Section & Square Pipes",
      "UNS N06075 / N07080 Nimonic Pipes",
      "UNS S20910 Nitronic XM-19 Pipes Stockist",
      "Precision Nilo 42 / 48 Cold Drawn Pipes",
      "Alloy 926 (1.4529) EFW / ERW Pipe Exporter",
      "Nitronic 50 Annealed & High Strength Pipes",
      "Alloy A286 Precipitation Hardened Pipes",
      "Nimonic 75 / 80A Custom Cut-to-Size Pipes",
      "Nichrome 80/20 Resistance Alloy Round Pipes",
      "Special Alloy Pipes Manufacturer in India",
      "Special Alloy Pipes Supplier in Mumbai",
      "UNS K94100 / K94800 Nilo Pipes Dealer",
      "Alloy 926 / UNS N08926 Seamless Piping",
    ],

    relatedSearches: [
      "Nimonic 75 Pipe Price Per Kg",
      "Nimonic 80A Seamless Pipe Weight Chart",
      "Nichrome 80/20 Pipe Supplier In India",
      "Nitronic 50 Pipe Chemical Composition",
      "Nitronic 50 XM-19 Pipe Pressure Rating",
      "Nilo 42 Pipe Price In Mumbai",
      "Nilo 48 Expansion Pipe Dimensions",
      "Alloy A286 Pipe Specifications Pdf",
      "Alloy 286 Pipe Manufacturer In India",
      "Alloy 926 Pipe Corrosion Resistance",
      "Nimonic 75 / 80A Pipe Price List",
      "Nichrome 80/20 Pipe Weight Calculator",
      "Nitronic 50 Pipe Mechanical Properties",
      "Nilo 42 / 48 Pipe Stockist",
      "Alloy A286 Pipe Heat Treatment",
      "Alloy 926 Pipe Price Per Kg In India",
      "Special Alloy Seamless Pipe Exporter",
      "Special Alloy Welded Pipe Supplier",
      "Nimonic 75 Pipe Dimensions",
      "Nichrome 80/20 Pipe Sizes",
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

            {/* Alloys */}
            <section className="mb-8">
              <SectionTitle>Alloy Grades & Applications</SectionTitle>
              <div className="space-y-4">
                {productData.alloys.map((alloy, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition bg-white"
                  >
                    <h3 className="text-lg font-semibold text-[#173F52] mb-2">
                      {alloy.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {alloy.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Unified Standards */}
            <section className="mb-8">
              <SectionTitle>{productData.unifiedStandards.title}</SectionTitle>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <ul className="space-y-2">
                  {productData.unifiedStandards.standards.map(
                    (standard, index) => (
                      <li
                        key={index}
                        className="text-gray-700 flex items-start gap-2 text-sm"
                      >
                        <span className="text-[#D92B20] mt-1">▸</span>
                        <span>{standard}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>

            {/* Stock Availability with Images */}
            <section className="mb-8">
              <SectionTitle>
                Ready Stock Availability – Special Alloy Pipes
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
              <SectionTitle>Equivalent Grades: Specialty Alloys</SectionTitle>
              <Table
                headers={["Material", "Standard", "UNS", "Werkstoff Nr."]}
                rows={productData.equivalentGrades.map((item) => [
                  item.material,
                  item.standard,
                  item.uns,
                  item.werkstoff,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>
                Chemical Composition of Specialty Alloy Pipes
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Ni",
                  "Cr",
                  "Fe",
                  "Mo",
                  "Mn",
                  "Si",
                  "C",
                  "Other Elements",
                ]}
                rows={productData.chemicalComposition.map((item) => [
                  item.grade,
                  item.ni,
                  item.cr,
                  item.fe,
                  item.mo,
                  item.mn,
                  item.si,
                  item.c,
                  item.other,
                ])}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>
                Mechanical Properties of Specialty Alloy Piping
              </SectionTitle>
              <Table
                headers={[
                  "Material",
                  "Tensile Strength",
                  "Yield Strength (0.2% Offset)",
                  "Elongation",
                  "Density / Hardness",
                ]}
                rows={productData.mechanicalProperties.map((item) => [
                  item.material,
                  item.tensile,
                  item.yield,
                  item.elongation,
                  item.density,
                ])}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Unified Weight Chart: Nimonic, Nichrome, Nitronic, Nilo & Alloy
                286/926
              </SectionTitle>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        NPS
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        OD (in)
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Wall (in)
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sched
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Weight (kg/Mtr)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {productData.weightChart.slice(0, 15).map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-3 py-2 text-sm font-medium text-gray-900">
                          {item.nps}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-600">
                          {item.od}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-600">
                          {item.wall}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-600">
                          {item.sched}
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-600">
                          {item.weight}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                *Full weight chart up to 48″ NB available on request.
              </p>
            </section>

            {/* Supply Range */}
            <section className="mb-8">
              <SectionTitle>
                Special Alloy Pipe Supply Range (Unified)
              </SectionTitle>
              <Table
                headers={[
                  "Product Description (All Grades)",
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
                Unified Special Alloy Pipe Price Range
              </SectionTitle>
              <Table
                headers={[
                  "Diameter (A)",
                  "Diameter (B)",
                  "OD (mm)",
                  "Weight Kg/Mtr",
                  "Wall (mm)",
                  "Price (INR/MTR)",
                  "Price (INR/KG)",
                ]}
                rows={productData.priceRange
                  .slice(0, 12)
                  .map((item) => [
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
                *Note: Prices vary depending on specific alloy grade
                (Nimonic/Nitronic/Nilo/Nichrome). Contact sales for precise
                project-based quotes.
              </p>
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Special Alloy Pipes
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
                Searches Related to Specialty Alloy Pipes
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

export default HighPerformanceAlloyPipes;
