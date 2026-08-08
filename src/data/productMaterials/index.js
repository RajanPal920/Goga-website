import anchorChannel from "./anchor-channel";
import anchorFastener from "./anchor-fastener";
import buttweldFitting from "./buttweld-fitting";
import circles from "./circles";
import coils from "./coils";
import dairyfitting from "./dairy-fitting";
import dairypharmaValves from "./dairy-pharma-valves";
import fasteners from "./fasteners";
import flanges from "./flanges";
import forgedfitting from "./forged-fittings";

import hosepipe from "./hose-pipe";
import pattapatti from "./patta-patti";
import perforatedsheet from "./perforated-sheets";
import pharmaFitting from "./pharma-fitting";
import pipes from "./pipes";
import plates from "./plates";
import rings from "./rings";
import rodBars from "./rodBars";
import sheets from "./sheets";
import strips from "./strips";
import tubes from "./tubes";
import valves from "./valves";
import wireMesh from "./wire-mesh";
import wires from "./wires";

const productMaterials = {
  coils,
  flanges,
  "round-bars": rodBars,
  strips,
  "anchor-fastener": anchorFastener,
  "buttweld-fittings": buttweldFitting,
  "pharma-fittings": pharmaFitting,
  plates,
  "angle-channels": anchorChannel,
  "wire-mesh": wireMesh,
  valves,
  wires,
  "dairy-pharma-valves": dairypharmaValves,
  pipes,
  fasteners,
  "hose-pipe": hosepipe,
  tubes,
  circles,
  "patta-patti": pattapatti,
  "perforated-sheet": perforatedsheet,
  sheets,
  rings,

  "forged-fittings": forgedfitting,
  "dairy-fittings": dairyfitting,
};

export default productMaterials;
