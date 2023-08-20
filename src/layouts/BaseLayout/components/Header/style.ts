import { makeStyles, withStyles } from "tss-react/mui";
import Drawer from "@mui/material/Drawer";

export default makeStyles()({
  "style-header": {
    width: "100%",
    height: "var(--height-header)",
    borderBottom: "1px solid rgba(0,0,0,0.3)",
    position: "fixed",
    zIndex: "1000",
    "& ul": {
      margin: "0",
      padding: "0.5em 2em",
      "& li": {
        padding: "10px",
        "& a": {
          textDecoration: "none!important",
          color: "var(--text-main-color)",
        },
        listStyleType: "none",
      },
    },
    "& .avatar": {
      position: "absolute",
      right: "0",
      margin: "0.3em 2em",
      //   height: "4em",
      lineHeight: "4em",
    },
  },
  "style-drawer": {
    "& .MuiDrawer-paper": {
      width: "200px",
    },
    "& .drawer-title": {
      height: "var(--hei-he)",
      borderBottom: "1px solid rgba(0,0,0,0.3)",
      padding: "10px",
    },
  },
});
