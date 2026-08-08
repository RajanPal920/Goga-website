import pipeImage from "../../assets/images/productImage/pipes.webp";
import high from "../../assets/images/stock/high-performance-alloy-pipes.jpg";
import stain from "../../assets/images/stock/stainless-steel-316-316l-pipes.jpg";
import tita from "../../assets/images/stock/titanium-pipes.jpg";
import ally28 from "../../assets/images/stock/alloy-28-pipes.jpg";
import ally20 from "../../assets/images/stock/alloy-20-pipes.jpg";
import smo from "../../assets/images/stock/smo-254-pipes.jpg";
import nic200 from "../../assets/images/stock/nickel-alloy-200-201-pipes.jpg";
import nic from "../../assets/images/stock/nickel-alloy-pipes.jpg";
import mon400 from "../../assets/images/stock/monel-400-pipes.jpg";
import inc750 from "../../assets/images/stock/inconel-x750-pipes.jpg";
import stain1 from "../../assets/images/stock/stainless-steel-310s-pipes.jpg";
import cop from "../../assets/images/stock/copper-nickel-pipes.jpg"
import dup from "../../assets/images/stock/duplex-super-duplex-pipes.jpg"
const pipes = [
  {
    id: 1,
    slug: "high-performance-alloy-pipes",
    image: high,
    title:
      "High-Performance Alloy Pipes Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    shortDescription:
      "High-performance alloy pipes engineered for extreme temperatures, aerospace, petrochemical, and critical industrial applications.",
  },

  {
    id: 2,
    slug: "stainless-steel-316-316l-pipes",
    image: stain,
    title: "Stainless Steel 316 / 316L Pipes Supplier",
    shortDescription:
      "Premium Stainless Steel 304 and 304L pipes offering excellent corrosion resistance for food processing, chemical, and engineering industries.",
  },

  {
    id: 3,
    slug: "titanium-pipes",
    image: tita,
    title: "Titanium Pipes Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Lightweight titanium pipes with exceptional corrosion resistance for marine, aerospace, and chemical processing industries.",
  },

  {
    id: 4,
    slug: "stainless-duplex-steel-pipes",
    image: stain,
    title: "Stainless Steel & Duplex Steel Pipes",
    shortDescription:
      "Stainless Steel and Duplex Steel pipes manufactured for high-pressure, corrosion-resistant industrial piping systems.",
  },

  {
    id: 5,
    slug: "alloy-28-pipes",
    image: ally28,
    title: "Alloy 28 Pipes Supplier",
    shortDescription:
      "Alloy 28 pipes designed to resist pitting, crevice corrosion, and aggressive chemical environments.",
  },

  {
    id: 6,
    slug: "alloy-20-pipes",
    image: ally20,
    title: "Alloy 20 Pipes Supplier",
    shortDescription:
      "Alloy 20 pipes offering outstanding resistance to sulfuric acid and chemical processing environments.",
  },

  {
    id: 7,
    slug: "smo-254-pipes",
    image: smo,
    title: "SMO 254 Pipes Supplier",
    shortDescription:
      "SMO 254 pipes providing superior resistance to chloride attack, seawater, and offshore environments.",
  },

  {
    id: 8,
    slug: "nickel-alloy-200-201-pipes",
    image: nic200,
    title: "Nickel Alloy 200 / 201 Pipes Supplier",
    shortDescription:
      "Nickel Alloy 200 and 201 pipes with excellent corrosion resistance and high thermal conductivity.",
  },

  {
    id: 9,
    slug: "nickel-alloy-pipes",
    image: nic,
    title: "Nickel Alloy Pipes Supplier",
    shortDescription:
      "Premium nickel alloy pipes suitable for chemical processing, marine, and power generation industries.",
  },

  {
    id: 10,
    slug: "monel-400-pipes",
    image: mon400,
    title: "Monel 400 Pipes Supplier",
    shortDescription:
      "Monel 400 pipes providing outstanding resistance to seawater, acids, and alkaline environments.",
  },

  {
    id: 11,
    slug: "monel-pipes",
    image: mon400,
    title: "Monel Pipes Supplier",
    shortDescription:
      "High-quality Monel alloy pipes designed for marine, offshore, and chemical processing applications.",
  },

  {
    id: 12,
    slug: "inconel-x750-pipes",
    image: inc750,
    title: "Inconel X-750 Pipes Supplier",
    shortDescription:
      "Inconel X-750 pipes offering exceptional oxidation resistance and high-temperature strength.",
  },

  {
    id: 13,
    slug: "inconel-718-pipes",
    image: mon400,
    title: "Inconel 718 Pipes Supplier",
    shortDescription:
      "High-strength Inconel 718 pipes engineered for aerospace, turbines, and critical industrial systems.",
  },

  {
    id: 14,
    slug: "inconel-690-pipes",
    image: dup,
    title: "Inconel 690 Pipes Supplier",
    shortDescription:
      "Inconel 690 pipes offering excellent resistance to oxidation, corrosion, and high-temperature environments.",
  },

  {
    id: 15,
    slug: "inconel-625-pipes",
    image: tita,
    title: "Inconel 625 Pipes Supplier",
    shortDescription:
      "Inconel 625 pipes providing superior corrosion resistance and exceptional mechanical strength.",
  },

  {
    id: 16,
    slug: "inconel-601-pipes",
    image: inc750,
    title: "Inconel 601 Pipes Supplier",
    shortDescription:
      "Inconel 601 pipes engineered for high-temperature oxidation resistance and furnace applications.",
  },

  {
    id: 17,
    slug: "inconel-600-pipes",
    image: nic,
    title: "Inconel 600 Pipes Supplier",
    shortDescription:
      "Inconel 600 pipes suitable for heat treatment, chemical processing, and nuclear engineering.",
  },

  {
    id: 18,
    slug: "inconel-pipes",
    image: nic200,
    title: "Inconel Pipes Supplier",
    shortDescription:
      "Premium Inconel alloy pipes for high-temperature and corrosive industrial environments.",
  },

  {
    id: 19,
    slug: "incoloy-825-pipes",
    image: inc750,
    title: "Incoloy 825 Pipes Supplier",
    shortDescription:
      "Incoloy 825 pipes offering excellent resistance to reducing and oxidizing acids.",
  },

  {
    id: 20,
    slug: "incoloy-800h-800ht-pipes",
    image: stain1,
    title: "Incoloy 800H / 800HT Pipes Supplier",
    shortDescription:
      "Incoloy 800H and 800HT pipes designed for elevated-temperature industrial applications.",
  },

  {
    id: 21,
    slug: "incoloy-800-ds330-pipes",
    image: stain,
    title: "Incoloy 800 (DS 330) Pipes Supplier",
    shortDescription:
      "Heat-resistant Incoloy 800 pipes widely used in petrochemical and furnace industries.",
  },

  {
    id: 22,
    slug: "incoloy-pipes",
    image: inc750,
    title: "Incoloy Pipes Supplier",
    shortDescription:
      "Premium Incoloy alloy pipes with superior corrosion resistance and high mechanical strength.",
  },

  {
    id: 23,
    slug: "stainless-steel-pipes",
    image: stain1,
    title: "Stainless Steel Pipes Supplier",
    shortDescription:
      "Complete range of stainless steel pipes available in multiple grades, sizes, schedules, and finishes.",
  },

  {
    id: 24,
    slug: "hastelloy-c2000-c59-c4-hn-pipes",
    image: mon400,
    title: "Hastelloy C2000 / C59 / C4 / HN Pipes Supplier",
    shortDescription:
      "Premium Hastelloy pipes designed for highly corrosive chemical processing environments.",
  },

  {
    id: 25,
    slug: "hastelloy-b3-pipes",
    image: inc750,
    title: "Hastelloy B3 Pipes Supplier",
    shortDescription:
      "Hastelloy B3 pipes providing outstanding resistance to hydrochloric acid and reducing environments.",
  },

  {
    id: 26,
    slug: "hastelloy-b2-pipes",
    image: smo,
    title: "Hastelloy B2 Pipes Supplier",
    shortDescription:
      "Hastelloy B2 pipes manufactured for severe chemical processing and acid handling applications.",
  },

  {
    id: 27,
    slug: "hastelloy-c22-pipes",
    image: inc750,
    title: "Hastelloy C22 Pipes Supplier",
    shortDescription:
      "Hastelloy C22 pipes offering excellent resistance against oxidizing and reducing chemicals.",
  },

  {
    id: 28,
    slug: "hastelloy-c276-pipes",
    image: ally28,
    title: "Hastelloy C276 Pipes Supplier",
    shortDescription:
      "Hastelloy C276 pipes providing superior corrosion resistance in aggressive industrial environments.",
  },

  {
    id: 29,
    slug: "hastelloy-pipes",
    image: ally20,
    title: "Hastelloy Pipes Supplier",
    shortDescription:
      "Complete range of Hastelloy pipes for chemical, marine, and pollution control industries.",
  },

  {
    id: 30,
    slug: "super-duplex-s32760-pipes",
    image: smo,
    title: "Super Duplex Steel UNS S32760 F55 Pipes Supplier",
    shortDescription:
      "Super Duplex S32760 pipes offering superior strength and exceptional corrosion resistance.",
  },

  {
    id: 31,
    slug: "super-duplex-s32750-pipes",
    image: nic,
    title: "Super Duplex Steel UNS S32750 F53 Pipes Supplier",
    shortDescription:
      "High-strength Super Duplex S32750 pipes for offshore and marine industries.",
  },

  {
    id: 32,
    slug: "duplex-s31803-s32205-pipes",
    image: dup,
    title: "Duplex Steel UNS S31803 / S32205 Pipes Supplier",
    shortDescription:
      "Duplex steel pipes combining excellent corrosion resistance with high mechanical strength.",
  },

  {
    id: 33,
    slug: "duplex-super-duplex-pipes",
    image: dup,
    title: "Duplex / Super Duplex Steel Pipes Supplier",
    shortDescription:
      "Premium Duplex and Super Duplex steel pipes for offshore, oil & gas, and chemical industries.",
  },

  {
    id: 34,
    slug: "copper-nickel-90-10-pipes",
    image: cop,
    title: "Copper Nickel 90/10 Pipes Supplier",
    shortDescription:
      "Copper Nickel 90/10 pipes widely used in marine, desalination, and condenser systems.",
  },

  {
    id: 35,
    slug: "copper-nickel-70-30-pipes",
    image: cop,
    title: "Copper Nickel 70/30 Pipes Supplier",
    shortDescription:
      "Copper Nickel 70/30 pipes offering excellent seawater corrosion resistance.",
  },

  {
    id: 36,
    slug: "copper-nickel-pipes",
    image: cop,
    title: "Copper Nickel Pipes Supplier",
    shortDescription:
      "Premium Copper Nickel pipes for marine engineering, shipbuilding, and heat exchanger applications.",
  },

  {
    id: 37,
    slug: "stainless-steel-904l-pipes",
    image: stain,
    title: "Stainless Steel 904L Pipes Supplier",
    shortDescription:
      "High-alloy Stainless Steel 904L pipes designed for highly corrosive chemical environments.",
  },

  {
    id: 38,
    slug: "stainless-steel-321-pipes",
    image: stain1,
    title: "Stainless Steel 321 Pipes Supplier",
    shortDescription:
      "Titanium-stabilized Stainless Steel 321 pipes suitable for high-temperature applications.",
  },

  {
    id: 39,
    slug: "stainless-steel-317l-pipes",
    image: stain,
    title: "Stainless Steel 317L Pipes Supplier",
    shortDescription:
      "Stainless Steel 317L pipes providing superior resistance to pitting and crevice corrosion.",
  },

  {
    id: 40,
    slug: "stainless-steel-310s-pipes",
    image: stain1,
    title: "Stainless Steel 310S Pipes Supplier",
    shortDescription:
      "Heat-resistant Stainless Steel 310S pipes designed for furnace and high-temperature applications.",
  },
];

export default pipes;
