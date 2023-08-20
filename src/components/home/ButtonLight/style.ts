import { makeStyles } from "tss-react/mui";

export default makeStyles()({
  root: {
    width: "100%",
    height: "100%",
    "& .content": {
      height: "60%",
    },
    "& .btn-action": {
      width: "50%",
    },
  },
});
