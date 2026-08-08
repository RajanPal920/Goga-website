// src/data/productMaterials/strips.js
import stripeImage from "../../assets/images/productImage/strips.webp";
import stain from "../../assets/images/stock/stainless-steel-strips.jpg";
import nik from "../../assets/images/stock/nickel-alloy-strips.jpg";
import duplex from "../../assets/images/stock/Carbon-Steel-Strips.jpg";
const strips = [
  {
    id: 1,
    slug: "stainless-steel-strips",
    image: stain,
    title: "Stainless Steel Strips",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 317L, 321, 347, 430, 904L, Cold-Rolled Precision Slit Coils.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 317L, 321, 347, 430, 904L",
    forms: "Cold-Rolled Precision Slit Coils",
    application:
      "Premium narrow-width slitted coils, cold-rolled foil strips, and precision-engineered metal ribbon runs",
  },
  {
    id: 2,
    slug: "nickel-high-alloy-strips",
    image: nik,
    title: "Nickel & High Alloy Strips",
    shortDescription:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Carpenter Alloy 20 (UNS N08020).",
    materialGroup: "High Alloy Core",
    standards:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Carpenter Alloy 20 (UNS N08020)",
    forms: "Precision Slit Coils, Cold-Rolled Foil Strips",
    application: "Chemical, Aerospace, and Marine Industries",
  },
  {
    id: 3,
    slug: "duplex-precision-carbon-strips",
    image: duplex,
    title: "Duplex & Precision Carbon Strips",
    shortDescription:
      "Duplex UNS S31803 / S32205, Super Duplex S32750, High Carbon Spring Steel C67 / C75 / EN42J, Low Carbon Deep Draw Shims.",
    materialGroup: "Specialized Matrix",
    standards:
      "Duplex UNS S31803 / S32205, Super Duplex S32750, High Carbon Spring Steel C67 / C75 / EN42J, Low Carbon Deep Draw Shims",
    forms: "Precision Slit Coils, Deep Draw Shims",
    application:
      "High Strength, Dimensional Accuracy, Engineering & Manufacturing Applications",
  },
];

export default strips;
