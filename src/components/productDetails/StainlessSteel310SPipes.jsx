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

const StainlessSteel310SPipes = () => {
  // ===============================
  // DATA - From raymondispat.com
  // ===============================

  const productData = {
    title: "Stainless Steel 310S Pipes Supplier",
    subtitle:
      "Premium Quality ASTM A312 / ASME SA312 Stainless Steel 310S Pipes – High-Performance Heat-Resistant UNS S31008 (1.4845) Alloy for Exceptional Oxidation Resistance up to 2000°F (1093°C)",

    technicalOverview: {
      title: "Stainless Steel 310S Pipes: Technical Overview",
      description:
        "Stainless Steel 310S (UNS S31008 / Werkstoff Nr. 1.4845) pipes are high-performance, heat-resistant austenitic alloys engineered for high-temperature and high-pressure industrial environments. As an austenitic heat-resistant alloy, Grade 310S is identified for its reliable performance and exceptional oxidation resistance under mildly cyclic conditions up to 2000°F (1093°C). These pipes possess a robust chemical composition, featuring a minimum of 24% chromium and 19% nickel, which provides superior surface finishes and higher structural strength compared to standard grades. With a minimum yield strength of 205 MPa and a tensile strength of 520 MPa, our SS 310S pipes offer the mechanical resilience required for the most demanding thermal processing applications.",
    },

    keyFeatures: [
      "Exceptional oxidation resistance up to 2000°F (1093°C)",
      "High chromium (24-26%) and nickel (19-22%) content for superior strength",
      "Excellent performance in high-temperature and high-pressure environments",
      "Superior surface finish and structural integrity",
      "Minimum yield strength of 205 MPa and tensile strength of 520 MPa",
      "Good weldability with standard electrodes and filler metals",
      "High resistance to thermal fatigue and cyclic heating",
      "Excellent formability and fabricability",
      "Complies with ASTM A312, A358 / ASME SA312, SA358",
    ],

    applications: [
      "Heat exchangers and thermal processing equipment",
      "Power plants and refineries",
      "Chemical processing industries",
      "Marine and aerospace sectors",
      "Shipbuilding and naval applications",
      "Paper and pulp industries",
      "High-temperature furnace components",
      "Exhaust systems and manifolds",
    ],

    stockAvailability: {
      seamless: {
        title: "SS 310S Seamless Pipes",
        image: seamlessImage,
        items: [
          "ASME SA312 TP310S Seamless Pipes",
          "SS 310S Thin Wall Seamless Pipes",
          "Stainless Steel 310S Seamless Pipe",
          "ASTM A312 TP310S Seamless Pipe",
          "ANSI B36.10M 310S Seamless Pipe",
          "UNS S31008 Seamless Pipe",
          "SS 310S Seamless Piping",
          "SUS 310S Seamless Pipe",
        ],
      },
      welded: {
        title: "SS 310S Welded Pipes",
        image: weldedImage,
        items: [
          "SS 310S Thin Wall Welded Pipes",
          "310S Stainless Welded Pipe",
          "SS 310S Welded Pipe",
          "UNS S31008 Welded Pipe",
          "SUS 310S Welded Pipe",
          "Stainless Steel 310S Welded Pipe",
          "SS 1.4845 Welded Pipe",
          "ASME SA312 TP310S Welded Pipes",
        ],
      },
      erw: {
        title: "SS 310S ERW Pipes",
        image: erwImage,
        items: [
          "SS 1.4845 ERW Pipe",
          "UNS S31008 ERW Pipe",
          "Stainless Steel 310S ERW Pipe",
          "ASTM A312 TP310S ERW Pipe",
          "ANSI B36.10M 310S ERW Pipe",
          "SS 310S Electric Resistance Welded Pipe",
          "310S Stainless ERW Pipe",
          "ASME SA312 TP310S ERW Pipes",
        ],
      },
      efw: {
        title: "SS 310S EFW Pipes",
        image: efwImage,
        items: [
          "ASTM A312 TP310S EFW Pipe",
          "ASME SA312 TP310S EFW Pipes",
          "SS 310S EFW Pipes",
          "Stainless Steel 310S Electric Fusion Welding Pipe",
          "SS 310S EFW Pipe",
          "SS 1.4845 EFW Pipe",
          "SUS 310S EFW Pipe",
          "Stainless Steel 310S EFW Pipe",
        ],
      },
      electropolish: {
        title: "SS 310S Electropolish Pipes",
        image: electropolishImage,
        items: [
          "Stainless Steel 310S Electropolish Pipe",
          "SS 310S Electropolish Pipes",
          "310S Stainless Electropolish Pipe",
          "SS 310S Electropolish Pipe",
          "Stainless Steel 310S Polished Pipe",
          "SS 1.4845 Electropolish Pipe",
          "SS 310S Thin Wall Electropolish Pipes",
          "ASTM A312 TP310S Electropolish Pipe",
          "ANSI B36.10M 310S",
        ],
      },
      hollow: {
        title: "SS 310S Hollow Pipes",
        image: hollowImage,
        items: [
          "Stainless Steel 310S Hollow Pipe",
          "310S Stainless Hollow Pipe",
          "SS 310S Hollow Pipe",
          "UNS S31008 Hollow Pipe",
          "Stainless Steel 310S Square Hollow Pipe",
          "SS 1.4845 Hollow Pipe",
          "Stainless Steel 310S Round Hollow Pipe",
          "SS 310S Hollow Section Pipes",
          "ANSI B36.10M 310S Hollow Pipe",
          "ASME SA312 TP310S Hollow Pipes",
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
        "BS",
        "GOST",
        "AFNOR",
        "EN",
      ],
      rows: [
        [
          "SS 310S",
          "1.4845",
          "S31008",
          "SUS 310S",
          "310S31",
          "20?23?18",
          "Z12CN25?20",
          "X8CrNi25-21",
        ],
      ],
    },

    chemicalComposition: {
      headers: ["Grade", "C", "Mn", "Si", "P", "S", "Cr", "Ni"],
      rows: [
        [
          "SS 310S",
          "0.08 max",
          "2.0 max",
          "1.50 max",
          "0.045 max",
          "0.030 max",
          "24 – 26",
          "19 – 22",
        ],
      ],
    },

    mechanicalProperties: {
      headers: [
        "Grade",
        "Density",
        "Melting Point",
        "Tensile Strength",
        "Yield Strength",
        "Elongation",
      ],
      rows: [
        [
          "SS 310S",
          "7.9 g/cm³",
          "1402 °C (2555 °F)",
          "Psi – 75,000, MPa – 515",
          "Psi – 30,000, MPa – 205",
          "35%",
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
          "105.069 (157.025)",
          "10",
          "32.00 (813)",
          "-",
          "0.0312 (7.092)",
        ],
        [
          "32 (800)",
          "116.041 (173.035)",
          "-",
          "32.00 (813)",
          "-",
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
          "158.008 (235.029)",
          "-",
          "32.00 (813)",
          "-",
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
          "-",
          "32.00 (813)",
          "-",
          "0.0562 (14.027)",
        ],
        [
          "32 (800)",
          "209.062 (312.017)",
          "30",
          "32.00 (813)",
          "-",
          "0.0625 (15.088)",
        ],
        [
          "32 (800)",
          "230.029 (342.094)",
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
          "270.072 (402.094)",
          "-",
          "32.00 (813)",
          "-",
          "0.0812 (20.062)",
        ],
        [
          "32 (800)",
          "291.014 (433.052)",
          "-",
          "32.00 (813)",
          "-",
          "0.0875 (22.023)",
        ],
        [
          "32 (800)",
          "311.047 (463.078)",
          "-",
          "32.00 (813)",
          "-",
          "0.0938 (23.083)",
        ],
        [
          "32 (800)",
          "331.039 (493.035)",
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
          "371.031 (552.088)",
          "-",
          "32.00 (813)",
          "-",
          "1.0125 (28.058)",
        ],
        [
          "32 (800)",
          "391.03 (582.064)",
          "-",
          "32.00 (813)",
          "-",
          "1.0188 (30.018)",
        ],
        [
          "32 (800)",
          "410.09 (611.072)",
          "-",
          "32.00 (813)",
          "-",
          "1.025 (31.075)",
        ],
        [
          "34 (850)",
          "90.02 (134.031)",
          "-",
          "34.00 (864)",
          "-",
          "0.025 (6.035)",
        ],
        [
          "34 (850)",
          "101.029 (150.088)",
          "-",
          "34.00 (864)",
          "-",
          "0.0281 (7.014)",
        ],
        [
          "34 (850)",
          "112.036 (167.021)",
          "10",
          "34.00 (864)",
          "-",
          "0.0312 (7.092)",
        ],
        [
          "34 (850)",
          "123.077 (184.034)",
          "-",
          "34.00 (864)",
          "-",
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
        "Price in INR/MTR",
        "Price in INR/KG",
      ],
      rows: [
        [
          '1/8"',
          "6",
          "10.03",
          "SCH 10S",
          "0.027",
          "1.2",
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
          "3.4",
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
      "310S Welded Stainless Steel Pipe",
      "ASTM A312 TP310S Seamless Pipe",
      "310S Heat Resistant Steel Pipes",
      "SS 310S Mirror Polish Pipes",
      "310S SS Square Pipes Dealer",
      "Grade 310S Pipes Stockist",
      "ASME SA312 310S Cold Drawn Pipes",
      "SS 310S Hexagonal Pipes Supplier",
      "TP310S Stainless ERW Pipes",
      "310S Pipes Supplier in Mumbai",
      "SS 310S Manufacturer in India",
      "1.4845 High Temp Pipe Exporter",
      "Welded 310S Stainless Pipe",
      "310S Stainless Customized Pipes",
      "Stainless Steel 310S Oval Pipes",
      "310S Hydraulic Pipes Dealer",
      "SS 310S Pipe Cut To Size",
      "Type 310S Stainless Hollow Pipes",
      "ASTM A312 SS 310S Square Pipes",
      "310S Stainless Steel Pipe Supplier",
      "310S Decorative Pipes Supplier",
      "SS 310S Schedule 40 Pipe",
      "Stainless 310S Polished Pipe",
      "SS Industrial 310S Pipes",
      "310S Custom Pipe Fabricators",
      "SS 310S Thin Wall Pipe Stockists",
      "310S Stainless Exhaust Pipes",
      "AISI 310S Seamless Pipes Supplier",
    ],

    relatedSearches: [
      "ASTM A312 TP310S Pipe",
      "High Temperature 310S Stainless Pipe",
      "310S Pipe Price Per Kg in India",
      "SS 310S ERW Pipe Stockists",
      "ASTM A312 TP310S Seamless Pipe Dimensions",
      "Stainless Steel 310S Welded Pipe Supplier",
      "310S Stainless Steel Exhaust Pipe",
      "SS 310S Pipe Supplier in Mumbai",
      "Jindal SS 310S Pipe Price",
      "ASTM A312 TP310S UNS S31008 Pipe",
      "310S Seamless Pipe Price Per Meter",
      "AISI 310S Pipe Stockholder",
      "16 Gauge 310S Stainless Pipe",
      "Jindal SS 310S Pipe Price List",
      "310S Stainless Steel Pipe Specifications PDF",
      "SS 310S Chemical Composition",
      "SS 1.4845 Square Pipe Price",
      "SS 310S Rectangular Pipe weight chart",
      "Stainless Steel 310S Pipe Supplier in India",
      "Stainless Steel 310S Pipe Catalogue",
      "310S Stainless Steel Pipe weight calculator",
      "310S Pipe Price 20 Feet",
      "Stainless Steel 310S Pipe Per Kg",
      "Stainless Steel 310S Seamless Pipes Manufacturers",
      "310S Stainless Steel Pipe in Pune",
      "310S Stainless Steel Pipe dimensions",
      "Cost of 310S Stainless Steel Pipe",
      "SS 310S Seamless Pipe Exporter",
      "Jindal Stainless Steel 310S Pipe Price List PDF",
      "310S EFW Pipe Supplier",
      "SS 310S Pipe Pressure Rating",
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
                Raymond Ispat India's SS 310S industrial pipes are essential
                components across specialized sectors, including marine and
                aerospace industries, power plants, refineries, and chemical
                processing. They are widely utilized in heat exchangers,
                shipbuilding, and the paper and pulp industries due to their
                premium corrosion resistance in reducing environments.
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
              <SectionTitle>Stock Availability of SS 310S Pipes</SectionTitle>
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
                Specification of Stainless Steel 310S Pipes
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
                Specialized in Following Stainless Steel 310S Pipes
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
                Searches Related to Stainless Steel 310S Pipes
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

export default StainlessSteel310SPipes;
