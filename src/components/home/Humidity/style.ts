import { makeStyles } from "tss-react/mui";

const colorLuminance = [
  {
    color1: "white",
    color2: "rgba(0, 150, 255,0.5)",
  }, // dry
  {
    color1: "rgba(0, 150, 255,0.5)",
    color2: "rgba(0, 150, 255,1)",
  }, // wet
  {
    color1: "rgba(0, 150, 255,1)",
    color2: "#007FFF",
  }, // too wet
];

export default makeStyles()({
  root: {
    backgroundImage: "linear-gradient(140deg,white,rgba(0, 150, 255,0.5))",
  },
  dry: {
    backgroundImage: `linear-gradient(140deg,${colorLuminance[0].color1},${colorLuminance[0].color2})`,
  },
  wet: {
    backgroundImage: `linear-gradient(140deg,${colorLuminance[1].color1},${colorLuminance[1].color2})`,
  },
  "too-wet": {
    backgroundImage: `linear-gradient(140deg,${colorLuminance[2].color1},${colorLuminance[2].color2})`,
  },
});
