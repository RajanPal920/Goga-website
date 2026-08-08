import {
  Settings,
  GaugeCircle,
  ScrollText,
  Circle,
  Cable,
  RectangleHorizontal,
  AlignHorizontalSpaceAround,
  ShieldCheck,
  Grid2X2,
  Bolt,
  Square,
  GitBranch,
  Nut,
  Disc3,
  FlaskConical,
  Waves,
  Layers,
  LayoutGrid,
  Cylinder,
  Wrench,
  Columns3,
  CircleDot,
  Milk,
  Network,
} from "lucide-react";

import flangesImg from "../assets/images/productImage/Flanges.webp";
import valvesImg from "../assets/images/productImage/valves.webp";
import coilsImg from "../assets/images/productImage/coil.webp";
import roundBarsImg from "../assets/images/productImage/rod.webp";
import wiresImg from "../assets/images/productImage/wires.webp";
import pattaPattiImg from "../assets/images/productImage/patta-patti.webp";
import stripsImg from "../assets/images/productImage/strips.webp";
import dairyPharmaValvesImg from "../assets/images/productImage/dairy-pharma-valves.webp";
import perforatedSheetImg from "../assets/images/productImage/perforated-sheet.webp";
import anchorFastenerImg from "../assets/images/productImage/anchor-fastener.webp";
import pipesImg from "../assets/images/productImage/steel-pipes.webp";
import sheetsImg from "../assets/images/productImage/sheets.webp";
import buttweldImg from "../assets/images/productImage/buttweld.webp";
import fastenersImg from "../assets/images/productImage/fastener.webp";
import ringsImg from "../assets/images/productImage/rings.webp";
import pharmaFittingsImg from "../assets/images/productImage/pharma-fittings.webp";
import hosePipeImg from "../assets/images/productImage/hose-pipe.webp";

import platesImg from "../assets/images/productImage/plates.webp";
import tubesImg from "../assets/images/productImage/tubes.webp";
import forgedFittingsImg from "../assets/images/productImage/forged-fittings.webp";
import angleChannelsImg from "../assets/images/productImage/angle-channels.webp";
import circlesImg from "../assets/images/productImage/circles.webp";
import dairyFittingsImg from "../assets/images/productImage/dairy-fittings.webp";
import wireMeshImg from "../assets/images/productImage/wire-mesh.webp";

const products = [
  {
    id: 1,
    name: "Flanges",
    slug: "flanges",
    image: flangesImg,
    icon: Settings,
    category: "Pipe Fittings",
    shortDescription:
      "Premium quality industrial flanges manufactured in Stainless Steel, Carbon Steel, Duplex and Alloy Steel.",
  },
  {
    id: 2,
    name: "Valves",
    slug: "valves",
    image: valvesImg,
    icon: GaugeCircle,
    category: "Industrial Valves",
    shortDescription:
      "Reliable industrial valves designed for high pressure and critical flow control applications.",
  },
  {
    id: 3,
    name: "Coils",
    slug: "coils",
    image: coilsImg,
    icon: ScrollText,
    category: "Flat Products",
    shortDescription:
      "High-quality stainless steel coils available in various thicknesses and finishes.",
  },
  {
    id: 4,
    name: "Rod & Round Bars",
    slug: "round-bars",
    image: roundBarsImg,
    icon: Circle,
    category: "Bars & Rods",
    shortDescription:
      "Precision engineered stainless steel and alloy round bars.",
  },
  {
    id: 5,
    name: "Wires",
    slug: "wires",
    image: wiresImg,
    icon: Cable,
    category: "Wire Products",
    shortDescription: "Industrial wires suitable for fabrication and welding.",
  },
  {
    id: 6,
    name: "Patta Patti",
    slug: "patta-patti",
    image: pattaPattiImg,
    icon: RectangleHorizontal,
    category: "Flat Products",
    shortDescription:
      "Premium stainless steel patta patti in multiple dimensions.",
  },
  {
    id: 7,
    name: "Strips",
    slug: "strips",
    image: stripsImg,
    icon: AlignHorizontalSpaceAround,
    category: "Flat Products",
    shortDescription: "Durable stainless steel strips for industrial use.",
  },
  {
    id: 8,
    name: "Dairy & Pharma Valves",
    slug: "dairy-pharma-valves",
    image: dairyPharmaValvesImg,
    icon: ShieldCheck,
    category: "Sanitary Valves",
    shortDescription:
      "Specialized valves for dairy and pharmaceutical industries.",
  },
  {
    id: 9,
    name: "Perforated Sheet",
    slug: "perforated-sheet",
    image: perforatedSheetImg,
    icon: Grid2X2,
    category: "Sheets",
    shortDescription:
      "High precision perforated sheets in various hole patterns.",
  },
  {
    id: 10,
    name: "Anchor Fastener",
    slug: "anchor-fastener",
    image: anchorFastenerImg,
    icon: Bolt,
    category: "Fasteners",
    shortDescription:
      "Heavy-duty anchor fasteners for industrial installations.",
  },
  {
    id: 11,
    name: "Pipes",
    slug: "pipes",
    image: pipesImg,
    icon: Cylinder,
    category: "Pipes & Tubes",
    shortDescription: "Seamless and welded pipes available in multiple grades.",
  },
  {
    id: 12,
    name: "Sheets",
    slug: "sheets",
    image: sheetsImg,
    icon: Square,
    category: "Flat Products",
    shortDescription: "High-performance stainless steel sheets.",
  },
  {
    id: 13,
    name: "Buttweld Fittings",
    slug: "buttweld-fittings",
    image: buttweldImg,
    icon: GitBranch,
    category: "Pipe Fittings",
    shortDescription:
      "Premium buttweld fittings manufactured to ASTM standards.",
  },
  {
    id: 14,
    name: "Fasteners",
    slug: "fasteners",
    image: fastenersImg,
    icon: Nut,
    category: "Industrial Fasteners",
    shortDescription: "Complete range of industrial fasteners.",
  },
  {
    id: 15,
    name: "Rings",
    slug: "rings",
    image: ringsImg,
    icon: Disc3,
    category: "Forged Products",
    shortDescription: "Precision forged rings.",
  },
  {
    id: 16,
    name: "Pharma Fittings",
    slug: "pharma-fittings",
    image: pharmaFittingsImg,
    icon: FlaskConical,
    category: "Sanitary Fittings",
    shortDescription: "Hygienic pharmaceutical fittings.",
  },
  {
    id: 17,
    name: "Hose Pipe",
    slug: "hose-pipe",
    image: hosePipeImg,
    icon: Waves,
    category: "Industrial Hose",
    shortDescription: "Industrial hose pipes for chemical transfer.",
  },

  {
    id: 19,
    name: "Plates",
    slug: "plates",
    image: platesImg,
    icon: LayoutGrid,
    category: "Flat Products",
    shortDescription: "Industrial plates in stainless steel and alloy steel.",
  },
  {
    id: 20,
    name: "Tubes",
    slug: "tubes",
    image: tubesImg,
    icon: Cylinder,
    category: "Pipes & Tubes",
    shortDescription: "Seamless and welded tubes.",
  },
  {
    id: 21,
    name: "Forged Fittings",
    slug: "forged-fittings",
    image: forgedFittingsImg,
    icon: Wrench,
    category: "Forged Products",
    shortDescription: "High-pressure forged fittings.",
  },
  {
    id: 22,
    name: "Angle & Channels",
    slug: "angle-channels",
    image: angleChannelsImg,
    icon: Columns3,
    category: "Structural Steel",
    shortDescription: "Structural angles and channels.",
  },
  {
    id: 23,
    name: "Circles",
    slug: "circles",
    image: circlesImg,
    icon: CircleDot,
    category: "Flat Products",
    shortDescription: "High precision stainless steel circles.",
  },
  {
    id: 24,
    name: "Dairy Fittings",
    slug: "dairy-fittings",
    image: dairyFittingsImg,
    icon: Milk,
    category: "Sanitary Fittings",
    shortDescription: "Food-grade dairy fittings.",
  },
  {
    id: 25,
    name: "Wire Mesh",
    slug: "wire-mesh",
    image: wireMeshImg,
    icon: Network,
    category: "Wire Products",
    shortDescription: "Industrial wire mesh for filtration and screening.",
  },
];

export default products;
