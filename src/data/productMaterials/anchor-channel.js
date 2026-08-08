// src/data/productMaterials/anchorChannel.js
import channelImage from "../../assets/images/productImage/angle-channels.webp";
import regular from "../../assets/images/stock/regular-angle.jpg"
import channel from "../../assets/images/stock/regular-channel.jpg"
import carbon from "../../assets/images/stock/carbon-angle-channel.jpg"
const anchorChannel = [
  {
    id: 1,
    slug: "regular-angle",
    image: regular,
    title: "Regular Angle",
    shortDescription:
      "ASTM A36, IS 2062 Gr E250 / E350, SS 304/304L, SS 316/316L, Hot-Rolled L-Shape Structural Profiles.",
    materialGroup: "Equal & Unequal",
    standards: "ASTM A36, IS 2062 Gr E250 / E350, SS 304/304L, SS 316/316L",
    forms: "Hot-Rolled L-Shape Structural Profiles",
    application:
      "Structural fabrication, construction, industrial frameworks, and support systems",
  },
  {
    id: 2,
    slug: "regular-channel",
    image: channel,
    title: "Regular Channel",
    shortDescription:
      "IS 808 Standard, ASTM A36, ASME SA36, Stainless Steel 304, 316, Tapered Flange, Parallel Flange Iron Sections.",
    materialGroup: "C & U Channels",
    standards: "IS 808 Standard, ASTM A36, ASME SA36, Stainless Steel 304, 316",
    forms: "Tapered Flange, Parallel Flange Iron Sections",
    application:
      "Heavy-duty structural support, machinery frames, and industrial fabrication",
  },
  {
    id: 3,
    slug: "carbon-angle-channel",
    image: carbon,
    title: "Carbon Steel Angle & Channel",
    shortDescription:
      "ASTM A572 Gr 50 / Gr 60, A529, IS 2062 E250A/B, High-Yield Carbon Steel Structural Conduits & Framework Sections.",
    materialGroup: "Carbon Steel Deck",
    standards: "ASTM A572 Gr 50 / Gr 60, A529, IS 2062 E250A/B",
    forms: "High-Yield Carbon Steel Structural Conduits & Framework Sections",
    application: "Construction, infrastructure, and engineering industries",
  },
];

export default anchorChannel;
