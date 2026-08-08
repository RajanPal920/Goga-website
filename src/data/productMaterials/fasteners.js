// src/data/productMaterials/fasteners.js

import carbon from "../../assets/images/stock/carbon-alloy-steel-fasteners.jpg";
import hast from "../../assets/images/stock/hastelloy-fasteners.jpg";
import loy from "../../assets/images/stock/incoloy-fasteners.jpg";
import inco from "../../assets/images/stock/inconel-fasteners.jpg";
import mon from "../../assets/images/stock/monel-fasteners.jpg";
import nic from "../../assets/images/stock/nickel-copper-alloy-fasteners.jpg";
import tita from "../../assets/images/stock/titanium-fasteners.jpg";
import stain from "../../assets/images/stock/stainless-duplex-steel-fasteners.jpg";
const fasteners = [
  {
    id: 1,
    slug: "carbon-alloy-steel-fasteners",
    image: carbon,
    title: "Carbon Alloy Steel Fasteners",
    shortDescription:
      "ASTM A193 B7, B7M, ASTM A320 L7, Grade 4.8, 8.8, 10.9, 12.9 High-Tensile Structural Anchor Runs.",
    materialGroup: "Carbon & Alloy Steel",
    standards: "ASTM A193 B7, B7M, ASTM A320 L7, Grade 4.8, 8.8, 10.9, 12.9",
    forms: "High-Tensile Structural Anchor Runs",
    application:
      "Heavy engineering, structural steel, power plants, and industrial piping",
  },
  {
    id: 2,
    slug: "hastelloy-fasteners",
    image: hast,
    title: "Hastelloy Fasteners",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, Alloy X Hex Bolts, Studs, and Washers for Petrochemical Refineries.",
    materialGroup: "Hastelloy Core",
    standards: "Hastelloy C276, C22, B2, B3, Alloy X",
    forms: "Hex Bolts, Studs, and Washers",
    application:
      "Chemical processing, offshore, and aggressive industrial environments",
  },
  {
    id: 3,
    slug: "incoloy-fasteners",
    image: loy,
    title: "Incoloy Fasteners",
    shortDescription:
      "Incoloy 800, 800H, 800HT, 825 Threaded Rods, Hex Nuts, and Custom Machine Screws.",
    materialGroup: "Incoloy Superalloy",
    standards: "Incoloy 800, 800H, 800HT, 825",
    forms: "Threaded Rods, Hex Nuts, Custom Machine Screws",
    application:
      "High-temperature, power generation, and petrochemical applications",
  },
  {
    id: 4,
    slug: "inconel-fasteners",
    image: inco,
    title: "Inconel Fasteners",
    shortDescription:
      "Inconel 600, 625, 718, X-750 Corrosive High-Temperature Engine Clamping Solutions.",
    materialGroup: "Inconel Core",
    standards: "Inconel 600, 625, 718, X-750",
    forms: "Engine Clamping Solutions",
    application:
      "Aerospace, furnace equipment, turbines, and extreme industrial environments",
  },
  {
    id: 5,
    slug: "monel-fasteners",
    image: mon,
    title: "Monel Fasteners",
    shortDescription:
      "Monel 400, Monel K500 Sea-Water Impervious Heavy Structural Washers and Marine Fastenings.",
    materialGroup: "Monel Alloy",
    standards: "Monel 400, Monel K500",
    forms: "Heavy Structural Washers and Marine Fastenings",
    application:
      "Superior resistance to seawater, acids, alkalis, and marine corrosion",
  },
  {
    id: 6,
    slug: "nickel-copper-alloy-fasteners",
    image: nic,
    title: "Nickel Copper Alloy Fasteners",
    shortDescription:
      "Copper-Nickel 70/30, 90/10 Alloys, Precision High-Conductivity Sub-Sea Structural Mount Hardware.",
    materialGroup: "Nickel Copper",
    standards: "Copper-Nickel 70/30, 90/10 Alloys",
    forms: "Precision High-Conductivity Sub-Sea Structural Mount Hardware",
    application:
      "Marine engineering, desalination plants, offshore structures, and chemical industries",
  },
  {
    id: 7,
    slug: "stainless-duplex-steel-fasteners",
    image: stain,
    title: "Stainless & Duplex Steel Fasteners",
    shortDescription:
      "A2-70, A4-80, SS 304, 316L, 317L, 321, 904L / Duplex UNS S31803, S32205 / Super Duplex S32750 Heavy-Lock Fastenings.",
    materialGroup: "Stainless & Duplex",
    standards:
      "A2-70, A4-80, SS 304, 316L, 317L, 321, 904L, Duplex UNS S31803, S32205, Super Duplex S32750",
    forms: "Heavy-Lock Fastenings",
    application:
      "Marine, petrochemical, food processing, and construction industries",
  },
  {
    id: 8,
    slug: "titanium-fasteners",
    image: tita,
    title: "Titanium Fasteners",
    shortDescription:
      "Titanium Grade 1, Grade 2, Grade 5 (Ti-6Al-4V), Grade 7 Ultra-Lightweight Aero-Space Clamping Elements.",
    materialGroup: "Titanium Core",
    standards: "Titanium Grade 1, Grade 2, Grade 5 (Ti-6Al-4V), Grade 7",
    forms: "Ultra-Lightweight Aero-Space Clamping Elements",
    application: "Aerospace, marine, and medical industries",
  },
];

export default fasteners;
