// src/data/productMaterials/anchorFastener.js
import anchorImage from "../../assets/images/productImage/anchor-fastener.webp";
import wedge from "../../assets/images/stock/wedge-anchors.jpg";
import sleeve from "../../assets/images/stock/stainless-steel-sleeve.jpg";
import drop from "../../assets/images/stock/61PlMJ5aoZL.jpg";
import shield from "../../assets/images/stock/shield-anchor.jpg";
import chem from "../../assets/images/stock/chemical-anchor.jpg";
import bolts from "../../assets/images/stock/Toggle-Bolts.jpg";
const anchorFastener = [
  {
    id: 1,
    slug: "wedge-anchors",
    image: wedge,
    title: "Wedge Anchors",
    shortDescription:
      "Carbon Steel (Zinc Plated / HDG), Stainless Steel Grade 304 (A2), Grade 316 (A4), High-Tensile Heavy Duty Run.",
    materialGroup: "Expansion Wedge",
    standards:
      "Carbon Steel (Zinc Plated / HDG), Stainless Steel Grade 304 (A2), Grade 316 (A4)",
    forms: "High-Tensile Heavy Duty Run",
    application:
      "Heavy-duty mechanical expansion shields for concrete foundations and structural engineering grids",
  },
  {
    id: 2,
    slug: "sleeve-anchors",
    image: sleeve,
    title: "Sleeve Anchors",
    shortDescription:
      "Hex Nut Style, Countersunk Flat Head, Round Acorn Nut, Carbon Steel Zinc Trivalent Passivated, Stainless Steel SS304 / SS316.",
    materialGroup: "Sleeve Expansion",
    standards:
      "Carbon Steel Zinc Trivalent Passivated, Stainless Steel SS304 / SS316",
    forms: "Hex Nut Style, Countersunk Flat Head, Round Acorn Nut",
    application:
      "Fastening into concrete, brick, and block for construction and engineering projects",
  },
  {
    id: 3,
    slug: "drop-in-anchors",
    image: drop,
    title: "Drop-In Anchors",
    shortDescription:
      "Female Thread Flush Anchors, Lip/Lipless Carbon Steel Electro-Galvanized, Stainless Steel 304, Stainless Steel 316 Standard Runs.",
    materialGroup: "Internal Threaded",
    standards:
      "Carbon Steel Electro-Galvanized, Stainless Steel 304, Stainless Steel 316",
    forms: "Female Thread Flush Anchors, Lip/Lipless",
    application:
      "Flush mounting applications in concrete providing secure internal threaded fastening",
  },
  {
    id: 4,
    slug: "shield-anchors",
    image: shield,
    title: "Shield Anchors",
    shortDescription:
      "Four-Way Segmented Expansion Shield, Loose Bolt Style, Projecting Bolt Core, Forged Carbon Steel, Zinc Dichromate Plating.",
    materialGroup: "Heavy Duty Shield",
    standards: "Forged Carbon Steel, Zinc Dichromate Plating",
    forms:
      "Four-Way Segmented Expansion Shield, Loose Bolt Style, Projecting Bolt Core",
    application:
      "Medium to heavy-duty fixing applications in brickwork, stone, and concrete structures",
  },
  {
    id: 5,
    slug: "chemical-injection-anchors",
    image: chem,
    title: "Chemical Injection Anchors",
    shortDescription:
      "Pure Epoxy Structural Resins, Vinylester Styrene-Free Systems, Polyester Injection Tubes, Mapped with ASTM Grade Stud Rods.",
    materialGroup: "Adhesive Bonded",
    standards:
      "Pure Epoxy Structural Resins, Vinylester Styrene-Free Systems, Polyester Injection Tubes, ASTM Grade Stud Rods",
    forms: "Chemical Injection Systems",
    application:
      "Superior load-bearing performance using high-strength resin systems for cracked and non-cracked concrete",
  },
  {
    id: 6,
    slug: "toggle-bolts",
    image: bolts,
    title: "Toggle Bolts",
    shortDescription:
      "Hollow Wall Spring-Wing Anchor Assemblies, Zinc Plated Mild Steel, Grade 304 Stainless Structural Threaded Machine Screws.",
    materialGroup: "Spring Wing Toggle",
    standards:
      "Zinc Plated Mild Steel, Grade 304 Stainless Structural Threaded Machine Screws",
    forms: "Spring-Wing Anchor Assemblies",
    application:
      "Secure fixing into hollow walls, plasterboards, ceilings, and lightweight partition systems",
  },
];

export default anchorFastener;
