import { makeStyles } from "tss-react/mui";

const colorLuminance = [
  {
    color1: "#FFFFFF",
    color2: "#FCF001",
  }, // bright
  {
    color1: "#FCF001",
    color2: "#A5A416",
  }, // light
  {
    color1: "#A5A416",
    color2: "#01143F",
  }, // dark
];
export default makeStyles()({
  root: {
    transition: "background-image 0.5s ease",
  },
  bright: {
    backgroundImage: `linear-gradient(140deg,${colorLuminance[0].color1},${colorLuminance[0].color2})`,
  },
  light: {
    backgroundImage: `linear-gradient(140deg,${colorLuminance[1].color1},${colorLuminance[1].color2})`,
  },
  dark: {
    backgroundImage: `linear-gradient(140deg,${colorLuminance[2].color1},${colorLuminance[2].color2})`,
  },
});
