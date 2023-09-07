import { makeStyles, withStyles } from "tss-react/mui";
import Drawer from "@mui/material/Drawer";

export default makeStyles()({
  "style-header": {
    width: "100%",
    height: "var(--height-header)",
    position: "fixed",
    zIndex: "1000",
    backgroundColor: "white",
    transition:
      "background-color 0.5s ease, box-shadow 0.5s ease, border-bottom 0.5s ease",
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
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      transition: "all 0.5s ease",
      "&:hover": {
        scale: "1.1",
      },
    },
  },
  "style-drawer": {
    "& .MuiDrawer-paper": {
      width: "20vw",
      minWidth: "200px",
    },
    "& .drawer-title": {
      height: "var(--height-header)",
      borderBottom: "1px solid rgba(0,0,0,0.3)",
      padding: "0.5em 2em 0.5em 2em",
      "& h2": {
        fontSize: "1.5em",
        margin: "0",
      },
      "& svg": {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    "& ul": {
      height: "100%",
      margin: 0,
      listStyle: "none !important",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 0,
      "& a": {
        margin: "0",
        padding: "0",
        textDecoration: "none",
        "& li": {
          margin: "0.5em 0.5em",
          padding: "0.25em 1em",
          borderRadius: "3px",
          color: "black",
          // fontSize: "1.4rem",
          lineHeight: "33px",
          transition: "0.3s",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "1.2em",
          "&:hover": {
            // color: "rgba(255,255,255,1)",
            backgroundColor: "rgba(124,124,124,0.1)",
          },
        },
      },
    },
  },
  "is-scroller": {
    backgroundColor: "rgba(255,255,255,0.8)!important",
    boxShadow:
      "0 8px 8px 0 rgba(103, 151, 255, 0.3), 0 12px 18px 0 rgba(103, 151, 255, 0.3)",
    borderBottom: "1px solid #f4f4f4 !important",
  },
});
