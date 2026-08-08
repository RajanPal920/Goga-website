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

const StainlessSteel321Pipes = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Stainless Steel 321 Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A312 / ASME SA312 Stainless Steel 321 Pipes – High-Performance UNS S32100 (1.4541) Titanium-Stabilized Alloy for Exceptional Resistance to Intergranular Corrosion in High-Temperature Applications",

    technicalOverview: {
      title: "Stainless Steel 321 Pipes: Technical Overview",
      description:
        "Stainless Steel 321 (UNS S32100 / Werkstoff Nr. 1.4541) pipes are high-performance, titanium-stabilized austenitic stainless steel engineered for high-heat environments where stabilization is critical. The addition of titanium provides remarkable resistance to intergranular corrosion during chromium carbide precipitation, making it superior for continuous service at temperatures ranging from 800°F to 1500°F (427°C to 816°C). Unlike other grades, SS 321 is developed to increase creep resistance and structural stability, ensuring it remains robust under stress ruptures and high-pressure conditions.",
    },

    keyFeatures: [
      "Titanium-stabilized for excellent resistance to intergranular corrosion",
      "Superior performance at 800°F to 1500°F (427°C to 816°C)",
      "Increased creep resistance and structural stability",
      "Excellent resistance to polythionic acid stress corrosion cracking",
      "High oxidation resistance up to 1600°F",
      "Good formability through cold working",
      "Excellent weldability using standard shop fabrication procedures",
      "Non-contaminating properties for food and pharmaceutical applications",
      "Complies with ASTM A312, A358 / ASME SA312, SA358",
    ],

    applications: [
      "Aerospace piston engine manifolds and exhaust stacks",
      "Expansion joints and thermal oxidizers",
      "Food storage and processing equipment",
      "Hydrocarbon and refinery applications",
      "Chloride-free caustic solutions",
      "Low-temperature services",
      "High-temperature chemical processing",
      "Power generation and heat exchangers",
    ],

    stockAvailability: {
      seamless: {
        title: "SS 321 Seamless Pipes",
        image: seamlessImage,
        items: [
          "SS 321 Seamless Piping",
          "UNS S32100 Seamless Pipe",
          "ASME SA312 TP321 Seamless Pipes",
          "SS 321 Thin Wall Seamless Pipes",
          "ASTM A312 TP321 Seamless Pipe",
          "SUS 321 Seamless Pipe",
          "ANSI B36.10M 321 Seamless Pipe",
        ],
      },
      welded: {
        title: "SS 321 Welded Pipes",
        image: weldedImage,
        items: [
          "ASME SA312 TP321 Welded Pipes",
          "SUS 321 Welded Pipe",
          "SS 321 Welded Pipe",
          "SS 321 Welded Piping",
          "Stainless Steel 321 Welded Pipe",
          "321 Stainless Welded Pipe",
          "SS 1.4541 Welded Pipe",
          "SS 321 Thin Wall Welded Pipes",
        ],
      },
      erw: {
        title: "SS 321 ERW Pipes",
        image: erwImage,
        items: [
          "321 Stainless ERW Pipe",
          "Stainless Steel 321 ERW Pipe",
          "ASTM A312 TP321 ERW Pipe",
          "ANSI B36.10M 321 ERW Pipe",
          "SS 1.4541 ERW Pipe",
          "ASME SA312 TP321 ERW Pipes",
          "SS 321 Electric Resistance Welded Pipe",
        ],
      },
      efw: {
        title: "SS 321 EFW Pipes",
        image: efwImage,
        items: [
          "SS 1.4541 EFW Pipe",
          "ASTM A312 TP321 EFW Pipe",
          "SUS 321 EFW Pipe",
          "SS 321 EFW Pipe",
          "Stainless Steel 321 EFW Pipe",
          "SS 321 Electric Fusion Welding Pipe",
          "ASME SA312 TP321 EFW Pipes",
        ],
      },
      electropolish: {
        title: "SS 321 Electropolish Pipes",
        image: electropolishImage,
        items: [
          "SS 1.4541 Electropolish Pipe",
          "SS 321 Thin Wall Electropolish Pipes",
          "321 Stainless Electropolish Pipe",
          "ASTM A312 TP321 Electropolish Pipe",
          "Stainless Steel 321 Polished Pipe",
          "ANSI B36.10M 321 Electropolish Pipe",
          "SS 321 Electropolish Pipes",
        ],
      },
      hollow: {
        title: "SS 321 Hollow Pipes",
        image: hollowImage,
        items: [
          "Stainless Steel 321 Round Hollow Pipe",
          "ANSI B36.10M 321 Hollow Pipe",
          "UNS S32100 Hollow Pipe",
          "Stainless Steel 321 Square Hollow Pipe",
          "SS 1.4541 Hollow Pipe",
          "ASME SA312 TP321 Hollow Pipes",
          "321 Stainless Hollow Pipe",
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
      headers: ["STANDARD", "WERKSTOFF NR.", "UNS", "JIS", "EN"],
      rows: [["SS 321", "1.4541", "S32100", "SUS 321", "X6CrNiTi18-10"]],
    },

    chemicalComposition: {
      headers: ["Grade", "C", "Mn", "Si", "P", "S", "Cr", "Mo", "Ni", "Ti"],
      rows: [
        [
          "SS 321",
          "0.08 max",
          "2.0 max",
          "1.0 max",
          "0.045 max",
          "0.030 max",
          "17.00–19.00",
          "0.10 max",
          "9.00–12.00",
          "5(C+N) – 0.70 max",
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
          "8.0 g/cm³",
          "1457 °C (2650 °F)",
          "Psi – 75000, MPa – 515",
          "Psi – 30000, MPa – 205",
          "35%",
        ],
      ],
    },

    weightChart: {
      headers: [
        "NPS (DN)",
        "Weight LB/FT (KG/M)",
        "SCH",
        "OD IN (mm)",
        "ID",
        "WT IN (mm)",
      ],
      rows: [
        [
          "32 (800)",
          "84.085 (126.03)",
          "-",
          "32.00 (813)",
          "-",
          "0.025 (6.035)",
        ],
        [
          "32 (800)",
          "95.028 (141.09)",
          "-",
          "32.00 (813)",
          "-",
          "0.0281 (7.014)",
        ],
        [
          "32 (800)",
          "105.069 (157.02)",
          "10",
          "32.00 (813)",
          "-",
          "0.0312 (7.092)",
        ],
        [
          "32 (800)",
          "116.041 (173.03)",
          "-",
          "32.00 (813)",
          "-",
          "0.0344 (8.074)",
        ],
        [
          "32 (800)",
          "126.078 (188.08)",
          "STD",
          "32.00 (813)",
          "-",
          "0.0375 (9.053)",
        ],
        [
          "32 (800)",
          "137.012 (204.01)",
          "-",
          "32.00 (813)",
          "-",
          "0.0406 (10.031)",
        ],
        [
          "32 (800)",
          "147.078 (220.01)",
          "-",
          "32.00 (813)",
          "-",
          "0.0438 (11.013)",
        ],
        [
          "32 (800)",
          "158.008 (235.03)",
          "-",
          "32.00 (813)",
          "-",
          "0.0469 (11.091)",
        ],
        [
          "32 (800)",
          "168.037 (250.06)",
          "20",
          "32.00 (813)",
          "XS",
          "0.05 (12.07)",
        ],
        [
          "32 (800)",
          "188.087 (281.01)",
          "-",
          "32.00 (813)",
          "-",
          "0.0562 (14.027)",
        ],
        [
          "32 (800)",
          "209.062 (312.01)",
          "30",
          "32.00 (813)",
          "-",
          "0.0625 (15.088)",
        ],
        [
          "32 (800)",
          "230.029 (342.09)",
          "40",
          "32.00 (813)",
          "-",
          "0.0688 (17.048)",
        ],
        [
          "32 (800)",
          "250.055 (373.00)",
          "-",
          "32.00 (813)",
          "-",
          "0.075 (19.005)",
        ],
        [
          "32 (800)",
          "270.072 (402.09)",
          "-",
          "32.00 (813)",
          "-",
          "0.0812 (20.062)",
        ],
        [
          "32 (800)",
          "291.014 (433.05)",
          "-",
          "32.00 (813)",
          "-",
          "0.0875 (22.023)",
        ],
        [
          "32 (800)",
          "311.047 (463.08)",
          "-",
          "32.00 (813)",
          "-",
          "0.0938 (23.083)",
        ],
        [
          "32 (800)",
          "331.039 (493.03)",
          "-",
          "32.00 (813)",
          "-",
          "1.00 (25.04)",
        ],
        [
          "32 (800)",
          "351.023 (522.08)",
          "-",
          "32.00 (813)",
          "-",
          "1.0062 (26.097)",
        ],
        [
          "32 (800)",
          "371.031 (552.09)",
          "-",
          "32.00 (813)",
          "-",
          "1.0125 (28.058)",
        ],
        [
          "32 (800)",
          "391.03 (582.06)",
          "-",
          "32.00 (813)",
          "-",
          "1.0188 (30.018)",
        ],
        [
          "32 (800)",
          "410.09 (611.07)",
          "-",
          "32.00 (813)",
          "-",
          "1.025 (31.075)",
        ],
        [
          "34 (850)",
          "90.02 (134.03)",
          "-",
          "34.00 (864)",
          "-",
          "0.025 (6.035)",
        ],
        [
          "34 (850)",
          "101.029 (150.09)",
          "-",
          "34.00 (864)",
          "-",
          "0.0281 (7.014)",
        ],
        [
          "34 (850)",
          "112.036 (167.02)",
          "10",
          "34.00 (864)",
          "-",
          "0.0312 (7.092)",
        ],
        [
          "34 (850)",
          "123.077 (184.03)",
          "-",
          "34.00 (864)",
          "-",
          "0.0344 (8.074)",
        ],
        [
          "34 (850)",
          "134.079 (200.08)",
          "STD",
          "34.00 (864)",
          "-",
          "0.0375 (9.053)",
        ],
      ],
    },

    priceRange: {
      headers: [
        "Designation (INCH)",
        "Designation (MM)",
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
      "SS 321 Pipes Supplier in Mumbai",
      "SS 321 Pipes Manufacturer in India",
      "Stainless Steel 1.4541 Pipe Cut To Size",
      "Stainless Steel 321 Customized Pipes",
      "Stainless Steel 321 Oval Pipes",
      "Stainless Steel 321 Hydraulic Pipes Dealer",
      "ASTM A312 Stainless Steel 321 Square Pipes",
      "321 Stainless Steel Pipe Supplier",
      "321 Stainless Steel Custom Pipe",
      "SS 321 Thin Wall Pipe Stockists",
      "Stainless Steel 321 Welded Pipes Exporter",
      "321 Stainless Steel ERW Pipe Stockholder",
      "SS 1.4541 Pipes Supplier",
      "Type 321 Stainless Hollow Pipes",
      "SS 321 Polished Pipe",
      "SS Grade 321 Industrial Pipes",
      "321 Austenitic Stainless Steel Pipe",
      "Stainless Steel 321 Mirror Polish Seamless Pipes",
      "321 SS Square Pipes Dealer",
      "Stainless Steel 321 Pipes Stockist",
      "AISI 321 Stainless Steel Welded Pipe",
      "SS 321 Schedule 80 Pipe",
      "ASME SA312 SS 321 Cold Drawn Pipes",
      "ASTM A312 321 SS Pipes at Best Price",
      "SS 321 Hexagonal Pipes Supplier",
      "Suppliers of 321 Stainless ERW Pipes",
      "321 Welded Stainless Steel Pipe",
      "TP321 Large Diameter Seamless Pipe",
      "INOX 1.4541 Stainless Steel Pipe Exporter",
      "321 Welded SS Pipe Supplier",
      "Stainless Steel UNS S32100 Pipes",
      "321 Stainless Steel Pipe",
      "321 Stainless Steel Decorative Pipes",
      "A312 Stainless Steel Grade 321 Pipes",
    ],

    relatedSearches: [
      "Stainless Steel 321 Pipe Catalogue",
      "AISI 321 Seamless Pipe Stockist",
      "Stainless Steel 321 Seamless Pipe Supplier",
      "Stainless Steel 321 Pipe Price Per Meter",
      "Stainless Steel 321 Pipe Price List In India",
      "Stainless Steel 321 Pipe Dimensions",
      "Authenticate Stainless Steel 321 Seamless Pipes Exporter",
      "Stainless Steel 321 Pipe Price Per Kg In India",
      "ASTM A312 Tp321 Seamless Pipe",
      "321 Stainless Steel Pipe Price List",
      "321 SS Pipe Price List",
      "Jindal SS 321 Pipe Price List",
      "Stainless Steel 321 Pipe Supplier In India",
      "SS 1.4541 Square Pipe Suppliers In Gujarat",
      "SS 321 Pipe Weight Chart",
      "Jindal SS 321 Pipe Weight Chart",
      "Stainless Steel 321 Pipe Schedule",
      "Stainless Steel 321 Mirror Polish Pipe Exporter",
      "Stainless Steel 321 Pipe Weight Per Meter",
      "SS 321 EFW Pipe Supplier",
      "Stainless Steel 321 Pipe Weight Calculator",
      "SS 321 Pipe Chemical Composition",
      "321 Stainless Steel Pipe Dimensions",
      "SS 321 Seamless Pipe Exporter",
      "Austenitic Stainless Steel 321 Pipes",
      "3 Inch 321 Stainless Steel Pipe Manufacturers",
      "16 Gauge 321 Stainless Steel Pipe",
      "Cost Of 321 Stainless Steel Pipe",
      "Jindal Stainless Steel 321 Pipe Price List",
      "Stainless Steel 321 Pipe Manufacturers In India",
      "321 Stainless Steel Threaded Pipe",
      "Stainless Steel 321 Pipes Manufacturer In Mumbai",
      "Top 100 Stainless Steel Pipe Dealers In Pune",
      "Stainless Steel 321 Pipe Roughness",
      "Stainless Steel Pipe Grade 321 Price List",
      "321 Stainless Steel Pipe In Pune",
      "Stainless Steel 321 EFW Pipe Supplier",
      "SS 321 Stainless Steel Pipe Price Per Kg",
      "SS 321 Pipe Price List",
      "ASTM A312 Tp321 Welded Pipe",
      "321 SS Pipe Specifications",
      "View Schedule Chart And Updated Price List Of SS 321 Rectangular Pipe",
      "Stainless Steel 321 ERW Pipe Supplier",
      "Stainless Steel 321 Pipe Price",
      "Stainless Steel 321 Pipe Pressure Rating",
      "Stainless Steel 321 Pipe Weight Chart",
      "Stainless Steel 321 Seamless Pipes Supplier In India",
      "Stainless Steel Pipe Price 20 Feet",
      "SS 321 Pipe Supplier In Mumbai",
      "SS 321 ERW Pipe Supplier",
      "321 Stainless Steel Pipe Specifications Pdf",
      "Stainless Steel 321 Pipe Per Kg",
      "Buy Stainless Steel Pipe 321 Welded Schedule 40",
      "Stainless Steel 321 Welded Pipe Supplier",
      "ASME SA312 Tp 321 Stainless Steel Pipe",
      "Price Of Stainless Steel Pipe 321",
      "SS 321 Pipe Price Per Kg In India",
      "ASTM A312 Tp321 Pipe",
      "Jindal Steel Pipe 321 Price",
      "Jindal Stainless Steel 321 Pipe Price List Pdf",
      "Jindal SS 321 Welded Pipe Exporter",
      "ASTM A312 Tp321 UNS S32100 Pipe",
      "Stainless Steel 321 Pipe Price In India",
      "321 Stainless Steel Pipe Sizes",
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
      { name: "Flats & Pairs", slug: "patta-patti" },
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
              <SectionTitle>
                Applications in High-Temperature Sectors
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a leading TP321 stainless steel pipe exporter in India, we
                supply premium-grade materials for mission-critical sectors
                including aerospace, where they are utilized in piston engine
                manifolds and exhaust stacks. They are also widely employed in
                expansion joints, thermal oxidizers, and food storage equipment
                due to their non-contaminating properties.
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
              <SectionTitle>Stock Availability of SS 321 Pipes</SectionTitle>
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
                Specification of Stainless Steel 321 Pipes
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
                Specialized in Following Stainless Steel 321 Pipes
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
                Searches Related to Stainless Steel 321 Pipes
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

export default StainlessSteel321Pipes;
