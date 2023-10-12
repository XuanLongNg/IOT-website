import { makeStyles } from "tss-react/mui";

const colorHumidity = [
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
  {
    color: "red",
    backgroundColor: "white",
  },
  {
    color: "white",
    backgroundColor: "red",
  },
];

export default makeStyles()({
  root: {
    backgroundImage: "linear-gradient(140deg,white,rgba(0, 150, 255,0.5))",
  },
  dry: {
    backgroundImage: `linear-gradient(140deg,${colorHumidity[0].color1},${colorHumidity[0].color2})`,
  },
  wet: {
    backgroundImage: `linear-gradient(140deg,${colorHumidity[1].color1},${colorHumidity[1].color2})`,
  },
  "too-wet": {
    backgroundImage: `linear-gradient(140deg,${colorHumidity[2].color1},${colorHumidity[2].color2})`,
  },
  warning1: {
    color: `${colorHumidity[3].color}`,
    backgroundColor: `${colorHumidity[3].backgroundColor}!important`,
    backgroundImage: `none`,
  },
  warning2: {
    color: `${colorHumidity[4].color}`,
    backgroundColor: `${colorHumidity[4].backgroundColor}!important`,
    backgroundImage: `none`,
  },
});
