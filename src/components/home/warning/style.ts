import { makeStyles } from "tss-react/mui";

export default makeStyles()({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    "& .content": {
      height: "60%",
    },
    "& .btn-action": {
      width: "50%",
    },
    "& .light-off": {
      position: "absolute",
      // right: "40%",
    },
    "& .light-on": {
      position: "absolute",
      // right: "40%",
    },
  },
});
