// src/components/productDetails/Alloy28Pipes.jsx
import React from "react";
import { Link } from "react-router-dom";
import countries from "../../data/countries.js";
import state from "../../data/state.js";
import contact from "../../data/contact";
import "flag-icons/css/flag-icons.min.css";

// ✅ Import contact helpers
import contactHelpers from "../../utils/contactHelpers";

// Import WhatsApp and Call Icons
import WhatsAppIcon from "../../assets/images/icons/WhatsAppIcon.jsx";
import CallIcon from "../../assets/images/icons/CallIcon.jsx";

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

const Alloy28Pipes = () => {
  // ✅ Get all contact info at once
  const { phone, whatsapp, email } = contactHelpers.getContactInfo();

  // ===============================
  // DATA - Updated from raymondispat.com
  // ===============================

  const productData = {
    title: "Alloy 28 Pipes Supplier",
    subtitle:
      "Premium Quality ASTM B668 / ASME SB668 Alloy 28 Pipes – High-Alloy Austenitic Stainless Steel for Superior Corrosion Resistance in Aggressive Environments",

    technicalOverview: {
      title: "Alloy 28 Alloy Pipes: Technical Composition and Properties",
      description:
        "Alloy 28, technically designated as UNS N08028 and Werkstoff Number 1.4563, is a high-alloy austenitic stainless steel specifically developed for service in highly corrosive conditions. Its chemical composition features a high content of chromium (27%) and nickel (31%), supplemented with molybdenum (3.5%) and copper (1.0%). This precise metallurgical balance places it between standard austenitic stainless steels and high-nickel alloys, providing a cost-effective yet high-performance solution for handling aggressive chemical media.",
    },

    keyFeatures: [
      "High chromium (27%) and nickel (31%) content",
      "Molybdenum (3.5%) and copper (1.0%) additions for enhanced corrosion resistance",
      "Excellent resistance to phosphoric and sulfuric acids",
      "Outstanding resistance to chloride-ion stress corrosion cracking",
      "High Pitting Resistance Equivalent Number (PREN)",
      "Stable austenitic structure with excellent ductility",
      "Resistant to pitting and crevice corrosion",
      "Cost-effective alternative to high-nickel alloys",
    ],

    applications: [
      "Fertilizer industry (phosphoric acid production)",
      "Oil and gas sector (sour gas wells)",
      "Chemical processing (sulfuric acid, organic acids)",
      "Pollution control (scrubbers, FGD systems)",
      "Hydrometallurgy (leaching and pickling processes)",
      "Marine engineering (heat exchangers, cooling systems)",
      "Heat exchangers and piping systems",
      "Seawater and brackish water environments",
    ],

    corrosionResistance: [
      "Exceptional resistance to phosphoric and sulfuric acids",
      "Superior protection in oxidizing environments",
      "Stability in reducing acids with copper and molybdenum",
      "Resistance to 'wet process' phosphoric acid with impurities",
      "Remarkable resistance to chloride-ion stress corrosion cracking",
      "High resistance to pitting and crevice corrosion",
      "Stable in seawater and brackish water environments",
      "High PREN (Pitting Resistance Equivalent Number)",
    ],

    stockAvailability: {
      seamless: {
        title: "Seamless Pipes",
        image: seamlessImage,
        items: [
          "Alloy 28 Seamless Piping",
          "ASME SB668 Alloy 28 Seamless",
          "Alloy 28 Thin Wall Seamless",
          "ASTM B668 Alloy 28 Seamless",
          "UNS N08028 Seamless Pipe",
        ],
      },
      welded: {
        title: "Welded Pipes",
        image: weldedImage,
        items: [
          "Alloy 1.4563 Welded Pipe",
          "Alloy 28 Thin Wall Welded",
          "ASME SB668 Alloy 28 Welded",
          "Alloy Gr 28 Welded Pipe",
          "Alloy Grade 28 Welded Piping",
        ],
      },
      erw: {
        title: "ERW Pipes",
        image: erwImage,
        items: [
          "Alloy 28 Electric Resistance Welded",
          "ASTM B668 Alloy 28 ERW Pipe",
          "Alloy 1.4563 ERW Pipe Stock",
          "ASME SB668 Alloy 28 ERW",
        ],
      },
      efw: {
        title: "EFW Pipes",
        image: efwImage,
        items: [
          "UNS N08028 EFW Pipe Stock",
          "Alloy 28 Electric Fusion Welding",
          "Alloy Grade 28 EFW Pipe",
          "ASTM B668 Alloy 28 EFW Pipe",
          "Alloy 1.4563 EFW Pipe Stock",
        ],
      },
      electropolish: {
        title: "Electropolish Pipes",
        image: electropolishImage,
        items: [
          "Alloy 28 Thin Wall Electropolish",
          "Alloy 28 Polished Pipe Stock",
          "UNS N08028 Electropolish Pipe",
          "Alloy 1.4563 Electropolish Pipe",
        ],
      },
      hollow: {
        title: "Hollow Pipes",
        image: hollowImage,
        items: [
          "ASTM B668 Alloy 28 Hollow Pipe",
          "Alloy 28 Square Hollow Pipe",
          "Alloy 28 Round Hollow Pipe Stock",
          "UNS N08028 Hollow Pipe Stock",
          "ASME SB668 Alloy 28 Hollow",
        ],
      },
    },

    specifications: {
      standard: "ASTM B668 / ASME SB668",
      seamlessSize: '1/2" NB - 16" NB',
      weldedSize: '1/2" NB - 24" NB',
      efwSize: '6" NB - 24" NB',
      odRange: '6.00 mm OD to 914.4 mm OD, Sizes up to 24" available',
      scheduleRange: "SCH 5, SCH 10, SCH 40, SCH 80, SCH 160, SCH XXS, SCH XS",
      outsideFinish:
        "2B, No.4, No.1, No.8 Finish, Finish as per customer Requirements",
      deliveryCondition:
        "Annealed & Pickled, Polished, Bright Annealed, Cold Drawn",
    },

    weightChart: [
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.25 (6.35)",
        sch: "-",
        weight: "84.85 (126.032)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.281 (7.014)",
        sch: "-",
        weight: "95.28 (141.09)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.312 (7.092)",
        sch: "10",
        weight: "105.69 (157.025)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.344 (8.074)",
        sch: "-",
        weight: "116.41 (173.035)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.375 (9.053)",
        sch: "STD",
        weight: "126.78 (188.083)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.406 (10.031)",
        sch: "-",
        weight: "137.12 (204.009)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.50 (12.07)",
        sch: "20 XS",
        weight: "168.37 (250.065)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.625 (15.088)",
        sch: "30",
        weight: "209.62 (312.017)",
      },
      {
        nps: "32 (800)",
        od: "32.00 (813)",
        wt: "0.688 (17.048)",
        sch: "40",
        weight: "230.29 (342.094)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.25 (6.035)",
        sch: "-",
        weight: "90.02 (134.031)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.312 (7.092)",
        sch: "10",
        weight: "112.036 (167.021)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.375 (9.053)",
        sch: "STD",
        weight: "134.079 (200.082)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.50 (12.07)",
        sch: "20 XS",
        weight: "179.006 (266.063)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.625 (15.088)",
        sch: "30",
        weight: "222.099 (332.014)",
      },
      {
        nps: "34 (850)",
        od: "34.00 (864)",
        wt: "0.688 (17.048)",
        sch: "40",
        weight: "245.00 (364.092)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.25 (6.035)",
        sch: "-",
        weight: "95.054 (142.014)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.312 (7.092)",
        sch: "10",
        weight: "119.003 (176.097)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.375 (9.053)",
        sch: "STD",
        weight: "142.081 (212.057)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.50 (12.07)",
        sch: "20 XS",
        weight: "189.075 (282.029)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.625 (15.088)",
        sch: "30",
        weight: "236.035 (351.073)",
      },
      {
        nps: "36 (900)",
        od: "36.00 (914)",
        wt: "0.688 (17.048)",
        sch: "40",
        weight: "259.071 (386.047)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.312 (7.092)",
        sch: "-",
        weight: "125.07 (186.094)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.375 (9.053)",
        sch: "STD",
        weight: "150.083 (224.056)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.50 (12.07)",
        sch: "XS",
        weight: "200.044 (298.026)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.625 (15.088)",
        sch: "-",
        weight: "249.071 (371.07)",
      },
      {
        nps: "38 (950)",
        od: "38.00 (965)",
        wt: "0.688 (17.048)",
        sch: "-",
        weight: "274.042 (408.046)",
      },
    ],

    supplyRange: [
      {
        product: "Alloy 28 Seamless Round Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Alloy 28 Seamless Square Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "12.7 * 12.7 to 300 * 300",
      },
      {
        product: "Alloy 28 Seamless Rectangular Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "10*20 to 100*200",
      },
      {
        product: "Alloy 28 Seamless Colour Coated Pipe/Tube",
        wallThk: "0.05 to 30",
        od: "6 to 630",
      },
      {
        product: "Alloy 28 Seamless Ornamental Tubes",
        wallThk: "0.05 to 2.0",
        od: "12.7 to 76.2",
      },
      {
        product: "Alloy 28 Seamless Electropolished Pipes/Tubes",
        wallThk: "0.05 to 30",
        od: "12.7 to 250",
      },
      {
        product: "Alloy 28 Seamless Slot Round Pipe/Tube",
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
      "Alloy 28 Pipes Supplier in Mumbai",
      "Alloy 28 Pipes Manufacturer in India",
      "Alloy 1.4563 Pipe Cut To Size",
      "Alloy 28 Customized Pipes",
      "Alloy 28 Oval Pipes",
      "Alloy 28 Hydraulic Pipes Dealer",
      "ASME SB668 Alloy 28 Cold Drawn Pipes",
      "ASTM B668 Alloy 28 Pipes at Best Price",
      "Alloy 28 Hexagonal Pipes Supplier",
      "Suppliers of Alloy 28 ERW Pipes",
      "INOX 1.4563 Pipe Exporter",
      "Welded Alloy 28 Pipe Supplier",
      "UNS N08028 Pipes",
      "Alloy 28 Pipe",
      "ASTM B668 Alloy 28 Square Pipes",
      "Alloy 28 Pipe Supplier",
      "Alloy 28 Polished Pipe",
      "Alloy Grade 28 Industrial Pipes",
      "Alloy Grade 28 Pipe",
      "Large Diameter Alloy 28 pipes",
      "Alloy 1.4563 Pipes Supplier",
      "Type 28 Alloy Hollow Pipes",
      "Alloy 28 Square Pipes Dealer",
      "Alloy 28 Pipes Stockist",
      "Incoloy Alloy 28 Custom Pipe",
      "Alloy 28 Thin Wall Pipe Stockists",
      "Alloy 28 Welded Pipes Exporter",
      "Alloy 28 ERW Pipe Stockholder",
      "Alloy 28 Schedule 80 Pipe",
      "Incoloy Alloy 28 Welded Pipe",
      "Large Diameter Alloy 28 Seamless Pipe",
      "ASTM B668 Alloy Grade 28 Seamless Pipes",
    ],

    relatedSearches: [
      "Alloy 28 Pipe Dimensions",
      "Alloy 28 Threaded Pipe",
      "Cost Of Alloy 28 Pipe",
      "Alloy 28 Pipe Per Kg",
      "Alloy 28 Pipe Price Per Kg",
      "Alloy 28 Pipe Schedule",
      "Alloy 28 Seamless Pipes Supplier In India",
      "Alloy 28 Pipe Price List Pdf",
      "Alloy Pipe Grade 28 Price List",
      "ASTM B668 Alloy 28 Welded Pipe",
      "Alloy 28 Pipe Weight Chart",
      "Alloy 28 Pipe Manufacturers In India",
      "View Schedule Chart And Updated Price List Of Alloy 28 Rectangular Pipe",
      "ASME SB668 Alloy 28 Pipe",
      "3 Inch Alloy 28 Pipe Manufacturers",
      "Alloy 28 Pipes",
      "Alloy 28 Pipe Price Per Kg In India",
      "Alloy 28 Welded Pipe Exporter",
      "Alloy 28 ERW Pipe Supplier",
      "UNS N08028 Pipe",
      "Alloy 28 Pipe Weight Calculator",
      "Alloy 28 Pipe Dimensions",
      "Alloy 28 Pipe Weight Chart",
      "16 Gauge 28 Alloy Pipe",
      "28 Alloy Pipe Price List",
      "Alloy 28 Seamless Pipe Supplier",
      "Alloy 28 Pipe Sizes",
      "Alloy 28 Pipe Chemical Composition",
      "ASTM B668 Alloy 28 Seamless Pipe",
      "Alloy 1.4563 Square Pipe Suppliers In Gujarat",
      "Alloy 28 Pipe Price List",
      "Alloy 28 EFW Pipe Supplier",
      "Alloy 28 Pipe Specifications Pdf",
      "AISI 28 Seamless Pipe Stockist",
      "ASTM B668 Alloy 28 Pipe",
      "Large Diameter Alloy 28 Pipes Exporter",
      "Alloy Pipe 28 Specifications",
      "Alloy 28 Pipe Roughness",
      "Alloy 28 Pipe Price",
      "Alloy 28 Pipe Catalogue",
      "Alloy 28 Pipe Price Per Meter",
      "Alloy 28 Seamless Pipes Exporter",
      "Price Of Alloy Pipe 28",
      "Alloy 28 EFW Pipe Supplier",
      "Alloy 28 Pipe Supplier In Mumbai",
      "Alloy 28 Seamless Pipe Exporter",
      "Alloy 28 Pipe Price List",
      "Alloy Grade 28 Pipe Price List In India",
      "Alloy 28 Pipe Price In India",
      "ASTM B668 Alloy 28 Pipes",
      "Buy Alloy 28 Pipe Welded Schedule 40",
      "Alloy 28 Pipe Supplier In India",
      "Top 100 Alloy 28 Pipe Dealers In Pune",
      "Alloy 28 Welded Pipe Supplier",
      "Alloy 28 Pipe In Pune",
      "Alloy 28 Pipe Weight Per Meter",
      "Incoloy Alloy 28 ERW Pipe Supplier",
      "Alloy 28 Pipe Price Per Kg In India",
      "Alloy 28 Pipe Price 20 Feet",
      "Incoloy Alloy 28 Pipe Pressure Rating",
      "Alloy Grade 28 Pipes Manufacturer In Mumbai",
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

            {/* Corrosion Resistance */}
            <section className="mb-8">
              <SectionTitle>
                Corrosion Resistance and Acidic Durability
              </SectionTitle>
              <p className="text-gray-700 leading-relaxed mb-4">
                The standout feature of Alloy 28 pipes is their exceptional
                resistance to phosphoric and sulfuric acids. Originally
                developed for the fertilizer industry, the alloy's high chromium
                content provides superior protection in oxidizing environments,
                while the addition of copper and molybdenum enhances its
                stability in reducing acids. It is particularly effective in
                resisting the highly corrosive "wet process" phosphoric acid,
                which often contains high levels of impurities like fluorides
                and chlorides.
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
                Due to their specialized resistance to aggressive process
                chemicals, Alloy 28 pipes are essential across several
                heavy-duty industrial sectors. In the fertilizer industry, they
                are the primary choice for heat exchangers and piping systems
                used in the production of phosphoric acid. The oil and gas
                sector relies on these pipes for deep-hole tubing in sour gas
                wells, where high concentrations of hydrogen sulfide and carbon
                dioxide are present.
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
              <SectionTitle>Specification of Alloy 28 Pipes</SectionTitle>
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
              <SectionTitle>Stock Availability of Alloy 28 Pipes</SectionTitle>
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
              <SectionTitle>Alloy 28 Seamless Pipe Weight Chart</SectionTitle>
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

            {/* Supply Range */}
            <section className="mb-8">
              <SectionTitle>Alloy 28 Pipe Supply Range</SectionTitle>
              <Table
                headers={[
                  "Product Description",
                  "Wall Thickness, WT (mm)",
                  "Outside Diameter, OD (mm)",
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
              <SectionTitle>Alloy 28 Pipe Price Range</SectionTitle>
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
                Specialized in Following Alloy 28 Pipes
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
              <SectionTitle>Searches Related to Alloy 28 Pipes</SectionTitle>
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

            {/* Get A Quote - ✅ UPDATED with email variable */}
            <div className="bg-[#173F52] rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Get A Quote
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Email us for a quote or contact us for more information.
              </p>
              <a
                href={`mailto:${email}`}
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
      {/* FLOATING WHATSAPP & CALL BUTTONS - ✅ UPDATED */}
      {/* =============================== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7 text-white" />
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phone}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg hover:scale-110 transition duration-300 hover:shadow-xl"
          aria-label="Call us"
        >
          <CallIcon className="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Alloy28Pipes;
