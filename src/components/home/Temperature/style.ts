import { makeStyles } from "tss-react/mui";

const colorTemperature = [
  {
    color1: "#C90107",
    color2: "#E56A0F",
    color3: "#FCF001",
  }, // too hot
  {
    color1: "#E56A0F",
    color2: "#FCF001",
    color3: "#FEF99D",
  }, //  hot
  {
    color1: "#FCF001",
    color2: "#FEF99D",
    color3: "#FFFFFF",
  }, // warm
  // {
  //   color1: "#7DFA7C",
  //   color2: "#86CDFF",
  //   color3: "#0055A3",
  // }, // cold
  // {
  //   color1: "#86CDFF",
  //   color2: "#86CDFF",
  //   color3: "#0055A3",
  // }, // too cold
];

export default makeStyles()({
  root: {
    transition: "background-image 0.5s ease",
  },
  "too-hot": {
    backgroundImage: `linear-gradient(140deg,${colorTemperature[0].color1},${colorTemperature[0].color2},${colorTemperature[0].color3})`,
  },
  hot: {
    backgroundImage: `linear-gradient(140deg,${colorTemperature[1].color1},${colorTemperature[1].color2},${colorTemperature[1].color3})`,
  },
  warn: {
    backgroundImage: `linear-gradient(140deg,${colorTemperature[2].color1},${colorTemperature[2].color2},${colorTemperature[2].color3})`,
  },
  // cold: {
  //   backgroundImage: `linear-gradient(140deg,${colorTemperature[3].color1},${colorTemperature[3].color2},${colorTemperature[3].color3})`,
  // },
  // "too-cold": {
  //   backgroundImage: `linear-gradient(140deg,${colorTemperature[4].color1},${colorTemperature[4].color2},${colorTemperature[4].color3})`,
  // },
});
