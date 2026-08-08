// src/data/productMaterials/wireMesh.js

import woven from "../../assets/images/stock/woven-wire-mesh.jpg"
import weld from "../../assets/images/stock/welded-wire-mesh.jpg"
import crim from "../../assets/images/stock/crimped-wire-mesh.jpg"
import chain from "../../assets/images/stock/chain-link-mesh.jpg"
import stain from "../../assets/images/stock/stainless-steel-wire-mesh.jpg"
import hex from "../../assets/images/stock/hexagonal-wire-netting.jpg"
const wireMesh = [
  {
    id: 1,
    slug: "woven-wire-mesh",
    image: woven,
    title: "Woven Wire Mesh",
    shortDescription:
      "Plain Weave, Twilled Weave, Plain Dutch Weave, Twilled Dutch Weave, Reverse Dutch Weave (1 Mesh to 635 Mesh).",
    materialGroup: "Woven Screens",
    standards:
      "Plain Weave, Twilled Weave, Plain Dutch Weave, Twilled Dutch Weave, Reverse Dutch Weave",
    forms: "1 Mesh to 635 Mesh",
    application:
      "Filtration, screening, sieving, security fencing, and industrial processing",
  },
  {
    id: 2,
    slug: "welded-wire-mesh",
    image: weld,
    title: "Welded Wire Mesh",
    shortDescription:
      "Square Openings, Rectangular Slots, Heavy-Gauge Concrete Reinforcement Sheets, Coated/Galvanized Weld Grid Rolls.",
    materialGroup: "Welded Matrix",
    standards:
      "Square Openings, Rectangular Slots, Heavy-Gauge Concrete Reinforcement Sheets",
    forms: "Coated/Galvanized Weld Grid Rolls",
    application:
      "Construction reinforcement, fencing, cages, partitions, and industrial applications",
  },
  {
    id: 3,
    slug: "crimped-wire-mesh",
    image: crim,
    title: "Crimped Wire Mesh",
    shortDescription:
      "Plain Crimped, Intermediate Crimped, Lock Crimped, Flat Top Crimped (Heavy Structural Stone & Aggregate Vibrating Screens).",
    materialGroup: "Crimped Screens",
    standards:
      "Plain Crimped, Intermediate Crimped, Lock Crimped, Flat Top Crimped",
    forms: "Heavy Structural Stone & Aggregate Vibrating Screens",
    application:
      "Mining, quarrying, stone crushing, and screening applications",
  },
  {
    id: 4,
    slug: "chain-link-mesh",
    image: chain,
    title: "Chain Link Mesh",
    shortDescription:
      "Galvanized Iron (GI), PVC Coated Core, Heavy-Duty Perimeter Fencing Coils, High-Security Enclosure Matrices, Knuckled & Twisted Edge Finishes.",
    materialGroup: "Interlocking Diamond",
    standards: "Galvanized Iron (GI), PVC Coated Core",
    forms:
      "Heavy-Duty Perimeter Fencing Coils, High-Security Enclosure Matrices, Knuckled & Twisted Edge Finishes",
    application:
      "Perimeter fencing, sports grounds, industrial security, agricultural, and residential applications",
  },
  {
    id: 5,
    slug: "stainless-steel-wire-mesh",
    image: stain,
    title: "Stainless Steel Wire Mesh",
    shortDescription:
      "SS 304, 304L, 316, 316L, 904L, High-Density Micron Filter Cloth, Fine Chemical Screening Sieve Runs, Corrosive Resistant Industrial Wire Gauzes.",
    materialGroup: "Square & Twilled Weave",
    standards: "SS 304, 304L, 316, 316L, 904L",
    forms:
      "High-Density Micron Filter Cloth, Fine Chemical Screening Sieve Runs, Corrosive Resistant Industrial Wire Gauzes",
    application:
      "Filtration, food processing, pharmaceutical, and chemical industries",
  },
  {
    id: 6,
    slug: "hexagonal-wire-netting",
    image: hex,
    title: "Hexagonal Wire Netting",
    shortDescription:
      "Normal Twist Netting, Reverse Twist, Heavy-Gauge Earth Gabion Boxes, Pipeline Thermal Insulation Wrap Mesh.",
    materialGroup: "Hexagonal Twist",
    standards: "Normal Twist Netting, Reverse Twist",
    forms:
      "Heavy-Gauge Earth Gabion Boxes, Pipeline Thermal Insulation Wrap Mesh",
    application:
      "Poultry fencing, agriculture, insulation support, gabions, and erosion control",
  },
];

export default wireMesh;
