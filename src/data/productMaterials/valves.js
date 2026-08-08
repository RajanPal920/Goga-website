import valveImage from "../../assets/images/productImage/valves.webp";
import stain from "../../assets/images/stock/stainless-duplex-steel-valves.jpg";
import ind from "../../assets/images/stock/industrial-valves.jpg";

const valves = [
  {
    id: 1,
    slug: "stainless-duplex-steel-valves",
    image: stain,
    title: "Stainless Steel & Duplex Steel Valves",
    shortDescription:
      "Butterfly, Check, Globe, Ball, Gate, and Safety Valves. SS 304, 304L, 316, 316L, 321, Duplex Alloys.",
    materialGroup: "Stainless & Duplex Steel",
    standards: "SMS, 3A, DIN, BS, ISO, DS, ASME BPE, Aseptic",
    forms: "Butterfly, Check, Globe, Ball, Gate, and Safety Valves",
    application:
      "Oil & Gas, Chemical Processing, Marine, Pharmaceutical, and Power Generation Industries",
  },
  {
    id: 2,
    slug: "industrial-valves",
    image: ind,
    title: "Sanitary & Industrial Valve Matrix",
    shortDescription:
      'Gate/Globe/Butterfly (Up to 25"), Ball (Up to 10"), Check (Up to 12"). Applications: Food, Dairy, Beverage, Pharma, Healthcare, Cosmetics.',
    materialGroup: "Sanitary & Industrial",
    standards: "High-Grade Stainless Steel Construction (304/316/321)",
    forms:
      'Gate, Globe, Butterfly (Up to 25"), Ball (Up to 10"), Check (Up to 12")',
    application: "Food, Dairy, Beverage, Pharma, Healthcare, Cosmetics",
  },
];

export default valves;
