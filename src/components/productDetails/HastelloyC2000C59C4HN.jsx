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

const HastelloyC2000C59C4HN = () => {
  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Hastelloy C2000 / C59 / C4 / H - N Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B622 / ASME SB622 Hastelloy Alloy Pipes – Nickel-Chromium-Molybdenum Alloys for Extreme Corrosion Resistance & High-Temperature Applications",

    technicalOverview: {
      title: "Hastelloy C2000 / C59 / C4 / H - N Pipes: Technical Overview",
      description:
        "Hastelloy C2000, identified as UNS N06200, represents a significant evolutionary step in nickel-chromium-molybdenum alloys. By incorporating a deliberate addition of copper into the chemical matrix, this alloy achieves a unique omni-corrosion resistance. While traditional C-series alloys are often optimized for either oxidizing or reducing environments, the specific chemistry of C2000 allows it to perform exceptionally well in both. It is particularly effective in resisting pitting and crevice corrosion, maintaining high mechanical strength even at elevated temperatures or in aggressive industrial surroundings.",
    },

    keyFeatures: [
      "Nickel-chromium-molybdenum alloys with copper addition (C2000)",
      "Omni-corrosion resistance for oxidizing and reducing environments",
      "Superior resistance to pitting and crevice corrosion",
      "Excellent stability in commercial condensed acids",
      "High mechanical strength at elevated temperatures",
      "Outstanding resistance to chloride-induced corrosion",
      "Excellent corrosion resistance within weldments",
      "High-temperature stability and ductility",
    ],

    applications: [
      "Aerospace and space exploration (rocket motors, spacecraft)",
      "Energy production (gas turbines, coal-fired power plants)",
      "Nuclear reactors and fuel processing",
      "Chemical processing (complex acid systems)",
      "Pharmaceutical reaction vessels",
      "High-performance pumps and turbopump seals",
      "Specialized industrial tooling",
      "Heat exchangers and pressure vessels",
    ],

    stockAvailability: {
      seamless: {
        title: "Seamless Pipes",
        image: seamlessImage,
        items: [
          "UNS N06200 Seamless Pipe",
          "Hastelloy C-2000 Seamless Pipe",
          "Hastelloy C4 Thin Wall Seamless",
          "ASME SB622 Hastelloy C2000",
          "ASTM B622 Hastelloy C2000",
        ],
      },
      welded: {
        title: "Welded Pipes",
        image: weldedImage,
        items: [
          "Hastelloy Alloy C-2000 Welded",
          "Hastelloy H - N Welded Pipe",
          "UNS N06200 Welded Pipe",
          "ASTM B619 C2000 Welded Pipe",
          "ASME SB619 C2000 Welded",
        ],
      },
      erw: {
        title: "ERW Pipes",
        image: erwImage,
        items: [
          "C2000 Hastelloy ERW Pipe",
          "Hastelloy 2.4675 ERW Pipe",
          "UNS N06200 ERW Pipe",
          "C2000 Electric Resistance Welded",
          "ASTM B619 C2000 ERW Pipe",
        ],
      },
      efw: {
        title: "EFW Pipes",
        image: efwImage,
        items: [
          "Hastelloy 2.4675 EFW Pipe",
          "Hastelloy® Alloy C2000 EFW",
          "Hastelloy UNS N06200 EFW Pipe",
          "Hastelloy C-2000 Electric Fusion",
          "Hastelloy C2000 EFW Pipe",
        ],
      },
      round: {
        title: "Round Pipes",
        image: roundImage,
        items: [
          "Hastelloy 2.4675 Round Pipe",
          "ASTM B622 Hastelloy C2000 Round",
          "Hastelloy Alloy C59 Round Pipe",
          "ASME SB622 Hastelloy C2000 Round",
        ],
      },
      hollow: {
        title: "Hollow Pipes",
        image: hollowImage,
        items: [
          "Hastelloy 2.4675 Hollow Pipe",
          "Hastelloy C-2000 Custom Hollow",
          "Alloy C2000 Hollow Section Pipes",
          "Hastelloy Alloy H - N Hollow Pipe",
          "ASME SB622 C2000 Hollow Pipes",
        ],
      },
    },

    equivalentGrades: [
      {
        standard: "Hastelloy C2000",
        uns: "N06200",
        wnr: "2.4675",
      },
    ],

    chemicalComposition: [
      {
        grade: "C2000",
        ni: "Remainder",
        mo: "15.0-17.0",
        cr: "14.5-16.5",
        fe: "4.0-7.0",
        w: "3.0-4.5",
        co: "2.5 max",
        mn: "1.0 max",
        c: ".01 max",
        v: ".35 max",
        p: ".04 max",
        si: ".08 max",
      },
    ],

    mechanicalProperties: [
      {
        grade: "Hastelloy C2000",
        tensile: "690 MPa",
        yield: "310 MPa",
        elongation: "45%",
      },
    ],

    specifications: {
      standard: "ASTM B622, B619 / ASME SB622, SB619",
      seamlessSize: '1/2" NB - 16" NB',
      roundSize: '6" NB - 24" NB',
      weldedSize: '1/2" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, sizes up to 24" NB available',
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      deliveryCondition:
        "Annealed, Pickled, Polished, Bright Annealed, Cold Drawn",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, NDT, Ultrasonic Testing",
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
      {
        nps: "18″",
        od: "18.000",
        odmm: "457",
        wall: "0.375",
        wallmm: "9.525",
        sched: "STD",
        weight: "105.144",
        lbft: "70.588",
      },
      {
        nps: "20″",
        od: "20.000",
        odmm: "508",
        wall: "0.375",
        wallmm: "9.525",
        sched: "20 STD",
        weight: "117.075",
        lbft: "78.598",
      },
      {
        nps: "24″",
        od: "24.000",
        odmm: "610",
        wall: "0.375",
        wallmm: "9.525",
        sched: "20 STD",
        weight: "140.938",
        lbft: "64.618",
      },
      {
        nps: "30″",
        od: "30.000",
        odmm: "762",
        wall: "0.375",
        wallmm: "9.525",
        sched: "STD",
        weight: "176.731",
        lbft: "118.648",
      },
      {
        nps: "36″",
        od: "36.000",
        odmm: "914",
        wall: "0.375",
        wallmm: "9.525",
        sched: "STD",
        weight: "215.525",
        lbft: "142.678",
      },
      {
        nps: "42″",
        od: "42.000",
        odmm: "1067",
        wall: "0.375",
        wallmm: "9.525",
        sched: "STD",
        weight: "248.319",
        lbft: "166.708",
      },
      {
        nps: "48″",
        od: "48.000",
        odmm: "1219",
        wall: "0.375",
        wallmm: "9.525",
        sched: "STD",
        weight: "284.112",
        lbft: "190.738",
      },
    ],

    supplyRange: [
      {
        product: "Hastelloy C2000 / C59 / C4 / H – N Seamless Round Pipe",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product:
          "Hastelloy C2000 / C59 / C4 / H – N Seamless Custom Square Pipe",
        wallThk: "0.05 to 30",
        od: "12.7 * 12.7 to 300 * 300",
      },
      {
        product:
          "Hastelloy C2000 / C59 / C4 / H – N Seamless Custom Rectangular Pipe",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product:
          "Hastelloy C2000 / C59 / C4 / H – N Seamless Colour Coated Pipe",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Hastelloy C2000 / C59 / C4 / H – N Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product:
          "Hastelloy C2000 / C59 / C4 / H – N Seamless Electropolished Pipe",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Hastelloy C2000 / C59 / C4 / H – N Seamless Slot Round Pipe",
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
      "C2000 Welded Hastelloy Pipe",
      "Hastelloy C-2000 Large Diameter Seamless",
      "INOX 2.4675 Hastelloy Pipe Exporter",
      "C2000 Welded Nicel Alloy Pipe",
      "Hastelloy® C2000 Pipes Supplier Mumbai",
      "Hastelloy C2000 Pipes Manufacturer India",
      "Hastelloy 2.4675 Pipe Cut To Size",
      "Hastelloy C2000 Customized Pipes",
      "Hastelloy H – N Welded Pipes Exporter",
      "Hastelloy C2000 ERW Pipe Stockholder",
      "Hastelloy Alloy C2000 Pipes Supplier",
      "Type C2000 Hastelloy Hollow Pipes",
      "C2000 Hastelloy Custom Pipe",
      "Hastelloy C2000 Thin Wall Pipe Stockists",
      "C2000 Hastelloy Custom Pipes Dealer",
      "Hastelloy® Alloy C2000 Pipes Stockist",
      "C2000 Hastelloy Welded Pipe",
      "Hastelloy H – N Schedule 80 Pipe",
      "ASME SB622 Hastelloy C2000 Cold Drawn",
      "ASTM B622 C2000 Pipes at Best Price",
      "Nickel Alloy C-2000 Pipes",
      "B622 Hastelloy Grade C2000 Seamless",
      "C2000 Hastelloy Alloy Pipe",
      "Hastelloy C2000 Seamless Pipes",
      "C2000 Alloy Thick Wall Pipes",
      "Hastelloy C2000 Cold Drawn Dealer",
      "Alloy C2000 Hollow Pipe",
      "Hastelloy Grade C2000 Industrial Pipes",
      "Hastelloy C59 Pipes Supplier",
      "Suppliers of C2000 Hastelloy ERW Pipes",
      "C2000 Hastelloy Pipes",
      "Hastelloy® Alloy C2000 Pipes",
      "ASTM B622 Hastelloy C2000 Custom",
      "C2000 Nickel Alloy Pipe Supplier",
    ],

    relatedSearches: [
      "View Schedule Chart And Updated Price List Of Hastelloy C4 Custom Pipe",
      "Hastelloy H – N Pipe Weight Per Meter",
      "C2000 Hastelloy Pipe Specifications",
      "Hastelloy C2000 Pipe Price In India",
      "Hastelloy C2000 Pipe Catalogue",
      "3 Inch C2000 Hastelloy Pipe Manufacturers",
      "Hastelloy C2000 Pipe Supplier In India",
      "C2000 Alloy Pipe Sizes",
      "Hastelloy C2000 Pipe Weight Chart",
      "ASTM B622 C2000 Hastelloy Seamless Pipe",
      "C2000 Alloy Threaded Pipe",
      "C2000 Hastelloy Pipe Price List",
      "Hastelloy C2000 Pipe Exporter",
      "C2000 Hastelloy Pipe In Pune",
      "Hastelloy C2000 Pipe Per Kg",
      "C2000 Hastelloy Pipe Price Per Kg",
      "Hastelloy Pipe Grade C2000 Price List",
      "C2000 Nickel Alloy Pipe Price List",
      "Nickel Alloy C2000 Pipe Price List",
      "Hastelloy C2000 Pipe Price List Pdf",
      "Price Of Hastelloy Pipe C2000",
      "Hastelloy C2000 Pipe Price",
      "Alloy C2000 Seamless Pipe Exporter",
      "Hastelloy C59 EFW large diameter pipes",
      "16 Gauge C2000 Alloy Pipe",
      "Hastelloy C2000 Welded Pipe Exporter",
      "Hastelloy C2000 Pipe Schedule",
      "ASME SB622 C2000 Alloy Pipe",
      "Hastelloy C2000 Pipe Supplier In Mumbai",
      "Hastelloy H – N Seamless Pipes Exporter",
      "Hastelloy C2000 Welded Pipe Supplier",
      "Hastelloy C2000 Pipe Pressure Rating",
      "Nickel Alloy C2000 Round Pipe Supplier",
      "Alloy C2000 Pipe Price List In India",
      "Hastelloy Pipe C2000 Price",
      "C2000 Hastelloy Pipe Dimensions",
      "Hastelloy H – N Seamless Pipe Supplier",
      "UNS N06200 Pipe",
      "Hastelloy C4 Pipe Price Per Meter",
      "Hastelloy C2000 Pipe Price Per Kg In India",
      "C2000 Hastelloy Pipe Specifications Pdf",
      "Hastelloy C2000 Round Pipe Supplier",
      "Hastelloy® C2000 EFW Pipe Supplier",
      "Alloy C2000 Pipe Price Per Kg In India",
      "C2000 Seamless Pipe Stockist",
      "Cost Of C2000 Hastelloy Pipe",
      "Hastelloy® Alloy C2000 Pipe Weight Chart",
      "Top 100 Hastelloy Pipe Dealers In Pune",
      "Hastelloy C-2000 Pipe Price List",
      "Hastelloy 2.4675 Custom Pipe Suppliers In Gujarat",
      "ASTM B622 C2000 Pipe",
      "Hastelloy C59 EFW Pipe Supplier",
      "Hastelloy C2000 Pipe Chemical Composition",
      "Hastelloy C2000 Exhaust Pipes Supplier In India",
      "Hastelloy Pipe Price 20 Feet",
      "Buy Hastelloy Pipe C2000 Welded Schedule 40",
      "ASTM B622 Alloy C2000 Pipes",
      "Hastelloy C2000 Pipe Roughness",
      "Hastelloy C59 Pipe Manufacturers In India",
      "Hastelloy C2000 Pipes Manufacturer In Mumbai",
      "Hastelloy C2000 Pipe Weight Calculator",
      "Hastelloy C2000 Pipe Price List",
      "Hastelloy C4 Pipe Dimensions",
      "ASTM B622 C2000 Seamless Pipe",
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
      { name: "Buttweld Fittings", slug: "fittings" },
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

            {/* Characteristics of C59 and C4 */}
            <section className="mb-8">
              <SectionTitle>
                Characteristics of Hastelloy C59 and C4 Pipes
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hastelloy C59, known as UNS N06059, is specifically engineered
                to solve corrosion problems in the most severe industrial
                settings. One of its standout features is its excellent
                corrosion resistance within weldments, which prevents the common
                issue of intergranular corrosion in the heat-affected zone. This
                alloy is remarkably effective against oxidizing and reducing
                mediums, including concentrated nitric acid and fuel gas
                environments found in coal-fired power plants.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hastelloy C4, designated as UNS N06455, is another critical
                variant known for its outstanding high-temperature stability.
                Its mechanical properties, including high tensile and yield
                strength combined with excellent elongation, make it highly
                ductile and reliable. It is specifically designed to resist the
                formation of grain-boundary precipitates in the weld
                heat-affected zone, ensuring the material remains
                corrosion-resistant even after extensive thermal processing.
              </p>
            </section>

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>
                Industrial Applications and Global Use Cases
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                Due to their extreme resistance to heat and chemicals, these
                Hastelloy grades are utilized across various high-tech and
                heavy-industry sectors. In the aerospace and space exploration
                fields, they are used in rocket motors, spacecraft, and space
                shuttles where material failure is not an option. In energy
                production, they are critical for gas turbines and coal-fired
                power plant components exposed to corrosive fuel gases.
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
                Specification of Hastelloy C2000 / C59 / C4 / H - N Pipes
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
                Stock Availability of Hastelloy C2000 / C59 / C4 / H – N Pipes
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
                Equivalent Grades Hastelloy C2000 / C59 / C4 / H - N Pipes
              </SectionTitle>
              <Table
                headers={["Standard", "UNS", "WNR."]}
                rows={productData.equivalentGrades.map((item) => [
                  item.standard,
                  item.uns,
                  item.wnr,
                ])}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>
                Chemical Composition of Hastelloy C2000 / C59 / C4 / H - N Pipes
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Ni",
                  "Mo",
                  "Cr",
                  "Fe",
                  "W",
                  "Co",
                  "Mn",
                  "C",
                  "V",
                  "P",
                  "Si",
                ]}
                rows={productData.chemicalComposition.map((item) => [
                  item.grade,
                  item.ni,
                  item.mo,
                  item.cr,
                  item.fe,
                  item.w,
                  item.co,
                  item.mn,
                  item.c,
                  item.v,
                  item.p,
                  item.si,
                ])}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>
                Mechanical Properties of Hastelloy C2000 / C59 / C4 / H - N
                Piping
              </SectionTitle>
              <Table
                headers={[
                  "Grade",
                  "Tensile Strength",
                  "Yield Strength",
                  "Elongation at break",
                ]}
                rows={productData.mechanicalProperties.map((item) => [
                  item.grade,
                  item.tensile,
                  item.yield,
                  item.elongation,
                ])}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>
                Hastelloy C2000 / C59 / C4 / H - N Seamless Pipe Weight Chart
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
              <SectionTitle>
                Hastelloy C2000 / C59 / C4 / H - N Pipe Supply Range
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
                Hastelloy C2000 / C59 / C4 / H - N Pipe Price Range
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
                Specialized in Following Hastelloy C2000 / C59 / C4 / H - N
                Pipes
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
                Searches Related to Hastelloy C2000 / C59 / C4 / H - N Pipes
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

export default HastelloyC2000C59C4HN;
