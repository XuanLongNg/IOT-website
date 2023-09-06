import { keyframes } from "tss-react";
import { makeStyles } from "tss-react/mui";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
    "& .fan": {
      position: "absolute",
    },
    "& .spin": {
      animation: `${spin } 2s linear infinite`,
    }
  },
});
