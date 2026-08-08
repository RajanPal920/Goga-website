// src/data/productMaterials/perforatedsheet.j
import stain from "../../assets/images/stock/stainless-duplex-steel-perforated-sheets.jpg";
import car from "../../assets/images/stock/carbon-alloy-steel-perforated-sheets.jpg"
import nik  from "../../assets/images/stock/nickel-copper-alloy-perforated-sheets.jpg"
import alu from "../../assets/images/stock/aluminum-perforated-sheets.jpg"
import gal from "../../assets/images/stock/galvanized-perforated-sheets.jpg"
const perforatedsheet = [
  {
    id: 1,
    slug: "stainless-duplex-steel-perforated-sheets",
    image: stain,
    title: "Stainless & Duplex Steel Perforated Sheets",
    shortDescription:
      "SS 304, 304L, 316, 316L, 321, 347, 904L / Duplex UNS S31803, S32205, Super Duplex S32750.",
    materialGroup: "Stainless & Duplex",
    standards:
      "SS 304, 304L, 316, 316L, 321, 347, 904L, Duplex UNS S31803, S32205, Super Duplex S32750",
    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Filtration, architectural facades, acoustic panels, ventilation systems, and industrial screening",
  },
  {
    id: 2,
    slug: "carbon-alloy-steel-perforated-sheets",
    image: car,
    title: "Carbon & Alloy Steel Perforated Sheets",
    shortDescription:
      "Mild Steel C45, Structural IS 2062, Low Carbon Forged runs, Chrome-Moly High Tensile Alloy Grades.",
    materialGroup: "Carbon & Alloy",
    standards:
      "Mild Steel C45, Structural IS 2062, Low Carbon Forged runs, Chrome-Moly High Tensile Alloy Grades",
    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Structural fabrication, mining, construction, material handling, and heavy engineering",
  },
  {
    id: 3,
    slug: "nickel-copper-alloy-perforated-sheets",
    image: nik,
    title: "Nickel & Copper Steel Perforated Sheets",
    shortDescription:
      "Monel 400, Inconel 600/625, Hastelloy C276, Cupro Nickel 90/10 (C70600) and 70/30 (C71500) Alloys.",
    materialGroup: "Nickel & Copper",
    standards:
      "Monel 400, Inconel 600/625, Hastelloy C276, Cupro Nickel 90/10 (C70600), 70/30 (C71500)",
    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Marine, chemical processing, offshore, and heat exchanger applications",
  },
  {
    id: 4,
    slug: "aluminum-perforated-sheets",
    image: alu,
    title: "Aluminum Perforated Sheets",
    shortDescription:
      "Aluminium 1100 Commercial, 3003, 5052 Marine Grade, 6061-T6 High Strength Structural Configurations.",
    materialGroup: "Aluminum Structural",
    standards: "Aluminium 1100 Commercial, 3003, 5052 Marine Grade, 6061-T6",
    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Architectural cladding, decorative panels, ceilings, and ventilation systems",
  },
  {
    id: 5,
    slug: "galvanized-perforated-sheets",
    image: gal,
    title: "Galvanized Perforated Sheets",
    shortDescription:
      "Hot-Dip Galvanized Iron (HDGI), Electro-Galvanized Mild Steel Sheet Runs, Anti-Corrosive Zinc Shielding Layers.",
    materialGroup: "Galvanized Structural",
    standards: "Hot-Dip Galvanized Iron (HDGI), Electro-Galvanized Mild Steel",
    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Fencing, industrial partitions, agricultural equipment, and outdoor construction",
  },
];

export default perforatedsheet;
