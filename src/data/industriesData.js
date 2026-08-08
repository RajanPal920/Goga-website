import {
  Droplet,
  Zap,
  Anchor,
  Sun,
  Activity,
  Utensils,
  Layers,
  Car,
} from "lucide-react";

import oilGas from "../assets/images/industries/oilgas.webp";
import powerPlant from "../assets/images/industries/ind-nuclear.webp";
import marine from "../assets/images/industries/ind-defense.webp";
import renewable from "../assets/images/industries/ind-renewable.webp";
import pharma from "../assets/images/industries/ind-pharma.webp";
import food from "../assets/images/industries/ind-food.webp";
import cement from "../assets/images/industries/cement.webp";
import auto from "../assets/images/industries/auto-mobile.webp";

const industriesData = [
  {
    id: 1,
    key: "Oil & Gas",
    title: "OIL & GAS",
    image: oilGas,
    icon: Droplet,
  },
  {
    id: 2,
    key: "Power Plants",
    title: "POWER PLANTS",
    image: powerPlant,
    icon: Zap,
  },
  {
    id: 3,
    key: "Marine Industry",
    title: "MARINE",
    image: marine,
    icon: Anchor,
  },
  {
    id: 4,
    key: "Renewable Energy",
    title: "RENEWABLE",
    image: renewable,
    icon: Sun,
  },
  {
    id: 5,
    key: "Pharmaceutical",
    title: "PHARMACEUTICAL",
    image: pharma,
    icon: Activity,
  },
  {
    id: 6,
    key: "Food Processing",
    title: "FOOD PROCESSING",
    image: food,
    icon: Utensils,
  },
  {
    id: 7,
    key: "Cement Plants",
    title: "CEMENT",
    image: cement,
    icon: Layers,
  },
  {
    id: 8,
    key: "Automobile",
    title: "AUTOMOBILE",
    image: auto,
    icon: Car,
  },
];

export default industriesData;
