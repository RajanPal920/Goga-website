// src/data/productMaterials/circles.js

import stain from "../../assets/images/stock/stainless-steel-circles.jpg"
import mach from "../../assets/images/stock/machined-forged-circles.jpg"
import ind from "../../assets/images/stock/specialty-industrial-circles.jpg"
const circles = [
  {
    id: 1,
    slug: "stainless-steel-circles",
    image: stain,
    title: "Stainless Steel Circles",
    shortDescription:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L, Dual Certified Alloys.",
    materialGroup: "Stainless Disks",
    standards:
      "ASTM A240 / A480 Gr 304, 304L, 316, 316L, 310S, 317L, 321, 347, 904L",
    forms: "Dual Certified Alloys",
    application:
      "Pressure vessels, cookware, fabrication, and engineering applications",
  },
  {
    id: 2,
    slug: "machined-forged-circles",
    image: mach,
    title: "Machined & Forged Circles",
    shortDescription:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340, Seamless Blind Flange Blocks & Dynamic Rotating Discs.",
    materialGroup: "Heavy Duty Disks",
    standards:
      "ASTM A105, A350 LF2 Class 1/2, Carbon Steel C45, Alloy Steel SAE 4140/4340",
    forms: "Seamless Blind Flange Blocks, Dynamic Rotating Discs",
    application: "Flanges, rings, heavy engineering, and industrial equipment",
  },
  {
    id: 3,
    slug: "specialty-industrial-circles",
    image: ind,
    title: "Specialty Industrial Circles",
    shortDescription:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5.",
    materialGroup: "High Alloy Disks",
    standards:
      "Monel 400/K500, Inconel 600/625/718, Hastelloy C276, Duplex F51/UNS S31803, Super Duplex S32750, Titanium Grade 2/5",
    forms: "High Alloy Disks",
    application: "Demanding industrial applications across various industries",
  },
];

export default circles;
