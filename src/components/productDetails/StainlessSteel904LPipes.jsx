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

// Stock Availability Images (replace with actual images)
import seamlessImage from "../../assets/images/stock/seamless.jpg";
import weldedImage from "../../assets/images/stock/welded.jpg";
import erwImage from "../../assets/images/stock/erw.jpg";
import efwImage from "../../assets/images/stock/efw.jpg";
import electropolishImage from "../../assets/images/stock/electropolish.jpg";
import hollowImage from "../../assets/images/stock/hollow.jpg";

const StainlessSteel904LPipes = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Stainless Steel 904L Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A312 / ASME SA312 Stainless Steel 904L Pipes – High-Performance UNS N08904 (1.4539) Alloy for Exceptional Resistance to Sulfuric Acid, Chloride Pitting & Crevice Corrosion",

    technicalOverview: {
      title: "Stainless Steel 904L Pipes: Technical Overview",
      description:
        "Stainless Steel 904L (UNS N08904 / Werkstoff Nr. 1.4539) pipes are high-performance, low-carbon, non-stabilized austenitic stainless steel engineered for severe corrosive environments. The alloy incorporates significant amounts of copper, nickel, and molybdenum. The addition of copper provides exceptional resistance to strong reducing acids, particularly varying concentrations of sulfuric acid. The high nickel and molybdenum content ensures these pipes are non-magnetic and provide superior protection against stress corrosion cracking and localized attacks like chloride pitting and crevice corrosion.",
    },

    keyFeatures: [
      "Exceptional resistance to sulfuric acid and reducing acids",
      "Superior chloride pitting and crevice corrosion resistance",
      "High resistance to stress corrosion cracking",
      "Non-magnetic austenitic structure",
      "Excellent toughness and formability",
      "Low carbon content for fantastic weldability",
      "High tensile and yield strength",
      "Available in seamless, welded, ERW, and EFW configurations",
      "Complies with ASTM A312, A358 / ASME SA312, SA358",
    ],

    applications: [
      "Oil and gas processing plants",
      "Chemical processing industries",
      "Pulp and paper manufacturing",
      "Food processing plants",
      "Water supply systems",
      "Sulfuric acid handling equipment",
      "Pharmaceutical manufacturing",
      "General fabrication in harsh conditions",
    ],

    stockAvailability: {
      seamless: {
        title: "SS 904L Seamless Pipes",
        image: seamlessImage,
        items: [
          "SS 904L Thin Wall Seamless Pipes",
          "ASTM A312 TP904L Seamless Pipe",
          "SS 1.4539 Seamless Pipe",
          "UNS N08904 Seamless Pipe",
          "ASME SA312 TP904L Seamless Pipes",
          "SS 904L Seamless Piping",
        ],
      },
      welded: {
        title: "SS 904L Welded Pipes",
        image: weldedImage,
        items: [
          "SS 1.4539 Welded Pipe",
          "Stainless Steel 904L Welded Pipe",
          "904L Stainless Welded Pipe",
          "SS 904L Welded Piping",
          "SS 904L Thin Wall Welded Pipes",
          "ASME SA312 TP904L Welded Pipes",
          "SUS 904L Welded Pipe",
          "SS 904L Welded Pipe",
        ],
      },
      erw: {
        title: "SS 904L ERW Pipes",
        image: erwImage,
        items: [
          "SS 1.4539 ERW Pipe",
          "904L Stainless ERW Pipe",
          "Stainless Steel 904L ERW Pipe",
          "SS 904L Electric Resistance Welded Pipe",
          "ASTM A312 TP904L ERW Pipe",
          "ANSI B36.10M 904L ERW Pipe",
          "ASME SA312 TP904L ERW Pipes",
        ],
      },
      efw: {
        title: "SS 904L EFW Pipes",
        image: efwImage,
        items: [
          "SUS 904L EFW Pipe",
          "UNS N08904 EFW Pipe",
          "ASTM A312 TP904L EFW Pipe",
          "904L Stainless Steel Electric Fusion Welding Pipe",
          "Stainless Steel 904L EFW Pipe",
          "ANSI B36.10M 904L EFW Pipe",
          "SS 1.4539 EFW Pipe",
          "SS 904L EFW Pipes",
        ],
      },
      electropolish: {
        title: "SS 904L Electropolish Pipes",
        image: electropolishImage,
        items: [
          "Stainless Steel 904L Electropolish Pipe",
          "UNS N08904 Electropolish Pipe",
          "SS 1.4539 Electropolish Pipe",
          "ANSI B36.10M 904L Electropolish Pipe",
          "Stainless Steel 904L Polished Pipe",
          "SS 904L Electropolish Pipe",
          "904L Stainless Electropolish Pipe",
          "SS 904L Thin Wall Electropolish Pipes",
        ],
      },
      hollow: {
        title: "SS 904L Hollow Pipes",
        image: hollowImage,
        items: [
          "UNS N08904 Hollow Pipe",
          "Stainless Steel 904L Round Hollow Pipe",
          "SS 1.4539 Hollow Pipe",
          "Stainless Steel 904L Square Hollow Pipe",
          "SS 904L Hollow Pipe",
          "ASTM A312 TP904L Hollow Pipe",
          "ASME SA312 TP904L Hollow Pipes",
          "904L Stainless Hollow Pipe",
        ],
      },
    },

    specifications: {
      standard: "ASTM A312, A358 / ASME SA312, SA358",
      dimensionalSpec: "ANSI/ASME B36.19M, ANSI/ASME B36.10M",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange:
        '6.00 mm OD up to 914.4 mm OD, Sizes up to 24" NB available Ex-stock',
      manufacturingShapes: "Hydraulic, Round, Rectangle, Square, Hex, Honed",
      scheduleRange:
        "SCH 5, SCH 10, SCH 40, SCH 80, SCH 80S, SCH 160, SCH XXS, SCH XS",
      pipeEnds:
        "Plain End, Beveled End, Threaded One End, TBE (Threaded Both Ends)",
      deliveryCondition:
        "Annealed and Pickled, Polished, Bright Annealed, Cold Drawn",
      outsideFinish:
        "2B, No.4, No.1, No.8 Mirror Finish, Finish as per customer Requirements",
      valueAddedServices:
        "Cutting, Beveling, Polishing, Threading, Destructive, Non Destructive, Ultrasonic Testing",
      supplyRange: "OD: 6mm to 630mm, WT: 0.05mm to 30mm",
    },

    equivalentGrades: {
      headers: [
        "STANDARD",
        "WERKSTOFF NR.",
        "UNS",
        "JIS",
        "KS",
        "BS",
        "AFNOR",
        "EN",
      ],
      rows: [
        [
          "SS 904L",
          "1.4539",
          "N08904",
          "SUS 904L",
          "STS 317J5L",
          "904S13",
          "Z2 NCDU 25-20",
          "X1NiCrMoCu25-20-5",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "C", "Mn", "Si", "P", "S", "Cr", "Mo", "Ni", "Cu"],
      rows: [
        [
          "SS 904L",
          "0.020 max",
          "2.00 max",
          "1.00 max",
          "0.040 max",
          "0.030 max",
          "19.00–23.00",
          "4.00–5.00",
          "23.00–28.00",
          "1.00–2.00",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength (0.2% Offset)",
        "Elongation",
      ],
      rows: [
        [
          "7.95 g/cm³",
          "1510 °C (2750 °F)",
          "Psi – 75,000, MPa – 485",
          "Psi – 40,000, MPa – 275",
          "20%",
        ],
      ],
    },

    weightChart: {
      headers: [
        "NPS (DN)",
        "WEIGHT LB/FT (KG/M)",
        "SCH",
        "Outside Diameter IN (mm)",
        "ID",
        "WT IN (mm)",
      ],
      rows: [
        [
          "32 (800)",
          "84.085 (126.032)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.025 (6.035)",
        ],
        [
          "32 (800)",
          "95.028 (141.09)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0281 (7.014)",
        ],
        [
          "32 (800)",
          "105.069 (157.025)",
          "10",
          "32.00 (813)",
          ".0.0.0",
          "0.0312 (7.092)",
        ],
        [
          "32 (800)",
          "116.041 (173.035)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0344 (8.074)",
        ],
        [
          "32 (800)",
          "126.078 (188.083)",
          "STD",
          "32.00 (813)",
          "-",
          "0.0375 (9.053)",
        ],
        [
          "32 (800)",
          "137.012 (204.009)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0406 (10.031)",
        ],
        [
          "32 (800)",
          "147.078 (220.01)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0438 (11.013)",
        ],
        [
          "32 (800)",
          "158.008 (235.029)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0469 (11.091)",
        ],
        [
          "32 (800)",
          "168.037 (250.065)",
          "20",
          "32.00 (813)",
          "XS",
          "0.05 (12.07)",
        ],
        [
          "32 (800)",
          "188.087 (281.009)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0562 (14.027)",
        ],
        [
          "32 (800)",
          "209.062 (312.017)",
          "30",
          "32.00 (813)",
          ".0.0.0",
          "0.0625 (15.088)",
        ],
        [
          "32 (800)",
          "230.029 (342.094)",
          "40",
          "32.00 (813)",
          ".0.0.0",
          "0.0688 (17.048)",
        ],
        [
          "32 (800)",
          "250.055 (373.00)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.075 (19.005)",
        ],
        [
          "32 (800)",
          "270.072 (402.094)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0812 (20.062)",
        ],
        [
          "32 (800)",
          "291.014 (433.052)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0875 (22.023)",
        ],
        [
          "32 (800)",
          "311.047 (463.078)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "0.0938 (23.083)",
        ],
        [
          "32 (800)",
          "331.039 (493.035)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "1.00 (25.04)",
        ],
        [
          "32 (800)",
          "351.023 (522.08)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "1.0062 (26.097)",
        ],
        [
          "32 (800)",
          "371.031 (552.088)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "1.0125 (28.058)",
        ],
        [
          "32 (800)",
          "391.03 (582.064)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "1.0188 (30.018)",
        ],
        [
          "32 (800)",
          "410.09 (611.072)",
          ".0.0.0",
          "32.00 (813)",
          ".0.0.0",
          "1.025 (31.075)",
        ],
        [
          "34 (850)",
          "90.02 (134.031)",
          ".0.0.0",
          "34.00 (864)",
          ".0.0.0",
          "0.025 (6.035)",
        ],
        [
          "34 (850)",
          "101.029 (150.088)",
          ".0.0.0",
          "34.00 (864)",
          ".0.0.0",
          "0.0281 (7.014)",
        ],
        [
          "34 (850)",
          "112.036 (167.021)",
          "10",
          "34.00 (864)",
          ".0.0.0",
          "0.0312 (7.092)",
        ],
        [
          "34 (850)",
          "123.077 (184.034)",
          ".0.0.0",
          "34.00 (864)",
          ".0.0.0",
          "0.0344 (8.074)",
        ],
        [
          "34 (850)",
          "134.079 (200.082)",
          "STD",
          "34.00 (864)",
          "-",
          "0.0375 (9.053)",
        ],
      ],
    },

    priceRange: {
      headers: [
        "Diameter (B) INCH",
        "Diameter (A) MM",
        "OD Meter (mm)",
        "SCH 10S",
        "Weight Kg/Mtr",
        "Wall Thk",
        "Price INR/MTR",
        "Price INR/KG",
      ],
      rows: [
        [
          '1/8"',
          "6",
          "10.03",
          "SCH 10S",
          "0.027",
          "1.28",
          "80.5 – 110",
          "300 – 400",
        ],
        [
          '1/4"',
          "8",
          "13.7",
          "SCH 10S",
          "0.049",
          "1.65",
          "110 – 200",
          "200 – 300",
        ],
        [
          '3/8"',
          "10",
          "17.2",
          "SCH 10S",
          "0.063",
          "1.65",
          "169 – 250",
          "250 – 320",
        ],
        [
          '1/2"',
          "15",
          "21.3",
          "SCH 10S",
          "1.02",
          "2.11",
          "234.8 – 289",
          "220 – 320.5",
        ],
        [
          '3/4"',
          "20",
          "26.7",
          "SCH 10S",
          "1.3",
          "2.11",
          "300 – 350",
          "220 – 300",
        ],
        [
          '1"',
          "25",
          "33.4",
          "SCH 10S",
          "2.13",
          "2.77",
          "459.9 – 600",
          "200 – 400",
        ],
        [
          '1 1/4"',
          "32",
          "24.2",
          "SCH 10S",
          "2.73",
          "2.77",
          "527.9 – 600",
          "200 – 250",
        ],
        [
          '1 1/2"',
          "40",
          "48.3",
          "SCH 10S",
          "3.16",
          "2.77",
          "611 – 750",
          "205 – 300",
        ],
        [
          '2"',
          "50",
          "60.03",
          "SCH 10S",
          "3.99",
          "2.77",
          "797.75 – 810",
          "205 – 300",
        ],
        [
          '2 1/2"',
          "65",
          "73",
          "SCH 10S",
          "5.34",
          "3.05",
          "1200.5 – 1300",
          "205 – 300",
        ],
        [
          '3"',
          "80",
          "88.9",
          "SCH 10S",
          "6.56",
          "3.05",
          "1376 – 1566",
          "205 – 300",
        ],
        [
          '3 1/2"',
          "90",
          "101.6",
          "SCH 10S",
          "7.53",
          "3.05",
          "1707.2 – 1890",
          "200 – 350",
        ],
        [
          '4"',
          "100",
          "114.3",
          "SCH 10S",
          "8.5",
          "3.05",
          "1855 – 2000",
          "220 – 300",
        ],
        [
          '5"',
          "125",
          "141.3",
          "SCH 10S",
          "11.74",
          "3.42",
          "2893.7 – 3000",
          "205 – 310",
        ],
        [
          '6"',
          "150",
          "168.3",
          "SCH 10S",
          "14.04",
          "3.4",
          "3010 – 3500",
          "240 – 350",
        ],
        [
          '8"',
          "200",
          "219.1",
          "SCH 10S",
          "20.077",
          "3.76",
          "5200.02 – 5500",
          "220 – 300",
        ],
        [
          '10"',
          "250",
          "273.1",
          "SCH 10S",
          "28.2",
          "4.19",
          "8160 – 9000",
          "300 – 350",
        ],
        [
          '12"',
          "300",
          "323.9",
          "SCH 10S",
          "36.54",
          "4.57",
          "10692.8 – 11000",
          "300 – 350",
        ],
        [
          '14"',
          "350",
          "355.6",
          "SCH 10S",
          "41.99",
          "4.78",
          "12696.5 – 13566",
          "320 – 360",
        ],
        [
          '16"',
          "400",
          "406.4",
          "SCH 10S",
          "48.07",
          "4.78",
          "15026.25 – 17655",
          "325 – 430",
        ],
      ],
    },

    specializedProducts: [
      "Stainless Steel 904L Oval Pipes",
      "SS 904L Hydraulic Pipes Dealer",
      "ASME SA312 SS 904L Cold Drawn Pipes",
      "ASTM A312 904L SS Pipes Best Price",
      "SS 904L Hexagonal Pipes Supplier",
      "Suppliers of 904L Stainless Steel ERW Pipes",
      "INOX 1.4539 Stainless Steel Pipe Exporter",
      "904L Welded SS Pipe Supplier",
      "SS 904L Pipes Supplier in Mumbai",
      "SS 904L Pipes Manufacturer in India",
      "SS 1.4539 Pipe Cut To Size",
      "Stainless Steel 904L Customized Pipes",
      "904L Austenitic Stainless Steel Pipe",
      "SS 904L Mirror Polish Seamless Pipes",
      "904L SS Square Pipes Dealer",
      "Stainless Steel 904L Pipes Stockist",
      "SS 1.4539 Pipes Supplier",
      "Type 904L Stainless Hollow Pipes",
      "SS 904L Polished Pipe",
      "SS Grade 904L Industrial Pipes",
      "Stainless Steel UNS N08904 Pipes",
      "904L Stainless Steel Pipe",
      "ASTM A312 Stainless Steel 904L Square Pipes",
      "904L Stainless Steel Pipe Supplier",
      "904L Stainless Steel Custom Pipe",
      "SS 904L Thin Wall Pipe Stockists",
      "SS 904L Welded Pipes Exporter",
      "904L SS ERW Pipe Stockholder",
      "AISI 904L Stainless Steel Welded Pipe",
      "SS 904L Schedule 80 Pipe",
      "904L Welded Stainless Steel Pipe",
      "TP904L Large Diameter Seamless Pipe",
      "904L Stainless Steel Decorative Pipes",
      "A312 Stainless Grade 904L Seamless Pipes",
    ],

    relatedSearches: [
      "Stainless Steel 904L Pipes Manufacturer In Mumbai",
      "SS 904L Pipe Price",
      "904L SS Pipe Specifications",
      "Top 100 Stainless Steel Pipe Dealers In Pune",
      "SS 904L Pipe Per Kg",
      "AISI 904L Seamless Pipe Stockist",
      "Stainless Steel Pipe Grade 904L Price List",
      "SS 904L Pipe Price Per Kg In India",
      "ASME SA312 Tp 904L Stainless Steel Pipe",
      "Stainless Steel 904L Pipe Manufacturers In India",
      "ASTM A312 Tp321 UNS N08904 Pipe",
      "SS 904L Mirror Polish Pipe Exporter",
      "904L SS Pipe In Pune",
      "ASTM A312 Tp321 Seamless Pipe",
      "Buy Stainless Steel Pipe 904L Welded Schedule 40",
      "904L Stainless Steel Pipe Specifications Pdf",
      "Stainless Steel 904L Pipe Weight Chart",
      "904L Stainless Steel Pipe Price List",
      "SS 904L Pipe Weight Chart",
      "SS 904L ERW Pipe Supplier",
      "3 Inch 904L Stainless Steel Pipe Manufacturers",
      "SS 904L EFW Pipe Supplier",
      "SS 904L Pipe Supplier In Mumbai",
      "Jindal SS 904L Pipe Price List",
      "Stainless Steel 904L Pipe Price Per Kg In India",
      "Authenticate Stainless Steel 904L Seamless Pipes Exporter",
      "Stainless Steel 904L Pipe Weight Per Meter",
      "16 Gauge 904L Stainless Steel Pipe",
      "SS 904L Stainless Steel Pipe Price Per Kg",
      "Stainless Steel 904L EFW Pipe Supplier",
      "Stainless Steel 904L ERW Pipe Supplier",
      "Stainless Steel 904L Welded Pipe Supplier",
      "SS 904L Pipe Chemical Composition",
      "ASTM A312 Tp321 Welded Pipe",
      "Jindal SS 904L Welded Pipe Exporter",
      "Jindal Stainless Steel 904L Pipe Price List Pdf",
      "Price Of Stainless Steel Pipe 904L",
      "Stainless Steel 904L Pipe Pressure Rating",
      "Stainless Steel 904L Seamless Pipes Supplier In India",
      "Stainless Steel 904L Pipe Catalogue",
      "Stainless Steel 904L Pipe Price List In India",
      "Jindal Stainless Steel 904L Pipe Price List",
      "Stainless Steel 904L Pipe Supplier In India",
      "Stainless Steel 904L Seamless Pipe Supplier",
      "View Schedule Chart And Updated Price List Of SS 904L Rectangular Pipe",
      "SS 904L Seamless Pipe Exporter",
      "Cost Of 904L SS Pipe",
      "Stainless Steel 904L Pipe Dimensions",
      "ASTM A312 Tp321 Pipe",
      "SS 1.4539 Square Pipe Suppliers In Gujarat",
      "Stainless Steel 904L Pipe Weight Calculator",
      "Stainless Steel 904L Pipe Price Per Meter",
      "Stainless Steel 904L Pipe Schedule",
      "Jindal Steel Pipe 904L Price",
      "Stainless Steel 904L Pipe Price In India",
      "Stainless Steel Pipe Price 20 Feet",
      "Stainless Steel 904L Pipe Roughness",
      "904L SS Pipe Price List",
      "SS 904L Pipe Price List",
      "904L Stainless Steel Pipe Sizes",
      "Jindal SS 904L Pipe Weight Chart",
      "904L Stainless Steel Pipe Dimensions",
      "Austenitic Stainless Steel 904L Pipes",
      "904L Stainless Steel Threaded Pipe",
    ],

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

            {/* Applications */}
            <section className="mb-8">
              <SectionTitle>Applications in Industrial Sectors</SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The extended functionality and superior surface finish of our SS
                904L pipes make them a top choice for mission-critical
                applications in the oil and gas, chemical processing, and pulp
                and paper industries. They are also widely utilized in water
                supply systems, food processing plants, and general fabrication
                due to their robust construction and reliability in harsh
                conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
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

            {/* Stock Availability */}
            <section className="mb-8">
              <SectionTitle>Stock Availability of SS 904L Pipes</SectionTitle>
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

            {/* Specifications */}
            <section className="mb-8">
              <SectionTitle>
                Specification of Stainless Steel 904L Pipes
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

            {/* Equivalent Grades */}
            <section className="mb-8">
              <SectionTitle>Equivalent Grades</SectionTitle>
              <Table
                headers={productData.equivalentGrades.headers}
                rows={productData.equivalentGrades.rows}
              />
            </section>

            {/* Chemical Composition */}
            <section className="mb-8">
              <SectionTitle>Chemical Composition</SectionTitle>
              <Table
                headers={productData.chemicalComposition.headers}
                rows={productData.chemicalComposition.rows}
              />
            </section>

            {/* Mechanical Properties */}
            <section className="mb-8">
              <SectionTitle>Mechanical Properties</SectionTitle>
              <Table
                headers={productData.mechanicalProperties.headers}
                rows={productData.mechanicalProperties.rows}
              />
            </section>

            {/* Weight Chart */}
            <section className="mb-8">
              <SectionTitle>Weight Chart (Sample)</SectionTitle>
              <Table
                headers={productData.weightChart.headers}
                rows={productData.weightChart.rows}
              />
              <p className="text-xs text-gray-500 mt-2">
                * Full weight chart available upon request for all sizes up to
                48" NB.
              </p>
            </section>

            {/* Price Range */}
            <section className="mb-8">
              <SectionTitle>Price Range (Indicative)</SectionTitle>
              <Table
                headers={productData.priceRange.headers}
                rows={productData.priceRange.rows}
              />
              <p className="text-xs text-gray-500 mt-2">
                * Prices are indicative and subject to change based on market
                conditions and order quantity.
              </p>
            </section>

            {/* Specialized Products */}
            <section className="mb-8">
              <SectionTitle>
                Specialized in Following Stainless Steel 904L Pipes
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
                Searches Related to Stainless Steel 904L Pipes
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

export default StainlessSteel904LPipes;
