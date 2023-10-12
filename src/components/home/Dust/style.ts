import { makeStyles } from "tss-react/mui";

const colorDust = [
  {
    color1: "rgba(0,0,0,1)",
    color2: "rgba(0,0,0,0.5)",
  }, // dry
  {
    color1: "rgba(0,0,0,0.5)",
    color2: "rgba(0,0,0,0.2)",
  }, // wet
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
  dust: {
    color: "white",
    backgroundImage: `linear-gradient(140deg,${colorDust[0].color1},${colorDust[0].color2})`,
  },
  clear: {
    backgroundImage: `linear-gradient(140deg,${colorDust[1].color1},${colorDust[1].color2})`,
  },
  warning1: {
    color: `${colorDust[2].color}`,
    backgroundColor: `${colorDust[2].backgroundColor}!important`,
    backgroundImage: `none`,
  },
  warning2: {
    color: `${colorDust[3].color}`,
    backgroundColor: `${colorDust[3].backgroundColor}!important`,
    backgroundImage: `none`,
  },
});
