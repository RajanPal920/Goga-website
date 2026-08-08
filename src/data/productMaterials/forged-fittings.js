// src/data/productMaterials/forgedfitting.js
import forgedfittingImage from "../../assets/images/productImage/forged-fittings.webp";
import car from "../../assets/images/stock/carbon-alloy-steel-forged-fittings.jpg"
import hast from "../../assets/images/stock/hastelloy-forged-fittings.jpg"
import inc from "../../assets/images/stock/incoloy-forged-fittings.jpg"
import mon from "../../assets/images/stock/monel-forged-fittings.jpg"
import nic from "../../assets/images/stock/nickel-copper-alloy-forged-fittings.jpg"
const forgedfitting = [
  {
    id: 1,
    slug: "carbon-alloy-steel-forged-fittings",
    image: car,
    title: "Carbon Alloy Steel Forged Fittings",
    shortDescription:
      "ASTM A105, A350 LF2, ASTM A182 F5, F11, F22, F91 Class 3000 / 6000 / 9000 High-Pressure Socket Weld & Threaded Unions.",
    materialGroup: "Carbon & Alloy Steel",
    standards: "ASTM A105, A350 LF2, ASTM A182 F5, F11, F22, F91",
    forms:
      "Class 3000 / 6000 / 9000 High-Pressure Socket Weld & Threaded Unions",
    application:
      "High-pressure piping systems, refineries, power plants, oil & gas, and heavy engineering",
  },
  {
    id: 2,
    slug: "hastelloy-forged-fittings",
    image: hast,
    title: "Hastelloy Forged Fittings",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, Alloy X Forged Crosses, Tees, and Full Couplings for Harsh Chemical Corrosive Streams.",
    materialGroup: "Hastelloy Core",
    standards: "Hastelloy C276, C22, B2, B3, Alloy X",
    forms: "Forged Crosses, Tees, and Full Couplings",
    application:
      "Highly corrosive chemicals, acids, and aggressive industrial processing environments",
  },
  {
    id: 3,
    slug: "incoloy-forged-fittings",
    image: forgedfittingImage,
    title: "Incoloy Forged Fittings",
    shortDescription:
      "Incoloy 800, 800H, 800HT, 825 Forged Swage Nipples, Street Elbows, and Hex Plugs for High-Stress Processing Lines.",
    materialGroup: "Incoloy Superalloy",
    standards: "Incoloy 800, 800H, 800HT, 825",
    forms: "Forged Swage Nipples, Street Elbows, and Hex Plugs",
    application: "Heat exchangers and process industries",
  },
  {
    id: 4,
    slug: "inconel-forged-fittings",
    image: inc,
    title: "Inconel Forged Fittings",
    shortDescription:
      "Inconel 600, 625, 718, X-750 Oxidation-Resistant Half Couplings and Socket Weld Reducing Tees for Nuclear & Aerospace Engineering.",
    materialGroup: "Inconel Core",
    standards: "Inconel 600, 625, 718, X-750",
    forms: "Oxidation-Resistant Half Couplings and Socket Weld Reducing Tees",
    application:
      "Extreme temperatures, high-pressure systems, aerospace, petrochemical, and power generation",
  },
  {
    id: 5,
    slug: "monel-forged-fittings",
    image: mon,
    title: "Monel Forged Fittings",
    shortDescription:
      "Monel 400, Monel K500 Forged Threaded Caps, Bosses, and Reducing Inserts Built for High-Salinity Marine Piping.",
    materialGroup: "Monel Alloy",
    standards: "Monel 400, Monel K500",
    forms: "Forged Threaded Caps, Bosses, and Reducing Inserts",
    application: "Seawater, acids, alkalis, and marine environments",
  },
  {
    id: 6,
    slug: "nickel-copper-alloy-forged-fittings",
    image: nic,
    title: "Nickel Copper Alloy Forged Fittings",
    shortDescription:
      "Copper-Nickel 70/30, 90/10 Forged Lateral Tees, Weldolets, and Threaded Elbows for Offshore Marine Platforms.",
    materialGroup: "Nickel Copper",
    standards: "Copper-Nickel 70/30, 90/10",
    forms: "Forged Lateral Tees, Weldolets, and Threaded Elbows",
    application:
      "Marine engineering, offshore platforms, condensers, and chemical processing",
  },
  {
    id: 7,
    slug: "stainless-duplex-steel-forged-fittings",
    image: car,
    title: "Stainless & Duplex Steel Forged Fittings",
    shortDescription:
      "ASTM A182 F304L, F316L, F321, F347, 904L / Duplex F51, F53, F60 / Super Duplex F55 Structural Branch Connections & Sockolets.",
    materialGroup: "Stainless & Duplex",
    standards:
      "ASTM A182 F304L, F316L, F321, F347, 904L, Duplex F51, F53, F60, Super Duplex F55",
    forms: "Structural Branch Connections & Sockolets",
    application:
      "Demanding industrial environments requiring corrosion resistance and high strength",
  },
  {
    id: 8,
    slug: "tantalum-forged-fittings",
    image: mon,
    title: "Tantalum Forged Fittings",
    shortDescription:
      "Pure Tantalum UNS R05200, Tantalum-Tungsten Alloys (Ta-10W, Ta-2.5W) Specialized High-Acid Chemical Process Hardware.",
    materialGroup: "Tantalum Rare Core",
    standards:
      "Pure Tantalum UNS R05200, Tantalum-Tungsten Alloys (Ta-10W, Ta-2.5W)",
    forms: "Specialized High-Acid Chemical Process Hardware",
    application:
      "Highly corrosive chemical processing applications requiring exceptional chemical resistance and purity",
  },
  {
    id: 9,
    slug: "titanium-forged-fittings",
    image: hast,
    title: "Titanium Forged Fittings",
    shortDescription:
      "ASTM B381 Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Threadolets and Socket Weld Fittings.",
    materialGroup: "Titanium Core",
    standards: "ASTM B381 Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7",
    forms: "High Strength-to-Weight Threadolets and Socket Weld Fittings",
    application: "Aerospace, marine, and chemical industries",
  },
];

export default forgedfitting;
