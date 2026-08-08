import pattapattiImage from "../../assets/images/productImage/patta-patti.webp";
import carbon from "../../assets/images/stock/carbon-steel-flat-bar.jpg";
import patti from "../../assets/images/stock/patti-carbon-alloy-steel.jpg";
import stainless from "../../assets/images/stock/patti-stainless-duplex-steel.jpg";
import bar from "../../assets/images/stock/patti-stainless-stell-flat-bars.jpg";

const pattapatti = [
  {
    id: 1,
    slug: "carbon-alloy-steel-flat-bars",
    image: carbon,
    title: "Carbon Alloy Steel Flat Bars (Patta)",
    shortDescription:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045 Hot Rolled & Cold Drawn Heavy Structural Flat Bars.",
    materialGroup: "Carbon & Alloy Steel Patta",
    standards:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045",
    forms: "Hot Rolled & Cold Drawn",
    application: "Heavy Structural Flat Bars",
  },
  {
    id: 2,
    slug: "carbon-alloy-steel-patti",
    image: patti,
    title: "Carbon Alloy Steel Patti",
    shortDescription:
      "EN8, EN9, EN24, AISI 4140 Precision Slit Steel Patti Bars for Manufacturing, Tooling & Dynamic Engineering Applications.",
    materialGroup: "Carbon & Alloy Steel Patti",
    standards: "EN8, EN9, EN24, AISI 4140",
    forms: "Precision Slit",
    application: "Manufacturing, Tooling & Dynamic Engineering Applications",
  },
  {
    id: 3,
    slug: "stainless-duplex-steel-patti",
    image: stainless,
    title: "Stainless & Duplex Steel Patti",
    shortDescription:
      "Duplex UNS S31803, S32205, Super Duplex S32750, High-Alloy Corrosive Resistant Slit Patti Formats.",
    materialGroup: "Stainless & Duplex Patti",
    standards: "Duplex UNS S31803, S32205, Super Duplex S32750",
    forms: "Slit Patti Formats",
    application: "High-Alloy Corrosive Resistant Applications",
  },
  {
    id: 4,
    slug: "stainless-steel-flat-bars",
    image: bar,
    title: "Stainless Steel Flat Bars (Patta)",
    shortDescription:
      "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L Industrial Polished & Hot Rolled Patta Plates.",
    materialGroup: "Stainless Steel Patta",
    standards:
      "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L",
    forms: "Industrial Polished & Hot Rolled",
    application: "Patta Plates",
  },
];

export default pattapatti;
